funcion mover_objeto ( elemento por referencia )
	elemento = " "+elemento
FinFuncion

Algoritmo Juego_con_letras
	
	elemento = "a"
	elemento2 = "-->"
	para i=0 hasta 50
		Borrar Pantalla
		mover_objeto(elemento)
		escribir(elemento)
		
		para j=0 hasta 2
			mover_objeto(elemento2)
			escribir(elemento2)
		FinPara
		
		para j=0 hasta 100000
		FinPara
	FinPara
FinAlgoritmo
