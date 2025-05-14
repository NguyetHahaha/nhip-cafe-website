
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop",
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
            <img 
              src="/lovable-uploads/13212ed4-9487-4396-98a0-b97b4b3a62c5.png" 
              alt="Nhịp Cà Phê" 
              className="h-14 w-auto mr-3" 
            />
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
