import UserNavbar from "./nestedRouteUser/UserNavbar";
import { Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const UserHomePage = () => {
    let [data,setData] = useState([])

        useEffect(()=>{
            axios.get('http://localhost:1000/Products')
            .then((res)=>{setData(res.data)})
            .catch((err)=>{console.log(err)})
        },[])

    return ( <div style={{}}>
        <UserNavbar/>
        <div style={{display:'flex',flexWrap:'wrap',paddingLeft:'10%',margin:'5 %'}} >
        {
          data.map((product)=>{
            return(<div id="hov" style={{padding:'2%'}} >
                <img style={{boxShadow:'0px 0px 10px yellow'}} height={200} width={280} src={product.image} alt="" />
                <span style={{textAlign:'center',backgroundColor:'blue',color:'white',paddingLeft:'4%',paddingRight:'4%',borderRadius:'7px'}}>{product.rating}⭐</span><h4>{data.name}</h4>
                <div>
                <h3 className="desc">Item : {product.name}</h3>
                <h3 className="desc">Price : {product.price}</h3>
                <h3 className="desc">Restaurant : {product.res}</h3>
                <div style={{display:'flex'}}>
                <Link id="lnk" to={'/cart'}>add to cart</Link> &nbsp;&nbsp;&nbsp;&nbsp;  
                <Link id="lnk" to={'/cart'}>buy now</Link>
                </div>
                </div>
                <br/>
                </div>);
          })
        }
        </div>
        <div style={{height:'200px',width:'1518px',backgroundColor:'darkgreen'}}></div>
    </div> );
}
 
export default UserHomePage; // A.I fireflink