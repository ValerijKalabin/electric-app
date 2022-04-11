import { useEffect, useState } from 'react';
import { gerCableHeight, step } from '../../utils/position';
import { getPath } from '../../utils/cable';
import './CableLine.css';

function CableLine({ element, pageHeight }) {
  const [cable, setCable] = useState({});

  useEffect(() => {
    const elements = element.elementList;
    const outerHeight = 130;
    const innerPadding = 150;
    const internalSpace = pageHeight - outerHeight - innerPadding;
    const width = Math.abs(elements[1].pos - elements[0].pos) || step;
    const heightV = Math.abs(elements[1].posV - elements[0].posV);
    const height = gerCableHeight(heightV, internalSpace);
    const viewBox = `0 0 ${width} ${height}`;
    const path = getPath(elements, internalSpace);
    setCable({ width, height, viewBox, path });
  }, [ element, pageHeight ])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="cable-image"
      width={cable.width}
      height={cable.height}
      fill="transparent"
      stroke="#bbbbbb"
      strokeWidth="2"
      viewBox={cable.viewBox}
    >
      <path d={cable.path} />
    </svg>
  );
}

export default CableLine;
