import Grid from "@mui/material/Grid2";

const SidebarContainer = ({ children }) => {
  return (
    <Grid
      size={{
        xs: 0,
        sm: 0,
        md: 3,
        lg: 3,
        xl: 3
      }}
      sx={{ overflow: "hidden" }}
      >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
