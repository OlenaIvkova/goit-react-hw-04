import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root');


const ImageModal = ({ data, onClose }) => (
  <ReactModal
    isOpen={true}
    onRequestClose={onClose} 
    className={styles.modal}
  >
    <div className={styles.content}>
      <button className={styles.close} onClick={onClose}>
        ×
      </button>
      <img src={data.urls.regular} alt={data.alt_description} />
      <p>{data.alt_description || 'No description'}</p>
      <p>Author: {data.user.name}</p>
      <p>Likes: {data.likes}</p>
    </div>
  </ReactModal>
);


export default ImageModal;