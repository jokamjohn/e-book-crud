import React from 'react';
import PropTypes from 'prop-types';

export class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: props.item.name,
      price: props.item.price
    }
  }

  toggleEdit = () => this.setState({isEditing: !this.state.isEditing});

  render() {
    const {isEditing, name, price} = this.state;
    return (
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3">
            <img className="card-img-top" src={this.props.image}/>
            <div className="card-body">
              {isEditing
                  ?
                  <div className="mb-4">
                    <input type="text" name="name" className="form-control mb-2 mr-sm-2" placeholder="Item"
                           value={name} required/>
                    <input type="number" name="price" className="form-control" placeholder="Price"
                           value={price} required/>
                  </div>
                  :
                  <div>
                    <h4 className="card-title text-center">{name}</h4>
                    <div className="row justify-content-center mb-4">
                      <p className="card-text">
                        <span className="badge badge-secondary py-2 mr-5">Price</span>
                        <span>${price}</span>
                      </p>
                    </div>
                  </div>
              }

              <div className="row justify-content-center">
                {isEditing
                    ?
                    <div>
                      <button type="button" className="btn btn-primary mr-2">Update</button>
                      <button type="button" className="btn btn-primary" onClick={this.toggleEdit}>Cancel</button>
                    </div>
                    :
                    <div>
                      <button type="button" className="btn btn-primary mr-2" onClick={this.toggleEdit}>Edit</button>
                      <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
    )
  }
}

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};

//Convert ItemCard component into a class component
//Prefix all code instances that start props to this.props
//the functionality should still be the same.

//Should be able to edit the name or price from the card or cancel the edit.
//Add a constructor and add state with a boolean isEditing set to false as the
//default value.

//Create a function called toggleEdit.  this will toggle the isEditing boolean in state
//to either false/true when the Edit/Cancel buttons are clicked.

//Use destructing to get the isEditing boolean value from state in teh render method.
//then use it to show either the update/cancel buttons or the edit/delete buttons.
//add an onclick event handler to both the cancel and edit buttons.
//When the edit button is clicked the text of the buttons changes to update/cancel.
//When cancel is clicked the text of the buttons changes back to edit/delete.

//Add name and price to state and set their defaults to the name and price from the props.

//Using the isEditing boolean from state we show the name and price input fields(true) or
//the name h4  and price(false). as shown in the code.
//At this point we cannot change the name/price nothing can be deleted or added in the input fields.


