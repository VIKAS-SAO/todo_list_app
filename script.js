const work = document.querySelector('.work')
const list = document.querySelector('.list')
const add_button = document.querySelector('.add_button')
var works = [] 
    //localStorage.setItem('works','vikas') 
    // localStorage.removeItem('works' ) 

//  function to get data fomr the localstoarge and display the list of works
function list_maker(){
    let works = localStorage.getItem('works') 
    if(works==null){
        return;
    }  
    works = JSON.parse(works)
    //console.log(works)
    var result = ``;
    list.innerHTML="";  
    for(var i=works.length-1;i>=0;i--){
        result += `
        <li class="list_item">
        <div >
            <span>${works[i].work}</span>
            <button class="button">X</button>
        </div> 
    </li>
     `; 
    } 
    list.innerHTML = result; 
    auto_scroll_top()
    const button = document.querySelectorAll('.button')
    for ( var i=0;i<button.length;i++){ 
        button[i].addEventListener('click',function(event){
            index_teller(event) 
        })
    }

 

}

// function to add the new task

add_button.addEventListener('click',function(event){
    event.preventDefault()
    let works =  localStorage.getItem('works')
    if(work.value != ''){
        if(works ==null){
            works=[{work:work.value }]
            save_storage(works) 
        }
        else{
            works=JSON.parse(works)
            works.push({work:work.value })
            save_storage(works) 
          //  console.log(works)
    
        }
    }  
    list_maker()
    work.value = '';
    work.focus()
  
    
     
})


function save_storage(works){
    localStorage.setItem('works',JSON.stringify(works))
}


function auto_scroll_top(){
    document.querySelector('.main_content').scrollTo(500, 0);
}
 

// function to delete the cicked task
   function index_teller(event){
       
    var button = document.querySelectorAll('.button');
    for(var i=0;i<button.length;i++){
        if(event.target===button[i]){
             let works = localStorage.getItem('works')
             works = JSON.parse(works)
             
            works.splice(button.length-i-1,1)
            save_storage(works)  
            list_maker()
        }
    } 
}


 
 // start of the app at the loading of the windows
window.addEventListener('load',function(){
    list_maker() 
   
   })

