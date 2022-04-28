import './Manual.css';
import electrician from '../../images/electrician.png';
import { Link } from 'react-router-dom';

function Manual() {
  return (
    <main className="manual">
      <img className="manual__image" src={electrician} alt="Электрик" />
      <h1 className="manual__title">Инструкция</h1>
      <p className="manual__text">
        Наше приложение - это удобный способ сделать список покупок перед походом в магазин электротоваров.
      </p>
      <p className="manual__text">
        Создайте электрическую схему в разделе "СХЕМА", и в разделе "СПИСОК" появится перечень и количество требуемого материала.
      </p>
      <Link to="/key" className="manual__link">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#d5d832" className="bi bi-key" viewBox="0 0 16 16">
          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </Link>
    </main>
  );
}

export default Manual;
