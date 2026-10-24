/* =========================================================
   CONFIG.JS: ALL YOUR PERSONAL INFO LIVES HERE.
   Edit the text between the quotes "like this".
   Leave a value as "" (empty) to hide that button.
   ========================================================= */
window.SITE = {
  // Your name as shown on the site
  name: "Yadav Alok",

  // Short letters shown in the avatar when there's no photo
  initials: "AY",

  // Lines the headline types out, one after another
  typing: [
    "Building what I wish existed.",
    "Ideas into working apps.",
    "Always starting new things.",
    "Apps that feel good to use."
  ],

  // One line under your name
  tagline: "Mostly building apps, always learning something new.",

  // About section. Each item is one paragraph.
  about: [
    "Hey, I'm Alok. I'm in my third year of B.Tech Biotechnology. At some point I started writing code, and I never really stopped.",
    "These days it's mostly AI and a startup I'm building. It's early. There's not much to show yet, but it's what I think about most.",
    "I like apps that look clean and stay out of your way. I also love the spot where biology meets code. That's why bioinformatics keeps pulling me in."
  ],

  // ---- CONTACT (leave "" to hide) ----
  email: "Alok920037@gmail.com",
  linkedin: "https://www.linkedin.com/in/yadav-alok-0112b1311",
  github: "https://github.com/Alokxyz1112",

  // Your photo. Upload a file named photo.jpg into the assets folder.
  // If it's missing, the "AY" circle shows instead.
  photo: "assets/photo.jpg",

  // ---- WHAT I'M DOING NOW (timeline) ----
  now: [
    { title: "B.Tech Biotechnology", text: "Third year student, exploring bioinformatics as part of biotech." },
    { title: "AI", text: "Learning by building. One small project at a time." },
    { title: "My startup", text: "Early days. No name yet. I'm working on it quietly." },
    { title: "Hobee", text: "My Android app. I built it in Flutter and put it on GitHub." }
  ],

  // ---- SKILLS ----
  skills: ["Flutter", "Dart", "Python", "JavaScript", "Android", "Git"],

  // ---- PROJECTS ----
  // featured: true makes the card bigger.
  projects: [
    {
      name: "Hobee",
      featured: true,
      text: "It's a Reddit app for text posts too, not just images. Ever check someone's profile for context and find the same post cross-posted to ten subreddits? Hobee hides the repeats so the profile is easy to read. Open any public profile, read posts cleanly, all in a frosted glass look.",
      tags: ["Flutter", "Dart", "Android"],
      link: "https://github.com/Alokxyz1112/hobee",
      extraLink: "https://github.com/Alokxyz1112/hobee/releases/latest",
      extraLabel: "Download APK"
    },
    {
      name: "biofx_python",
      text: "My fork of the code from Mastering Python for Bioinformatics. It's where I practise biology with Python.",
      tags: ["Python", "Bioinformatics"],
      link: "https://github.com/Alokxyz1112/biofx_python"
    }
  ]
};
