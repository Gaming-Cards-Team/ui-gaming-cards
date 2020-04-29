import React from "react";
import ImageCard from "../ImageCard";
import renderer from "react-test-renderer";

describe("Image Card component", () => {
  it("should render successfully", () => {
    const component = renderer.create(<ImageCard />).toJSON();

    expect(component).toMatchSnapshot();
  });
});