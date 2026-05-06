# Les Boucles : Répéter des Tâches Automatiquement

## Pourquoi Avons-Nous Besoin de Boucles ?

Imaginez qu'on vous demande d'écrire la phrase "Je ne bavarderai pas en classe" sur un tableau noir 100 fois. Cela prendrait beaucoup de temps et vous ferait mal à la main !

En programmation, nous détestons faire la même chose encore et encore manuellement. Chaque fois qu'un processus doit être répété, nous utilisons un outil appelé une **boucle** (loop).

Une boucle est simplement un ensemble d'instructions que l'ordinateur répète automatiquement jusqu'à ce qu'une condition d'arrêt spécifique soit remplie. Les boucles rendent nos algorithmes efficaces et nous évitent de taper beaucoup de texte !

## La Boucle `FOR`

L'une des façons les plus courantes de faire répéter une tâche à un ordinateur est d'utiliser une **boucle FOR**. Une boucle FOR est parfaite lorsque vous savez exactement *combien de fois* vous voulez répéter quelque chose.

Voici à quoi ressemble la syntaxe en pseudo code :

```pseudo
FOR compteur FROM 1 TO 4 DO
  PRINT compteur
END FOR
```

Si vous exécutez cet algorithme, l'ordinateur imprimera :
```text
1
2
3
4
```

### Décortiquer la Boucle `FOR`

Regardons de plus près comment cela fonctionne :
1. `FOR compteur FROM 1` : Nous créons une variable temporaire nommée `compteur` et la démarrons à 1.
2. `TO 4` : Nous disons à la boucle de continuer à se répéter jusqu'à ce que le compteur atteigne 4.
3. `DO` : Cela indique à l'ordinateur d'exécuter les instructions à l'intérieur de la boucle.
4. Après chaque répétition, l'ordinateur augmente automatiquement le compteur de 1.
5. `END FOR` : Ceci marque la fin du bloc de la boucle.

### Un Exemple Concret

Utilisons une boucle `FOR` pour faire le compte à rebours des jours jusqu'au week-end :

```pseudo
FOR jour FROM 1 TO 5 DO
  PRINT "C'est le jour " + jour + " de la semaine de travail."
END FOR

PRINT "Hourra ! C'est le week-end !"
```

Le résultat sera :
```text
C'est le jour 1 de la semaine de travail.
C'est le jour 2 de la semaine de travail.
C'est le jour 3 de la semaine de travail.
C'est le jour 4 de la semaine de travail.
C'est le jour 5 de la semaine de travail.
Hourra ! C'est le week-end !
```

## La Boucle `WHILE`

Parfois, vous ne savez pas exactement combien de fois une boucle doit s'exécuter. Vous voulez juste qu'elle continue **tant que** (while) une certaine condition est vraie. Pour cela, nous utilisons une **boucle WHILE**.

```pseudo
SET niveau_faim TO 5

WHILE niveau_faim > 0 DO
  PRINT "Manger une part de pizza..."
  SET niveau_faim TO niveau_faim - 1
END WHILE

PRINT "Je suis rassasié !"
```

Cette boucle vérifiera la condition (`niveau_faim > 0`). Si c'est vrai, elle mange une part de pizza et diminue le niveau de faim. Elle répétera cela 5 fois jusqu'à ce que le niveau de faim atteigne 0, moment auquel la boucle s'arrête et imprime "Je suis rassasié !".

Les boucles sont des outils incroyablement puissants que vous utiliserez tout le temps lors de la création d'algorithmes !
