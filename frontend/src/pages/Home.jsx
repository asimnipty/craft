import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { Flower, Sparkles, Gift, Heart } from 'lucide-react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff9fa]">
      <Flower className="w-12 h-12 text-[#f1b0b7] animate-spin" />
    </div>
  );

  return (
    <div className="bg-[#fff9fa] min-h-screen">
      <header className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-10 left-10 text-[#f8d7da] opacity-20 rotate-12">
          <Flower className="w-64 h-64" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#f8d7da] opacity-20 -rotate-12">
          <Flower className="w-48 h-48" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur px-6 py-2 rounded-full border border-[#f8d7da] mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#d63384]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#d63384]">Handmade with Love in Sydney</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[100px] font-serif leading-[1] mb-12 text-[#d63384]"
          >
            Artisanal <span className="italic text-[#f1b0b7]">Magic</span><br/>for your Home
          </motion.h1>
          <p className="text-xl text-[#4a4a4a]/70 max-w-xl mx-auto font-medium leading-relaxed mb-12">
            Discover unique, hand-crafted treasures that bring a touch of whimsy and warmth to your everyday life.
          </p>
          <div className="flex justify-center mb-16">
            <Link to="/products" className="girly-button">
              Shop the Collection
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[#d63384]/60">
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Gift Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-[60px] p-16 border border-[#f8d7da] text-center space-y-6">
            <h3 className="text-4xl font-serif text-[#d63384]">New Arrivals</h3>
            <p className="text-[#4a4a4a]/60">Check out our latest hand-crafted treasures from the Sydney studio.</p>
            <Link to="/products" className="inline-block text-[#d63384] font-bold uppercase tracking-widest border-b-2 border-[#f8d7da] pb-1 hover:border-[#d63384] transition-all">
              View New In
            </Link>
          </div>
          <div className="bg-white rounded-[60px] p-16 border border-[#f8d7da] text-center space-y-6">
            <h3 className="text-4xl font-serif text-[#d63384]">Our Story</h3>
            <p className="text-[#4a4a4a]/60">Learn about our journey from a small studio to a beloved local brand.</p>
            <Link to="/" className="inline-block text-[#d63384] font-bold uppercase tracking-widest border-b-2 border-[#f8d7da] pb-1 hover:border-[#d63384] transition-all">
              Read More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
