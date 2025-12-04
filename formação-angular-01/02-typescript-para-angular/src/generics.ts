//generics
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
};

const numArray = concatArray<number[]>([1, 7, 9], [3, 5]);
const stgArray = concatArray<string[]>(["bola", "carrinho"], ["lego", "xadrez", "dama"]);
console.log(numArray);
console.log(stgArray);