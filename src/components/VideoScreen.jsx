"use client"

import { motion } from "framer-motion"

export default function VideoScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
    >
      <img 
        // Yahan .jpg istemal karein
        src="/surprise-image.jpg" 
        alt="Surprise Mosaic Picture"
        className="w-full h-full object-contain" 
      />
    </motion.div>
  )
}
