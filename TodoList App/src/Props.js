

// import React from "react"

// function props(props){
   
//     return(
//         <div>
//             <h1>the name of the studnet is {props.name}</h1>
//         </div>
//     )
// }

// export default props;

// class props extends React.Component{
//     render(props){
//         return(
//             <div>My name si {this.props.name}</div>
//         )
//     }
// }
// export default props;

// class Props extends React.Component{
//     render(props)
//     {
//         return(
//             <div><h1>
//                 The Passing of props from the class components is {this.props.name} and age is {this.props.age}</h1></div>
//         )
//     }
// }

// export default Props


// class stax extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//     }
//     increment=()=>{
//         this.setState({count:++this.state.count})
        
//     }

//     decrement=()=>{
//         this.setState({
//             count:this.state.count-2
//         })
//     }
//     render(){
//         return(
//             <div>
//                        <h2>The movement of count is {this.state.count}</h2>
//                        <button onClick={this.increment}>Increment</button>
//                        <button onClick={this.decrement}>Decrement</button>

//             </div>
   
          
//         )
//     }
// }

// export default stax;

// function Stax(){
//     let [Count,SetCount]=useState(0)
    
//     let increment=()=>{
//         SetCount(Count+1)
//     }
//     let Decrement=()=>{
//  SetCount(Count-1)
//     }
// return(
//     <div>
      
//         <h1>The count of the elemet is {Count} </h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={Decrement}>decrement</button>
       
//        </div>
// )


// }

// export default Stax


// import React, { Component } from "react";

// class sort extends React.Component{

    
//     render(){
//         let array=[22,422415,81,42,52,2,6522]
       
//         return(
//             <div>
//                 {array.map((a,b)=>{return a-b})}
//             </div>
//         )
//     }
// }

// export default sort

// function sort(){

//     let arr=[1,2,3,4,5,5,6]
//     let str=arr.sort((a,b)=>b-a)

//     let stye={
//         color:"red"
//     }
//     return(
//         <div>
//             <h1 style={{backgroundColor:"red"}}>Sort of elements is{str.join(",")} </h1>
//         </div>
//     )
// }




// const fruits = ["Apple", "Banana", "Orange"];

// const FruitList = () => (
//   <ul>
//     {fruits.map((fruit, index) => (
//       <li key={index}>{fruit}</li>
//     ))}
//   </ul>
// );

// export default FruitList

//  let str=["apple","orange","pine"]

// let x= for(let x of str){
// return x
//  }
// let fruits=()=>(
   
//     <ul>
     
//             {str.map((f,i)=>(
//             <li key={i}>{f}</li>
//         ))}

    
        
//     </ul>
// )

// export default fruits