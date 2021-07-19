import React, {useState} from "react";
import ButtonChoice from "./buttonChoice";

function OptionsGame() {

    const utils = {
        // pick a random number between min and max (edges included)
        random: (min, max) => min + Math.floor(Math.random() * (max - min + 1))
    };

    const [allCollors, setAllCollors] = useState([
        {id: 0, collor: 'green', isReadOnly: false},
        {id: 1, collor: 'blue', isReadOnly: false},
        {id: 2, collor: 'yellow', isReadOnly: false},
        {id: 3, collor: 'red', isReadOnly: false},
        {id: 4, collor: 'black', isReadOnly: false},
        {id: 5, collor: 'violet', isReadOnly: false},
        {id: 6, collor: 'purple', isReadOnly: false},
        {id: 7, collor: 'pink', isReadOnly: false},
        {id: 8, collor: 'orange', isReadOnly: false},
        {id: 9, collor: 'brown', isReadOnly: false},
        {id: 10, collor: 'gray', isReadOnly: false},
        {id: 11, collor: 'aqua', isReadOnly: false},
        {id: 12, collor: 'chocolate', isReadOnly: false},
        {id: 13, collor: 'darkblue', isReadOnly: false},
        {id: 14, collor: 'lime', isReadOnly: false},
        {id: 15, collor: 'teal', isReadOnly: false},
    ]);

    const clickAction = (event, id) => {
        allCollors[id].isReadOnly = true;
        const n = [...allCollors];
        console.log(n);
        setAllCollors(n);
        event.preventDefault();

    }

    const getTheCollors = (nrCollors) => {
        const collorsArray = [];
        console.log("DONSDLKMALDMDLMDLDMKL");

        for (let i = 0; i < nrCollors; i++) {
            while (true) {
                const aux = utils.random(0, allCollors.length - 1);

                if(!collorsArray.find(c => c.collor === allCollors[aux].collor)){
                    collorsArray.push({isReadOnly:allCollors[aux].isReadOnly, key:allCollors[aux].id, collor: allCollors[aux].collor});
                    console.log(allCollors[aux].collor);
                    break;
                }
            }
        }
        return collorsArray;
    }


    return (
        <div>
            {
                getTheCollors(5).map( c =>
                <ButtonChoice isReadOnly={allCollors[c.key].isReadOnly} key={c.key} id={c.key} collor={c.collor} clickAction={clickAction}/>
                )
            }
        </div>
    );
}

export default OptionsGame;

