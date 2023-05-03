import Prob from './prob.jsx'
import { useState } from 'react'

const Second=()=>{
    let ogg=[{
        heading:"flower",
        count:34,
        ro:"images/one.jpg"
    },
    {
        heading:"winder",
        count:43,
        ro:"images/two.jpg"
    },{
        heading:"scooter",
        count:12,
        ro:"images/three.jpg"
    },{
        heading:"bike",
        count:90,
        ro:"images/Eid.avif"
    }]
    let[fo,setfo]=useState(0)
    let gj=()=>{
      setfo(fo+1)   
    }

   
    return(
        <div className="second">
            <h1>main component</h1>
            <Prob data={ogg} data2={fo} data3={gj}/>

           
        </div>
    )
}
export default Second;