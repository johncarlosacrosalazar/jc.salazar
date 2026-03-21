"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hero from "../../public/assets/images/hero.png";
import pcGraphics from "@/public/assets/images/pc-graphics.png";

interface BannerProps {
    className?: string;
    id?: string;
}

export default function Banner({ className, id }: BannerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yGraphics = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yCircle = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const opacityGradient = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

    return (
        <div 
            ref={containerRef}
            className={`${className} pt-[60px] relative bg-[#f1f1f1] overflow-hidden`} 
            id={`${id} `}
        >
            <motion.div 
                style={{ opacity: opacityGradient }}
                className="absolute w-full left-0 top-0 bg-[linear-gradient(180deg,#F5ECD5,transparent,transparent)] h-[400px]"
            />
            
            <motion.div 
                style={{ y: yBackground }}
                className="absolute w-[600px] right-0 bottom-0 h-[100px] opacity-50 bg-white z-0 transform-[skewX(10deg)]"
            />
            
            <motion.img 
                src={pcGraphics.src} 
                alt="" 
                style={{ y: yGraphics }}
                className="absolute z-0 right-[-18%] bottom-0 w-[800px] opacity-25" 
            />
            
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <motion.div 
                    style={{ y: yCircle }}
                    className="absolute shadow-[-800px_-800px_0_0_#2e4756] w-[200%] h-[273%] top-0 rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-5 gap-5 relative">
                <div className="col-span-2 flex justify-center">
                    <motion.img 
                        src={hero.src} 
                        alt="" 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-[500px] max-w-full relative"
                    />
                </div>
                <div className="col-span-3 justify-center flex flex-col text-[#3D3D3D] relative z-1">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl font-bold text-[#4b97aa]"
                    >
                        Hi, I'm John Carlo Salazar
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl font-bold"
                    >
                        Web Developer / Lead Developer
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-5 italic"
                    >
                        I build websites, design systems, and manage cloud-based infrastructures.
                    </motion.div>
                </div>
            </div>  
        </div>
    );
}