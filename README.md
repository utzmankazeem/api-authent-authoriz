JWT.IO
# Secure Nodejs App
mongoose encryption
npm i md5

This project was created with [Node js App]
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `.env`

This secures all my App keys the watch mode.\
See the section about [running security](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- Oauth 
goto passportjs.org / find strategy(passport-google-oauth20)
follow docs!
1. npm i passport-google-oauth20
2. create app in GoogleDevCredencials
newProj {just Name} 
setup credentials -> consent screen
   {appName,logo,apiScopes(leave Default. can add more) }
after appHosting you can add domain etc.
save & create cred -> create Oauth client ID {
    App Typee: web App,
    Name: App Name
    authOrigin: use your localhost address, pending proper host
    authRedirect: localhost/auth/google/secret
}
now Create...
youd get an Id & Secret
copy both into your .env file {
    CLIENT_ID =
    CLIENT_SECRET = 
}
3. req GoogleSttrategy package in your code {
    GoogleSttrategy = require('passport-google-oauth20').strategy
}
take the strategy code put into model under serializers
change {
    clientId: process.env. CLIENT_ID,
    ClientSecret: process.env. CLIENT_Secret,
    cbUrl: "(authRedirect) goto the oauth page to copy it",
    userProfileUrl: "https://www.googleapis.com/oauth2/v3/userinfo"    
    },

  4.  npm i mongoose-findorcreate
      require in model & add as plugin {
        secSchema.plugin(findOrCreate);
        }

5. download Social button for bootstrap(lipis.github.io/bs)
    download extract -> bs-sc-css into public/css
    link into the header.html 

//Task Passport login with FB
 -->