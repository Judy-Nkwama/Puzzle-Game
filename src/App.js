import { Container } from 'reactstrap';
import CreateAppContextProvider from './data/applicationContext';
import ScreensRenderer from './screens/ScreensRenderer';

const App = () => {
	return (
		<Container fluid className="h-100">
			<CreateAppContextProvider>
				<ScreensRenderer />
			</CreateAppContextProvider>
		</Container>
	);
};

export default App;
