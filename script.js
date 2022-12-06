var back=document.getElementById('back');
const getSomething = async () => {
  
    const response = await fetch('data.json');
    if(response.status!==200){
      throw new Error('cannot fetch data')
    }
    const data = await response.json()
    return data
  }
  
  getSomething().then( file => {
  console.log(file);
  for(var x=0; x < file.length; x++){
  
    back.innerHTML+=`<div id="one" data-role="${file[x].role}" data-level="${file[x].level}"
     data-languages="${file[x].languages}" data-tools="${file[x].tools}"> 
    <img id="snap" src="${file[x].logo}" alt=""> 
    <div id="all"> <div id="top">  <span id="photo">${file[x].company}</span> 
    <span class="new">new</span> <span id="featured">featured</span></div> <p>${file[x].position}</p> 
    <div>  <span class="ago">${file[x].postedAt}</span> <span class="ago">${file[x].contract}</span> 
    <span class="ago">${file[x].location}</span></div> </div> 
    <div id="skill"><span class="skills">${file[x].role}</span>
    <span class="skills">${file[x].level}</span> </div> 
    </div>`

    //making new and featured display when its true
    if(file[x].new!=true){
      let news= document.querySelectorAll('.new');
      news[x].style.display='none';
            } 
        let feature=document.querySelectorAll('#featured')
        file[x].featured!=true ? feature[x].style.display='none': feature[x].style.display='initial'

          //making each language and tool display for each 
          let skill=document.querySelectorAll('#skill');
          for(var i=0; i<file[x].languages.length; i++){
          skill[x].innerHTML+=`<span class="skills">${file[x].languages[i]}</span>`
        }
        for(var i=0; i<file[x].tools.length; i++){
          skill[x].innerHTML+=`<span class="skills">${file[x].tools[i]}</span>`
        }

        //filter
        // let skills=document.querySelectorAll('.skills');
        let one=document.querySelectorAll('#one');
        let filt=document.getElementById('filter');
        let filterPath=document.getElementById('select'); 

        for(let a=0; a<skill.length; a++){
          skill[a].onclick=function(){
            if(event.target.className=='skills'){
              console.log(event.target.textContent)
              filterPath.innerHTML+=`<span>${event.target.textContent}</span> `
              
            }
            if(one[x].getAttribute('data-role')!='Fullstack'){
              one[x].style.display='none';
            }
          }
         
      
        }
       
       
      
        
 

  }  
 
  



  
  }).catch( error => {
    console.log("there is an error:",error.message)
  });

  
  
