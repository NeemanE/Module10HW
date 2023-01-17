const inquirer = require('inquirer');
const fs = require('fs'); 
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const htmlgen = require('./utils/htmlgen');

const members = []; 

const newEmployee = () => {
  return inquirer.prompt ([
      {
          name: 'role',
          type: 'list',
          message: "Input your new employees role.",
          choices: ['Engineer', 'Intern', 'Manager']
      },
      {
          name: 'name',
          type: 'input',
          message: "Enter your employees name.", 
      },
      {
          name: 'id',
          type: 'input',
          name: 'id',
          message: "Enter the employees ID number.",
      },
      {
          name: 'emailAddress',
          type: 'input',
          message: "Enter the employee's email address",
      },
      {   
        name: 'officeNumber',
        type: 'input',
        message: "Enter the office number",
    },
      {
          name: 'github',
          type: 'input',
          message: "Enter the employee's github username",
      },
      {   
          name: 'school',
          type: 'input',
          message: "What school is the employee attending",
      },
  ])}