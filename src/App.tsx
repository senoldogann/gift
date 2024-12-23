import { useState, useEffect, useRef } from 'react';
import { getTimeSinceWedding } from './utils/dateUtils';
import { TimeUnit } from './components/TimeUnit';
import { ImageSlider } from './components/ImageSlider';
import React from 'react';

export function App() {
  const WEDDING_DATE = new Date('2023-06-01');
  const [time, setTime] = useState(getTimeSinceWedding(WEDDING_DATE));
  const videoRef = useRef<HTMLVideoElement | null>(null);  // Video referansını ekledik
  const [isVideoReady, setIsVideoReady] = useState(false);  // Kullanıcı etkileşimini takip et

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeSinceWedding(WEDDING_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleUserInteraction = () => {
    if (videoRef.current && !isVideoReady) {
      videoRef.current.play().catch((error) => {
        console.log('Error attempting to play the video:', error);
      });
      setIsVideoReady(true);  // Video başlatıldı, durumu güncelle
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex flex-col items-center justify-center p-4"
      onClick={handleUserInteraction}  // Sayfaya tıklanmasını bekliyoruz
    >
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">
        Time Since Our Wedding
      </h1>

      {/* Sesli Video Elemanı (Görseli Gizle) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={false}  // Sesli oynatma için muted'ı false yapıyoruz
        playsInline
        className="absolute w-0 h-0"  // Görseli gizlemek için genişliği ve yüksekliği 0'a setliyoruz
      >
        <source src="img/aaa.mp4" type="video/mp4" />
        Your browser does not support the video element.
      </video>

      {/* Image Slider */}
      <ImageSlider />
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <TimeUnit value={time.years} label="Years" />
        <TimeUnit value={time.months} label="Months" />
        <TimeUnit value={time.days} label="Days" />
        <TimeUnit value={time.hours} label="Hours" />
        <TimeUnit value={time.minutes} label="Minutes" />
        <TimeUnit value={time.seconds} label="Seconds" />
      </div>

      <p className="mt-8 text-gray-600 text-center">
        Celebrating our love since June 1st, 2023
      </p>
    </div>
  );
}

export default App;
