'use client';

import { useState, useEffect, useCallback } from 'react';

const DURATION = 6000;

export default function CarouselSection({ slides }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index) => {
    if (animating || index === current) return;
    setPrev(current);
    setAnimating(true);
    setCurrent(index);
    setProgress(0);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 700);
  }, [animating, current]);

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [goTo, current, slides.length]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [goTo, current, slides.length]);

  // Auto-play + progress bar
  useEffect(() => {
    if (slides.length <= 1) return;
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, 50);
    const timer = setTimeout(() => goNext(), DURATION);
    return () => { clearInterval(tick); clearTimeout(timer); };
  }, [current, slides.length, goNext]);

  const fallback = (
    <header id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center text-white z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-widest uppercase">
          Politeknik Semen Indonesia
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Himpunan Mahasiswa<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300">Teknologi Informasi</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
          Bersama, Berkarya, Bersinergi Membangun Teknologi
        </p>
      </div>
    </header>
  );

  if (slides.length === 0) return fallback;

  const slide = slides[current];

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Slides layer */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : i === prev ? 0 : 0, zIndex: i === current ? 1 : i === prev ? 0 : 0 }}
        >
          <img src={s.image} alt={s.judul || ''} className="w-full h-full object-cover scale-105" />
        </div>
      ))}

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/50 to-transparent" />

      {/* Decorative blur orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 text-center text-white z-20 relative">
        <div
          key={current + '-badge'}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium tracking-widest uppercase animate-fade-in"
        >
          HMTI Polteksi
        </div>

        {slide.judul && (
          <h1
            key={current + '-title'}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight animate-fade-in"
          >
            {slide.judul}
          </h1>
        )}

        {slide.subjudul && (
          <p
            key={current + '-sub'}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 mb-10 animate-fade-in-delay"
          >
            {slide.subjudul}
          </p>
        )}

        {/* Slide counter */}
        {slides.length > 1 && (
          <p className="text-white/50 text-sm tracking-widest animate-fade-in-delay">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </p>
        )}
      </div>

      {/* Prev / Next */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Bottom bar: dots + progress */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 h-2.5 bg-white'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          {/* Progress bar */}
          <div className="w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1 text-white/40 text-xs tracking-widest">
        <span className="rotate-90 text-[10px]">SCROLL</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-white/60 animate-scroll-line" style={{ height: '40%' }} />
        </div>
      </div>
    </header>
  );
}
