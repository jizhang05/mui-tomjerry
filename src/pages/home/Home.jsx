import { Box } from "@mui/material";
import React from "react";

const Banner = React.lazy(() => import("./Banner"));

const Home = () => {
  return (
    <Box component={"main"}>
      <Banner />
    </Box>
  );
};

export default Home;
