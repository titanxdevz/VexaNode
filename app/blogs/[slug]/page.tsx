'use client'

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../data";
import { useEffect, useState } from "react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blogs" className="text-blue-500 hover:underline">Return to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="bg-blue-600/10 text-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/20">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-6 border-y border-secondary">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <User className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{blog.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 border border-secondary shadow-2xl">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                {blog.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-lg">{paragraph}</p>
                ))}
                <p className="text-lg">
                  At VexaNode, we are committed to providing the infrastructure that allows your community to thrive. Whether you are running a small survival server or a massive network, our nodes are built to scale with you. Our engineering team is constantly working on new optimizations to ensure that you always have the best performance in the industry.
                </p>
                <p className="text-lg">
                  Stay tuned for more updates and tutorials as we continue to evolve our platform to meet the needs of modern developers and community owners.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20 text-center">
              <h3 className="text-2xl font-bold mb-4 orbitron-font">Ready to deploy?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Join thousands of satisfied users and experience the VexaNode difference today.
              </p>
              <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
