# WOFCC
This project contains the code for the Word of Faith Christian Center Church website. It's built in [React](https://reactjs.org/) and uses [Yarn](https://yarnpkg.com/) as it's main dependency management.

## Contributors :bookmark:
:wrench: Branden Boyington [BLogix](https://github.com/blogix) ~ 2018 - current

### Prerequisites :white_check_mark:
To build and run this project you must have the following installed on your machine:
- node
    - nvm is the best for installing and managing node
- yarn

### Installing Dependencies :package:
All project dependencies can be installed by running the `yarn` or `yarn install` commands.

### Running Tests :alembic:
I use Jest for running client side tests. Test can be ran with the `yarn test` command.

### Building :building_construction:
To create a production build run `yarn build` to produce the build folder with a static build of this site. This can be deployed for use on any webserver.

### Local Development :wrench:
Running the project for development is simple. Please use the `yarn start` command at the root of the project and the React development server will start on port 3000.

### Deployment :truck:
Since this project depends on a .env file that's not checked in, this project is deployed manually. In the future I am going to start up my own GitLab server where I'll be using their CI/CD to build and deploy.

### Versioning :label:
We use SemVer for versioning. For the versions available, see the tags on this repository.

### Liscense
This project is under the GPL3 license.