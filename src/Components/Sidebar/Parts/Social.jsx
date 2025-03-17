import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import { Box, Button, Slide } from "@mui/material";
import { useEffect, useState } from "react";

const Social = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  const socialInfo = [
    {
      name: "github",
      icon: <GitHub />,
      address: "https://github.com/AlirexaN"
    },
    {
      name: "linkedin",
      icon: <LinkedIn />,
      address:
        "https://www.linkedin.com/in/alirexa-n-232800339"
    },
    {
      name: "telegram",
      icon: <Telegram />,
      address: "https://t.me/AlirexaN"
    }
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 4 }}>
      {socialInfo.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? "2s" : 0
          }}>
          <Button aria-label={item.name}>
            <a
              href={item.address}
              style={{
                color: "#229799"
              }}
              target="_blank"
              rel="noreferrer noopener">
              {item.icon}
            </a>
          </Button>
        </Slide>
      ))}
    </Box>
  );
};

export default Social;
