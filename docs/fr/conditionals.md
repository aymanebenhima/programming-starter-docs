# Les Conditions : Prendre des Décisions

## Comment les Ordinateurs Prennent des Décisions

Dans la vie de tous les jours, vous prenez des décisions tout le temps en fonction de la situation.
- **Si** il pleut, **alors** je prendrai un parapluie.
- **Sinon**, je mettrai des lunettes de soleil.

Nous pouvons apprendre aux ordinateurs à prendre ces mêmes types de décisions ! En pseudo code, nous appelons cela des **instructions conditionnelles** (conditional statements). Elles vérifient si une condition spécifique est vraie, puis effectuent une tâche en fonction du résultat.

## L'Instruction `IF ... THEN`

La façon la plus simple de prendre une décision est d'utiliser une instruction `IF`.

```pseudo
SET il_pleut TO TRUE

IF il_pleut EQUALS TRUE THEN
  PRINT "Prends un parapluie !"
END IF
```

Voici comment c'est construit :
1. Cela commence par le mot `IF` (SI).
2. Ensuite vient la **condition** (`il_pleut EQUALS TRUE`). C'est une question qui a une réponse oui/non.
3. Puis vient le mot `THEN` (ALORS). Les instructions à l'intérieur s'exécuteront **uniquement si** la condition est vraie.
4. Nous terminons le bloc avec `END IF` (FIN SI) pour que l'ordinateur sache où se termine la décision.

Si `il_pleut` était `FALSE`, l'ordinateur ignorerait simplement le code à l'intérieur et n'imprimerait rien !

## L'Instruction `IF ... THEN ... ELSE`

Que se passe-t-il si nous voulons que l'ordinateur fasse autre chose lorsque la condition est fausse ? Nous pouvons ajouter une instruction `ELSE` (SINON) !

```pseudo
SET il_pleut TO FALSE

IF il_pleut EQUALS TRUE THEN
  PRINT "Prends un parapluie !"
ELSE
  PRINT "Mets des lunettes de soleil !"
END IF
```

Maintenant, si la condition est fausse, l'ordinateur saute le premier bloc et exécute le code à l'intérieur du bloc `ELSE` à la place. Dans ce cas, il imprimera : `Mets des lunettes de soleil !`.

## Poser des Questions : Opérateurs de Comparaison

Généralement, nos conditions ne sont pas juste une simple variable VRAI ou FAUX. Nous voulons comparer des choses. Par exemple : "Le score du joueur est-il supérieur à 100 ?"

Pour poser ces questions, nous utilisons des **opérateurs de comparaison** :
- `<` : Moins que
- `>` : Plus grand que
- `<=` : Inférieur ou égal à
- `>=` : Supérieur ou égal à
- `EQUALS` (ou `==`) : Est exactement égal à
- `NOT EQUALS` (ou `!=`) : N'est pas égal à

Voyons cela en action :

```pseudo
SET niveau_faim TO 8

IF niveau_faim > 7 THEN
  PRINT "Il est temps de manger !"
ELSE
  PRINT "Nous pourrons manger plus tard !"
END IF
```
Puisque 8 est supérieur à 7, ce code imprimera : `Il est temps de manger !`.

## Décisions Multiples : `ELSE IF`

Parfois, la vie n'est pas juste A ou B. Il peut y avoir un C, D et E !

Si nous avons plus de deux résultats possibles, nous pouvons enchaîner les décisions en utilisant `ELSE IF` (SINON SI).

```pseudo
SET feu_signalisation TO "jaune"

IF feu_signalisation EQUALS "rouge" THEN
  PRINT "Arrêtez-vous !"
ELSE IF feu_signalisation EQUALS "jaune" THEN
  PRINT "Ralentissez !"
ELSE IF feu_signalisation EQUALS "vert" THEN
  PRINT "Allez-y !"
ELSE
  PRINT "Attention, feu inconnu !"
END IF
```

L'ordinateur lit de haut en bas. Il vérifie la première condition (`"rouge"`). Puisque c'est faux, il passe à la suivante (`"jaune"`). Puisque c'est vrai, il exécute ce bloc de code et ignore complètement le reste !

## Vérifier Plusieurs Choses à la Fois (Opérateurs Logiques)

Et si vous vouliez aller au parc, mais **seulement si** il fait beau **ET** que c'est le week-end ?

Nous pouvons utiliser des **opérateurs logiques** pour combiner des conditions :
- **AND (ET)** : Les deux conditions doivent être vraies.
- **OR (OU)** : Une seule des conditions doit être vraie.

Utilisation de `AND` :
```pseudo
SET fait_beau TO TRUE
SET est_weekend TO TRUE

IF fait_beau EQUALS TRUE AND est_weekend EQUALS TRUE THEN
  PRINT "Allons au parc !"
END IF
```

Utilisation de `OR` :
```pseudo
SET jour TO "Samedi"

IF jour EQUALS "Samedi" OR jour EQUALS "Dimanche" THEN
  PRINT "Profitez du week-end !"
END IF
```

## Résumé

Récapitulons les conditions :
- **`IF ... THEN`** vérifie une condition et exécute un bloc de code si la condition est vraie.
- **`ELSE`** donne un plan de secours par défaut si la condition était fausse.
- **`ELSE IF`** vous permet de vérifier plusieurs conditions différentes à la suite.
- **Les opérateurs de comparaison** (comme `>`, `<`) vous aident à comparer des valeurs.
- **Les opérateurs logiques** (`AND`, `OR`) vous permettent de combiner plusieurs conditions ensemble.
