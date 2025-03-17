import Grid from "@mui/material/Grid2";

const PageContainer = ({ children }) => {
  return <Grid size={{ sm: 12, xs: 12, md: 9, lg: 9, xl: 9 }}>{children}</Grid>;
};

export default PageContainer;
