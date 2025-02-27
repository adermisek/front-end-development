import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
      super(props)
      this.onNameChange = this.onNameChange.bind(this);
      this.onNumberChange = this.onNumberChange.bind(this);
      this.state = {
        name: '',
        number: '',
      }
    }
  
    onNameChange(event) {
    this.setState({ name: event.target.value })
    
    }
  
    onNumberChange(event) {
      this.setState({ number: event.target.value })
     
    }
  
    render() {
      return ( <footer> 
        <div>
          <input type="text" onChange={this.onNameChange} value={this.state.name} placeholder='name...'/>
          <input type="text" onChange={this.onNumberChange} value={this.state.number} placeholder='phone number...' />
          <span id="add-btn" onClick={() => this.props.createItem(this.state.name, this.state.number)}>Add</span>
        </div>
        </footer>
      )
    }
  }

export default Footer;
