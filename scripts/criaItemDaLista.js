import geraDataCompleta from "./geraDataCompleta.js";

const inputItem = document.getElementById("input-item")
let contador = 0;

export function criaItemDaLista() {

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    const botaoRemover = document.createElement("button")
    const iconeBotaoRemover = document.createElement("img")
    iconeBotaoRemover.src = "../img/delete.svg"
    iconeBotaoRemover.alt = "Remover item da lista"

    const botaoEditar = document.createElement("button")
    const iconeBotaoEditar = document.createElement("img")
    iconeBotaoEditar.src = "../img/edit.svg"
    iconeBotaoEditar.alt = "Editar item da lista"

    //criando uma div pra colocar o input e o item pra depois inserir spacebetween na classe containerItemDaLista
    const containerInputItem = document.createElement("div")
    containerInputItem.classList.add("container-input-item")

    //criando uma div pra colocar os ícones pra depois inserir spacebetween na classe containerItemDaLista
    const containerIconeBotao = document.createElement("div")
    containerIconeBotao.classList.add("container-icone-botao")

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    }
    )

    containerInputItem.appendChild(inputCheckbox);
    containerInputItem.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista)

    iconeBotaoRemover.appendChild(botaoRemover)
    containerIconeBotao.appendChild(iconeBotaoRemover)
    iconeBotaoEditar.appendChild(botaoEditar)
    containerIconeBotao.appendChild(iconeBotaoEditar)

    containerItemDaLista.appendChild(containerInputItem)
    containerItemDaLista.appendChild(containerIconeBotao)

    const dataCompleta = geraDataCompleta()
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)

    return itemDaLista;
}