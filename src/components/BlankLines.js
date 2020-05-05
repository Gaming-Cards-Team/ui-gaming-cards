import React from "react";

const BlankLines = ({numberLines = 3}) => {
   
  const lines = Array.from({length: numberLines}, (v, i) => i)
  return (
    <> 
      {lines.map((item) => (<br key={item}/>))}
    </>
  );
};

export default BlankLines;
