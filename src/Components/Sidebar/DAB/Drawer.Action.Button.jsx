import MainContext from "../../Context";
import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useContext } from "react";

const DrawerActionButton = () => {
  const { setDrawerOpen, drawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none"
        },
        position: "absolute"
      }}>
      <Fab
        aria-label="Sidebar"
        size="small"
        onClick={() => setDrawerOpen(!drawerOpen)}
        sx={{ m: 2 }}>
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
