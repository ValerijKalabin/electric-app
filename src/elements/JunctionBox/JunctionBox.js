import './JunctionBox.css';

function JunctionBox({ color }) {
  return (
    <div className={`box ${color}`}>
      <div className={`box__inner ${color}`} />
    </div>
  );
}

export default JunctionBox;
