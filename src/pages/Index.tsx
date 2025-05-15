import Hero from "@/components/Hero";
import BrandSpirit from "@/components/BrandSpirit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Fix the MenuCard component to handle text presentation better
import MenuCard from "@/components/MenuCard";

const featuredProducts = [
  {
    id: "nhip-diu-em",
    name: "Nhịp Dịu Êm",
    description: "Hương vị nhẹ nhàng với notes caramel, đem lại cảm giác thư thái và bình yên.",
    priceM: 39000,
    priceL: 49000,
    image: "/lovable-uploads/922c840c-288f-4673-b209-3d6c980e97cd.png"
  },
  {
    id: "nhip-can-bang",
    name: "Nhịp Cân Bằng",
    description: "Hòa quyện giữa vị đắng và ngọt, tạo nên sự hài hòa cho tâm trí và cơ thể.",
    priceM: 42000,
    priceL: 52000,
    image: "/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png"
  },
  {
    id: "nhip-but-pha",
    name: "Nhịp Bứt Phá",
    description: "Vị đậm đà mạnh mẽ với caffeine cao, tiếp thêm năng lượng cho ngày làm việc bận rộn.",
    priceM: 45000,
    priceL: 55000,
    image: "/lovable-uploads/fe7498bd-4cb0-4916-ba13-6eb4f4b8dbc2.png"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <BrandSpirit />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
              Hương Vị Đặc Trưng
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập "Vị Nhịp" - Ba hương vị đặc biệt phù hợp với từng nhịp cảm xúc của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MenuCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  priceM={product.priceM}
                  priceL={product.priceL}
                  image={product.image}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/menu"
              className="inline-block px-6 py-3 bg-coffee text-white rounded-md hover:bg-coffee-dark transition-colors"
            >
              Xem Toàn Bộ Menu
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-coffee-dark mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Khuyến Mãi Đặc Biệt
            </motion.h2>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/lovable-uploads/c1bb8e3d-5b8e-4454-a9ae-573ffa3dd79d.png"
                  alt="Tag Truyền Cảm Hứng"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-coffee-dark mb-2">Tag Truyền Cảm Hứng & Quà Nạp Năng Lượng</h3>
                  <p className="mb-4">
                    Nhận tag truyền cảm hứng đặc biệt với mỗi ly Vị Nhịp và thanh năng lượng miễn phí khi up-size lên Size L!
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Từ ngày 05/05 đến 31/05/2025</p>
                  <Link
                    to="/promotions"
                    className="inline-block px-4 py-2 bg-coffee text-white rounded-md hover:bg-coffee-dark transition-colors"
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/promotions"
                className="inline-block text-coffee hover:text-coffee-dark underline decoration-1 underline-offset-4"
              >
                Xem Tất Cả Khuyến Mãi
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
