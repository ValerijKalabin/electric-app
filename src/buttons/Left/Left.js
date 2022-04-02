import './Left.css';

function Left({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'left',
      type: 'action',
      listName
    });
  }

  return (
    <button
      type="button"
      className="left"
      disabled={listName === 'hints'}
      onClick={ handleClick }
    >
      <svg className="bi bi-caret-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#d5d832" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
      </svg>
    </button>
  );
}

export default Left;
