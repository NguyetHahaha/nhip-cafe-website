import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react"; // Added useRef and useEffect
import { Volume1, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"; // Added new icons


const About = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5); // Default volume when unmuted
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Effect to sync video volume with state (only when not muted)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  // Effect to listen for fullscreen changes
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange); // Safari
    document.addEventListener("mozfullscreenchange", onFullscreenChange);    // Firefox
    document.addEventListener("MSFullscreenChange", onFullscreenChange);   // IE/Edge
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      document.removeEventListener("mozfullscreenchange", onFullscreenChange);
      document.removeEventListener("MSFullscreenChange", onFullscreenChange);
    };
  }, []);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    // If unmuting and volume was 0, set it to a default (e.g., 0.5 or previous non-zero volume)
    if (!newMutedState && volume === 0) {
      setVolume(0.5); // Or restore a previously stored non-zero volume
    }
  };

  const toggleFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement; // Get the video's direct parent for fullscreen
    if (!videoContainer) return;

    if (!document.fullscreenElement) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen().catch(err => console.error(err));
      } else if ((videoContainer as any).mozRequestFullScreen) { /* Firefox */
        (videoContainer as any).mozRequestFullScreen();
      } else if ((videoContainer as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        (videoContainer as any).webkitRequestFullscreen();
      } else if ((videoContainer as any).msRequestFullscreen) { /* IE/Edge */
        (videoContainer as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).mozCancelFullScreen) { /* Firefox */
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) { /* Chrome, Safari and Opera */
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) { /* IE/Edge */
        (document as any).msExitFullscreen();
      }
    }
  };
  
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Câu chuyện về Nhịp Cà Phê và hành trình theo đuổi niềm đam mê với hương vị cà phê Việt Nam
          </p>
        </div>
      </div>
      
      {/* About Us Video Section */}
      <section className="py-12 bg-cream">
        {/* This div will be the fullscreen element and relative parent for controls */}
        <div className="container mx-auto px-4 relative group rounded-lg overflow-hidden shadow-2xl"> 
            <video
              ref={videoRef}
              src="/lovable-uploads/about_us.mp4" 
              className="w-full h-auto block" // 'block' to remove extra space below video
              autoPlay
              loop
              muted={isMuted} // Controlled by React state
              playsInline
              aria-label="Video giới thiệu Nhịp Cà Phê"
            />
            {/* Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between z-20">
              <div className="flex items-center space-x-3">
                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="text-white p-1 hover:bg-white/20 rounded-full"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {getVolumeIcon()}
                </button>
                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume} // Reflect mute state in slider position
                  onChange={handleVolumeChange}
                  className="w-20 h-2 accent-coffee cursor-pointer"
                  aria-label="Volume"
                />
              </div>
              
              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="text-white p-1 hover:bg-white/20 rounded-full"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
        </div>
      </section>
      
      {/* Image Section - Coffee Pouring - Full Width */}
      <section className="py-12 bg-cream"> {/* Vertical padding remains, background color for the section */}
        <div className="w-9/10 mx-auto">
        <img
          src="/lovable-uploads/about_us.png" 
          alt="Cà phê đang được rót vào ly Nhịp Cà Phê"
          className="w-full h-auto object-contain" 
          // Consider removing rounded-lg and shadow-lg if you want a true full-bleed edge-to-edge image
          // className="w-full h-auto object-contain rounded-lg shadow-lg" 
        />
        </div>
      </section>

      {/* Call to Action - Keep as requested */}
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
