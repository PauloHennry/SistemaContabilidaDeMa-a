const PRECO_MENOS_DUZIA = 0.30;
const PRECO_DUZIA = 0.25;


qtd = alert("SISTEMA DE CONTABILIDADE\n");

//Enquanto verdadeiro execulte;
while(true){

qtd = prompt("Quantas unidades de maça deseja: ")
	//SE MAIOR >= 12 O TOTAL É CALCULADO POR DUZIA;
	if(qtd >= 12){
		alert("O valor total das maças é de R$:",precoDuzia(),"reais\n")
	}
	
	// SE NÃO ELE VAI CALCULAR POR PREÇO MENOR QUE DUZIA;
	else{
		alert("O valor total das maças é de R$:", precoSeForMenorADuzia(),"centavos\n")
	}

	//FUNCAO QUE FAZ O CALCULO PRECO DA DUZIA;
	function precoDuzia(){
		const PRECO_DUZIA = 0.25;
		total = qtd * PRECO_DUZIA;
		return total
	}
	
	//FUNCAO QUE FAZ O CALCULO FORA DA DUZIA;
	function precoSeForMenorADuzia(){
		const PRECO_MENOS_DUZIA = 0.30;
		total = qtd * PRECO_MENOS_DUZIA;
		return total
	}
}
