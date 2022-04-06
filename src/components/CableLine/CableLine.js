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
      >
        { element.line.map((segment, index) => (
          <line
            key={`s${index}`}
            className="cable__line"
            x1={segment.x1}
            x2={segment.x2}
            y1={segment.y1}
            y2={segment.y2}
          />
        ))}
      </svg>
    </div>
  );
}

export default CableLine;
