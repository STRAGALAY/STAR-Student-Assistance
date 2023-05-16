# STAR Student Assistance

STAR - Student Assistance acts as a [describe later]

## Hosting by Yourself

##### \* This tutorial assumes you're on a PDSB computer with limited command prompt access

1. Install dependencies: [`Visual Studio Code (VSCode)`](https://code.visualstudio.com/download), [`Node.js`](https://nodejs.org/en/download), and [`Git`](https://git-scm.com/downloads)
2. Open your local terminal `VSCode`
   - Type Type **Ctrl + `** (not including the '+', '+' is notation for a keyboard combination)
3. Navigate to the directory where you want the project by running the command in the terminal:
   - `cd "C:\Users\[path_to_Desktop]\Desktop"`
   - Your `VSCode` terminal prompt should now look something like: ![image](https://user-images.githubusercontent.com/90625393/232098746-477e4096-ba17-4e5a-a1ce-2a085478c0c5.png)
4. Clone this Git repository and change to the new project's directory, again in the terminal:
   - `git clone https://github.com/STRAGALAY/STAR-Student-Assistance.git`
   - `cd STAR-Student-Assistance`
5. Download the project's `npm` dependencies
   - `npm install`
6. Start the app
   - `npm start`
7. Wait for the app to load and it will open up on your computer's default browser

### Something go wrong?

1. **App development deployments blocked from automatically popping up a browser**. You can manually head to http://localhost:3000 where the app's page is hosted (NOT _https_ prefix). To fix this problem in the future, go to `.env` and simply `Ctrl + A + Backspace`. Alternatively, just look for and remove the line `BROWSER=none`.

### What now? (Optional)

1. To disconnect the version of the app running on your local machine from the GitHub repository, do the following inside `VSCode`
   - Type **Ctrl + Shift + P**
   - Search for `Preferences: Open User Settings (JSON)` and hit **Enter**
   - Update the `"files.exclude"` key. It may or may not already be defined somewhere. If it isn't, you will need to define it yourself. Under the `"files.exclude"` key, paste: `"**/.git": false` inside the curly brackets. Your `settings.json` file should at minimum include: ![image](https://user-images.githubusercontent.com/90625393/232100758-d35278c1-ce36-4f65-b539-b87b256dd44b.png)
   - Now, you should see a `.git` folder in app main folder. Delete that (right click the `.git` folder and press 'Delete')

## Features

1. **Folders**:
2. **Notes**:
3. **Goal Tracker**:
