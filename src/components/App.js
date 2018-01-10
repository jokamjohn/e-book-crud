import React, {Component} from 'react';
import image from '../img/vumbulaitem.png';
import {ItemCard} from "./ItemCard";
import {Footer} from "./Footer";
import {Nav} from "./Nav";
import {Jumbtron} from "./Jumbtron";
import {AddItem} from "./AddItem";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: "Noodles",
          price: "15"
        },
        {
          id: 2,
          name: "Mangoes",
          price: "10"
        },
        {
          id: 3,
          name: "Oranges",
          price: "20"
        },
        {
          id: 4,
          name: "Passion Fruits",
          price: "14"
        }
      ]
    }
  }

  onSubmit = (name, price) => {
    const item = {
      name,
      price
    };
    const items = [...this.state.items, item];
    this.setState({items: items});
  };

  onUpdate = (name, price, itemIndex) => {
    const item = {
      name,
      price
    };
    const items = [
      ...this.state.items.filter((item, index) => index !== itemIndex),
      item
    ];
    this.setState({items: items});
  };

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    return <div>
      <Nav/>

      <Jumbtron/>

      <div className="container pt-4">

        <AddItem onSubmit={this.onSubmit}/>

        <h1 className="display-4 my-4 text-center text-muted">Items</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard key={item.id} image={image} item={item} index={index} onUpdate={this.onUpdate}
                          onDelete={this.onDelete}/>
            )
          }
        </div>

        <hr/>
        <Footer/>
      </div>
    </div>;
  }
}

export default App;
