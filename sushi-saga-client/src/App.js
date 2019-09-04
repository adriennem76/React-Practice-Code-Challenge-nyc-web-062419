import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiArray: [],
    startNum: 0,
    eatenSushi: [],
    wallet: 100
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then((data) => this.setState({sushiArray: data.map(sushi => {
      sushi.eaten = false
      return sushi})}))
  }
  
  moreClick = () => {
    this.setState({startNum: this.state.startNum + 4})
  }

  handleClick = (e,sushi) => {
    if (sushi.price <= this.state.wallet){
      const id = sushi.id
      let updateSushi = this.state.sushiArray.map(sushi => {
        if (id === sushi.id){
          sushi.eaten = true
          return sushi
        } else {
          return sushi
        }
      } )

      this.setState({sushiArray: updateSushi, eatenSushi: [...this.state.eatenSushi, sushi], wallet: this.state.wallet-sushi.price})
    }
  }

  render() {
    console.log("render")
    return (
      <div className="app">
        <SushiContainer sushiArray={this.state.sushiArray} startNum={this.state.startNum} moreClick={this.moreClick} handleClick={this.handleClick}/>
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;