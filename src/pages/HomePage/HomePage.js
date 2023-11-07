import React from 'react'
import Header from '../../Component/Header/Header'
import SlideShow from '../../Component/SlideShow/SlideShow'
import Footer from '../../Component/Footer/Footer'
import LatestProduct from '../../Component/LatestProduct/LatestProduct'
import Category from '../../Component/Category/Category'
import Menu from '../../Component/Menu/Menu'
import { useState,useEffect } from 'react'
import Content from '../../Component/Content/Content'
import TestUntil from '../../Component/TestUntil/TestUntil'



function HomePage({category,setCategory, latestProduct, product, setProduct,loginData,setLoginData }) {
  const [categoryTableTree, setCategoryTableTree] = useState([]);



  useEffect(() => {
    // Fetch API Cây trong nhà 
    fetch("http://localhost:8080/api/v1/products/findCategory/11")
      .then((response) => response.json())
      .then((data) => setCategoryTableTree(data));

     


  }, []);

    return (
      <div >
        <Header product={product} loginData={loginData} category={category} setLoginData={setLoginData}/>
        <SlideShow />
        <Category category={category} setCategory={setCategory} /> 
        <LatestProduct latestProduct={latestProduct} setProduct={setProduct} />
        <Menu categoryTableTree={categoryTableTree} 
        setCategoryTableTree={setCategoryTableTree} 
        product={product} setProduct={setProduct}/>
        <Content /> 
        <TestUntil/>
        
      </div>
    );
  }

export default HomePage