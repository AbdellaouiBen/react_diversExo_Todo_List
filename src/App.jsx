import React,{useState} from 'react'

import Titre from "./components/Titre.jsx"
import Nav from "./components/Nav.jsx"
import Exo1 from "./components/Exo1.jsx"
import Exo2 from "./components/Exo2.jsx"
import Exo3 from "./components/Exo3.jsx"
import Exo4 from "./components/Exo4.jsx"
import Exo5 from "./components/Exo5.jsx"
import Exo6 from "./components/Exo6.jsx"
import Exo7 from "./components/Exo7.jsx"
     

const App=()=>{  

    const [exo, setExo] = useState([
        { div: <Exo1 />, etat: "block", lien: 'col-3 text-center p-2' },
        { div: <Exo2 />, etat: "hide", lien: 'col-3 text-center p-2' },
        { div: <Exo3 />, etat: "hide", lien: 'col-3 text-center p-2' },
        { div: <Exo4 />, etat: "hide", lien: 'col-3 text-center p-2' },
        { div: <Exo5 />, etat: "hide", lien: 'col-3 text-center p-2' },
        { div: <Exo6 />, etat: "hide", lien: 'col-3 text-center p-2' },
        { div: <Exo7 />, etat: "hide", lien: 'col-3 text-center p-2' }
    ]);
 


 
    return(
    <div className=''> 

        <Titre />
        <div className='container w-75'>
                <Nav exo={exo} setExo={setExo} />
                {exo.map((e, index) => e.etat === 'block' && <div className={'p-5'} key={index}>{e.div}</div>)}

        </div>
    </div>
    )                  
} 

export default App          