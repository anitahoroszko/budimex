import { Button } from "@mui/material";
interface IProps {
  label: string;
  changeStep: () => void;
}
const FormButton = ({ label, changeStep }: IProps) => (
  <Button variant="contained" sx={{ marginLeft: 2 }} onClick={changeStep}>
    {label}
  </Button>
);

export default FormButton;
