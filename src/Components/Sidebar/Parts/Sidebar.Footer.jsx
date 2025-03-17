import Social from "./Social";
import { Box, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SidebarFooter = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Box>
      <Box>
        <Social />
      </Box>
      <Slide
        direction="up"
        in={loading}
        style={{
          transitionDelay: loading ? "3s" : 0
        }}>
        <Typography
          variant="h6"
          sx={{
            color: "#0D7C66",
            textAlign: "center",
            fontFamily: "rockinsoda",
            letterSpacing: "1px"
          }}>
          Designed by{" "}
          <a
            href="mailto:alirexxan@gmail.com"
            alt="email"
            style={{
              color: "#7E60BF",
              textDecoration:"none"
            }}>
            AlirexaN
          </a>
        </Typography>
      </Slide>
    </Box>
  );
};

export default SidebarFooter;
