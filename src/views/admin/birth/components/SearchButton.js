import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import 'assets/css/SearchButton.css'; // Fichier CSS personnalisé pour les styles

const SearchButton = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue); // Appel de la fonction de recherche avec la valeur saisie
    }
  };

  return (
    <div className="search-container">
      <Button className="menu-button" icon={<MenuOutlined />} />
      <Input
        className="search-input"
        placeholder="Hinted search text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={handleSearch}
        suffix={<SearchOutlined onClick={handleSearch} style={{ cursor: 'pointer' }} />}
      />
    </div>
  );
};

export default SearchButton;
