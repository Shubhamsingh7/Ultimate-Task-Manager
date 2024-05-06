import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../atoms/TextInput";
import SelectInput from "../atoms/SelectInput";

function FilterContainer(props) {
  const {
    debouncedSearch,
    handlePriorityFilter,
    handleDoneFilter,
    handleDueDateSort,
    handleClearFilter
  } = props;
  const { control, getValues,setValue, watch } = useForm({
    defaultValues: {
      searchText: "",
      doneFilter: "",
      priorityFilter: "",
      sortByDueDate: "",
    },
  });

  useEffect(() => {
    debouncedSearch(getValues("searchText"));
  }, [watch("searchText")]);

  useEffect(() => {
    const filterValue = getValues("priorityFilter");

    handlePriorityFilter(filterValue);
  }, [watch("priorityFilter")]);

  useEffect(() => {
    let filterValue = getValues("doneFilter");
    if (filterValue === "true") {
      filterValue = true;
    } else if (filterValue === "false") {
      filterValue = false;
    }
    handleDoneFilter(filterValue);
  }, [watch("doneFilter")]);

  useEffect(() => {
    let filterValue = getValues("sortByDueDate");
    if (filterValue === "true") {
      filterValue = true;
    } else if (filterValue === "false") {
      filterValue = false;
    }
    handleDueDateSort(filterValue);
  }, [watch("sortByDueDate")]);

  return (
    <div className="filter-wrapper">
      <TextInput
        labelText=""
        placeholder="Search task by title and description"
        error={""}
        control={control}
        name="searchText"
      />
      <SelectInput
        options={[
          { value: "", label: "Select an option" },
          { value: "high", label: "High" },
          { value: "medium", label: "Medium" },
          { value: "low", label: "Low" },
        ]}
        id="select-priority"
        label="Priority filter: "
        name="priorityFilter"
        control={control}
      />

      <SelectInput
        options={[
          { value: "", label: "Select an option" },
          { value: false, label: "Pending" },
          { value: true, label: "Done" },
        ]}
        id="select-priority"
        label="Done filter: "
        name="doneFilter"
        control={control}
      />

      <SelectInput
        options={[
          { value: "", label: "Select an option" },
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
        id="select-priority"
        label="Sort by due date: "
        name="sortByDueDate"
        control={control}
      />

      <button
        onClick={() => {
          setValue("doneFilter","");
          setValue("priorityFilter","");
          setValue("searchText","");
          setValue("sortByDueDate","");
          handleClearFilter()
        }}
      >
        clear all filters
      </button>
    </div>
  );
}

export default FilterContainer;
