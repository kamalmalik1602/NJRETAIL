import React from 'react';
import ImageSlider from './ImageSlider';

const images  = [
  { id: 1, src: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', alt: 'Image 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmV0YWlsJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', alt: 'Image 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJldGFpbCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 3' },
];

const ImageSection = () => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default ImageSection;

