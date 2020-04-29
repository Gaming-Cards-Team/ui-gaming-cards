import React from "react";
import GalleryCard from "../CardGallery";
import renderer from "react-test-renderer";

describe("Card gallery component", () => {
  it("should render successfully", () => {
    const component = renderer.create(<GalleryCard />).toJSON();

    expect(component).toMatchSnapshot();
  });
});