# DGM-3790 React App Project:

Deployed on [Netlify](https://3790-react-soccer-app-conner-chappell.netlify.app/)

Created using [TheSportsDB API](https://www.thesportsdb.com/)

## Requirements/Features:

#### Effectively use conditional logic and JavaScript array methods (filter, map, redue, find) to rend large lists

- [Line 13](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/components/EnglishTeamContainer.js) – map is used in EnglishTeamContainer.js as well as the other team containers
- [Line 39](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/components/tableCotainers/EnglishTableContainer.js) – map is used in EnglishTableContainer.js as well as the other table containers
- [Line 12](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/TeamDetail.js) – find is used in TeamDetail.js

#### Encapsulate your code as React functional components

- [components folder](https://github.com/ConnerChappell/3790-react-soccer-app/tree/main/src/components)

#### Work with command-line tools and NPM to create and manage your project within a real development toolset

- [package.json file](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/package.json)

#### Allow communication between components using props and the Context API

- [SoccerContext.js](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/contexts/SoccerContext.js) is used throughout the various container componenets, [TeamCard.js component](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/components/TeamCard.js), [TeamDetail.js page](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/TeamDetail.js), and the [Favorites.js page](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/Favorites.js)

#### Present a form for user input that provides useful form validation and feedback for at least 3 data input items (ex - name, password)

- [Line 42](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/components/login/SignupForm.js) – SignupForm.js contains userName, email, and password with validation and feedback

#### Create at least 5 custom components and use them within at least two of your other components

- [Line 16](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/components/EnglishTeamContainer.js) – TeamCard.js is used within EnglishTeamContainer.js and all of the other team containers
- [Line 38](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/leagues/EnglishPremierLeaguePage.js) – EnglishTeamContainer.js is used within EnglishPremierLeaguePage.js. This is the same for all of the league containers with their respective league pages
- [Line 39](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/leagues/EnglishPremierLeaguePage.js) – EnglishTableContainer.js is used within EnglishPremierLeaguePage.js. This is the same for all of the table containers with their respective leage pages

#### Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project

- [Line 326](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/Home.js) – Fade transition component is used in the Home.js page
- [Line 9](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/leagues/EnglishPremierLeaguePage.js) – Fade transition component is used in EnglishPremierLeaguePage.js as well as the other league pages
- [Line 26, 59](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/TeamDetail.js) – Fade transition component is used in TeamDetail.js
- [Line 20](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/Favorites.js) – Fade transition component is used in the Favorites.js page

#### Connect to a server using Netlify functions and display retrieved data including at least 5 item details (accessed by details route) in your UI

- [Netlify functions](https://github.com/ConnerChappell/3790-react-soccer-app/tree/main/netlify/functions)
- [TeamDetail.js](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/pages/TeamDetail.js)
  - Line 35 – `image={team.strTeamBadge}` 
  - Line 43 – `<Typography component="h1" variant="h3">{team.strTeam}</Typography>`
  - Line 100 – `image={team.strTeamJersey}`
  - Line 118 – `image={team.strStadiumThumb}`
  - Line 145 – `<Typography variant="body1" sx={{ mb: 1 }}>{team.strDescriptionEN}</Typography>`

#### Provide at least 3 different routes with navigation between them using React Router

- [App.js](https://github.com/ConnerChappell/3790-react-soccer-app/blob/main/src/App.js)

#### Manage your application's general and signup/login Authentication state using Hooks and the Context API

- [login folder](https://github.com/ConnerChappell/3790-react-soccer-app/tree/main/src/components/login)