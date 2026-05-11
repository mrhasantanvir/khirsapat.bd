import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Globe, Mail, Link as LinkIcon, Smartphone, MessageCircle, ShieldCheck, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Khirsapat.bd`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: ["/khirsapat-mango.png"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[currentIndex];
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Header */}
      <section className="relative pt-48 pb-64 overflow-hidden bg-[#FDFDF5]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Mango Garden" 
            fill 
            className="object-cover opacity-10 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFDF5]/50 via-[#FDFDF5]/80 to-[#FDFDF5]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
             <Link 
               href="/blog" 
               className="inline-flex items-center gap-3 bg-white border border-secondary/5 px-6 py-2 rounded-full mb-8 text-secondary/60 hover:text-dark transition-all group font-black uppercase tracking-[0.3em] text-[10px] shadow-sm"
             >
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
               ব্লগ লিস্টে ফিরুন
             </Link>
             
             <h1 className="text-4xl md:text-6xl font-black text-dark mb-8 leading-[0.95] tracking-tight">
               {post.title}
             </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10 text-secondary/40 font-black uppercase tracking-widest text-[10px]">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <User size={14} className="text-secondary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/5 border border-secondary/10 px-4 py-1.5 rounded-full text-secondary">
                <ShieldCheck size={12} />
                <span>Verified Info</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 -mt-40 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Content */}
            <div className="lg:w-2/3">
              <article className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-secondary/5">
                <div className="relative aspect-[21/9] w-full bg-secondary/5 p-12 md:p-24">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-contain transition-transform duration-1000"
                  />
                </div>
                
                <div className="p-10 md:p-20">
                  <div className="prose prose-2xl max-w-none prose-p:text-secondary/70 prose-p:leading-relaxed prose-strong:text-dark prose-headings:font-black prose-headings:tracking-tight">
                    <p className="text-2xl md:text-3xl font-black text-dark border-l-8 border-primary pl-8 py-4 mb-16 bg-secondary/5 rounded-r-3xl">
                      {post.excerpt}
                    </p>
                    <div className="whitespace-pre-line text-xl font-medium">
                      {post.content}
                    </div>
                    
                    <div className="mt-20 p-12 bg-secondary rounded-[3rem] text-primary relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                      <h3 className="text-3xl font-black mb-6 relative z-10 text-white">রাজশাহীর আসল খিরসাপাত আম</h3>
                      <p className="text-white/70 mb-10 relative z-10 text-lg">
                        সরাসরি আমাদের বাগান থেকে প্রিমিয়াম কোয়ালিটির আম সংগ্রহ করতে নিচে ক্লিক করুন। 
                      </p>
                      <Link
                        href="https://rajshahiram.com.bd/ProductDetails/m102"
                        target="_blank"
                        className="bg-primary hover:bg-accent text-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        এখনই শপে যান
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>

                  {/* Share & Tags */}
                  <div className="mt-24 pt-12 border-t border-secondary/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <span className="font-black text-dark text-sm uppercase tracking-widest">Share:</span>
                      <div className="flex gap-3">
                        {[Globe, Mail, LinkIcon].map((Icon, i) => (
                          <button key={i} className="w-12 h-12 bg-secondary/5 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-secondary/40 border border-secondary/5">
                            <Icon size={20} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {post.keywords.map((tag) => (
                        <span key={tag} className="text-[10px] bg-secondary/5 text-secondary/60 px-4 py-2 rounded-full font-black uppercase tracking-widest border border-secondary/5">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Navigation Cards */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="group p-10 bg-white rounded-[3rem] border border-secondary/5 shadow-xl hover:bg-secondary transition-all duration-500">
                    <span className="flex items-center gap-3 text-[10px] font-black text-secondary/30 group-hover:text-white/40 uppercase tracking-[0.3em] mb-4">
                      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> আগের আর্টিকেল
                    </span>
                    <h4 className="text-xl font-black text-dark group-hover:text-white transition-colors line-clamp-2 leading-tight">{prevPost.title}</h4>
                  </Link>
                )}
                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="group p-10 bg-white rounded-[3rem] border border-secondary/5 shadow-xl hover:bg-secondary transition-all duration-500 text-right">
                    <span className="flex items-center gap-3 justify-end text-[10px] font-black text-secondary/30 group-hover:text-white/40 uppercase tracking-[0.3em] mb-4">
                      পরের আর্টিকেল <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <h4 className="text-xl font-black text-dark group-hover:text-white transition-colors line-clamp-2 leading-tight">{nextPost.title}</h4>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              <div className="bg-white p-10 rounded-[3rem] border border-secondary/5 shadow-xl sticky top-32">
                <h4 className="text-2xl font-black text-dark mb-10 flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  দ্রুত যোগাযোগ
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Globe, label: "ওয়েবসাইট", val: "rajshahiram.com.bd", href: "https://rajshahiram.com.bd" },
                    { icon: Smartphone, label: "মোবাইল অ্যাপ", val: "Play Store", href: "https://play.google.com/store/apps" },
                    { icon: MessageCircle, label: "হোয়াটসঅ্যাপ", val: "+8801707979767", href: "https://wa.me/8801707979767", color: "text-green-500" }
                  ].map((item, i) => (
                    <Link key={i} href={item.href} target="_blank" className="flex items-center gap-5 p-5 bg-secondary/5 rounded-2xl hover:bg-secondary hover:text-white transition-all group border border-secondary/5">
                      <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-white/10 ${item.color || 'text-primary'}`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/40 group-hover:text-white/60 mb-1">{item.label}</span>
                        <span className="font-bold text-sm">{item.val}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="text-xl font-black text-dark mb-8">অন্যান্য ব্লগ</h4>
                  <div className="space-y-6">
                    {posts.filter(p => p.slug !== slug).slice(0, 4).map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="flex gap-5 group items-center">
                        <div className="w-20 h-20 bg-secondary/5 rounded-2xl overflow-hidden flex-shrink-0 relative border border-secondary/5">
                          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <h5 className="font-black text-dark group-hover:text-primary transition-colors line-clamp-2 leading-tight text-sm">
                          {p.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
