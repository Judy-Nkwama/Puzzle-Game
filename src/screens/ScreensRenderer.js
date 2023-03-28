import { useContext } from "react";
import { Row, Col } from 'reactstrap';
import PictureSelectionScreen from './PictureSelectionScreen';

import { CreateAppContext } from "../data/applicationContext";
import GameScreen from "./GameScreen";


const ScreensRenderer = () => {

    const { bg_image, urls_linked_list_in_process, current_screen, handleFieldChange } = useContext(CreateAppContext);

    let CurrentScreen;
    switch (current_screen) {
        case "GameScreen": CurrentScreen = <GameScreen />; break;
        default: CurrentScreen =
            <PictureSelectionScreen
                id="bg_image"
                name="bg_image"
                placeholder="Puzzle resmini seçin"
                value={bg_image.value}
                // puzzel_bloks_bgs={puzzel_bloks_bgs.value}
                handleFieldChange={handleFieldChange}
                valid={ !!bg_image?.value && !!urls_linked_list_in_process}
                feedback={bg_image.errorMessage}
                description=""
            />
        ;
    }

    return (
        <Row className="h-100 d-flex flex-column border border-primary m-1">
            <Col className="text-center flex-grow-0 border m-1">Puzzel Oyunu</Col>
            <Col className="border border-success m-1">
                {CurrentScreen}
            </Col>
        </Row>
    );
};
export default ScreensRenderer;