# Mesa Arcana — Hub de Download

Site estático preparado para publicação na Vercel.

## Inserir o instalador

Coloque o ZIP do instalador em:

`dist-instalador/dist-instalador.zip`

O botão de download já aponta para esse caminho.

## Publicação na Vercel

1. Coloque `dist-instalador.zip` dentro da pasta `dist-instalador`.
2. Suba esta pasta para um repositório ou faça o deploy diretamente pela Vercel.
3. Framework Preset: `Other`.
4. Não há comando de build.
5. Não há diretório de output específico: a raiz já é o site.

## Navegação

- `#/inicio`
- `#/recursos`
- `#/download`

Como a navegação usa hash, não são necessárias regras de rewrite para as páginas.

## Alterar versão ou arquivo

Edite `config.js`.

## Observação sobre o arquivo

A Vercel impõe limites de upload de arquivos estáticos conforme o plano. Se o ZIP do instalador ultrapassar o limite do seu plano, mantenha o site na Vercel e troque apenas `arquivoDownload` em `config.js` para um armazenamento externo.


## Download atual

O botão de download aponta diretamente para o GitHub Releases:

`https://github.com/HigorBernardesPNG/Mesa-Arcana-Teste-0.12.1-controll/releases/download/MVP0121/dist-instalador.zip`

Para trocar o arquivo no futuro, altere apenas `arquivoDownload` em `config.js`.
