'use client'

import { motion } from "framer-motion";
import { BookOpen, Calendar, User, ArrowRight, Search, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "./data";
import { useState, useMemo } from "react";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      
      <div className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 card-primary px-6 py-3 rounded-full mb-6 border border-secondary">
              <BookOpen className="w-5 h-5 icon-text-primary" />
              <span className="icon-text-primary text-sm font-medium">Knowledge Base & News</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font">
              Developer <span className="icon-text-primary">Guides & Tutorials</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              From the VexaNode team. Learn how to scale, secure, and deploy your infrastructure with our expert technical articles.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white dark:bg-gray-950/20 border border-secondary rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 6) * 0.1 }}
                className="bg-white dark:bg-gray-950/20 backdrop-blur-xl border border-secondary rounded-2xl overflow-hidden group hover:hover-gradient transition-all duration-500"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-blue-500 font-bold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 italic">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
