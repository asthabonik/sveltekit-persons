# Welcome to the SvelteKit Persons Project!  

Welcome to the **SvelteKit Persons** project! This web application is
built using **SvelteKit** and demonstrates
dynamic content handling, API integration, and routing features.

## 🚀 Features

- **SvelteKit-powered application**
- **Dynamic routing** for seamless navigation
- **API integration** to manage persons data
- **CRUD operations** (Create, Read, Update, Delete)
- **Toast notifications** for better user experience

---

## 🛠️ Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Latest LTS recommended)
- **Git**

### Clone the Repository

```sh
git clone git@github.com:asthabonik/sveltekit-persons.git
cd sveltekit-persons
```

### Install Dependencies

```sh
npm install
```

### Configure Environment Variables

Create a `.env` file and add the necessary environment variables:

```env
PUBLIC_API_ENDPOINT=https://your-api-endpoint.com
```

### Run the Development Server

```sh
npm run dev
```

Your application will be accessible at `http://localhost:5173/` by default.

---

## Project Structure

```
sveltekit-persons/
├── src/
│   ├── lib/               # Shared components and utilities
│   ├── routes/            # Application routes and pages
│   ├── app.html           # Main HTML template
│   └── ...                # Other SvelteKit-specific files
├── static/                # Static assets (images, fonts, etc.)
├── package.json           # Project dependencies and scripts
├── svelte.config.js       # SvelteKit configuration
└── README.md              # This file
```

---

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Lint the codebase for errors and style issues.

---

## 📖 Usage Guidelines

### Adding a Person
- Navigate to the **Add Person** section.
- Enter the person's details and click "Add".
- The new person will be added and displayed in the table.

### Editing a Person
- Click the "Edit" button next to a person's entry.
- Modify the details and save the changes.

### Deleting a Person
- Click the "Delete" button next to a person's entry.
- Confirm the deletion.

---

## 🤝 Contribution Guidelines

We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository**
2. **Create a Branch**: `git checkout -b feature-branch`
3. **Make Your Changes**
4. **Commit Changes**: `git commit -m "Added a new feature"`
5. **Push to GitHub**: `git push origin feature-branch`
6. **Submit a Pull Request**

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- [SvelteKit Documentation](https://kit.svelte.dev/docs) for providing an excellent framework.
- My mentors and colleagues for their guidance during the internship.
- Thanks to all contributors and the open-source community!

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Md. Raquebul Hasan
- **Email**: [asthabonik@gmail.com](mailto:asthabonik@gmail.com)

---

Thank you for checking out the **SvelteKit Persons** project! 🚀

---

### Key Features of the GitHub Formatting:
1. **Headings**: Use `#`, `##`, `###` for headings and subheadings.
2. **Code Blocks**: Use triple backticks (```` ``` ````) for code blocks.
3. **Lists**: Use `-` or `*` for unordered lists and numbers for ordered lists.
4. **Bold and Italics**: Use `**` for bold and `*` for italics.
5. **Links**: Use `[text](url)` for hyperlinks.
6. **Environment Variables**: Use triple backticks with `env` for syntax highlighting.

Let me know if you need further adjustments! 🚀
