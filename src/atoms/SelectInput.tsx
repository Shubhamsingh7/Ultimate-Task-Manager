import { Controller } from "react-hook-form";
import { SelectProps, Option } from "../Types/Type";

const SelectInput: React.FC<SelectProps> = (props: SelectProps) => {
  const { id, label, options, control, name } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <select id={id} {...field} defaultValue="medium">
              {options.map((option: Option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );
        }}
      />
    </div>
  );
};

export default SelectInput;
