import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Lock = () => {
    let[rol,setrol]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
          let responce=await fetch('http://localhost:4000/lop')
          let data=await responce.json()
          setrol(data)

        }
        fetchdata()
    },[rol])
    let afg=(id,name)=>{
        setrol(rol.filter(x=>x.id!==id))
        alert(`${name} is removed`)
    }
    let prg=(id)=>{
        fetch(`http://localhost:4000/lop/${id}`,{
            method:"DELETE"
        })
        alert("permenantly deleted")
        
    }
    let pl=()=>{
        setrol("")
    }
    return ( 
        <div className="gj">
            <h1 style={{backgroundColor:"red"}}>displaying of data</h1>
               {
                rol.map((data)=>(
                    <div className="lp">
                        <h2>name is: {data.name}</h2>
                        <h3>age is:{data.ag}</h3>
                        <h4>joli is:{data.pani}</h4>
                        <button onClick={()=>afg(data.id,data.name)}>remove temporary</button>
                        <button onClick={()=>prg(data.id)}>permenant deletion</button>
                        
                    </div>
                   
                ))
               }
                <button onClick={pl}>delete All</button>
                <Link to={'/new'}>new page</Link>
                
        </div>
     );
}
 
export default Lock;