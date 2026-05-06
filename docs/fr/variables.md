# Les Variables : Vos Boîtes Numériques

## Qu'est-ce qu'une Variable ?

Imaginez que vous faites vos cartons pour déménager dans une nouvelle maison. Vous mettez vos livres dans un carton et écrivez "Livres" dessus. Plus tard, quand vous avez besoin d'un livre, vous ne cherchez pas partout — vous trouvez juste le carton avec l'étiquette "Livres".

En programmation, une **variable** est exactement cela : une boîte avec une étiquette où nous stockons des informations (des données) dans la mémoire de l'ordinateur. Nous donnons un nom à la boîte pour pouvoir retrouver et utiliser facilement ces informations plus tard !

Les variables nous permettent de stocker des choses comme le nom d'un utilisateur, le meilleur score dans un jeu, ou un mot de passe secret.

## Créer et Utiliser une Variable

Pour créer une nouvelle boîte (variable) et y mettre quelque chose, nous utilisons le mot-clé `SET` en pseudo code.

```pseudo
SET mon_nom TO "Arya"
PRINT mon_nom
```
*(Ceci imprimera : Arya)*

Décomposons ce qui vient de se passer :
1. `SET` indique à l'ordinateur que nous créons ou mettons à jour une variable.
2. `mon_nom` est l'étiquette que nous avons écrite sur notre boîte.
3. `TO` indique à l'ordinateur de mettre la donnée dans la boîte.
4. `"Arya"` est la donnée (une Chaîne de caractères) que nous avons stockée à l'intérieur.

La meilleure chose avec les variables, c'est qu'elles peuvent "varier" (changer) ! Vous pouvez changer ce qu'il y a dans la boîte plus tard :

```pseudo
SET plat_prefere TO "Pizza"
PRINT plat_prefere 
// Imprime : Pizza

// Plus tard, on change d'avis !
SET plat_prefere TO "Tacos"
PRINT plat_prefere 
// Imprime : Tacos
```

## Les Constantes

Parfois, vous voulez stocker des informations qui ne devraient **jamais** changer. Par exemple, votre date de naissance ou la valeur de Pi.

Pour les choses qui doivent rester constantes, nous pouvons spécifier que la boîte est verrouillée en utilisant `CONSTANT`.

```pseudo
CONSTANT annee_naissance TO 1995
PRINT annee_naissance
```

Si vous essayez de changer une `CONSTANT`, l'algorithme échouera car la donnée est protégée.

## Les Variables et les Mathématiques

Puisque les variables ne sont que des boîtes contenant des données, si elles contiennent des nombres, nous pouvons faire des mathématiques avec !

```pseudo
SET score TO 10
SET score TO score + 5 

PRINT score 
// Imprime : 15
```

Nous disons à l'ordinateur : "Prends ce qui est actuellement à l'intérieur de la boîte `score` (10), ajoute-y 5, et remets le nouveau résultat (15) dans la boîte `score` !"

## Résumé des Variables

Récapitulons ce que nous avons appris :
- Les **Variables** sont des boîtes étiquetées utilisées pour stocker des données.
- Utilisez `SET ... TO ...` pour mettre des données dans une variable.
- Les variables peuvent être mises à jour ou modifiées à tout moment dans votre algorithme.
- Utilisez `CONSTANT ... TO ...` si les données doivent être verrouillées et ne jamais changer.
- Vous pouvez faire des mathématiques avec des variables si elles contiennent des nombres.
