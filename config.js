/* =========================================================
   CONFIG.JS: ALL YOUR PERSONAL INFO LIVES HERE.
   Edit the text between the quotes "like this".
   Leave a value as "" (empty) to hide that button.
   ========================================================= */
window.SITE = {
  // Your name as shown on the site
  name: "Alok Yadav",

  // Short letters shown in the avatar when there's no photo
  initials: "AY",

  // Lines the headline types out, one after another
  typing: [
    "I build apps.",
    "I'm learning AI.",
    "I'm starting a company.",
    "I study biotech."
  ],

  // One line under your name
  tagline: "Third-year B.Tech Biotechnology student. Working on AI and building my own startup.",

  // About section. Each item is one paragraph.
  about: [
    "I'm in my third year of B.Tech in Biotechnology. Somewhere along the way I got hooked on writing code, and now most of my free time goes into building things.",
    "Right now I'm working on AI and on a startup of my own. It's early days, so there's not much to say yet, but it's what I think about most.",
    "I like apps that feel clean and get out of your way. Biology and software overlap more than people think, which is why bioinformatics keeps pulling me in."
  ],

  // ---- CONTACT (leave "" to hide) ----
  email: "",       // e.g. "yourname@gmail.com"
  linkedin: "",    // e.g. "https://www.linkedin.com/in/your-profile"
  github: "https://github.com/Alokxyz1112",

  // Your photo. Upload a file named photo.jpg into the assets folder.
  // If it's missing, the "AY" circle shows instead.
  photo: "assets/photo.jpg",

  // ---- WHAT I'M DOING NOW (timeline) ----
  now: [
    { title: "B.Tech Biotechnology", text: "Third year. Genetics, cells, lab work, and the occasional all-nighter." },
    { title: "AI", text: "Learning and building with AI, one small project at a time." },
    { title: "My startup", text: "Early days. Still unnamed. Working on it quietly." },
    { title: "Hobee", text: "My Android app, built in Flutter and shipped on GitHub." }
  ],

  // ---- SKILLS ----
  skills: ["Flutter", "Dart", "Python", "JavaScript", "Android", "Git"],

  // ---- PROJECTS ----
  // featured: true makes the card bigger.
  projects: [
    {
      name: "Hobee",
      featured: true,
      text: "An ad-free Reddit gallery app for Android. Deep Search looks through live posts and archives, a filter hides duplicate photos, and downloads come in original quality. All wrapped in a glass UI.",
      tags: ["Flutter", "Dart", "Android"],
      link: "https://github.com/Alokxyz1112/hobee",
      extraLink: "https://github.com/Alokxyz1112/hobee/releases/latest",
      extraLabel: "Download APK"
    },
    {
      name: "biofx_python",
      text: "My fork of a bioinformatics-in-Python project. Where I practise the overlap between biology and code.",
      tags: ["Python", "Bioinformatics"],
      link: "https://github.com/Alokxyz1112/biofx_python"
    },
    {
      name: "Happy Birthday Card",
      text: "A small animated birthday card for the web, based on Anshuman Mahato's project.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Alokxyz1112/Happy-Birthday-Card"
    }
  ]
};
