import { outerHeight } from '../../utils/position';
import './ListOfSchemes.css';


function ListOfSchemes({ pageHeight, onClickSignout }) {
  return (
    <main className="schemes" style={{ minHeight: `${pageHeight - outerHeight}px` }}>
      <h1 className="schemes__title">
        Мои схемы
      </h1>
      <button
        className="schemes__signout"
        type="button"
        name="signout"
        onClick={onClickSignout}
      >
        Закрыть
      </button>
    </main>
  );
}

export default ListOfSchemes;
