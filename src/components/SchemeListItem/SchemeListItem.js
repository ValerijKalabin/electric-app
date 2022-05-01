import './SchemeListItem.css';

function SchemeListItem({ drawing, status, pageWidth, onClickDrawing }) {
  function handleClickChoose() {
    onClickDrawing({
      action: 'choose',
      drawingId: drawing._id
    });
  }

  function handleClickEdit() {
    onClickDrawing({
      action: 'edit',
      drawingId: drawing._id
    });
  }

  function handleClickDelete() {
    onClickDrawing({
      action: 'delete',
      drawingId: drawing._id
    });
  }

  return (
    <div className={`scheme-list-item ${status === 'current' ? 'scheme-list-item_current' : ''}`}>
      <button
        className={`scheme-list-item__drawing ${status === 'current' ? 'scheme-list-item__drawing_current' : ''}`}
        type="button"
        name="choose-drawing"
        disabled={status === 'current'}
        onClick={handleClickChoose}
      >
        <h2 className="scheme-list-item__name" style={pageWidth < 460 ? { width: `${pageWidth - 134}px` } : { width: '326px' }}>
          {drawing.name}
        </h2>
        <p className="scheme-list-item__date" style={pageWidth < 460 ? { width: `${pageWidth - 134}px` } : { width: '326px' }}>
          {`Дата записи: ${drawing.createdAt.getDate()}-${drawing.createdAt.getMonth()}-${drawing.createdAt.getFullYear()}`}
        </p>
      </button>
      <button
        className={`scheme-list-item__action ${status === 'current' ? 'scheme-list-item__action_current' : ''}`}
        type="button"
        name="edit-delete-drawing"
        onClick={status === 'current' ? handleClickEdit : handleClickDelete}
      >
        { status === 'current' &&
          <svg className="bi bi-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bbbbbb" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
        }
        { status === 'notcurrent' &&
          <svg className="bi bi-trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bbbbbb" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        }
      </button>
    </div>
  );
}

export default SchemeListItem;
