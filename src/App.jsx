import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import styles from './App.module.css';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'r-tYbkV6tgOq4IxCQoeuywAIQeXocFjGz3mDUQHE-QY';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

try {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  if (page === 1) {
    setImages(response.data.results);
  } else {
    setImages((prevImages) => [...prevImages, ...response.data.results]);
  }
} catch (err) {
  console.error('Error fetching images:', err); 
  setError('Failed to load images. Please try again later.');
} finally {
  setIsLoading(false);
}
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }
    setQuery(searchQuery);
    setPage(1);
  };
  
  const openModal = (image) => {
  if (modalData) {
    console.log('Modal is already open.');
    return;
  }
  console.log('Opening modal for image:', image);
  setModalData(image);
};

const closeModal = () => {
  console.log('Closing modal.');
  setModalData(null);
};

  {modalData && (
  <ImageModal
    key={modalData.id} 
    data={modalData}
    onClose={closeModal}
  />
)}

  return (
  <div className={styles.app}>
    <SearchBar onSubmit={handleSearch} />
    <ImageGallery images={images} onImageClick={openModal} />
    {isLoading && <Loader />}
    {error && <ErrorMessage message={error} />}
    {images.length > 0 && !isLoading && <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />}
    {modalData && <ImageModal data={modalData} onClose={closeModal} />}
    <Toaster position="top-right" />
  </div>
);
};

export default App;