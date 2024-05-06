enum PriorityEnum {
  High = "high",
  Low = "low",
  Medium = "medium",
}

interface IFormInput {
  title: string;
  description: string;
  priority: PriorityEnum;
  dueDate: any;
  hasMarkedDone:boolean;
}
interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  options: Option[];
  name: string;
  control: any;
}

interface storageTaskType extends IFormInput {
  id: string;
}
interface TaskCardType extends storageTaskType {
  handleDelete: (id:string,title:string) => void;
}

interface TaskEditorType extends IFormInput {
  isEditPage: boolean;
  id?: string;
}

export { PriorityEnum };
export type {
  IFormInput,
  SelectProps,
  Option,
  storageTaskType,
  TaskEditorType,
  TaskCardType,
};
