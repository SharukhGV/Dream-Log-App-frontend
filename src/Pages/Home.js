
function Home(){



    const pixstyle= {
        fontSize:"12px"
    }
    
    return(
    <div className="homePAge">
    <h1>Welcome to Dream Log App</h1>
    <p>A Full-Stack Application that uses PostgreSQL databse. </p>
    <p style={pixstyle}>Images not sourced from API can be found at <a href="https://www.pixabay.com" alt="pixabay site">pixabay's website</a>. This site provides free images for personal and commercial use.
    </p>
    <p style={pixstyle}>Images sourced from pixabay have been edited by the <a href="https://www.gimp.org" alt="GIMP site">GIMP software</a></p>
    
    <div className="cardContact">
    <h3 >About the Developer</h3>
    
    <p><strong>Name:</strong> Sharukh G. Velupillai</p>
    <p><strong>Organization:</strong> PURSUIT</p>
    <p>
            <strong>GitHub:</strong>
            <a href="https://github.com/SharukhGV">
    Sharukh's GitHub Portfolio        </a>
          </p>
    </div>
    
    
    
    </div>
    
    )
    }
    
    
    export default Home;