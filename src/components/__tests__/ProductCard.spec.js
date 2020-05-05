import React from "react";
import ProductCard from "../ProductCard";
import renderer from "react-test-renderer";

describe("Product Card component", () => {
  it("Should validate the component", () => {
    const component = renderer.create(<ProductCard />).toJSON();

    expect(component).toMatchSnapshot();
  });
});