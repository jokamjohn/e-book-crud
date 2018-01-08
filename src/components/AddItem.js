import React from 'react';

export const AddItem = () => (
    <div className="row justify-content-center">
      <form className="form-inline">
        <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Item"/>

        <div className="input-group mb-2 mr-sm-2">
          <input type="text" className="form-control" placeholder="Price"/>
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
      </form>
    </div>
);