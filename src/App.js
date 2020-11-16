import React from 'react';
// import EmojiViewer from './emojiViewer'
// import EViewer from './EViewer'
// import EGrids from './EGrids'
import ECategory from './ECategory'
// import EOptViewer from './EOptViewer'
import NavBar from './NavBar'
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import EmojiPage from './EmojiPage';
import ESearch from './ESearch';
import EApi from './EApi';
import EAbout from './EAbout';

function App() {
	return (
		<div className="App">

			{/* <ECategory /> */}
			{/* <EGrids itemIndex=0 /> */}
			{/* <EViewer /> */}
			<Router>
				<NavBar />
				<Switch>
					<Route path="/category/:catId" component={ECategory} />
					<Route path="/category" component={ECategory} />
					<Route path="/search" component={ESearch} />
					<Route path="/api" component={EApi} />
					<Route path="/about" component={EAbout} />
					<Route path="/:id" children={<EmojiPage />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
