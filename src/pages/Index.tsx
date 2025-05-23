
import { Coffee, CupSoda, MapPin, Clock, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  { 
    id: 'nhip-but-pha',
    name: 'Nhịp Bứt Phá',
    description: 'Cà phê Đen Đá',
    priceM: 29000,
    priceL: 45000,
    image: '/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png',
  },
  { 
    id: 'nhip-can-bang',
    name: 'Nhịp Cân Bằng',
    description: 'Cà phê Sữa Đá',
    priceM: 32000,
    priceL: 49000,
    image: '/lovable-uploads/b1bf2636-5990-4a19-a3b2-07efb000fe22.png',
  },
  { 
    id: 'nhip-diu-em',
    name: 'Nhịp Dịu Êm',
    description: 'Cà phê Bạc Xỉu',
    priceM: 35000,
    priceL: 55000,
    image: '/lovable-uploads/3adef3e3-ae21-4359-b3a9-4af34c045ad6.png',
  },
  { 
    id: 'nhip-bay-bong',
    name: 'Nhịp Bay Bổng',
    description: 'Cà phê Cốt Dừa',
    priceM: 37000,
    priceL: 57000,
    image: '/lovable-uploads/db42afe1-5e1d-451e-8239-38f3cd4bce1e.png',
  },
];

const Index = () => {
  // For scroll animations
  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const collectionRef = useRef(null);
  const storeRef = useRef(null);
  const promotionRef = useRef(null);

  // Simple intersection observer for scroll animations
  const [isMuted, setIsMutated] = useState(false);
  
  const toggleMute = () => {
    setIsMutated(!isMuted);
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = '1';
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const refs = [featuresRef, productsRef, collectionRef, storeRef, promotionRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Features */}
      <section className="section-padding bg-cream">
        <div 
          ref={featuresRef}
          className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-coffee-dark">
            Trải Nghiệm <span className="text-gradient">Nhịp Cà Phê</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <Coffee className="h-12 w-12 text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cà Phê Chất Lượng</h3>
              <p className="text-gray-600">Hạt cà phê được chọn lọc kỹ càng từ vùng nguyên liệu tốt nhất</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <CupSoda className="h-12 w-12 text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">Công Thức Độc Đáo</h3>
              <p className="text-gray-600">Những công thức pha chế riêng biệt tạo nên hương vị đặc trưng</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <MapPin className="h-12 w-12 text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">Không Gian Độc Đáo</h3>
              <p className="text-gray-600">Không gian thiết kế riêng biệt, phù hợp cho mọi nhịp cảm xúc</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <Clock className="h-12 w-12 text-coffee mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phục Vụ Tận Tâm</h3>
              <p className="text-gray-600">Mở cửa từ 8h00 đến 23h30 cùng đội ngũ phục vụ tận tâm</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding">
        <div 
          ref={productsRef}
          className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-coffee-dark">
            Thức Uống Nổi Bật
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Khám phá những thức uống đặc biệt của Nhịp Cà Phê, tạo nên từ hạt cà phê tươi và nguyên liệu chọn lọc
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <div 
                key={product.id} 
                className="transform transition-all duration-500"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  animation: 'fade-in 0.5s ease-out forwards',
                  animationDelay: `${index * 150}ms`
                }}
              >
                <MenuCard 
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  priceM={product.priceM}
                  priceL={product.priceL}
                  image={product.image}
                  isHighlighted={product.id === 'nhip-can-bang'}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-block bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold hover:scale-110 transform duration-200"
            >
              Xem Thêm Menu
            </Link>
          </div>
        </div>
      </section>
      
      {/* Store Preview - New Section */}
      <section className="section-padding bg-coffee-light bg-opacity-5">
        <div 
          ref={storeRef}
          className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
                Cửa hàng
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Nhịp Cà Phê - Nơi hương vị kể chuyện cảm xúc...
              </p>
              <p className="text-gray-700 mb-6">
                Mỗi giọt thức uống tại Nhịp không chỉ là tinh túy từ những nguyên liệu chọn lọc, 
                mà còn mang trong mình một "nhịp" riêng, chờ đợi để cùng bạn tạo nên những khoảnh khắc đáng nhớ.
              </p>
              <Link
                to="/about"
                className="inline-block bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold hover:scale-110 transform duration-200"
              >
                Về chúng tôi
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img 
                src="/lovable-uploads/9442e9b4-1066-47a7-bb42-c78e39a41912.png"
                alt="Nhịp Cà Phê Store" 
                className="rounded-lg shadow-lg w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Collection Highlight */}
      <section className="section-padding bg-coffee bg-opacity-10">
        <div 
          ref={collectionRef}
          className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
                Bộ Sưu Tập "Vị Nhịp"
              </h2>
              <p className="text-gray-700 mb-6">
                Bộ sưu tập "Vị Nhịp" mang đến trải nghiệm cà phê đa dạng, phù hợp với từng cung bậc cảm xúc. 
                Từ năng lượng bứt phá của Nhịp Bứt Phá, đến sự êm dịu của Nhịp Dịu Êm - mỗi hương vị đều được 
                chúng tôi chăm chút tỉ mỉ để đồng hành cùng bạn trong mọi khoảnh khắc.
              </p>
              <Link
                to="/menu?collection=vi-nhip"
                className="inline-block bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold hover:scale-110 transform duration-200"
              >
                Khám phá ngay
              </Link>
            </div>
            <div className="relative">
              <video 
                src="/lovable-uploads/0420.mp4" 
                className="rounded-lg shadow-lg w-full object-contain hover:scale-105 transition-transform duration-500"
                autoPlay
                loop
                muted={isMuted}
                playsInline // Important for autoplay on mobile browsers
                aria-label="Bộ sưu tập Vị Nhịp" // For accessibility, similar to alt text
              />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Promotion */}
      <section className="section-padding">
        <div 
          ref={promotionRef}
          className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="/lovable-uploads/c1bb8e3d-5b8e-4454-a9ae-573ffa3dd79d.png"
                alt="Khuyến mãi tháng 5" 
                className="rounded-lg shadow-lg w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4 py-1 px-3 bg-coffee text-white rounded-full animate-pulse">
                Khuyến mãi đặc biệt
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
                Tag Truyền Cảm Hứng Quà Nạp Năng Lượng
              </h2>
              <p className="text-gray-700 mb-3">
                Từ 5/5 đến 31/5, Nhịp Cà Phê tặng bạn bộ đôi tiếp sức cho ngày dài:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li className="transform transition-all duration-300 hover:translate-x-2">Tag truyền cảm hứng đặc biệt</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">Tặng thanh năng lượng cho mỗi cốc "Vị Nhịp" size L</li>
              </ul>
              <Link
                to="/news"
                className="inline-block bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold hover:scale-110 transform duration-200"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
