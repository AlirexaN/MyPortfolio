import { Box } from "@mui/material";

const Page = ({ children, index, page_number, ...others }) => {
  return (
    <div
      role="tabpanel"
      hidden={page_number !== index}
      id={`sidebar-tab-${index}`}
      aria-labelledby={`page-${index}`}
      {...others}>
      {page_number === index && (
        <Box sx={{ height: "100dvh", overflowY: "scroll" }}>{children}</Box>
      )}
    </div>
  );
};

export default Page;
