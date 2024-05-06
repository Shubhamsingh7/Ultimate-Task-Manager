import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuid } from "uuid";

import TextInput from "../atoms/TextInput";
import SelectInput from "../atoms/SelectInput";

import { IFormInput, PriorityEnum, TaskEditorType } from "../Types/Type";

import { PriorityOptions } from "../Utils/data";
import { taskDataScheme } from "../Utils/schema";
import { addTask, editTask } from "../Utils/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const today = new Date().toISOString().split("T")[0];

function TaskEditor(props: TaskEditorType) {
  const navigate = useNavigate();
  const {
    isEditPage,
    description,
    dueDate,
    priority,
    title,
    id,
    hasMarkedDone,
  } = props;
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(taskDataScheme),
    defaultValues: {
      priority,
      description,
      dueDate,
      title,
      hasMarkedDone,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (isEditPage) {
      editTask({ ...data, id: id || "" });
      toast("task updated successfully");
    } else {
      addTask({ ...data, id: uuid() });
      toast("updated added successfully");
    }
    setValue("title", "");
    setValue("description", "");
    setValue("dueDate", "");
    setValue("priority", PriorityEnum.Medium);

    navigate("/", { replace: true });
  };

  return (
    <div>
      <form className="task-editor" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          labelText="Title:"
          placeholder="Enter Title"
          error={errors.title?.message}
          control={control}
          name="title"
        />
        <TextInput
          name="description"
          labelText="Description:"
          placeholder="Enter Description"
          error={errors.description?.message}
          control={control}
          isTextArea={true}
        />
        <SelectInput
          options={PriorityOptions}
          id="select-priority"
          label="Priority"
          name="priority"
          control={control}
        />
        <div className="date-picker">
          <label htmlFor="dueDate">Due date</label>
          <input type="date" min={today} {...register("dueDate")} />
          <br />
          {errors.dueDate && (
            <span className="error-message">
              {errors.dueDate.message?.toString()}
            </span>
          )}
        </div>
        <div className="mark-container">
          <label htmlFor="hasMarkedDone">Task Done Status: </label>
          <input
            type="checkbox"
            className="markDoneCheckBox"
            {...register("hasMarkedDone")}
          />
        </div>

        <input type="submit" className="submit-button" />
      </form>
    </div>
  );
}

export default TaskEditor;
