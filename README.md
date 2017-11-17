# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This will allow users to see posts already in the database, and post new 'tweets' via the compose button - which are then stored on the mongo database. If there is nothing in the tweeting box to display the site will send you an alert, the same applies if you go over the 140 character limit.

## The Final Product

!["Screenshot of Main Page"](https://github.com/WhtMage/tweeter/blob/master/docs/Screen%20Shot%202017-11-17%20at%208.49.10%20AM.png?raw=true)
!["Screenshot of Main Page Tweet Entry"](https://github.com/WhtMage/tweeter/blob/master/docs/Screen%20Shot%202017-11-17%20at%208.49.37%20AM.png?raw=true)
!["Screenshot of Tweets on Hover"](https://github.com/WhtMage/tweeter/blob/master/docs/Screen%20Shot%202017-11-17%20at%208.52.56%20AM.png?raw=true)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- MongdoDB
- Body-Parser
- MD5
- Chance
- Nodemon