
import { motion } from 'framer-motion';

export default function BrandSpirit() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-10"
            variants={itemVariants}
          >
            Tinh Thần Nhịp Cà Phê
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <p className="text-lg text-coffee-dark leading-relaxed">
                Chúng tôi tin rằng, mỗi ly cà phê buổi sáng không chỉ giúp bạn tỉnh táo, mà còn có thể là "liều thuốc" 
                năng lượng phù hợp với chính tâm trạng và mục tiêu của bạn ngay lúc đó.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <p className="text-lg text-coffee-dark leading-relaxed">
                Nhịp Cà Phê mong muốn được cùng bạn khởi đầu mỗi ngày thật hứng khởi và thật "đúng nhịp". 
                Hãy để chúng mình đồng hành, lắng nghe và tiếp thêm năng lượng cho hành trình của bạn 
                giữa lòng Sài Gòn sôi động này!
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <p className="text-lg text-coffee-dark leading-relaxed">
                Bạn có từng nghĩ ly cà phê mỗi sớm không chỉ đơn giản là một thức uống đánh thức sự tỉnh táo? 
                Có lẽ nào, trong hương thơm nồng nàn và hương vị đậm sâu ấy, 
                ẩn chứa một giai điệu tinh tế đã cộng hưởng cùng chính dòng chảy nội tâm của người thưởng thức?
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <p className="text-lg text-coffee-dark leading-relaxed">
                Thấu cảm sâu sắc với những rung động tinh tế ấy, Nhịp Cà Phê được ra đời. 
                Không chỉ đơn thuần là chắt chiu tinh túy từ hạt Robusta Buôn Ma Thuột để dâng tặng bạn một hương vị nguyên bản, 
                đậm đà hồn cốt. Sứ mệnh thiêng liêng hơn mà Nhịp theo đuổi là trở thành người bạn tri kỷ, 
                lặng lẽ lắng nghe và hòa điệu cùng bạn trên mỗi cung bậc của hành trình cảm xúc.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-coffee-light/20 p-6 rounded-xl shadow-md border-l-4 border-coffee"
              variants={itemVariants}
            >
              <p className="text-xl text-coffee-dark font-medium italic">
                "Chúng tôi tin rằng, mỗi giọt cà phê đều có thể mang trong mình một "nhịp" riêng. 
                Giữa bộn bề cuộc sống, bạn có đang kiếm tìm một "nhịp" đồng điệu với trái tim mình?"
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 bg-coffee-dark text-white p-6 rounded-xl"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4">Dành Cho Bạn</h3>
            <p className="leading-relaxed">
              Nhịp dành cho những người trẻ từ 19-35 tuổi - những người luôn hết mình nỗ lực, cố gắng từng ngày, 
              đang bị cuốn xoay trong guồng quay công việc áp lực. Nhịp hiểu được điều đó và muốn đồng hành 
              cùng bạn như một người bạn tri kỷ, thấu hiểu được sự vất vả và áp lực của người trẻ trong cuộc sống hiện đại.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
