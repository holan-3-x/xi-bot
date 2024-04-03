import React, { useState } from 'react';

const CreateMusicForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    writer: '',
    img: null, // Change to null for file input
    src: null, // Change to null for file input
    UserID: '',
    DateTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    for (const key in formData) {
      formDataWithFile.append(key, formData[key]);
    }

    try {
      // Send a POST request to Laravel API endpoint to create a new music entry with file upload
      const response = await fetch('/music', {
        method: 'POST',
        body: formDataWithFile,
      });

      if (!response.ok) {
        throw new Error('Failed to create music entry');
      }

      const data = await response.json();
      console.log('Music entry created:', data);
      // You can redirect or update state as needed
    } catch (error) {
      console.error('Error creating music entry:', error);
    }
  };

  return (
    <div>
      <h1>Create Music</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Add input fields for each attribute in the formData */}
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Writer:
          <input type="text" name="writer" value={formData.writer} onChange={handleChange} required />
        </label>
        <label>
          Image:
          <input type="file" name="img" accept=".jpg" onChange={handleChange} required />
        </label>
        <label>
          Audio File:
          <input type="file" name="src" accept=".mp3" onChange={handleChange} required />
        </label>
       

        <button type="submit">Create Music</button>
      </form>
    </div>
  );
};

export default CreateMusicForm;
