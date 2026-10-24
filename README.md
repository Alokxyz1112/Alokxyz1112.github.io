# My website

Live at **https://alokxyz1112.github.io**

Everything personal (name, text, email, LinkedIn, projects) is in **one file: `config.js`**. You never need to touch the other files.

## Add your email or LinkedIn (from the GitHub mobile app)

1. Open the **GitHub** app and go to the repo **Alokxyz1112.github.io**.
2. Tap **Code** (or "Browse code"), then tap **config.js**.
3. Tap the **pencil icon** (Edit). If you don't see it, tap the `...` menu and choose **Edit file**.
4. Find these lines:
   ```js
   email: "",
   linkedin: "",
   ```
5. Type inside the quotes, for example:
   ```js
   email: "yourname@gmail.com",
   linkedin: "https://www.linkedin.com/in/your-profile",
   ```
   Keep the quotes and the comma at the end.
6. Tap **Commit changes** (or the tick ✓). Add a short message like "add email" and confirm.
7. Wait a minute or two and refresh the site. The Email / LinkedIn buttons appear on their own. Leave a value as `""` to hide it.

You can change any other text in `config.js` the same way (tagline, about, projects, skills).

## Add your photo

1. Get a square-ish photo and name it **photo.jpg** (lowercase).
2. Easiest from a phone browser: open github.com/Alokxyz1112/Alokxyz1112.github.io in Chrome/Safari, tap the **assets** folder, tap **Add file → Upload files**, pick `photo.jpg`, then **Commit changes**. (The GitHub app itself can't upload images yet; the mobile website can. "Desktop site" mode helps if the button is hidden.)
3. Wait a minute or two and refresh. Until a photo is there, the site shows an "AY" circle.

## If something breaks

Usually it's a missing quote `"` or comma `,` in `config.js`. Open the file's **History**, look at your last change, and fix it.
