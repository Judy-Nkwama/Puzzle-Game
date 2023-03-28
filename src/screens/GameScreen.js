import React, { useContext, useMemo } from "react";
import { Row } from "reactstrap";
import PuzzelBlock from "../components/PuzzelBlock";
import config from "../constants/config";

import { CreateAppContext } from "../data/applicationContext";


const GameScreen = () => {

    const { gamme_linked_list, bg_image, handleFieldChange } = useContext(CreateAppContext);


    const onHamle = (url) => {
        handleFieldChange("gamme_linked_list", gamme_linked_list.hamle(url));
    };

    const level = useMemo(() => {
        return (((config.PUZZEL_BLOCKS_PER_ROW - 4) / 2) + 1);
    }, [config.PUZZEL_BLOCKS_PER_ROW]);


    const pzlBlks = gamme_linked_list.mixedList.map((bgImgUrl) => {

        const isBlockActive = gamme_linked_list?.actifNode?.data == bgImgUrl;
        const isAtCorrectPlace = gamme_linked_list.isUrlAtCoorectPlace(bgImgUrl);
        const isGameFinished = gamme_linked_list.isGameFinished();
        const size = (config.PUZZEL_TABLE_SIZE / config.PUZZEL_BLOCKS_PER_ROW) - ((config.BLK_MARGIN * 2) + 1.6);
        
        return (
            <PuzzelBlock
                key={bgImgUrl}
                bgUrl={bgImgUrl}
                isBlockActive={isBlockActive}
                isAtCorrectPlace={isAtCorrectPlace}
                isGameFinished={isGameFinished}
                onClick={onHamle.bind(this, bgImgUrl)}
                style={{
                    width: size, 
                    height: size,
                    margin: !isGameFinished && config.BLK_MARGIN + "px"
                }}
            />
        );
    });

    return (
        <Row className="d-flex justify-content-center align-items-center h-100 m-0 p-0">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column flex-grow-0 border">
                    <span>En yüksek Skore: VV by VVVVV</span>
                    <span>Oyuncu: OOOOOxO</span>
                    <span>Skor: {gamme_linked_list.score}</span>
                    <span>Hamle Sayısı: {gamme_linked_list.hamleNumber}</span>
                    <span>Time: { }</span>
                </div>
                <div 
                    className="d-flex flex-wrap align-content-center justify-content-center align-items-start border border-primary"
                    style={{width: config.PUZZEL_TABLE_SIZE, height: config.PUZZEL_TABLE_SIZE}}    
                >
                    {pzlBlks}
                </div>
                <div className="border text-center">
                    <img className="d-block" alt="" src={bg_image.value.croppedImage} style={{ objectFit: "contain", width: 150 }} />
                    <span>Level: {level} ({config.PUZZEL_BLOCKS_PER_ROW}x{config.PUZZEL_BLOCKS_PER_ROW})</span>
                </div>
            </div>
        </Row>
    );
};
export default GameScreen;