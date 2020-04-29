import React from "react";
import TopMessage from "../TopMessage";
import renderer from "react-test-renderer";

describe("Top Message component", () => {
  it("Should validate the component", () => {
    const component = renderer.create(<TopMessage />).toJSON();
    
    expect(component).toMatchSnapshot();
  });
});