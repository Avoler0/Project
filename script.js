const OkBtn = document.querySelector(".OkBtn"); // 확인 버튼
const TodoIpt = document.querySelector(".todoText"); // 할일 적는 input
const TodoList = document.querySelector(".TodoList"); // ul 리스트 클래스
//const RemoveBtn = document.querySelector(".RemoveBtn");
const CheckBtn = document.querySelector(".CheckBtn");
let cnt = 0;
function CreateTodo(){
  let lis = document.createElement('li'); // li 생성
  lis.setAttribute("class","list-group-item");
  lis.setAttribute("id","li"+cnt);
  lis.innerHTML = TodoIpt.value;
  //lis.innerHTML += "<button class='RemoveBtn' onclick='RemoveTodo("+cnt+")'><i class='bx bx-trash'></i></button>";
  lis.innerHTML += "<a href='#' class ='RemoveBtn' onclick='RemoveTodo("+cnt+")'><i class='bx bx-trash'></i></a>"
  lis.innerHTML += "<a href='#' class ='CheckTodo' onclick='CheckTodo("+cnt+")'><i class='bx bx-check'></i></a>"
  TodoList.appendChild(lis);
  TodoIpt.value = "";
  cnt += 1; // 몇번 입력했는지 
}
function RemoveTodo(cnt){
  let lis = document.querySelector("#li"+cnt);
  TodoList.removeChild(lis);
  
}
function CheckTodo(cnt){
  let lis = document.querySelector("#li"+cnt);
  lis.style.textDecoration="line-through";
  lis.classList.toggle("Enable");
  /*if(!lis.querySelector(".Enable")){
    lis.classList.toggle("Enable");
    lis.style.textDecoration="none";
  }else{
    
  }*/
}

//RemoveBtn.addEventListener("click",RemoveTodo);
//CheckBtn.addEventListener("click",RadioCheck);
OkBtn.addEventListener("click",CreateTodo);

