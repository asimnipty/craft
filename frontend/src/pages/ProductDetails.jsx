import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return null;

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-black mb-12 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[40px] overflow-hidden aspect-square shadow-sm"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">{product.category}</p>
              <h1 className="text-6xl font-bold tracking-tighter mb-6">{product.name}</h1>
              <p className="text-4xl font-light text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="space-y-6">
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-black text-white rounded-full py-6 text-lg font-bold uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95"
              >
                Add to Cart
              </button>
              
              <div className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <Truck className="w-6 h-6 mx-auto text-gray-400" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Fast Delivery</p>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="w-6 h-6 mx-auto text-gray-400" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Easy Returns</p>
                </div>
                <div className="text-center space-y-2">
                  <ShieldCheck className="w-6 h-6 mx-auto text-gray-400" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Secure Pay</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
