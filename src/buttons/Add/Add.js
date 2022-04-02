import './Add.css';

function Add({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'add',
      type: 'action',
      listName
    });
  }

  return (
    <button
      type="button"
      className="add"
      onClick={ handleClick }
    >
      <svg className="bi bi-plus-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#d5d832" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
      </svg>
    </button>
  );
}

export default Add;
