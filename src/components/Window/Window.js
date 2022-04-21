import './Window.css';

function Window({ pageWidth, pageHeight }) {
  return (
    <div className="window">
      <p className="window__title">Ширина окна</p>
      <p className="window__text">{`${pageWidth} пикселей`}</p>
      <p className="window__title">Высота окна</p>
      <p className="window__text">{`${pageHeight} пикселей`}</p>
    </div>
  );
}

export default Window;
