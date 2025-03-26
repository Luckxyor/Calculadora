const botones=document.querySelectorAll('.btn');
const pantallaCalculadora=document.getElementById('pantalla');


botones.forEach(boton => {
    boton.onclick=(e)=>{
        pantallaCalculadora.style.color='white';
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
                else if(pantallaCalculadora.textContent>0){
                    pantallaCalculadora.style.color='green';
                }
                else if(pantallaCalculadora.textContent<0){
                    pantallaCalculadora.style.color='red';
                }
                else{
                    
                }
            } catch {
                pantallaCalculadora.textContent = "Error";
            }
            return;
        }
        if (pantallaCalculadora.textContent==='0' && e.target.textContent!='.' || pantallaCalculadora.textContent==='Error'){
            pantallaCalculadora.textContent=e.target.textContent;
        }else{
            pantallaCalculadora.textContent+=e.target.textContent;
        }
} 
});