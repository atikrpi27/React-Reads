var title = "Todo Apps"
var description = "Grief deigned kiss crime not vexed, sighed me or from childe, he company were than loved the, at did nor.Youth a thy sighed feeble saw his that his, the losel was perchance misery breast day. Flash within seek could minstrels. Full delphi scorching dwell like, land land start to mote noontide lemans."
let date = new Date();

const headingCss = {
    marginBottom: '10px',
    color: 'purple',
}

function Heading(){
    return <div className='heading'>
        <h1 style={{ color: '#a90000', fontSize: '20px', textAlign: 'center' }} className='heading-welcome'>Welcome to our first React App.</h1>      {/*using inline css*/}
        <h3 className='heading-style'>{title}</h3>     {/*using external css from public folder */}
        <p style={headingCss} >{description}</p>     {/*using internal css*/}
        <p className='date-style'>{"Today date is: " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</p>     {/*import external css from src folder */}
    </div>
}

export default Heading