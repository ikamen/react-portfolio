import avatar from '../assets/avatar.png'

const styles = {
  display: 'flex',
  flexDirection: 'column'
}

function Home() {
    return (
      // hero banner
      <div style={styles}>
        <section className ="hero-banner">
          <div>
            <h2>The most keen project manager to become a web developer!</h2>
          </div>
        </section>

        {/* about me */}
        <section className ="about">
          <h2 className ="label">About Me</h2>
          <img src={avatar} width="150px" alt="Kamen avatar" />
          <div>
            <p>My name is Kamen Ivanov</p>
            <p>I'm a project manager who was once a developer and is keen to go back to being a developer</p>
            <p>This is my portfolio site</p>
          </div>
        </section>
      </div>
    )
  }
  
  export default Home;  