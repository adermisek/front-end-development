import './App.css';
import React from 'react';

import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import PhoneBookItem from './model/PhoneBookItem';
import PhoneBook from './model/PhoneBook';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.phoneBook = new PhoneBook();

    this.state = {
      items: this.phoneBook.items
     
    };
  
    this.createItem = this.createItem.bind(this);
    this.changeItemState = this.changeItemState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  createItem(name, number) {
    
    let item = new PhoneBookItem(name, number);
    let items = this.phoneBook.add(item);
    this.setState({items: items});
  }

  changeItemState(item) {
    let items = this.phoneBook.changeState(item);
    this.setState({ items: items });
  }

  deleteItem(item) {

    let items = this.phoneBook.delete(item);
    this.setState({ items: items });
  }

  render() {
    return (<div id="App">
      <Body items={this.state.items} onDeleteItem={this.deleteItem} ></Body>
      <Footer createItem={this.createItem}></Footer>
    </div>)
  }

}

export default App;


