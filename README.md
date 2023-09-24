# Conversor para QR Codes

Este é um simples conversor para QR Codes baseado em HTML, CSS e JavaScript. Ele permite que você insira dados e gere um QR Code correspondente para esses dados.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador da web.
2. Você verá uma caixa de entrada de texto onde pode inserir os dados que deseja converter em um QR Code.
3. Depois de inserir os dados, clique no botão "Converter para QR Code".
4. O QR Code gerado aparecerá abaixo da caixa de entrada de texto.

## Como Funciona

- Se você inserir apenas números, um QR Code será gerado com os dados fornecidos.
- Se os dados inseridos começarem com "+" (por exemplo, "+12 3456789"), o código irá gerar um QR Code com um link para o número de telefone no formato WhatsApp.
- Caso contrário, o código gerará um QR Code com os dados fornecidos.

## Exemplo

- Se você inserir "123456789", o QR Code conterá os dados "123456789".
- Se você inserir "+123456789", o QR Code conterá um link para o número de telefone do WhatsApp "+123456789".

## Estrutura do Projeto

- `index.html`: O arquivo HTML principal com a interface do usuário.
- `/static/css/style.css`: O arquivo CSS para estilizar a interface do usuário.
- `/static/js/script.js`: O arquivo JavaScript com a lógica de geração de QR Codes.

## Créditos

- Este projeto utiliza a API de geração de QR Codes fornecida por `qrserver.com`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar sugestões ou correções de problemas.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
