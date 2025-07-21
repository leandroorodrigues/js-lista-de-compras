const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item")
let contador = 0

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault()
    item = inputItem.value.trim()
    if (item === "") {
        alert('Um item precisa ser inserido!')
        return
    }

    const itemDaLista = document.createElement("li")
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container")
    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.id = "checkbox-" + contador++
    const nomeItem = document.createElement("p")
    nomeItem.innerText = inputItem.value

    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem)

    itemDaLista.appendChild(containerItemDaLista)
    listaDeCompras.appendChild(itemDaLista)
    console.log(itemDaLista)

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"})
    const data = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    const textoData = document.createElement("p")
    textoData.classList.add("texto-data")
    itemDaLista.appendChild(textoData)
    textoData.innerHTML = dataCompleta
})