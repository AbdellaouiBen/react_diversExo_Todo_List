import React,{useState} from 'react' 

const Exo3 = (props)=>{
const [titrexo3,setTitrexo3]=useState("inconnu")

const changeTitreExo3=(e)=>{     
    setTitrexo3(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value=""
} 
    return(     

        <div className='bg-secondary container p-5'> 
            <h2 >Welcome {titrexo3}</h2>
            <p>écriver dans l'input ci-dessous le nom de la personne  que vous voulez acceuillir <br/>
            lorsque vous cliquez sur le bouton "GO" le nom que vous avez ajouté dans l'input  sera  alors mis dans le span du h2 et l'input sera alors vidé de tout cotenu. Attention, interdiction de toucher a l'html </p>
            <input type="text"/>
            <button onClick={changeTitreExo3}>GO</button>

        </div>
    )   
}
export default Exo3