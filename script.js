let toggler = document.getElementById('toggler');
let toggleBox = document.getElementById('toggleBox');
let flag = true;
if(flag){

    toggleBox.style.border = '1px solid #000';
}else{
    toggleBox.style.border = '1px solid #fff';

}

toggler.addEventListener('click', ()=>{
    console.log("hi")
    

        if(flag){
            console.log("hi1",flag)
            document.body.classList.toggle('dark-mode');
            toggler.style.transform = 'translateX(40px)'

            flag = false;
            console.log("hi1",flag)
        }else{
             toggler.style.transform = 'translateX(0px)'
            document.body.classList.toggle('dark-mode');
             flag = true;
            console.log("hi2")

        }
})