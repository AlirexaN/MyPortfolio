import MainContext from "../../Context";
import { Slide, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TabData } from "./TabData/TabData.Sidebar";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
  const tabs = TabData();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [isMdUp, setDrawerOpen]);
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollbutton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      sx={{
        "& .MuiTabs-indicator": {
          background: "#22979960",
          width: "80%",
          mr: 4.5,
          borderRadius: 2,
          transition: "all .5s ease-out "
        }
      }}>
      {tabs.map((tab, index) => (
        <Slide
          direction="down"
          in={loading}
          key={index}
          style={{
            transitionDelay: loading ? "1s" : 0
          }}>
          <Tab
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            sx={{
              fontSize: "1.01rem",
              mx: 3.5,
              width: "80%",
              "&.MuiTab-root": {
                color: "#229799",
                borderRadius: 2,
                my: 0.5,
                minHeight: 60
              }
            }}
            onClick={() => setDrawerOpen(false)}
            {...tab}
          />
        </Slide>
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
