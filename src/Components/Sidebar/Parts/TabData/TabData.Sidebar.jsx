import {
  HomeTwoTone,
  FaceTwoTone,
  CoffeeTwoTone
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`
  };
};

export const TabData = () => {
  const tabs = [
    {
      label: "خانه",

      icon: <HomeTwoTone />,
      ...tabProps(0)
    },
    {
      label: "درباره من",

      icon: <FaceTwoTone />,
      ...tabProps(1)
    },
   
    {
      label: "ارتباط با من",

      icon: <CoffeeTwoTone />,
      ...tabProps(2)
    }
  ];
  return tabs;
};
