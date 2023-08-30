import React from 'react';

import { FaBan, FaSearch } from 'react-icons/fa';

const Search = ({
  funktion,

  searchKey,
  setSearchKey,

  isSearched,
  setIsSearched,

  autoSearch,
  autoSearchFunktion,

  resetSearchData,
}) => {
  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
    setIsSearched(false);
  };

  const handleSearch = () => {
    if (isSearched) {
      setSearchKey('');
      setIsSearched(false);

      resetSearchData();
    } else {
      setIsSearched(true);
      funktion({
        query: { search: searchKey },
        search: true,
      });
    }
  };

  const handleAutoSearch = (e) => {
    setSearchKey(e.target.value);

    !isSearched && setIsSearched(false);

    funktion &&
      funktion({
        query: { search: e.target.value },
        search: true,
      });
  };

  return (
    <div>
      <input
        placeholder="Search Here"
        onChange={
          autoSearch
            ? autoSearchFunktion
              ? autoSearchFunktion
              : handleAutoSearch
            : handleInputChange
        }
        value={searchKey}
        onKeyPress={(e) => {
          if (!e) e = window.event;
          var keyCode = e.code || e.key;
          if (keyCode == 'Enter') {
            handleSearch();
          }
        }}
      />
      {!autoSearch && (
        <button onClick={handleSearch} disabled={!searchKey}>
          {isSearched && searchKey ? <FaBan /> : <FaSearch />}
        </button>
      )}
    </div>
  );
};

export default Search;
