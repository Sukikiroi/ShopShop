import React from "react";
import { makeStyles } from "@mui/styles";

const ProductPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rootleft}>
        <div className={classes.rootproductvion}></div>
        <div className={classes.rootproductinfo}></div>
      </div>
      <div className={classes.rootright}></div>
    </div>
  );
};

export default ProductPage;







const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "600px",

    display: "flex",
  },
  rootleft: {
    width: "70%",
    height: "100%",
    backgroundColor: "yellowgreen",
    display: "flex",
  },

  rootright: {
    width: "30%",
    height: "100%",
    backgroundColor: "pink",
  },
  rootproductvion: {},
  rootproductinfo: {},
});
