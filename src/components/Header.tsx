"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "পরিচিতি", href: "/about" },
    { name: "চাষ পদ্ধতি", href: "/#care" },
    { name: "রেসিপি", href: "/#recipe" },
    { name: "ব্লগ", href: "/blog" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 pointer-events-none pt-4`}
      >
        <div className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${isScrolled ? "max-w-4xl" : "max-w-7xl"}`}>
          <div 
            className={`pointer-events-auto relative flex items-center justify-between transition-all duration-700 ${
              isScrolled 
              ? "bg-white/90 backdrop-blur-xl rounded-full px-6 py-2 shadow-xl border border-secondary/5" 
              : "px-2 py-4"
            }`}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-primary shadow-sm">
                <Leaf size={18} fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-black tracking-tight text-dark">
                  Khirsapat<span className="text-primary">.bd</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-secondary/40">
                  Premium Rajshahi
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-black transition-all rounded-full text-dark/70 hover:text-secondary group/nav`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="navActive"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
              <div className="w-px h-4 bg-secondary/10 mx-3" />
              <Link
                href="https://rajshahiram.com.bd/ProductDetails/m102"
                target="_blank"
                className="bg-secondary text-primary hover:bg-primary hover:text-secondary px-5 py-2 rounded-xl font-black transition-all flex items-center gap-2 shadow-sm text-xs"
              >
                <ShoppingCart size={14} />
                অর্ডার
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-secondary/5 text-dark border border-secondary/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] p-4 lg:hidden bg-white/40"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="w-full bg-white rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col border border-secondary/5 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-primary">
                    <Leaf size={18} fill="currentColor" />
                  </div>
                  <span className="text-lg font-black text-dark">Khirsapat<span className="text-primary">.bd</span></span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 bg-secondary/5 rounded-xl flex items-center justify-center text-dark"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-black text-dark/30 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-secondary/5"
                >
                  <Link
                    href="https://rajshahiram.com.bd/ProductDetails/m102"
                    target="_blank"
                    className="bg-secondary text-primary p-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-xl shadow-secondary/10 text-lg"
                  >
                    <ShoppingCart size={22} />
                    অর্ডার করুন
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
