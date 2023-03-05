import { useContext } from "react";
import { Row, Col } from "reactstrap";
import PuzzelBlock from "../components/PuzzelBlock";

import { CreateAppContext } from "../data/applicationContext";


const GameScreen = ({ className }) => {

    const { puzzel_bloks_bgs } = useContext(CreateAppContext);

    return (
        <Row className="d-flex justify-content-center align-items-center h-100 m-0 p-0">
            <div className="pzl-table d-flex flex-wrap align-content-center justify-content-center align-items-start border border-primary">
                {puzzel_bloks_bgs?.value?.sort()?.map((bgImgUrl, index) =>
                    <PuzzelBlock
                        key={index}
                        bgUrl={bgImgUrl}
                        className="m-1 border border-secondary"
                    />
                )}
            </div>
        </Row>
    );
};
export default GameScreen;