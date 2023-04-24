import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../index.css'

const UnderConstruction = () => {
  return (
    <div className="pageInProgress-container">
      <FontAwesomeIcon icon={faPersonDigging} size="5x" />
      <h2>Page in progress...</h2>
    </div>
  );
};

export default UnderConstruction;