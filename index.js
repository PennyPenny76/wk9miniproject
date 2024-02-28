const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "list",
      message: "What is your location?",
      name: "location",
      choices: ["NSW", "VIC", "QLD", "SA", "WA"],
    },
    {
      type: "input",
      message: "what is your LinkenIn URL?",
      name: "LinkenIn",
    },
    {
        type: "input",
        message: "what is your GitHub URL?",
        name: "GitHub",
      },
  ])
  .then((response) =>
    response.confirm
      ? console.log("Success!")
      : console.log("err! Please answer all the questions.")
  );
