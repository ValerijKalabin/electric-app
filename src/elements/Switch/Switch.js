import './Switch.css';

function Switch({ color }) {
  return (
    <svg className={color} width="60" height="60" fill="transparent" stroke="red" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="26" />
      <line x1="2" x2="20" y1="30" y2="30" />
      <line x1="20" x2="40" y1="30" y2="20" />
      <line x1="40" x2="58" y1="30" y2="30" />
    </svg>
  );
}

export default Switch;
