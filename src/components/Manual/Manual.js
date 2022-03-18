import './Manual.css';
import electrician from '../../images/electrician.png';

function Manual() {
  return (
    <main className="manual">
      <img className="manual__image" src={electrician} alt="Электрик" />
      <h1 className="manual__title">Инструкция</h1>
      <p className="manual__text">
        Данное приложение поможет электрику быстро и правильно посчитать количество материала, необходимое для ремонта.
      </p>
      <p className="manual__text">
        Создайте электрическую схему в разделе "СХЕМА", и в разделе "СПИСОК" появится перечень и количество требуемого материала.
      </p>
    </main>
  );
}

export default Manual;
