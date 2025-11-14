import Strike from "./Strike"
import Tile from "./Tile"

function Board(){
    return <div className="Board">
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Strike/>
    </div>
}

export default Board