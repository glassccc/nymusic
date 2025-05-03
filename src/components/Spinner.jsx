
import { ClipLoader } from 'react-spinners';
function Spinner() {
  return (
    <div className="spinner-overlay">
      <ClipLoader color="#b983b7" size={50} />
    </div>
  );
}

export default Spinner;