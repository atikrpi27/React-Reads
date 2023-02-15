import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

/*================== UsingJSX ==================*/
// Js variable
var title = "Todo Apps"
var description = "Grief deigned kiss crime not vexed, sighed me or from childe, he company were than loved the, at did nor.Youth a thy sighed feeble saw his that his, the losel was perchance misery breast day. Flash within seek could minstrels. Full delphi scorching dwell like, land land start to mote noontide lemans. Sad deigned soul artless way, he native start basked sighed might chill, mother holy third hill sought."
let date = new Date();
console.log(date);

const headingCss = {
  color: 'purple',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={{ color: 'red', fontSize: '18px' }}>Welcome to our first React App.</h1>      {/*using inline css*/}
    <h3 className='heading-style'>{title}</h3>     {/*using external css from public folder */}
    <p style={headingCss}>{description}</p>     {/*using internal css*/}
    <p className='date-style'>{"Today date is: " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</p>     //{/*import external css from src folder */}
  </div>
);