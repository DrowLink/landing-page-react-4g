import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid p-0">

				<NavBar/>
			</div>
			<div className="container">
					<div className="container-fluid d-flex ">

						<Jumbotron
							title="Adipiscing elit"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							buttonLabel="Click Here!"
						/>
					</div>
				<div className="d-md-flex justify-content-between">

					<Card
						imageUrl="https://images.unsplash.com/photo-1680798790340-e1ec34621d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
						title="sed do eiusmod"
						text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
						buttonLabel="More!"
					/>
					<Card
						imageUrl="https://images.unsplash.com/photo-1680798790171-3388b41232bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
						title="sed do eiusmod"
						text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
						buttonLabel="More!"
					/>
					<Card
						imageUrl="https://images.unsplash.com/photo-1680833336571-2c217835b20a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
						title="sed do eiusmod"
						text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
						buttonLabel="More!"
					/>
					<Card
						imageUrl="https://images.unsplash.com/photo-1676836659223-d9d2f8c0498a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
						title="sed do eiusmod"
						text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
						buttonLabel="More!"
					/>
				</div>
			</div>
			<div className="container-fluid p-0">

				<Footer/>
			</div>
		</>
	);
};

export default Home;
