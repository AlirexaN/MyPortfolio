import myAvatar from "../../../Assets/Avatar/IMG_8841.JPG";
import { Avatar, Box, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";

const SidebarHeader = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Slide
      direction="down"
      in={loading}
      style={{
        transitionDelay: loading ? ".5s" : 0
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <Avatar
          src={myAvatar}
          sx={{
            height: 150,
            width: 250,
            margin: "0 auto",
            my: 2,
            border: "4px solid #22979960",
            borderRadius: 2,
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none"
            }
          }}>
          Alirexa
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            my: 2,
            fontFamily: "rockinsoda",
            letterSpacing: "1px",
            color:"#0D7C66"
          }}>
          <RandomReveal
            isPlaying
            duration={4}
            characters="My Official Portfolio"
          />
        </Typography>
      </Box>
    </Slide>
  );
};

export default SidebarHeader;
