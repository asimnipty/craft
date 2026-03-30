import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Truck, Store, Gift, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  const { cartTotal } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [method, setMethod] = useState('delivery'); // delivery, collection, gift

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff9fa] px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-20 rounded-[60px] shadow-xl max-w-2xl w-full border border-[#f8d7da]"
        >
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-10" />
          <h2 className="text-5xl font-serif text-[#d63384] mb-6">Order Received!</h2>
          <p className="text-lg text-[#4a4a4a]/70 font-medium mb-12">
            Thank you for shopping with Sydney Craft Co. We're preparing your artisanal treasures with extra love.
          </p>
          <Link to="/" className="girly-button inline-block">
            Back to Shop
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff9fa] min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/cart" className="inline-flex items-center text-sm font-bold text-[#f1b0b7] hover:text-[#d63384] mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>
        
        <h1 className="text-6xl font-serif text-[#d63384] mb-16">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#f8d7da]/30">
              <h3 className="text-xl font-serif text-[#d63384] mb-8">Choose your option</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setMethod('delivery')}
                  className={`w-full flex items-center p-6 rounded-3xl border-2 transition-all ${method === 'delivery' ? 'border-[#d63384] bg-[#fff9fa]' : 'border-gray-100 hover:border-[#f8d7da]'}`}
                >
                  <Truck className={`w-6 h-6 mr-4 ${method === 'delivery' ? 'text-[#d63384]' : 'text-gray-300'}`} />
                  <div className="text-left">
                    <p className="font-bold text-sm">Home Delivery</p>
                    <p className="text-xs text-gray-400">Standard shipping across Australia</p>
                  </div>
                </button>

                <button 
                  onClick={() => setMethod('collection')}
                  className={`w-full flex items-center p-6 rounded-3xl border-2 transition-all ${method === 'collection' ? 'border-[#d63384] bg-[#fff9fa]' : 'border-gray-100 hover:border-[#f8d7da]'}`}
                >
                  <Store className={`w-6 h-6 mr-4 ${method === 'collection' ? 'text-[#d63384]' : 'text-gray-300'}`} />
                  <div className="text-left">
                    <p className="font-bold text-sm">Local Collection</p>
                    <p className="text-xs text-gray-400">Pick up from our Surry Hills studio</p>
                  </div>
                </button>

                <button 
                  onClick={() => setMethod('gift')}
                  className={`w-full flex items-center p-6 rounded-3xl border-2 transition-all ${method === 'gift' ? 'border-[#d63384] bg-[#fff9fa]' : 'border-gray-100 hover:border-[#f8d7da]'}`}
                >
                  <Gift className={`w-6 h-6 mr-4 ${method === 'gift' ? 'text-[#d63384]' : 'text-gray-300'}`} />
                  <div className="text-left">
                    <p className="font-bold text-sm">Gift Delivery</p>
                    <p className="text-xs text-gray-400">Gift wrapped with a personal note</p>
                  </div>
                </button>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="bg-white rounded-[40px] p-10 shadow-sm border border-[#f8d7da]/30 space-y-6">
              <h3 className="text-xl font-serif text-[#d63384] mb-4">Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="First Name" className="w-full bg-[#fff9fa] rounded-2xl px-6 py-4 text-sm border border-[#f8d7da]/30 focus:ring-2 focus:ring-[#d63384] outline-none" />
                <input required placeholder="Last Name" className="w-full bg-[#fff9fa] rounded-2xl px-6 py-4 text-sm border border-[#f8d7da]/30 focus:ring-2 focus:ring-[#d63384] outline-none" />
              </div>
              <input required placeholder="Email" type="email" className="w-full bg-[#fff9fa] rounded-2xl px-6 py-4 text-sm border border-[#f8d7da]/30 focus:ring-2 focus:ring-[#d63384] outline-none" />
              {method !== 'collection' && (
                <input required placeholder="Shipping Address" className="w-full bg-[#fff9fa] rounded-2xl px-6 py-4 text-sm border border-[#f8d7da]/30 focus:ring-2 focus:ring-[#d63384] outline-none" />
              )}
              <div className="pt-6">
                <button type="submit" className="girly-button w-full flex items-center justify-center space-x-3">
                  <CreditCard className="w-5 h-5" />
                  <span>Complete Order</span>
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#f8d7da]/30 sticky top-32">
              <h3 className="text-xl font-serif text-[#d63384] mb-8">Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-[#4a4a4a]/70">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-[#4a4a4a]/70">
                  <span>{method === 'delivery' ? 'Delivery' : method === 'collection' ? 'Collection' : 'Gift Shipping'}</span>
                  <span className="text-green-500">{method === 'collection' ? 'Free' : '$5.00'}</span>
                </div>
                <div className="pt-6 border-t border-[#f8d7da] flex justify-between items-end">
                  <span className="font-bold">Total</span>
                  <span className="text-4xl font-serif text-[#d63384]">${(cartTotal + (method === 'collection' ? 0 : 5)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
