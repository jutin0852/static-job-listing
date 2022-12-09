var back=document.getElementById('back');
var back1=document.getElementById('back1');
let filterPath=document.getElementById('select'); 
filterPath.style.visibility='hidden';

const getSomething = async () => {
 const response = await fetch('data.json');
    if(response.status!==200){
      throw new Error('cannot fetch data')
    }
    const data = await response.json()
    return data
  }
  let arr=[];
  getSomething().then( file => {
    
  console.log(file);
  for(var x = 0; x < file.length; x++){

    back.innerHTML+=`
    <div id="one" class="one" data-role="${file[x].role}" data-level="${file[x].level}" data-languages="${file[x].languages[0]}"
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
      let feature = document.querySelectorAll('#featured')
      file[x].featured != true ? feature[x].style.display='none': feature[x].style.display='initial'

      //making each language and tool display for each 
       let skill=document.querySelectorAll('#skill');
        for(var i = 0; i < file[x].languages.length; i++){
            skill[x].innerHTML+=`<span class="skills">${file[x].languages[i]}</span>`
          }
        for(var i = 0; i < file[x].tools.length; i++){
            skill[x].innerHTML+=`<span class="skills">${file[x].tools[i]}</span>`
          }
      
    }
    
  
  }).catch( error => {
    console.log("there is an error:",error.message)
  });



  
  
  
  //filter

  back1.onclick=function(){
    //filter function
    function filterList(){
      for( var x = 0; x < one.length; x++){
        one[x].style.display='none'
      }
      for( var x = 0; x < one.length; x++){
          
        const roles = one[x].getAttribute('data-role');
        const levels= one[x].getAttribute('data-level');
        const langs = one[x].getAttribute('data-languages');
        const langs1 = one[x].getAttribute('data-languages1');
        const langs2 = one[x].getAttribute('data-languages2');
        const tools = one[x].getAttribute('data-tools');
        const tools1 = one[x].getAttribute('data-tools1');
       
      
        const list= [roles,levels,langs,langs1,langs2,tools,tools1];

        // if every item on the filter array is included in the list then display
       const bool= arr.every( item => {
          return list.includes(item);
          })

        if(bool){
          one[x].style.display = 'block';
        }
      }
    }
  if(event.target.className=='skills'){
    filterPath.style.visibility='visible';
    if(filterPath.textContent.includes(event.target.textContent)){

      let c=event.target.textContent;

      //remove elements from array
      let arrNum = arr.indexOf(c);
      arr.splice(arrNum,1);
      eachArr = arr.map( a => {
        return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
      }).join('');
      filterPath.innerHTML =`<span id="clear">Clear</span> ${eachArr}` 
      filterList();
      if(arr==''){
        filterPath.style.visibility='hidden'

      }
      }

      else {
        arr.push(event.target.textContent);
          eachArr=arr.map( a => {
          return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
        }).join('')
        filterPath.innerHTML = `<span id="clear">Clear</span> ${eachArr}` ;
         filterList()
      }
    }
  
//clear filter
if(event.target.id=='clear'){
  // let filterPath=document.getElementById('select'); 
  arr=[]
  eachArr = arr.map( a => {
    return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
  }).join('')
  filterPath.innerHTML = `<span id="clear">Clear</span> ${eachArr}` ;
  filterPath.style.visibility='hidden'

  filterList();
}
//delete tags from filterpath

    if(event.target.className == 'remove'){
      let c = event.target.parentElement;
      // filterPath.removeChild(c)

      //remove elements from array
      let p = c.textContent;
      let arrNum=  arr.indexOf(p);
      arr.splice(arrNum,1);
      eachArr = arr.map( a => {
        return `<span class="tag">${a}<img class="remove" src="/images/icon-remove.svg" alt=""></span> `
      }).join('')
      filterPath.innerHTML = `<span id="clear">Clear</span> ${eachArr}` ;
      filterList();
      if(arr==''){
        filterPath.style.visibility='hidden'

      }
      
    }
    }
  
