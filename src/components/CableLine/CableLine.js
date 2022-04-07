import './CableLine.css';

function CableLine({ element }) {
  return (
    <div
      className="cable__container"
      style={{ width: `${element.width}px`, height: `${element.height}px` }}
    >
      <svg
        className="cable__image"
        width={element.width}
        height={element.height}
        fill="transparent"
        stroke="#bbbbbb"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${element.width} ${element.height}`}
      >
        <path d={element.line} />
      </svg>
    </div>
  );
}

export default CableLine;
