<<<<<<< HEAD
import productGalleryManagerClient from "../productGalleryManagerClient";

describe("Product gallery manager client", () => {
  it("should get 10 start wars cards", async () => {

    global.fetch = jest.fn()
    
    productGalleryManagerClient.getStarWarsCardsPaginated( 1, 10);
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://ec2-3-22-170-115.us-east-2.compute.amazonaws.com:8080/api/v1/cards?page=1&limit=10",
=======
jest.mock('node-fetch');
import fetch from 'node-fetch';
import { getStarWarsCardsPaginated } from "../productGalleryManagerClient";

describe("Product gallery manager client", () => {
  it("should get 10 start wars cards", async () => {
    
    getStarWarsCardsPaginated( 1, 10);
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "http://ec2-3-22-170-115.us-east-2.compute.amazonaws.com:8080/cards",
>>>>>>> 09b407ae1717492f8f3e9c36e5243c89da370e6f
      {
        method: "GET",
      }
    );
  });
});
