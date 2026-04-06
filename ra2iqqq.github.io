<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Raziq | Portfolio Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Syne:wght@500;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #f8f3ea;
      --bg-accent: #efe1cb;
      --ink: #1f1b16;
      --ink-soft: #5e5347;
      --panel: #fffaf2;
      --line: #dfcdb1;
      --brand: #ca5a24;
      --brand-dark: #8f3f1a;
      --ok: #2d6a4f;
      --shadow: 0 12px 28px rgba(39, 23, 9, 0.11);
      --radius: 18px;
    }

    * { box-sizing: border-box; }

    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      color: var(--ink);
      background:
        radial-gradient(circle at 15% 12%, rgba(202, 90, 36, 0.2), transparent 36%),
        radial-gradient(circle at 83% 4%, rgba(45, 106, 79, 0.16), transparent 29%),
        linear-gradient(160deg, var(--bg) 0%, #f4ecde 45%, var(--bg-accent) 100%);
      font-family: "Manrope", sans-serif;
      line-height: 1.65;
      scroll-behavior: smooth;
    }

    .grain::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -1;
      opacity: 0.16;
      background-image: radial-gradient(rgba(31, 27, 22, 0.26) 0.45px, transparent 0.45px);
      background-size: 3px 3px;
    }

    .wrap {
      width: min(1080px, 92vw);
      margin: 0 auto;
      padding: 30px 0 64px;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: rgba(255, 250, 242, 0.8);
      backdrop-filter: blur(6px);
      padding: 8px 16px;
      position: sticky;
      top: 12px;
      z-index: 10;
      animation: slideDown 0.7s ease both;
    }

    .tag {
      letter-spacing: 0.08em;
      font-size: 0.74rem;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--brand-dark);
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 6px 10px;
      background: #fff;
    }

    .nav {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    .nav a {
      text-decoration: none;
      font-size: 0.92rem;
      color: var(--ink-soft);
      font-weight: 700;
      transition: color 0.2s ease;
    }

    .nav a:hover {
      color: var(--brand);
    }

    .hero {
      margin-top: 28px;
      display: grid;
      gap: 24px;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: stretch;
    }

    .card {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--panel);
      box-shadow: var(--shadow);
      padding: 26px;
      animation: fadeUp 0.85s ease both;
    }

    .hero h1 {
      font-family: "Syne", sans-serif;
      margin: 0;
      font-size: clamp(2rem, 4.5vw, 3.8rem);
      line-height: 1.04;
      letter-spacing: -0.03em;
    }

    .hero h1 span { color: var(--brand); }

    .lead {
      margin: 14px 0 0;
      color: var(--ink-soft);
      max-width: 58ch;
    }

    .cta {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 22px;
    }

    .btn {
      border-radius: 999px;
      padding: 11px 16px;
      font-weight: 800;
      font-size: 0.9rem;
      text-decoration: none;
      border: 1px solid transparent;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn.primary {
      color: #fff;
      background: linear-gradient(135deg, var(--brand) 0%, #dd7a3b 100%);
      box-shadow: 0 8px 20px rgba(202, 90, 36, 0.26);
    }

    .btn.ghost {
      border-color: var(--line);
      color: var(--ink);
      background: #fff;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .focus {
      display: grid;
      gap: 12px;
      align-content: start;
    }

    .focus h3 {
      margin: 0;
      font-family: "Syne", sans-serif;
      letter-spacing: -0.02em;
    }

    .focus-item {
      border: 1px dashed var(--line);
      border-radius: 14px;
      padding: 12px;
      background: #fff;
    }

    section {
      margin-top: 24px;
      animation: fadeUp 0.9s ease both;
    }

    .sec-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-bottom: 12px;
      gap: 10px;
    }

    .sec-head h2 {
      margin: 0;
      font-family: "Syne", sans-serif;
      font-size: clamp(1.35rem, 2.9vw, 2.1rem);
      letter-spacing: -0.02em;
    }

    .sec-head p {
      margin: 0;
      color: var(--ink-soft);
      font-size: 0.95rem;
    }

    .grid {
      display: grid;
      gap: 14px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .skill {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 16px;
      background: #fffdf8;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .skill:hover {
      transform: translateY(-3px);
      border-color: #cfaf84;
    }

    .skill h3 {
      margin: 0;
      font-size: 1.02rem;
      font-family: "Syne", sans-serif;
    }

    .skill p {
      margin: 6px 0 0;
      color: var(--ink-soft);
      font-size: 0.93rem;
    }

    .interest-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .pill {
      border: 1px solid var(--line);
      border-radius: 999px;
      text-align: center;
      font-weight: 700;
      padding: 10px;
      background: #fff;
    }

    .contact {
      display: grid;
      gap: 16px;
      grid-template-columns: 1.1fr 0.9fr;
    }

    .links {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 10px;
    }

    .links a {
      text-decoration: none;
      color: var(--brand-dark);
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 8px 12px;
      font-weight: 700;
      background: #fff;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--ok);
      font-weight: 700;
      margin-top: 8px;
      font-size: 0.95rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--ok);
      box-shadow: 0 0 0 0 rgba(45, 106, 79, 0.75);
      animation: pulse 1.4s infinite;
    }

    footer {
      text-align: center;
      color: var(--ink-soft);
      font-size: 0.9rem;
      margin-top: 26px;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(45, 106, 79, 0.75); }
      70% { box-shadow: 0 0 0 10px rgba(45, 106, 79, 0); }
      100% { box-shadow: 0 0 0 0 rgba(45, 106, 79, 0); }
    }

    @media (max-width: 900px) {
      .hero,
      .contact {
        grid-template-columns: 1fr;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .interest-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 560px) {
      .wrap { width: min(94vw, 1080px); }
      .topbar { border-radius: 16px; }
      .interest-list { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body class="grain">
  <div class="wrap">
    <header class="topbar">
      <div class="tag">Raziq Resume</div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#interests">Interests</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="about">
        <article class="card">
          <h1>Hi, I am <span>Raziq</span>.<br />I build practical web solutions.</h1>
          <p class="lead">
            Inspired by the reference profile style, this page highlights a clean personal intro,
            skills, interests, and direct contact links in one responsive portfolio resume.
          </p>
          <div class="cta">
            <a class="btn primary" href="mailto:youremail@example.com">Get In Touch</a>
            <a class="btn ghost" href="#skills">View Skills</a>
          </div>
          <div class="status"><span class="dot"></span>Available for freelance and full-time roles</div>
        </article>
        <aside class="card focus">
          <h3>Current Focus</h3>
          <div class="focus-item">Building fast and accessible frontend interfaces.</div>
          <div class="focus-item">Designing clean backend APIs for real-world apps.</div>
          <div class="focus-item">Improving UI consistency and maintainable code structure.</div>
        </aside>
      </section>

      <section id="skills" class="card">
        <div class="sec-head">
          <h2>Skills</h2>
          <p>Technology areas and tools I use most</p>
        </div>
        <div class="grid">
          <article class="skill">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Tailwind CSS</p>
          </article>
          <article class="skill">
            <h3>Backend Development</h3>
            <p>Node.js, Express, REST API design</p>
          </article>
          <article class="skill">
            <h3>Database Management</h3>
            <p>SQLite, MySQL, PostgreSQL fundamentals</p>
          </article>
          <article class="skill">
            <h3>Version Control</h3>
            <p>Git, GitHub, collaborative workflow</p>
          </article>
          <article class="skill">
            <h3>UI and UX</h3>
            <p>Figma handoff, responsive layout systems, component thinking</p>
          </article>
          <article class="skill">
            <h3>Programming</h3>
            <p>Java, C, JavaScript, problem-solving mindset</p>
          </article>
        </div>
      </section>

      <section id="interests" class="card">
        <div class="sec-head">
          <h2>Interests</h2>
          <p>Things I enjoy outside project delivery</p>
        </div>
        <div class="interest-list">
          <div class="pill">Learning New Tech</div>
          <div class="pill">Video and Image Editing</div>
          <div class="pill">Writing and Sharing Knowledge</div>
          <div class="pill">Open Source Exploration</div>
          <div class="pill">UI Experimentation</div>
          <div class="pill">Productivity Workflows</div>
        </div>
      </section>

      <section id="contact" class="contact">
        <article class="card">
          <div class="sec-head">
            <h2>Contact</h2>
            <p>Fastest way to reach me</p>
          </div>
          <p>Email me for collaboration, portfolio review, or job opportunities.</p>
          <div class="links">
            <a href="mailto:youremail@example.com">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </article>
        <article class="card">
          <div class="sec-head">
            <h2>Quick Info</h2>
            <p>Snapshot</p>
          </div>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Location:</strong> Indonesia</p>
          <p><strong>Preferred Stack:</strong> JavaScript, Node.js, React</p>
          <p><strong>Availability:</strong> Open to opportunities</p>
        </article>
      </section>
    </main>

    <footer>
      <p>Made for local hosting and static deployment.</p>
    </footer>
  </div>
</body>
</html>
