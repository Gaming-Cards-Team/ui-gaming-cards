import React, { Suspense } from "react";
import Card from 'react-bootstrap/Card';
import Loader from 'react-loader-spinner'

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
              <Suspense fallback={<Loader/>}>
                <ImageCard image={image} />
              </Suspense>
          </Card.Body> 
        </Card>
    </div>
  );
};

export default ProductCard;
