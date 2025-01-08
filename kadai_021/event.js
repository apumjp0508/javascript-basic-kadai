const getBtn=document.getElementById("btn");
const text=document.getElementById("text");

getBtn.addEventListener("click",setTimeout(()=>{
    text.textContent="ボタンをクリックしました";
},2000));