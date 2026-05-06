# Les Variables : Vos Boîtes Numériques

## Qu'est-ce qu'une Variable ?

Imaginez que vous faites vos cartons pour déménager dans une nouvelle maison. Vous mettez vos livres dans un carton et écrivez "Livres" dessus. Plus tard, quand vous avez besoin d'un livre, vous ne cherchez pas partout — vous trouvez juste le carton avec l'étiquette "Livres".

En programmation, une **variable** est exactement cela : une boîte avec une étiquette où nous stockons des informations (des données) dans la mémoire de l'ordinateur. Nous donnons un nom à la boîte pour pouvoir retrouver et utiliser facilement ces informations plus tard !

Les variables nous permettent de stocker des choses comme le nom d'un utilisateur, le meilleur score dans un jeu, ou un mot de passe secret.

## Créer une Variable avec `let`

Pour créer une nouvelle boîte (variable), nous utilisons un mot spécial : `let`. Cela dit à l'ordinateur : "Hé, créons une nouvelle variable !"

```js
let monNom = 'Arya';
console.log(monNom); // Ceci imprimera : Arya
```

Décomposons ce qui vient de se passer :
1. `let` crée la variable.
2. `monNom` est l'étiquette que nous avons écrite sur notre boîte.
3. `=` est la façon dont nous mettons quelque chose à l'intérieur de la boîte.
4. `'Arya'` est la donnée (une Chaîne de caractères) que nous avons stockée à l'intérieur.

La meilleure chose avec `let`, c'est que nous pouvons changer ce qu'il y a dans la boîte plus tard !

```js
let platPrefere = 'Pizza';
console.log(platPrefere); // Imprime : Pizza

// Plus tard, on change d'avis !
platPrefere = 'Tacos';
console.log(platPrefere); // Imprime : Tacos
```

## Créer une Variable avec `const`

Parfois, vous voulez stocker des informations qui ne devraient **jamais** changer. Par exemple, votre année de naissance.

Pour les choses qui doivent rester constantes, nous utilisons le mot `const` au lieu de `let`.

```js
const monAnneeDeNaissance = 1995;
console.log(monAnneeDeNaissance); // Imprime : 1995
```

Si vous essayez de changer une variable `const`, l'ordinateur se fâchera et affichera une erreur, protégeant ainsi vos données pour éviter qu'elles ne soient modifiées par accident !

*Astuce : Si vous savez qu'une valeur changera plus tard (comme un score dans un jeu), utilisez `let`. Si elle doit rester la même pour toujours, utilisez `const`.*

## Les Variables et les Mathématiques

Puisque les variables ne sont que des boîtes contenant des données, si elles contiennent des nombres, nous pouvons faire des mathématiques avec !

```js
let score = 10;
score = score + 5; 

console.log(score); // Imprime : 15
```

Parce qu'ajouter des points à un score est très courant en codage, JavaScript nous donne un raccourci. Au lieu d'écrire `score = score + 5`, nous pouvons écrire `score += 5`.

```js
let vies = 3;
vies -= 1; // Ceci est un raccourci pour : vies = vies - 1
console.log(vies); // Imprime : 2
```

Nous avons aussi des raccourcis pour ajouter exactement 1 (`++`) ou soustraire exactement 1 (`--`) :

```js
let niveau = 1;
niveau++; // Ceci ajoute exactement 1 au niveau
console.log(niveau); // Imprime : 2
```

## Mélanger des Mots et des Variables

Et si vous vouliez dire bonjour à un utilisateur, mais que vous ne connaissez pas son nom avant qu'il ne se connecte ? Vous pouvez utiliser des variables et les coller avec du texte !

Vous pouvez utiliser le symbole `+` pour joindre du texte et des variables ensemble :

```js
let monAnimal = 'chat';
console.log('Je possède un ' + monAnimal + '.'); 
// Imprime : Je possède un chat.
```

## Une Meilleure Façon : L'Interpolation de Chaînes

Coller du texte avec le symbole `+` peut devenir brouillon si vous avez beaucoup de variables. Une méthode plus récente et plus propre pour faire cela s'appelle l'**Interpolation de Chaînes** (String Interpolation).

Au lieu des guillemets normaux, vous utilisez des **backticks** `` ` `` (généralement trouvés sur la touche 7 ou `Alt Gr` de votre clavier). Ensuite, vous placez vos variables à l'intérieur de `${ }`.

```js
let maVille = 'Paris';
let meteo = 'ensoleillé';

console.log(`J'habite à ${maVille} et il fait très ${meteo} aujourd'hui !`);
// Imprime : J'habite à Paris et il fait très ensoleillé aujourd'hui !
```

C'est beaucoup plus facile à lire et à écrire !

## Résumé des Variables

Récapitulons ce que nous avons appris :
- Les **Variables** sont des boîtes étiquetées utilisées pour stocker des données.
- Utilisez `let` si les données pourraient changer plus tard.
- Utilisez `const` si les données doivent être verrouillées et ne jamais changer.
- Vous pouvez faire des mathématiques avec des variables si elles contiennent des nombres (`+=`, `-=`, `++`).
- Vous pouvez mélanger du texte et des variables en utilisant le symbole `+`.
- Une façon plus propre de mélanger texte et variables est d'utiliser les backticks `` ` `` et `${}`.
