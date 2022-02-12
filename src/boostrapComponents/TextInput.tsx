import { ChangeEvent, FC } from 'react';
import { Form } from 'react-bootstrap';

interface TextInputProps {
  label: string;
  type: 'text' | 'password';
  placeholder?: string;
  formText?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  formText,
  onChange,
  name,
  value,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {formText && <Form.Text className="text-muted">{formText}</Form.Text>}
    </Form.Group>
  );
};

export default TextInput;
