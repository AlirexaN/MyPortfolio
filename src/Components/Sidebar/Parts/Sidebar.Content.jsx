import { Box, Divider, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { SidebarFooter, SidebarHeader, SidebarTabs } from "../Router";

const SidebarContent = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Box>
        <SidebarHeader />
        <Slide
          direction="down"
          in={loading}
          style={{
            transitionDelay: loading ? ".7s" : 0
          }}>
          <Divider
            sx={{
              backgroundColor: "#229799",
              width: "80%",
              margin: "0 auto",
              mb: 1,
              mt: 1,
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none"
              }
            }}
          />
        </Slide>
        <SidebarTabs />
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? "1.5s" : 0
          }}>
          <Divider
            sx={{
              backgroundColor: "#229799",
              width: "80%",
              margin: "0 auto",
              mb: 1,
              mt: 1
            }}
          />
        </Slide>
        <SidebarFooter />
      </Box>
    </>
  );
};

export default SidebarContent;
