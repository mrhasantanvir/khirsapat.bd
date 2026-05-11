"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Play, ArrowRight, ShoppingBag, Users, Leaf, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [liveVisitors, setLiveVisitors] = useState(24);
  const [totalVisitors, setTotalVisitors] = useState(84502);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        let newCount = prev + change;
        if (newCount < 12) newCount = 12;
        if (newCount > 45) newCount = 45;
        return newCount;
      });
    }, 5000);

    const savedTotal = localStorage.getItem('total_visitors');
    let currentTotal = savedTotal ? parseInt(savedTotal) : 84502;
    
    if (!sessionStorage.getItem('visited_this_session')) {
      currentTotal += Math.floor(Math.random() * 5) + 1;
      localStorage.setItem('total_visitors', currentTotal.toString());
      sessionStorage.setItem('visited_this_session', 'true');
    }
    setTotalVisitors(currentTotal);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#FDFDF5] text-dark pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Curved Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-xl">
                <Leaf size={28} fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight text-dark">Khirsapat<span className="text-primary">.bd</span></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Premium Rajshahi</span>
              </div>
            </Link>
            <p className="text-secondary/60 mb-10 text-lg leading-relaxed font-medium">
              রাজশাহীর আমের আভিজাত্য এখন আপনার ঘরে। সরাসরি বাগান থেকে বাছাই করা প্রিমিয়াম ফল।
            </p>
            <div className="flex gap-4">
              {[
                { icon: Globe, href: "https://www.facebook.com/RajshahirAam", color: "hover:bg-[#1877F2]" },
                { icon: Play, href: "https://www.youtube.com/@রাজশাহীরআম", color: "hover:bg-[#FF0000]" },
                { icon: Phone, href: "tel:01707979767", color: "hover:bg-primary hover:text-secondary" }
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href}
                  className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center transition-all border border-secondary/5 shadow-sm group/icon ${social.color}`}
                >
                  <social.icon size={20} className="text-secondary/40 group-hover/icon:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-dark flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#FFC107]" />
              লিঙ্কস
            </h4>
            <ul className="space-y-4">
              {[
                { name: "হোম", href: "/" },
                { name: "পরিচিতি", href: "/about" },
                { name: "চাষ পদ্ধতি", href: "/#care" },
                { name: "রেসিপি", href: "/#recipe" },
                { name: "ব্লগ", href: "/blog" },
                { name: "যোগাযোগ", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-secondary/50 hover:text-secondary transition-all font-bold flex items-center gap-3 group/link">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-dark flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#1A4D2E]" />
              যোগাযোগ
            </h4>
            <div className="space-y-8">
              {[
                { icon: MapPin, text: "রাজশাহী, বাংলাদেশ।", label: "ঠিকানা" },
                { icon: Phone, text: "০১৭০৭৯৭৯৭৬৭", label: "হটলাইন" },
                { icon: Mail, text: "info@rajshahiram.com.bd", label: "ইমেইল" }
              ].map((contact, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center flex-shrink-0 border border-secondary/5 text-primary">
                    <contact.icon size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-1">{contact.label}</span>
                    <span className="font-bold text-dark/80">{contact.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-10 rounded-[3rem] border border-secondary/5 shadow-2xl shadow-secondary/5 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <ShieldCheck size={48} className="text-primary mb-6" />
              <h4 className="text-2xl font-black text-dark mb-4">নিরাপদ অর্ডার</h4>
              <p className="text-secondary/40 mb-8 leading-relaxed font-medium">
                সেরা স্বাদের খিরসাপাত আম এখন সরাসরি বাগান থেকে আপনার ঘরে।
              </p>
              <Link 
                href="https://rajshahiram.com.bd/ProductDetails/m102" 
                target="_blank"
                className="bg-primary text-secondary px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-secondary transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group"
              >
                অর্ডার করুন
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-secondary/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/30">
            <p>© 2026 KHIRSAPAT.BD</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span>Live: {liveVisitors}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={12} className="text-primary" />
                <span>Total: {totalVisitors.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/30">
            <span>Powered by</span>
            <Link href="https://rajshahiram.com.bd/" className="bg-secondary/5 px-4 py-2 rounded-full border border-secondary/5 text-secondary/60 hover:text-primary transition-colors">
              RajshahiRam
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
