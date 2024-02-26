import axios from "axios";
import { useState,useEffect } from "react";
//import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const AdminViewProduct = () => {

    let [obj,setObj]=useState([])
    let [force,setForce]=useState(true) // confused sometime passing data inside quotes sometime not why?
        useEffect(()=>{
           /*axios.get('http://localhost:1000/Products')*/ axios.get('https://pokemondodge.github.io/database/data.json/${Products}') /// we've to use template literals to pass *dynamic data* inside json file for fetching
            .then((response)=>{ setObj(response.data)})
            .catch((error)=>{console.log(error)})
        },[force])   // force rendering along-with data dependency

        // useEffect(async()=>{
        //     let res = await fetch('https://pokemondodge.github.io/database/data.json')
        //     let response = await res.json();
        //     console.log(response)
        //     setObj(response.Products)
        //     console.log(obj)
        // },[])

        let removeDish=(x,y)=>
        {
            //console.log(x)
            axios.delete('http://localhost:1000/Products/${x}') //using template literals to pass dynamic data insde the file also x is id and y is name just like normal function
            .then((res)=>{alert(`${y} removed successfully`);setForce(!force)})
            .catch((err)=>{alert(`data not found`)})
        }

    return (
    <div style={{backgroundColor:'darkolivegreen',display:'flex',flexWrap:'wrap',justifyContent:'space-around',padding:'5%'}}>
               {
                obj.map((data)=>{
                        return(<div id="hov" style={{padding:'1%',margin:'1% 1%'}}>
                            <img style={{borderRadius:'2%',boxShadow:'0px 0px 10px white'}} height={200} width={270} src={data.image} alt="" /> 
                            <div style={{}}>
                            <span style={{textAlign:'center',backgroundColor:'blue',color:'white',paddingLeft:'4%',paddingRight:'4%',borderRadius:'7px'}}>{data.rating}⭐</span><h4>{data.name}</h4>
                            <h4>{data.price}</h4>
                            <h4>{data.res}</h4> 
                            </div>
                            <button>Edit</button>
                            <button style={{marginLeft:'68%',padding:'0% 2%'}} onClick={()=>{removeDish(data.id,data.name)}}>Delete</button>
                            {/* <DeleteForeverIcon/> */}
                        </div>);
                })
               }
    </div> );
}
 
export default AdminViewProduct; // we can use all the properties in grid which we use for flex but grid is slight diffrent
// flex wrap : wrap see the magic study it
//goto mui icons website install library and paste the import then use the tag