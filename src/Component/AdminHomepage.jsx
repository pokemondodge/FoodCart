import AdminNavBar from "./nestedRouteAdmin/AdminNavBar";
import { Route,Routes } from "react-router-dom";
import './nestedRouteAdmin/Nestedstyle/Adminnavbar.css'
import AdminViewProduct from "./nestedRouteAdmin/AdminViewProduct";
import AdminAddProduct from "./nestedRouteAdmin/AdminAddProduct";
const AdminHomepage = () => {
    return ( <div className="home">
        <AdminNavBar/> 
        <Routes>
            <Route path='/adminviewproduct' element={<AdminViewProduct/>}/>
            <Route path='/adminaddproduct' element={<AdminAddProduct/>}/>
        </Routes>
    </div> );
}
 
export default AdminHomepage; // nested routing is done under the homepage so routing in app.jsx adding * after adminhome will perform nested routing here without going to another pafge i.e error page





















// difference between Link , anker tag and useNavigate function
// for admin navbar we are not performing nested routing because it should contain in every page inside admin home page means any page you visit you don't need to create navbar seperately for eachpages 
// how to make jvsct web extensions of own egform autofills captcha auto fills
//how to deploy or logo prepared application carousels bootsrap utlity keywords