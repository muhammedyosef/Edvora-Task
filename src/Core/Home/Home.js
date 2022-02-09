import React, { useEffect, useState } from 'react';
import axiosInstance from '../../AxiosConfigure';


export default function Home() {
    const [products,setProducts]=useState([]);
    const [products1,setProducts1]=useState([]);
    const [products2,setProducts2]=useState([]);
    const [products3,setProducts3]=useState([]);
    const [products4,setProducts4]=useState([]);
    const [products5,setProducts5]=useState([]);
    const [select,setSelect]=useState();
  var arries=[];
  var arries1=[];
  var arries2=[];
  var arries3=[];
const [currentPage,setCurrent]=useState(0);
const [currentPage1,setCurrent1]=useState(0);
var numberOfItemsPerPage=3;
const [noOfPagesArray,setArr]=useState([]);
const [noOfPagesArray1,setArr1]=useState([]);
 



 const onPagination=(i)=>{
   
    if(i>-1&&i<noOfPagesArray.length){
      setCurrent(i);
    }
    
  };
  const onPagination1=(i)=>{
   
    if(i>-1&&i<noOfPagesArray1.length){
      setCurrent1(i);
    }
    
  };
    useEffect(()=>{
axiosInstance
.then((res)=>{

 
    setProducts(res.data);
    const uniqueValues = new Set(res.data.map(v => v.brand_name));
    const uniqueValues1 = new Set(res.data.map(v1 => v1.address.state));
    const uniqueValues2 = new Set(res.data.map(v2 => v2.address.city));

    if (uniqueValues.size < res.data.length) {
      const arr=[...uniqueValues];
      setProducts1(arr);
      res.data.map((v)=>{
        if(v.brand_name===arr[0]){
         arries.push(v)
        }
        if(v.brand_name===arr[1]){
          arries2.push(v)
         }
      })
         const ar=arries.slice(currentPage*numberOfItemsPerPage,currentPage*numberOfItemsPerPage+numberOfItemsPerPage);
      setProducts4(ar);
      const ar1=arries2.slice(currentPage1*numberOfItemsPerPage,currentPage1*numberOfItemsPerPage+numberOfItemsPerPage);
      setProducts5(ar1);

      const numberOfPages = Math.ceil(
        arries.length / numberOfItemsPerPage
      );
    
      for (let index = 0; index < numberOfPages; index++) {
        arries1.push(index + 1);
      }

      const numberOfPages1 = Math.ceil(
        arries2.length / numberOfItemsPerPage
      );
    
      for (let index = 0; index < numberOfPages1; index++) {
        arries3.push(index + 1);
      }
     setArr1(arries3);
      setArr(arries1);    

    }
    if (uniqueValues1.size < res.data.length) {
      const arr=[...uniqueValues1];
      setProducts2(arr);
      
    }
    if (uniqueValues2.size < res.data.length) {
      const arr=[...uniqueValues2];
      setProducts3(arr);
    }


})


.catch((err)=>{console.log(err);})


    },[select,currentPage,currentPage1])
  return (
  <>
  {/* <Homeee/> */}
 <div className='container-fluid text-white bg-secondary'>
     <div className='row'>
         <div className='col-4 mt-5'>
         <div className="card text-white bg-dark mb-3 rounded" style={{maxwidth: "5rem;"}}>
  <h4 className="card-header">Filters</h4>
  {/* <hr /> */}
  <hr style={{height:5}} />
  <div className="card-body">
    
  <select className="form-select my-3 bg-secondary text-white " aria-label="Default select example" onChange={e=>{setSelect(e.target.value)}}>
  <option selected>Products</option>
  {products1.map((prod)=>{
    return(
  <option value={prod}>{prod}</option>

    )
  })}
  
</select>
<select className="form-select my-3 bg-secondary text-white" aria-label="Default select example" onChange={e=>{setSelect(e.target.value)}}>
  <option selected>State</option>
  {products2.map((prod)=>{
    return(
  <option value={prod}>{prod}</option>

    )
  })}
  
</select>
<select className="form-select my-3 bg-secondary text-white" aria-label="Default select example" onChange={e=>{setSelect(e.target.value)}}>
  <option selected>City</option>
  {products3.map((prod)=>{
    return(
  <option value={prod}>{prod}</option>

    )
  })}
  
</select>
  </div>
</div>
         </div>
         <div className='col-8 mt-5'>
         {/* <div className="card" style={{width:"18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
<h1 className='d-flex justify-content-start'>Edvora</h1>
<h3 className='d-flex justify-content-start mt-3'>Products</h3>
<br/>

{/* <hr style={{height:5}} /> */}

<div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 g-4" >
<br/>
        {products.map((product) => {
            if(product.brand_name===select||product.address.state===select||product.address.city===select)
          return (
            <div className='container '>

            <div className="card col text-white bg-dark" style={{width:150}} key={product.id}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.product_name}</h5>
              <h6 className='muted'>{product.brand_name}</h6>
              <p className="card-text">{product.discription}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
           </div> 
           
          );
        })}
        
        
      </div>
<h2 className='d-flex justify-content-start'>{products1[0]}</h2>
  <hr style={{height:5}} />
      
      <div className="row row-cols-1 row-cols-md-3 g-4" >
<br/>
        {products4.map((product) => {
            // if(product.brand_name===products1[0])
          return (
            <div className='container '>

            <div className="card col text-white bg-dark" style={{width:150}} key={product.id}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.product_name}</h5>
              <h6 className='muted'>{product.brand_name}</h6>
              <p className="card-text">{product.discription}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
           </div> 
           
          );
        })}
    
    <div className=" gap-2 d--flex justify-content-end">
  <button className="btn btn-primary me-2" type="button" onClick={()=>onPagination(currentPage-1)}>Previous</button>
  <button className="btn btn-primary  me-2" type="button" onClick={()=>onPagination(currentPage+1)}>Next</button>
</div>
        
      </div>
<h2 className='d-flex justify-content-start mt-5'>{products1[1]}</h2>

      
      <hr style={{height:5}} />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" >
<br/>
        {products5.map((product) => {
            // if(product.brand_name===products1[1])
          return (
            <div className='container '>

            <div className="card col text-white bg-dark" style={{width:150}} key={product.id}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body bg-secondary">
              <h5 className="card-title ">{product.product_name}</h5>
              <h6 className='muted'>{product.brand_name}</h6>
              <p className="card-text">{product.discription}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
           </div> 
           
          );
        })}
      <div className=" gap-2 d--flex justify-content-end mb-3">
  <button className="btn btn-primary me-2" type="button" onClick={()=>onPagination1(currentPage1-1)}>Previous</button>
  <button className="btn btn-primary  me-2" type="button" onClick={()=>onPagination1(currentPage1+1)}>Next</button>
</div>
       
      </div>
         </div>
     </div>
 </div>

  </>);
}
