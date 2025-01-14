"use client";

import { useState, useEffect, useRef } from "react";

const Gallery3D = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);
  const animationRef = useRef(null);

  const images = [
    "/DSC_0027.JPG",
    "/DSC_0173.JPG",
    "/DSC_0181.JPG",
    "/DSC_0182.JPG",
    "/DSC_0473.jpg",
    "/DSC_0483.jpg",
    "/DSC_0484.jpg",
    "/DSC_0474.jpg"
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animate = () => {
    setRotation((prev) => (prev + 0.3) % 360);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const getImageStyle = (index) => {
    const angleStep = 360 / images.length;
    const angle = (rotation + angleStep * index) * (Math.PI / 180);
    
    const baseRadius = windowWidth < 768 ? 250 : 
                      windowWidth < 1024 ? 350 :
                      windowWidth < 1440 ? 450 : 550;
    
    const x = baseRadius * Math.sin(angle);
    const z = baseRadius * Math.cos(angle);
    const y = baseRadius * Math.sin(angle) * 0.3 - Math.abs(baseRadius * Math.cos(angle) * 0.2);

    const zPosition = (z + baseRadius) / (2 * baseRadius);
    const scale = parseFloat((zPosition * 0.5 + 0.5).toFixed(3));
    const opacity = parseFloat((zPosition * 0.6 + 0.4).toFixed(3));

    return {
      transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px)
                rotateY(${(angleStep * index + rotation).toFixed(2)}deg)
                scale(${scale})`,
      opacity: opacity,
      zIndex: Math.round(zPosition * 1000),
      display: 'block',
    };
  };

  const getImageDimensions = () => {
    if (windowWidth < 768) return 'w-36 h-24';
    if (windowWidth < 1024) return 'w-48 h-32';
    if (windowWidth < 1440) return 'w-64 h-44';
    return 'w-72 h-48';
  };

  const gridImages = images.slice(0, 8);

  // Create an array of letters for "GALLERY"
  const galleryLetters = "GALLERY".split("");

  return (
    <>
      <div className="w-full h-screen relative bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[0]})`,
            filter: 'blur(10px) brightness(0.4)',
          }}
        />

        <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
          <div className="absolute left-14 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
            {galleryLetters.map((letter, index) => (
              <span
                key={index}
                className="text-6xl font-bold animate-pulse"
                style={{
                  background: 'linear-gradient(to right, rgb(128, 4, 4), rgb(137, 74, 74))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div
            className="relative w-full max-w-[2000px] h-[400px] md:h-[500px] lg:h-[600px] z-10 mx-auto"
            style={{
              perspective: windowWidth < 768 ? "1600px" : "2400px",
              perspectiveOrigin: "50% 40%",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(0deg)",
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2
                            ${getImageDimensions()}
                            transition-all duration-300 
                            hover:scale-20 cursor-pointer
                            shadow-2xl`}
                  style={getImageStyle(index)}
                  onClick={() => setIsPaused(!isPaused)}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl 
                              border-2 border-red-400/30 hover:border-red-400
                              transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div
                    className="absolute w-full h-1/2 bottom-0 left-0 
                              bg-gradient-to-b from-white/20 to-transparent
                              rounded-b-2xl opacity-50"
                    style={{
                      transform: "rotateX(180deg) translateY(50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[0]})`,
            filter: 'blur(10px) brightness(0.4)',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Image Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gridImages.map((img, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
                           transform hover:scale-90 group"
              >
                <img
                  src={img}
                  alt={`Grid gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500
                           filter grayscale hover:grayscale-0
                           group-hover:rotate-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery3D;