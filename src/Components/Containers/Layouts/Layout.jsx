import Grid from "@mui/material/Grid2";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import { Theme } from "../../../Templates/Theme";

const cacheRTL = createCache({
  key: "muirtl",
  prepend: true,
  stylisPlugins: [prefixer, rtlPlugin]
});

const Layout = ({ children }) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>
          <Helmet>
            <title>React Portfolio</title>
          </Helmet>
          <Grid container sx={{ height: "100dvh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default Layout;
