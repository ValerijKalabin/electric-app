import './Lamp.css';

function Lamp({ color }) {
  return (
    <svg className={color} width="60" height="60" fill="transparent" stroke="red" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="26" />
      <line x1="10" x2="50" y1="50" y2="10" />
      <line x1="10" x2="50" y1="10" y2="50" />
    </svg>
  );
}

export default Lamp;
