let add =document.getElementById("addtask");
let input =document.getElementById("task");
let list =document.getElementById("list");
let addform =document.getElementById("addform");

// let index = 0;
let todolest = []

window.onload=()=>{
    getstorg()
        if (todolest != "") {
        todolest.map((el)=>{
            if (el.value != "" ) {
                addtask(el.value);
                console.log(todolest)
            }
            // let li = document.createElement("li")
            // let delbtn = document.createElement("button")
            //  delbtn.className="del"
            // let delext = document.createTextNode("Delete")
            // let litext = document.createTextNode(el.value)
            // li.appendChild(litext)
            // delbtn.appendChild(delext)
            // delbtn.setAttribute("data-id",index)
            // delbtn.setAttribute("id","delbtn")
            // list.appendChild(li)
            // li.appendChild(delbtn)
            // index++
            deleteiteam()
        })

    }
}


addform.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (input.value != ""){
    addtask(input.value);
    }
})

//add task to the page
function addtask(text,index){
       let li = document.createElement("li")
       let litext = document.createTextNode(text)
       li.appendChild(litext);
       let delbtn = document.createElement("button")
       let delext = document.createTextNode("Delete")
       delbtn.className= "del"
       delbtn.appendChild(delext)
       delbtn.setAttribute("data-id",index)
       delbtn.setAttribute("id","delbtn")
       li.appendChild(delbtn)
       list.appendChild(li);
       index++

   const todos ={
    value: input.value,
   };

if (input.value!="") {
    todolest.push(todos); 
    input.value = "";
}
  
 addtostorg();

 deleteiteam()

}
//add item to storage
function addtostorg(){
    if (localStorage = "null") {
    localStorage.setItem("taske",JSON.stringify(todolest))
    }
    }
//check if therr items in storge
function getstorg(){
    if(localStorage.getItem("taske")){
        todolest = JSON.parse(localStorage.getItem("taske"))
        }
}
// delete iteam
 function deleteiteam(){
 let delbtn =document.querySelectorAll("#delbtn");
 delbtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        e.target.parentElement.remove();
        todolest.pop(e.target.dataset.id)
        addtostorg()})
})
}