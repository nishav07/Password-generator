let input = document.querySelector(".text");
let genbtn = document.querySelector("#generator");
let icon = document.querySelector("#i");


genbtn.addEventListener("click" , () => {
    let alpha = "abchefghijklmnopqurstuvwxyz"
    let num = "0123456789"
    let symbols = "!@#$%^&*/_+"
    
    let idx1 = Math.floor(Math.random() * 26);//alpha
    let idx2 = Math.floor(Math.random() * 26);//alpha
    let idx3 = Math.floor(Math.random() * 10);//num
    let idx4 = Math.floor(Math.random() * 11);//sym
    let idx5 = Math.floor(Math.random() * 26);//alpha
    let idx6 = Math.floor(Math.random() * 10);//num
    let idx7 = Math.floor(Math.random() * 11);//sym
    let idx8 = Math.floor(Math.random() * 26);//alpha
    
    let pass1 = alpha[idx1];
    let pass2 = alpha[idx2];
    let pass3 = num[idx3];
    let pass4 = symbols[idx4];
    let pass5 = alpha[idx5];
    let pass6 = num[idx6];
    let pass7 = symbols[idx7];
    let pass8 = alpha[idx8];
    
    
    let finalpass = pass1 + pass2 + pass3 + pass4 + pass5 + pass6 + pass7 + pass8;
    
    input.value = finalpass;
    
})


icon.addEventListener("click" , () => {
    let inval = input.value
    navigator.clipboard.writeText(inval)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  
})



