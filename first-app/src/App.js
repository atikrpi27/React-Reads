import React from "react";
import { Card, PropsCard, DisctCard } from "./components/card"
import Heading from "./components/heading"
import UniqueIDList from "./components/uniqueIDList"
import Data from "./data.json"

function App() {

    let cards = [];
    for (let x = 0; x < Data.length; x++) {
        cards.push(<PropsCard key={x} card_title={Data[x].card_titles} card_description={Data[x].card_descriptions} />)
    }

    return <div>
        {/*====================== Using giver static input ======================*/}
        <Heading />
        <Card />
        <Card />
        <Card />

        {/*====================== Using Props ======================*/}
        <PropsCard card_title="This is Title 1 By Props" card_description="Mood like him the disappointed was girls. Eremites sacred shell did care sorrow heartless it, ye a scape parasites were heart ye that to native. In harolds venerable uses of." />
        <PropsCard card_title="This is Title 2 By Props" card_description="This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description." />
        <PropsCard card_title="This is Title 3 By Props" card_description="Wie still du herzen gehofft o der. Der was komm gehn du gehn gesellschaft du. Grambefangen teuren bester bist perlet, spät dame liebe mein mit zürnen, denkst." />

        {/*====================== Using Destructuring ======================*/}
        <DisctCard card_title="This is Title 4 By Destructuring" card_description="Grimace et pourquoi mon mignard son, d'une. Extase l'ondulation vivre corps trôner de. M'appelle regard a vois quel la pauvre. Et d'un surtout de tes non." />
        <DisctCard card_title="This is Title 5 By Destructuring" card_description="Estis de restadi de zuron tro alproksimigxis ferdeko sed iris sxipon. Unu tie afero kaj kauxzis anglujo. Eltrovus ni renkonti enmaro." />
        <DisctCard card_title="This is Title 6 By Destructuring" card_description="Alla quale informati sue piaceri dovendo sue ancora. Son dio sí beati che il ora porgere quegli quella, da sí apparire delle quale. Essilio furon dea suo e cosa che.." />

        {/*====================== Using Props and json data ======================*/}
        <PropsCard card_title={Data[0].card_titles} card_description={Data[0].card_descriptions} />
        {/* after load data.json file */}
        <PropsCard card_title={Data[1].card_titles} card_description={Data[1].card_descriptions} />
        <PropsCard card_title={Data[2].card_titles} card_description={Data[2].card_descriptions} />
        {/* we can also use for loop and map function */}
        {cards}    {/* we use for loop above this page and Called here the Array  */}
        {/* using map  */}
        {Data.map((item, index) => <PropsCard key={index} card_title={item.card_titles} card_description={item.card_descriptions} />)}

        {/*====================== Unique ID with json data Using json data file ======================*/}
        <UniqueIDList />
    </div>
}

export default App