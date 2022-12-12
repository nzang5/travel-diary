import photo from "../images/globe.png"

function Navbar(){

    return(
        <div className="navbar">
            <img src={photo} alt="globe"></img>
            <h2>my travel journal.</h2>

        </div>
    )
}

export default Navbar;