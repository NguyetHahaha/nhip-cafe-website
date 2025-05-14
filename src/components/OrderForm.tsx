
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Package, Truck } from 'lucide-react';

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
    image: '/lovable-uploads/6a1662a2-ef72-431d-9f12-309f4d7d1b1f.png',
  },
  { 
    id: 'nhip-diu-em',
    name: 'Nhịp Dịu Êm',
    description: 'Cà phê Bạc Xỉu',
    priceM: 35000,
    priceL: 55000,
    image: '/lovable-uploads/f68917f9-f3df-4c8c-8328-612699c8452d.png',
  },
  { 
    id: 'nhip-bay-bong',
    name: 'Nhịp Bay Bổng',
    description: 'Cà phê Cốt Dừa',
    priceM: 37000,
    priceL: 57000,
    image: '/lovable-uploads/28d980de-d5b2-4d4d-b4fe-769b7ed2803c.png',
  },
];

interface OrderFormProps {
  initialProductId?: string;
}

export default function OrderForm({ initialProductId }: OrderFormProps) {
  const { toast } = useToast();
  const [product, setProduct] = useState(initialProductId || PRODUCTS[0].id);
  const [size, setSize] = useState('M');
  const [ice, setIce] = useState('100');
  const [sugar, setSugar] = useState('100');
  const [note, setNote] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [quantity, setQuantity] = useState(1);

  const selectedProduct = PRODUCTS.find(p => p.id === product);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Đặt hàng thành công!",
      description: `${selectedProduct?.name} (${size}) đã được thêm vào giỏ hàng.`,
      duration: 5000,
    });

    // Reset form or redirect to cart page
    setQuantity(1);
    setNote('');
  };

  const calculatePrice = () => {
    if (!selectedProduct) return 0;
    const basePrice = size === 'M' ? selectedProduct.priceM : selectedProduct.priceL;
    return basePrice * quantity;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Đặt hàng</CardTitle>
          <CardDescription>Tùy chỉnh đồ uống theo sở thích của bạn</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="product">Chọn thức uống</Label>
            <Select value={product} onValueChange={setProduct}>
              <SelectTrigger id="product" className="w-full">
                <SelectValue placeholder="Chọn thức uống" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCTS.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name} - {item.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="size">Kích cỡ</Label>
            <RadioGroup id="size" value={size} onValueChange={setSize} className="flex space-x-4 mt-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="size-m" />
                <Label htmlFor="size-m" className="cursor-pointer">Size M ({selectedProduct?.priceM.toLocaleString()} VND)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="L" id="size-l" />
                <Label htmlFor="size-l" className="cursor-pointer">Size L ({selectedProduct?.priceL.toLocaleString()} VND)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ice">Lượng đá</Label>
            <Select value={ice} onValueChange={setIce}>
              <SelectTrigger id="ice" className="w-full">
                <SelectValue placeholder="Chọn lượng đá" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30%</SelectItem>
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="100">100%</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="sugar">Lượng đường</Label>
            <Select value={sugar} onValueChange={setSugar}>
              <SelectTrigger id="sugar" className="w-full">
                <SelectValue placeholder="Chọn lượng đường" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30%</SelectItem>
                <SelectItem value="50">50%</SelectItem>
                <SelectItem value="100">100%</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Số lượng</Label>
            <div className="flex items-center space-x-2">
              <button 
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button 
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="note">Ghi chú đặc biệt</Label>
            <Textarea 
              id="note" 
              placeholder="Thêm ghi chú cho đơn hàng của bạn..." 
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          
          <div>
            <Label className="mb-2 block">Phương thức giao hàng</Label>
            <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-3">
              <div className="flex items-start space-x-3 rounded-lg border p-3">
                <RadioGroupItem value="pickup" id="pickup" />
                <div className="flex flex-1 items-start space-x-3">
                  <Package className="h-5 w-5 text-coffee mt-0.5" />
                  <div>
                    <Label htmlFor="pickup" className="cursor-pointer">Đến lấy</Label>
                    <p className="text-sm text-gray-500">Đến cửa hàng để lấy đồ uống của bạn</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rounded-lg border p-3">
                <RadioGroupItem value="delivery" id="delivery" />
                <div className="flex flex-1 items-start space-x-3">
                  <Truck className="h-5 w-5 text-coffee mt-0.5" />
                  <div>
                    <Label htmlFor="delivery" className="cursor-pointer">Giao hàng</Label>
                    <p className="text-sm text-gray-500">
                      Nhịp Cà Phê miễn phí giao hàng trong bán kính 3km, 
                      từ km thứ 4 sẽ tính phí giao hàng là 4.000 VND trên 1km
                    </p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        
        <CardFooter className="flex-col space-y-4">
          <div className="flex justify-between w-full text-lg font-semibold">
            <span>Tổng thanh toán:</span>
            <span>{calculatePrice().toLocaleString()} VND</span>
          </div>
          <button 
            type="submit"
            className="w-full bg-coffee text-white py-3 rounded-md hover:bg-coffee-dark transition"
          >
            Đặt hàng
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
