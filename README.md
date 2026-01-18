## Kiran Revally Portfolio

This repository contains the source code for [kiran-revally-unh.github.io](https://kiran-revally-unh.github.io),
the personal portfolio site of **Kiran Revally** (Principal Software Engineer).

The implementation is adapted from the open-source
[trekhleb/trekhleb.github.io](https://github.com/trekhleb/trekhleb.github.io) project, with content,
branding, and structure customized for a senior, job-focused portfolio.

## Development

The website is built on [Gatsby](https://www.gatsbyjs.com/). See the [Gatsby cheat-sheet](https://www.gatsbyjs.com/gatsby-cheat-sheet.pdf) for development hints.

### Running the project locally

Install proper version of Node:

```bash
nvm use
```

Install dependencies:

```bash
npm i
```

To run the project locally in development mode on [http://localhost:8000](http://localhost:8000):

```bash
npm run develop
```

View GraphiQL, an in-browser IDE, to explore your site's data and schema on [http://localhost:8000/___graphql](https://localhost:8000/___graphql)

To build the production version of the project:

```bash
npm run build
```

Serve the production build for testing on [http://localhost:9000](http://localhost:9000):

```bash
npm run serve
```

To do ESLint and Type checking:

```bash
npm run lint
npm run type
```

To fix the Lint errors run:

```bash
npm run lint -- --fix
```

### Working with icons

Use [react-icons.github.io](https://react-icons.github.io/react-icons) to search for available icons.

### Styling components

Use [tailwindcss.com](https://tailwindcss.com) to search for available CSS classes.

### Custom Domain Support

To serve this site on a custom domain, ensure that the `public` branch has a `CNAME`
file in the root folder with your desired domain name. For more details read
the [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Attribution

This portfolio is built using the MIT-licensed codebase from
[trekhleb/trekhleb.github.io](https://github.com/trekhleb/trekhleb.github.io).
