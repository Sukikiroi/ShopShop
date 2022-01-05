import React from "react";
import { makeStyles } from "@mui/styles";

//Components
import CategoryItems from "./categoryItem";

const CategorySection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titldiv}>
        <h2>At home ?</h2>
      </div>
      <div className={classes.categorydiv}>
        <CategoryItems  ImageCatgory={"https://k.nooncdn.com/cms/pages/20210718/899c5cc839b0b14f97799862ebe29e3b/en_athome-03.png"}/>
        <CategoryItems  ImageCatgory={"https://k.nooncdn.com/cms/pages/20210718/899c5cc839b0b14f97799862ebe29e3b/en_athome-04.png"}/>
        <CategoryItems  ImageCatgory={"https://k.nooncdn.com/cms/pages/20210718/899c5cc839b0b14f97799862ebe29e3b/en_athome-02.png"}/>
        <CategoryItems  ImageCatgory={"https://k.nooncdn.com/cms/pages/20210718/899c5cc839b0b14f97799862ebe29e3b/en_athome-01.png"}/>
        <CategoryItems  ImageCatgory={"hhttps://k.nooncdn.com/cms/pages/20210718/899c5cc839b0b14f97799862ebe29e3b/en_athome-05.png"}/>
        <CategoryItems  ImageCatgory={"https://k.nooncdn.com/cms/pages/20210718/899c5cc839b0b14f97799862ebe29e3b/en_athome-03.png"}/>
        
        
      </div>
    </div>
  );
};

export default CategorySection;

const useStyles = makeStyles({
  root: {
    height: "300px",
    width: "100%",

    display: "block",
  },

  titldiv: {
    backgroundColor: "SteelBlue",
    height: "20%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& h2':{
        color:'white'
    }
  },
  categorydiv: {
    backgroundColor: "white",
    height: "80%",
    width: "100%",
    display: "flex",
    justifyContent:'space-between',
    alignItems:'center'
  },
});
