import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col size={12} lg={6}>
						<img src={contactImg} alt="Contact Us" />
					</Col>
					<Col size={12} lg={6}>
						<iframe
							title="form"
							src="https://docs.google.com/forms/d/e/1FAIpQLSe80DPwWAky8QK3oy2JloSQfCetCxFiQLRCGbB06EI7rFadPw/viewform?embedded=true"
							width="100%"
							height="600"
						>
							Loading…
						</iframe>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
