// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, datadecadastro, descricao, preco){
        this.nome = nome;
        this.datadecadastro = datadecadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrar_dados(){
        return this.nome +  this.datadecadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
        constructor(nome, datadecadastro , inscricao, preco, produto_destaque){
            super(nome, datadecadastro, inscricao, preco );
            this.produto_destaque = produto_destaque;
        }
        mostrarProdutoDestaque(){
            return this.nome + this.datadecadastro + this.descricao + this.preco + this.produto_destaque
        }
}
