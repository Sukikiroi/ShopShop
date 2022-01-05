import React from "react";
import { makeStyles } from "@mui/styles";

const CategoryItem = ({ ImageCatgory, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imagecontainer}>
        <img src={ImageCatgory} />
      </div>
    </div>
  );
};

export default CategoryItem;

const useStyles = makeStyles({
  root: {
    width: "200px",
    height: "200px",

    display: "block",
  },
  imagecontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
    '& img':{
        width:'100%',
        height:'100%'
    }
  },
  titlecontainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "red",
  },
});
