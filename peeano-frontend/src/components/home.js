import React, {useState, useContext} from 'react';
import './style.css';
import PianoSketch from './sketches/sketch';
import UserContext from '../context/UserContext';
import axios from 'axios';

function Home() {

  const {userData} = useContext(UserContext);

  // ** db keyMapping stuff

  // unused
  const getKeyMappings = async(e) => {
    if(userData.user) {
      const keyBindRes = await axios.get("http://localhost:3001/getKeybinds", 
        {user: userData.user.id});
      return keyBindRes.data.keybindings;
    }
  }


  return (
  <div className='linkBody'>
		<div className='mainContainer'>
			<div className='titleContainer'>
				<h1 className='homeTitle'></h1>
				<div className='pianoBckgrd'>
					<div id='pianoPage'> 
          <PianoSketch userData={userData}/> 
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default Home;