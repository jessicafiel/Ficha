Nome=prompt("Nome completo")
tagh1.innerHTML= "Nome:"+Nome
nascimento="05/03/1997"
temcondicao= confirm("Tem condição pré-existente")

if(temcondicao){estadodesaude= "Sim"}
// false==false resultado: true
if(temcondicao==false){estadodesaude= "Nao"}

lista.innerHTML= 
  `<li> Data Nascimento: ${nascimento} </li>
   <li> Idade: 23 anos </li>
   <li> Tem condição pré-existente: ${estadodesaude} </li>
   <li> Precisa de acompanhamento médico </li>`
