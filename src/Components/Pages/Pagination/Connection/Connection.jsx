import ConnectionForm from "./ConnectionForm";
import Grid from "@mui/material/Grid2";
import bg04 from "../../../../Assets/background/Email.png";
import { Box, Card, CardMedia, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Connection = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Box
        sx={{
          background: "linear-gradient(-45deg, #0beef9 , #48a9fe)",
          height: "120%"
        }}>
        <Box>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : 0
            }}>
            <Typography
              textAlign="center"
              sx={{
                fontSize: "1.5rem",
                fontFamily: "gohar",
                letterSpacing: "1px",
                position: "relative",
                top: "20px",
                color: "#fff"
              }}>
              سلام رفیق !
            </Typography>
          </Slide>
        </Box>
        <Box sx={{ mt: 5, p: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "1000ms" : 0
            }}>
            <Card>
              <Grid container spacing={2}>
                <ConnectionForm />
                <Grid size={{ xs: 0, md: 6 }}>
                  <CardMedia
                    component="img"
                    src={bg04}
                    sx={{ height: "100%", objectFit: "cover" }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Slide>
        </Box>
      </Box>
    </>
  );
};

export default Connection;
