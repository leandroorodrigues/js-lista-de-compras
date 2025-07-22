import verificaListaVazia from "./verificaListaVazia.js";

export default function removeItemDaLista(itemDaLista) {
    itemDaLista.remove()
    const listaDeCompras = document.getElementById("lista-de-compras");
    verificaListaVazia(listaDeCompras)
}