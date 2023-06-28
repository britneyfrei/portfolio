import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dashboard from "../assets/img/project-dashboard.png";
import weather from "../assets/img/project-weather.png";
import expense from "../assets/img/project-expense.png";
import auth from "../assets/img/project-auth.png";
import coffee from "../assets/img/project-coffee.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
	const sections = [
		[
			{
				title: "Game Dashboard",
				description: "Takes game data and displays it as graphs and tables.",
				tech: "React, Custom Hook, MUI, Chart.js",
				demo: "https://tetris-dashboard.netlify.app/",
				code: "https://github.com/britneyfrei/tetris-dashboard-v1",
				src: dashboard,
			},
			{
				title: "Weather App",
				description:
					"Displays the weather and forecast based on user's location.",
				tech: "React, OpenWeatherMap API, Axios",
				demo: "https://react-weather-forcast-app.netlify.app/",
				code: "https://github.com/britneyfrei/react-weather-app",
				src: weather,
			},
			{
				title: "Expense Tracker",
				description: "Keeps track of user's expenses.",
				tech: "MongoDB, Express, React, Node, Mongoose, Axios, Tailwind, Chart.js",
				demo: "https://expense-tracker-wg8k.onrender.com/",
				code: "https://github.com/britneyfrei/expense-tracker",
				src: expense,
			},
			{
				title: "Authentication App",
				description: "Registers, logs in, logs out a user.",
				tech: "MongoDB, Express, React, Node, Mongoose, JWT, Redux, Bootstrap",
				demo: "https://expense-tracker-wg8k.onrender.com/",
				code: "https://github.com/britneyfrei/expense-tracker",
				src: auth,
			},
			{
				title: "Coffee Recipe App",
				description:
					"Allows user to enter a coffee recipe and saves the recipe.",
				tech: "JavaScript, Bootstrap, Local Storage",
				demo: "https://coffee-recipe-app.netlify.app/",
				code: "https://github.com/britneyfrei/coffee-recipe-app",
				src: coffee,
			},
		],
		[
			{
				title: "Coffee Recipe App",
				description:
					"Allows user to enter a coffee recipe and saves the recipe.",
				tech: "JavaScript, Bootstrap, Local Storage",
				demo: "https://coffee-recipe-app.netlify.app/",
				code: "https://github.com/britneyfrei/coffee-recipe-app",
				src: coffee,
			},
		],
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<div>
							<h2>Projects</h2>
							<p>
								View some of my best work here. These projects demonstrate my
								passion, desire to learn, and attention to detail.
							</p>
							<Tab.Container id="projects-tabs" defaultActiveKey={0}>
								{/* <Nav
									variant="pills"
									className="nav-pills mb-5 flex flex-column flex-sm-row justify-content-center align-items-center"
									id="pills-tab"
								>
									<Nav.Item>
										<Nav.Link eventKey={0}>Front-End</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey={1}>Full-Stack</Nav.Link>
									</Nav.Item>
								</Nav> */}
								<Tab.Content>
									{sections.map((section, i) => (
										<Tab.Pane key={i} eventKey={i}>
											<Row>
												{section.map((project, i) => {
													return <ProjectCard key={i} {...project} />;
												})}
											</Row>
										</Tab.Pane>
									))}
								</Tab.Content>
							</Tab.Container>
						</div>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" alt="" src={colorSharp2}></img>
		</section>
	);
};
