import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Câu chuyện về Nhịp Cà Phê và hành trình theo đuổi niềm đam mê với hương vị cà phê Việt Nam
          </p>
        </div>
      </div>
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-6 bg-amber-100/70 rounded-lg shadow-sm mb-6">
                <h2 className="text-3xl font-bold mb-4 text-coffee-dark">CÓ NHỮNG "NHỊP" LẶNG THẦM BÊN TA MỖI NGÀY...</h2>
                <p className="mb-4 text-gray-700">
                  Cuộc sống là một <strong>bản giao hưởng tuyệt vời</strong>, được dệt nên
                  từ vô vàn những cung bậc cảm xúc.
                </p>
                <p className="text-gray-700">
                  Chúng tôi tin rằng, mỗi ngụm thức uống bạn chọn không chỉ đơn
                  thuần là một hương vị, mà còn là <strong>một người bạn đồng điệu, một
                  giai điệu tinh tế</strong> có thể chạm vào và <strong>sẻ chia những "nhịp" lòng ấy</strong>.
                </p>
              </div>
              
              <div className="p-6 bg-amber-100/50 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold mb-4 text-coffee-dark">NHỊP SINH RA TỪ MONG ƯỚC ĐƯỢC SẺ CHIA...</h2>
                <p className="mb-4 text-gray-700">
                  Không chỉ bắt đầu từ tình yêu với những hạt cà phê
                  Robusta Buôn Ma Thuột đậm đà, hay niềm say mê những lá
                  trà thanh khiết, những vị quả tươi ngon, Nhịp được sinh ra
                  với sứ mệnh: <strong>được trở thành người bạn tri kỷ, một điểm
                  chạm ấm áp, một nơi chốn mà ở đó, mỗi cảm xúc của
                  bạn đều được trân trọng.</strong>
                </p>
                <p className="text-gray-700">
                  Hơn cả một quán cà phê, hơn cả những ly thức uống,
                  Nhịp mong muốn trở thành một phần thân thương trong
                  hành trình mỗi ngày của bạn. Nơi bạn có thể tìm thấy
                  không chỉ sự tinh tảo, mà còn là sự sẻ chia, sự thấu hiểu và
                  nguồn năng lượng tích cực để tiếp bước.
                </p>
              </div>
              
              <div className="p-6 bg-amber-100/30 rounded-lg shadow-sm mt-6">
                <div className="flex justify-end mb-2">
                  <svg className="h-8 w-8 text-coffee" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <p className="text-coffee-dark text-right italic font-medium">
                  Tại Nhịp, chúng tôi tin rằng, mỗi giọt
                  thức uống đều ẩn chứa một "nhịp"
                  riêng, một cá tính, một năng lượng độc
                  đáo, chờ đợi để được bạn khám phá
                </p>
              </div>
            </div>
            
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-6">
                <img 
                  src="/lovable-uploads/89102af6-e261-4876-9ba4-184db96568b0.png" 
                  alt="Nhịp Cà Phê Logo"
                  className="w-full h-full object-contain bg-amber-50 p-6"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png" 
                  alt="Cà phê Nhịp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Values - Keeping as requested */}
      <section className="py-16 bg-coffee-light bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-coffee-dark">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Chất Lượng</h3>
              <p className="text-gray-600 text-center">
                Chúng tôi không ngừng tìm kiếm và lựa chọn những hạt cà phê chất lượng cao nhất, đảm bảo mỗi tách cà phê 
                đều hoàn hảo từ nguồn nguyên liệu đến quy trình pha chế.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sáng Tạo</h3>
              <p className="text-gray-600 text-center">
                Luôn đổi mới và sáng tạo trong từng công thức, mang đến những trải nghiệm thú vị và đa dạng cho khách hàng, 
                phản ánh đúng tinh thần "đồng hành mọi nhịp cảm xúc".
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Tâm Huyết</h3>
              <p className="text-gray-600 text-center">
                Mỗi sản phẩm đều được tạo ra với tất cả tâm huyết, thể hiện tình yêu của chúng tôi đối với cà phê và 
                mong muốn mang đến những khoảnh khắc trọn vẹn cho khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - Keeping as requested */}
      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trải Nghiệm Nhịp Cà Phê Ngay Hôm Nay</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ghé thăm cửa hàng của chúng tôi hoặc đặt hàng trực tuyến để thưởng thức những ly cà phê đặc biệt từ Nhịp Cà Phê
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://maps.app.goo.gl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-coffee hover:bg-cream transition px-6 py-3 rounded-md font-semibold"
            >
              Tìm Cửa Hàng
            </a>
            <a 
              href="/order" 
              className="bg-transparent border-2 border-white hover:bg-white/10 transition px-6 py-3 rounded-md font-semibold"
            >
              Đặt Hàng Ngay
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
