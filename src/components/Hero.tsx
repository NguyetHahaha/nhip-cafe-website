
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Animation variants for text elements
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut", 
        delay: 0.3 
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut", 
        delay: 0.5 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut", 
        delay: 0.7 
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Images with enhanced transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-coffee-dark/80" 
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/60 to-coffee-dark/50" />
        </motion.div>
      </AnimatePresence>
      
      {/* Content with enhanced animations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div 
          className="text-center max-w-3xl px-4"
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            variants={titleVariants}
          >
            <motion.img 
              src="/lovable-uploads/13212ed4-9487-4396-98a0-b97b4b3a62c5.png" 
              alt="Nhịp Cà Phê" 
              className="h-14 w-auto mr-3"
              animate={{ 
                y: [0, -8, 0], 
                transition: { 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }
              }}
            />
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              variants={titleVariants}
            >
              Nhịp Cà Phê
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-white my-6 italic drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]"
            variants={subtitleVariants}
          >
            Cùng bạn đồng hành mọi nhịp cảm xúc
          </motion.p>
          
          <motion.p 
            className="text-lg text-white mb-8 max-w-xl mx-auto bg-coffee-dark/50 p-4 rounded-lg backdrop-blur-sm shadow-lg whitespace-pre-line"
            variants={descriptionVariants}
          >
            Khám phá hương vị đặc biệt từ những hạt cà phê nguyên chất Việt Nam, được chăm chút để tạo nên thức uống hoàn hảo cho mỗi cung bậc cảm xúc.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={buttonVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                to="/menu"
                className="bg-white text-coffee-dark hover:bg-cream hover:text-coffee transition px-6 py-3 rounded-md font-semibold transform duration-200 inline-block"
              >
                Xem Menu
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                to="/order"
                className="bg-coffee text-white hover:bg-coffee-light transition px-6 py-3 rounded-md font-semibold transform duration-200 inline-block"
              >
                Đặt Hàng Ngay
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-white text-sm mt-8 max-w-md mx-auto bg-coffee-dark/50 p-3 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 1, duration: 0.8 }
            }}
          >
            Nhịp Cà Phê - Người bạn đồng hành cùng bạn trẻ giữa hành trình cuộc sống sôi động tại Sài Gòn
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced indicator dots with animations */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.5 }}
            animate={index === currentImageIndex ? 
              { scale: [1, 1.2, 1], opacity: 1 } : 
              { scale: 1, opacity: 0.5 }
            }
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      
      {/* Floating animated elements */}
      <motion.div 
        className="absolute top-1/4 left-1/6 w-10 h-10 rounded-full bg-coffee-light/20 backdrop-blur-md"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/6 w-16 h-16 rounded-full bg-cream/20 backdrop-blur-md"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Coffee bean floating animations */}
      <motion.div
        className="absolute top-1/3 right-1/5 w-8 h-16 rounded-full bg-coffee/30 backdrop-blur-sm"
        style={{ transform: "rotate(30deg)" }}
        animate={{
          y: [0, -15, 0],
          rotate: [30, 40, 30],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
