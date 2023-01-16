# Going Down the EECS Stack DeCal Repo

This is a repository containing resources such as lab code for the decal.

## Setup Instructions
**Step 1.** Clone this repo to home
```bash
cd ~
git clone https://github.com/HKNDecal/HKNDecal.git
```
**Step 2.** Run setup script in the setup directory
```bash
cd HKNDecal/setup
source decal_setup.sh
```

And you're done! When the script finishes running you should see "(decal_env)" appended to the terminal.

## Creating New Sessions
Create a branch starting from the master branch titled `session-N`, where _N_ is the number of your
session. You'll then use `session-N` to develop the material for session _N_. The rest of the class
stays on the master branch while the session _N_ material is under development. When the material for
session _N_ is complete, merge the `session-N` branch back into master.

# Going Down the EECS Stack DeCal Website

This is the source code for the decal website at https://decal.best.

## Setup

**Step 1.** Install `npm` and `gatsby-cli` with `brew` or your favorite installer.

**Step 2.** Clone this repo to working directory
```bash
git clone https://github.com/HKNDecal/HKNDecal.github.io.git
```

**Step 3.** Checkout the dev branch
```bash
git checkout dev
```

**Step 4.** Install dependencies with
```bash
npm install
```

## Development

**Step 1.** Make changes to the website.

**Step 2.** Make sure the site behaves correctly using a local server. Run:
```bash
npm run start
```

The site can then be viewed in a browser at http://localhost:8000/. Any changes will be updated in the browser immediately after save.

**Step 3.** Commit changes to git and push to the dev branch. If desired, a pull request can be created and reviewed.

**Step 4.** Deploy onto master branch (run command on the dev branch).
```bash
npm run deploy
```

This will update any changes made to the website to the production server. All changes, committed or otherwise, will be deployed.
