import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight, ChevronRight, Clock, CheckCircle2, Zap, Server, Sparkles } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogs } from "../../blogs/data";
import { constructMetadata, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return constructMetadata({
      title: "Post Not Found | VexaNode Blog",
      description: "The requested article could not be found.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${post.title} | VexaNode Engineering Guides`,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    keywords: [
      post.category,
      "hosting guide",
      "server setup",
      "VexaNode tutorial",
      post.title,
    ],
  });
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((b) => b.slug !== post.slug)
    .slice(0, 4);

  const articleJsonLd = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.image,
    author: post.author,
  });

  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-[#06080d] text-white selection:bg-[#10b981]/30 relative overflow-hidden font-sans">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Atmospheric Glowing Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <Navbar />

      <main className="pt-32 pb-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-medium overflow-x-auto no-scrollbar py-1">
            <Link href="/" className="hover:text-[#10b981] transition-colors whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
            <Link href="/blog" className="hover:text-[#10b981] transition-colors whitespace-nowrap">
              Guides & Tutorials
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
            <span className="text-gray-300 truncate font-semibold">{post.title}</span>
          </nav>

          {/* Top Return Button */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#10b981] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#10b981]" />
              <span>Back to all guides</span>
            </Link>
          </div>

          {/* Article Header Banner */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#10b981] text-black text-xs font-black px-3.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                {post.category}
              </span>
              <span className="text-xs text-[#34d399] font-bold flex items-center gap-1.5 bg-[#10b981]/10 px-3 py-1 rounded-lg border border-[#10b981]/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" /> Verified Production Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 orbitron-font leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author / Date / Time bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-[#0a0d14]/80 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#10b981] to-[#059669] flex items-center justify-center font-black text-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  VN
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">{post.author}</div>
                  <div className="text-[11px] text-gray-400">VexaNode Cloud Infrastructure Team</div>
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs text-gray-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#10b981]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#10b981]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Layout for Desktop (Main Article + Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content Area (Col 8) */}
            <article className="lg:col-span-8 flex flex-col gap-8">
              {/* Styled Article Body (No image) */}
              <div className="bg-[#0a0d14]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
                <div
                  className="article-body max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Bottom In-Article CTA Banner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c121d] via-[#090e17] to-[#070b10] border border-[#10b981]/40 text-center relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-[#10b981]/15 text-[#10b981] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#10b981]/30 mb-4">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Instant Cloud Deployment</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 orbitron-font text-white">
                    Need High-Speed Hardware For This Setup?
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto leading-relaxed">
                    Deploy your high-frequency AMD nodes in India, Germany, or USA with NVMe storage, 3Gbps unmetered network, and 24/7 DDoS mitigation.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/games"
                      className="bg-[#10b981] hover:bg-[#059669] text-black font-extrabold px-6 py-3 rounded-xl text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      Minecraft Server Plans
                    </Link>
                    <Link
                      href="/discord"
                      className="bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold px-6 py-3 rounded-xl text-xs border border-white/[0.1] transition-all"
                    >
                      Discord Bot Hosting
                    </Link>
                    <Link
                      href="/vps"
                      className="bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold px-6 py-3 rounded-xl text-xs border border-white/[0.1] transition-all"
                    >
                      Cloud VPS
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar (Col 4) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
              {/* Quick Deploy Card */}
              <div className="bg-[#0a0d14]/90 border border-white/[0.08] rounded-3xl p-6 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-bold text-[#10b981] uppercase tracking-wider mb-4">
                  <Server className="w-4 h-4" />
                  <span>VexaNode Cloud Infrastructure</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2 orbitron-font">
                  Ready to deploy?
                </h4>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Start with enterprise AMD hardware, instant setup, NVMe speed, and automated backups.
                </p>
                <div className="space-y-2.5">
                  <Link
                    href="/games"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-[#10b981]/10 border border-white/[0.06] hover:border-[#10b981]/30 transition-all text-xs font-bold group"
                  >
                    <span className="text-white group-hover:text-[#10b981]">Minecraft Hosting</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#10b981] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <Link
                    href="/discord"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-[#10b981]/10 border border-white/[0.06] hover:border-[#10b981]/30 transition-all text-xs font-bold group"
                  >
                    <span className="text-white group-hover:text-[#10b981]">Discord Bot Nodes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#10b981] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <Link
                    href="/lavalink"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-[#10b981]/10 border border-white/[0.06] hover:border-[#10b981]/30 transition-all text-xs font-bold group"
                  >
                    <span className="text-white group-hover:text-[#10b981]">Lavalink Audio Hosting</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#10b981] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <Link
                    href="/vps"
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-[#10b981]/10 border border-white/[0.06] hover:border-[#10b981]/30 transition-all text-xs font-bold group"
                  >
                    <span className="text-white group-hover:text-[#10b981]">Cloud VPS (India/DE/US)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#10b981] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Related Articles List */}
              {relatedPosts.length > 0 && (
                <div className="bg-[#0a0d14]/90 border border-white/[0.08] rounded-3xl p-6 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-extrabold text-[#10b981] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      More Technical Guides
                    </h4>
                  </div>
                  <div className="space-y-3.5">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-[#10b981]/40 transition-all group"
                      >
                        <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-wider mb-1 block">
                          {related.category}
                        </span>
                        <h5 className="text-xs font-bold text-white group-hover:text-[#10b981] transition-colors leading-snug line-clamp-2 mb-2">
                          {related.title}
                        </h5>
                        <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium">
                          <span>{related.readTime}</span>
                          <span className="text-[#10b981] group-hover:translate-x-0.5 transition-transform">Read &rarr;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
