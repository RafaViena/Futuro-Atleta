Bem-vindo ao Futuro Atleta, um site desenvolvido para ensinar fundamentos do vôlei de forma simples, organizada e totalmente responsiva.
O objetivo do projeto é fornecer conteúdo educativo direto ao ponto, usando HTML e CSS, com textos estruturados em módulos — como ataque, manchete/defesa, posições e saque — além de incluir recursos adicionais como vídeos incorporados.

🚀 Objetivo do Projeto

O site foi criado para:

Ensinar fundamentos básicos e intermediários do vôlei.

Apresentar conteúdo em módulos, facilitando a navegação e o estudo.

Combinar texto didático + exemplos + vídeos para reforço visual.

Ser simples, leve e totalmente responsivo em celulares, tablets e desktops.

🧱 Estrutura Geral do Site

O site é composto por seções organizadas em módulos, cada um abordando um aspecto importante do vôlei. Em geral, cada módulo possui:

Título

Explicação teórica

Subtópicos detalhados

Exemplos práticos

Vídeo explicativo (YouTube embed responsivo)

/index.html        → Página inicial / Introdução
/ataque.html       → Módulo 1: Fundamentos do Ataque
/manchete.html     → Módulo 2: Defesa e manchete
/posicoes.html     → Módulo 3: Posições do voleibol
/saque.html        → Módulo 4: Tipos e fundamentos do saque
/historia.html     → História do vôlei
/css/style.css     → Estilos gerais

📱 Responsividade

Todos os vídeos do YouTube são incorporados com uma estrutura responsiva, garantindo ajuste automático para qualquer tela.

Exemplo utilizado no site:

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
  <iframe 
    src="https://www.youtube.com/embed/qV-IIOmGuR0"
    style="position:absolute; top:0; left:0; width:100%; height:100%;"
    frameborder="0" allowfullscreen>
  </iframe>
</div>


Além disso, o layout usa medidas proporcionais (como max-width, vh, vw e %) para evitar quebra de conteúdo.

🧩 Como o Site Funciona
🔹 Navegação

O site funciona de maneira simples: o usuário escolhe um módulo no menu e é direcionado para uma página com o conteúdo completo daquele tema.

🔹 Conteúdo modular

Cada módulo possui:

Explicação introdutória

Divisão em tópicos

Exemplos ou instruções

Vídeo complementar (quando necessário)

Isso facilita tanto estudo contínuo quanto consulta rápida.



