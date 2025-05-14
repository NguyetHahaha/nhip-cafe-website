
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const heroImages = [
  "/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png",
  "/lovable-uploads/f68917f9-f3df-4c8c-8328-612699c8452d.png",
  "/lovable-uploads/6a1662a2-ef72-431d-9f12-309f4d7d1b1f.png",
  "/lovable-uploads/28d980de-d5b2-4d4d-b4fe-769b7ed2803c.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-coffee-dark/60"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
            }}
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center max-w-3xl px-4">
          <div className="flex items-center justify-center mb-4">
            <Coffee className="h-12 w-12 text-white mr-3" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Nhịp Cà Phê</h1>
          </div>
          <p className="text-xl md:text-2xl text-white my-6 italic">
            Cùng bạn đồng hành mọi nhịp cảm xúc
          </p>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Khám phá hương vị đặc biệt từ những hạt cà phê nguyên chất Việt Nam,
            được chăm chút để tạo nên thức uống hoàn hảo cho mỗi cung bậc cảm xúc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="bg-white text-coffee-dark hover:bg-cream hover:text-coffee transition px-6 py-3 rounded-md font-semibold"
            >
              Xem Menu
            </Link>
            <Link
              to="/order"
              className="bg-coffee text-white hover:bg-coffee-light transition px-6 py-3 rounded-md font-semibold"
            >
              Đặt Hàng Ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
