
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Gift, Award, Tag, Star, Percent, Calendar, User } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const PROMOTIONS = [
  {
    id: 'tag-truyen-cam-hung',
    title: 'Tag Truyền Cảm Hứng & Quà Nạp Năng Lượng',
    description: 'Nhận tag truyền cảm hứng đặc biệt và quà nạp năng lượng miễn phí khi đặt Vị Nhịp Size L',
    image: '/lovable-uploads/c1bb8e3d-5b8e-4454-a9ae-573ffa3dd79d.png',
    validUntil: '31/05/2025',
    type: 'gift',
    details: `
      <p>Từ 5/5 đến 31/5, Nhịp Cà Phê tặng bạn bộ đôi tiếp sức cho ngày dài:</p>
      <ul>
        <li>Tag truyền cảm hứng đặc biệt với những thông điệp tích cực</li>
        <li>Quà nạp năng lượng granola kèm theo mỗi đơn hàng</li>
        <li>Miễn phí với mỗi cốc "Vị Nhịp" size L</li>
      </ul>
      <p>Điều kiện áp dụng:</p>
      <ul>
        <li>Áp dụng cho tất cả khách hàng</li>
        <li>Áp dụng cho các đơn hàng có ít nhất một sản phẩm từ bộ sưu tập "Vị Nhịp" size L</li>
        <li>Không áp dụng cùng các khuyến mãi khác</li>
      </ul>
    `
  },
  {
    id: 'mua-2-tang-1',
    title: 'Mua 2 Tặng 1',
    description: 'Mua 2 sản phẩm cùng loại, tặng 1 sản phẩm tương tự',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop',
    validUntil: '30/06/2025',
    type: 'discount',
    details: `
      <p>Thưởng thức cà phê cùng bạn bè - Mua 2 tặng 1 đồ uống cùng loại:</p>
      <ul>
        <li>Khi mua 2 đồ uống cùng loại, size, bạn sẽ được tặng 1 đồ uống tương tự miễn phí</li>
        <li>Áp dụng cho tất cả sản phẩm nước uống</li>
        <li>Áp dụng cho cả đơn hàng giao đi và tại quán</li>
      </ul>
      <p>Điều kiện áp dụng:</p>
      <ul>
        <li>Áp dụng vào thứ 3 và thứ 5 hàng tuần</li>
        <li>Không áp dụng cùng các khuyến mãi khác</li>
        <li>Mỗi khách hàng được áp dụng tối đa 1 lần/ngày</li>
      </ul>
    `
  },
  {
    id: 'happy-hour',
    title: 'Happy Hour - Giảm 20%',
    description: 'Giảm 20% tất cả đồ uống từ 14h-17h các ngày trong tuần',
    image: 'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?q=80&w=1974&auto=format&fit=crop',
    validUntil: '31/12/2025',
    type: 'discount',
    details: `
      <p>Giảm giá giờ vàng - Happy Hour tại Nhịp Cà Phê:</p>
      <ul>
        <li>Giảm 20% cho tất cả đồ uống</li>
        <li>Thời gian áp dụng: 14h00 - 17h00 hàng ngày</li>
        <li>Áp dụng cho cả đơn hàng giao đi và tại quán</li>
      </ul>
      <p>Điều kiện áp dụng:</p>
      <ul>
        <li>Không giới hạn số lượng đồ uống mỗi khách hàng</li>
        <li>Không áp dụng cùng các khuyến mãi khác</li>
        <li>Không áp dụng cho các sản phẩm đồ ăn</li>
      </ul>
    `
  },
  {
    id: 'sinh-nhat',
    title: 'Ưu Đãi Sinh Nhật',
    description: 'Miễn phí 1 đồ uống bất kỳ trong tháng sinh nhật của bạn',
    image: 'https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=2070&auto=format&fit=crop',
    validUntil: 'Không giới hạn',
    type: 'birthday',
    details: `
      <p>Để kỷ niệm ngày đặc biệt của bạn, Nhịp Cà Phê mời bạn:</p>
      <ul>
        <li>1 đồ uống miễn phí Size M bất kỳ trong menu</li>
        <li>Được uppgrade lên Size L miễn phí</li>
        <li>Được tặng 1 bánh sinh nhật nhỏ khi đến quán cùng 4 người bạn trở lên</li>
      </ul>
      <p>Điều kiện áp dụng:</p>
      <ul>
        <li>Áp dụng trong tháng sinh nhật của khách hàng</li>
        <li>Cần xuất trình CMND/CCCD hoặc giấy tờ tùy thân để xác nhận</li>
        <li>Đối với thành viên "Nhịp Tri Ân": Chỉ cần đăng nhập vào tài khoản, đã có thông tin sinh nhật</li>
        <li>Sử dụng 1 lần duy nhất trong tháng sinh nhật</li>
      </ul>
    `
  }
];

const MEMBER_RANKS = [
  {
    id: 'than-quen',
    name: 'Nhịp Thân Quen',
    points: 0,
    nextLevel: 300,
    benefits: [
      'Tích điểm 5% giá trị mỗi đơn hàng',
      'Miễn phí upsize vào ngày sinh nhật',
      'Ưu đãi đặc biệt dành riêng cho thành viên'
    ]
  },
  {
    id: 'gan-ket',
    name: 'Nhịp Gắn Kết',
    points: 300,
    nextLevel: 800,
    benefits: [
      'Tích điểm 7% giá trị mỗi đơn hàng',
      '1 đồ uống miễn phí vào ngày sinh nhật',
      'Quà tặng đặc biệt sau mỗi 10 đơn hàng',
      'Ưu tiên thử sản phẩm mới'
    ]
  },
  {
    id: 'tri-ky',
    name: 'Nhịp Tri Kỷ',
    points: 800,
    nextLevel: null,
    benefits: [
      'Tích điểm 10% giá trị mỗi đơn hàng',
      'Combo đồ uống và đồ ăn nhẹ miễn phí vào ngày sinh nhật',
      'Quà tặng hàng tháng',
      'Giảm giá 10% mỗi đơn hàng thứ 5',
      'Sự kiện độc quyền dành cho thành viên Tri Kỷ'
    ]
  }
];

const REWARDS = [
  {
    id: 'voucher-30',
    name: 'Voucher Giảm 30%',
    points: 100,
    image: 'https://images.unsplash.com/photo-1619044194674-25348d444e5c?q=80&w=1975&auto=format&fit=crop'
  },
  {
    id: 'free-drink',
    name: 'Đồ Uống Miễn Phí (Size M)',
    points: 200,
    image: 'https://images.unsplash.com/photo-1629158964030-53fb6143fe61?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'tumbler',
    name: 'Bình Giữ Nhiệt Nhịp Cà Phê',
    points: 500,
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf17?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'bean-pack',
    name: 'Gói Cà Phê Đặc Biệt 250g',
    points: 350,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=2070&auto=format&fit=crop'
  }
];

interface PromoDetailProps {
  promotion: {
    title: string;
    description: string;
    validUntil: string;
    details: string;
    image: string;
  };
}

const PromoDetail = ({ promotion }: PromoDetailProps) => (
  <div className="space-y-4">
    <img 
      src={promotion.image} 
      alt={promotion.title} 
      className="w-full h-48 object-cover rounded-lg"
    />
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-coffee-dark">{promotion.title}</h3>
      <p className="text-gray-600">{promotion.description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-1" />
        <span>Có hiệu lực đến: {promotion.validUntil}</span>
      </div>
      <div 
        className="pt-4 mt-4 border-t text-gray-700 prose prose-sm"
        dangerouslySetInnerHTML={{ __html: promotion.details }}
      />
    </div>
  </div>
);

export default function Promotions() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock user data for the logged in state
  const mockUser = {
    name: "Nguyễn Văn A",
    rank: MEMBER_RANKS[0],
    points: 180,
    transactions: [
      { date: '15/05/2025', points: 15, description: 'Nhịp Bứt Phá (Size L)' },
      { date: '10/05/2025', points: 25, description: 'Nhịp Cân Bằng (Size L) x2' },
      { date: '02/05/2025', points: 18, description: 'Nhịp Dịu Êm (Size M)' },
    ]
  };

  const handleLogin = () => {
    toast({
      title: "Đăng nhập thành công!",
      description: `Chào mừng Nguyễn Văn A quay trở lại Nhịp Cà Phê.`,
      duration: 3000,
    });
    setIsLoggedIn(true);
  };

  const handleRedeemReward = (reward: any) => {
    toast({
      title: "Đổi quà thành công!",
      description: `Bạn vừa đổi ${reward.points} điểm lấy ${reward.name}.`,
      duration: 3000,
    });
  };

  const filteredPromotions = activeFilter === 'all' 
    ? PROMOTIONS 
    : PROMOTIONS.filter(promo => promo.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Khuyến Mãi & Tri Ân</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Khám phá ưu đãi đặc biệt và chương trình thành viên của Nhịp Cà Phê
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="promotions" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="promotions">Ưu Đãi Hiện Có</TabsTrigger>
            <TabsTrigger value="loyalty">Nhịp Tri Ân</TabsTrigger>
          </TabsList>
          
          <TabsContent value="promotions">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex rounded-md bg-secondary p-1">
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeFilter === 'all' ? 'bg-white shadow' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  Tất cả
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeFilter === 'discount' ? 'bg-white shadow' : ''}`}
                  onClick={() => setActiveFilter('discount')}
                >
                  Giảm giá
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeFilter === 'gift' ? 'bg-white shadow' : ''}`}
                  onClick={() => setActiveFilter('gift')}
                >
                  Quà tặng
                </button>
                <button 
                  className={`px-3 py-1 text-sm rounded-md ${activeFilter === 'birthday' ? 'bg-white shadow' : ''}`}
                  onClick={() => setActiveFilter('birthday')}
                >
                  Sinh nhật
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPromotions.map((promo) => (
                <Card key={promo.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      {promo.type === 'discount' && <Percent className="h-6 w-6 text-white bg-red-500 p-1 rounded-full" />}
                      {promo.type === 'gift' && <Gift className="h-6 w-6 text-white bg-green-500 p-1 rounded-full" />}
                      {promo.type === 'birthday' && <Calendar className="h-6 w-6 text-white bg-blue-500 p-1 rounded-full" />}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle>{promo.title}</CardTitle>
                    <CardDescription>{promo.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Có hiệu lực đến: {promo.validUntil}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-coffee text-white hover:bg-coffee-dark">Xem Chi Tiết</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Chi Tiết Khuyến Mãi</DialogTitle>
                          <DialogDescription>
                            Thông tin đầy đủ về ưu đãi
                          </DialogDescription>
                        </DialogHeader>
                        <PromoDetail promotion={promo} />
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="loyalty">
            {!isLoggedIn ? (
              <div className="max-w-3xl mx-auto">
                <div className="bg-cream rounded-lg p-8 text-center">
                  <div className="mb-6">
                    <Award className="h-16 w-16 text-coffee mx-auto" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-coffee-dark">Chương Trình Nhịp Tri Ân</h2>
                  <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                    Tham gia chương trình thành viên của Nhịp Cà Phê để tích điểm đổi quà, 
                    nhận ưu đãi độc quyền và nhiều đặc quyền hấp dẫn khác.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                      <Tag className="h-10 w-10 text-coffee mb-3 mx-auto" />
                      <h3 className="font-semibold mb-2">Tích Điểm Thưởng</h3>
                      <p className="text-sm text-gray-600">Nhận điểm với mỗi đơn hàng tại Nhịp Cà Phê</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                      <Gift className="h-10 w-10 text-coffee mb-3 mx-auto" />
                      <h3 className="font-semibold mb-2">Đổi Quà Hấp Dẫn</h3>
                      <p className="text-sm text-gray-600">Quy đổi điểm thành đồ uống miễn phí và quà tặng</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                      <Star className="h-10 w-10 text-coffee mb-3 mx-auto" />
                      <h3 className="font-semibold mb-2">Ưu Đãi Độc Quyền</h3>
                      <p className="text-sm text-gray-600">Nhận quyền lợi đặc biệt theo hạng thành viên</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button 
                      className="bg-coffee hover:bg-coffee-dark text-white" 
                      onClick={handleLogin}
                    >
                      Đăng Nhập
                    </Button>
                    <Button variant="outline">Đăng Ký Ngay</Button>
                  </div>
                  
                  <div className="mt-10 border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-semibold mb-4">Hạng Thành Viên</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {MEMBER_RANKS.map((rank) => (
                        <div key={rank.id} className="bg-white p-5 rounded-lg shadow-md">
                          <h4 className="font-bold text-coffee-dark mb-2">{rank.name}</h4>
                          <p className="text-sm text-gray-500 mb-3">
                            {rank.nextLevel 
                              ? `Từ ${rank.points} - ${rank.nextLevel - 1} điểm` 
                              : `Từ ${rank.points} điểm trở lên`}
                          </p>
                          <ul className="text-sm space-y-1">
                            {rank.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-coffee-dark text-white p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/lovable-uploads/13212ed4-9487-4396-98a0-b97b4b3a62c5.png" 
                          alt="Nhịp Cà Phê" 
                          className="h-10 w-auto" 
                        />
                        <h2 className="text-xl font-bold">Nhịp Cà Phê</h2>
                      </div>
                      <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="text-sm bg-transparent border border-white/30 px-3 py-1 rounded-md hover:bg-white/10"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center">
                          <User className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Chào {mockUser.name}!</h3>
                          <p className="text-gray-600">Bạn đang là <span className="font-medium text-coffee-dark">{mockUser.rank.name}</span> của Nhịp</p>
                        </div>
                      </div>
                      
                      <div className="bg-cream/50 rounded-lg p-6 mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">Điểm thưởng của bạn</h4>
                          <span className="text-3xl font-bold text-coffee">{mockUser.points}</span>
                        </div>
                        
                        {mockUser.rank.nextLevel && (
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>{mockUser.rank.name}</span>
                              <span>{MEMBER_RANKS[1].name}</span>
                            </div>
                            <Progress 
                              value={(mockUser.points - mockUser.rank.points) / (mockUser.rank.nextLevel - mockUser.rank.points) * 100} 
                              className="h-2"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                              Cần thêm {mockUser.rank.nextLevel - mockUser.points} điểm để lên hạng {MEMBER_RANKS[1].name}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Đổi Quà</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {REWARDS.map((reward) => (
                          <div key={reward.id} className="border rounded-lg overflow-hidden">
                            <div className="aspect-square relative">
                              <img 
                                src={reward.image} 
                                alt={reward.name} 
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium text-sm mb-1 line-clamp-1" title={reward.name}>
                                {reward.name}
                              </h4>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-coffee">{reward.points} điểm</span>
                                <button
                                  onClick={() => handleRedeemReward(reward)}
                                  disabled={mockUser.points < reward.points}
                                  className={`text-xs px-2 py-1 rounded ${
                                    mockUser.points >= reward.points 
                                      ? 'bg-coffee text-white' 
                                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  }`}
                                >
                                  Đổi ngay
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Lịch Sử Tích Điểm</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chi tiết</th>
                              <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Điểm</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {mockUser.transactions.map((tx, i) => (
                              <tr key={i}>
                                <td className="px-4 py-3 text-sm text-gray-500">{tx.date}</td>
                                <td className="px-4 py-3 text-sm">{tx.description}</td>
                                <td className="px-4 py-3 text-sm text-right text-green-600">+{tx.points}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-coffee-light bg-opacity-10 py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-coffee-dark">Cà Phê Với Mỗi Nhịp Cảm Xúc</h2>
            <p className="text-gray-700">
              Tại Nhịp Cà Phê, chúng tôi tin rằng mỗi tách cà phê là một trải nghiệm độc đáo, 
              đồng hành cùng bạn trong mọi khoảnh khắc của cuộc sống.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
