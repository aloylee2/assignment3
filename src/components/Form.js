import React, { useState} from 'react';

const ReusableForm = ({ fields, onSubmit, onFieldChange }) => {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file
      });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    if (onFieldChange) {
      onFieldChange(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState);
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}:</label>
          {field.options ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={field.className}
              required={field.required}
            >
              <option value=''>Select an option</option>
              {field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={field.className}
              required={field.required}
            />
          ) : field.type === 'file' ? (
            <input
              type='file'
              id={field.name}
              name={field.name}
              accept='image/*'
              onChange={handleChange}
              className={field.className}
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={field.className}
              required={field.required}
            />
          )}
        </div>
      ))}

      {imagePreview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={imagePreview} alt='Preview' style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      )}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default ReusableForm;
