
# Lista de Tarefas

Este é um aplicativo simples de lista de tarefas, onde você pode adicionar e remover tarefas.
Foi um dos meus primeiros projetos em HTML, CSS e JavaScript

## Pré-requisitos

- Navegador (por exemplo, Google Chrome, Mozilla Firefox)

## Instalação

1. Clone o repositório para o seu computador:

   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd todo-list
   ```

3. Abra o arquivo `index.html` no seu navegador da web.

## Uso

1. No campo de texto "Escreva sua tarefa", digite uma descrição para a sua tarefa.
2. Clique no botão "Adicionar" ou pressione a tecla "Enter" para adicionar a tarefa à lista.
3. Para marcar uma tarefa como concluída, clique na caixa de seleção ao lado dela.
4. Para remover uma tarefa, clique no botão "x" ao lado dela.

## Exemplo

Você pode acessar uma versão online deste aplicativo [aqui](https://todo-list-pied-ten.vercel.app/).

## Funcionalidades:


### Adicionar uma tarefa à lista

```
function lista() {
  var valor = escreverTarefa.value;

  if (valor === "") {
    return;
  }

  var listinha = document.createElement("li");

  // Cria uma caixa de seleção
  var caixinha = document.createElement("input");
  caixinha.classList.add("caixinha");
  caixinha.type = "checkbox";

  // Cria um elemento de texto para a descrição da tarefa
  var texto = document.createElement("h4");
  texto.classList.add("h4");
  texto.textContent = valor;

  // Cria um botão de exclusão
  var apagar = document.createElement("span");
  apagar.classList.add("apagar");
  apagar.innerHTML = " x ";

  // Adiciona os elementos à lista de tarefas
  listinha.appendChild(caixinha);
  listinha.appendChild(texto);
  listinha.appendChild(apagar);
  listaDeTarefas.appendChild(listinha);

  escreverTarefa.value = "";
}
```

### Remover uma tarefa da lista

```
function apagar(removeElement) {
  removeElement.parentElement.remove();
}
```

## Conclusão

Este projeto é um aplicativo de lista de tarefas básico feito em HTML, CSS e JavaScript. Permite adicionar e remover tarefas. É uma ótima introdução para aprender HTML, CSS e JavaScript, além de praticar manipulação do DOM e eventos em JavaScript. 

Sinta-se a vontade para entrar em contato comigo caso tenha dúvidas ou sugestões! :smile:
