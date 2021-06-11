import axios from 'axios';
import React, { useState } from 'react';

function DocumentationForm() {
  const [title, setTitle] = useState('');
  // TODO : un state par champ (commenté mais vu avec Bastien)
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8000/documentation', {
        title,
        // TODO description: '',
        // price: '',
        // category_id: 12,
        // user_id: 2,
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
      });
  };

  return (
    <div className="docForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">
            <span>Title:</span>
            <br />
            <textarea id="title" value={title} onChange={handleChange} />
          </label>
          <br />
          <input type="submit" value="Envoyer" />
        </fieldset>
      </form>
    </div>
  );
}

export default DocumentationForm;
