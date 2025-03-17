import Grid from "@mui/material/Grid2";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { ConnectionValidationSchema } from "./Validations/ConnectionValidation";

import {
  Box,
  Button,
  CardActions,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";

import {
  EmailSharp,
  Person,
  SubjectRounded,
  Telegram,
  TextFieldsTwoTone
} from "@mui/icons-material";
const ConnectionForm = () => {
  const contactInputValues = {
    fullname: "",
    email: "",
    subject: "",
    textBox: "",
    recaptcha: ""
  };
  const formik = useFormik({
    initialValues: contactInputValues,
    // no need of this
    onSubmit: (values) => {
      console.table("Form Values: ", values);
    },
    validationSchema: ConnectionValidationSchema
  });
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Box
        component="form"
        autoComplete="false"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
        <TextField
          label="اسمت چیه؟"
          color="info"
          variant="outlined"
          name="fullname"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
          fullWidth
          sx={{
            mb: 4,
            mt: 5,
            width: "80%",
            borderRadius: 10,
            color: "#229799"
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Person color="warning" />
                </InputAdornment>
              )
            }
          }}
        />
        <TextField
          label="ایمیلت چیه؟"
          color="info"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
          sx={{
            width: "80%",
            borderRadius: 10,
            mb: 4,
            textWrap: "wrap",
            color: "#229799"
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <EmailSharp color="warning" />
                </InputAdornment>
              )
            }
          }}
        />
        <TextField
          label="عنوان"
          color="info"
          variant="outlined"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          fullWidth
          sx={{
            width: "80%",
            borderRadius: 10,
            mb: 4,
            color: "#229799"
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SubjectRounded color="warning" />
                </InputAdornment>
              )
            }
          }}
        />
        <TextField
          label="هرچی میخواد دلت تنگت بهم بگو"
          color="info"
          variant="outlined"
          fullWidth
          name="textBox"
          multiline
          rows={6}
          value={formik.values.textBox}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.textBox && Boolean(formik.errors.textBox)}
          helperText={formik.touched.textBox && formik.errors.textBox}
          sx={{
            width: "80%",
            borderRadius: 10,
            mb: 4,
            textWrap: "wrap",
            color: "#229799"
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ position: "relative", bottom: "60px" }}>
                  <TextFieldsTwoTone color="warning" />
                </InputAdornment>
              )
            }
          }}
        />
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={(value) => {
              formik.setFieldValue("recaptcha", value);
            }}
            hl="fa"
          />
          {formik.errors.recaptcha && formik.touched.recaptcha && (
            <Typography variant="caption" color="error">
              {formik.errors.recaptcha}
            </Typography>
          )}
          <Button
            type="submit"
            endIcon={<Telegram />}
            variant="contained"
            sx={{
              background: "#229799",
              color: "#fff",
              width: "15rem",
              height: "60px",
              my: 2,
              p: 3
            }}>
            ارسال کن
          </Button>
        </CardActions>
      </Box>
    </Grid>
  );
};

export default ConnectionForm;
