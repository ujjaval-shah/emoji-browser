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
import SurpriseMe from './SurpriseMe';
import EFooter from './EFooter';
import EHome from './EHome';

function App() {
	return (
		<div className="App">

			{/* <ECategory /> */}
			{/* <EGrids itemIndex=0 /> */}
			{/* <EViewer /> */}
			<Router>
				<div className="spacer">
					<Switch>
						<Route exact path="/" >
							<NavBar activeTab={'home'} />
						</Route>
						<Route path="/home" >
							<NavBar activeTab={'home'} />
						</Route>
						<Route path="/category" >
							<NavBar activeTab={'category'} />
						</Route>
						<Route path="/search" >
							<NavBar activeTab={'search'} />
						</Route>
						<Route path="/about" >
							<NavBar activeTab={'about'} />
						</Route>
						<Route path="/surprise-me" >
							<NavBar activeTab={'surprise-me'} />
						</Route>
						<Route path="/:id" >
							<NavBar activeTab={null} />
						</Route>
					</Switch>

					<Switch>
						<Route exact path="/" component={EHome} />
						<Route path="/home" component={EHome} />
						<Route path="/category/:catId" component={ECategory} />
						<Route path="/category" component={ECategory} />
						<Route path="/search" component={ESearch} />
						<Route path="/api" component={EApi} />
						<Route path="/about" component={EAbout} />
						<Route path="/surprise-me" component={SurpriseMe} />
						<Route path="/:id" component={EmojiPage} />
					</Switch>

				</div>
				<div className="footer">
					<EFooter />
				</div>

			</Router>
		</div>
	);
}

export default App;
