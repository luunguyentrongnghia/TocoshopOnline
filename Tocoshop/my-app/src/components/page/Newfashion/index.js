import React, { useState,useEffect } from "react";
import "./style.css"
import Slider from "./Newfashionpage/slide/Slider"
import Images from "./Newfashionpage/Listproducts/images"
import { AiOutlineShoppingCart,  AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [images,setImages]=useState([]);//danhmuc

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
   
    axios.get("http://localhost:9000/categories3/").then((response) => {
      console.log(response.data.results);
      setImages(response.data.results);
    });


  },[])
  return (
    <div className='mainhome'>
      <Slider/>
      <div className='search_cart'>
        <div className='search'>
          <div className='search_input'>
            <input type='text' placeholder='  Search...'></input>
          </div>
          <div className='search_icon'>
              <a href='#' >
                <li><AiOutlineSearch style={{ width: 40, height: 40,color:"black" }}/></li>
              </a>
          </div>
        </div>
        <div className='cart'>
        <div className='cart_icon'>
              <a href='#' >
                <li><AiOutlineShoppingCart style={{ width: 40, height: 40 ,color:"black"}}/></li>
              </a>
          </div>
        </div>
      </div>
      <div className='listproducts'>
          <div className="listproducts_title">
          <h1>NEW ARRIVALS</h1>
          </div>
          
        <div className='listproducts_main'>
        <Images data={images}></Images> 
        </div>
      </div>
      <div className="footer">
        <h1>T O C O  C L O TH E S </h1>
        <div className="footer_body">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">Help Center</a>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_title1">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Privacy Policy</a>
          </div>
          <div className="footer_bottom_title2">
          <a href="#">© 2022 ERES</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default index