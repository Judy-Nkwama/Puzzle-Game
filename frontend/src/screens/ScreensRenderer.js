import { useContext, useEffect } from "react";
import { Row, Col } from "reactstrap";
import PictureSelectionScreen from "./PictureSelectionScreen";

import { CreateAppContext } from "../data/applicationContext";
import GameScreen from "./GameScreen";
import { useGlobalContext } from "../data/applicationContext";

const ScreensRenderer = () => {
  const {
    bg_image,
    urls_linked_list_in_process,
    current_screen,
    handleFieldChange,
  } = useContext(CreateAppContext);
  const { darkTheme, changeTheme } = useGlobalContext();

  let CurrentScreen;
  switch (current_screen) {
    case "GameScreen":
      CurrentScreen = <GameScreen />;
      break;
    default:
      CurrentScreen = (
        <PictureSelectionScreen
          id="bg_image"
          name="bg_image"
          placeholder="Puzzle Resmini Yükleyin"
          value={bg_image.value}
          // puzzel_bloks_bgs={puzzel_bloks_bgs.value}
          handleFieldChange={handleFieldChange}
          valid={!!bg_image?.value && !!urls_linked_list_in_process}
          feedback={bg_image.errorMessage}
          description=""
        />
      );
  }
  
  return (
    <Row className="h-100 d-flex flex-column m-0">
      <Col className="flex-grow-0 m-1">
        <div className="page-title header-div">
          <span className="app-title">
            <i className="fas fa-puzzle-piece"></i>
            Puzzel Oyunu
          </span>
        </div>
        <div className="header-div">
          <div className="theme-icon-div" onClick={changeTheme}>
            <i className={`fas fa-${darkTheme ? "sun" : "moon"}`}></i>
          </div>
        </div>
      </Col>
      <Col className="m-1">{CurrentScreen}</Col>
    </Row>
  );
};
export default ScreensRenderer;
