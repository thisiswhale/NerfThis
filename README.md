# NERF This

NERF This is an Overwatch team Competitive guide application for players by players. Offering user-generated data to help improve team and individual player outcomes. This app keeps a record of players past teams and game outcomes allowing the app to more accurately suggest Heroes to choose based on heroes already chosen for the team.

```
Demo deployed on [Heroku](https://dry-journey-45708.herokuapp.com/)
```

## Table of Contents
- Homepage/login
- Game Entry
- Hero Selector


## Home Page
The homepage offers a quick explanation of our app and the ability to begin use.

![HomePage](https://user-images.githubusercontent.com/16066443/26999987-16fe0626-4d5b-11e7-8599-d5ac8779ef75.PNG)

To begin on the application:
1. Click the “Get Started” button in the upper left corner.
2. Register the username, email and password you would like to use for this app.
3. After registering, subsequent logins require the same username and password.
4. Login by toggling to “login” and enter your username and password.
Upon correct entry of your username and password you will be re-directed into the app where you can enter game records (team composition, map used, game mode and result of game).

## Hero Selector
This page will suggest a hero for you to select for your current round.
![HeroSelectorPage](https://user-images.githubusercontent.com/16066443/26999977-c97904be-4d5a-11e7-94bb-72861a84558d.PNG)

1. enter map you will be playing on:
2. Select map type: Assult/Escort/Hybrid/Control
3. choose your specific map from the drop-down menu.
4. select position (attack/defend)
5. click on the 5 heroes selected by your other team members
*upon selection the background of the hero’s portrait will change from grey to orange
6. Lastly, click on the green “suggest hero” button
7. Nerf This will generate a suggestion for the hero you should choose in the “suggested pick” area in the upper left side of the page.

## Game Entry
This page will store a record of your game to our database.
![GameEntry](https://user-images.githubusercontent.com/16066443/26999981-f8583926-4d5a-11e7-8a9f-c6e6c016b184.PNG)
Enter your game experiences:
1. first, select the hero you chose to play
2. next select the 5 players on your team.
3. once all 6 team members are chosen, pick the map type and map you used.
4. select if the game round was attack/defend and the result of the round.
5. finally click submit to add to the database.

### Thank you for being a part of this user-enhanced expierence!

## Authors
 - ![Eric Choi](https://github.com/eric2turbo)
 - ![Luis Chen](https://github.com/c297009200)
 - ![Kathrin Davis](https://github.com/KathrinDavis)
 - ![William Leung](https://github.com/thisiswhale)

##### Troubleshoots
 - Dashboard link not implemented, dashboard page renders the user's profile history of GameEntries from the database and based on user's entrys will aggregates its most played Hero.

#### Built with
 - HTML
 - Bootstrap
 - Javascript
 - jQuery
 - Nodejs
 - Express
 - Bcryptjs
 - mySql
