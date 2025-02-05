import React from 'react'

 const FBCPropEX = (props) => {
    console.log(props);
if(props.isMarried==true){
    return(
        <div>
            <hi>{props.username} is a married person</hi>
            {
                props.hobbies.map(hobby=>{
                    return <li>{hobby}</li>
                })
            }
        </div>
    )
}else{
    return <hi>Not Married</hi>
}
  return (
    <div>FBCPropEX</div>
  )
}

