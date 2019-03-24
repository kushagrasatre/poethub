# Project1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Information Architecture
User
    id
    name
    email - uniqueId
    password
    mobile
    address
        city
        state
    dob
    gender
    roleId
UserRole (hard-coded)
    id: 1
    roleName : 'peot'

    id: 2
    roleName : 'normal'
Poem
    id
    userId
    title
    description
    media - audioUrl / videoUrl / imageUrl / null
Tag
    id
    name
PeomTag
    tagId
    poemId
Like
    userId
    peomId
    status : like / deslike (by-default null)
Comment
    id
    userId
    peomId
    caption
    description
    date
Followers
    poetId
    followerId
    status : true / false
Book
    userId
    images


## APIs
APIs
    User Registration (POST)
    Login (POST)
    Logout (GET)
    Account Edit (Patch)

    Poets (GET)
        Poems (GET)
        Poems (POST)
        Poems (Patch)
        Poems (Delete)
            Tags (GET)
            Tags (POST)
            Tags (Patch)
            Tags (Delete)

            Likes (GET)
            Likes (POST)
            Likes (Patch)
            Likes (Delete)

            Comments (GET)
            Comments (POST)
            Comments (Patch)
            Comments (Delete)
        Followers (GET)
        Followers (POST)
        Followers (Patch)
