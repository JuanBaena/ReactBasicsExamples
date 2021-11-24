import React, {Component} from 'react';
import "./index.css";


class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = { customersList:[],
      value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleAddCustumer = this.handleAddCustumer.bind(this);
  }

  handleAddCustumer(event) {
    if(this.state.value!==""){
    event.preventDefault();
    this.setState(prevState => {
      return {
        customersList : prevState.customersList.concat(this.state.value)
      };});
    this.setState({value: ""});
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() { 
    return ( 
      <div className="mt-75 layout-column justify-content-center align-items-center">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="Name" data-testid="app-input" value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.handleAddCustumer} type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
        </section>

        <ul className="styled mt-50" data-testid="customer-list">
          {(this.state.customersList || []).map((customer) =>
             <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >{customer}</li>)}
        </ul>
      </div>
    );
  }
}
 
export default CustomerList;