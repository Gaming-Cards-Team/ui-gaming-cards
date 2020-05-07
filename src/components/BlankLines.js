import React, {useState, useEffect} from "react";

const BlankLines = ({numberLines = 3}) => {

  const [lines, setLines] = useState([]);

  useEffect(() => {
        setLines(Array.from({length: numberLines}, (v, i) => i))
  }, [numberLines]);
   
  return (
    <> 
      {lines.map((item) => (<br key={item}/>))}
    </>
  );
};

export default BlankLines;
