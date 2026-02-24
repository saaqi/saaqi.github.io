# Developer Portfolio – GitHub Pages

A lightweight, dynamic portfolio website built with GitHub Pages that automatically displays my public repositories using the GitHub REST API.

## 🎯 Purpose

The goal of this project is to create a simple, maintainable portfolio site that stays up to date automatically as I create new repositories.

## ✨ Highlights

- No backend required
- Zero database
- Fully static deployment
- Dynamic repository listing via client-side API calls
- Automatically updates when repositories change

## 🧠 Architecture

The site uses client-side JavaScript to fetch data from:

https://api.github.com/users/<username>/repos

The response is parsed and rendered into the DOM dynamically.

Because everything runs client-side, hosting is simple and cost-free using GitHub Pages.

## 🚀 Why This Approach?

- Keeps infrastructure simple
- No server maintenance
- Always reflects latest GitHub activity
- Fully version-controlled

## 🔮 Roadmap

- Dark mode toggle
- Repository filtering & sorting
- Improved responsive layout
- Add blog section

---

Created and maintained by [Saqib Islam](https://saqibtech.com 'Saqib Islam - UI/UX Designer & Full-stack Web Developer.')