function addTask()
{
    let taskinput=document.getElementById("taskinput");
    let taskText=taskinput.value.trim();
    if (taskText==="")
    {
        alert("Please enter a task");
        return;
    }
   
    //Create list
    let li=document.createElement("li");
    li.className="list-group-item";
    //Task span
    let span=document.createElement("span");
    span.className="task-text";
    span.innerHTML=taskText;
    //Complete button
    let completeBtn=document.createElement("button");
    completeBtn.className="btn btn-success btn-small";
    completeBtn.innerText="Done";
    completeBtn.onclick=function(){
    span.classList.toggle("completed");
    };
    let deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-small";
    deleteBtn.innerText="Delete";
    deleteBtn.onclick=function(){
        li.remove();
    };
    //Append all
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    //Clear input
    document.getElementById("taskList").appendChild(li);
    taskinput.value=" ";
}