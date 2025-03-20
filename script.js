const teclaNumerica=document.getElementsByClassName('teclaNum');
const pantallaCalculadora=document.getElementById('pantalla');

Array.from(teclaNumerica).forEach(element => {
   element.onclick=(e)=>{
        switch (e.target.innerHTML) {
            case '1':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '2':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '3':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '4':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '5':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '6':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '7':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '8':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '9':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            case '0':
                pantallaCalculadora.innerHTML+=e.target.innerHTML
                break;
            default:
                let num1=parseInt(pantallaCalculadora.innerHTML);
                break;
        }
    } 
});