ng new finansys --routing --skip-tests
ll
cd finansys/

DEPENDÊNCIAS: 
npm i bootstrap jquery --save
npm install angular-imask --save        ## Utilizado para fazer máscara de capo;
npm install currency-formatter --save   ## Serve para manipular textos, números, realizar conversões de valores (de números americanos para brasileiros etc).
npm install moment --save               ## (biblioteca gigante) permite fazer várias manipulações com datas
npm install toastr --save               ## permite adicionar mensagens tooltip, de erros, warning, info etc
## www.primefaces.org
npm install primeng --save              ## Mascaras e componentes visuais como de calendar etc...
npm install primeicons --save           ## ...
npm install chart.js --save             ## gráficos...
npm install angular-in-memory-web-api   ## biblioteca pluging do próprio Angular, para simular um BACKEND

-------------
MÓDULOS
---------------------------------
ng g m pages/categories --routing

ng g m pages/categories/category-list

ng g m pages/categories/category-form

-------------
SERVIÇOS
---------------------------------
ng g s pages/categories/shared/category

 
 
 
 
 