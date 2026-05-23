import { useEffect, useRef } from "react";

export function ScrollVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force preloading of video metadata
    video.load();

    let targetTime = 0;
    let currentTime = 0;
    const lerpSpeed = 0.1; // Smooth interpolation speed
    let animationFrameId: number;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollFraction = window.scrollY / scrollHeight;
      if (video.duration) {
        targetTime = video.duration * scrollFraction;
      }
    };

    const updateVideoTime = () => {
      // Smoothly interpolate current time to target time (LERP)
      currentTime += (targetTime - currentTime) * lerpSpeed;
      
      if (video && Math.abs(currentTime - video.currentTime) > 0.01) {
        video.currentTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateVideoTime);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#07090e]">
      {/* Cinematic Ambient Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/95 via-[#07090e]/85 to-[#07090e]/98 z-10" />
      
      {/* Scroll-bound Video Player */}
      <video
        ref={videoRef}
        src="/videos/Man_smiling_in_restaurant_flashback_202605222107.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-[0.12] z-0 filter saturate-50 contrast-125"
      />
    </div>
  );
}
