 //divlista-produtos.insertAdjacentHTML('afterbegin',  mostrar_Produto_Destaque());
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
            return `
            <div class="produto-card">
            <img src="${this.produto_destaque}">
        <div class="rosa">${this.nome}</div>
        <div class="rosa">${this.data_do_cadastro}</div>
        <div class="rosa">${this.descricao_do_produto}</div>
        <div class="rosa">${this.preco}</div>
        </div>
        `; 
          //return this.nome + this.data_do_cadastro + this.descricao_do_produto + this.preco + this.produto_destaque;
        }
        
}

const produtos = new Produto_Destaque("Sanduicheira Hello Kitty", "26/02/2023", "1234", "2500", "https://ae01.alicdn.com/kf/HTB1XYcyHVXXXXa4XpXXq6xXFXXXM/Hellokitty-sandwich-maker-bread-maker-Toaster-2-min-make-a-sandwich-or-bread-breakfast-maker-cooking.jpg_220x220.jpg_.webp")
console.log(produtos.mostrar_Produto_Destaque())
const div = document.getElementById('produto_destaque');
div.insertAdjacentHTML('afterbegin', produtos.mostrar_Produto_Destaque())

const produtos2 = new Produto_Destaque("Robo Hello Kitty", "24/01/2023", "1678", "500", "https://ae01.alicdn.com/kf/H2a4fbade458c4260bc6db9acce49fd78F/BANDAI-SDEX-Gundam-Hello-Kitty-RX-78-2.jpg_220x220.jpg_.webp")
console.log(produtos2.mostrar_Produto_Destaque())
const div2 = document.getElementById('produto_destaque');
div2.insertAdjacentHTML('afterbegin', produtos2.mostrar_Produto_Destaque())


const produtos3 = new Produto_Destaque("Celular Hello Kitty", "10/03/2023", "1293", "200", "https://ae01.alicdn.com/kf/HTB1EOSHaLfsK1RjSszgq6yXzpXaE/Celular-hello-kitty-k688-para-crian-as-bonito-mini-celular-barato-com-desenhos-animados-pulseira-quad.jpg_220x220.jpg_.webp")
console.log(produtos3.mostrar_Produto_Destaque())
const div3 = document.getElementById('produto_destaque');
div3.insertAdjacentHTML('afterbegin', produtos3.mostrar_Produto_Destaque())

const produtos4 = new Produto_Destaque("Calculadora Hello Kitty", "07/04/2023", "1547", "2100", "https://ae01.alicdn.com/kf/S8a17b775b1f24f70b99e83667f1890d8y/Kawaii-ol-kitty-12-bit-computador-anima-o-dos-desenhos-animados-estudante-papelaria-solar-em-forma.jpg_220x220.jpg_.webp")
console.log(produtos4.mostrar_Produto_Destaque())
const div4 = document.getElementById('produto_destaque');
div4.insertAdjacentHTML('afterbegin', produtos4.mostrar_Produto_Destaque())

const produtos5 = new Produto_Destaque("Kombi Hello Kitty", "05/05/2023", "1326", "450", "https://ae01.alicdn.com/kf/S1f90915b98af47a49e09d4b4f693cf9dN/Hot-Wheels-Kool-Kombi-Red-Edition-Limited-Hello-Kitty-1-64-scale-vehicles-Car-Toy-for.jpg_220x220.jpg_.webp")
console.log(produtos5.mostrar_Produto_Destaque())
const div5 = document.getElementById('produto_destaque');
div5.insertAdjacentHTML('afterbegin', produtos5.mostrar_Produto_Destaque())