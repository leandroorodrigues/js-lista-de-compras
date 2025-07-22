
const mensagemItemVazio = "Por favor, insira um item válido!"

export default function editaItemDaLista(nomeItem) {
    const itemEditado = prompt("Editar item: " + nomeItem.innerText)
    if (itemEditado !== null && itemEditado.trim() !== "" && itemEditado.length >= 3) {
        nomeItem.innerText = itemEditado.trim()
    } else {
        alert(mensagemItemVazio)
    }
}