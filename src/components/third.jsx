import { useEffect, useState } from "react";
const San = () => {
    let[change,setchange]=useState("hi")
    let[inc,setinc]=useState(0)
    useEffect(()=>{
        console.log("useeffetct work");
    },[inc])
    return ( 
        <div className="po">
            <h1>{change}</h1>
            <h2>{inc            }</h2>
            <button onClick={()=>setchange('sugalle')}>change</button>
            <button onClick={()=>setinc(inc+1)}>incriment</button>
        </div>
     );
}
 
export default San;