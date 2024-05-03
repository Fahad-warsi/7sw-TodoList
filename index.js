#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            message: "What  you want to add in your todos?",
            name: "todo",
            type: "input",
        },
        {
            message: "Do you wnat to add More?",
            name: "addMore",
            type: "confirm",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    console.log(todos);
    condition = addTask.addMore;
}
