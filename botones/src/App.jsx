"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"




const tabs = [
  {
    id: "analytics",
    label: "Analytics",
    color: "#00205b",
  },
  {
    id: "team",
    label: "Team",
    color: "#00205b",
   
  },
  {
    id: "settings",
    label: "Settings",
    color: "#00205b",
    
  },
  {
    id: "reports",
    label: "Reports",
    color: "#00205b",
    
  },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Tab Navigation */}
        <div className="bg-gray-100 border-gray-200 ">
          <div className="flex relative">
            {tabs.map((tab, index) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 flex items-center justify-center gap-3 px-6 py-5 text-sm font-semibold transition-all  ${
                    isActive ? "text-white" : "text-gray-600 hover:text-gray-800"
                  }`}
                  whileHover={{ scale:1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{}}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 rounded-2xl shadow-lg"
                      style={{ backgroundColor: tab.color }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  <motion.span className={`hidden sm:inline relative z-10 ${isActive ? "border-b" : ""}`} transition={{duration:0.2}}>{tab.label}</motion.span>

                  {/* Hover effect */}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/50 rounded-2xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

       
      </motion.div>
    </div>
  )
}
