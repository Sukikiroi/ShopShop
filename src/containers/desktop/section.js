import React from "react";
import { makeStyles } from "@mui/styles";
import ProductCard from "./productCard";

// redux Toolkit
import { useSelector } from "react-redux";
// Material Ui packages
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


let products = 
 [ {
    id: 1,
    name: "serwal",
    imagesrc:
      "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16387/goods_img-v1/879a2fc64a1b.jpg",
  },
  {
    id: 2,
    name: "serwal",
    imagesrc:
      "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16388/goods_img-v2/d09224ebc597.jpg",
  },
  {
    id: 3,
    name: "serwal",
    imagesrc:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/f67c07d453c0.jpg",
  },
  {
    id: 4,
    name: "serwal",
    imagesrc:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16387/goods_img-v2/02b29f473117.jpg",
  },
  {
    id: 5,
    name: "serwal",
    imagesrc:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/09/goods_img-v2/20191209182106_42821.jpg",
  }]

const Section = () => {
  const classes = useStyles();


  const cart = useSelector((state) => state.cartstore.shopingcart);
 console.log(cart)
  return (
      <>
    
      <Badge badgeContent=  {cart.length} color="success">
        <ShoppingCartIcon color="action" />
      </Badge>
    <div className={classes.root}>
  
  {products.map((product) => (
      
      <ProductCard key={product.id} product={product}/>
     
    
  ))}
    </div>
    </>
  );
};

export default Section;




const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: " ",
    padding: "0px 30px 0px 30px",
  },
});
