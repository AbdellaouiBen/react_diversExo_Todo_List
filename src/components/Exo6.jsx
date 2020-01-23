import React,{useState} from 'react' 

const Exo6 = (props)=>{
    //niveau 1
    const [repNiv1,setRepNiv1]=useState("?")

    const handleClick=(e)=>{      
        setRepNiv1(Number(e.target.previousElementSibling.previousElementSibling.previousElementSibling.value) +Number(e.target.previousElementSibling.value) )
    }

    // niveau 2 
    const [input, setInput] = useState(''); 

    const [reponse, setReponse] = useState('');

    const [signe, setSigne] = useState('');

    const [nb, setNb] = useState('');
    const [nb2, setNb2] = useState('');

    const [ttcalcul, setTtcalcul ] = useState('');

    const [count, setCount] = useState(0);

    let tab = [{ nb: nb, fct: setNb }, { nb: nb2, fct: setNb2 }]

    const egal = () => {
        // setReponse(reponse + ttcalcul);
        switch (signe) {   
            case '+':
                setReponse(ttcalcul + ' = ' + (Number(nb) + Number(nb2)));
                break;
            case '-':
                setReponse(ttcalcul + ' = ' + (Number(nb) - Number(nb2)));
                break;
            case '*':
                setReponse(ttcalcul + ' = ' + (Number(nb) * Number(nb2)));
                break;
            case '/':
                setReponse(ttcalcul + ' = ' + (Number(nb) / Number(nb2)));
                break;         
            default:
                setReponse('SyntaxError');
                   
        }
        setCount(0);
        setNb('');
        setNb2('');
        setTtcalcul('');
        setInput('');
        setSigne('');
 
    }       
    const ajoute = (e) => {

        setInput(input + e.target.innerText);
        setTtcalcul(ttcalcul + e.target.innerText); 
        tab[count].fct(tab[count].nb + e.target.innerText);

    }
    const operator = (e) => {

        setSigne(e.target.innerText);
        setReponse(ttcalcul + e.target.innerText);
        setTtcalcul(ttcalcul + e.target.innerText);
        setInput('');
        setCount((count + 1) % 2)
    }
    const clear = () => {
        setInput('');
        setReponse(0);     
        setCount(0);
        setNb('');
        setNb2('');
        setTtcalcul('')
    }

    return(     

        <div className='bg-secondary container p-5'> 
            <h1>Création de calculatrice</h1>
            <h2>Niveau 1</h2>
                <div>
                    <input type="text"/>
                    <span className='mx-1'>+</span> 
                    <input type="text"/>
                    <button className='mx-1' onClick={handleClick}>=</button>
                    <span >{repNiv1}</span>
                </div>
            <h2>Niveau 2</h2>
            <div className="calculatrice  bg-dark text-white p-5 w-50">
                <div className="resultat w-75">
                    <p className='text-right'>{reponse}</p>
                    <input type="text" className='text-dark' value={input} onChange={() => setInput(input)} />
                </div>

                <div className="boutons">
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>1</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>2</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>3</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>+</div>
                    <div className="w-100"></div>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>4</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>5</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>6</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>-</div>
                    <div className="w-100"></div>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>7</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>8</button>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>9</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>*</div>
                    <div className="w-100"></div>
                    <div className="btn btn-danger col-2 ml-2 mt-3" onClick={clear}>C</div>
                    <button className="btn btn-light col-2 ml-2 mt-3" onClick={ajoute}>0</button>
                    <div className="btn btn-success col-2 ml-2 mt-3" onClick={egal}>=</div>
                    <div className="btn btn-primary col-2 ml-2 mt-3" onClick={operator}>/</div>
                </div>

            </div>

        </div>
    )

}
export default Exo6













































// //niveau 2


// const [inputValue,setInputValue]= useState("");        
// const [inputPremierePartie,setInputPremierePartie]= useState("");  
// const [signe,setSigne]= useState("");  
// const [inputDeuxiemePartie,setInputDeuxiemePartie]= useState("");    
// const [repNiv2,setRepNiv2]= useState("");
// const [save,setSave]= useState("");
// const [partie,setPartie]= useState("un");


        


// //btn number

// const handleClickBtnNumber=(e)=>{   
// partie==="un"?setInputPremierePartie(inputPremierePartie + e.target.name) : setInputDeuxiemePartie(inputDeuxiemePartie+e.target.name)
// setInputValue(inputValue + e.target.name)
// } 
// //btn operateur 

// const handleClickBtnOperateur=(e)=>{

// // setInputPremierePartie(inputValue)
// setInputValue(inputValue + e.target.innerText)
// setSigne(e.target.innerText)
// setSave(inputPremierePartie + e.target.innerText)
// setPartie("deux")
// }



// //btn clear
// const clear = (e)=> {         
// setInputValue("")
// setPartie("un")
// setRepNiv2("") 
// setInputPremierePartie("")
// setInputDeuxiemePartie('')
// setTempo('')
// setSave('')
// setRepNiv2('')
// }       
// // btn egal

// const[tempo,setTempo]= useState('')
// const handleClickResultat=(e)=>{

// setSave(save + inputDeuxiemePartie)
// switch(signe){
//     case "+":
//         setTempo(Number(inputPremierePartie) + Number(inputDeuxiemePartie))
//         setRepNiv2(save +" = "+tempo)
//         break;
//     case "-":
//         setTempo(Number(inputPremierePartie) - Number(inputDeuxiemePartie))
//         setRepNiv2(save +" = "+tempo)
//         break;
//     case "*":
//         setTempo(Number(inputPremierePartie) * Number(inputDeuxiemePartie))
//         setRepNiv2(save +" = "+tempo)
//         break;
//     case "/":
//         setTempo(Number(inputPremierePartie) / Number(inputDeuxiemePartie))
//         setRepNiv2(save +" = "+tempo)
//         break;  
//     default:
//         alert('error')  
//     } 
//     setInputValue("")
// }


// return(     

//     <div className='bg-secondary container p-5'> 
//     <h1>Création de calculatrice</h1>
//     <h2>Niveau 1</h2>
//         <div>
//             <input type="text"/>
//             <span className='mx-1'>+</span> 
//             <input type="text"/>
//             <button className='mx-1' onClick={handleClick}>=</button>
//             <span >{repNiv1}</span>
//         </div>
//     <h2>Niveau 2</h2>
//         <div className="calculatrice">
//             <span className="repNv2">{repNiv2}</span>    
//             <input type="text" value={inputValue}/>       
//             <div className="divCalcul">  

//                 <div className="ligne1">
//                     <button className="number" name={1} onClick={handleClickBtnNumber}>1</button>
//                     <button className="number" name={2} onClick={handleClickBtnNumber}>2</button>
//                     <button className="number" name={3} onClick={handleClickBtnNumber}>3</button>
//                     <button className="btnPlus" name="+" onClick={handleClickBtnOperateur}>+</button>
//                 </div> 
//                 <div className="ligne2">
//                     <button className="number" name={4} onClick={handleClickBtnNumber}>4</button>
//                     <button className="number" name={5} onClick={handleClickBtnNumber}>5</button>
//                     <button className="number" name={6} onClick={handleClickBtnNumber}>6</button>
//                     <button className='btnMoins' name="-" onClick={handleClickBtnOperateur}>-</button>
//                 </div>
//                 <div className="ligne3">
//                     <button className="number" name={7} onClick={handleClickBtnNumber}>7</button>
//                     <button className="number" name={8} onClick={handleClickBtnNumber}>8</button>
//                     <button className="number" name={9} onClick={handleClickBtnNumber}>9</button>
//                     <button className='btnMulti' name="*" onClick={handleClickBtnOperateur}>*</button>
//                 </div> 
//                 <div className="ligne4">
//                     <button className='btnClear' onClick={clear}>C</button>
//                     <button className="number" name={0} onClick={handleClickBtnNumber}>0</button>
//                     <button className='btnEgal' onClick={handleClickResultat}>=</button>
//                     <button className='btnDivise' onClick={handleClickBtnOperateur}>/</button>
//                 </div>
//             </div>

//         </div>
        
//     </div>
// )   