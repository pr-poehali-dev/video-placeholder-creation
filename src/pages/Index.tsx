import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1A1F2C] via-[#403E43] to-[#222222]" />
      )}

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="font-montserrat font-bold text-white text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in tracking-tight">
          Скоро здесь
        </h1>
        <p className="font-open-sans font-light text-white/90 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Что-то особенное уже в пути
        </p>
        <Button 
          size="lg"
          className="font-open-sans font-semibold text-lg px-12 py-6 bg-white text-[#1A1F2C] hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-scale-in shadow-2xl"
          style={{ animationDelay: '0.4s' }}
        >
          Забронировать
        </Button>
      </div>

      {!videoUrl && (
        <div className="fixed bottom-6 right-6 z-30">
          <input
            type="text"
            placeholder="Вставьте ссылку на видео"
            className="font-open-sans px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
