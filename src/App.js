import './App.css';
import {isMobile} from 'react-device-detect';
import randomAdvice from './api_call';
import {useState, useEffect} from 'react';
function App() {

  const dividerSource = isMobile? '/images/pattern-divider-mobile.svg': '/images/pattern-divider-desktop.svg';
  const [advice, setAdvice] = useState();
  useEffect(()=>{
    adviceShift();
  },[]);
  function adviceShift(){
    const response = randomAdvice()
    response.then(x=>{setAdvice(x.slip)})
  }
  return (
    <div className="App">
      <div className='advice-box'>
          <div className='advice-number'>
            ADVICE #{advice? advice.id:false}
          </div>
          <div className='advice'>
              "{advice? advice.advice: false}"
          </div>
          <div className='advice-divider'>
              <img src={process.env.PUBLIC_URL + dividerSource} alt='divider'></img>
          </div>
          <div className='advice-gen-button' onClick={adviceShift}>
            <span id="adg-button"><img src={process.env.PUBLIC_URL + '/images/icon-dice.svg'} alt='dice'></img></span>
          </div>
      </div>

    </div>
  );
}

export default App;
