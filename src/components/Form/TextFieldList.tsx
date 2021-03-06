import FormikTextField from "./FormikTextField";
import { Grid } from "@material-ui/core";
import { IFieldProps } from "./types";
interface IProps {
  fieldList: IFieldProps[];
}
function TextFieldList({ fieldList }: IProps) {
  return (
    <Grid container>
      {fieldList.map((field: { name: string; label: string }) => (
        <Grid item xs={6}>
          <FormikTextField name={field.name} label={field.label} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TextFieldList;
