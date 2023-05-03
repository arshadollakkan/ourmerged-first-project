

import { useEffect, useState } from "react";

const Gol = () => {
    let [bol,setbol]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
let responce=await fetch('http://localhost:4000/name')
let data=await responce.json()
setbol(data)
        }
        fetchdata()
    },[])
    let asd=(id,title)=>{
        setbol(bol.filter(x=>x.id!==id))
        alert(`${title} is removed`)
    }
    return (  
        <div className="jpkm">
        <h1>fetching datas</h1>
        {
            bol.map((data)=>(
                <div className="tol">
                    <h1>Title: {data.title}</h1>
                    <p>Amount: {data.amount}</p>
                    <h4>Designation: {data.designation}</h4>
                    <button onClick={()=>asd(data.id,data.title)}>Remove</button>
                </div>
            ))
        }
        </div>
    );
}
 
export default Gol;