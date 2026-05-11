"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { History, ShieldCheck, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-secondary/5">
              <Image 
                src="/blog-images/p5.png" 
                alt="Rajshahi Orchard" 
                width={600} 
                height={400} 
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-4">
            <div className="text-primary font-bold text-xs uppercase tracking-widest">Our Story</div>
            <h2 className="text-3xl font-black text-secondary leading-tight">রাজশাহীর আম কেন সেরা?</h2>
            <p className="text-sm text-secondary/70 leading-relaxed">
              রাজশাহীর মাটি ও জলবায়ু খিরসাপাত (হিমসাগর) আম চাষের জন্য প্রকৃতিপ্রদত্ত এক আশীর্বাদ। আমাদের বাগানগুলোতে বহু বছরের অভিজ্ঞতায় গড়ে উঠেছে এক অনন্য চাষ পদ্ধতি, যা প্রতিটি আমকে দেয় রাজকীয় স্বাদ ও অতুলনীয় সুগন্ধ।
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex-1 p-4 bg-cream rounded-xl border border-secondary/5">
                <span className="block text-xl font-black text-secondary">১০০%</span>
                <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">প্রাকৃতিক</span>
              </div>
              <div className="flex-1 p-4 bg-cream rounded-xl border border-secondary/5">
                <span className="block text-xl font-black text-secondary">জিআই</span>
                <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">স্বীকৃত</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
