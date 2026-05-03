import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PortfolioSlider from "@/app/components/portfolio-slider";
import { projects } from "../data";

type PortfolioPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

async function getProjectImages(slug: string) {
	const imageDirectory = path.join(process.cwd(), "public", "portfolio", slug);

	try {
		const files = await fs.readdir(imageDirectory);

		return files
			.filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
			.sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
			.map((file) => `/portfolio/${slug}/${file}`);
	} catch {
		return [];
	}
}

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Portfolio Project Not Found | Asar Dev Labs",
		};
	}

	return {
		title: `${project.name} | Asar Dev Labs Portfolio`,
		description: project.fullDesc,
	};
}

export default async function PortfolioItemPage({ params }: PortfolioPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) { notFound(); }

	const images = await getProjectImages(slug);

	return (
		<div className="flex flex-col w-full items-center justify-center flex-grow">
			<Header />
			<main className="flex flex-col w-full max-w-6xl px-4 pb-20 pt-20 flex-grow gap-10">
				<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
					<div className="flex flex-col gap-4 max-w-3xl">
						<Link href="/portfolio" className="inline-flex w-fit items-center gap-2 text-sm text-slate-300 hover:text-green-300 transition-colors duration-300">
							<ArrowLeft size={16} strokeWidth={1.5} />
							Back to portfolio
						</Link>
						<div className="space-y-4">
							<h1 className="text-5xl font-bold md:text-6xl">{project.name}</h1>
							<p className="text-lg font-semibold text-slate-300 md:text-xl">{project.shortDesc}</p>
							<p className="max-w-3xl text-base leading-8 text-slate-200 md:text-lg">{project.fullDesc}</p>
						</div>
					</div>

					<Link href={project.link} target="_blank"
						className="inline-flex flex-shrink-0 items-center self-end justify-center gap-2 btn text-sm"
					>
						Visit live site
						<ExternalLink size={16} strokeWidth={1.5} />
					</Link>
				</div>

				<PortfolioSlider images={images} projectName={project.name} />

				{project.features && project.features.length > 0 && (
					<section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
						<h2 className="text-2xl font-semibold">Features</h2>
						<div className="mt-5 flex flex-wrap gap-3">
							{project.features.map((feature) => (
								<span
									key={feature}
									className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-200"
								>
									{feature}
								</span>
							))}
						</div>
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
}