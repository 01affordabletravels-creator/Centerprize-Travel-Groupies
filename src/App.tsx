/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Plane, 
  ShoppingBag, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Star, 
  Share2, 
  CheckCircle2, 
  Heart, 
  Compass, 
  Calendar, 
  Award,
  ChevronRight,
  Info,
  X,
  Users,
  Globe
} from 'lucide-react';

import compressionSocksImg from './assets/images/compression_socks_1791243814721.jpg';
import memoryFoamPillowImg from './assets/images/memory_foam_pillow_1791243824578.jpg';
import babyTravelPillowImg from './assets/images/baby_travel_pillow_1791243834247.jpg';

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  link: string;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  features: string[];
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'gear' | 'trips' | 'groups'>('all');

  const products: Product[] = [
    {
      id: 'socks',
      name: 'Compression Socks',
      tagline: 'For long flights & healthy circulation',
      price: '$29.86',
      originalPrice: '$39.99',
      link: 'https://travelgroupies.myshopify.com',
      image: compressionSocksImg,
      rating: 4.9,
      reviewsCount: 342,
      badge: 'Bestseller',
      features: [
        'Graduated 20-30 mmHg medical-grade compression',
        'Reduces swelling, fatigue & DVT risks on long hauls',
        'Breathable, moisture-wicking anti-odor weave',
        'Reinforced toe & heel cushion for terminal walking'
      ]
    },
    {
      id: 'memory-pillow',
      name: 'Memory Foam Pillow',
      tagline: 'First class sleep in economy',
      price: '$24.99',
      originalPrice: '$34.99',
      link: 'https://travelgroupies.myshopify.com',
      image: memoryFoamPillowImg,
      rating: 4.8,
      reviewsCount: 289,
      badge: 'Frequent Flyer Choice',
      features: [
        'High-density responsive contour memory foam',
        '360° ergonomic chin & neck support prevents head bobbing',
        'Machine-washable luxury cooling velour slipcover',
        'Compact snap-strap easily attaches to carry-on bags'
      ]
    },
    {
      id: 'baby-pillow',
      name: 'Baby Travel Pillow',
      tagline: 'Comfort for your little explorer',
      price: '$19.99',
      originalPrice: '$28.00',
      link: 'https://travelgroupies.myshopify.com',
      image: babyTravelPillowImg,
      rating: 4.9,
      reviewsCount: 178,
      badge: 'Parent Favorite',
      features: [
        'Ultra-soft hypoallergenic, baby-safe plush fabric',
        'Total cradling head & cervical support for stroller/plane/car',
        'Prevents neck strain & slouching during sleep',
        'Machine-washable and quick-drying'
      ]
    }
  ];

  const handleShare = async () => {
    const shareData = {
      title: 'CENTERPRIZE TRAVEL GROUPIE',
      text: 'Shop travel essentials & book exclusive trips with Centerprize Travel Groupie!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-100 font-sans selection:bg-[#00d4ff]/30 selection:text-white pb-24 md:pb-12">
      {/* Top App Bar Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0b1220]/90 border-b border-cyan-900/30">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-blue-600 flex items-center justify-center shadow-lg shadow-[#00d4ff]/20 text-white font-black text-xl">
              ✈️
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#00d4ff] block leading-none">
                Official Hub
              </span>
              <span className="text-sm font-black tracking-tight text-white block">
                CENTERPRIZE TRAVEL
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="Share App"
              className="p-2 rounded-xl bg-[#16213e] hover:bg-[#1f2d54] text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Share2 className="w-4 h-4 text-[#00d4ff]" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container - Mobile First Styled App */}
      <main className="max-w-md mx-auto px-4 pt-4 pb-8 space-y-6">

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden rounded-[16px] bg-[#16213e] border border-cyan-500/20 p-5 shadow-xl shadow-cyan-950/20">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00d4ff]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

          {/* User Requested Header Exact Text */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d4ff]/15 border border-[#00d4ff]/40 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
            <Plane className="w-3.5 h-3.5 animate-pulse" />
            Travel Groupies Network
          </div>

          <h1 className="text-2xl sm:text-2xl font-black text-white tracking-tight leading-snug">
            CENTERPRIZE TRAVEL GROUPIE - Shop Our Travel Essentials ✈️
          </h1>

          <p className="mt-2 text-sm text-slate-300 font-medium leading-relaxed">
            Welcome to the Centerprize Travel Groupies network! Shop hand-picked flight essentials for your journey, and book exclusive vacation deals with our agency, <span className="text-[#00d4ff] font-bold">Affordable Travels</span> (powered by Evo Travel).
          </p>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-700/50 text-center">
            <div className="bg-[#0b1220]/60 rounded-xl p-2 border border-slate-800">
              <span className="block text-base font-black text-[#00d4ff]">4.9★</span>
              <span className="text-[10px] text-slate-400 font-medium">Groupie Rating</span>
            </div>
            <div className="bg-[#0b1220]/60 rounded-xl p-2 border border-slate-800">
              <span className="block text-base font-black text-emerald-400">Shopify</span>
              <span className="text-[10px] text-slate-400 font-medium">Essentials Hub</span>
            </div>
            <div className="bg-[#0b1220]/60 rounded-xl p-2 border border-slate-800">
              <span className="block text-base font-black text-purple-400">Evo</span>
              <span className="text-[10px] text-slate-400 font-medium">Affordable Travels</span>
            </div>
          </div>
        </section>

        {/* Filter / Quick Jump Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all text-center ${
              activeTab === 'all'
                ? 'bg-[#00d4ff] text-[#0b1220] shadow-md shadow-[#00d4ff]/25'
                : 'bg-[#16213e] text-slate-300 hover:bg-[#1f2d54]'
            }`}
          >
            All Offers
          </button>
          <button
            onClick={() => {
              setActiveTab('gear');
              const el = document.getElementById('products-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all text-center ${
              activeTab === 'gear'
                ? 'bg-[#00d4ff] text-[#0b1220] shadow-md shadow-[#00d4ff]/25'
                : 'bg-[#16213e] text-slate-300 hover:bg-[#1f2d54]'
            }`}
          >
            Travel Gear (3)
          </button>
          <button
            onClick={() => {
              setActiveTab('trips');
              const el = document.getElementById('evo-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all text-center ${
              activeTab === 'trips'
                ? 'bg-gradient-to-r from-[#00d4ff] to-purple-500 text-white shadow-md'
                : 'bg-[#16213e] text-slate-300 hover:bg-[#1f2d54]'
            }`}
          >
            Book Trips 🌴
          </button>
          <button
            onClick={() => {
              setActiveTab('groups');
              const el = document.getElementById('group-planning-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all text-center ${
              activeTab === 'groups'
                ? 'bg-gradient-to-r from-teal-400 to-[#00d4ff] text-[#0b1220] shadow-md font-extrabold'
                : 'bg-[#16213e] text-slate-300 hover:bg-[#1f2d54]'
            }`}
          >
            Group Planning 👥
          </button>
        </div>

        {/* PRODUCTS SECTION */}
        <section id="products-section" className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#00d4ff]" />
              Travel Essentials
            </h2>
            <span className="text-xs font-bold text-slate-400 bg-[#16213e] px-2.5 py-1 rounded-full border border-slate-700/50">
              Direct Shopify Store
            </span>
          </div>

          {/* 3 PRODUCT CARDS */}
          <div className="space-y-4">
            {products.map((product, idx) => (
              <article
                key={product.id}
                className="bg-[#16213e] rounded-[16px] border border-slate-700/60 hover:border-[#00d4ff]/50 transition-all duration-300 overflow-hidden shadow-lg shadow-black/30 flex flex-col"
              >
                {/* Product Image & Badges */}
                <div className="relative w-full aspect-[4/3] bg-slate-900/60 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16213e] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#0b1220]/90 backdrop-blur-md border border-[#00d4ff]/40 text-[#00d4ff] px-2.5 py-1 rounded-lg text-xs font-extrabold flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#00d4ff]" />
                      {product.badge}
                    </div>
                  )}

                  {/* Number tag */}
                  <div className="absolute top-3 right-3 bg-[#0b1220]/80 backdrop-blur-md text-slate-300 px-2.5 py-0.5 rounded-lg text-xs font-bold border border-slate-700">
                    Item #{idx + 1}
                  </div>

                  {/* Price overlay on image */}
                  <div className="absolute bottom-3 left-3 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white tracking-tight drop-shadow-md">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through font-semibold">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Quick info icon */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 right-3 p-2 bg-[#0b1220]/90 hover:bg-[#00d4ff] hover:text-[#0b1220] text-slate-200 rounded-xl border border-slate-700 transition-colors shadow-md text-xs font-semibold flex items-center gap-1"
                    title="View details"
                  >
                    <Info className="w-4 h-4" />
                    <span>Specs</span>
                  </button>
                </div>

                {/* Product Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-black text-white tracking-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Exact User Prompt Tagline */}
                    <p className="text-sm font-medium text-cyan-200/90 italic mb-3">
                      "{product.tagline}"
                    </p>

                    {/* Feature Highlights */}
                    <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00d4ff] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buy Button linking to Shopify */}
                  <div className="pt-2 border-t border-slate-700/60">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-[12px] bg-gradient-to-r from-[#00d4ff] to-[#00b4d8] hover:from-[#38e1ff] hover:to-[#00c8f0] active:scale-[0.99] text-[#0b1220] font-black text-sm tracking-wide shadow-lg shadow-[#00d4ff]/20 hover:shadow-[#00d4ff]/35 transition-all flex items-center justify-center gap-2 uppercase group"
                    >
                      <span>Buy Now - {product.price}</span>
                      <ExternalLink className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <p className="text-center text-[10px] text-slate-400 mt-1.5 font-medium">
                      Ships via travelgroupies.myshopify.com
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4TH SECTION - EVO TRAVEL & AFFORDABLE TRAVELS */}
        <section
          id="evo-section"
          className="relative overflow-hidden rounded-[16px] p-6 shadow-2xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #7928ca 50%, #581c87 100%)',
          }}
        >
          {/* Subtle decorative circles */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-black/20 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Top Pill Clarifying Business Relationship */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-3 border border-white/20">
              <Compass className="w-3.5 h-3.5 text-[#00d4ff]" />
              Affordable Travels • Powered by Evo
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
              Ready to Book Your Trip?
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-base font-semibold text-white/90 drop-shadow-sm">
              Exclusive deals for our groupies
            </p>

            <p className="mt-2 text-xs text-white/90 max-w-xs mx-auto leading-relaxed">
              Book with <strong className="text-white font-black underline decoration-cyan-300">Affordable Travels</strong>, our premier travel business powered by Evo. Access private wholesale rates on flights, all-inclusive resorts, and group cruises!
            </p>

            {/* Travel Agency Highlights */}
            <div className="grid grid-cols-2 gap-2.5 my-5 text-left text-xs text-white">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-2.5 border border-white/15 flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#00d4ff] shrink-0" />
                <span className="font-semibold">Flight Price Matching</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-2.5 border border-white/15 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pink-300 shrink-0" />
                <span className="font-semibold">Resort & Cruise Deals</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-2.5 border border-white/15 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="font-semibold">Groupie VIP Perks</span>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-2.5 border border-white/15 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                <span className="font-semibold">Certified Evo Agent</span>
              </div>
            </div>

            {/* Required Button: White button, black text */}
            <a
              href="https://evotravelagent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-[12px] bg-white hover:bg-slate-100 active:scale-[0.98] text-black font-black text-sm uppercase tracking-wider shadow-2xl transition-all group"
            >
              <span>BOOK TRIP ON EVO SITE</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5] text-black group-hover:translate-x-0.5 transition-transform" />
            </a>

            <p className="mt-2 text-[10px] text-white/80 font-medium">
              Affordable Travels portal on evotravelagent.com
            </p>
          </div>
        </section>

        {/* 5TH SECTION - CENTERPRIZE PRODUCTION (TRAVEL AGENT SERVICES & GROUP PLANNING) */}
        <section
          id="group-planning-section"
          className="bg-[#16213e] rounded-[16px] border border-cyan-500/30 p-5 shadow-xl shadow-cyan-950/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d4ff]/15 border border-[#00d4ff]/40 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Users className="w-3.5 h-3.5" />
            Group Planning & Agent Services
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Custom Group Travel & Concierge
          </h2>

          <p className="mt-1 text-sm font-semibold text-cyan-200">
            Centerprize Productions Travel Services
          </p>

          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            Planning a family reunion, group cruise, destination wedding, corporate retreat, or large group excursion? 
            Visit <strong className="text-white underline decoration-cyan-400">centerprize-productions.com</strong> for dedicated travel agent services, comprehensive group coordination, and custom curated itineraries.
          </p>

          {/* Service Feature Grid */}
          <div className="grid grid-cols-2 gap-2.5 my-4 text-xs">
            <div className="bg-[#0b1220]/70 rounded-xl p-2.5 border border-slate-700/60">
              <span className="font-bold text-[#00d4ff] block text-xs">👥 Group Rates</span>
              <span className="text-[11px] text-slate-400">Room blocks, flights & cruise deals</span>
            </div>
            <div className="bg-[#0b1220]/70 rounded-xl p-2.5 border border-slate-700/60">
              <span className="font-bold text-[#00d4ff] block text-xs">🗺️ Custom Itineraries</span>
              <span className="text-[11px] text-slate-400">Day-by-day curated tours & excursions</span>
            </div>
            <div className="bg-[#0b1220]/70 rounded-xl p-2.5 border border-slate-700/60">
              <span className="font-bold text-[#00d4ff] block text-xs">💍 Destination Events</span>
              <span className="text-[11px] text-slate-400">Weddings, retreats & milestone trips</span>
            </div>
            <div className="bg-[#0b1220]/70 rounded-xl p-2.5 border border-slate-700/60">
              <span className="font-bold text-[#00d4ff] block text-xs">🤝 Agent Support</span>
              <span className="text-[11px] text-slate-400">End-to-end planning with our experts</span>
            </div>
          </div>

          {/* Action CTA Button */}
          <a
            href="https://centerprize-productions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-[12px] bg-gradient-to-r from-cyan-400 via-teal-400 to-[#00d4ff] hover:from-cyan-300 hover:to-teal-300 active:scale-[0.98] text-[#0b1220] font-black text-sm tracking-wide shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 uppercase transition-all group"
          >
            <Globe className="w-4 h-4 stroke-[2.5]" />
            <span>Visit Centerprize-Productions.com</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
            Opens centerprize-productions.com for group planning details
          </p>
        </section>

        {/* Groupie Trust & Guarantees */}
        <section className="bg-[#16213e] rounded-[16px] p-4 border border-slate-700/60 space-y-3">
          <h3 className="text-xs uppercase font-extrabold text-[#00d4ff] tracking-wider">
            Why Centerprize Travel Groupies & Partners?
          </h3>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2 text-slate-300">
              <Truck className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Fast Track Shipping</span>
                <span className="text-[11px] text-slate-400">Direct from Shopify</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Secure Checkout</span>
                <span className="text-[11px] text-slate-400">Encrypted payments</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <Users className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Group Planning</span>
                <span className="text-[11px] text-slate-400">centerprize-productions.com</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <Plane className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Affordable Travels</span>
                <span className="text-[11px] text-slate-400">Powered by Evo Travel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-2 pb-6 text-slate-500 text-xs space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-slate-400 font-semibold flex-wrap">
            <span>CENTERPRIZE TRAVEL GROUPIES</span>
            <span>•</span>
            <span className="text-[#00d4ff]">AFFORDABLE TRAVELS</span>
            <span>•</span>
            <a
              href="https://centerprize-productions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              CENTERPRIZE PRODUCTIONS
            </a>
          </div>
          <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
            Travel essentials by Centerprize Travel Groupies. Reservations via Affordable Travels (Evo). Full travel agent services & group planning by Centerprize Productions.
          </p>
          <div className="pt-2 text-[10px] text-slate-600">
            © {new Date().getFullYear()} Affordable Travels & Centerprize Travel Groupie. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Floating Bottom Quick Action Navigation for Mobile App Feel */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b1220]/95 backdrop-blur-lg border-t border-slate-800 py-2.5 px-4 md:hidden">
        <div className="max-w-md mx-auto flex items-center gap-2">
          <a
            href="https://travelgroupies.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#16213e] hover:bg-[#1f2d54] text-white border border-[#00d4ff]/40 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span>Shop Essentials</span>
          </a>
          <a
            href="https://evotravelagent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#00d4ff] to-purple-600 hover:opacity-95 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-lg shadow-purple-900/30"
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Book Trip (Affordable Travels)</span>
          </a>
        </div>
      </nav>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div 
            className="bg-[#16213e] border border-cyan-500/30 w-full max-w-md rounded-t-[24px] sm:rounded-[20px] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col animate-in fade-in slide-in-from-bottom duration-200"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#00d4ff] uppercase tracking-wider">Product Specifications</span>
                <h3 className="text-lg font-black text-white">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl bg-[#0b1220] text-slate-400 hover:text-white border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-white font-black text-sm">
                  {selectedProduct.price}
                </div>
              </div>

              <div className="bg-[#0b1220]/70 rounded-xl p-3 border border-slate-800">
                <p className="text-sm font-semibold text-cyan-300 italic">
                  "{selectedProduct.tagline}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Features</h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#0b1220]/40 p-2 rounded-lg border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 border-t border-slate-700/60 bg-[#0b1220]">
              <a
                href={selectedProduct.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#00d4ff] hover:bg-[#38e1ff] text-[#0b1220] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00d4ff]/25"
              >
                <span>Purchase on Shopify ({selectedProduct.price})</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Copied Link Toast */}
      {copiedLink && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#00d4ff] text-[#0b1220] font-black text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>App link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
