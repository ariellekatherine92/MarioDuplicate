add([
    text("Mario Built With Kaboomjs", 0),
    pos(50, 50),
]);

add([
  text("Directions: Use arrow keys to move Mario across the screen.", 0),
  pos(25, 25),
])

add([
  text("Use space bar to jump. Collect all the coins and defeat the evil mushrooms!", 0),
  pos(35, 35),
])

add([
    pos(100, 100),
    text("Click anywhere on screen to start!", 15),
]);

mouseClick(() => {
  go('main');
});
