# Going Down the EECS Stack DeCal Repo

## Setup Instructions
Step 1. Clone this repo to home
```bash
cd ~
git clone https://github.com/HKNDecal/HKNDecal.git
```
Step 2. Run setup script in the setup directory
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

## Setup Instructions
Step 1. Clone this repo to working directory
```bash
git clone https://github.com/HKNDecal/HKNDecal.github.io.git
```
Step 2. Checkout the dev branch
```bash
git checkout dev
```
Step 3. Install dependencies with
```bash
npm install
```

Work.

Step 4. Deploy onto master branch (run command on the dev branch).
```bash
npm run deploy
```
Step 5. Reconfiguring to point to decal.best
Go to:
https://github.com/HKNDecal/HKNDecal.github.io/settings
Under GitHub Pages:
-> Custom domain:
```bash
decal.best
```