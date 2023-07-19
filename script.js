let string = ""
let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button) => {
     button.addEventListener('click' , (e) => {

        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string
        }else if(e.target.innerHTML == 'C')
        {
        string = "";
        document.querySelector('input').value = string;
            
        }else{
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }

        // if(e.target.innerHTML == 'X'){
        //    let deletedIndex = document.querySelector('input').value.slice(0 , -1)
        //    console.log(deletedIndex )
        //    document.querySelector('input').value = deletedIndex
        // }
 
     })
})