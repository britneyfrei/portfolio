import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, FileEarmarkPerson } from "react-bootstrap-icons";
import Resume from "../assets/Resume.pdf";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col
						size={12}
						sm={6}
						className="text-center text-sm-start pb-3 pb-sm-0"
					>
						<h2 className="logo">BRITNEY FREI</h2>
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
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
						<p>Copyright 2023. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
