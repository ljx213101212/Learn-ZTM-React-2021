interface CustomButtonProps {
  type: string;
  children: React.ReactNode;
}

interface FormInputProps {
  handleChange: (event: FormEvent) => void;
  label: string;
}
