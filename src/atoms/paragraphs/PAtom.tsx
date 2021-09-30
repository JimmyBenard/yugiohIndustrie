//MODULES
import React from 'react';

//STYLES
import './pAtom.css';

interface PAtomProps {
  value: string;
}
/**
 * @constant PAtom -- Formate un paragraphe
 * @param props.value Insérer un attribut value représentant le contenu du paragraphe.
 *
 */
const PAtom = (props: PAtomProps) => {
  return <p className="p">{props.value}</p>;
};
export default PAtom;
