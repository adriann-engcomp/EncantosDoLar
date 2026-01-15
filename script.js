
let carrinho = [];

document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function() {
        const produto = this.closest('.produto');
        const nome = produto.querySelector('h3').textContent;
        const preco = produto.querySelector('.preco').textContent;
        
        carrinho.push({ nome, preco });
        alert(`${nome} adicionado ao carrinho!`);
        console.log('Carrinho:', carrinho);
    });
});
