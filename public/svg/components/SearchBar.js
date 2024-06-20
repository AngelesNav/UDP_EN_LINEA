import React from 'react';

const searchBarStyles = {
  container: {
    display: 'flex',
    width: '735.034px',
    height: '60.034px',
    padding: '20px 24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // gap: '10px',
    borderRadius: '80px',
    border: '2px solid #888',
    backgroundColor: '#FFF',
    marginBottom: '60px'
  },
  input: {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    padding: '0',
    marginTop: '1px',
    paddingRight: '15px'
  },
};

const SearchBar = ({ placeholder, onChange }) => (
  <div style={searchBarStyles.container}>
    <input
      type="text"
      style={searchBarStyles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
