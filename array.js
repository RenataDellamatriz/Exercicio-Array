let valores = []

function adicionar() {    
  let input = document.getElementById('indice')  
  let inputValue = Number(input.value)
  let select = document.getElementById('select')
  let resposta = document.getElementById('resposta')

  
    let item = document.createElement('option')
    item.text = `${inputValue}`


    if (inputValue <= 0 || inputValue > 100) {
        resposta.innerHTML = 'Digite um valor entre 0 e 100'

    } else if (valores.indexOf(inputValue) != -1) {

        resposta.innerHTML = `Digite um número diferente`
        

    } else {
        select.appendChild(item)
        valores.push(inputValue)

    }
    input.value = ""
}

function contar(){

  valores.sort((a,b)=>a-b)
  console.log(valores)
  let ultimoItemDoArray = valores.length - 1
  let soma = 0
  
  for (let indice = 0 ; indice <= ultimoItemDoArray; indice++){
    soma += valores[indice]
  }

  let media = soma / valores.length
  
  resposta.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
  resposta.innerHTML += `<p>O menor valor informado é ${valores[0]}</p>`
  resposta.innerHTML += `<p>O maior valor informado é ${valores[ultimoItemDoArray]}<p/>`
  resposta.innerHTML += `<p>Somando todos os valores temos ${soma}<p/>`
  resposta.innerHTML += `<p>A média dos valores digitados é ${media}<p/>`
}





