import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* function Hello (props) {
    return <h2>Welcome to React</h2>
} */

// Component by Function
/* function Hello (props) {
  return <h2>{ props.title }</h2>
} */

// Component by Arrow Function
//const Hello = (props) => <h2>{props.title}</h2>

// Component by Class
class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    //const textoSegunBool = this.props.boolean ? 'Cierto' : 'Falso'
      //const textoSegunBool = this.props.isActivated ? 'On' : 'Off'
      const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
  return (
    <div>
      <p>{mappedNumbers.join(',')}</p>
      <p>{this.props.objectWithInfo.key}</p>

      {/* <p>{this.props.arrayOfNumbers.join(',')}</p> */}
       {/* <p>{this.props.text}</p>
       <p>{this.props.number}</p>
       <p>{textoSegunBool}</p> */}
       {/* <p>{JSON.stringify(this.props.boolean)}</p> */}
    </div>
     
    )
  }
}

class App extends Component{
  render() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        {/* <Text number={2} text='Texto en string' boolean={false} /> */}
        <Text 
        arrayOfNumbers={[2, 3, 10]}
        objectWithInfo={{ key: 'First Value', key2: 'otherValue'}}
        isActivated
        number={2} 
        text='Texto en string' 
         />
      </div>
      
    </div>
  );
}
}

export default App;
