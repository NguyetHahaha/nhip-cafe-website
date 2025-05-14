
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
              <h2 className="text-3xl font-bold mb-6 text-coffee-dark">Câu Chuyện Của Chúng Tôi</h2>
              <p className="mb-4 text-gray-700">
                Nhịp Cà Phê được ra đời từ tình yêu và niềm đam mê với hạt cà phê Việt Nam. Chúng tôi tin rằng mỗi tách cà phê 
                không chỉ là thức uống mà còn là một nhịp điệu, một cảm xúc đặc biệt trong cuộc sống hàng ngày.
              </p>
              <p className="mb-4 text-gray-700">
                Với sứ mệnh mang đến những trải nghiệm cà phê chất lượng cao và độc đáo, Nhịp Cà Phê luôn nỗ lực không ngừng 
                trong việc chọn lọc nguyên liệu, nghiên cứu công thức và tạo ra những thức uống phù hợp với nhiều nhịp cảm xúc khác nhau.
              </p>
              <p className="text-gray-700">
                Chúng tôi tự hào khi được đồng hành cùng khách hàng trong mỗi ngày, từ những buổi sáng đầy năng lượng 
                đến những chiều hoàng hôn tĩnh lặng, thông qua những tách cà phê được pha chế với tất cả tâm huyết và tình yêu.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/361147e7-f60f-4ad4-abd8-f864dbd884f0.png" 
                alt="Nhịp Cà Phê Collections"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Values */}
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
      
      {/* Logo Meaning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <img 
                  src="/lovable-uploads/11afd698-3c6a-4238-9bc1-a87d699edb98.png" 
                  alt="Nhịp Cà Phê Logo"
                  className="w-48 h-48"
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-coffee-dark">Ý Nghĩa Logo</h2>
                <p className="mb-4 text-gray-700">
                  Logo của Nhịp Cà Phê được thiết kế với hình ảnh tách cà phê kết hợp với biểu đồ nhịp tim, 
                  thể hiện thông điệp cốt lõi của thương hiệu: "Cà phê là nhịp đập của cuộc sống".
                </p>
                <p className="mb-4 text-gray-700">
                  Đường nhịp tim biểu trưng cho cảm xúc và năng lượng mà cà phê mang lại, đồng thời nhắc nhở 
                  chúng tôi luôn nỗ lực tạo ra những sản phẩm có thể đồng điệu với nhịp cảm xúc đa dạng của khách hàng.
                </p>
                <p className="text-gray-700">
                  Màu nâu ấm áp được sử dụng chủ đạo tượng trưng cho hạt cà phê rang, cho sự thân thiện và gần gũi 
                  mà chúng tôi muốn gửi gắm trong mỗi tách cà phê đến với khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
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
