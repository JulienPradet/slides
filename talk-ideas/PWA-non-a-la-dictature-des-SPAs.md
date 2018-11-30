# Progressive Web Apps : Non à la dictature des SPAs !

Pour faire une PWA, il faut être **performant**, **disponible** et **engageant**. Pas facile ! Pourtant, souvent, on se complique la tâche en faisant en plus une Single Page Application (SPA).

Et si nous faisions autrement ? Reprenons un site standard et transformons le en PWA.

---

## A propos de la conférence

Les PWAs sont un sujet qui m'intéressane particulièrement. Beaucoup de portes s'ouvrent sur le web grâce à ça. Mais parfois, on veut en faire un peu trop et donc on ne fait pas. La marche est trop haute.

Le but de cette présentation est de montrer qu'il est possible de faire les choses étapes par étapes et que, dès aujourd'hui, on peut apporter quelque chose à nos utilisateurs. Il n'y a pas besoin de refaire tout le site pour y arriver.

Dans un premier temps, je vais rappeler ce qu'est une PWA et discuter de l'origine du terme. Mon but est de montrer que, même si ça a été repris à des fins marketings, les critères de base d'une PWA sont surtout des éléments qui sont là pour améliorer l'expérience utilisateur : si l'un d'eux n'apporte rien aux utilisateurs, il ne faut pas le faire. Si tout est utile, il faut au moins faire les choses dans le bon ordre.

Ensuite, et pour la majeure partie de la présentation, je m'appuierai sur un cas concret pour expliquer comment d'un site "normal" (fait en PHP, Ruby ou autre), on peut faire une PWA. J'insisterai notamment sur le fait que ce n'est pas parce qu'on parle d'"Application Shell" avec les PWAs qu'on a forcément besoin de React/Angular/Polymer/etc.

A priori, même si ce n'est pas fixé, le cas concret en question sera le site d'une conférence :

1. Ajout à l'écran d'accueil pour arriver directement sur le programme de la conf en mode hors ligne
2. Sauvegarde d'un programme personnalisé pour permettre aux participants de savoir facilement où est la prochaine conférence qui les intéresse

Pendant la présentation, je resterai donc assez technique en montrant le code pour chaque étape. Cela dit, je ne présenterai pas en détail le fonctionnement de chaque outil (Service Workers, Cache API, IndexedDB, etc.) pour ne pas faire de redite avec les années précédentes.

Tout cela n'est encore évidemment qu'à l'état d'ébauche et je suis prêt à adapter le contenu. :)
