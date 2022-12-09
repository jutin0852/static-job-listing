var back=document.getElementById('back');
var back1=document.getElementById('back1');
const getSomething = async () => {
  
    const response = await fetch('data.json');
    if(response.status!==200){
      throw new Error('cannot fetch data')
    }
    const data = await response.json()
    return data
  }
  var arr=[];
    var listArr=[];
    var eachArr;
  getSomething().then( file => {
    
  console.log(file);
  for(var x = 0; x < file.length; x++){

    back.innerHTML+=`
    <div id="one" data-role="${file[x].role}" data-level="${file[x].level}" data-languages="${file[x].languages[0]}"
     data-languages1="${file[x].languages[1]}" data-languages2="${file[x].languages[2]}"
      data-tools="${file[x].tools[0]}" data-tools1="${file[x].tools[1]}"> 
      <img id="snap" src="${file[x].logo}" alt=""> 
      <div id="all"> 
        <div id="top">  
          <span id="photo">${file[x].company}</span> 
          <span class="new">new</span>
          <span id="featured">featured</span>
        </div> 
        <p>${file[x].position}</p> 
        <div>  
          <span class="ago">${file[x].postedAt}</span>
          <span class="ago">${file[x].contract}</span> 
          <span class="ago">${file[x].location}</span>
        </div>
    </div> 
    <div id="skill">
      <span class="skills">${file[x].role}</span>
      <span class="skills">${file[x].level}</span>
      </div> 
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
      
    }
    
  
  }).catch( error => {
    console.log("there is an error:",error.message)
  });

  let filterPath=document.getElementById('select'); 
  
  
  
  //filter

    back1.onclick=function(){
      // let one1=document.querySelectorAll('#one');

  if(event.target.className=='skills'){

    if(filterPath.textContent.includes(event.target.textContent)){

      let c=event.target.textContent;

      //remove elements from array
      let arrNum=arr.indexOf(c);
      arr.splice(arrNum,1);
      eachArr=arr.map(a=>{
        return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
      }).join('');
      filterPath.innerHTML=eachArr;
      console.log(arr);
      console.log(eachArr);

      getSomething().then(file=>{
       
      if(!arr.includes(c)){
        console.log(c)
        //the filter isnt working well each data doesnt put the other into considaration
        for(var y = 0; y < file.length; y++){

          if(one[y].getAttribute('data-role')==c){

          }
         else if(one[y].getAttribute('data-level')==c){

          }
          else if(one[y].getAttribute('data-languages')==c){

          }
          else if(one[y].getAttribute('data-languages1')==c){

          }
          else if(one[y].getAttribute('data-languages2')==c){

          }
          else if(one[y].getAttribute('data-tools')==c){

          }
          else if(one[y].getAttribute('data-tools1')==c){

          }
          else{
            one[y].style.display='block';
          }
        }}
        


      }).catch(error=>{
        console.log("there is an error:",error.message)
      })
      
      }
      else {
        // filterPath.innerHTML+=`<span class="tag">${event.target.textContent}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
        var e=event.target
        arr.push(event.target.textContent);
          eachArr=arr.map(a=>{
          return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
        }).join('')
        filterPath.innerHTML=eachArr;
        console.log(eachArr);
        console.log(arr);


        getSomething().then(file=>{
          let v=e.textContent
          if(arr.includes(v)){
           
           
            for(var y = 0; y < file.length; y++){

            if(one[y].getAttribute('data-role')==v){

            }
           else if(one[y].getAttribute('data-level')==v){

            }
            else if(one[y].getAttribute('data-languages')==v){

            }
            else if(one[y].getAttribute('data-languages1')==v){

            }
            else if(one[y].getAttribute('data-languages2')==v){

            }
            else if(one[y].getAttribute('data-tools')==v){

            }
            else if(one[y].getAttribute('data-tools1')==v){

            }
            else{
              one[y].style.display='none';
            }
          }
        }
       
      


        }).catch(error=>{
          console.log("there is an error:",error.message)
        })
      
      }
    }
  

//delete tags from filterpath

    if(event.target.className=='remove'){
      let c=event.target.parentElement;
      // filterPath.removeChild(c)

      //remove elements from array
      let p=c.textContent;
      let arrNum=arr.indexOf(p);
      arr.splice(arrNum,1);
      eachArr=arr.map(a=>{
        return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
      }).join('')
      filterPath.innerHTML=eachArr;
      console.log(arr);
      console.log(eachArr)
      
    }
    }
  
