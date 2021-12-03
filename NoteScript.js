const SaveIcon = document.querySelector(".SaveIcon");
const noteField = document.querySelector(".noteField");
const EditNote = document.querySelector(".EditNote");
//const SaveNote = document.querySelector(".SaveNote");
function ClickPlusNote(){
  if(!document.querySelector(".EditNote")){
    CreateNote();
}else{
  ReNote();
}
}
function CreateNote(){
  let NoteDiv = document.createElement('div');
  let NoteBtn = document.createElement('Button');
  NoteDiv.className ="EditNote";
  NoteDiv.setAttribute('contenteditable','true');
  NoteDiv.setAttribute('onkeydown','KetEvent(event)');

  NoteBtn.className = "SaveBtn";
  NoteBtn.setAttribute('onclick','NoteSave()');
  NoteBtn.innerHTML = "버튼";
  noteField.appendChild(NoteDiv);
  noteField.appendChild(NoteBtn);
}
function ReNote(){
  let OkNo = confirm("새로 만드시겠습니까?");
  if(OkNo)
  {
    ClickPlusNote();
  }else{
    alert("안실행");
  }
}
function NoteSave(){
  
    let NoteValue = document.querySelector('.EditNote');
    let SaveNoteFile = document.createElement('div');
    SaveNoteFile.className ="SaveNote";
    SaveNoteFile.innerHTML = NoteValue.innerHTML;
    
    noteField.appendChild(SaveNoteFile);
  
  
  
}
//SaveIcon.addEventListener("click",ClickPlusNote);

function KetEvent(Event){
  if(Event.keyCode==13){
    NoteSave();
  }
}