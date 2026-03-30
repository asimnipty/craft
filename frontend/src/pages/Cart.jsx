import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff9fa] px-6 text-center">
        <ShoppingBag className="w-20 h-20 text-[#f1b0b7] mb-8" />
        <h2 className="text-5xl font-serif text-[#d63384] mb-8">Your cart is empty</h2>
        <Link to="/" className="girly-button">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fff9fa] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-serif text-[#d63384] mb-24">My Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-12">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                layout
                className="flex flex-col md:flex-row gap-10 pb-12 border-b border-[#f8d7da]"
              >
                <div className="w-full md:w-48 aspect-[3/4] bg-white rounded-[40px] overflow-hidden shadow-sm flex-shrink-0 border border-[#f8d7da]/30">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#f1b0b7] mb-2">{item.category}</p>
                      <h3 className="text-3xl font-serif text-[#4a4a4a]">{item.name}</h3>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all">
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-8">
                    <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm border border-[#f8d7da]/30 space-x-8">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-[#f1b0b7] hover:text-[#d63384]">
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-lg font-bold text-[#4a4a4a] w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-[#f1b0b7] hover:text-[#d63384]">
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-3xl font-serif text-[#d63384]">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-[40px] p-12 shadow-xl border border-[#f8d7da]/30 sticky top-32">
              <h3 className="text-2xl font-serif text-[#d63384] mb-10">Summary</h3>
              <div className="space-y-6 mb-12">
                <div className="flex justify-between text-[#4a4a4a]/70 font-medium">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#4a4a4a]/70 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="pt-8 border-t border-[#f8d7da] flex justify-between items-end">
                  <span className="text-lg font-bold text-[#4a4a4a]">Total</span>
                  <span className="text-5xl font-serif text-[#d63384]">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="girly-button w-full flex items-center justify-center space-x-4">
                <span>Checkout</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
