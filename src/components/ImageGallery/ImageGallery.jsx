// import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';


const ImageGallery = ({ images, onImageClick }) => {

  const handleImageClick = (image) => {
    onImageClick(image); 
  };

  return (
    <ul className={styles.gallery}> {}
      {images.map((image) => (
        <li key={image.id}> {}
          <div onClick={() => handleImageClick(image)}>
            <img src={image.urls.thumb} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

// const ImageGallery = ({ images, onImageClick }) => {

//   const handleImageClick = (image) => {
//     onImageClick(image); 
//   };

//   return (
//     <div className={styles.gallery}>
//       {images.map((image) => (
//         <div key={image.id} onClick={() => handleImageClick(image)}>
//           <img src={image.urls.thumb} alt={image.alt_description} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;


// const ImageGallery = ({ images, onImageClick }) => (
//   <ul className={styles.gallery}>
//     {images.map((image) => (
//       <ImageCard key={image.id} image={image} onClick={onImageClick} />
//     ))}
//   </ul>

// );

// const handleImageClick = (image) => {
//   onImageClick(image); 
// };
// return (
//   <div className={styles.gallery}>
//     {images.map((image) => (
//       <div key={image.id} onClick={() => handleImageClick(image)}>
//         <img src={image.urls.thumb} alt={image.alt_description} />
//       </div>
//     ))}
//   </div>
// );

// export default ImageGallery;