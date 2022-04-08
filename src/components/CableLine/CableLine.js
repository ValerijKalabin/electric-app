import './CableLine.css';

function CableLine({ element }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="cable-image"
      width={element.width}
      height={element.height}
      fill="transparent"
      stroke="#bbbbbb"
      strokeWidth="2"
      viewBox={`0 0 ${element.width} ${element.height}`}
    >
      <path d={element.line} />
    </svg>
  );
}

export default CableLine;
