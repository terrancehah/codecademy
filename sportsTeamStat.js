const team = {
    _players: [
      {
        firstName: 'Dejounte',
        lastName: 'Murray',
        age: 24
      },
      {
        firstName: 'Derrick',
        lastName: 'White',
        age: 26
      },
      {
        firstName: 'Demar',
        lastName: 'DeRozan',
        age: 31
      },
    ],
    get players() {
      return this._players;
      },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        };
      this.players.push(player);
      },
  
    _games: [
      {
        opponent: 'Wizards',
        teamPoints: 121,
        opponentPoints: 101
      },
      {
        opponent: 'Mavericks',
        teamPoints: 117,
        opponentPoints: 122
      },
      {
        opponent: 'Warriors',
        teamPoints: 99,
        opponentPoints: 121
      },
      ],
    get games() {
      return this._games
      },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
        };
      this.games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Trail Blazers', 125, 104);
  team.addGame('Rockets', 103, 91);
  team.addGame('Rockets', 105, 109);
  
  console.log(team._players);
  console.log(team._games);