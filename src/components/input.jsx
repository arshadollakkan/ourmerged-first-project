import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ASa = () => {
    let[name,setname]=useState("")
    let[ag,setag]=useState("")
    let[pani,setpani]=useState("")
    let nav=useNavigate()
    
    let lop=(e)=>{
     e.preventDefault() 
let data={name,ag,pani}
     fetch('http://localhost:4000/lop',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
     })
     alert("updated")
     nav('/display')

    }
    let asd=()=>{
        setname(" ")
        setag(" ")
        setpani(" ")
    }
    return ( 
        <div className="jgki">
            <h1>welcome</h1>
            <h2>form filling</h2>
            <form action="" onSubmit={lop}>
                <div className="one">
                    <input  type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Your Name" required/>
                </div>
                <div className="two">
                    <input type="text" value={ag} onChange={(e)=>setag(e.target.value)} placeholder="Enter Your age" required />
                </div>
                <div className="three">
                    <input type="text" value={pani} onChange={(e)=>setpani(e.target.value)} placeholder="Enter Your job" required />
                </div>
                <button>Submit</button>
                <button type="reset" onClick={asd}>reset</button>
            </form>
        </div>
     );
}
 
export default ASa;