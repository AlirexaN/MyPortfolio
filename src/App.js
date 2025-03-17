import { useState } from "react";

import {
  AboutMe,
  Connection,
  DrawerActionButton,
  Layout,
  HomePage,
  Page,
  PageContainer,
  Sidebar,
  SidebarContainer,
  MainContext
} from "./MainRouter";

const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (_, newValue) => {
    setPageNumber(newValue);
  };
  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}>
      <Layout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PageContainer>
          <Page page_number={pageNumber} index={0}>
            <HomePage helmetTitle={"Personal WebApp | HomePage"} />
          </Page>
          <Page page_number={pageNumber} index={1}>
            <AboutMe helmetTitle={"Personal WebApp | About Me"} />
          </Page>
          <Page page_number={pageNumber} index={2}>
            <Connection helmetTitle={"Personal WebApp | Connection"} />
          </Page>
        </PageContainer>
      </Layout>
    </MainContext.Provider>
  );
};

export default App;
