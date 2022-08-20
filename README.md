
# CBTree

CBTree is a web application to create and manage CBT thought records

Live Link: https://www.cbtree.app
Current version of development backend is hosted at: https://ciy1es.deta.dev/docs 

https://user-images.githubusercontent.com/6609889/169714706-ab403540-84c6-467e-b809-23b9c290923f.mp4


## Getting Started

If you want to setup your own version of the backend you'll need to create a deta account at deta.sh, install the CLI: https://docs.deta.sh/docs/cli/install/ and set the environmental value of 'SECRET_TOKEN' with https://docs.deta.sh/docs/micros/env_vars/ of an encryption key to sign the JWT. Once that's done use the command "deta deploy".  

Note that Deta uses python 3.9 as a default runtime and does not support any versions higher than that.  

Front end can be installed by cloning the repo, going into the cb-tree directory and running `npm install`.  You'll need to change the base url for the api in /Utils/api.tsx.  Once that's done you can locally run a development server with `npm start`. 

The logic for the thought record flow is done completely through the useThoughtRecord hook with data that exists in types.  Thought Record questions are an array of routes that are traversed in order so creating your own questions/form is as easy as changing the routes and types to match your questions and components. Please note that you'll have to make changes to the thought record types both on the front and backend to reflect your new thought record as there are multiple type guards that will fail if the schemas do not match. 
