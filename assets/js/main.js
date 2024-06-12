let status = false

const caseAirdots = document.querySelector('.case-airdots')
      caseAirdots.addEventListener('click', abrirCase)
      caseAirdots.addEventListener('dblclick', airdots)
      
 
function abrirCase()
{        
      caseAirdots.classList.toggle('aberta')
      
      let estaAberta = caseAirdots.classList.contains('aberta') && status === false? 
                    carregarAirdots() : null
      
}

function carregarAirdots()
{
  status = true
  
  const leds = document.querySelectorAll('.leds-case .led')
  
  const ledsAirdots = document.querySelector('.leds-airdots')
  
  ledsAirdots.classList.add('aceso')
  
  leds.forEach(( item, indice, arrayLeds)=>
  {
    arrayLeds = Array.from( arrayLeds ).reverse()
     
      arrayLeds.forEach(( led, i)=>
      {
         setTimeout(()=>
         {
           led.classList.add('aceso')
         },(i + 1) * 200)
        
        apagarLed(3000, led)
        apagarLed( 1700, ledsAirdots)
        
  })
 })
}

function apagarLed( tempo, led)
{
   status = false
         setTimeout(() =>
         {
            led.classList.remove('aceso')
         }, tempo)
}

function airdots()
{
  caseAirdots.classList.toggle('ativo')
}
