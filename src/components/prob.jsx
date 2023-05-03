const Prob = (props) => {
    let f=props.data
    let rt=props.data2
    let vf=props.data3
    return ( 
        <div className="kom">
           <h2>sub component</h2> 
           {
              f.map((data)=>(
                <div className="ko">
                    <h1>title:{data.heading}</h1>
                    <img src={data.ro} alt="" />  
                </div>
              ))
           }
           <h1>{rt}</h1>
           <button onClick={vf}>add</button>
        </div>
     );
}
 
export default Prob;