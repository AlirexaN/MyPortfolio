import { Box, Chip, Divider, LinearProgress, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Skill = ({ value, color, name, icon }) => {
  return (
    <>
      <Box>
        <Divider
          textAlign="left"
          sx={{
            my: 5,
            "&::before, &::after": { border: `1px solid ${color}` }
          }}>
          <Chip
            label={
              <Typography
                variant="body1"
                sx={{
                  position: "relative",
                  top: "1px",
                  fontFamily: "rockinsoda",
                  letterSpacing: "1px",
                  fontSize: "1.1rem"
                }}>
                {name}
              </Typography>
            }
            icon={<Box src={icon} component="img" sx={{ width: "25px" }} />}
            sx={{ background: `${color}`, color: "#fff", p: 3 }}
          />
        </Divider>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "90%" }}>
            {" "}
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                height: 10,
                borderRadius: "10px",
                my: 1,
                backgroundColor: grey[400]
              }}
            />
          </Box>
          <Box
            sx={{
              ml: 1.5
            }}>
            <Typography
              sx={{
                mb: 1,
                color: `${color}`,
                fontFamily: "rockinsoda",
                letterSpacing: "1px",
                fontSize: "1.1rem"
              }}>
              {value}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skill;
