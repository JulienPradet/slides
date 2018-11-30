# Où sont passés mes composants ?

Quand on commence à faire des applications en React, on se rend compte que sa force vient de la séparation de l'application en composants. Mais il arrive toujours ce moment où on a des composants en double, un manque d'homogénéité entre nos pages… Bref, de la dette technique qui s'enlise.

Sur [Front-Commerce](https://developers.front-commerce.com/), nous avons mis en place la solution magique : un Design System. Mais tout n'est pas si simple. Quels sont les problèmes que l'on a rencontré ? Quelle différence entre un composant du Design System et un composant React ? Comment découper et organiser nos composants ? Voilà tout un tas de questions que j'aborderai au cours de ce retour d'expérience.

## A propos de la conférence

L'idée de cette conférence est de se concentrer sur la séparation des responsabilités des composants. Je parlerai des composants React, mais en soit, ce serait valable pour tout ce qui est orienté composant.

Mon but est de le faire sous la forme d'un retour d'expérience en présentant comment nous avons construit [Front Commerce](https://developers.front-commerce.com/), un outil pour construire des thèmes e-commerce. En le faisant ainsi, j'espère apporter le contexte nécessaire pour comprendre comment nous réfléchissons nos composants et ainsi faire comprendre que ce n'est pas une règle immuable, qu'il n'y a pas de silver bullet. Cela dit, je ne veux surtout pas faire une conférence "pub" pour présenter le produit.

Ce sera donc l'occasion pour moi de dire que&nbsp;:

- Les composants dans un Design System ne sont pas équivalents avec les composants en React. Ca ne fonctionne que dans le sens Design System -> React, pas l'inverse.
- En implémentant un véritable Design System, on se rend compte que ça résoud beaucoup de problèmes en React. (ex: faire descendre des propriétés aux sous-sous-sous-composants, réutiliser les composants à différents endroits, séparer le métier de l'UI…)
- En utilisant un bon Design System, c'est beaucoup plus simple de faire des thèmes réutilisables et/ou personnalisables. C'est donc utile pour ceux qui font des outils pour les développeurs, mais aussi pour tous ceux qui veulent partager une base de composants sur plusieurs applications.
- Faire un Design System, c'est un véritable changement de paradigme et au début, forcément, on fait des erreurs.
