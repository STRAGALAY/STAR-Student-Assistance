import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// interface DrawerItem {
//   text: string;
//   icon: Elements.MUIIcon;
//   onClick: () => void;
// }

export default function TemporaryDrawer({ drawerItems, ...rest }) {
  const [anchorOpen, setAnchorOpen] = useState(false);

  const toggleDrawer = () => {
    setAnchorOpen((prevStatus) => !prevStatus);
  };

  return (
    <div>
      <Button variant="contained" className="menu-btn" onClick={toggleDrawer}>
        <MenuIcon />
      </Button>

      <Drawer
        anchor={"left"}
        open={anchorOpen}
        onClose={toggleDrawer}
        onMouseLeave={toggleDrawer}
      >
        <List style={{ width: "20vw" }}>
          {drawerItems.map(
            // rename the component to react node and take the rest of the props separately
            ({ icon: DrawerItemIcon, ...drawerItem }) => (
              <ListItem
                key={drawerItem.text}
                button
                onClick={drawerItem.onClick}
              >
                <ListItemIcon>
                  <DrawerItemIcon />
                </ListItemIcon>
                <ListItemText primary={drawerItem.text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
