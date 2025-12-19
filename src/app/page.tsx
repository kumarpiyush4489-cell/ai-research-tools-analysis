"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  ShieldCheck, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  Github,
  FileText,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            AI Research Analysis
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-blue-600 transition-colors">Problem</a>
            <a href="#overview" className="hover:text-blue-600 transition-colors">Tool Overview</a>
            <a href="#findings" className="hover:text-blue-600 transition-colors">Findings</a>
            <a href="#comparison" className="hover:text-blue-600 transition-colors">Comparison</a>
          </div>
          <Badge variant="outline" className="text-slate-500 font-normal">
            Internship Task
          </Badge>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-blue-50 text-blue-600 hover:bg-blue-50 border-blue-100 px-4 py-1 rounded-full font-medium">
                Research Intern Task Submission
              </Badge>
            </motion.div>
            <motion.h1 
              {...fadeIn}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Comparative Analysis of <span className="text-blue-600">AI Research Tools</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              A focused research study on Perplexity AI and its alternatives, evaluating their impact on research efficiency and accuracy.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 shadow-lg shadow-blue-200" asChild>
                <a href="#overview">View Analysis</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-200" asChild>
                <a href="#findings">Key Findings</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="py-24 px-4 bg-slate-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <div className="inline-flex p-3 rounded-2xl bg-white shadow-sm border border-slate-100 mb-6">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">The Problem Statement</h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Modern organizations struggle with fast, reliable, and source-backed research when using traditional search engines. The sheer volume of information often leads to significant challenges.
                  </p>
                  <p>
                    Key pain points include excessive <span className="text-slate-900 font-medium">time consumption</span>, 
                    <span className="text-slate-900 font-medium"> scattered information</span> across multiple tabs, 
                    and growing <span className="text-slate-900 font-medium">credibility issues</span> in an era of digital misinformation.
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 gap-4">
                {[
                  { title: "Time Loss", desc: "Hours spent sifting through irrelevant SEO-optimized links." },
                  { title: "Fragmented Data", desc: "Research scattered across dozens of disconnected sources." },
                  { title: "Trust Gap", desc: "Difficulty verifying the original source of specific claims." }
                ].map((item, i) => (
                  <Card key={i} className="border-none shadow-sm bg-white">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tool Overview */}
        <section id="overview" className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Tool Overview</h2>
            <p className="text-slate-600">The primary focus of this analysis: Perplexity AI</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100 shadow-xl shadow-blue-50 overflow-hidden group">
              <div className="bg-blue-600 p-8 text-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Search className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <Badge className="bg-white/20 text-white border-none mb-4 hover:bg-white/30 transition-colors">Featured Tool</Badge>
                  <h3 className="text-4xl font-bold mb-2">Perplexity AI</h3>
                  <p className="text-blue-100 text-lg max-w-xl">A conversational search engine that provides direct, accurate answers to complex questions with real-time web citations.</p>
                </div>
              </div>
              <CardContent className="p-8 bg-white">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      What it does
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Perplexity leverages advanced LLMs to browse the internet in real-time. Instead of a list of links, it provides a synthesized summary that directly answers the user's query.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      Key Strength: Source-Backed
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Every statement made by the AI is accompanied by numerical citations. Users can hover or click to verify the information at the original source, ensuring high accountability.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Why it is useful for research</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Rapid literature review & synthesis",
                      "Fact-checking and claim verification",
                      "Discovering niche sources and papers",
                      "Market intelligence gathering",
                      "Cross-referencing multiple viewpoints"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Findings */}
        <section id="findings" className="py-24 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Increased Speed",
                  desc: "Faster research process compared to traditional search engines by eliminating manual page browsing."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Higher Trust",
                  desc: "Source-backed answers significantly improve trust in AI-generated output for professional use."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Broad Utility",
                  desc: "Extremely useful for students, analysts, marketers, and academic researchers alike."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Reduced Overload",
                  desc: "Effectively reduces information overload by synthesizing complex data into clear summaries."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-200 text-sm flex items-start gap-4">
              <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-red-400">Limitation:</span> While excellent for factual retrieval, Perplexity AI has limited flexibility for highly creative tasks or long-form narrative generation compared to models like ChatGPT.
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Comparison Analysis</h2>
              <p className="text-slate-600">How Perplexity stacks up against established productivity tools</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Perplexity AI",
                  use: "Factual Search & Research",
                  price: "Free / $20 Pro",
                  pros: ["Citations", "Real-time web", "No hallucination"],
                  cons: ["Creative tasks", "Narrative flow"],
                  featured: true
                },
                {
                  name: "ChatGPT",
                  use: "Conversational & Creative",
                  price: "Free / $20 Plus",
                  pros: ["Deep reasoning", "Creative writing", "Coding"],
                  cons: ["Hallucinations", "Link rot", "Less transparency"],
                  featured: false
                },
                {
                  name: "Notion AI",
                  use: "Workspace Productivity",
                  price: "Add-on subscription",
                  pros: ["Existing workflow", "Document editing", "Summarization"],
                  cons: ["Internal data focus", "Limited search"],
                  featured: false
                }
              ].map((tool, i) => (
                <Card key={i} className={`flex flex-col h-full transition-all duration-300 ${tool.featured ? 'border-blue-200 shadow-lg scale-105 z-10' : 'border-slate-100 shadow-sm hover:shadow-md'}`}>
                  <CardHeader>
                    {tool.featured && <Badge className="w-fit mb-2 bg-blue-600">Primary Recommendation</Badge>}
                    <CardTitle className="text-2xl font-bold">{tool.name}</CardTitle>
                    <CardDescription className="font-medium text-blue-600">{tool.use}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pricing</span>
                      <p className="text-slate-900 font-medium">{tool.price}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-2 block">Pros</span>
                        <ul className="space-y-1">
                          {tool.pros.map((p, j) => (
                            <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2 block">Cons</span>
                        <ul className="space-y-1">
                          {tool.cons.map((c, j) => (
                            <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                              <XCircle className="w-3 h-3 text-red-400" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-24 px-4 bg-blue-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Final Conclusion</h2>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Perplexity AI emerges as the premier choice for <span className="underline decoration-white/30 underline-offset-4">structured, factual research</span>. While tools like ChatGPT and Notion AI excel in broader productivity and creative generation, they are best used as <span className="font-bold italic">complements</span> to Perplexity's citation-first research approach.
            </p>
            <div className="inline-flex h-1 w-20 bg-blue-400/50 rounded-full"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-bold text-lg tracking-tight flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-blue-600" />
              AI Research Tools Analysis
            </span>
            <p className="text-slate-500 text-sm">
              Research Task – Research Intern Submission. 
              <br />Evaluation of modern AI search capabilities.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 md:justify-end text-sm font-medium text-slate-400">
            <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <Github className="w-4 h-4" />
              Github
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <FileText className="w-4 h-4" />
              Documentation
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
              <ExternalLink className="w-4 h-4" />
              Official Report
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-50 text-center text-xs text-slate-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Research Internship Task. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
