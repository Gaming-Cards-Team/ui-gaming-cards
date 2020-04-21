import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const cardGalleryStyle = {
  marginTop: 30,
  marginBottom: 50,
  marginRight: 100,
  marginLeft: 100,
};
const priceStyle = {
  widht: "100%",
  textAlign: "right",
};

const CardGallery = () => (
  <div style={cardGalleryStyle}>
    
    <CardDeck>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02001.jpg"
        />
        <Card.Body>
          <Card.Title>Death Tropper</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02002.jpg"
        />
        <Card.Body>
          <Card.Title>FN-2199</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02003.jpg"
        />
        <Card.Body>
          <Card.Title>Director Krennic</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02004.jpg"
        />
        <Card.Body>
          <Card.Title>The Pilot</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02005.jpg"
        />
        <Card.Body>
          <Card.Title>E'web Placement</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <div style={cardGalleryStyle}>
 </div>
    <CardDeck>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02001.jpg"
        />
        <Card.Body>
          <Card.Title>Death Tropper</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02002.jpg"
        />
        <Card.Body>
          <Card.Title>FN-2199</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02003.jpg"
        />
        <Card.Body>
          <Card.Title>Director Krennic</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02004.jpg"
        />
        <Card.Body>
          <Card.Title>The Pilot</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://swdestinydb.com/bundles/cards/en/02/02005.jpg"
        />
        <Card.Body>
          <Card.Title>E'web Placement</Card.Title>
          <Card.Text>
            <div style={priceStyle}>$1.00</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Add to cart</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  </div>
);

export default CardGallery;
