const pegaArquivo = require('../index.js')

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    },
]
describe('pegaArquivo', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultado', async () => {
        const result = await pegaArquivo('/home/akirahx/Área de Trabalho/Nify/lib-markdown/test/arquivos/texto1.md')
        expect(result).toEqual(arrayResult)
    })
})