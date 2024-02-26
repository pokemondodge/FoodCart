// import 'bootstrap/dist/css/bootstrap.min.css'; //inbuilt bootstrap react library
//import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useState } from "react";
import axios from "axios";
import '../nestedRouteAdmin/Nestedstyle/AddProduct.css'
const AdminAddProduct = () => {

  let [name,setName] = useState('') // item
  let [price,setPrice] = useState('')
  let [res,setRes] = useState('')
  let [quant,setQuant] = useState('')
  let [image,setImage] = useState('')
  let [category,setCategory] = useState('')
  let [rating,setRating] = useState('')
  let obj = {name,price,res,quant,image,category,rating}
   
  
  function addData(e)
  {
    e.preventDefault();
    if(name!=undefined & price !=undefined & res!=undefined & quant!=undefined & image != undefined & category!=undefined )
    {     
      axios.post('http://localhost:1000/Products',obj)
      .then((response)=>{alert(`addition successful`);document.querySelector('.frm1').reset()})
      .catch((err)=>{alert(`${err}`)})
    }
    else
    {
      alert(`all fields are mandatory except rating please check`)
      return
    }
  }

    return ( <div className="supreme" style={{backgroundImage:'url(admadd.gif)',backgroundSize:'100% 100%'}}>
       <div className="product">
      <form class="frm1" action="submit" method="post" onSubmit={''}>
        Item : <br /> <input required value={name} onChange={(ele)=>{setName(ele.target.value)}} type="text" /> <br />
        Price : <br /> <input required value={price} onChange={(ele)=>{setPrice(ele.target.value)}} type="text" pattern="[0-9]{4}/.[0-9]" /><br />
        Restaurant : <br /> <input required value={res} onChange={(ele)=>{setRes(ele.target.value)}} type="text" /><br />
        Rating : <br /> <input required value={rating} onChange={(ele)=>{setRating(ele.target.value)}} type="text" placeholder="decided by customer input not by admin"/><br />
        <label htmlFor="">Quantity(in stock) : <input required value={quant} onChange={(ele)=>{setQuant(ele.target.value)}} type="number" /> </label><br />
        product image : <br /> <input required value={image} onChange={(ele)=>{setImage(ele.target.value)}} type="text" placeholder="Enter url of image" /><br />  
        Category :  <select required value={'veg'} onChange={(ele)=>{setCategory(ele.target.value);console.log(ele.target.value)}}>
        <option value="veg">veg</option>
        <option value="Non-veg">Non-veg</option>
        <option value="Dessert">Dessert</option>
        <option value="Beverage">Beverage</option>
      </select><br />
      <button onClick={addData} type="submit">Add Dish</button>
      </form>
    </div> 
    </div> );
}
 
export default AdminAddProduct;

{/* <Carousel fade>
        <Carousel.Item>  what is relation btwn form method action and button type
          <ExampleCarouselImage text="First slide" /> // add feature of customize food quantity and something in user page same as zomato dynamic page that appears while buyiing or adding to cart otherwisse hidden 
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <h1>add product</h1>

      </Carousel> */}