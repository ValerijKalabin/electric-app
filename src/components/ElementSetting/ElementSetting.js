import './ElementSetting.css';

function ElementSetting({ elementName }) {
  return (
    <main className="element">
      <h1 className="element__title">{elementName}</h1>
      <form className="element__form">
        <input className="element__name" type="text" id="name" />
      </form>
    </main>
  );
}

export default ElementSetting;
