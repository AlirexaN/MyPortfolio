import { cyan, orange, purple } from "@mui/material/colors";
import { HtmlPic, JsPic, ReactPic } from "../../../../../../Assets/Doc";

import {
  CssIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  ReactIcon
} from "../../../../../../Assets/icons";
const SkillSchema = {
  html: {
    name: "Html5",
    color: orange[700],
    icon: HtmlIcon
  },
  css: {
    name: "Css3",
    color: "#2196f3",
    icon: CssIcon
  },
  js: {
    name: "JS",
    color: purple[600],
    icon: JsIcon
  },
  react: {
    name: "React",
    color: cyan[500],
    icon: ReactIcon,
    value: 50
  },

  git: {
    name: "Git",
    color: "#f50057",
    icon: GitIcon
  }
};
export const myEducationInfo = [
  {
    pic: HtmlPic,
    Title: "Html & Css",
    year: "1401",
    color: "#fff",
    background:
      "linear-gradient(45deg, rgb(138, 35, 135), rgb(233, 64, 87), rgb(242, 113, 33))",
    icon: HtmlIcon
  },
  {
    pic: JsPic,
    Title: "JavaScript",
    year: "1402",
    color: "#fff",
    background: "linear-gradient(-45deg,orange,orangered)",
    icon: JsIcon
  },
  {
    pic: ReactPic,
    Title: "ReactJS",
    year: "1403",
    color: " #fff",
    background: "linear-gradient(45deg,#0080bf,#55d0ff)",
    icon: ReactIcon
  }
];
export default SkillSchema;
