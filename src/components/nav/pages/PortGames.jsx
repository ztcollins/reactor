import { Card, Container } from "react-bootstrap";

export default function PortGames(props) {

    return <div style={{textAlign: "center"}}>
        <h1>Games</h1>
        <br/>

        <p>All games are playable on browser and can be played on this website.</p>

        <Card>
            <h4>Word Rush</h4>
            <Container>
                <p>Word rush is a game developed in P5JS. Play it <a href="games/word_rush">here</a>.</p>
                <p>This game is about typing the randomly chosen word before the time runs out. The player earns score for each word typed out before the bar fills up. As the player's score increases, the bar will fill up faster. This continues until it is virtually impossible to type the word. What score can you get?</p>
                <img className={"ref-images"} src={"/word_rush_ref.png"}></img>
            </Container>
        </Card>
        

        <br/>

        <Card>
            <h4>Halloween Maze</h4>
            <Container>
                <p>Halloween maze is a game developed in bitsy. Play it <a href="games/halloween_maze">here</a>.</p>
                <p>This is an experimental game created in bitsy 3D. Bitsy 3D is a modified version of the original Bitsy. In this game, the player must choose whether they want to collect tricks or treats. Depending on what the player collects, they recieve an ending based on it.</p>
                <img className={"ref-images"} src={"/halloween_maze_ref.png"}></img>
            </Container>
            
        </Card>


        <br/>

        <Card>
            <h4>Santa Sliding</h4>
            <Container fluid={true}>
                <p>Santa sliding is a game developed in puzzlescript. Play it <a href="games/santa_sliding">here</a>.</p>
                <p>In this game, the player controls santa and must deliver the gifts for christmas. The player is tasked with moving across the grid system and <b>sliding</b> to reach the gifts and bring them back to his sleigh.</p>
                <img className={"ref-images"} src={"/santa_sliding_ref.png"}></img>
            </Container>
        </Card>
        
    </div>
}