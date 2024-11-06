import React, { useState } from 'react';

const ReusableForm = ({ fields, onSubmit }) => {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null); // State to store the image preview

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // If the field is a file input, handle the file change
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file
      });
      // Create a URL for the selected image file
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data (including image) to the parent
    setFormData(initialFormState); // Reset the form
    setImagePreview(null); // Reset the image preview
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}:</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
            />
          ) : field.type === 'file' ? (
            <input
              type="file"
              id={field.name}
              name={field.name}
              accept="image/*"
              onChange={handleChange}
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
            />
          )}
        </div>
      ))}

      {imagePreview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      )}

      <button type="submit">Submit</button>



    </form>
  );
};

export default ReusableForm;
