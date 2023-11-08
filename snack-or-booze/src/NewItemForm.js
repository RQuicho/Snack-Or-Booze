import React, {useState} from 'react';

const NewItemForm = ({addItem}) => {
  const initialState = {
    name: '',
    description: '',
    recipe: '',
    serve: ''
  }
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
      id: formData.name.toLocaleLowerCase().replace(/\s+/g, '-')
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({...formData});
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        name='name'
        placeholder='name'
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor='description'>Description</label>
      <input
        id='description'
        type='text'
        name='description'
        placeholder='description'
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor='recipe'>Recipe</label>
      <input
        id='recipe'
        type='text'
        name='recipe'
        placeholder='recipe'
        value={formData.recipe}
        onChange={handleChange}
      />
      <label htmlFor='serve'>Serve</label>
      <input
        id='serve'
        type='text'
        name='serve'
        placeholder='serve'
        value={formData.serve}
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  )
}

export default NewItemForm;