const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota === 10 ? 10 : ++nota)

console.log(notasAtualizadas)