import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="bg-[#fff9fa]/90 backdrop-blur-xl sticky top-0 z-50 border-b border-[#f8d7da]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-[#d63384]" />
          <Link to="/" className="text-3xl font-serif font-bold tracking-tight text-[#d63384]">
            Sydney<span className="text-[#f1b0b7]">Craft</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <Link to="/products" className="text-xs font-bold uppercase tracking-[0.2em] text-[#d63384]/70 hover:text-[#d63384] transition-colors">Shop All</Link>
          <Link to="/products" className="text-xs font-bold uppercase tracking-[0.2em] text-[#d63384]/70 hover:text-[#d63384] transition-colors">New In</Link>
          <div className="flex items-center space-x-6">
            <button className="p-2 text-[#d63384]/70 hover:text-[#d63384] transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <Link to="/cart" className="relative group p-2">
              <ShoppingBag className="w-6 h-6 text-[#d63384]/70 group-hover:text-[#d63384] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d63384] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#d63384]">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#f8d7da] p-8 space-y-6">
          <Link to="/products" className="block text-xl font-serif text-[#d63384]" onClick={() => setIsOpen(false)}>Shop All</Link>
          <Link to="/cart" className="block text-xl font-serif text-[#d63384]" onClick={() => setIsOpen(false)}>My Cart ({cartCount})</Link>
        </div>
      )}
    </nav>
  );
}
