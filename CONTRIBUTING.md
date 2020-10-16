# Contributing

When contributing your details to this repository, follow the steps mentioned below. If you want to make any other change apart from adding your details, please open an issue, or get in-touch with the maintainers of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

You will be making changes to the `js/participants.js` file in order to add your details.

### STEP 1

**Fork** this repo.  
This will create a copy of this repo under your GitHub account.

![Fork](https://i.ibb.co/sVL4GR0/image.png)

### Step 2

**Clone** your forked copy of this repo down to your local machine:
```bash
git clone https://github.com/<INSERT-YOUR-USERNAME>/Hacktoberfest-2020.git

# Example
git clone https://github.com/PawanKolhe/Hacktoberfest-2020.git
```

### STEP 3

**Change directory** to get inside repository:
```bash
cd Hacktoberfest-2020
```

### STEP 4

**Create a new branch**:
```bash
git checkout -b addname/<INSERT-YOUR-USERNAME>

# Example
git checkout -b addname/PawanKolhe
```
> This command creates a new branch and switches to that new branch

### STEP 5

Its time to make the change to `js/participants.js` file by adding your details. Open the file in your text editor.

**Copy** the following template:
```javascript
  {
    name: "<YOUR-NAME>",
    college: "<YOUR-COLLEGE>",
    city: "<YOUR-CITY>",
    github: "<YOUR-GITHUB-PROFILE-LINK>",
    linkedin: "<YOUR-LINKEDIN-PROFILE-LINK>",
  },
```

**Paste** is under the last participant's details
```javascript
const participants = [
  {
    name: "Pawan Kolhe",
    college: "Amity University Mumbai",
    city: "Nagpur",
    github: "https://github.com/PawanKolhe",
    linkedin: "https://www.linkedin.com/in/kolhepawan/",
  },
  {
    name: "<YOUR-NAME>",
    college: "<YOUR-COLLEGE>",
    city: "<YOUR-CITY>",
    github: "<YOUR-GITHUB-PROFILE-LINK>",
    linkedin: "<YOUR-LINKEDIN-PROFILE-LINK>",
  },
];
```

Now **edit** it with your own details.

### STEP 6

**Stage** and **commit** changes:
```
git add js/participants.js
git commit -m "add <YOUR-NAME> to participants list"
```

### STEP 7

**Push** changes to your forked repo on GitHub:
```bash
git push origin <BRANCH-NAME>
```

> Replace `<BRANCH-NAME>` with the name of the branch you created in STEP 4, such as addname/PawanKolhe

### STEP 8

Head over to GitHub, on the repo you should see a new `Compare & pull request` button. Click it.

![Pull request](https://i.ibb.co/3NT428b/7yscx.png)

Now click the `Create pull request` button.

### STEP 9

Thats it! Your part is done!  
Now wait for the maintainer of the repo to mark the PR as `hacktoberfest-accepted`.

**Congrats on your first PR!**
