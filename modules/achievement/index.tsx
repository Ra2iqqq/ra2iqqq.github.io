import { Award, FolderKanban } from "lucide-react";

export default function AchievementModule() {
	const achievements = [
		{
			title: "SCHOOL OF JUNIOR ENGINEERS (SOJE)",
			details:
				"The School of Junior Engineers (SoJE) at Universiti Teknologi MARA (UiTM) is an initiative aimed at engaging young minds in engineering concepts through workshops and events.",
		},
		{
			title: "PRINT 23 (Live Event)",
			details:
				"KRS Musleh organized notable programs and events, including training for the International Eco Nature Run (iENR) and the Ujian Kenaikan Pangkat (UKP) for its members, with live-streamed event coverage during the closing ceremony.",
		},
	];

	const projectAchievements = [
		{
			project: "Mental Health System",
			summary:
				"Developed a web-based mental health system to help users track progress and monitor health status, with analytics and reporting features.",
		},
		{
			project: "BidaiDashboard",
			summary:
				"Developed a web dashboard to support staff workflow and event tracking with data-driven views.",
		},
		{
			project: "Measurement Calculation Apps",
			summary:
				"Built an application to simplify and improve calculation accuracy for measurement tasks.",
		},
	];

	return (
		<section className="w-full xl:w-3/4 space-y-6 text-slate-100">
			<header className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<p className="text-xs uppercase tracking-widest text-slate-400">Highlights</p>
				<h1 className="mt-2 text-2xl font-bold leading-tight text-white">Achievement</h1>
			</header>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<Award className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">Achievement</h2>
				</div>
				<div className="mt-4 space-y-3">
					{achievements.map((item) => (
						<article key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
							<h3 className="font-semibold text-white">{item.title}</h3>
							<p className="mt-2 text-sm leading-6 text-slate-300">{item.details}</p>
						</article>
					))}
				</div>
			</section>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<FolderKanban className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">Project Achievement</h2>
				</div>
				<div className="mt-4 space-y-3">
					{projectAchievements.map((item) => (
						<article key={item.project} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
							<h3 className="font-semibold text-white">{item.project}</h3>
							<p className="mt-2 text-sm leading-6 text-slate-300">{item.summary}</p>
						</article>
					))}
				</div>
			</section>
		</section>
	);
}
