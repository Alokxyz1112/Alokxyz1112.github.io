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
    "I'm Alok, and I like turning ideas into things people actually use. Right now most of my time goes into a bigger project I can't name just yet, so you'll have to wait for that one.",
    "Next up is a healthcare startup, and I'm looking for people. If you understand how hospital partnerships work and how a new team can get in the door, I'd love to talk. Same if you're a developer who's strong on both backend and frontend and loves solving tricky problems. <a href=\"mailto:Alok920037@gmail.com\" style=\"text-decoration:underline\">Drop me an email</a>.",
    "Hobee is an older project of mine. I'd put it on pause, but I've just published it. It still has a few small bugs, and with <a href=\"https://github.com/Alokxyz1112/hobee\" target=\"_blank\" rel=\"noopener\" style=\"text-decoration:underline\">support on GitHub</a> I'll keep fixing and improving it. I'm in my third year of B.Tech, but the product side is what keeps me going."
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
    { title: "Building", text: "Shipping small products and learning what people really need." },
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
      icon: "assets/hobee-logo.webp?v=1",
      featured: true,
      text: "A cleaner way to read Reddit. Not just images, text posts read nicely too. Checking someone's profile? If they post the same thing in ten subreddits, Hobee shows it once, so you actually see what they're about.",
      tags: ["Flutter", "Dart", "Android"],
      link: "https://github.com/Alokxyz1112/hobee",
      extraLink: "https://github.com/Alokxyz1112/hobee/releases/latest",
      extraLabel: "Download APK"
    },
    {
      name: "Pixelfixo",
      icon: "assets/pixelfixo-logo.webp?v=1",
      text: "Makes blurry photos sharp again, right on your phone. 2x, 3x or 4x upscaling that works offline, keeps colours natural, and has no ads, no account and no limits.",
      tags: ["Android", "Open source"],
      link: "https://github.com/Alokxyz1112/pixelfixo",
      extraLink: "https://github.com/Alokxyz1112/pixelfixo/releases/tag/v1.0.1",
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
