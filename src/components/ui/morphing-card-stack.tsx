"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Grid3X3, Layers, LayoutList } from "lucide-react"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
    id: string
    title: string
    description: string
    icon?: ReactNode
    color?: string
    link?: string
    tags?: string[]
}

export interface MorphingCardStackProps {
    cards?: CardData[]
    className?: string
    defaultLayout?: LayoutMode
    onCardClick?: (card: CardData) => void
}

const layoutIcons = {
    stack: Layers,
    grid: Grid3X3,
    list: LayoutList,
}

const SWIPE_THRESHOLD = 50

export function Component({
    cards = [],
    className,
    defaultLayout = "stack",
    onCardClick,
}: MorphingCardStackProps) {
    const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
    const [expandedCard, setExpandedCard] = useState<string | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    if (!cards || cards.length === 0) {
        return null
    }

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const { offset, velocity } = info
        const swipe = Math.abs(offset.x) * velocity.x

        if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
            // Swiped left - go to next card
            setActiveIndex((prev) => (prev + 1) % cards.length)
        } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
            // Swiped right - go to previous card
            setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
        }
        setIsDragging(false)
    }

    const getStackOrder = () => {
        const reordered = []
        for (let i = 0; i < cards.length; i++) {
            const index = (activeIndex + i) % cards.length
            reordered.push({ ...cards[index], stackPosition: i })
        }
        return reordered.reverse() // Reverse so top card renders last (on top)
    }

    const getLayoutStyles = (stackPosition: number) => {
        switch (layout) {
            case "stack":
                return {
                    top: stackPosition * 8,
                    left: stackPosition * 8,
                    zIndex: cards.length - stackPosition,
                    rotate: (stackPosition - 1) * 2,
                }
            case "grid":
                return {
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    rotate: 0,
                }
            case "list":
                return {
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    rotate: 0,
                }
        }
    }

    const containerStyles = {
        stack: "relative h-80 w-80 md:h-96 md:w-96",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
        list: "flex flex-col gap-4",
    }

    const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

    return (
        <div className={cn("space-y-8", className)}>
            {/* Layout Toggle */}
            <div className="flex items-center justify-center gap-2 rounded-full bg-zinc-900/50 p-1.5 w-fit mx-auto border border-white/5 backdrop-blur-sm">
                {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
                    const Icon = layoutIcons[mode]
                    return (
                        <button
                            key={mode}
                            onClick={() => setLayout(mode)}
                            className={cn(
                                "rounded-full p-2.5 transition-all",
                                layout === mode
                                    ? "bg-white text-zinc-950 shadow-lg"
                                    : "text-zinc-400 hover:text-white hover:bg-white/10",
                            )}
                            aria-label={`Switch to ${mode} layout`}
                        >
                            <Icon className="h-4 w-4" />
                        </button>
                    )
                })}
            </div>

            {/* Cards Container */}
            <LayoutGroup>
                <motion.div layout className={cn(containerStyles[layout], "mx-auto")}>
                    <AnimatePresence mode="popLayout">
                        {displayCards.map((card) => {
                            const styles = getLayoutStyles(card.stackPosition)
                            const isExpanded = expandedCard === card.id
                            const isTopCard = layout === "stack" && card.stackPosition === 0

                            return (
                                <motion.div
                                    key={card.id}
                                    layoutId={card.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: isExpanded ? 1.05 : 1,
                                        x: 0,
                                        ...styles,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, x: -200 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    drag={isTopCard ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragStart={() => setIsDragging(true)}
                                    onDragEnd={handleDragEnd}
                                    whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                                    onClick={() => {
                                        if (isDragging) return
                                        setExpandedCard(isExpanded ? null : card.id)
                                        onCardClick?.(card)
                                    }}
                                    className={cn(
                                        "cursor-pointer rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-md",
                                        "hover:border-white/20 transition-colors",
                                        layout === "stack" && "absolute w-full h-full",
                                        layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                                        layout === "grid" && "w-full aspect-video",
                                        layout === "list" && "w-full",
                                        isExpanded && "ring-2 ring-white/20",
                                    )}
                                    style={{
                                        backgroundColor: card.color || undefined,
                                    }}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-start gap-4 mb-4">
                                            {card.icon && (
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white border border-white/5">
                                                    {card.icon}
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-xl font-bold text-white truncate">{card.title}</h3>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {card.tags?.map((tag) => (
                                                        <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-white/5 text-zinc-400 rounded-full border border-white/5">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                "text-sm text-zinc-400 leading-relaxed",
                                                layout === "stack" && "line-clamp-4",
                                                layout === "grid" && "line-clamp-3",
                                                layout === "list" && "line-clamp-2",
                                            )}
                                        >
                                            {card.description}
                                        </p>

                                        <div className="mt-auto pt-4 flex items-center justify-between">
                                            {card.link && (
                                                <a href={card.link} className="text-xs font-medium text-white hover:underline" onClick={(e) => e.stopPropagation()}>
                                                    View Project →
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {isTopCard && (
                                        <div className="absolute bottom-2 left-0 right-0 text-center">
                                            <span className="text-xs text-zinc-600">Swipe to navigate</span>
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>
            </LayoutGroup>

            {layout === "stack" && cards.length > 1 && (
                <div className="flex justify-center gap-2">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all",
                                index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-zinc-700 hover:bg-zinc-600",
                            )}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
