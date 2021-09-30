//MODULES
import React, { Fragment } from 'react';

//ATOMICS COMPONENTS
import LabelAtom from '../../atoms/labels/LabelAtom';
import InputAtom from '../../atoms/inputs/InputAtom';

//STYLES
import './inputsAndLabelsMolecule.css';

interface InputsAndLabelsMoleculeProps {
  htmlFor: string,
  valueLabel: string,
  id: string,
  type: string,
  name: string,
  valueInput: string,
  onChange: any,
  onClick?: any,
}
/**
 * @functionComponent InputsAndLabelsMolecule
 * @componentType     Molecule
 * @childComponent    LabelAtom, InputAtom
 * @param htmlFor     string
 * @param valueLabel  string
 * @param id          string
 * @param type        string
 * @param name        string
 * @param valueInput  string
 * @param onChange    any (optional)
 * @param onClick     any (optional)
 */
const InputsAndLabelsMolecule = (props: InputsAndLabelsMoleculeProps) => {
  console.log('InputsAndLabelsMoleculeProps :', props);
  return (
    <Fragment>
      <div className="inputsAndLabelsMolecule">
        <LabelAtom htmlFor={props.htmlFor} value={props.valueLabel} />
        <InputAtom
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.valueInput}
          onChange={props.onChange}
          onClick={props.onClick}
        />
        {/*Comment obtenir des paramètres optionnels ?*/}
      </div>
    </Fragment>
  );
};
export default InputsAndLabelsMolecule;
