// ModifierDonnees.js
import React, { useState } from 'react';
import { supabase } from "../supabase";

const ModifierDonnees = ({ donnee }) => {
  const [nouveauNom, setNouveauNom] = useState('');

  const modifierDonnee = async () => {
    const { data, error } = await supabase
      .from('votre_table')
      .update({ nom: nouveauNom })
      .eq('id', donnee.id);

    if (error) {
      console.error('Erreur lors de la modification des données :', error.message);
      return;
    }

    // Mise à jour de l'affichage ou autres actions nécessaires
  };

  return (
    <div>
      <h2>Modifier Donnée</h2>
      <input
        type="text"
        value={nouveauNom}
        onChange={(e) => setNouveauNom(e.target.value)}
      />
      <button onClick={modifierDonnee}>Modifier</button>
    </div>
  );
};

export default ModifierDonnees;
