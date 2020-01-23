import React,{useState} from 'react' 

const Exo4 = (props)=>{
const [petitCarreUn,setPetitCarreUn]=useState("petitCarre d-block")
const [petitCarreDeux,setPetitCarreDeux]=useState("petitCarre d-none")
const [comptClick,setComptClick]=useState(0)

const handleClick=()=>{  
    console.log(comptClick);
    
    setComptClick(comptClick + 1)
    console.log(comptClick);
    

    if(comptClick%2===1){
        setPetitCarreUn("petitCarre d-block");
        setPetitCarreDeux("petitCarre d-none")
    } else{
        setPetitCarreUn("petitCarre d-none");
        setPetitCarreDeux("petitCarre d-block")
    }
}
    return(     

        <div className='bg-secondary container p-5'> 
            <h2 > Déplacez les éléments</h2>

            <div className='gdDivExo4'>
                <div className="grandCarre"> 
                    <div className={petitCarreUn}></div>
                </div>
                <div className="grandCarre">
                    <div className={petitCarreDeux}></div>
                </div>
            </div>
  
            <div className='exo4DivBtn'>
                <div className='exo4DivBtn2'>
                    <button className="btn btn-warning text-white" onClick={handleClick}>Change place</button>
                    <div className="btn bg-success text-white" >Nombre de {comptClick}</div>
                </div>
            </div>
            
        </div>
    )   
}
export default Exo4