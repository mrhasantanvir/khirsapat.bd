"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Leaf, Award } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} className="relative h-[600px] flex items-center pt-20 pb-12 overflow-hidden bg-cream">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-secondary/5 px-4 py-1.5 rounded-full border border-secondary/10"
            >
              <Award size={14} className="text-primary" />
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Rajshahi Heritage</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight font-royal">
              স্বাদে ও গন্ধে <br/>
              <span className="text-primary">অতুলনীয় খিরসাপাত</span>
            </h1>
            
            <p className="text-base text-secondary/70 max-w-md leading-relaxed font-medium">
              রাজশাহীর বাগান থেকে বাছাই করা প্রিমিয়াম খিরসাপাত আম (হিমসাগর)। <strong>himsagor amer dam</strong> বা <strong>khirshapat amer dam</strong> যাই হোক না কেন, বাজারের সেরা দামে সম্পূর্ণ প্রাকৃতিক ও কেমিক্যাল মুক্ত আম নিশ্চিন্তে অর্ডার করুন।
            </p>

            <div className="flex items-center gap-6 pt-2">
              <Link
                href="https://rajshahiram.com.bd/ProductDetails/m102"
                target="_blank"
                className="bg-secondary text-primary px-8 py-3.5 rounded-xl font-bold text-lg transition-all hover:bg-primary hover:text-secondary shadow-lg active:scale-95"
              >
                অর্ডার করুন
              </Link>
              <div className="flex flex-col">
                <span className="text-secondary font-bold text-sm">GI Certified</span>
                <span className="text-secondary/40 text-[9px] uppercase tracking-widest">Pure Selection</span>
              </div>
            </div>
          </div>

          {/* Compact Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/hero-green.png" 
                alt="Khirsapat Mango" 
                fill 
                className="object-cover contrast-110 saturate-110"
              />
            </div>
          </motion.div>

        </div>
      </div>


      {/* Background Decorative Leaf */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[3%] text-secondary/5 hidden lg:block"
      >
        <Leaf size={180} fill="currentColor" />
      </motion.div>
    </section>
  );
};

export default Hero;
