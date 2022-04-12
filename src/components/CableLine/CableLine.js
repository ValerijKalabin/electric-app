import { useEffect, useState } from 'react';
import { step, outerHeight, innerPadding } from '../../utils/position';
import { getCableHeight, getCableColor, getCablePath } from '../../utils/cable';
import './CableLine.css';

function CableLine({ element, pageHeight }) {
  const [cable, setCable] = useState({});

  useEffect(() => {
    const elements = element.elementList;
    const internalSpace = pageHeight - outerHeight - innerPadding;
    const width = Math.abs(elements[1].pos - elements[0].pos) || step;
    const heightV = Math.abs(elements[1].posV - elements[0].posV);
    const height = getCableHeight(heightV, internalSpace);
    const color = getCableColor(element.type);
    const viewBox = `0 0 ${width} ${height}`;
    const path = getCablePath(elements, internalSpace, element.type);
    setCable({ width, height, color, viewBox, path });
  }, [ element, pageHeight ])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="cable-image"
      width={cable.width}
      height={cable.height}
      fill="transparent"
      stroke={cable.color}
      strokeWidth="2"
      viewBox={cable.viewBox}
    >
      <path d={cable.path} />
    </svg>
  );
}

export default CableLine;
