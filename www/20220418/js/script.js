var p = document.getElementById('id_p');

p.style.backgroundColor = 'red';

var paragrafos = document.getElementsByTagName('p');

paragrafos[1].style.color = 'blue';

var linhas = document.getElementsByTagName('tr');

for(var i=0;i<linhas.length;i++){
    linhas[i].style.backgroundColor = (i+1)%2==0 ? "#900C3F":"#C70039" ;
}

document.getElementsByTagName('table')[0].style.color = 'white';