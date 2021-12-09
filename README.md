## HTML Setup

### A 'destination' for:
- player HP
- list of living goblins
  - for each goblin show
    - their name
    - their HP
- defeated goblins

### Clickables
- Each goblin is clickable
  - On click . . .
    - possibly decrmement this goblin's HP
    - possibly decrment player HP
    - possibly increment defeatedGoblins
    - update the DOM with new goblin, player, and defeated goblin state. 
    (render deated goblins differently)
- New goblin form
 - On Submit . . .
  - User has supplied a name and submitted the form
  - Make a new goblin object with that user input
  - Add that object to the array of goblins in state
  - "update a list"
    - clear out the list DOM
    - loop through the goblins
    - render a new goblin DOM element for each item
    - append that element to the HTML

## Stretch goal ideas
- Change the player image to something stronger-looking every time they hit a new threshold (killed first goblin, killed three goblins).
- Change the player image based on their current health to show how worse-for-the-wear they've become.
- Give goblins a random 'strength' property that determines how much damage they do to the player.
- Give goblins a random 'agility' property that determines how often the play can hit them.
- Give goblins a random 'dexterity' property that determines how often they hit the player.
- Give the player a 'strength' property starting at 1 that determines how much damage they do to goblins. Every time a goblin dies, increment this property.
- Add different kinds of monsters and render them differently by adding a 'type' property to the monster.

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|     1 |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load, see the HP and names of at least two default goblins |        2 |
| On submitting the 'challenge goblin' form, add a new goblin object (with 3 HP and a name) to state and display it to the DOM | 2 |
| On clicking a goblin, it should tell the user whether they hit the goblin or not, then update state and DOM appropriately with new HP |     3 |
| On clicking a goblin, it should tell the user whether the goblin hit the player or not, then update state and DOM appropriately with new HP |     1 |
| The number of vanquished goblins should be visible when mushroom state changes.  |        2 |
| Render dead goblins differently, and disable clicking on them |        2 |
| When the user's HP is 0, launch a game over message |        2 |

| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| PURE: `renderGoblin(goblin)` : return DOM node` |2|
| IMPURE: `displayGoblins()` : clears and appends goblin daya to goblin list DOM node` | 2|
