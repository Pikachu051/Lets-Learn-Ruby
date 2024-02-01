"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ amount: 0.5 }}
        className="h-[100vh]">
        <Image
          src="/dungeon.webp"
          alt="Ruby's background"
          layout="fill"
          objectFit="cover"
          className="z-[-1] opacity-90"
        />
        <h1 className="relative top-[40vh] text-center font-bold text-7xl z-1">Ruby</h1>
        <p className="relative top-[40vh] text-center pt-4">Open-source programming language</p>
      </motion.div>
        <div className="h-[100vh]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ amount: 0.5 }}
          >
            <h1 className="font-bold text-5xl pt-[80px] pl-[80px]">Content</h1>
            <div className="grid grid-cols-2 grid-flow-row gap-2 pt-[50px]">
              <a href="/installation" className="p-4 rounded-md text-center font-bold text-2xl z-1 hover:text-red-300 hover:transition-all">Installation</a>
              <a href="/variables" className="p-4 rounded-md text-center font-bold text-2xl z-1 hover:text-red-300 hover:transition-all">Variables</a>
              <a href="/collections" className="p-4 rounded-md text-center font-bold text-2xl z-1 hover:text-red-300 hover:transition-all">Collections</a>
              <a href="/conditional" className="p-4 rounded-md text-center font-bold text-2xl z-1 hover:text-red-300 hover:transition-all">Conditional Statements</a>
            </div>
          </motion.div>
      </div>
    </div>  
  );
}
