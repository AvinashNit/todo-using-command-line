const {Command}=require("commander");
const program=new Command();
const fs=require("fs");

program.name("todo-using-cli").description("A simple todo app using cli").version("1.0.0");

program
.command("add <task>")
.description("Add a new task")
.action((task)=>{
    const tasks=fs.readFileSync("tasks.txt","utf-8").split("\n").filter(Boolean);
    tasks.push(task);
    fs.writeFileSync("tasks.txt",tasks.join("\n")   );
    console.log(`Task added: ${task}`);
})
program.command("list")
.description("List all tasks")
.action(()=>{
    console.log(fs.readFileSync("tasks.txt","utf-8"));
})
program.command("delete <taskNumber>")
.description("Delete a task by its number")
.action((taskNumber)=>{ 
    const tasks=fs.readFileSync("tasks.txt","utf-8").split("\n").filter(Boolean);
    const taskIndex=parseInt(taskNumber)-1;
    if(taskIndex>=0 && taskIndex<tasks.length)
    {
        const removedTask=tasks.splice(taskIndex,1);
        fs.writeFileSync("tasks.txt",tasks.join("\n"));
        console.log(`Task deleted: ${removedTask}`);
    }
    else
    {
        console.log("Invalid task number");
    }
});
program.command("clear")
.description("Clear all tasks")
.action(()=>{
    fs.writeFileSync("tasks.txt","");
    console.log("All tasks cleared");
})
program.parse(process.argv)

