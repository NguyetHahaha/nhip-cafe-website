
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PRODUCTS = [
  { 
    id: 'nhip-but-pha',
    name: 'Nhịp Bứt Phá',
    description: 'Cà phê Đen Đá',
    priceM: 29000,
    priceL: 45000,
    image: '/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png',
    category: 'vi-nhip',
  },
  { 
    id: 'nhip-can-bang',
    name: 'Nhịp Cân Bằng',
    description: 'Cà phê Sữa Đá',
    priceM: 32000,
    priceL: 49000,
    image: '/lovable-uploads/6a1662a2-ef72-431d-9f12-309f4d7d1b1f.png',
    category: 'vi-nhip',
  },
  { 
    id: 'nhip-diu-em',
    name: 'Nhịp Dịu Êm',
    description: 'Cà phê Bạc Xỉu',
    priceM: 35000,
    priceL: 55000,
    image: '/lovable-uploads/f68917f9-f3df-4c8c-8328-612699c8452d.png',
    category: 'vi-nhip',
  },
  { 
    id: 'nhip-bay-bong',
    name: 'Nhịp Bay Bổng',
    description: 'Cà phê Cốt Dừa',
    priceM: 37000,
    priceL: 57000,
    image: '/lovable-uploads/28d980de-d5b2-4d4d-b4fe-769b7ed2803c.png',
    category: 'vi-nhip',
  },
];

// Animation configurations
const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Define a MotionDiv component that accepts a className prop
const MotionDiv = motion.div;

const Menu = () => {
  const [searchParams] = useSearchParams();
  const collectionParam = searchParams.get('collection');
  const [activeTab, setActiveTab] = useState(collectionParam || 'all');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Menu</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Khám phá bộ sưu tập đa dạng các thức uống được pha chế tỉ mỉ từ Nhịp Cà Phê
          </p>
        </div>
      </div>
      
      {/* Menu Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary">
                <TabsTrigger value="all" className="px-6">Tất Cả</TabsTrigger>
                <TabsTrigger value="vi-nhip" className="px-6">Bộ Sưu Tập "Vị Nhịp"</TabsTrigger>
                <TabsTrigger value="special" className="px-6">Đặc Biệt</TabsTrigger>
                <TabsTrigger value="tea" className="px-6">Trà</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <MotionDiv
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                animate="show"
                variants={containerAnimation}
              >
                {PRODUCTS.map((product) => (
                  <MotionDiv key={product.id} variants={itemAnimation} className="menu-item">
                    <MenuCard 
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      priceM={product.priceM}
                      priceL={product.priceL}
                      image={product.image}
                    />
                  </MotionDiv>
                ))}
              </MotionDiv>
            </TabsContent>
            
            <TabsContent value="vi-nhip" className="mt-0">
              <div>
                <div className="mb-10">
                  <div className="relative rounded-lg overflow-hidden mb-6">
                    <img 
                      src="/lovable-uploads/922c840c-288f-4673-b209-3d6c980e97cd.png"
                      alt="Bộ sưu tập Vị Nhịp" 
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Bộ Sưu Tập "Vị Nhịp"</h2>
                        <p className="text-white/90 max-w-2xl">
                          Chọn vị cà phê, chọn nhịp ngày mới
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Bộ sưu tập "Vị Nhịp" là tuyển tập những thức uống đặc trưng nhất của Nhịp Cà Phê, 
                    được thiết kế để đồng hành cùng bạn trong mọi nhịp cảm xúc. Mỗi hương vị đều mang 
                    một cá tính riêng, từ mạnh mẽ đầy năng lượng đến nhẹ nhàng, tinh tế.
                  </p>
                </div>
                
                <MotionDiv
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial="hidden"
                  animate="show"
                  variants={containerAnimation}
                >
                  {PRODUCTS.filter(p => p.category === 'vi-nhip').map((product) => (
                    <MotionDiv key={product.id} variants={itemAnimation} className="menu-item">
                      <MenuCard 
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        priceM={product.priceM}
                        priceL={product.priceL}
                        image={product.image}
                      />
                    </MotionDiv>
                  ))}
                </MotionDiv>
              </div>
            </TabsContent>
            
            <TabsContent value="special" className="mt-0">
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Sắp ra mắt</h3>
                <p className="mt-2 text-gray-600">
                  Những thức uống đặc biệt của Nhịp Cà Phê sẽ sớm được cập nhật.
                  <br />Vui lòng quay lại sau!
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="tea" className="mt-0">
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Sắp ra mắt</h3>
                <p className="mt-2 text-gray-600">
                  Bộ sưu tập trà của Nhịp Cà Phê sẽ sớm được cập nhật.
                  <br />Vui lòng quay lại sau!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;
