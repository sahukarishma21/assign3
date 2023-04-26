import logo from './logo.svg';
import ProductCard from './ProductCard/ProductCard';


function App() {
  const productDetails= [
 {
  productId : '1',
  productPic : 'https://media.gettyimages.com/id/171224469/photo/canvas-shoes.jpg?s=1024x1024&w=gi&k=20&c=hjZQ1ubN9n36yhfqAUy5NPC74CDTPJmCdTApzJf34gw=',
  productName : 'shoes',
  Brand : 'Canvas',
  productDescription:'nice shoes' ,
  Price : '₹7,255',
  Rating: '4.8'
},


{
  productId : '2',
  productPic : 'https://media.istockphoto.com/id/579738160/vector/old-style-sport-sneakers-shoes-hanging.jpg?s=1024x1024&w=is&k=20&c=K0FfF4SNOx2TB5YiTl6dTiK1rtPuTmgExSA5vxtLvpQ=',
  productName : 'shoes',
  Brand : 'sneakers',
  productDescription:'Old style sport sneakers shoes hanging stock illustration',
  Price : '₹5,255',
  Rating: '4.4'
},
  {
  productId : '3',
  productPic : 'https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/k/g/k/-original-imaghqqutzzeszhm.jpeg?q=70',
  productName : 'watch',
  Brand : 'Noise',
  productDescription:'Noise ColorFit Caliber Go with 1.69 inch HD Display' ,
  Price : '₹2,999',
  Rating: '4.5'
},
 {
  productId : '4',
  productPic : 'https://rukminim1.flixcart.com/image/312/312/xif0q/computer/y/u/w/15iah7-gaming-laptop-lenovo-original-imagkwgynhhrynkc.jpeg?q=70',
  productName : 'Laptop',
  Brand : 'Lenovo',
  productDescription:'Lenovo IdeaPad Gaming 3 Intel Core i5' ,
  Price : '₹38,990',
  Rating: '5'
},
{
  productId : '5',
  productPic : 'https://rukminim1.flixcart.com/image/832/832/xif0q/jean/i/q/r/-original-imaghgxzjkc5pfx3.jpeg?q=70',
  productName : 'Jense',
  Brand : 'KILLER',
  productDescription:'Men Slim Fit Dark Blue Jeans' ,
  Price : '₹5,000',
  Rating: '4.6'
}
  
]


return (
 <>
   
{
  productDetails.map((data)=>
  <div className='Css'>
  <img style={{width2:'200px',height:'100px'}} src={data.productPic}/>
  <div>{data.productId}</div>
  <h3>{data.productName}</h3>  
  <h4>{data.Brand}</h4>
  <h4>{data.Price}</h4>
  <p>{data.productDescription}</p>
  <h3>{data.Rating}</h3>
  <button style={{backgroundColor:'rgb(25, 186, 30)',width:'200px',height:'60px'}}>ADD TO CART</button>
  </div>
  )
  },

</>
);
}

export default App;

