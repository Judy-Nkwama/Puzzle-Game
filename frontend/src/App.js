import { Container } from "reactstrap";
import ScreensRenderer from "./screens/ScreensRenderer";
import { useGlobalContext } from "./data/applicationContext";

const App = () => {
  const { darkTheme } = useGlobalContext();
  return (
    <Container fluid className={`h-100 ${darkTheme ? "darkTheme" : ""}`}>
      <ScreensRenderer />
    </Container>
  );
};

export default App;
