import React, { useState } from 'react';
import axios from 'axios';

function GlobalSearch() {
  const [search, setSearch] = useState('');
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/globalSearch`, { search })
    .then((results) => {
      console.log(results);
    });
  console.log(search);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
}

export default GlobalSearch;
