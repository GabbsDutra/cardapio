import { useState } from "react";
import"../src/globals.css";

export default function App() {


    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Hambúrguer",
            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",
            preco: "R$ 25,99"
        },
        {
            id: 2,
            item: "Coca-cola 350ml",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",
            preco: "R$ 5,99"
        },
        {
            id: 3,
            item: "Batatas fritas",
            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",
            preco: "R$ 8,99"
        },
        {
            id: 4,
            item: "Suco de Frutas",
            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",
            preco: "R$ 8,99"
        },
    ]);

    const[ListadePedidos,setPedidos] = useStates([]);
     
    const adicionarPedido = (item) => {
     setListadePedidos([...ListadePedidos], item);


    }

    const removerPedido = (id) => {
     let listaAux = listadePedidos.filter((produto) => produto.id !==);
     setListadePedidos(Listaaux);
    }

    return (
        <div className="bloco-principal">
            <div className="bloco-produtos">
                {
                  ListadeProdutos.map((produto)=>
                  <div key={produto.id}>
                    <img src={produto.imagem} alt={produto.item}/>
                    <p>{produto.item}</p>
                    <p>{produto.preco}</p>
                    <button onclick={() => adicionarPedido(produto)}> QUERO</button>
                    </div>
                    
                    

                )
                }
            </div>
            <div className="bloco-pedidos">
                {ListadePedidos.map((produto) =>
                   <table key={setProdutos.id}>
                   <tr>
                   <tb>
                    {setProdutos.item}
                   </tb>
                   <tb>
                    {setProdutos.preco}
                   </tb>
                   <tb>
                    <button onClick={() => removerPedido(produto.id)}>Remover</button>
                   </tb>
                   </tr>
                   </table>
                
                )}
                
            </div>
        </div>
    );
}