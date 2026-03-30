import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#f8d7da] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <Flower className="w-6 h-6 text-[#d63384]" />
            <h3 className="text-2xl font-serif font-bold text-[#d63384]">SydneyCraft</h3>
          </div>
          <p className="text-[#4a4a4a]/60 max-w-sm leading-relaxed mb-8">
            Hand-crafting magic in Sydney since 2024. We believe in slow living, sustainable materials, and the beauty of the handmade.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-[#fff9fa] rounded-full text-[#d63384] hover:bg-[#f8d7da] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-[#fff9fa] rounded-full text-[#d63384] hover:bg-[#f8d7da] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-[#fff9fa] rounded-full text-[#d63384] hover:bg-[#f8d7da] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f1b0b7] mb-8">Explore</h4>
          <ul className="space-y-4 text-sm font-medium text-[#4a4a4a]/70">
            <li><Link to="/" className="hover:text-[#d63384]">The Collection</Link></li>
            <li><Link to="/" className="hover:text-[#d63384]">Gift Cards</Link></li>
            <li><Link to="/" className="hover:text-[#d63384]">Workshop</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f1b0b7] mb-8">Care</h4>
          <ul className="space-y-4 text-sm font-medium text-[#4a4a4a]/70">
            <li><Link to="/" className="hover:text-[#d63384]">Shipping Info</Link></li>
            <li><Link to="/" className="hover:text-[#d63384]">Returns Policy</Link></li>
            <li><Link to="/" className="hover:text-[#d63384]">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#f8d7da]/30 text-center">
        <p className="text-[10px] text-[#f1b0b7] font-bold uppercase tracking-widest">
          © 2026 Sydney Craft Co. • Made with Love
        </p>
      </div>
    </footer>
  );
}
