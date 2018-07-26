const h1=document.querySelector('h1');//intancia a primeira tag h1 para a constante h1 
const pagina=document.querySelector('#pagina');//utilizase #paraId , .paraClass e [paraAtributo]
const paragrafo=document.createElement('p');//cria um novo elemento (tag) no documento atual

h1.innerHTML= 'Alfa';//insere um tag para dentro do elemento instanciado e o sobrepõe

paragrafo.innerHTML='Loren Ipsunnnnnn'
pagina.appendChild(paragrafo);//adiciona como filho da pagina (div) o parágrafo (p)

pagina.classList.remove('green-text','text-green','accent-4');//remove da lista de classes do elemento 
//os contextos relacionados dentro da função remove