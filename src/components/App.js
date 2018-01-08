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
          name: "Noodles",
          price: 15
        },
        {
          name: "Mangoes",
          price: 10
        },
        {
          name: "Oranges",
          price: 20
        },
        {
          name: "Passion Fruits",
          price: 14
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
                <ItemCard key={index} image={image} item={item}/>
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
