import { render, screen } from "../../../tests/test-utils";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Banner from "./Banner";

describe("Banner", () => {
  it("renders correctly", () => {
    render(<Banner />);

    const carousel = screen.queryAllByRole("list");
    const shopNowButton = screen.getByRole("button", { name: /order now/i });
    const mainText = screen.getByRole("heading", {
      name: /The best restaurant/i,
    });

    expect(carousel).toHaveLength(2);
    expect(shopNowButton).toBeInTheDocument();
    expect(mainText).toBeInTheDocument();
  });

  it("button navigates to correct page when clicked", async () => {
    render(<Banner />);

    const shopButton = screen.getByRole("button", { name: /Order now/i });
    await userEvent.click(shopButton);
    expect(global.window.location.href).toContain("/shop");
  });
});
