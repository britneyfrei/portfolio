import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Linkedin, Github, FileEarmarkPerson } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import Resume from "../assets/Resume.pdf";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Router>
			<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
				<Container>
					<Navbar.Brand href="/">
						<h2 className="logo">BRITNEY FREI</h2>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === "home" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={
									activeLink === "skills" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skills")}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={
									activeLink === "projects"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("projects")}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a
									href="https://www.linkedin.com/in/britney-frei-01704822a/"
									target="_blank"
									rel="noreferrer noopener"
									title="LinkedIn"
								>
									<Linkedin />
								</a>
								<a
									href="https://github.com/britneyfrei"
									target="_blank"
									rel="noreferrer noopener"
									title="GitHub"
								>
									<Github />
								</a>
								<a
									href={Resume}
									target="_blank"
									rel="noreferrer noopener"
									title="Resume"
								>
									<FileEarmarkPerson />
								</a>
							</div>
							<HashLink to="#connect">
								<button className="vvd">
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
