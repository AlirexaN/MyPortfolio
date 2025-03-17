import {
  CustomSwipeableDrawer,
  DrawerActionButton,
  SidebarContent
} from "../Sidebar/Router";

const Sidebar = () => {
  return (
    <>
      <DrawerActionButton />
      <SidebarContent />
      <CustomSwipeableDrawer />
    </>
  );
};

export default Sidebar;
