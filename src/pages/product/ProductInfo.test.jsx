import { render, screen } from "../../../tests/test-utils";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import ProductInfo from "./ProductInfo";

const params = {
  id: "starter01",
};

describe("ProductInfo", () => {
  it("renders correctly (with props)", () => {
    render(<ProductInfo params={params} />);

    const productTitle = screen.getByRole("heading", {
      name: /Buffalo Shrimp/i,
    });
    expect(productTitle).toBeInTheDocument();
  });
});
