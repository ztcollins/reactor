import { Card, Container } from "react-bootstrap";

export default function PortGames(props) {

    return <div style={{textAlign: "center"}}>
        <h1>Games</h1>
        <br/>
        <p><i>All games are playable on browser and can be played on this website.</i></p>
        <br/>

        <Card>
            <h4>Word Rush</h4>
            <Container>
                <p>Word rush is a game developed in P5JS. Play it <a href="games/word_rush">here</a>.</p>
                <p>This game is about typing the randomly chosen word before the time runs out. The player earns score for each word typed out before the bar fills up. As the player's score increases, the bar will fill up faster. This continues until it is virtually impossible to type the word. What score can you get?</p>
                <div className={"image-container"}>
                    <img src={"/word_rush.png"}></img>
                </div>
            </Container>
        </Card>
        

        <br/>

        <Card>
            <h4>Halloween Maze</h4>
            <Container>
                <p>Halloween maze is a game developed in bitsy. Play it <a href="games/halloween_maze">here</a>.</p>
                <p>This is an experimental game created in bitsy 3D. Bitsy 3D is a modified version of the original Bitsy. In this game, the player must choose whether they want to collect tricks or treats. Depending on what the player collects, they recieve an ending based on it.</p>
                <div className={"image-container"}>
                    <img src={"/halloween_maze.png"}></img>
                </div>
            </Container>
            
        </Card>


        <br/>

        <Card>
            <h4>Santa Sliding</h4>
            <Container>
                <p>Santa sliding is a game developed in puzzlescript. Play it <a href="games/santa_sliding">here</a>.</p>
                <p>In this game, the player controls santa and must deliver the gifts for christmas. The player is tasked with moving across the grid system and <b>sliding</b> to reach the gifts and bring them back to his sleigh.</p>
                <div className={"image-container"}>
                    <img src={"/santa_sliding.png"}></img>
                </div>
            </Container>
        </Card>
        
    </div>
}