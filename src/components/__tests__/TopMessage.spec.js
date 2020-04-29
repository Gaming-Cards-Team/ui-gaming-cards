import React from "react";
import TopMessage from "../TopMessage";
import renderer from "react-test-renderer";

describe("Top message component", () => {
  it("should render successfully", () => {
    const component = renderer.create(<TopMessage />).toJSON();

    expect(component).toMatchSnapshot();
  });
});