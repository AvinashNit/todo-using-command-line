const {Command}=require("commander");
const program=new Command();
const fs=require("fs");

program.name("todo-using-cli").description("A simple todo app using cli").version("1.0.0");

program
.option("-a, --add <task>","Add a new task")
.option("-l, --list","List all tasks")
.option("-d, --delete <taskNumber>","Delete a task by its number");
program.parse(process.argv)
const options =program.opts();
if(options.add)
{
    const tasks=fs.readFileSync("tasks.txt","utf-8").split("\n").filter(Boolean);
    tasks.push(options.add);
    fs.writeFileSync("tasks.txt",tasks.join("\n"));
    console.log(`Task added: ${options.add}`);
}
else if(options.list)
{
   console.log(fs.readFileSync("tasks.txt","utf-8"));
}
else if(options.delete)
{
    const tasks=fs.readFileSync("tasks.txt","utf-8").split("\n").filter(Boolean);
    const taskNumber=parseInt(options.delete);
    if(taskNumber>0 && taskNumber<=tasks.length)
    {
        const removedTask=tasks.splice(taskNumber-1,1);
        fs.writeFileSync("tasks.txt",tasks.join("\n"));
        console.log(`Task deleted: ${removedTask}`);
    }
    else
    {
        console.log("Invalid task number");
    }
}
else
{
    console.log("No action specified");
}
