import { Box, Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const ShopFilters = ({
  category,
  handleCatChange,
  value,
  handleValueChange,
}) => {
  return (
    <Box
      flex={1}
      component={"section"}
      display={"flex"}
      flexDirection={{ xs: "row", md: "column" }}
      pb={"2rem"}
      gap={{ xs: "1rem", md: "none" }}
    >
      <Box position={{ xs: "none", md: "fixed" }}>
        <ToggleButtonGroup
          orientation="vertical"
          value={category}
          exclusive
          onChange={handleCatChange}
        >
          <ToggleButton value="all" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton value="starter" aria-label="starter">
            Starter
          </ToggleButton>
          <ToggleButton value="burger" aria-label="burger">
            Burger
          </ToggleButton>
          <ToggleButton value="sandwich" aria-label="sandwich">
            Sandwich
          </ToggleButton>
          <ToggleButton value="pasta" aria-label="pasta">
            Pasta
          </ToggleButton>
          <ToggleButton value="combo" aria-label="combo">
            Combo
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box
        position={{ xs: "none", md: "fixed" }}
        mt={{ xs: "none", md: "18rem" }}
        sx={{ backgroundColor: "forestgreen", spacing: "2" }}
      >
        <ToggleButtonGroup
          orientation="vertical"
          color="primary"
          value={value}
          exclusive
          onChange={handleValueChange}
        >
          <ToggleButton value="highToLow" aria-label="highToLow">
            Price: High
          </ToggleButton>
          <ToggleButton value="lowToHigh" aria-label="lowToHigh">
            Price: Low
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default ShopFilters;
