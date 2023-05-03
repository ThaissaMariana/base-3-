// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_cadastro, descricao, preco){
        this.nome = nome;
        this.data_cadastro = data_cadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrar_dados(){
        return this.nome +  this.data_cadastro + this.descricao + this.preco;
    }
}

class Produto_Destaque extends Produto{
        constructor(nome, data_cadastro , inscricao, preco, produto_destaque){
            super(nome, data_cadastro, inscricao, preco );
            this.produto_destaque = produto_destaque;
        }
        mostrarProduto_Destaque(){
            return this.nome + this.data_cadastro + this.descricao + this.preco + this.produto_destaque
        }
}

