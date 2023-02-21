# Star Wars Wiki

Esse projeto é um desafio para uma vaga na empresa Innova.

Consiste em listar os personagens do Star Wars usando a API https://swapi.dev/

Também era necessário mostrar informações adicionais de cada personagem e os filmes em que estão.

Obs: Foram adicionadas fotos dos personagens e filmes por fora da API, por questões estéticas apenas.
Obs2: Para visualizar informações dos filmes, basta passar o mouse pelo filme ou segurar o touch no celular.

## Tecnologias

React Query para requisitar da API sem usar o useEffect
Axios para criar requisições mais robustas
TailwindCSS para facilitar o desenvolvimento gráfico
React Router para organizar a navegação

## Rodando localmente

Com o NodeJS instalado, você pode utilizar os comandos npm abaixo:

```bash
npm install
npm run dev
```

## Rodando localmente com Docker

Basta estar na pasta raiz do projeto.

```bash
docker build -t <image-name> .
docker run -p 3000:3000 <image-name>
```
