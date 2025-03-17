import { Chip, Divider, Typography } from "@mui/material";

const CustomDivider = ({ brColor, cColor, icon, align, text }) => {
  return (
    <>
      <Divider
        variant="middle"
        textAlign={align}
        sx={{
          "&::before, &::after": {
            border: `1px solid ${brColor}`
          },
          my: 3
        }}>
        <Chip
          label={
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "Leila",
                fontSize: "1.6rem"
              }}>
              {text}
            </Typography>
          }
          sx={{ p: 3, backgroundColor: `${cColor}` }}
          icon={icon}
        />
      </Divider>
      {/* </Slide> */}
    </>
  );
};

export default CustomDivider;
