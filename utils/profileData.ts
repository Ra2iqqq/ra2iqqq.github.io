export type SkillItem = {
  name: string;
  level: number;
};

export type ProfileData = {
  fullName: string;
  aboutMe: string;
  interests: string[];
  educationLevels: Array<{
    period: string;
    institution: string;
    details: string;
  }>;
  softSkills: SkillItem[];
  computerSkills: SkillItem[];
  technicalSkills: SkillItem[];
  languages: SkillItem[];
};

const profileData: ProfileData = {
  fullName: "MUHAMMAD RAZIQ BIN MOHAMMAD SUHAINY",
  aboutMe:
    "Dedicated and proactive student with a strong background in software engineering testing, seeking opportunities to apply technical skills and contribute to dynamic teams while continuously learning and improving professionally.",
  interests: [
    "Software testing and quality assurance",
    "Learning new technologies",
    "Building web applications",
    "Team collaboration and problem solving",
  ],
  educationLevels: [
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
  ],
  softSkills: [
    { name: "Problem Solving", level: 88 },
    { name: "Adaptability", level: 86 },
    { name: "Teamwork", level: 90 },
    { name: "Leadership", level: 80 },
  ],
  computerSkills: [
    { name: "Microsoft Office 365", level: 88 },
    { name: "Code::Blocks", level: 78 },
    { name: "Visual Studio Code", level: 92 },
  ],
  technicalSkills: [
    { name: "C", level: 76 },
    { name: "JavaScript", level: 82 },
    { name: "SQL", level: 78 },
    { name: "HTML", level: 85 },
    { name: "Linux Operating System", level: 72 },
    { name: "Software Testing", level: 90 },
  ],
  languages: [
    { name: "Malay", level: 95 },
    { name: "English", level: 82 },
  ],
};

export default profileData;
