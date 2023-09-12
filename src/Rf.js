import React, { Component } from 'react';

 

import ReactDOM from 'react-dom';


class Rf extends Component {

 constructor() {

   super();

   this.state = { participate: '' };

 }

 

 changeHandler = (event) => {

 

   let nam = event.target.name;

   let val = event.target.value;

   if(nam ==="roll_no"){

 

   }

   this.setState({ [nam]: val });

 }

 

 render() {

   return (

     <form>

       <h1>Welcome {this.state.participate}</h1>

       <p>Register your name:</p>

       <input type='text' name='participate' onChange={this.changeHandler} />

       <p>Enter your roll no:</p>

       <input type='text' name='roll_no' onChange={this.changeHandler} />

       <h2>Your roll_no is {this.state.roll_no}</h2>

     </form>

   );

 }

 

}

ReactDOM.render(<Rf />, document.getElementById('root'));
export default Rf

 



