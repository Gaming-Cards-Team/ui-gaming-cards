import React, { Suspense } from "react";
import Card from 'react-bootstrap/Card'

const cardStyle = {
  paddingTop: 10,
  paddingBottom: 15,
};

const ImageCard = React.lazy(() => import('./ImageCard'))

const ProductCard = (props) => {
  const { image } = props;
  return (
    <div style={cardStyle}>
        <Card >
          <Card.Body>
              <Suspense fallback='Loading...'>
                <ImageCard image={image} />
              </Suspense>
          </Card.Body> 
        </Card>
    </div>
  );
};

export default ProductCard;
