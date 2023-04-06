import { useGlobalContext } from "../data/applicationContext";


const PuzzelBlock = ({
  bgUrl,
  onClick,
  isBlockActive,
  isAtCorrectPlace,
  style,
  isGameFinished,
}) => {

  const {darkTheme} = useGlobalContext();
  return (
    <button
      className={`p-0 
                ${
                  isBlockActive
                    ? "border-dashed"
                    : !isGameFinished
                    ? "border border-secondary"
                    : "border-0"
                } 
                ${!isGameFinished && isAtCorrectPlace && `opacity-${darkTheme ? '25':'50'}`} 
            `}
      style={style}
      onClick={onClick}
    >
      <img
        src={bgUrl}
        alt=""
        className="d-block w-100"
        style={{ objectFit: "" }}
      />
    </button>
  );
};
export default PuzzelBlock;
