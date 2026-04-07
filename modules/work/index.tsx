export default function WorkModule() {
	const workExperiences = [
		{
			company: "OUR DECO SDN BHD",
			period: "January 2020 - June 2022",
			position: "Web Development",
			duties: [
				"Responsible for web frontend development using HTML.",
				"Responsible for backend development and ensuring performance is optimized.",
			],
		},
		{
			company: "KK Mart",
			period: "November 2023 - January 2024",
			position: "Shop Assistant",
			duties: [
				"Assisted customers in finding products and providing information on product features, prices, and promotions.",
			],
		},
		{
			company: "Cubixi SDN BHD",
			period: "January 2025 - June 2025",
			position: "Internship Software Developer",
			duties: [
				"Responsible for web and mobile frontend development using HTML.",
				"Responsible for backend development and ensuring system performance is optimized.",
				"Responsible for software testing to ensure developed features do not contain bugs.",
			],
		},
	];

	return (
		<section className="w-full xl:w-3/4 space-y-6 text-slate-100">
			<header className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<p className="text-xs uppercase tracking-widest text-slate-400">Experience</p>
				<h1 className="mt-2 text-2xl font-bold leading-tight text-white">Work Experience</h1>
			</header>

			<div className="space-y-4">
				{workExperiences.map((experience) => (
					<article
						key={`${experience.company}-${experience.period}`}
						className="rounded-2xl border border-slate-800 bg-[#121922] p-5"
					>
						<div className="flex flex-wrap items-start justify-between gap-2">
							<h2 className="text-lg font-semibold text-white">{experience.company}</h2>
							<span className="text-xs font-medium uppercase tracking-wider text-slate-400">
								{experience.period}
							</span>
						</div>
						<p className="mt-1 text-sm font-medium text-cyan-300">{experience.position}</p>
						<ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
							{experience.duties.map((duty) => (
								<li key={duty}>{duty}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}
