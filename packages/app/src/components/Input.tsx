import { FormEvent } from 'react';
import './Input.scss';

type Props = {
  label: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
