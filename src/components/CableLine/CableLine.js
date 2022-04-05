import './CableLine.css';

function CableLine({ element }) {
  return (
    <div className="cable__container" style={{ width: `${element.line.width}px`, height: `${element.line.height}px` }}>
      <svg className="cable__image" width={element.line.width} height={element.line.height} fill="transparent" stroke="#bbbbbb" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <line className="cable__line" x1={element.line.x1} x2={element.line.x2} y1={element.line.y1} y2={element.line.y2} />
      </svg>
    </div>
  );
}

export default CableLine;
