Physics2628 — 5th Year Physics Learning Hub
A mobile-friendly class website for 5th Year Physics. Students open the Class Log to find recent classwork, homework, files, links and released homework solutions. The site also has Topics, Resources and an interactive Skills Centre.

Student website: https://alanhere.github.io/Physics2628/
Teacher Editor: https://alanhere.github.io/Physics2628/teacher-editor.html
GitHub repository: https://github.com/alanhere/Physics2628
Updating lessons and resources
1. Open the Teacher Editor and enter the GitHub publishing details/token when prompted.
2. To add or change classwork and homework, use the lesson form or Manage Published Lessons. Attach PDFs or add links as needed, then publish.
3. To add, edit or remove items in the Resources section, use Manage All Resources. Resources can be displayed in Resources, Skills Centre, or both.
4. To publish worked answers, use Homework Solutions: load the published lessons, select the correct lesson, attach a PDF or add a link, then choose Release solutions. Only release answers when students should see them.
5. Refresh the student website after GitHub Pages has updated to check the changes.
Updating the website itself
Website code is stored in this repository. Edit or upload the relevant file on GitHub and commit to main; GitHub Pages then updates the public site.
- index.html, style.css — page layout and appearance
- app.js — student-facing Class Log and resource display
- teacher-editor.html — teacher editing and publishing interface
- data.js — published lessons and resource records
- skills.js — interactive Skills Centre activities
- uploads/ — uploaded PDFs and other files
Important: Back up the repository before major changes. Do not overwrite data.js, skills.js or uploads/ when installing a layout/editor update unless that update specifically requires it. Those files contain existing content and functionality. 
