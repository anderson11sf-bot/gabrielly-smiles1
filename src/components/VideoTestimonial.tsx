import { useState, useRef } from "react";
import { Play, X, Star, Volume2, VolumeX, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

interface VideoTestimonialProps {
  videoSrc: string;
  thumbnail: string;
  patientName: string;
  procedure: string;
  comment?: string;
  startTime?: number;
}

export function VideoTestimonial({ videoSrc, thumbnail, patientName, procedure, comment, startTime = 0 }: VideoTestimonialProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      {/* Video Card Thumbnail with 3D Tilt Effect */}
      <TiltCard 
        onClick={() => setIsOpen(true)}
        className="group relative rounded-2xl overflow-hidden glass-frosted aspect-[9/16] md:aspect-[3/4] cursor-pointer animate-fade-in-up border border-[#ccb24c]/15 hover:border-[#ccb24c]/40 transition-colors duration-300"
      >
        <video 
          src={videoSrc} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 brightness-90 group-hover:brightness-75 pointer-events-none"
          autoPlay 
          loop 
          muted 
          playsInline
          onLoadedMetadata={(e) => {
            if (startTime > 0) {
              e.currentTarget.currentTime = startTime;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent transition-opacity duration-500 pointer-events-none" />
        
        {/* Play Button */}
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#07090e]/60 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#ccb24c] group-hover:text-[#07090e] group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-lg border border-[#ccb24c]/30 group-hover:border-transparent">
            <Play className="h-5 w-5 md:h-6 md:w-6 ml-1 fill-current text-current transition-colors duration-300" />
          </div>
        </div>
        
      </TiltCard>

      {/* Video Modal Player */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)} 
          />
          
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#0d121c] border border-[#ccb24c]/30 shadow-[0_25px_60px_rgba(204,178,76,0.3)] animate-scale-in">
            {/* Modal Header */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="bg-[#07090e]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ccb24c]/20 pointer-events-auto">
                <span className="text-white text-xs font-bold">{patientName} — {procedure}</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-[#07090e]/80 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#ccb24c] hover:text-[#07090e] transition-all duration-300 border border-[#ccb24c]/20 pointer-events-auto shadow-md"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Custom Video Element */}
            <div className="relative aspect-[9/16] bg-black">
              <video 
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                controls
                loop
              />
              
              {/* Custom Mute Control */}
              <button 
                onClick={toggleMute}
                className="absolute bottom-20 right-4 z-20 w-10 h-10 rounded-full bg-[#07090e]/80 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#ccb24c] hover:text-[#07090e] transition-colors border border-[#ccb24c]/20 shadow-md"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              {comment && (
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#07090e]/80 backdrop-blur-md p-4 rounded-2xl border border-[#ccb24c]/20">
                  <p className="text-white text-sm italic">"{comment}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
