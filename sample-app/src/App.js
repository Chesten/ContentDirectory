import Table from './Components/table'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Chesten VanPelt's Directory</h2>
        <p>This is a simple "home page" that showcases some of my work.<br></br>
        Site links will redirect to Vercel hosted app. <br></br>
        The Repo link redirecting to the GitHub repo</p>
        {/* I wanted to have some aspect of React for this simple app so
            I sperated this table out. */}
        <Table></Table>

        <p>
          Log in information for the Budget App, to get a sence of what it is 
          capible of.  <br></br>Email: abc@mail.com  Password: 123123
        </p>
        {/** maybe add something little for react functionality, with props and
         * such.  Like a enter name and have it change something?  or something
         * else to have interactivity more then just link redirtection.  
         * 
         * also figure out some kind of a way to have resume linked?  
         * Link to virus total?  maybe break that down to a web app as well?  
         * 
         * Fix any comments in the GitHub links, as well as here
        */}

      </header>

      

    </div>
  );
}

export default App;
