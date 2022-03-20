import './Socket.css';

function Socket({ color }) {
  return (
    <svg className={color} width="60" height="60" fill="transparent" stroke="red" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="26" />
      <line x1="2" x2="28" y1="30" y2="30" />
      <line x1="42" x2="58" y1="30" y2="30" />
      <line x1="28" x2="18" y1="31" y2="20" />
      <line x1="28" x2="18" y1="29" y2="40" />
      <line x1="42" x2="32" y1="31" y2="20" />
      <line x1="42" x2="32" y1="29" y2="40" />
    </svg>
  );
}

export default Socket;
