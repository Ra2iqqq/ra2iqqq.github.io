import { Award, GraduationCap } from "lucide-react";

export default function CertificationModule() {
	const certifications = [
		"Jan 2023 - IT Essentials Cisco Certificate",
		"Feb 2017 - SCHOOL OF JUNIOR ENGINEERS (SOJE)",
		"Aug 2020 - READ Programme",
		"Dec 2023 - PRINT 23 (Live Event)",
	];

	const educationLevels = [
		{
			period: "2021 - 2025",
			institution: "German-Malaysian Institute",
			details: "Diploma in Software Engineering Testing (CGPA: 3.0)",
		},
		{
			period: "2018 - 2021",
			institution: "Sekolah Menengah Sri Al-Amin Bangi",
			details: "Sijil Pelajaran Malaysia (4BT, 3C, 1D, 1E)",
		},
	];

	return (
		<section className="w-full xl:w-3/4 space-y-6 text-slate-100">
			<header className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<p className="text-xs uppercase tracking-widest text-slate-400">Credentials</p>
				<h1 className="mt-2 text-2xl font-bold leading-tight text-white">Certification</h1>
			</header>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<Award className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">Certification</h2>
				</div>
				<ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
					{certifications.map((certification) => (
						<li key={certification}>{certification}</li>
					))}
				</ul>
			</section>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<GraduationCap className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">Education Level</h2>
				</div>
				<div className="mt-4 space-y-3">
					{educationLevels.map((education) => (
						<article
							key={`${education.institution}-${education.period}`}
							className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
						>
							<div className="flex flex-wrap items-start justify-between gap-1">
								<p className="font-semibold text-white">{education.institution}</p>
								<span className="text-xs uppercase tracking-wider text-slate-400">
									{education.period}
								</span>
							</div>
							<p className="mt-1 text-sm text-slate-300">{education.details}</p>
						</article>
					))}
				</div>
			</section>
		</section>
	);
}
