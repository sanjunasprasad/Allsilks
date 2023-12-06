
import React from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import Rowpost from './components/rowpost/rowpost';
import {action,orginals,comedyMovies,romanceMovies} from './urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>

        <Rowpost url={orginals} title='Netflix Orginals'/>
        <Rowpost url={action} title='Action Movies' isSmall />
        <Rowpost url={comedyMovies} title='Comedy Movies' isSmall />
        <Rowpost url={romanceMovies} title='Romantic Movies' isSmall /> 
    </div>
  );
}
export default App;
