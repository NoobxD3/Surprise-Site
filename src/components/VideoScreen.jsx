"use client"

import { motion } from "framer-motion"
// useEffect aur useRef ki ab zaroorat nahin hai, is liye hata diye gaye hain

export default function VideoScreen() {
    // Ref aur useEffect wala code bhi hata diya gaya hai
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            className="fixed inset-0 bg-black z-50"
        >
            <video 
                className="w-full h-full object-cover" 
                controls    // autoPlay hata kar controls laga diya hai
                playsInline // Yeh iOS par video ko fullscreen jane se rokta hai
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    )
}
