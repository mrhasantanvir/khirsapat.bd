"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Users, Utensils, ChefHat } from "lucide-react";

const Recipe = () => {
  const ingredients = [
    "কাঁচা খিরসাপাত আম - ১ কেজি",
    "সরিষার তেল - ২ কাপ",
    "পাঁচফোড়ন - ২ টেবিল চামচ",
    "শুকনো লঙ্কা - ৫/৬ টি",
    "হলুদ ও লবন - পরিমাণমতো",
    "চিনি - স্বাদমতো",
  ];

  return (
    <section id="recipe" className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/recipe.png"
                  alt="খিরসাপাত আমের আচার"
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-video"
                />
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <ChefHat size={14} />
                রেসিপি কর্ণার
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-secondary leading-tight mb-6">
                খিরসাপাত আমের <br />
                <span className="text-primary">ঝুরি আচার</span>
              </h3>

              <div className="flex gap-8 mb-8">
                {[
                  { icon: Clock, text: "৪৫ মিনিট", label: "সময়" },
                  { icon: Utensils, text: "সহজ", label: "ধাপ" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <span className="block text-[8px] font-bold uppercase text-secondary/40 tracking-widest">{item.label}</span>
                      <span className="text-xs font-bold text-secondary">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-black text-secondary mb-4 uppercase tracking-wider">উপকরণ</h4>
                  <ul className="space-y-2">
                    {ingredients.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[12px] text-secondary/70 font-medium">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black text-secondary mb-4 uppercase tracking-wider">প্রস্তুত প্রণালী</h4>
                  <div className="space-y-4">
                    {[
                      "আমগুলো ধুয়ে ঝুরি করে কাটুন।",
                      "তেলে পাঁচফোড়ন ফোঁড়ন দিন।",
                      "আম ও মশলা দিয়ে রান্না করুন।"
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-5 h-5 bg-secondary/10 text-secondary rounded-md flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                        <p className="text-[12px] text-secondary/70 font-medium leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
