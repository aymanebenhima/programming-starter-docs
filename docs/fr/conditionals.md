# Les Conditions : Prendre des Décisions

## Comment les Ordinateurs Prennent des Décisions

Dans la vie de tous les jours, vous prenez des décisions tout le temps en fonction de la situation.
- **Si (If)** il pleut, **alors** je prendrai un parapluie.
- **Sinon (Else)**, je mettrai des lunettes de soleil.

Nous pouvons apprendre aux ordinateurs à prendre ces mêmes types de décisions ! En code, nous appelons cela des **instructions conditionnelles** (conditional statements). Elles vérifient si une condition spécifique est vraie, puis effectuent une tâche en fonction du résultat.

## L'Instruction `if`

La façon la plus simple de prendre une décision en code est d'utiliser l'instruction `if`.

```js
let ilPleut = true;

if (ilPleut) {
  console.log('Prends un parapluie !');
}
```

Voici comment une instruction `if` est construite :
1. Elle commence par le mot `if` (si).
2. Ensuite, il y a des parenthèses `()`. À l'intérieur va la **condition** (une question qui a une réponse oui/non ou vrai/faux).
3. Enfin, il y a des accolades `{}`. À l'intérieur des accolades se trouve le code qui s'exécutera **uniquement si** la condition est `true` (vraie).

Si `ilPleut` était `false` (faux), l'ordinateur ignorerait simplement le code à l'intérieur des accolades et n'imprimerait rien !

## L'Instruction `if...else`

Que se passe-t-il si nous voulons que l'ordinateur fasse autre chose lorsque la condition est `false` ? Nous pouvons ajouter une instruction `else` (sinon) !

```js
let ilPleut = false;

if (ilPleut) {
  console.log('Prends un parapluie !');
} else {
  console.log('Mets des lunettes de soleil !');
}
```

Maintenant, si la condition est `false`, l'ordinateur saute le premier bloc de code et exécute le code à l'intérieur du bloc `else` à la place. Dans ce cas, il imprimera : `Mets des lunettes de soleil !`.

## Poser des Questions : Opérateurs de Comparaison

Généralement, nos conditions ne sont pas juste une simple variable `true` ou `false`. Nous voulons comparer des choses. Par exemple : "Le score du joueur est-il supérieur à 100 ?"

Pour poser ces questions, nous utilisons des **opérateurs de comparaison** :
- Moins que : `<`
- Plus grand que : `>`
- Inférieur ou égal à : `<=`
- Supérieur ou égal à : `>=`
- Est exactement égal à : `===`
- N'est PAS égal à : `!==`

*Remarquez que "est égal à" utilise trois signes égal `===`. N'oubliez pas qu'un seul signe égal `=` n'est utilisé que pour mettre des données dans une boîte de variable !*

Voyons cela en action :

```js
let niveauDeFaim = 8;

if (niveauDeFaim > 7) {
  console.log('Il est temps de manger !');
} else {
  console.log('Nous pourrons manger plus tard !');
}
```
Puisque 8 est supérieur à 7, ce code imprimera : `Il est temps de manger !`.

## Décisions Multiples : `else if`

Parfois, la vie n'est pas juste A ou B. Il peut y avoir un C, D et E !

Si nous avons plus de deux résultats possibles, nous pouvons utiliser les instructions `else if` (sinon si) pour enchaîner les décisions.

```js
let feuDeSignalisation = 'jaune';

if (feuDeSignalisation === 'rouge') {
  console.log('Arrêtez-vous !');
} else if (feuDeSignalisation === 'jaune') {
  console.log('Ralentissez !');
} else if (feuDeSignalisation === 'vert') {
  console.log('Allez-y !');
} else {
  console.log('Attention, feu inconnu !');
}
```

L'ordinateur lit de haut en bas. Il vérifie la première condition (`'rouge'`). Puisque c'est faux, il passe à la suivante (`'jaune'`). Puisque c'est vrai, il exécute ce bloc de code et ignore complètement le reste !

## Vérifier Plusieurs Choses à la Fois (Opérateurs Logiques)

Et si vous vouliez aller au parc, mais **seulement si** il fait beau **ET** que c'est le week-end ?

Nous pouvons utiliser des **opérateurs logiques** pour combiner des conditions :
- **ET (AND)** (`&&`) : Les deux conditions doivent être vraies.
- **OU (OR)** (`||`) : Une seule des conditions doit être vraie.

Utilisation de ET (`&&`) :
```js
let faitBeau = true;
let estWeekend = true;

if (faitBeau && estWeekend) {
  console.log('Allons au parc !');
}
```

Utilisation de OU (`||`) :
```js
let jour = 'Samedi';

if (jour === 'Samedi' || jour === 'Dimanche') {
  console.log('Profitez du week-end !');
}
```

## Résumé

Récapitulons les conditions :
- **`if`** vérifie une condition et exécute un bloc de code si la condition est `true` (vraie).
- **`else`** donne un plan de secours par défaut si la condition était `false` (fausse).
- **`else if`** vous permet de vérifier plusieurs conditions différentes à la suite.
- **Les opérateurs de comparaison** (comme `>`, `<`, `===`) vous aident à comparer des valeurs.
- **Les opérateurs logiques** (`&&` pour ET, `||` pour OU) vous permettent de combiner plusieurs conditions ensemble.
