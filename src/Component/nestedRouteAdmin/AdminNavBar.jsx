import { Link } from "react-router-dom";
const AdminNavBar = () => {
    return ( <div className="navbar">
        <h1>Food<span style={{color:'red',fontFamily:'revert-layer'}}>Cart</span></h1>
        <div className="options">
        <Link to ='/adminhome/adminaddproduct'>add Products</Link>
        <Link to ='/adminhome/adminviewproduct'>view Products</Link>
        <Link to ='/'>Logout</Link>
       </div>
    </div> );
}
 
export default AdminNavBar;