# Ultimate Task Manager

1. Simple task manager web app where user can add, delete and update task.
2. Task have properties like title,description,due date,priority and done status.
3. User can sort the list by due date and apply filter for done status,priority.
4. User can search using title and description.

## Prerequisites

- Node.js version 20.12.0

## Installation

1. Clone the repository.
2. Install dependencies with `npm install`.
3. run `npm start`.
4. app will be live on `http://localhost:3000/`.

## Usage

1. All the task list are being shown in home page.
2. To add a new task click on button `Add New Task`.
3. It will redirect to add task page.
4. User Can edit task by clicking on card edit button.
5. User can delete task by clicking delete button on card.

## External Libraries Used

- [UUID](https://www.npmjs.com/package/uuid)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Yup](https://www.npmjs.com/package/yup)
- [React Hook Form](https://www.npmjs.com/package/react-hook-form)

## Project Information

1. All the data is geting stored in local storage.
2. yup library is being used for form validation.
3. React Hook Form is being used for form handling.
4. React Toastify is used to show toast on successfull delete,add and edit task.
5. UUID is used to generate unique id

## Project Structure

# atoms

1. atoms folder have all the reusable html components like text input and select input.

   # molecules folder

   1. FilterContainer have all the code of filter components
   2. taskEditor have task add and edit form code using reusable components.
   3. Task card have code to show task card in list

   # pages

   1. AddTask page
   2. EditTask page
   3. TaskList of home page

# Types

containes all the type,enum and interfaces used in project

# utils

1. contains utility function like function to get and set local storage data.
2. contains yup schema for form validation
3. constains constant data
