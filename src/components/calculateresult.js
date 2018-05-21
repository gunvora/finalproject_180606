

const countries = ["Ryssland", "Egypten",
"Uruguay", "Saudiarabien", "Marocko",
"Iran", "Portugal", "Spanien",
"Frankrike", "Australien"]

export const calculateResult = (games) => {
  const result = countries.map((country) => {
    let playedGames = 0
    let wins = 0
    let draws = 0
    let losts = 0
    let totOwnScore = 0
    let totAgainstScore = 0
    let diffScore = 0
    let points = 0
    let group = ""

    games.map((game) => {
      if ((game.awayScore !== null) && (game.homeScore !== null)) {
        if (country === game.homeTeam) {
          group = game.group
          playedGames += 1
          totOwnScore += parseInt(game.homeScore)
          totAgainstScore += parseInt(game.awayScore)
          diffScore = (totOwnScore - totAgainstScore)
          if (game.homeScore > game.awayScore){
            points += 3
            wins += 1
          } else if (game.homeScore === game.awayScore) {
            points += 1
            draws += 1
          } else {
            losts += 1
          }
        } else if (country === game.awayTeam) {
          group = game.group
            playedGames += 1
            totOwnScore += parseInt(game.awayScore)
            totAgainstScore += parseInt(game.homeScore)
            diffScore = (totOwnScore - totAgainstScore)
            if (game.awayScore > game.homeScore) {
              points += 3
              wins += 1
            } else if (game.homeScore === game.awayScore) {
              points += 1
              draws += 1
            } else {
              losts += 1
            }
        }
      }

      })

      return {country: country, playedGames: playedGames,
        wins: wins, draws: draws, losts: losts,
        totOwnScore: totOwnScore, totAgainstScore: totAgainstScore,
        points: points, group: group, diffScore: diffScore}

    })
  console.log(result)
  return result
}
