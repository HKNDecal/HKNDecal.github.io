# Going Down the EECS Stack DeCal Website

This is the source code for the decal website at [https://decal.best].

## Setup

**Step 1.** Install node.js (& `npm`) with `brew` or your favorite installer.

**Step 2.** Clone this repo to working directory

```bash
git clone https://github.com/HKNDecal/HKNDecal.github.io.git
```

**Step 3.** Checkout the `dev` branch

```bash
git checkout dev
```

**Step 4.** Install dependencies with

```bash
npm install --legacy-peer-deps
```

*Note: The `--legacy-peer-deps` is required because Gatsby 5 uses a custom version of React. This may not be needed in the future.*

## Development

**Step 1.** Make changes to the website.

- Most of the website content is found in `src/components/data.js`
- Most of the website rendering/layout is found in `src/components/Sections.js`

**Step 2.** Make sure the site behaves correctly using a local server. Run:

```bash
npm run start
```

The site can then be viewed in a browser at [http://localhost:8000]. Any changes will be updated in the browser immediately after save.

**Step 3.** Commit changes to git and push to the `dev` branch. If desired, a pull request can be created and reviewed.

**Step 4.** Deploy onto master branch (run command on the `dev` branch).

```bash
npm run deploy
```

This will update any changes made to the website to the production server. All changes, committed or otherwise, will be deployed.

## Notes

- The deploy script was made to automatically add a `CNAME` file which links the website domain to the GitHub Pages hosting.
- Some useful packages have been imported but were never actually used (e.g. `gatsby-plugin-image`)
  - It might be good to use them eventually...
