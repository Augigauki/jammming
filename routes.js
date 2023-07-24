import { BrowserRouter, Switch, Route } from "react-router-dom";

export default () => {
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home}></Route>
			<Route path="/search" component={Search}></Route>
			<Route path="/playlists" component={Playlists}></Route>
			<Route path="/logout" component={Logout}></Route>
		</Switch>
	</BrowserRouter>;
};
