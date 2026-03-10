# CLI Todo Manager

A simple command-line Todo application built using **Node.js** and **Commander.js**.
This tool allows users to manage tasks directly from the terminal using command-line **options**.

## Features

* Add new todos
* View all todos
* Remove tasks
* Store tasks in a local text file
* Lightweight and easy to use

## Technologies Used

* Node.js
* Commander.js
* File System (fs module)

## Installation

1. Clone the repository

git clone https://github.com/your-username/cli-todo-manager.git

2. Navigate to the project folder

cd cli-todo-manager

3. Install dependencies

npm install

## Usage

Run the CLI using:

node index.js [options]

### Available Options

Add a new todo

node index.js -a "Buy milk"

List all todos

node index.js -l

Remove a todo (by index)

node index.js -r 2

Display help

node index.js --help

## How It Works

The application stores todos in a **plain text file**.

Workflow:

1. The program reads the file using `fs.readFileSync`
2. File content becomes a string containing newline characters (`\n`)
3. The string is converted into an array using `split("\n")`
4. Tasks are modified using array methods like `push()` or `splice()`
5. The array is converted back to text using `join("\n")`
6. The updated text is saved using `fs.writeFileSync`

## Project Structure

cli-todo-manager
│
├── index.js        # CLI logic and options
├── tasks.txt        # stores tasks
├── package.json
├── .gitignore
└── README.md

## Example

tasks.txt

Buy milk
Learn Node
Build CLI project

## Future Improvements

* Mark tasks as completed
* Add task priorities
* Store todos using JSON instead of plain text
* Add colored CLI output

## License

This project is open source and available under the MIT License.
