"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { History, ShieldCheck, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-1">
              <Image 
                src="/orchard-vivid.png" 
                alt="Rajshahi Khirsapat Orchard" 
                width={800} 
                height={600} 
                className="w-full object-cover aspect-[4/3] contrast-110 saturate-110"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="text-primary font-bold text-xs uppercase tracking-widest">Heritage & Recognition</div>
            <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight">রাজশাহীর আম কেন সেরা?</h2>
            
            <p className="text-sm text-secondary/70 leading-relaxed">
              রাজশাহীর মাটি ও জলবায়ু খিরসাপাত (হিমসাগর) আম চাষের জন্য প্রকৃতিপ্রদত্ত এক আশীর্বাদ। আমাদের বাগানগুলোতে বহু বছরের অভিজ্ঞতায় গড়ে উঠেছে এক অনন্য চাষ পদ্ধতি, যা প্রতিটি আমকে দেয় রাজকীয় স্বাদ ও অতুলনীয় সুগন্ধ।
            </p>

            <div className="bg-cream/50 p-6 rounded-2xl border border-primary/10">
              <h4 className="text-secondary font-black text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                <Award size={16} className="text-primary" />
                জিআই (GI) স্বীকৃতি ও গৌরব
              </h4>
              <p className="text-[11px] text-secondary/60 leading-relaxed font-medium">
                জিআই বা ভৌগোলিক নির্দেশক হলো এমন একটি স্বীকৃতি যা কোনো নির্দিষ্ট স্থানের বিশেষ বৈশিষ্ট্যপূর্ণ পণ্যের ঐতিহ্য রক্ষা করে। <strong>২৭ জানুয়ারি ২০১৯</strong> তারিখে বাংলাদেশের ৩য় পণ্য হিসেবে রাজশাহীর খিরসাপাত আম এই মর্যাদাপূর্ণ 'জিআই' স্বীকৃতি লাভ করে। এটি এই আমের গুণমান এবং বিশ্বজুড়ে এর অনন্য পরিচয়ের আনুষ্ঠানিক দলিল।
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <div className="flex-1 p-4 bg-cream rounded-xl border border-secondary/5">
                <span className="block text-xl font-black text-secondary">১০০%</span>
                <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">প্রাকৃতিক স্বাদ</span>
              </div>
              <div className="flex-1 p-4 bg-cream rounded-xl border border-secondary/5">
                <span className="block text-xl font-black text-secondary">২০১৯</span>
                <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">জিআই স্বীকৃতি</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
