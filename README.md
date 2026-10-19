# Physics Learning Hub — 5th Year

A free, responsive, static website for GitHub Pages. No build step, database, accounts or paid services required.

## View locally

Open `index.html` in a browser. All pages and filters run locally. Internet access is only required for the external video search link.

## Publish to GitHub Pages

1. Create a new GitHub repository (e.g. `physics-learning-hub`).
2. Upload **the contents of this folder** to the repository root, including `.github/workflows/deploy.yml`.
3. In repository **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
4. Commit to the `main` branch. The included workflow publishes the site. Check the Actions tab for progress.
5. Open the Pages URL shown in Settings → Pages (usually `https://USERNAME.github.io/REPOSITORY/`).

## One-click publishing from the Teacher Editor

1. Upload this updated website to your GitHub Pages repository and wait for it to deploy.
2. On GitHub, create a **fine-grained personal access token** at Settings → Developer settings → Personal access tokens → Fine-grained tokens. Limit it to **only your Physics Learning Hub repository** and grant **Contents: Read and write**. Set an expiry date. Do not grant broad account access.
3. Open `teacher-editor.html` from the published site (or locally on your trusted computer).
4. Complete the lesson form; select existing resources, attach new PDFs/images, and/or add video and website links.
5. Select **Generate lesson entry** and review the preview.
6. Enter your GitHub owner, repository name, branch (`main` by default), and the fine-grained token. Select **Publish lesson and attachments**.
7. The editor uploads files/images and lesson data as **one Git commit**, then GitHub Pages redeploys automatically. Links require no file upload.

**Security and limits:** GitHub Pages cannot provide private login or hold secrets securely. The editor uses a manually entered fine-grained token **in browser memory for this publish only**, and clears it after success. Never commit a token or use a shared/public computer. The editor itself remains publicly accessible; only token holders can publish. Prefer a trusted locally opened copy of the editor for sensitive credentials. Revoke a compromised token immediately. The browser contacts `api.github.com` directly, so internet access is required. Keep individual attachments small (ideally under 10 MB; maximum combined 40 MB per publish). GitHub's Git Data API and browser restrictions may impose further limits.

**Conflict protection:** If the repository's `data.js` differs from the version loaded by the editor, the publish is blocked rather than overwriting newer changes. Refresh the editor after every successful publish. The student website is public; do not upload student personal information or copyrighted resources without permission.

**Fallback:** The editor still has a Download `data.js` backup option if API publishing is unavailable.

## Update the class log in about 3 minutes

1. In GitHub, open `data.js` and click **Edit** (pencil icon).
2. Copy an existing lesson object from the `lessons: [` array, paste it **above** the others, and edit its fields. Preserve commas and quotation marks.
3. Give each lesson a unique `id` (for example `lesson-2026-11-03-a`), use `YYYY-MM-DD` dates, and set `example:false` for real lessons.
4. Update `title`, `topic`, `summary`, `intentions`, `activities`, `homework`, `due`, `catchup`, and `resources`.
5. Click **Commit changes**. The site republishes automatically after GitHub Actions finishes.

**Tip:** The date controls the order automatically. Use exactly one of the topic names listed in `topics` to ensure the lesson appears in the correct topic library. You can add a lesson with `resources:[]` when you have no links ready yet.

## Add a resource

1. Upload a PDF or HTML file into `resources/` (or choose a trusted external link).
2. Add a new item to `resources` in `data.js`, with a unique `id`, `title`, `topic`, `type`, `description`, and `url`.
3. Add its `id` to a lesson's `resources` array if you want the link on that lesson.

## What is included

- Homepage with most recent lesson and homework
- Searchable chronological class log with topic filter
- Catch-up instructions for every lesson
- Topic-based revision archive
- Resource library with search and type filter
- Skills Centre (maths, experiments, scientific understanding, research)
- Sample original notes, graphing guide, mini-test and printable investigation template
- Mobile navigation and accessible semantic markup

## Important before sharing

- **All sample lessons are fictional examples** and are visibly labelled. Replace them with your own teaching record.
- Replace the placeholder YouTube search with a specific reviewed video.
- Never publish student names, grades, photos, identifying work, or private materials without appropriate permissions.
- Only upload materials you have rights to distribute; check copyright and exam-paper permissions.
- GitHub Pages is public by default. It is not a private learning management system.
- This is a starter resource, not an official curriculum or examination specification. Align topics and investigations with your school's current course requirements.

## Suggested next improvement

Add a password-protected **teacher editing interface** backed by a suitable authentication and publishing service, or a GitHub Issue form plus a controlled publishing workflow. Do not put a GitHub personal access token in public browser code.

**Attachments:** The editor does not upload files directly to GitHub. New website/video links work once `data.js` is published. Files and images also require uploading their originals into `uploads/` using the exact names listed in the preview. The editor does not store file contents inside `data.js`.

## Notebook-inspired visual redesign
The student pages and teacher editor now use squared-paper backgrounds, blue-ink borders, red margin details, and handwritten-style headings inspired by the 2628Physics site. No lesson data or attachment functionality was intentionally changed. Fonts use Google Fonts when online, with local fallbacks.

## Simplified student navigation (Version 6)

The student website has five areas: Home, Class Log, Topics, Resources and Skills Centre. There is no separate Catch Up page. Students who missed class should use the Class Log and open the appropriate lesson. Each full lesson contains intentions, what was covered, homework and attached resources.

The teacher editor now has an optional **Additional instructions** field rather than a compulsory catch-up checklist. Existing older lessons retain their original catch-up notes and show them under Additional instructions for backwards compatibility.


## Version 7: compact homepage

The homepage now prioritises the latest lesson and homework, with a restrained heading and four compact navigation links. The Class Log, Teacher Editor and GitHub publishing workflow are unchanged.

## Skills Centre (Version 8)

Open **Skills Centre** in the student navigation. Four dedicated modules now offer short explanations, 14 multiple-choice activities, immediate feedback, explanations, a progress bar, and a reset option. The modules cover mathematical, experimental, scientific reasoning, and research skills. All activity logic is in `skills.js`, with styling in `style.css`. No sign-in or student data collection is required.

**Adding learning materials:** The Teacher Editor can still attach resources to lessons and add them to the general Resource Library. Skills Centre's related-resource area automatically shows resources classified as Guide, Investigation or Test. Creating entirely new interactive activities currently requires editing `skills.js` (not the Teacher Editor).

The content is introductory practice for 5th Year students, not a complete syllabus or formal assessment.

## Skills Centre terminology and PEER conclusions

Graph activities use **slope**, not gradient. Experimental Skills includes five guided PEER exercises: Point (measured result), Evidence (specific data and percentage difference), Explanation (Detail + Why physics), Reflection (improvement and validity), and a complete worked conclusion.

The example spring experiment is illustrative. Teachers should adapt examples to the investigations actually performed in class.

## PEER Conclusion Builder

Go to **Skills Centre → Experimental Skills → PEER Conclusion Builder**. Students enter their experiment, measurements and optional reference value, then draft Point, Evidence, Explanation (Detail + Why), and Reflection. The builder calculates the absolute percentage difference relative to a non-zero reference value and can copy or print the resulting draft. The percentage calculation is provided as a separate calculated note; students must still cite meaningful experimental evidence in their own words. Entries stay in the browser and are not uploaded or saved; navigating away loses the draft. Print or copy before leaving. The tool provides writing scaffolding, not automated marking or verification of scientific accuracy.

### Critical angle PEER example
The Experimental Skills PEER Builder now includes the critical-angle investigation model conclusion and a degrees-based calculator for `n = 1 / sin C`. Students can optionally enter a given refractive index and calculate percentage difference, then copy a prefilled PEER draft into the existing writing fields. They should check significant figures, their own data, and personalise the conclusion. No numerical example is presented as a real class result.

## Limitation Analysis Builder

In **Skills Centre → Experimental Skills**, students can use the Cause → Consequence → Improvement framework, then explain the effect on the validity of their conclusion. Four critical-angle examples are provided, or students can write their own. **Build analysis** previews their writing; **Use in PEER Reflection** transfers it to the Reflection field in the PEER Conclusion Builder on the same page. Students can also copy the text. Entries are local to the browser and are not saved or assessed automatically.
