import React, { useState, useEffect, useRef } from 'react';

export default function ImageChange() {
  const [image, setImage] = useState('');
  const imageRef = useRef(null);
  const images = ['https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80', 'https://w0.peakpx.com/wallpaper/235/886/HD-wallpaper-rabbits-cute-animals-pets-white-rabbit-gray-rabbit.jpg', 'https://w0.peakpx.com/wallpaper/607/380/HD-wallpaper-rabbit-animals-cute-pet-white.jpg'];

  useEffect(() => {
    setImage(images[0]);
  }, []);

  const handleImageChange = () => {
    const currentIndex = images.indexOf(image);
    const nextIndex = (currentIndex + 1) % images.length;
    setImage(images[nextIndex]);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = image;
    }
  }, [image]);

  return (
    <div>
      <img ref={imageRef} />
      <button onClick={handleImageChange}>Change Image</button>
    </div>
  );
}
