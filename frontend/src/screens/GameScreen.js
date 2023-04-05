import React, { useContext, useEffect, useMemo, useState } from "react";
import { Row } from "reactstrap";
import PuzzelBlock from "../components/PuzzelBlock";
import config from "../constants/config";
import { useGlobalContext } from "../data/applicationContext";
import { CreateAppContext } from "../data/applicationContext";

const GameScreen = () => {

  const { username } = useGlobalContext();
  const [records, setRecord] = useState([]);
  /**
   * 
   * 
   */
  const fetchData = async () => {
    try{
      const response = await fetch("/api");
      const data = await response.json();
      const newRecords = data[0].sort((a, b) => b.score - a.score);
      setRecord(newRecords);
    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  /**
   * 
   * 
   */

  const sendData = ()=>{
    fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "move": gamme_linked_list.hamleNumber,
        "score": gamme_linked_list.score
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  /**
   * 
   */
  /**
   * 
   */
  const { gamme_linked_list, bg_image, handleFieldChange } =
    useContext(CreateAppContext);

  const onHamle = (url) => {
    handleFieldChange("gamme_linked_list", gamme_linked_list.hamle(url));
  };
  /**
   * 
   */
  if (gamme_linked_list.isGameFinished()) {
    sendData();
  }
  /**
   * 
   */
  const level = useMemo(() => {
    return (config.PUZZEL_BLOCKS_PER_ROW - 4) / 2 + 1;
  }, [config.PUZZEL_BLOCKS_PER_ROW]);

  const pzlBlks = gamme_linked_list.mixedList.map((bgImgUrl) => {
    const isBlockActive = gamme_linked_list?.actifNode?.data == bgImgUrl;
    const isAtCorrectPlace = gamme_linked_list.isUrlAtCoorectPlace(bgImgUrl);
    const isGameFinished = gamme_linked_list.isGameFinished();
    const size =
      config.PUZZEL_TABLE_SIZE / config.PUZZEL_BLOCKS_PER_ROW -
      (config.BLK_MARGIN * 2 + 1.6);

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
          margin: !isGameFinished && config.BLK_MARGIN + "px",
        }}
      />
    );
  });
    return (
      <Row className="d-flex justify-content-center align-items-center h-100 m-0 p-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column flex-grow-0 result-div p-3">
            <span>
              <i className="fas fa-plus"></i>
              <span className="title">Oyuncu:</span> {username}
            </span>
            <span>
              <i className="fas fa-plus"></i>
              <span className="title">Skor:</span> {gamme_linked_list.score}
            </span>

            <span>
              <i className="fas fa-plus"></i>
              <span className="title">Hamle Sayısı:</span>
              {gamme_linked_list.hamleNumber}
            </span>
            <span>
              <i className="fas fa-plus"></i>
              <span className="title">Zaman</span>: {}
            </span>

            <div className="records">
              <h6 style={{ color: "#FF597B" }}>
                Kullancıların Aldığı En Yüksek Skorlar
              </h6>
              {records.map((record) => {
                return (
                  <div className="record-child">
                    <p>
                      <i
                        className="fas fa-user"
                        style={{ color: "#0081B4", paddingRight: "5px" }}
                      ></i>
                      {record.username}
                    </p>
                    <p>Hareket Sayısı: {record.move}</p>
                    <p>
                      <i
                        className="fas fa-star"
                        style={{ color: "#FFEA20" }}
                      ></i>
                      Skor: {record.score}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="d-flex flex-wrap align-content-center justify-content-center align-items-start"
            style={{
              width: config.PUZZEL_TABLE_SIZE,
              height: config.PUZZEL_TABLE_SIZE,
            }}
          >
            {pzlBlks}

            {gamme_linked_list.isGameFinished() && (
              <button
                className="play-again-btn"
                onClick={() => window.location.reload()}
              >
                Tekrar Oyna
              </button>
            )}
          </div>
          <div className="text-center">
            <img
              className="d-block"
              alt=""
              src={bg_image.value.croppedImage}
              style={{ objectFit: "contain", width: 150 }}
            />
            <span>
              <span style={{ color: "#E7B10A" }}>Level:</span> {level} (
              {config.PUZZEL_BLOCKS_PER_ROW}x{config.PUZZEL_BLOCKS_PER_ROW})
            </span>
          </div>
        </div>
      </Row>
    );
};
export default GameScreen;
