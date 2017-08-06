* https://rolandomathias.github.io/blockchainvalue/

# Requirements

* NodeJS (v6.x) - https://nodejs.org/en/
* Any text editor
* Any console/terminal

# Installation

Steps below should be followed once - when you setup files for local development:

* Clone this repository ( easiest way is to use [GitHub Desktop](https://desktop.github.com/) )
* Open console and navigate to repository directory
* Run `npm install`
* Run `bower install`
* Run `npm install --global gulp` ( in case of error run `sudo npm install --global gulp` instead )

# Project structure

* `docs` - folder will contain build result ( minimised and cleaned final version of the website )
* `src` - folder with source files: all raw templates, styles, images and scripts 

All edits should be made in `src` folder and then project should be rebuilt each time
something was modified in `src` folder.

# Building a project

After you made some changes it's necessary to "build" the project - "gulp" script will
pre-process, minify, optimize, etc all your files from source directory and produce
ready to upload version into `docs` folder.

* Navigate to repository directory
* Run `gulp` ( this will build everything into `docs` folder )
* Run `gulp post-inline` ( this will make last-pass optimisations in `docs` folder )

# Publishing changes

To upload changes to GitHub just commit and push your modifications to remote repository,
in GitHub desktop you can do it in two simple steps:

* Enter some commit message for your change-set and press "Commit"
* Press "Sync"
