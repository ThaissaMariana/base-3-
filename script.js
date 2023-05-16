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
const produtos = new Produto_Destaque("Motinha Hello Kitty", "26/02/2023", "1234", "2500", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F431078995582843843%2F&psig=AOvVaw3gcL-PkXUp8ulvD3vBGPi1&ust=1684327690846000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLi6mePv-f4CFQAAAAAdAAAAABAD)")
console.log(produtos.mostrar_dados())
const div = document.getElementById('Produto_Destaque');
div.insertAdjacentHTML('afterbegin', produtos.mostrar_Produto_Destaque())

const produtos2 = new Produto_Destaque("Robo Hello Kitty", "24/01/2023", "1678", "500", "https://ae01.alicdn.com/kf/S808da0dfc87345228607816dbba63022P/Ol-kitty-gundam-montado-modelo-q-vers-o-crian-a-rob-brinquedo-modelo-de-escrit-rio.jpg_Q90.jpg_.webp")
console.log(produtos2.mostrar_dados())
const div2 = document.getElementById('Produto_Destaque');
div.insertAdjacentHTML('afterbegin', produtos2.mostrar_Produto_Destaque())

const produtos3 = new Produto_Destaque("Celular Hello Kitty", "10/03/2023", "1293", "200", "https://cf.shopee.com.mx/file/a27066a34bf7bfe50488aa2f0a91691d")
console.log(produtos3.mostrar_dados())
const div3 = document.getElementById('Produto_Destaque');
div.insertAdjacentHTML('afterbegin', produtos3.mostrar_Produto_Destaque())

const produtos4 = new Produto_Destaque("Notebook Hello Kitty", "07/04/2023", "1547", "2100", "https://ae01.alicdn.com/kf/HTB1B7PJGVXXXXX_aXXXq6xXFXXXE/220926133/HTB1B7PJGVXXXXX_aXXXq6xXFXXXE.jpg")
console.log(produtos4.mostrar_dados())
const div4 = document.getElementById('Produto_Destaque');
div.insertAdjacentHTML('afterbegin', produtos4.mostrar_Produto_Destaque())

const produtos5 = new Produto_Destaque("Tablet Hello Kitty", "05/05/2023", "1326", "450", "https://plazavea.vteximg.com.br/arquivos/ids/1907322-512-512/20235652-3.jpg")
console.log(produtos5.mostrar_dados())
const div5 = document.getElementById('Produto_Destaque');
div.insertAdjacentHTML('afterbegin', produtos5.mostrar_Produto_Destaque())