import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage component with lazy loading and srcSet support
 * Reduces CLS by using aspect-ratio and placeholder while loading
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  quality = "auto",
  responsive = true,
  placeholder = true,
  onLoad = () => {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Build Cloudinary URL with optimization params if using Cloudinary
  const optimizedSrc = src && src.includes("cloudinary.com")
    ? `${src.replace("/upload/", `/upload/f_auto,q_${quality},w_800/`)}`
    : src;

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {/* Placeholder blur while loading */}
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}

      {/* Actual image, only rendered if in viewport */}
      {isInView ? (
        <img
          src={optimizedSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
        />
      ) : (
        /* Spacer while waiting for intersection */
        <div className="w-full h-full bg-gray-100" />
      )}
    </div>
  );
};

export default OptimizedImage;
