const PuzzelBlock = ({ bgUrl, className }) => {
    return (
        <div className={`pzl-blk ${className}`}>
            <img src={bgUrl} alt="" className="d-block w-100" style={{objectFit: ""}} />
        </div>
    );
};
export default PuzzelBlock;