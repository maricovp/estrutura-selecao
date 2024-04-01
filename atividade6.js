/*Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript?*/
var mes = 4; // Por exemplo, abril (você pode obter o mês atual usando o objeto Date)

if (mes >= 1 && mes <= 3) {
    console.log('Estamos na estação da Primavera.')
} else if (mes >= 4 && mes <= 6) {
    console.log('Estamos na estação do Verão.')
} else if (mes >= 7 && mes <= 9) {
    console.log('Estamos na estação do Outono.')
} else if (mes >= 10 && mes <= 12) {
    console.log('Estamos na estação do Inverno.')
} else {
    console.log('Mês inválido.')
}