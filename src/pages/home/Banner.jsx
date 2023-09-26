import React from "react";
import { ShopContext } from "../../context/ShopContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const {
    cachedState: {
      state: { products },
    },
  } = ShopContext();

  return (
    <Box
      position="relative"
      component={"section"}
      maxWidth={"1490px"}
      margin={"auto"}
    >
      <Box
        position="absolute"
        top="20%"
        right="40vw"
        zIndex="99"
        color={"white"}
      >
        <Container maxWidth="xl">
          <Typography variant="h4" component={"h1"} fontWeight={"700"}>
            The best restaurant
          </Typography>
          <Typography variant="h3" component={"h1"} fontWeight={"500"}>
            In Town Orlando
          </Typography>
          <Typography
            variant="h1"
            fontWeight={"700"}
            color={"white"}
            letterSpacing={"4px"}
          >
            FUN!!!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/shop")}
          >
            Order Now
          </Button>
        </Container>
      </Box>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <img
            src={products[0].imageSrc}
            alt={products[0].name}
            style={{
              width: "100%",
              height: "90vh",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
        <div>
          <img
            src={products[1].imageSrc}
            alt={products[1].name}
            style={{
              width: "100%",
              height: "90vh",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
        <div>
          <img
            src={products[2].imageSrc}
            alt={products[2].name}
            style={{
              width: "100%",
              height: "90vh",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
        <div>
          <img
            src={products[10].imageSrc}
            alt={products[10].name}
            style={{
              width: "100%",
              height: "90vh",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
      </Carousel>
    </Box>
  );
};

export default Banner;
