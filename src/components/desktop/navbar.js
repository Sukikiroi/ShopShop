import React from 'react'

//packages
import { makeStyles } from '@mui/styles';

// redux Toolkit
import { useSelector } from "react-redux";

//Material ui packages
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


//Components
import CartDrawer from './cartDrawer'


const Navbar = () => {
  const classes = useStyles();
 



  return (
    <div className={classes.root}>
    

      <CartDrawer/>
    </div>
  );
};

export default Navbar;



















const useStyles = makeStyles({
  root: {
    background: "yellow",
    color: "white",
    height: 65,
    width:'100%',
    padding: "0 30px",
    display:'flex',
    justifyContent:'center'
  },
});