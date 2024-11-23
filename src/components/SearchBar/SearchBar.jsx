import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;