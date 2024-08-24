import { produtos } from "@/data/data-products";

export const searchProducts= (textoDigitado) =>{
    return produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    );
};

export const filterProducts = (categoria) =>{
    return produtos.filter((produto) => produto.categoria === categoria);

};

export const EntraceProducts = filterProducts("Entradas");