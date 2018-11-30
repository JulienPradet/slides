# Apollo Link State : Quand les données client et serveur ne font plus qu'un

_GraphQL_ est un petit bijou qui a changé ma façon de voir les échanges client-serveur. Côté back-end, il n'y a plus besoin de faire des endpoints spécifiques pour le front. Côté front-end, on peut enfin se concentrer sur l'affichage des données sans se préoccuper des détails d'implémentations du back.

Mais faut-il vraiment se restreindre aux données serveur ? Pour gérer l'état de notre application client, on a tendance à utiliser autre chose (_Redux_, _MobX_, …). Ne serait-ce pas plus simple d'homogénéiser tout ça ?

C'est la promesse de _Apollo Link State_ ! Il est désormais possible d'utiliser des queries et des mutations GraphQL pour représenter l'état de notre application, sans passer par le serveur ! Comment ça marche ? Qu'est-ce que cela peut nous apporter ? Quelles sont les limites ? C'est ce que nous essaierons d'éclaircir pendant cette présentation.

## A propos de la conférence

Fervent défenseur d'Apollo depuis que cette librairie a commencé à venir marcher sur les plates bandes de Relay, je suis ravi de voir qu'ils continuent encore et toujours d'innover. Tout n'est pas toujours bon à prendre, mais ça veut le coup d'expérimenter !

Cette conférence s'adresse à des "Confirmés" uniquement parce qu'il faut avoir déjà eu l'occasion de toucher à GraphQL et si possible à Apollo. Je présenterai donc le concept de Apollo Link State qui permet de fusionner le schéma de son serveur avec un schéma qui ne vit que côté client. C'est très puissant et plein de promesse.

Dans un premier temps je montrerai comment fonctionnement cette librairie en faisant des parallèles avec Redux. Ensuite, je ferai une partie pour expliquer à quel point cela peut faciliter les développements, que ce soit pour prototyper ou pour maintenir une application (avec la possibilité de déplacer facilement du code du serveur au client ou vice versa). Enfin, je veux montrer que tout n'est pas si parfait. Notamment, le fait que ce soit côté client impose de lourdes contraintes (pour rester performant) et empêche d'utiliser toute la puissance de GraphQL. Il devient par exemple difficile de profiter des types et de la validation statique des requêtes.
