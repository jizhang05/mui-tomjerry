import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../context/ShopContext";

const ProductInfo = ({ params }) => {
  const {
    cachedState: {
      state: { products, cart },
    },
  } = ShopContext();
  const { dispatch } = ShopContext();
  const activeProduct = products.find((prod) => prod.id === params.id);
  const isInCart = cart.some((item) => item.id === activeProduct.id);
  const cartElem = cart.find((item) => item.id === activeProduct.id);
  const isMobile = useMediaQuery(`(max-width:600px)`);

  return (
    <Box width={{ xs: "100%", md: 465 }} pr={"4rem"}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom color={"primary"}>
            {activeProduct.name}
          </Typography>
          <Typography variant="h5" fontWeight={"500"}>
            Price: ${activeProduct.price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            flexDirection: "column",
            gap: "1rem",
            alignItems: "start",
            p: "1rem",
          }}
        >
          <ButtonGroup size="small" aria-label="increment=decrement buttons">
            {isInCart ? (
              <>
                <Button
                  size="large"
                  color={cartElem.quantity === 1 ? "error" : "primary"}
                  variant={isMobile ? "contained" : "outlined"}
                  onClick={
                    cartElem.quantity === 1
                      ? () =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: cartElem,
                          })
                      : () =>
                          dispatch({
                            type: "DECREASE_ITEM_COUNT",
                            payload: cartElem,
                          })
                  }
                >
                  {cartElem.quantity === 1 ? "X" : "-"}
                </Button>
                <Button
                  size="large"
                  disabled
                  sx={{
                    "&.Mui-disabled": {
                      color: "text.primary",
                    },
                  }}
                >
                  {cartElem.quantity}
                </Button>
              </>
            ) : null}
            <Button
              size="large"
              color={!isInCart ? "success" : "primary"}
              variant={isMobile ? "contained" : "outlined"}
              onClick={
                !isInCart
                  ? () =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: activeProduct,
                      })
                  : () =>
                      dispatch({
                        type: "INCREASE_ITEM_COUNT",
                        payload: cartElem,
                      })
              }
            >
              + {!isInCart && "add order"}
            </Button>
          </ButtonGroup>
          {isInCart && (
            <Button
              size="large"
              color="error"
              variant={isMobile ? "contained" : "outlined"}
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: cartElem })
              }
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

ProductInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductInfo;
