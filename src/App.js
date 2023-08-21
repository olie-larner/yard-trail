import logo from './logo.svg';
import './App.css';
import { Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer';
import ReactGA from 'react-ga';
ReactGA.initialize('G-GZ02SVN0EZ');
ReactGA.pageview(window.location.pathname + window.location.search);

function App(client) {
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Stroud’s town-wide yard sale event. Sell from your doorstep. Keep stuff out of landfill. Build your community."
				></meta>
				<title>Stroud Yard Trail</title>
			</Helmet>
			<Routes>
				<Route client={client} exact path="/" Component={Home} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
