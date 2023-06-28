import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, demo, code, src }) => {
	return (
		<Col size={12} md={6} lg={4}>
			<div className="proj-imgbx">
				<img src={src} alt="" />
				<div className="proj-txtx">
					<div className="proj-info">
						<h4>{title}</h4>
						<div>{description}</div>
						<i>{tech}</i>
					</div>
					<div className="proj-links pt-5 pt-md-2 pt-xl-4">
						<a href={demo} target="_blank" rel="noreferrer noopener">
							<h6>DEMO</h6>
						</a>
						<a href={code} target="_blank" rel="noreferrer noopener">
							<h6>CODE</h6>
						</a>
					</div>
				</div>
			</div>
		</Col>
	);
};
