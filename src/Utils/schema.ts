import * as yup from "yup";
import { PriorityEnum } from "../Types/Type";

const taskDataScheme = yup
  .object({
    title: yup
      .string()
      .required("title is required")
      .min(5, "title should be of minimum length 5"),
    description: yup
      .string()
      .required("description is required")
      .min(10, "title should be of minimum length 10"),
    priority: yup
      .string()
      .required("priority is required")
      .oneOf(Object.values(PriorityEnum), "Invalid priority"),
    dueDate: yup
      .date()
      .typeError("date must be in format of yyyy-mm-dd")
      .required("due date is required")
      .min(new Date(), "due date must be in the future"),
      hasMarkedDone:yup.boolean().required()
      
  })
  .required();

export { taskDataScheme };
