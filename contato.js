var nome = window.document.getElementById('nome')
var form = window.document.querySelector('form')
var res = document.getElementById('res')

function enviar() {
    res.className = 'mensagem'
    event.preventDefault();
    res.innerHTML = `Obrigado ${nome.value}, Suas informações foram enviadas com sucesso! <br> (Este é um site fictício, mas espero que tenha apreciado a experiência! seus dados não foram realmente enviados, armazenados ou acessados de nenhuma forma. Seu nome, e-mail e telefone são apenas informações exemplificativas e não foram processadas. Obrigado por usar o site!)`
}