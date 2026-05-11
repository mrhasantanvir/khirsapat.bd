"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

const Blogs = () => {
  const displayPosts = [...posts].reverse();

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Knowledge Center</div>
            <h2 className="text-3xl font-black text-secondary">তথ্য ও টিপস</h2>
          </div>
          <Link href="/blog" className="text-secondary font-bold text-sm border-b-2 border-primary hover:text-primary transition-all pb-1">
            সবগুলো পড়ুন
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayPosts.slice(0, 3).map((post) => (
            <article key={post.slug} className="bg-cream rounded-2xl overflow-hidden border border-secondary/5 group">
              <div className="relative aspect-video">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{post.date}</div>
                <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-secondary/60 hover:text-primary transition-all"
                >
                  আরও পড়ুন <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
