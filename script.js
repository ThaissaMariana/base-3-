// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_do_cadastro, descricao_do_produto, preco){
        this.nome = nome;
        this.data_do_cadastro = data_do_cadastro;
        this.descricao_do_produto = descricao_do_produto;
        this.preco = preco;
    }

    mostrar_dados(){
        return `
        <div class="rosa">${this.nome}</div>
        <div class="rosa">${this.data_do_cadastro}</div>
        <div class="rosa">${this.descricao_do_produto}</div>
        <div class="rosa">${this.preco}</div>
        `;
        //return this.nome +  this.data_do_cadastro + this.descricao_do_produto + this.preco;
    }
}

class Produto_Destaque extends Produto{
        constructor(nome, data_do_cadastro , descricao_do_produto, preco, produto_destaque){
            super(nome, data_do_cadastro, descricao_do_produto, preco );
            this.produto_destaque = produto_destaque;
        }
        mostrar_Produto_Destaque(){
            return this.nome + this.data_do_cadastro + this.descricao_do_produto + this.preco + this.produto_destaque;
        }
}

const produtos = new Produto_Destaque("Motinha Hello Kitty", "26/02/2023", "1234", "2500",  )
console.log(produtos.mostrar_dados())

const div = document.getElementById('Produto_Destaque');
div.insertAdjacentHTML('afterbegin', produtos.mostrar_Produto_Destaque())