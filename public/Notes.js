console.log("This magic notes web");
showNotes();
//clearing the list of the notes that is clearing the localstorage
let CleringNotesList=document.querySelector("#Listclere");
CleringNotesList.addEventListener('click',function(){
    localStorage.clear();
    showNotes();
});






let AddingNode = document.querySelector('#AddingToList');
let InputText=document.querySelector('#inputText');
AddingNode.addEventListener('click',function (e){
    //This is for title of the note
    let TitleItem=document.querySelector("#inputTextTitle");
    let TextToTitle=localStorage.getItem("Title");

    if(TextToTitle==null)
    {
        myObj2=[];
    }
    else
    {
        myObj2=JSON.parse(localStorage.getItem("Title"));
    }
    myObj2.push(TitleItem.value);
    localStorage.setItem("Title",JSON.stringify(myObj2));

   //This is for the content of the note 
   let ForArrayInputes=localStorage.getItem("text");


   if(ForArrayInputes==null)
   {
     myObj=[];
   }
   else
   {
       myObj=JSON.parse(localStorage.getItem("text"));
   }
   myObj.push(InputText.value);

   localStorage.setItem("text",JSON.stringify(myObj));
   
   
   showNotes();
});
//taking the input of the check box to make that note imp


function showNotes()
{
    //Inputing the title
    let TitleOfNote=localStorage.getItem("Title");
    if(TitleOfNote==null)
    {
        myObj2=[];
    }
    else
    {
        myObj2=JSON.parse(localStorage.getItem("Title"));
    }
    
    
    //This is the note text to the card
    let StoredNotes=localStorage.getItem("text");
    let InsertingNotes=document.querySelector("#notes");
  
     if(StoredNotes==null)
     {
         myObj=[];
     }
     else
     {
         myObj=JSON.parse(localStorage.getItem("text"));
     }
    //  let htmlIn;
    if(myObj==0)
    {
        InsertingNotes.innerHTML=`<h5 class="my-2 mb-3">Nothing to show add note by clicking on "Addnote"</h5>`;
    }
    else
    {
        InsertingNotes.innerHTML="";
        myObj.forEach(function(element,index){
            
            InsertingNotes.innerHTML += `<div class="CardColl card mx-2 my-2 shadow p-3 mb-5 bg-body rounded" style="width: 18rem;" >
          <div class="card-body" id="CheckMe${index}">
             <input type="checkbox" id="Check${index}" onclick="Impcheck(${index})" class="position-absolute top-0 end-0 mx-1 my-1" style="cursor: pointer; position: absolute; top: 0; border-radius: 100%;">
             <h5 class="card-title">${myObj2[index]}</h5>
             <p class="card-text">${element}</p>
             <button onclick="DeteleNote(${index})" class="btn btn-primary">Delete Note</button>
           </div>
         </div>`
             
       });
    }
};

function DeteleNote(index1)
{
    let StoredNote=localStorage.getItem("text");

    if(StoredNote==null)
    {
        myObj=[];
    }
    else
    {
        myObj=JSON.parse(localStorage.getItem("text"));
    }
   //Deleting the index node which is called to delete
   myObj.splice(index1,1);
   localStorage.setItem("text",JSON.stringify(myObj));
   showNotes();
}

function Impcheck(index)
{
//    console.log(`This is check of ${index+1} element`);
    
    let IdName=`#CheckMe${index}`;
    let takingElement=document.querySelector(IdName);
    // console.log(takingElement);
    
    let InboxValue=document.querySelector(`#Check${index}`);
    
    if(InboxValue.checked==true)//To find the check box is checked or not code is variable name which is targeting the check  box div in this InboxValue is variable InboxValue.checked it will return true if the check box is checked otherwise false  
    {
        
        takingElement.style.backgroundColor='#6c757d';
        takingElement.style.color="white";
    }
    else
    {
        takingElement.style.backgroundColor='white';
        takingElement.style.color="black";
    }

}

//Showing the search element only

let searchElement=document.querySelector("#SearchBar");

searchElement.addEventListener("input",function(){
    // console.log(`Enter value is ${searchElement.value}`);
    let cards=document.getElementsByClassName("CardColl");
    console.log(cards);

    Array.from(cards).forEach(function(element){
        let TitleOfCaed=element.getElementsByTagName("h5")[0].innerText;
        if(TitleOfCaed.includes(searchElement.value))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    })

})