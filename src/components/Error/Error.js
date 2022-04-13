import './Error.css';

function Error({ windowError }) {
  return (
    <main className="error">
      <h1 className="error__title">{ windowError.title }</h1>
      <p className="error__message">{ windowError.text }</p>
    </main>
  );
}

export default Error;
