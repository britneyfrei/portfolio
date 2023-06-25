import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	// eslint-disable-next-line no-unused-vars
	const [index, setIndex] = useState(1);
	const toRotate = [
		"Web Developer",
		"Full-Stack Developer",
		"Front-End Developer",
		"Software Developer",
		"Software Engineer",
	];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} lg={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div>
									<span className="tagline">Welcome to my Portfolio</span>
									<h1>
										{`Hi! I'm Britney,`}{" "}
										<div className="txt-rotate">
											{isVisible && <span className="wrap">{text}</span>}
										</div>
									</h1>
									<p>
										I am a results-driven and detail-oriented Computer Science
										graduate with experience in web development seeking an
										entry-level front-end or full-stack developer position.
									</p>
									<button
										onClick={(e) => {
											e.preventDefault();
											window.location.href = "#connect";
										}}
									>
										Let’s Connect <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} lg={6} xl={5}>
						<div>
							<img src={headerImg} alt="Header" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
