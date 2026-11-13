# Security+ SY0-701 — 90-Question Mock Exam

Interactive multiple-choice quiz for CompTIA Security+ SY0-701.

## What it is

- 90 questions, one at a time, covering all 5 SY0-701 domains, weighted like the real exam:
  - Domain 1 — General Security Concepts: 11
  - Domain 2 — Threats, Vulnerabilities and Mitigations: 20
  - Domain 3 — Security Architecture: 16
  - Domain 4 — Security Operations: 25
  - Domain 5 — Program Management and Oversight: 18
- Pick an answer and get immediate feedback: green for correct, red for a wrong pick, with the correct answer shown in green at the same time, plus a short explanation.
- Results screen at the end: total score / 90, percentage, pass guide (72+ is around pass level), per-domain breakdown, a list of questions answered incorrectly, and a Restart button.

## How to run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Files

- `index.html` — page structure
- `styles.css` — dark, mobile-friendly styling
- `app.js` — quiz logic (one question at a time, immediate feedback, scoring, results)
- `questions.js` — the 90 questions (`const QUESTIONS = [...]`)
- `README.md` — this file

No external dependencies, no login, no data sent anywhere. Works as a static site, including GitHub Pages.
