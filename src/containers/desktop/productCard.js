import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';


//Packages
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';

// redux Toolkit
import { useSelector, useDispatch } from 'react-redux'


// Redux Actions
import { addtocart, addmoreitem } from '../../slices/cart'









const ProductCard = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
const [isincart, setisincart] = useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.rootimage}>
        <img src={product.imagesrc} />
      </div>
      <div className={classes.rootiinfo}>
        <p>Persol 2997-S men’s sunglasses made in Italy matte silver </p>
        <p>8,64 USD</p>
        {!isincart ? (
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => {dispatch(addtocart(product));setisincart(true)}}
          >
            add to cart
          </Button>
        ) : (
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => dispatch(addmoreitem(product))}
          >
            add more
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;













const useStyles = makeStyles({
  root: {
    width: "210px",
    height: "340px",
    backgroundColor: " ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },

  rootimage: {
    width: "95%",
    height: "70%",
    backgroundColor: "white",
    '& img':{
        width:'100%',
        height:'100%'
    }
    
  },
  rootiinfo:{
    width: "95%",
    height: "30%",
    alignItems:'center',
    backgroundColor: " white",
    '& p':{
        textAlign:'center'
    }
  }
});