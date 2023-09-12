import React from 'react'; 
 import './App.css';  
 //HighChart Modules 
 import ReactHighcharts from "react-highcharts"; 


 const config = { 
 chart: { 
 type: 'spline' 
 }, 
 title: { 
 text: 'My chart' 
 }, 
 series: [ 
 { 
 data: [1, 2, 1, 4, 3] 
 } 
 ] 
 }; 
 class App extends React.Component { 
 render() { 
 return ( 


 <div> 
 <h1>Highcharts with Reactjs</h1> 
 <ReactHighcharts config={config}></ReactHighcharts> 
 </div> 
 ) 
 }; 
 } 

 export default App; 




