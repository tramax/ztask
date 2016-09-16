# ztask — a task management app

This project is a simple task management app.

## Getting Started

To get you started you can simply clone the ztask repository and install the dependencies:

### Prerequisites

You need git to clone the ztask repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test ztask. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone ztask

Clone the ztask repository using [git][git]:

```
git clone https://github.com/tramax/ztask.git
cd ztask
```

If you just want to start a new project without the ztask commit history then you can do:

```bash
git clone --depth=1 https://github.com/angular/ztask.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

If you encounter access restriction problem, run `sudo npm install` and then `bower install`.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
ztask changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000`.

[bower]: http://bower.io
[git]: http://git-scm.com/
[http-server]: https://github.com/nodeapps/http-server
[jasmine]: https://jasmine.github.io
[jdk]: https://en.wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
[karma]: https://karma-runner.github.io
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
[protractor]: https://github.com/angular/protractor
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/