import React from 'react';
const Nav = (props) => {
    const afficher = (e) => {
        let temp = [...props.exo];
        temp.forEach(element => {
            element.etat = 'hide';
            element.lien = 'col-3 text-center';
        });
        temp[e.target.id].etat = 'block';
        temp[e.target.id].lien = 'col-3 bg-primary text-white  text-center';
        props.setExo(temp); 

    }    

     

    return (
        <nav className='row container px-5 pt-5'>
            {props.exo.map((e, index) => <a className={e.lien} onClick={afficher} href='#root' key={index} id={index}>Exercice{index + 1}</a>)}
        </nav>
    )
};
export default Nav
