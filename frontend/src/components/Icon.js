const Icon = ({ iconName, faSize, color }) => {
    return <i style={{minWidth : 24, textAlign : "center" }} className={`fa fa-${faSize} fa-${iconName} text-${color}`}></i>;
};

export default Icon;