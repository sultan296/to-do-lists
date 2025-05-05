let input = document.getElementById("inp");
let lists = document.getElementById("lists");

function addTask(){
    if (input.value == "") {
        alert("Enter the task first")
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        lists.appendChild(li)
        let span = document.createElement("span")
            span.innerHTML = "\u00D7"
            li.appendChild(span)
        }
        input.value = ""
        saveData()
}
lists.addEventListener("click" ,(evt)=>{
    if (evt.target.tagName == "LI") {
        evt.target.classList.toggle("checked")
        saveData()        
    } else if(evt.target.tagName == "SPAN"){
        evt.target.parentElement.remove();
        saveData()
    }
})
function saveData(){
    localStorage.setItem("data", lists.innerHTML);
}
function getData(){
    lists.innerHTML = localStorage.getItem("data");
}
getData();