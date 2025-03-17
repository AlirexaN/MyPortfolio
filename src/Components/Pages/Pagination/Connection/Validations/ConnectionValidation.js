import * as Yup from "yup";

export const ConnectionValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("اسمتو ننوشتی که 😐"),
  email: Yup.string().required("ایمیلتو هم ننوشتی که 😑"),
  subject: Yup.string().required("عنوانت رو هم بنویس"),
  textBox: Yup.string().required("پیام خالی میفرستی برام؟ عجبا"),
  recaptcha: Yup.string().required("تیک این گزینه رو هم بزن"),
});
