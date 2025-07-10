"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const buttons = [
  {
    id: "tracker",
    label: "Tracker",
    description:'Track consumibles',
    color: "bg-[#00205b]",
    hoverColor: "bg-[#00205b]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "general",
    label: "General",
    description:'General view of all consumibles',
    color: "bg-[#00205b]",
    hoverColor: "bg-[#00205b]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="m19.07 4.93-4.24 4.24m0 5.66 4.24 4.24M4.93 4.93l4.24 4.24m0 5.66-4.24 4.24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "coverage",
    label: "Coverage",
    description:'Coverage of consumibles',
    color: "bg-[#00205b]",
    hoverColor: "bg-[#00205b]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <path d="M8 10h8M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "pedidos",
    label: "Pedidos",
    description:'Pedidos de consumibles',
    color: "bg-[#00205b]",
    hoverColor: "bg-[#00205b]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Component() {
  const [activeButton, setActiveButton] = useState(null)
  const [isHovering, setIsHovering] = useState(null)

  return (
    <div className="min-h-screen pl-32 pt-12 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 ">
      <div className="grid grid-rows-4 w-[80%] gap-12 h-[90%]">
        {buttons.map((button, index) => (
          <motion.button
            key={button.id}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${button.color} text-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            onClick={() => setActiveButton(button.id)}
            onHoverStart={()=> {setIsHovering(button.id)}}
            onHoverEnd={()=> {setIsHovering(null)}}
          >
            {/* Background gradient overlay on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${button.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              initial={false}
            />

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full opacity-0"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{
                scale: 4,
                opacity: [0, 0.3, 0],
                transition: { duration: 0.4 },
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              {/* Icon container */}
              <motion.div
                className="p-3 bg-white/20 rounded-xl backdrop-blur-sm"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.1 },
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={activeButton === button.id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {button.icon}
                </motion.div>
              </motion.div>

              <motion.div 
                    className="flex flex-col justify-center items-center h-8" // Altura fija para evitar saltos
                    onHoverStart={() => setIsHovering(button.id)}
                    onHoverEnd={() => setIsHovering(null)}
                  >
                    <AnimatePresence mode="wait">
                      {isHovering !== button.id ? (
                        <motion.span
                          key={`label-${button.id}`}
                          className="text-lg font-semibold tracking-wide absolute"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {button.label}
                        </motion.span>
                      ) : (
                        <motion.span
                          key={`desc-${button.id}`}
                          className="text-sm font-medium tracking-normal absolute"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {button.description}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>

              
            </div>

            {/* Floating particles effect */}
            <motion.div
              className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.3,
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
