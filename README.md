# CBTree

ThoughtRecord tracking app currently in development. 

Current version of development backend is hosted at: https://7astgo.deta.dev/docs. 
If you want to setup your own version of the backend you'll need to create a deta account at deta.sh, install the CLI: https://docs.deta.sh/docs/cli/install/ and set the environmental value of 'SECRET_TOKEN' with https://docs.deta.sh/docs/micros/env_vars/ of an encryption key to sign the JWT. Once that's done use the command "deta deploy".  Note that Deta uses python 3.9 as a default runtime and does not support any versions higher than that.  

Front end can be installed by cloning the repo, going into the cb-tree directory and running npm install.  Once that's done you can locally run a development server wiht npm start. 
