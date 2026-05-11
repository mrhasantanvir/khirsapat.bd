"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sprout, CloudRain, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cultivation = () => {
  const steps = [
    {
      title: "মাটি তৈরি",
      desc: "উর্বর দোঁয়াশ মাটি খিরসাপাত আম চাষের জন্য সবচেয়ে উপযোগী। জমি চাষ দিয়ে তাতে জৈব সার মিশিয়ে নিতে হবে।",
      icon: <Sprout className="text-secondary" size={32} />,
    },
    {
      title: "রোপণের সময়",
      desc: "জুন থেকে জুলাই মাস হলো চারা রোপণের সঠিক সময়। তবে সেচ সুবিধা থাকলে সারা বছরই রোপণ করা যায়।",
      icon: <CloudRain className="text-secondary" size={32} />,
    },
    {
      title: "সার প্রয়োগ",
      desc: "গাছের বৃদ্ধির জন্য নিয়মিত জৈব সার এবং প্রয়োজনীয় খনিজ সার ব্যবহার করতে হবে।",
      icon: <CheckCircle2 className="text-secondary" size={32} />,
    },
    {
      title: "পোকা দমন",
      desc: "মুকুল আসার পর এবং ফল বড় হওয়ার সময় প্রাকৃতিক উপায়ে পোকা দমনে ব্যবস্থা নিতে হবে।",
      icon: <ShieldCheck className="text-secondary" size={32} />,
    },
  ];

  return (
    <section id="care" className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <div className="text-primary font-bold text-xs uppercase tracking-widest">Cultivation</div>
            <h2 className="text-3xl font-black text-secondary leading-tight">আধুনিক পদ্ধতিতে আম চাষ</h2>
            <p className="text-sm text-secondary/70 leading-relaxed">
              আমরা প্রতিটি চারা থেকে ফল পর্যন্ত বৈজ্ঞানিক ও আধুনিক পদ্ধতি অনুসরণ করি। সঠিক মাটি ব্যবস্থাপনা ও জৈব সারের ব্যবহার আমাদের আমকে করে তোলে অনন্য।
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "উন্নত গ্রাফটিং", desc: "সেরা জাতের কলম চারা নিশ্চিত করা" },
                { title: "জৈব সার", desc: "প্রাকৃতিক উপায়ে মাটির উর্বরতা রক্ষা" },
                { title: "ফ্রুট ব্যাগিং", desc: "কীটনাশক মুক্ত দাগহীন ফ্রেশ আম" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-secondary/5">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Star size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">{item.title}</h4>
                    <p className="text-[10px] text-secondary/40 uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="https://rajshahiram.com.bd/ProductDetails/m102" 
              target="_blank"
              className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-secondary transition-all"
            >
              চারা অর্ডার করুন
            </Link>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image src="/blog-images/p4.png" alt="Planting" width={300} height={300} className="w-full object-cover aspect-square" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md mt-8">
              <Image src="/blog-images/p6.png" alt="Harvest" width={300} height={400} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cultivation;
