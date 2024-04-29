const { criarUsuario } = require('../server')

test ('criarUsuario retorna um objeto de usuário com ID 1', () => {
    // Dados de entrada para o teste
    const dadosentrada = { name: 'John' }

    // Chama a função a ser testada
    const resultado = criarUsuario(dadoEntrada)
    
    // Verifica se o resultado possui as propriedades esperadas
    expect(resultado).toEqual({ nome: 'John', id: 1 })

})

module.exports = { criarUsuario }