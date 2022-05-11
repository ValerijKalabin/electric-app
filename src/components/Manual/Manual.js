import './Manual.css';
import electrician from '../../images/electrician.png';
import { Link } from 'react-router-dom';
import { outerHeight } from '../../utils/position';

function Manual({ pageHeight }) {
  return (
    <main className="manual" style={{ minHeight: `${pageHeight - outerHeight}px` }}>
      <div className="manual__page">
        <img className="manual__image" src={electrician} alt="Электрик" />
        <h1 className="manual__title">Инструкция</h1>
        <p className="manual__text">
          Наше приложение - это удобный способ сделать список покупок перед походом в магазин электротоваров.
        </p>
        <p className="manual__text">
          Создайте электрическую схему в разделе "СХЕМА", и в разделе "СПИСОК" появится перечень и количество требуемого материала.
        </p>
        <Link to="/key" className="manual__link">Ключ</Link>
      </div>
    </main>
  );
}

export default Manual;
