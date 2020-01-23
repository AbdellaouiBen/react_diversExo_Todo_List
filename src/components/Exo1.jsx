import React,{useState} from 'react' 

const Exo1 = (props)=>{
let listeDocu = ["innerText","innerHTML","querySelector()","querySelectorAll()","style","classList"]
const listeDocumentation= listeDocu.map((e)=>{
    return <li key={e}>{e}</li>
})
const [titrexo1,setTitrexo1]=useState("Le titre non modifié")
const [classbtnexo1,setClassbtnexo1]=useState("d-block")
const [classtitreexo1,setClasstitreexo1]=useState("text-white ")
const changeTitreExo1=()=>{ 
    setTitrexo1("Le tire modifié");
    setClassbtnexo1('d-none ');
    setClasstitreexo1('text-danger bg-primary')
    
}


    return(   
        <div className='bg-secondary container p-5'> 
            <h2 className={classtitreexo1}>{titrexo1}</h2>
            <p>list de propriété et de mathode  à retrouver dans la documentation</p>
            <ul>
                {listeDocumentation}
            </ul>
            <p>Changer le contenu du h2par "Le tire modifié"</p>
            <p>Changer la couleur du h2 (la couleur que vous voulez)</p>
            <p>ajouter une class background de bootstrap au h2</p>
            <button className={classbtnexo1} onClick={changeTitreExo1}>Changer le titre</button>

        </div>
    )   
}
export default Exo1 