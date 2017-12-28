const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  function whenKeyDownOccurs(e){
     alert('')
  }
    const body = document.querySelector('body')
    for(let i = 0;i < code.length; i++){
       body.addEventListener('keydown',whenKeyDownOccurs)
       if(e.which === 72){
         
       }
      
    }

}

