import './ListOfSchemes.css';


function ListOfSchemes({ onClickSignout }) {
  return (
    <main className="schemes">
      <h1 className="schemes__title">
        Ваши схемы
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
