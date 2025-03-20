const botones=document.querySelectorAll('.btn');
const pantallaCalculadora=document.getElementById('pantalla');


botones.forEach(boton => {
    boton.onclick=(e)=>{
        if (boton.id==='C'){
            pantallaCalculadora.textContent='0';
            return;
        }
        if (boton.id==='igual'){
            try {
                pantallaCalculadora.textContent = eval(pantallaCalculadora.textContent);
                if (isNaN(pantallaCalculadora.textContent)) {
                    throw new Error();
                }
            } catch {
                pantallaCalculadora.textContent = "Error";
            }
            
            return;
        }
        if (pantallaCalculadora.textContent==='0' && e.target.textContent!='.'){
            pantallaCalculadora.textContent=e.target.textContent;
        }else{
            pantallaCalculadora.textContent+=e.target.textContent;
        }
} 
});