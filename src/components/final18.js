import React from "react"
import Game from "./game"

class Final18 extends React.Component {



render() {

  // console.log(this.props.final18)

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> ÅTTONDELSFINAL </span></p>
          </div>
          {this.props.final18.map((final18Data) => {


            // if ((final18Data.awayScore !== null) && (final18Data.homeScore !== null))
            // console.log
            return (<Game
                    addScore={this.props.addScore}
                    game={final18Data} />)
          })}

          <h1>hw</h1>
        </div>
    )
  }
}

    export default Final18


    // {this.props.groups.map((xx) => {
    //
    // })}


    // groups   game => {
    //   const A1 = {final18[0].homeTeamKeys.group][final18.homeTeamKeys.index]}
    //
    //   const country18 = [final18.homeTeamKeys.group][final18.homeTeamKeys.index]}


    //   <div>
    //
    //   game => {
    //   const country = group[game.homeTeamKeys.group][game.homeTeamKeys.index]}
    //
    //
    //     { this.props.groups.map((final18Data) => {
    //
    //       if (final18Data.group === this.props.match.params.groupId)
    //       {
    //        return (<Game
    //
    //
    //               addScore = {this.props.addScore}
    //               game={gameData}
    //               country={this.props.country}
    //               playedGames={this.props.playedGames}
    //               wins={this.props.wins}
    //               draws={this.props.draws}
    //               losts={this.props.losts}
    //               totOwnScore={this.props.totOwnScore}
    //               totAgainstScore={this.props.totAgainstScore}
    //               points={this.props.points} />)
    //     }
    //   })}
    //   </div>
