# Introduction à JavaScript

## Qu'est-ce que JavaScript ?

Bienvenue dans le monde de la programmation ! Si vous n'avez aucune expérience en codage, vous êtes au bon endroit.

Imaginez un site web comme une maison :
- **HTML** est la structure (les murs et les pièces).
- **CSS** est le design (la peinture et la décoration).
- **JavaScript** est l'électricité et la plomberie. Il rend la maison "vivante" et interactive !

JavaScript est un langage puissant utilisé par la plupart des navigateurs web modernes. Il vous permet de créer des actions dynamiques sur les sites web, comme cliquer sur un bouton pour afficher un pop-up, animer des images, ou vérifier si un mot de passe est correct.

## La Console : Votre Outil de Développeur

Lorsque vous écrivez du code, une grande partie du travail que fait l'ordinateur est invisible. Mais que faire si vous voulez voir ce que l'ordinateur fait ?

C'est là qu'intervient la **console** ! La console est un panneau caché dans votre navigateur web que les développeurs utilisent pour voir des messages et vérifier les erreurs.

En JavaScript, nous utilisons une commande appelée `console.log()` pour imprimer des messages dans ce panneau caché. Tout ce que vous mettez entre les parenthèses `()` apparaîtra à l'écran.

```js
// Ceci imprimera le chiffre 5 dans la console
console.log(5);

// Ceci imprimera un message d'accueil
console.log('Bonjour tout le monde !');
```

*Note : Vous remarquerez peut-être le point-virgule `;` à la fin. Considérez-le comme un point à la fin d'une phrase. Il indique à l'ordinateur que votre instruction est terminée !*

## Les Commentaires : Des Notes pour les Humains

Parfois, vous voulez laisser une note dans votre code pour vous-même ou pour d'autres personnes, mais vous ne voulez pas que l'ordinateur la lise. Ces notes s'appellent des **commentaires**. L'ordinateur les ignore complètement !

Il y a deux façons d'écrire des commentaires :

**1. Commentaire sur une seule ligne :** Utilisez deux barres obliques `//`. Tout ce qui suit sur cette ligne est ignoré.

```js
// Ceci est une note pour moi. L'ordinateur ne lira pas ceci !
console.log(10); 
```

**2. Commentaire multi-lignes :** Utilisez `/*` pour commencer et `*/` pour terminer. C'est idéal pour les notes plus longues.

```js
/*
  Ceci est une longue note.
  Elle peut prendre plusieurs lignes.
  Rien de tout cela ne sera exécuté par l'ordinateur !
*/
```

## Les Types de Données : Les Sortes d'Informations

Dans la vraie vie, nous traitons différents types d'informations : des mots, des chiffres, et des réponses oui/non. La programmation fonctionne exactement de la même manière !

En JavaScript, nous classons les informations dans différents **Types de Données**. Voici les plus basiques et importants pour les débutants :

- **Number (Nombre)** : N'importe quel nombre, avec ou sans décimales. Exemple : `4`, `15`, `23.42`.
- **String (Chaîne de caractères)** : N'importe quel texte, comme des lettres, des mots ou des phrases. Vous DEVEZ entourer les chaînes de guillemets pour que l'ordinateur sache que c'est du texte. Exemple : `'Bonjour'`, `"J'aime coder"`.
- **Boolean (Booléen)** : Il s'agit d'un simple interrupteur "marche" ou "arrêt". Il n'a que deux valeurs possibles : `true` (vrai/oui) ou `false` (faux/non). N'utilisez pas de guillemets pour les booléens !
- **Null** : Cela signifie simplement "rien" ou "vide" de manière intentionnelle.
- **Undefined (Non défini)** : Cela signifie qu'une valeur n'a pas encore été attribuée. L'ordinateur sait que quelque chose existe, mais ne sait pas ce que c'est.

```js
console.log('Ceci est une chaîne de caractères (String) car elle a des guillemets !');
console.log(40); // Ceci est un Nombre. Pas de guillemets !
console.log(true); // Ceci est un Booléen.
```

## Faire des Mathématiques avec du Code (Opérateurs Arithmétiques)

Les ordinateurs sont essentiellement des calculatrices géantes. Vous pouvez faire des mathématiques en JavaScript en utilisant des symboles basiques, appelés **opérateurs** :

- Additionner : `+`
- Soustraire : `-`
- Multiplier : `*`
- Diviser : `/`

```js
console.log(3 + 4); // Imprime 7
console.log(5 - 1); // Imprime 4
console.log(4 * 2); // Imprime 8
console.log(9 / 3); // Imprime 3
```

## Coller des Mots Ensemble (Concaténation de Chaînes)

Le symbole `+` n'est pas seulement pour les mathématiques ! Si vous utilisez `+` avec des **Strings** (texte), il colle les mots ensemble. Cela s'appelle la **concaténation**.

```js
console.log('sal' + 'ut'); // Imprime 'salut'
console.log("J'aime " + 'coder.'); // Imprime "J'aime coder."
```

Remarquez l'espace après le mot "aime ". L'ordinateur colle le texte exactement comme vous l'écrivez, donc si vous voulez un espace entre les mots, vous devez le taper à l'intérieur des guillemets !

## Résumé

Récapitulons ce que vous avez appris :
- **JavaScript** rend les sites web interactifs.
- Utilisez `console.log()` pour imprimer des messages et voir ce que fait votre code.
- Écrivez des **commentaires** en utilisant `//` ou `/* ... */` pour laisser des notes que l'ordinateur ignore.
- Les **Types de Données** de base sont les Nombres (Numbers), les Chaînes de caractères (Strings - texte entre guillemets) et les Booléens (`true` ou `false`).
- Vous pouvez faire des mathématiques en utilisant `+`, `-`, `*`, et `/`.
- Vous pouvez coller du texte (Strings) ensemble en utilisant le symbole `+`.
