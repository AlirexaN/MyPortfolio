import MainContext from "../../Context";
import { SwipeableDrawer } from "@mui/material";
import { useContext } from "react";
import { SidebarContent } from "../Router";

const CustomSwipeableDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <SwipeableDrawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      onOpen={() => setDrawerOpen(true)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none"
        }
      }}>
      <SidebarContent />
    </SwipeableDrawer>
  );
};

export default CustomSwipeableDrawer;
