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
   
    return(
        <div className="second">
            <h1>list details</h1>
            {
                ogg.map((data)=>(
                    <div style={{backgroundColor:"red",margin:"6px auto",padding:"24px",width:"750px"}} className="lob">
                        <h1>Title:- {data.heading}</h1>
                        <p>Count: {data.count}</p>
                        <img src={data.ro} alt="" />    
                    </div>
                )

                )
            }
        </div>
    )
}
export default Second;