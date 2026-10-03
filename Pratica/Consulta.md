
### 1. Saída de Dados e Depuração

* `console.log()`: Envia uma mensagem ou valor para o console do navegador (compilador).
* `alert()`: Exibe uma caixa de diálogo de alerta com uma mensagem na tela.
* `document.write()`: Escreve diretamente no documento HTML (usado principalmente para testes).

---

### 2. Variáveis e Declarações

* `let`: Declara uma variável com escopo de bloco (o valor pode ser reatribuído).
* `const`: Declara uma constante com escopo de bloco (o valor **não** pode ser alterado).
* `var`: Declara uma variável com escopo global ou de função (sintaxe antiga, evite usar).

---

### 3. Funções

* `function minhaFuncao() {}`: Declara uma função tradicional reutilizável.
* `const minhaFuncao = () => {}`: Declara uma *Arrow Function* (sintaxe moderna e curta).
* `return`: Finaliza a execução de uma função e retorna um valor.

---

### 4. Controle de Fluxo (Condicionais)

* `if (condicao) {}`: Executa um bloco de código se a condição for verdadeira.
* `else {}`: Executa um bloco caso a condição do `if` seja falsa.
* `else if (condicao) {}`: Especifica uma nova condição caso a primeira seja falsa.
* `switch (expressao) {}`: Avalia uma expressão e executa o bloco correspondente ao `case`.
* `condicao ? valor1 : valor2`: Operador ternário (uma forma curta de escrever um `if/else`).

---

### 5. Estruturas de Repetição (Loops)

* `for (let i = 0; i < n; i++)`: Repete um bloco de código um número determinado de vezes.
* `while (condicao)`: Repete o bloco enquanto a condição for verdadeira.
* `for...of`: Percorre os valores de um elemento iterável (como uma lista/Array).
* `for...in`: Percorre as propriedades de um objeto.
* `break`: Interrompe e sai imediatamente do loop.
* `continue`: Pula a iteração atual e passa para a próxima.

---

### 6. Manipulação de Arrays (Listas)

* `array.push(item)`: Adiciona um elemento ao **final** do array.
* `array.pop()`: Remove e retorna o **último** elemento do array.
* `array.shift()`: Remove e retorna o **primeiro** elemento do array.
* `array.unshift(item)`: Adiciona um elemento no **início** do array.
* `array.map(func)`: Cria um novo array aplicando uma função a cada item.
* `array.filter(func)`: Retorna um novo array contendo apenas os itens que passam no teste.
* `array.forEach(func)`: Executa uma função para cada elemento do array (não retorna nada).
* `array.includes(item)`: Verifica se o array contém determinado elemento (retorna `true` ou `false`).

---

### 7. Manipulação de Objetos

* `Object.keys(obj)`: Retorna um array com os nomes de todas as chaves do objeto.
* `Object.values(obj)`: Retorna um array com todos os valores do objeto.
* `Object.entries(obj)`: Retorna um array com os pares `[chave, valor]`.
* `JSON.stringify(obj)`: Converte um objeto JavaScript em uma string no formato JSON.
* `JSON.parse(string)`: Converte uma string JSON de volta para um objeto JavaScript.

---

### 8. Manipulação do DOM (HTML)

* `document.getElementById('id')`: Seleciona um elemento HTML pelo seu ID.
* `document.querySelector('seletor')`: Seleciona o primeiro elemento que corresponde a um seletor CSS.
* `document.querySelectorAll('seletor')`: Seleciona todos os elementos que correspondem ao seletor CSS.
* `elemento.addEventListener('event', func)`: Adiciona um manipulador de eventos a um elemento (ex: `'click'`).
* `elemento.innerHTML`: Define ou retorna o conteúdo HTML interno de um elemento.
* `elemento.style.propriedade`: Altera diretamente o estilo CSS de um elemento.

---

### 9. Assincronismo e Requisições

* `setTimeout(func, ms)`: Executa uma função após um determinado tempo de espera (em milissegundos).
* `setInterval(func, ms)`: Executa uma função repetidamente em intervalos de tempo fixos.
* `fetch(url)`: Faz uma requisição HTTP assíncrona para buscar dados de uma API.
* `async / await`: Sintaxe moderna usada para lidar com operações assíncronas (Promises) de forma síncrona.