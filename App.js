

// import React, { Component } from 'react'
// import CBCPropEx from './sahi/CBCPropeEx'
// import FBCPropEX from './sahi/FBCPropEX'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx
//         username="sahith"
//         age={20}
//         hobbies={["playing","anime","sleeping"]}
//         address={{city:"hyd",area:"jublieehills"}}
//         sendFun={function(){alert("hi i am sahith")}}
//         />
//         <FBCPropEX
//         username="abhinay"
//         isMarried={true}
//         hobbies={["eating","sleeping","repeat"]}/>
//         <CBCStateEx/>
//       </div>
//     )
//   }
// }


import RefExamples from './hookexamples.jsx/RefExamples';




function App() {
  return (      
    <div className="App">
   
     
     <RefExamples></RefExamples>
     </div>
  );
}

export default App;
