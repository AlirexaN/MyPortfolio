import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { myEducationInfo } from "./Skill/SkillsSchema/SkillsSchema.js";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box
} from "@mui/material";
const DocSliderContainer = () => {
  const options = {
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true
  };
  return (
    <Box>
      <Slider {...options}>
        {myEducationInfo.map((item, index) => (
          <Box component="div" key={index}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Card
                sx={{
                  background: `${item.background}`,
                  direction: "ltr"
                }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.pic}
                    alt={item.Title}
                    sx={{ maxHeight: "500px", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color={item.color}
                      sx={{
                        fontFamily: "rockinsoda",
                        letterSpacing: "1px",
                        direction: "rtl",
                        m: 2
                      }}>
                      {item.Title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default DocSliderContainer;
