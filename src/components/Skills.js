import { Tab, Nav } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import SkillChart from "./SkillChart";
import { useState } from "react";

export const Skills = () => {
	const [clicked, setClicked] = useState(false);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1200 },
			items: 5,
		},
		large: {
			// the naming can be any, depends on you.
			breakpoint: { max: 1199, min: 992 },
			items: 4,
		},
		medium: {
			breakpoint: { max: 991, min: 768 },
			items: 3,
		},
		small: {
			breakpoint: { max: 767, min: 576 },
			items: 2,
		},
		xSmall: {
			breakpoint: { max: 575, min: 0 },
			items: 1,
		},
	};
	const skills = [
		[
			{
				title: "HTML",
				percentage: 100,
			},
			{
				title: "CSS",
				percentage: 95,
			},
			{
				title: "Python",
				percentage: 95,
			},
			{
				title: "JavaScript",
				percentage: 90,
			},
			{
				title: "PHP",
				percentage: 85,
			},
			{
				title: "SQL",
				percentage: 75,
			},
			{
				title: "C",
				percentage: 70,
			},
			{
				title: "R",
				percentage: 60,
			},
			{
				title: "TypeScript",
				percentage: 50,
			},
		],
		[
			{
				title: "Bootstrap",
				percentage: 90,
			},
			{
				title: "Tailwind",
				percentage: 85,
			},
			{
				title: "Node.js",
				percentage: 70,
			},
			{
				title: "Express",
				percentage: 65,
			},
			{
				title: "Django",
				percentage: 60,
			},
			{
				title: "Angular",
				percentage: 60,
			},
		],
		[
			{
				title: "React",
				percentage: 85,
			},
			{
				title: "Chart.js",
				percentage: 85,
			},
			{
				title: "Material Design",
				percentage: 85,
			},
			{
				title: "Angular Material",
				percentage: 80,
			},
			{
				title: "jQuery",
				percentage: 75,
			},
		],
		[
			{
				title: "MySQL",
				percentage: 75,
			},
			{
				title: "MongoDB",
				percentage: 60,
			},
			{
				title: "PostgresSQL",
				percentage: 55,
			},
		],
		[
			{
				title: "VSCode",
				percentage: 90,
			},
			{
				title: "GitHub",
				percentage: 90,
			},
			{
				title: "Git",
				percentage: 85,
			},
			{
				title: "Azure DevOps",
				percentage: 80,
			},
			{
				title: "Postman",
				percentage: 75,
			},
			{
				title: "MS Office",
				percentage: 75,
			},
		],
	];

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>
								Here are all of the technologies I've worked with.
								<br />I have developed these skills through academic courses,
								internships, and personal projects.
							</p>
							<Tab.Container id="skills-tabs" defaultActiveKey={0}>
								<Nav
									variant="pills"
									className="nav-pills mb-5 flex flex-column flex-lg-row justify-content-center align-items-center"
									id="pills-tab"
									onClick={() => setClicked(!clicked)}
								>
									<Nav.Item>
										<Nav.Link eventKey={0}>Languages</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey={1}>Frameworks</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey={2}>Libraries</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey={3}>Database</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey={4}>Tools</Nav.Link>
									</Nav.Item>
								</Nav>
								<Tab.Content>
									{skills.map((skill, i) => (
										<Tab.Pane key={i} eventKey={i}>
											<Carousel
												responsive={responsive}
												className="owl-carousel owl-theme skill-slider"
											>
												{skill.map(({ title, percentage }, i) => (
													<div key={i} className="item">
														<SkillChart percentage={percentage} />
														<h5>{title}</h5>
													</div>
												))}
											</Carousel>
										</Tab.Pane>
									))}
								</Tab.Content>
							</Tab.Container>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="" />
		</section>
	);
};
