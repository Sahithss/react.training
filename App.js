

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
import React from 'react'

import FunctionalComponents from './components/FunctionalComponents';
export const App = () => {
  return (
    
      //<FBCStateEx/>
      <div className='App'>
        <h1 class='heading'>so fast </h1>
        
        <FunctionalComponents cname="Mru" apply={true}>
          <h1>solo leveling</h1>
        </FunctionalComponents>
      </div>
      
    
  )
}
export default App;