import React from "react";
import {Card , PropsCard } from "./components/card"
import Heading from "./components/heading";

function App() {
    return<div>
        {/*====================== Using giver input ======================*/}
        <Heading />
        <Card />
        <Card />
        <Card />

        {/*====================== Using Props ======================*/}
        <PropsCard card_title="This is Title 1 By Props" card_description="Mood like him the disappointed was girls. Eremites sacred shell did care sorrow heartless it, ye a scape parasites were heart ye that to native. In harolds venerable uses of."/>
        <PropsCard card_title="This is Title 2 By Props" card_description="This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description. This is description." />
        <PropsCard card_title="This is Title 3 By Props" card_description="Wie still du herzen gehofft o der. Der was komm gehn du gehn gesellschaft du. Grambefangen teuren bester bist perlet, spät dame liebe mein mit zürnen, denkst." />        
    </div>
}

export default App