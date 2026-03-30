import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Heart, Star, Leaf } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="girly-card group">
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="bg-white/80 backdrop-blur p-2 rounded-full text-[#d63384] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
            <Heart className="w-4 h-4" />
          </button>
          <div className="bg-[#f8d7da]/90 backdrop-blur p-2 rounded-full text-[#d63384]">
            <Leaf className="w-4 h-4" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-[#d63384] text-white rounded-full py-3 text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="p-8 text-center">
        <div className="flex items-center justify-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-[#d63384] fill-[#d63384]' : 'text-gray-200'}`} />
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#f1b0b7] font-bold mb-2">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-2xl font-serif text-[#4a4a4a] mb-2 hover:text-[#d63384] transition-colors">{product.name}</h3>
        </Link>
        <p className="text-xl font-light text-[#d63384]">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
