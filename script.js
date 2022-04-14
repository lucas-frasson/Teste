function verificar() {
    var n1 = window.document.querySelector('input#txtn1')
    var n2 = window.document.querySelector('input#txtn2')
    var res = window.document.querySelector('div#resposta')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var media = (n1+n2) / 2
    res.innerHTML = `<p> Com a nota <strong>${n1}</strong> e a nota <strong>${n2}</strong></p>`
    resposta.innerHTML += `<p> A média do aluno é <strong>${media}</strong></p>`
    if(media < 0 || media > 10)
    {
        resposta.innerHTML += `<p>Valor inválido!</p>`
    }
    else if (media >= 7)
    {
        resposta.innerHTML += `<p> Com a média <strong>${media}</strong>, o aluno foi aprovado!</p>`
    }
    else if (media >= 5 && media < 7)
    {
        resposta.innerHTML += `<p> Com a média <strong>${media}</strong>, o aluno ficou de recuperação!</p>`
    }
    else
    {
        resposta.innerHTML += `<p> Com a média <strong>${media}</strong>, o aluno foi reprovado! </p>`
    }
}