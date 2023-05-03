
import { useState } from "react";
const Jdcb = () => {
    let favarates = [
        {
            title:"rom",
        count:14,
        id:1
        },
        {
            title:"rgo",
            count:65,
            id:2
            },
        {
            title:"float",
                count:9,
                id:3
                },
        {
            title:"proe",
                    count:32,
                    id:4
                    }
    ]
    let[one,setone]=useState(favarates)
    let asd=(id,title)=>{
        setone(one.filter(x=>x.id !=id))
        alert(`titles${title} is removed`)
    }
    return (
        <div className="yt">

            {
                one.map((data)=>(
                    <div className="lo">
                        <h1>Title: {data.title}</h1>
                        <h2>Count: {data.count}</h2>
                        <button onClick={()=>asd(data.id,data.title)}>Delete</button>
                    </div>
                ))
            }
           
        </div>
    )
}
export default Jdcb;