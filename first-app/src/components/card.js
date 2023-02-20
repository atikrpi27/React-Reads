var card_title = "Card Title"
var card_description = "Grief deigned kiss crime not vexed, sighed me or from childe, he company were than loved the, at did nor.Youth a thy sighed feeble saw his that his, the losel was perchance misery breast day.";
let date = new Date();

//====================== Using giver input ======================
function Card() {
    return <div className='card'>
        <h3 className='card-title'>{card_title}</h3>
        <p className='card-desc'>{card_description}</p>
        <p className='card-date'>{"Date is: " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear()}</p>
    </div>
}

//====================== Using Props ======================
function PropsCard(props) {
    return <div className='card'>
        <h3 className='card-title'>{props.card_title}</h3>
        <p className='card-desc'>{props.card_description}</p>
        <p className='card-date'>{"Date is: " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear()}</p>
    </div>
}

export {Card , PropsCard }