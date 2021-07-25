# Install the frontend

To install the frontend side of this project, in the terminal switch to the directory `deep-learning-frontend` and execute the command `npm install`.
This will install all necessary dependencies for the frontend side.

To be able to install this, `Node.js` and `npm` are required.
If they are missing on the executing machine, please install them with guidance of [Installing Node.js](https://nodejs.org/en/download/).

Don't forget to start the server first (Repo: `deep-learning-api`).

## Starting the app

After executing `yarn start` in the root folder `deep-learning-frontend` the application should open automatically and display 30 randomly picked images as a showcase.
Enter concepts and change the confidence interval to the wanted values and press the search button to find keyframes extracted by `deep-learning-api` side with the corresponding concepts and their confidence.

If `yarn` is missing on the executing machine, it can be installed after `Node.js` is installed with the command: `npm install --global yarn`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
