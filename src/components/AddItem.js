import React from 'react';
import PropTypes from 'prop-types';

export const AddItem = ({onSubmit, onChange, name, price}) => (
    <div className="row justify-content-center">
      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            name="name"
            className="form-control mb-2 mr-sm-2"
            placeholder="Item"
            onChange={onChange}
            value={name}
            required
        />
        <div className="input-group mb-2 mr-sm-2">
          <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              onChange={onChange}
              value={price}
              required
          />
        </div>
        <button
            type="submit"
            className="btn btn-primary mb-2 pxy-4">
          Save
        </button>
      </form>
    </div>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};