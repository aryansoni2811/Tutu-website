import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import music from "../assets/music/hona-tha-pyaar.mp3";

const PageWrapper = ({ children }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    // Autoplay muted (allowed by browser)
    audioRef.current.muted = true;
    audioRef.current.volume = 0;
    audioRef.current.play().catch(() => {});

    // Unmute + fade in on ANY interaction (tap, scroll, click)
    const enableSound = () => {
      if (!audioRef.current) return;

      audioRef.current.muted = false;

      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.4) {
          vol += 0.02;
          audioRef.current.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 200);

      window.removeEventListener("click", enableSound);
      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("scroll", enableSound);
    window.addEventListener("touchstart", enableSound);
  }, []);

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} loop playsInline>
        <source src={music} type="audio/mp3" />
      </audio>

      {/* Page Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          padding: "60px 20px",
          minHeight: "100vh",
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
