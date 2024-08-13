const heroi = {
    walkR: "+",
    walkL: "-",
    inicial: [0, 0]
}
    let teclas = {
        W: false,
        A: false,
        D: false 
    }
    
  function Walk(){
    switch(true){
        case (teclas.W = true): 
         heroi.inicial[1] += 1
         break
        
        case (teclas.A = true):
         heroi.inicial[0] -= 1 
        break

        case (teclas.D = true):
         heroi.inicial[0] += 1 
        break
        
    }
   
   return heroi.inicial
  }
  
  teclas.W = true
Walk()
Walk() 
Walk()
teclas.W = false

teclas.A = true
Walk()
teclas.A = false

teclas.W = true
Walk()
Walk()
teclas.W = false

teclas.D = true
Walk()
teclas.D = false

  let moviment = heroi.inicial

  console.log("posicao final: " + moviment + " em plano cartesiano")
  console.log("O personagem andou " + ((moviment[0]) + (moviment[1])) + " unidades.")
  
  

  