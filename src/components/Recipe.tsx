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
    <section id="recipe" className="py-40 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white green-shadow">
                <Image
                  src="/recipe.png"
                  alt="খিরসাপাত আমের আচার"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ rotate: [12, 15, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 z-20 bg-primary p-8 rounded-[2.5rem] shadow-2xl transform rotate-12 hidden md:block"
              >
                <ChefHat size={40} className="text-dark mb-2" />
                <span className="block text-3xl font-black text-dark italic leading-none">Original</span>
                <span className="text-[10px] font-black uppercase text-dark/40 tracking-widest">Recipe 2026</span>
              </motion.div>
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-secondary/5 rounded-full blur-[120px] -z-10" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 text-secondary font-black text-sm uppercase tracking-[0.4em] mb-8">
                <Utensils size={18} />
                রেসিপি কর্ণার
              </div>
              
              <h3 className="text-5xl md:text-8xl font-black text-dark mb-12 leading-[0.95]">
                খিরসাপাত আমের <br />
                <span className="text-gradient">ঝুরি আচার</span>
              </h3>

              <div className="flex flex-wrap gap-10 mb-16">
                {[
                  { icon: Clock, text: "৪৫ মিনিট", label: "সময়" },
                  { icon: Users, text: "পরিবার", label: "পরিবেশন" },
                  { icon: Utensils, text: "সহজ", label: "ধাপ" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-1">{item.label}</span>
                      <span className="font-bold text-dark">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-black text-dark mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#FFC107]" />
                    উপকরণ
                  </h4>
                  <ul className="space-y-4">
                    {ingredients.map((item, index) => (
                      <li key={index} className="flex items-center gap-4 text-secondary/70 font-medium">
                        <div className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-black text-dark mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#1A4D2E]" />
                    প্রস্তুত প্রণালী
                  </h4>
                  <div className="space-y-6">
                    {[
                      "আমগুলো ধুয়ে খোসা ছাড়িয়ে ঝুরি করে কাটুন।",
                      "তেলে পাঁচফোড়ন ও শুকনো লঙ্কা ফোঁড়ন দিন।",
                      "আম, হলুদ, লবন ও চিনি দিয়ে রান্না করুন।"
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center text-xs font-black">{i + 1}</span>
                        <p className="text-sm text-secondary/70 font-medium leading-relaxed">{step}</p>
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
