const {Command}=require("commander");
const program=new Command();
const fs=require("fs");


program.name("todo-using-cli").description("A simple todo app using cli").version("1.0.0");

program.command("add <task>")
.description("Add a new task")
.action((task)=>{
    const content=fs.readFileSync("todo.json","utf-8");
    data=content?JSON.parse(content):[];
    data.push(task);
    fs.writeFileSync("todo.json",JSON.stringify(data));
    console.log("Task added successfully");
})


program.command("list")
.description("List all tasks")
.action(()=>{
    const content=fs.readFileSync("todo.json","utf-8")
    console.log(content?JSON.parse(content):[]);
})

program.command("delete <index>")
.description("Delete a task")
.action((index)=>{
            const content=fs.readFileSync("todo.json","utf-8");
            data=content?JSON.parse(content):[];
            data.splice(index-1,1);       
            fs.writeFileSync("todo.json",JSON.stringify(data));
            console.log("Task deleted successfully");
})

program.command("clear")
.description("clear all tasks")
.action(()=>{
    fs.writeFileSync("todo.json","");
    console.log("All tasks cleared successfully");
})


program.parse(process.argv);

