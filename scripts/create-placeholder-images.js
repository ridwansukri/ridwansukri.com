// Script to create placeholder images for projects
// You can run this to generate placeholder images or replace with real screenshots

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const placeholderSVG = (text, color = "#3B82F6") => `
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="${color}" opacity="0.1"/>
  <rect x="1" y="1" width="798" height="448" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="10,5" opacity="0.3"/>
  <text x="400" y="225" font-family="Arial, sans-serif" font-size="24" fill="${color}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
  <text x="400" y="260" font-family="Arial, sans-serif" font-size="14" fill="${color}" opacity="0.7" text-anchor="middle">
    Screenshot Coming Soon
  </text>
</svg>
`;

const projects = [
	{
		name: "aws-infrastructure.png",
		text: "AWS Infrastructure",
		color: "#FF9900",
	},
	{ name: "k8s-pipeline.png", text: "Kubernetes Pipeline", color: "#326CE5" },
	{ name: "laravel-aws.png", text: "Laravel on AWS", color: "#FF2D20" },
	{
		name: "security-monitoring.png",
		text: "Security Monitoring",
		color: "#00D4AA",
	},
	{
		name: "video-transcription.png",
		text: "Video Transcription",
		color: "#9333EA",
	},
	{ name: "cost-optimizer.png", text: "Cost Optimizer", color: "#10B981" },
];

const outputDir = path.join(__dirname, "../public/assets/images/projects");

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

// Generate SVG files
for (const project of projects) {
	const svgContent = placeholderSVG(project.text, project.color);
	const filePath = path.join(outputDir, project.name.replace(".png", ".svg"));

	fs.writeFileSync(filePath, svgContent);
	console.log(`✅ Created: ${project.name.replace(".png", ".svg")}`);
}

console.log(
	"\n📌 Note: These are placeholder SVGs. Replace with actual screenshots for production.",
);
console.log(
	"📌 You may need to update src/collections/projects.json to use .svg extension",
);
