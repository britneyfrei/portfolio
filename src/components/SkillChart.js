import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const SkillChart = ({ percentage }) => {
	const getGradient = (chart) => {
		const gradientSegment = chart.createLinearGradient(0, 0, 0, 100);
		gradientSegment.addColorStop(0, "#AA367C");
		gradientSegment.addColorStop(1, "#4A2FBD");
		return gradientSegment;
	};
	const config = {
		data: {
			datasets: [
				{
					data: [100 - percentage, percentage],
					backgroundColor: (context) => {
						const chart = context.chart.ctx;
						if (context.dataIndex === 1) {
							return getGradient(chart);
						}
						return "#111111";
					},
					borderRadius: 50,
				},
			],
		},
		options: {
			cutout: "75%",
			elements: {
				arc: {
					borderWidth: 0,
				},
			},
		},
	};
	return (
		<div className="chart">
			<Doughnut {...config} />
			<div className="percent">
				<h5>{percentage}%</h5>
			</div>
		</div>
	);
};

export default SkillChart;
