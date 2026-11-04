const sobremesas = [
    {
        nome: "Bolinho de cenoura com chocolate",
        descricao: "Delicioso bolinho de cenoura com cobertura de chocolate.",
        preco: "Médio: R$ 28,00 | Grande: R$ 60,00",
        imagem: "imagens/bolinho-cenoura.jpeg"
    },
    {
        nome: "Escondidinho de brownie",
        descricao: "Deliciosas camadas de brownie e camadas generosas de brigadeiro de maracujá.",
        preco: "Médio: R$ 70,00 | Grande: R$ 140,00",
        imagem: "imagens/escondidinho.jpeg"
    },
    {
        nome: "Naked Cake no acetato",
        descricao: "Delicioso bolinho montado no acetato, uma opção que ficará linda na sua mesa de Natal.",
        preco: "R$ 80,00 o kg",
        imagem: "imagens/Naked Cake no acetato.jpeg"
    },
    {
        nome: "Bolinho de maracujá com Nutella",
        descricao: "Uma combinação deliciosa de maracujá com Nutella.",
        preco: "Médio: R$ 29,00 | Grande: R$ 66,00",
        imagem: "imagens/Bolinho de maracujá com Nutella.jpeg"
    },
    {
        nome: "Guirlanda de Brownie",
        descricao: "Disco de brownie com cobertura de brigadeiro ao leite ou ninho. Uma ótima opção para decorar sua mesa de Natal.",
        preco: "R$ 120,00",
        imagem: "imagens/guirlanda.jpeg"
    },
    {
        nome: "Torta Cookie",
        descricao: "A preferida de vocês também está no cardápio! Deliciosa torta cookie recheada com 400g de Nutella.",
        preco: "R$ 160,00",
        imagem: "imagens/torta-cookie.jpeg"
    },
    {
        nome: "Bombom de uva",
        descricao: "Em breve, mais informações.",
        preco: "Médio: R$ 65,00 / Grande: R$ 130,00",
        imagem: "imagens/Bombom de uva.jpeg"
    }
];

const lembrancinhas = [
    {
        nome: "Mini Guirlanda Brownie",
        descricao: "Ótima opção para presentear quem você ama! Delicioso disco de brownie com camada generosa de brigadeiro ao leite.",
        preco: "R$ 25,00",
        imagem: "imagens/Mini guirlanda.jpeg"
    },
    {
        nome: "Mini Chocotone",
        descricao: "Uma opção especial para presentear neste Natal.",
        preco: "Brigadeiro ao leite: R$ 20,00 / Maracujá e ninho com Nutella: R$ 25,00",
        imagem: "imagens/Mini chocotone.jpeg"
    }
];

function mostrarProdutos(produtos, local) {
    const container = document.getElementById(local);

    container.innerHTML = produtos.map((produto, index) => `
        <div class="product-card">

            <div class="produto-clique"
                 onclick="abrirProduto('${local}', ${index})">

                ${produto.imagem ? `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                ` : ""}

                <h3>${produto.nome}</h3>

                <strong>${produto.preco}</strong>

                <small>Toque para ver detalhes</small>

            </div>

        </div>
    `).join("");
}

function abrirProduto(local, index) {
    const produtos = local === "g-sob" ? sobremesas : lembrancinhas;
    const produto = produtos[index];

    const modal = document.getElementById("modal-produto");

    modal.innerHTML = `
        <div class="modal-conteudo">

            <button class="fechar" onclick="fecharProduto()">×</button>

            ${produto.imagem ? `
                <img src="${produto.imagem}" alt="${produto.nome}">
            ` : ""}

            <h2>${produto.nome}</h2>

            <p>${produto.descricao}</p>

            <strong>${produto.preco}</strong>

        </div>
    `;

    modal.style.display = "flex";
}

function fecharProduto() {
    document.getElementById("modal-produto").style.display = "none";
}

mostrarProdutos(sobremesas, "g-sob");
mostrarProdutos(lembrancinhas, "g-lem");

const areaNeve = document.getElementById("neve");

if (areaNeve) {
    for (let i = 0; i < 40; i++) {
        const floco = document.createElement("span");

        floco.classList.add("flocos");
        floco.innerHTML = "❄";

        floco.style.left = Math.random() * 100 + "%";
        floco.style.animationDuration = (5 + Math.random() * 8) + "s";
        floco.style.animationDelay = Math.random() * 8 + "s";
        floco.style.fontSize = (8 + Math.random() * 12) + "px";

        areaNeve.appendChild(floco);
    }
}
