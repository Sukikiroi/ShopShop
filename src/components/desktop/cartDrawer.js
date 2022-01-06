import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
//Material ui packages
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// redux Toolkit
import { useSelector } from "react-redux";



//Components
import CartItem from '../desktop/cartItem'


export default function TemporaryDrawer() {
  const cart = useSelector((state) => state.cartstore.shopingcart);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={toggleDrawer(anchor, true)}
          >
            <Badge badgeContent={cart.length} color="success">
              <ShoppingCartIcon color="action" />
            </Badge>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>total:</div>
              {
                     cart.length==0 ?<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTMh2RlXvCKWVgC70q06r8sntDKl5dOKZHw&usqp=CAU' />:  
                     
                     <div
                     style={{
                       width: "90%",
                       margin: "auto",
                       backgroundColor: "white",
                       display: "flex",
                       flexDirection: "column",
                       alignItems: "center",
                     }}
                   >
     
                      
                      
                     {cart.map((cartitem) => (
                       <CartItem key={cartitem.id} />
                     ))}
                   </div>
                  }
            
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
