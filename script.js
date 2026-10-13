/* =========================================================
   Bhumika Agrawal: cybersecurity portfolio
   ---------------------------------------------------------
   HOW TO EDIT
   - Project content lives in the PROJECTS list below.
   - Leave a link as "" to show a labelled placeholder.
   - To show screenshots, put images in an "images" folder in
     your repository and list their paths in "screenshots",
     for example: ["images/pyguard-1.png", "images/pyguard-2.png"]
   ========================================================= */

const PROJECTS = [
  {
    id: "pyguard-scanner",
    title: "PyGuard Scanner",
    category: "Malware detection",
    tone: "#f5a524",
    summary:
      "A lightweight Python scanner that flags malicious files using local hash signatures and VirusTotal lookups.",
    highlights: [
      "Scans single files or whole folders recursively",
      "Local signatures plus VirusTotal for a second opinion",
      "Quarantines detections and logs every scan"
    ],
    what:
      "A command-line malware scanner written in Python. It hashes files, compares the hashes with a local signature database, and can ask VirusTotal for additional analysis.",
    why:
      "I wanted to understand how antivirus tools identify known malware at a basic level. Building one meant working through hashing, signature matching, API lookups and what to do safely once something is detected.",
    objective:
      "Create a lightweight Python-based malware scanner that detects malicious files using both local hash signatures and VirusTotal integration.",
    tools: ["Python 3", "hashlib", "requests", "python-dotenv", "JSON", "VirusTotal API"],
    did: [
      "Generated MD5 and SHA-256 hashes for scanned files",
      "Checked hashes against a local, JSON-based malware signature list",
      "Integrated the VirusTotal API for additional analysis of file hashes",
      "Implemented recursive folder scanning so a whole directory can be checked in one run",
      "Added automatic quarantine for files flagged as malicious, and logging of scan results",
      "Kept the API key out of the source code by loading it from environment variables"
    ],
    skills: [
      "Python",
      "Malware detection concepts",
      "File hashing",
      "API integration",
      "Environment variables",
      "JSON-based signatures",
      "Basic security automation"
    ],
    outcome: [
      "Scan individual files",
      "Scan entire folders recursively",
      "Generate MD5 and SHA-256 hashes",
      "Local malware signature detection",
      "VirusTotal API integration",
      "Automatic quarantine for detected files",
      "Logging of scan results",
      "Environment-variable based API key management"
    ],
    relevance:
      "Checking a file hash against known-bad lists and threat intelligence is a routine first step in endpoint protection and SOC triage. Keeping secrets such as API keys out of source code is basic good practice in any security tooling. PyGuard is a small-scale version of that workflow, not a replacement for a full antivirus product.",
    evidence: {
      github: "https://github.com/bhuuumiika/PyGuard-Scanner",
      linkedin: "https://lnkd.in/p/dPH-U_tt",
    },

  {
    id: "packetshield",
    title: "PacketShield",
    category: "Network monitoring",
    tone: "#6db6f2",
    summary:
      "A real-time terminal tool that captures network traffic and detects ARP spoofing on a local network.",
    highlights: [
      "Flags conflicting IP-to-MAC mappings and gateway changes",
      "Live dashboard with pause, record-to-PCAP and clear controls",
      "Writes threat events to a local alert log"
    ],
    what:
      "An advanced packet sniffer and ARP spoofing detector: a real-time command-line network security monitor written in Python. It uses Scapy to parse and sniff packets and Rich to draw a terminal dashboard, analysing TCP, UDP, ICMP and ARP traffic.",
    why:
      "ARP spoofing is a classic man-in-the-middle technique on local networks. I built PacketShield to see what it looks like at packet level and to work out how it can be detected reliably.",
    objective:
      "Create a real-time command-line network security monitor that captures and analyses network packets and dynamically watches the local area network for ARP spoofing and poisoning attacks.",
    tools: ["Python", "Scapy", "Rich", "PCAP", "Logging"],
    did: [
      "Built a monitor that parses traffic in real time: Ethernet headers, IPv4 mappings, TCP/UDP ports, TCP flags and ICMP types",
      "Wrote the detection logic for ARP spoofing, suspicious ARP replies and MAC address anomalies",
      "Added a duplicate-MAC check for devices claiming several different IP addresses",
      "Added active gateway monitoring that periodically verifies the default gateway is alive and not spoofed",
      "Designed keyboard controls: pause or resume capture, toggle PCAP recording, clear state, and quit safely",
      "Logged threat events to packetshield_alerts.log for later review"
    ],
    skills: [
      "Packet sniffing",
      "Network traffic analysis",
      "ARP and MITM attack detection",
      "Scapy",
      "Logging",
      "Real-time security monitoring"
    ],
    outcome: [
      "Real-time traffic parsing of Ethernet, IPv4, TCP, UDP and ICMP",
      "ARP poisoning (MITM) detection when an IP maps to conflicting MACs or the gateway MAC changes",
      "Unsolicited ARP reply detection",
      "Duplicate MAC scanner",
      "Interactive controls: S pause/resume, P record PCAP, C clear, Q quit",
      "Active gateway monitoring with unicast checks",
      "Local alert logging to packetshield_alerts.log"
    ],
    relevance:
      "Local networks trust ARP by default, so a forged reply can quietly route someone's traffic through an attacker. Watching for conflicting IP-to-MAC bindings and gateway changes is the same reasoning network monitoring and intrusion detection tools use, and writing alerts to a log mirrors how a SOC collects events for review.",
    evidence: {
      github: "https://github.com/bhuuumiika/PacketShield",
      linkedin: "https://lnkd.in/p/dZ4tXh2p"
    },

  {
    id: "phishguard",
    title: "PhishGuard",
    category: "Security awareness",
    tone: "#6fd3a8",
    summary:
      "A web app that teaches people to spot phishing by scoring URLs and comparing real sites with fake ones.",
    highlights: [
      "0 to 100 phishing-risk score with the reasons behind it",
      "Side-by-side real and look-alike websites",
      "Scored quiz and a pytest-tested heuristics engine"
    ],
    what:
      "A cybersecurity awareness web application that helps users learn to identify phishing websites through interactive, hands-on practice. It analyses URLs with security heuristics and explains what it finds.",
    why:
      "Phishing is one of the most common ways attackers get in, and people learn to spot it best by practising. I wanted a tool that explains why a link looks suspicious instead of only giving a verdict.",
    objective:
      "Create a cybersecurity awareness web application that helps users learn to identify phishing websites through interactive, hands-on practice.",
    tools: ["Python", "FastAPI", "React", "SQLAlchemy", "SQLite", "pytest"],
    did: [
      "Built a URL heuristics checker that returns a 0 to 100 risk score with specific reasons",
      "Implemented checks for missing HTTPS, IP-address hosts, typosquatted brand names, suspicious TLDs, URL shorteners and urgency keywords",
      "Created side-by-side comparisons of genuine sites and simulated look-alikes, explaining what gives each fake away",
      "Wrote a short scored quiz with an explanation for every answer",
      "Built the backend API and data layer with FastAPI, SQLAlchemy and SQLite, logging every URL check and quiz attempt",
      "Wrote an automated pytest suite for the heuristics engine and the quiz scoring"
    ],
    skills: [
      "Phishing detection",
      "URL analysis",
      "FastAPI",
      "React",
      "SQLite",
      "API development",
      "Security-focused testing with pytest"
    ],
    outcome: [
      "URL Heuristics Checker with a 0 to 100 phishing risk score and reasons",
      "Phishing vs. real website demonstrator with explanations",
      "Phishing awareness quiz with explanations for every answer",
      "Backend API and data layer logging URL checks and quiz attempts",
      "Automated tests covering the heuristics engine and quiz scoring"
    ],
    relevance:
      "Phishing is a common way attackers gain initial access, and the same signals PhishGuard checks (look-alike domains, raw IP hosts, shorteners, odd TLDs, urgent wording) feed email filters and security-awareness training. Heuristics can miss new tricks and flag safe sites, so the app is built as a teaching aid, not a replacement for professional filtering.",
    evidence: {
      github: "https://github.com/bhuuumiika/PhisGuard",
      linkedin: "https://lnkd.in/p/dxxDaS8R",
     
  }
];

/* =========================================================
   Everything below builds the page. Edit with care.
   ========================================================= */

(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const listItems = (items) => items.map((i) => `<li>${escapeHtml(i)}</li>`).join("");
  const tagList = (items) =>
    `<ul class="tag-row">${items.map((i) => `<li class="tag">${escapeHtml(i)}</li>`).join("")}</ul>`;

  /* ---------- Project cards ---------- */
  const grid = $("#project-grid");

  const renderCards = () => {
    grid.innerHTML = PROJECTS.map(
      (p) => `
      <article class="project-card" style="--tone:${p.tone}">
        <span class="project-category">${escapeHtml(p.category)}</span>
        <h3>${escapeHtml(p.title)}</h3>
        <p class="project-summary">${escapeHtml(p.summary)}</p>
        <ul class="project-highlights">${listItems(p.highlights)}</ul>
        ${tagList(p.tools.slice(0, 4))}
        <button class="card-open" type="button" data-project="${p.id}" aria-label="Open case study: ${escapeHtml(p.title)}">Open case study</button>
      </article>`
    ).join("");
  };

  /* ---------- Project detail view ---------- */
  const dialog = $("#project-dialog");
  const dialogBody = $("#dialog-body");
  let lastOpener = null;

  const evidenceButton = (label, url) =>
    url
      ? `<a class="btn btn-ghost btn-sm" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
      : `<span class="btn btn-ghost btn-sm is-placeholder" aria-disabled="true">${label} <span class="ph-tag">add link</span></span>`;

  const renderShots = (p) =>
    p.screenshots && p.screenshots.length
      ? `<div class="shots">${p.screenshots
          .map((src, i) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(p.title)} screenshot ${i + 1}" loading="lazy">`)
          .join("")}</div>`
      : `<div class="shot-placeholder"><p>Screenshot placeholder.<br>Add images to an <code>images</code> folder and list them under <code>screenshots</code> for this project in script.js.</p></div>`;

  const openProject = (id, opener) => {
    const p = PROJECTS.find((item) => item.id === id);
    if (!p) return;
    lastOpener = opener || null;

    dialog.style.setProperty("--tone", p.tone);
    $("#dialog-category").textContent = p.category;
    $("#dialog-title").textContent = p.title;

    dialogBody.innerHTML = `
      <p class="dialog-lede">${escapeHtml(p.summary)}</p>

      <section class="detail">
        <h3>What was the project?</h3>
        <p>${escapeHtml(p.what)}</p>
      </section>

      <div class="detail-pair">
        <section class="detail">
          <h3>Why I built it</h3>
          <p>${escapeHtml(p.why)}</p>
        </section>
        <section class="detail">
          <h3>Objective</h3>
          <p>${escapeHtml(p.objective)}</p>
        </section>
      </div>

      <section class="detail">
        <h3>Tools and technologies</h3>
        ${tagList(p.tools)}
      </section>

      <section class="detail">
        <h3>What I did</h3>
        <ul class="bullets">${listItems(p.did)}</ul>
      </section>

      <section class="detail">
        <h3>Skills I developed</h3>
        ${tagList(p.skills)}
      </section>

      <section class="detail">
        <h3>Outcome</h3>
        <ul class="bullets">${listItems(p.outcome)}</ul>
      </section>

      <section class="detail">
        <h3>Real-world relevance</h3>
        <p>${escapeHtml(p.relevance)}</p>
      </section>

      <section class="detail">
        <h3>Evidence</h3>
        <div class="evidence-row">
          ${evidenceButton("GitHub repository", p.evidence.github)}
          ${evidenceButton("LinkedIn post", p.evidence.linkedin)}
          ${evidenceButton("Write-up", p.evidence.writeup)}
          ${evidenceButton("Demo", p.evidence.demo)}
          ${evidenceButton("Technical documentation", p.evidence.docs)}
        </div>
        ${renderShots(p)}
      </section>`;

    dialog.scrollTop = 0;
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");
    history.replaceState(null, "", `#project-${p.id}`);
  };

  const closeProject = () => {
    if (dialog.open) dialog.close();
  };

  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    history.replaceState(null, "", "#projects");
    if (lastOpener) lastOpener.focus();
  });

  // clicking the dark backdrop closes the view
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });
  $("#dialog-close").addEventListener("click", closeProject);

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project]");
    if (button) openProject(button.dataset.project, button);
  });

  /* ---------- Mobile navigation ---------- */
  const navToggle = $(".nav-toggle");
  const nav = $("#site-nav");

  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Highlight current section in the nav ---------- */
  const navLinks = [...nav.querySelectorAll("a")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) =>
              link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const section = document.getElementById(link.getAttribute("href").slice(1));
      if (section) observer.observe(section);
    });
  }

  /* ---------- Copy email ---------- */
  const copyButton = $("#copy-email");
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Copied";
    } catch (err) {
      copyButton.textContent = "Press Ctrl+C to copy: " + email;
      const range = document.createRange();
      range.selectNodeContents(copyButton);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    setTimeout(() => (copyButton.textContent = "Copy address"), 2500);
  });

  /* ---------- Hero terminal (plays once) ---------- */
  // Illustrative output only. Addresses use the reserved documentation range 192.0.2.0/24.
  const SCRIPT = [
    { type: "cmd", text: "whoami" },
    { type: "out", cls: "t-muted", text: "bhumika-agrawal  |  cybersecurity enthusiast" },
    { type: "cmd", text: "ls projects/" },
    { type: "out", cls: "t-info", text: "pyguard-scanner   packetshield   phishguard" },
    { type: "cmd", text: "python packetshield.py --demo" },
    { type: "out", cls: "t-muted", text: "[sample output, not a real capture]" },
    { type: "out", cls: "t-info", text: "[INFO] capturing on eth0  TCP UDP ICMP ARP" },
    { type: "out", cls: "t-warn", text: "[WARN] unsolicited ARP reply from 192.0.2.23" },
    { type: "out", cls: "t-crit", text: "[CRIT] 192.0.2.1 now maps to a different MAC: possible ARP spoofing" },
    { type: "out", cls: "t-muted", text: "alert written to packetshield_alerts.log" }
  ];

  const term = $("#terminal-body");

  const makeLine = (cls) => {
    const line = document.createElement("div");
    line.className = "t-line " + (cls || "");
    term.appendChild(line);
    return line;
  };

  const promptHtml = '<span class="t-prompt">bhumika@portfolio:~$ </span>';

  const playTerminal = () => {
    if (reduceMotion) {
      SCRIPT.forEach((step) => {
        const line = makeLine(step.cls);
        line.innerHTML = step.type === "cmd" ? promptHtml + escapeHtml(step.text) : escapeHtml(step.text);
      });
      return;
    }

    const cursor = document.createElement("span");
    cursor.className = "t-cursor";
    let index = 0;

    const nextStep = () => {
      if (index >= SCRIPT.length) return; // leave the cursor blinking at the end
      const step = SCRIPT[index++];

      if (step.type === "out") {
        const line = makeLine(step.cls);
        line.textContent = step.text;
        term.appendChild(cursor);
        setTimeout(nextStep, 320);
        return;
      }

      const line = makeLine();
      line.innerHTML = promptHtml;
      const typed = document.createElement("span");
      line.appendChild(typed);
      line.appendChild(cursor);
      let i = 0;
      const typeChar = () => {
        typed.textContent = step.text.slice(0, ++i);
        if (i < step.text.length) setTimeout(typeChar, 38);
        else setTimeout(nextStep, 380);
      };
      setTimeout(typeChar, 300);
    };

    nextStep();
  };

  /* ---------- Footer year ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Start ---------- */
  renderCards();
  playTerminal();

  // open a project directly from a link such as  yoursite/#project-packetshield
  const initialHash = window.location.hash;
  if (initialHash.startsWith("#project-")) {
    openProject(initialHash.replace("#project-", ""), null);
  }
})();
