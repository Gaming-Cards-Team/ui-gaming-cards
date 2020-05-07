import productGalleryManagerClient from "../productGalleryManagerClient";

describe("Product gallery manager client", () => {
  
  it("should get 10 start wars cards", async () => {

    global.fetch = jest.fn()
    
    productGalleryManagerClient.getStarWarsCardsPaginated( 1, 10);
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://ec2-3-15-56-101.us-east-2.compute.amazonaws.com:8080/api/v1/cards?page=1&limit=10",
      {
        method: "GET",
      }
    );
  });

  it("should get a start wars card with id = 01003", async () => {

    global.fetch = jest.fn()
    
    productGalleryManagerClient.getStarWarsCard('01003');
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://ec2-3-15-56-101.us-east-2.compute.amazonaws.com:8080/api/v1/card?cardId=01003",
      {
        method: "GET",
      }
    );
  });
});
