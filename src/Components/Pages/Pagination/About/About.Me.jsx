import Grid from "@mui/material/Grid2";
import {
  Architecture,
  CodeOffOutlined,
  ContentPasteOutlined
} from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";
import { CustomDivider, DevInfo, DocSliderContainer, Skills } from "./Router";

const AboutMe = ({ helmetTitle }) => {
  return (
    <Box>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Card
        sx={{
          hieght: "150dvh",
          overflowY: "scroll",
          borderLeft: `1px solid ${grey[400]}`
        }}>
        <Grid container sx={{ mx: 3 }}>
          <Grid>
            <CustomDivider
              brColor="#21e6c1"
              cColor="#21e6c1"
              icon={<CodeOffOutlined color="secondary" />}
              align="center"
              text="درباره من"
            />
            <DevInfo />
            <CustomDivider
              brColor="#7c4dff"
              cColor="#7c4dff"
              align="center"
              text="مهارت های من"
              icon={<Architecture color="secondary" />}
            />
            <Skills />
            <CustomDivider
              brColor="lime"
              cColor="lime"
              align="center"
              text="مدارک من"
              icon={<ContentPasteOutlined color="secondary" />}
            />
            <DocSliderContainer />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AboutMe;
