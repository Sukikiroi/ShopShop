import React from "react";
import { makeStyles } from "@mui/styles";

const CartItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rootimage}>
        <img src="https://d-themes.com/react_asset_api/molla/uploads/product_5_1_300x300_3dbc9b1611.jpg" />
      </div>
      <div className={classes.buttons}>
          
          <button>+</button>
          16
        <button>-</button>
         
       
      </div>
    </div>
  );
};

export default CartItem;

const useStyles = makeStyles({
  root: {
    width: "40%",
    height: 48,
    border: "2px solid grey",
    padding: "0 30px",
    marginBottom: "15px",
    borderRadius: "6px",
    display: "flex",
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  rootimage: {
    height: "40px",
    width: "60px",
    "& img": {
      width: "100%",
      height: "100%",
    },
 
  },
  buttons: {
    height: "100%",
    width: "60px",
    display: "flex",
    alignItem:'center',
    justifyContent:'center',
   backgroundColor:'  ',
    
    '& button':{
        width:'25px',
        height:'25px',
        borderRadius:'50%'
    }
  },
});
