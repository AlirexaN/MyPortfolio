import HomePageBg from "../../../../Assets/background/HomePageWP.jpg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import TextTransition, { presets } from "react-text-transition";
import Typed from "typed.js";
import { Box, Typography } from "@mui/material";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Snowing } from "../../../../Templates/Constants/Particles";

const HomePage = ({ helmetTitle }) => {
  const nameTitle = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  const strings = [
    "من برنامه نویس هستم",
    "من توسعه دهنده فرانت اند هستم",
    "من دیزاینر UI/UX هستم"
  ];
  useEffect(() => {
    const typedName = new Typed(nameTitle.current, {
      strings: [" اسم من هست علیرضا "],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false
    });
    const textAnimation = setInterval(
      () => setTextIndex((textIndex) => textIndex + 1),
      2500
    );
    return () => {
      typedName.destroy();
      clearInterval(textAnimation);
    };
  }, []);
  const intialParticles = initParticlesEngine(async (Engine) => {
    await loadSlim(Engine);
  }, []);
  const loadParticles = (Container) => {
    return Container;
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${HomePageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={intialParticles}
        particlesLoaded={loadParticles}
        options={Snowing}
      />
      <Box sx={{ display: "flex" }}>
        <Typography variant="h4" sx={{ color: "#fff", mr: 1 }}>
          {"{{"}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            mb: 3,
            textAlign: "center",
            fontFamily: "Gohar"
          }}
          ref={nameTitle}
        />

        <Typography variant="h4" sx={{ color: "#fff", ml: 1 }}>
          {"}}"}
        </Typography>
      </Box>
      <TextTransition
        springConfig={presets.wobbly}
        style={{
          color: "#fff",
          display: "block",
          mt: 3,
          textAlign: "center",
          fontFamily: "Gohar",
          fontSize: "1.2rem"
        }}>
        {strings[textIndex % strings.length]}
      </TextTransition>
    </Box>
  );
};

export default HomePage;
