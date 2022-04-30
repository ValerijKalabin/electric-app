import './SchemeListItem.css';


function SchemeListItem({ drawing, status, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: drawing._id,
      name: status === 'current' ? 'update-drawing' : 'delete-drawing',
    });
  }
  
  return (
    <div className="scheme-item">
      <button
        className={`scheme-item__drawing ${status === 'current' ? 'scheme-item__drawing_current' : ''}`}
        type="button"
        name="scheme-item-drawing"
        disabled={status === 'current'}
        onClick={handleClick}
      >
        <h2 className="scheme-item__name">
          {`Наименование: ${drawing.name}`}
        </h2>
        <p className="scheme-item__date">
          {`Дата создания: ${drawing.createdAt.getDate()}-${drawing.createdAt.getMonth()}-${drawing.createdAt.getFullYear()}`}
        </p>
      </button>
      <button
        className={`scheme-item__action ${status === 'current' ? 'scheme-item__action_current' : ''}`}
        type="button"
        name="scheme-item-action"
        onClick={handleClick}
      >
        Закрыть
      </button>
    </div>
  );
}

export default SchemeListItem;
