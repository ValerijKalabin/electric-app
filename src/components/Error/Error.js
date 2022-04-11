import './Error.css';

function Error() {
  return (
    <main className="error">
      <h1 className="error__title">Ошибка</h1>
      <p className="error__message">
        Попробуйте открыть приложение на другом устройстве. Размеры его экрана должны быть немного больше.
      </p>
    </main>
  );
}

export default Error;
