import { Box, Breadcrumbs, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const Footer = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      mt={"2rem"}
      component={"footer"}
      paddingX={"2rem"}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <p>
          Learn more about Tom and Jerry Fun House<sup>®</sup>
        </p>
        <Link
          underline="hover"
          color="text.primary"
          href="https://tomandjerry.fandom.com/"
        >
          tomandjerry.fandom.com
        </Link>
        <p>Copyright© {new Date().getFullYear()}, All Rights Reserved.</p>
      </Breadcrumbs>
    </Box>
  );
};

export default Footer;
