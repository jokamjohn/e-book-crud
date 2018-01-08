import React from 'react';

export class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0
    }
  }

  onChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  };

  onSubmit = event => {
    event.preventDefault();
    const {name, price} = this.state;
    this.props.onSubmit(name, price);
    this.setState({name: "", price: 0})
  };

  render() {
    const {name, price} = this.state;
    return (
        <div className="row justify-content-center">
          <form className="form-inline" onSubmit={this.onSubmit}>
            <input type="text" name="name" className="form-control mb-2 mr-sm-2" placeholder="Item"
                   onChange={this.onChange} value={name} required/>
            <div className="input-group mb-2 mr-sm-2">
              <input type="number" name="price" className="form-control" placeholder="Price" onChange={this.onChange}
                     value={price} required/>
            </div>
            <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
          </form>
        </div>
    )
  }
}

//Change functional component to class component
//Add a constructor method.
//Initial state with an object containing name and price with defaults.
//Add name attributes to both inputs the name and the price.
//Add the value attribute to both input elements and use destructing to get the name and price
//from state and set them to the value attributes respectively.
//Define the onChange function which accepts event as its only parameter. This function will be attached to the
//onChange event handler for the input elements and whenever a user types or deletes a character within the
//input element the state of the component will be changed. From the method we get the value in the input field
//and also the name we assigned to the input field. Then using the setState method the name and value from the
//input field are added to state.
//Add the onChange event listener to the input elements.
//Also make the input field values required by adding required as an attribute to them.

//Since we need to add items to the state in the parent component  we define an onSubmit function in the
//parent component.(Note that this method can have any name).
//this method should accept two parameters the name and price. Then construct an object of name and price.
//create a const of items which is an array, using the spread operator we add the items already in state and
//also the newly created item. Then using setState to update state.
//Back in the AddItem component also create an onSubmit function which will be attached to the onSubmit function
//of the form which will be called when the save button is clicked.
//This function accepts one parameter the event and within it event.preventDefault() is called so that
//the default behavior of the button is disabled.
//The name and price of the item is then got from state and then the obSubmit of the parent component
//is called with the name and price of the item.
//Set the name back to an empty string and price to 0 by setting a new state. this will reset the values
//within the input fields.
//This finishes the saving of the item to the array of
//items in the parent component state and since state changes, the new item is shown in the browser.