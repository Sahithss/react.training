

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

import UseEffectEx from './components/UseEffectEx';



function App() {
  return (
    <div className="App">
   
     <UseEffectEx></UseEffectEx>
     </div>
  );
}

export default App;
