import React from 'react';
import { ethers } from 'ethers';

import {abi} from "./build/contracts/Eth2Signal.json";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      
    render() {
        let provider = ethers.getDefaultProvider();
        let contractAddress = "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E";
        let contract = new ethers.Contract(contractAddress, abi, provider);
        return (
            <div className="App">
            <header className="App-header">
                <p>
                Welcome to the eth2 staking singal system.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Number of validators:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <a
                    className="App-link"
                    href="https://chainsafe.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Made with love by ChainSafe Systems
                </a>
            </header>
            </div>
        );
    }
}

export default App;
