import {
	Brain,
	GraduationCap,
	Languages,
	Lightbulb,
	Mail,
	MessageCircle,
	Monitor,
	Target,
	Wrench,
	type LucideIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import profileData, { type SkillItem } from "../../utils/profileData";

function SectionTitle({
	title,
	Icon,
}: {
	title: string;
	Icon: LucideIcon;
}) {
	return (
		<div className="flex items-center gap-2">
			<Icon className="h-4 w-4 text-slate-400" />
			<h3 className="text-base font-semibold text-white">{title}</h3>
		</div>
	);
}

function SkillList({ items }: { items: SkillItem[] }) {
	return (
		<ul className="mt-4 space-y-3">
			{items.map((item) => (
				<li key={item.name}>
					<div className="mb-1 flex items-center justify-between text-sm text-slate-300">
						<span>{item.name}</span>
						<span className="text-xs text-slate-400">{item.level}%</span>
					</div>
					<progress
						className="h-2 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-slate-800 [&::-webkit-progress-value]:bg-cyan-400 [&::-moz-progress-bar]:bg-cyan-400"
						value={item.level}
						max={100}
					/>
				</li>
			))}
		</ul>
	);
}

export default function ProfileModule() {
	return (
		<section className="w-full xl:w-3/4 space-y-6 text-slate-100">
			<section className="grid gap-4 md:grid-cols-4">
				<header className="rounded-2xl border border-slate-800 bg-[#121922] p-5 md:col-span-3">
					<p className="text-xs uppercase tracking-widest text-slate-400">Full Name</p>
					<h1 className="mt-2 text-2xl font-bold leading-tight text-white">
						{profileData.fullName}
					</h1>
					<a
						href="https://github.com/Ra2iqqq"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-2 inline-flex items-center gap-2 text-sm text-cyan-300 underline-offset-4 hover:underline"
					>
						<FaGithub className="h-4 w-4" />
						github.com/Ra2iqqq
					</a>
				</header>

				<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5 md:col-span-1">
					<h2 className="text-base font-semibold text-white">Get In Touch</h2>
					<div className="mt-3 grid gap-2">
						<a
							href="https://wa.me/60148353092"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-700"
						>
							<MessageCircle className="h-3.5 w-3.5" />
							WhatsApp
						</a>
						<a
							href="mailto:muhammadraziq1304@gmail.com"
							className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-700"
						>
							<Mail className="h-3.5 w-3.5" />
							Email
						</a>
					</div>
				</section>
			</section>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<Target className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">About Me</h2>
				</div>
				<p className="mt-3 leading-7 text-slate-300">{profileData.aboutMe}</p>
			</section>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<Lightbulb className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">Interests</h2>
				</div>
				<ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
					{profileData.interests.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</section>

			<section className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
				<div className="flex items-center gap-2">
					<GraduationCap className="h-4 w-4 text-slate-400" />
					<h2 className="text-lg font-semibold text-white">Education Level</h2>
				</div>
				<div className="mt-4 space-y-3">
					{profileData.educationLevels.map((education) => (
						<article
							key={`${education.institution}-${education.period}`}
							className="rounded-xl border border-slate-800 bg-slate-900/40 p-3"
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

			<section className="grid gap-4 md:grid-cols-2">
				<div className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
					<SectionTitle title="Soft Skills" Icon={Brain} />
					<SkillList items={profileData.softSkills} />
				</div>

				<div className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
					<SectionTitle title="Computer Skills" Icon={Monitor} />
					<SkillList items={profileData.computerSkills} />
				</div>

				<div className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
					<SectionTitle title="Technical Skills" Icon={Wrench} />
					<SkillList items={profileData.technicalSkills} />
				</div>

				<div className="rounded-2xl border border-slate-800 bg-[#121922] p-5">
					<SectionTitle title="Language" Icon={Languages} />
					<SkillList items={profileData.languages} />
				</div>
			</section>
		</section>
	);
}
