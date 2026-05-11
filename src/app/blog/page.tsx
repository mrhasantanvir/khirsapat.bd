"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const displayPosts = [...posts].reverse();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-48 pb-32 relative overflow-hidden bg-[#FDFDF5]">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-md border border-secondary/5 px-6 py-3 rounded-full text-secondary hover:text-dark transition-all mb-12 group font-black uppercase tracking-[0.2em] text-[10px] shadow-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            হোমপেজে ফিরুন
          </Link>
          
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-9xl font-black text-dark mb-10 leading-[0.9] tracking-tighter">
              নলেজ <span className="text-gradient italic">সেন্টার</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/60 max-w-2xl font-medium leading-relaxed">
              রাজশাহীর আমের ঐতিহ্য, স্বাদ এবং সঠিক যত্ন সম্পর্কে বিস্তারিত জানুন আমাদের গবেষণালব্ধ তথ্য ও টিপস থেকে।
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative bg-white rounded-[3rem] overflow-hidden border border-secondary/5 shadow-xl shadow-secondary/5 transition-all duration-700 hover:scale-[1.02] flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden bg-secondary/5">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-contain transition-transform duration-1000 group-hover:scale-105 p-6"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors duration-700 pointer-events-none" />
                </div>

                <div className="p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-secondary/40 text-[10px] font-black uppercase tracking-widest mb-6 group-hover:text-primary transition-colors">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    
                    <h4 className="text-2xl font-black text-dark mb-6 group-hover:text-primary transition-colors line-clamp-3 leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-secondary/5">
                    <div className="flex items-center gap-3 text-secondary/60 font-bold">
                      <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center">
                        <User size={14} className="text-secondary" />
                      </div>
                      <span className="text-xs uppercase tracking-wider">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="w-14 h-14 bg-secondary/5 rounded-2xl border border-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-secondary transition-all active:scale-90 shadow-sm"
                    >
                      <ArrowUpRight size={28} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
