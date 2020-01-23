import React,{useState} from 'react' 
import oeufimg from '../images/egg.png'

const Exo5 = (props)=>{
const [oeufs,setOeufs]=useState([])

    const handleClick=()=>{  
        let tabTemp =oeufs.slice()
        tabTemp.push(oeufimg)
        setOeufs(tabTemp) }

    
    return( <div className='bg-secondary container p-5'> 
            <h2 > Générer des éléments du DOM </h2>
            <p>Cliquez sur le boutton  ci-dessous pour generer des oeufs</p>
            <button className="btn btn-success text-white" onClick={handleClick}>Ajouter un oeuf</button>
            <div className='imgExo5'>
            
                {oeufs.map((e)=>
                    <img src={e} alt=""/>
                )}
            </div>
            
        </div>
    )   
}

export default Exo5 