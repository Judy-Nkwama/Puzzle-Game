const PuzzelBlock = ({ bgUrl, onClick, isBlockActive, isAtCorrectPlace, style, isGameFinished }) => {
    return (
        <button
            className={`p-0 
                ${isBlockActive ? "border-dashed" : !isGameFinished ? "border border-secondary" : "border-0"} 
                ${!isGameFinished && isAtCorrectPlace && "opacity-50"} 
            `}
            style={style}
            onClick={onClick}
        >
            <img src={bgUrl} alt="" className="d-block w-100" style={{objectFit: ""}} />
        </button>
    );
};
export default PuzzelBlock;