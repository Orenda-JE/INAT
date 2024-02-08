import React from 'react';
import InputField from './InputField';
import Button from './Button';
import './Inscription.css';

const Inscription= () => {
    return<div className='Inscription' >
      <div className='titles'>
        <h1>INSTITUT NATIONAL  AGRONOMIQUE DE TUNISIE</h1>
        <h2>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h2>
      </div>
      <form className='form'>
        <h1>Inscription</h1>
        <p id='pp'>Ajouter toutes les informations</p>
        <InputField type="Nom" placeholder=" Nom" id="Nom"/>
        <InputField type="Prenom" placeholder=" Prenom" id="Prenom"/>
        <InputField type="email" placeholder=" E-mail" id="email"/>
        <InputField type="password" placeholder=" Mot de passe"  id="pwd"/>
        <InputField type="password" placeholder=" Confirmer votre mot de passe" id="conf-email"/>
        <Button text="S'inscrire" id="butt"/> 
      </form>
    </div>
    };

export default Inscription;