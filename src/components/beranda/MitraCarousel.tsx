import React from "react";

interface MitraCarouselProps {
       images: string[];
}

const MitraCarousel: React.FC<MitraCarouselProps> = ({ images }) => {
return (
<div className="relative w-full overflow-hidden">
      {/* This is the gradient overlay */}
      <div className="gradient-overlay-left"></div>
      <div className="gradient-overlay-right"></div>
 <div className="flex animate-marquee whitespace-nowrap">
 {/* Set gambar pertama (asli) */}
 {images.map((image, index) => (
 <div key={`track1-${index}`} className="marquee-item flex-shrink-0 flex items-center justify-center h-45">
<img
 src={image}
 alt={`Mitra ${index + 1}`}
 className="max-h-full object-contain"
 />
 </div>
 ))}
 {/* Set gambar kedua (duplikat) untuk transisi mulus */}
 {images.map((image, index) => (
 <div key={`track2-${index}`} className="marquee-item flex-shrink-0 flex items-center justify-center h-80">
 <img
 src={image}
 alt={`Mitra ${index + 1}`}
 className="max-h-full object-contain"
 />
 </div>
 ))}
 </div>
 </div>
 );
};

export default MitraCarousel;