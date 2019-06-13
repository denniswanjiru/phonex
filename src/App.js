import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import phoneNumberGenerator from './utils/generateNumbers';

export default class App extends Component {
  state = {
    amount: null,
    numbers: [],
    error: null,
    asc: false
  }

  componentDidMount() {
    const numbers = JSON.parse(localStorage.getItem('numbers'));
    if(numbers && numbers.length > 0) {
    /* istanbul ignore next */
      this.setState({ numbers })
    }
  }

  /* istanbul ignore next */
  generateNumbers = (e) => {
    e.preventDefault()
    const { amount } = this.state;
    const numbers = phoneNumberGenerator(amount);
    this.setState({ numbers });
    localStorage.setItem('numbers', JSON.stringify(numbers));
  }

  handleChange = e => {
    this.setState({ amount: e.target.value });
  }

  /* istanbul ignore next */
  handleSort = e => {
    e.preventDefault();
    const { asc, numbers } = this.state;

    this.setState({ asc: !asc });

    if(!asc) {
      this.setState({numbers: numbers.sort()})
    } else {
      this.setState({ numbers: numbers.reverse() })
    }
  }

  render() {
    const { numbers, error, amount } = this.state;
    const disable = amount > 10000 || amount < 1;

    return (
      <div className="page">
        <div className="card">
          <div>
            <h1>PhoneX</h1>
            <form>
              <div className="form-input">
                <input
                name="phone"
                type="number"
                placeholder="Amount to be generated"
                onChange={this.handleChange}
                className={error ? 'error-input' : ''}
                />
                {disable && amount !== null && <div className="error">Amount must be between 1 - 10000</div>}
              </div>
              <button type="submit" onClick={this.generateNumbers} disabled={disable}>Generate</button>
            </form>
          </div>

          <p>Random Phone Number Generator App</p>
        </div>
        <div className="card">
          <Row className data={{ index: "Index", phone: 'Phone Numbers' }} onClick={this.handleSort} />
          {numbers && numbers.map((phone, idx) => {
            /* istanbul ignore next */
            return <Row key={idx} data={{ index: idx + 1, phone }} />
          })}
          {numbers.length < 1 && <div className="centered">You haven't generated any phone numbers yet</div>}
        </div>
      </div>
    );
  }
}
