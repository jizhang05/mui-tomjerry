import { render, screen } from "../../../tests/test-utils";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import ShopProducts from "./ShopProducts";

const sortedProducts = [
  {
    name: "Buffalo Shrimp",
    id: "starter01",
    price: 15,
    category: "starter",
    description: "Hand-breaded shrimp tossed in your favorite buffalo sauce",
  },
];

describe("ShopProducts", () => {
  it("renders correctly", () => {
    render(<ShopProducts sortedProducts={sortedProducts} />);

    const priceHeading = screen.getByRole("heading", { name: /Price: $15/i });
    expect(priceHeading).toBeInTheDocument();
  });

  it("renders with the correct number of buttons", () => {
    render(<ShopProducts sortedProducts={sortedProducts} />);

    const buttonGroup = screen.queryAllByRole("button");
    expect(buttonGroup).toHaveLength(2);
  });
});
