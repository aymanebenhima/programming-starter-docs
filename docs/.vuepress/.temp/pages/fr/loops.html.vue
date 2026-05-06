<template><div><h1 id="les-boucles-repeter-des-taches-automatiquement" tabindex="-1"><a class="header-anchor" href="#les-boucles-repeter-des-taches-automatiquement"><span>Les Boucles : Répéter des Tâches Automatiquement</span></a></h1>
<h2 id="pourquoi-avons-nous-besoin-de-boucles" tabindex="-1"><a class="header-anchor" href="#pourquoi-avons-nous-besoin-de-boucles"><span>Pourquoi Avons-Nous Besoin de Boucles ?</span></a></h2>
<p>Imaginez qu'on vous demande d'écrire la phrase &quot;Je ne bavarderai pas en classe&quot; sur un tableau noir 100 fois. Cela prendrait beaucoup de temps et vous ferait mal à la main !</p>
<p>En programmation, nous détestons faire la même chose encore et encore manuellement. Chaque fois qu'un processus doit être répété, nous utilisons un outil appelé une <strong>boucle</strong> (loop).</p>
<p>Une boucle est simplement un ensemble d'instructions que l'ordinateur répète automatiquement jusqu'à ce qu'une condition d'arrêt spécifique soit remplie. Les boucles rendent nos algorithmes efficaces et nous évitent de taper beaucoup de texte !</p>
<h2 id="la-boucle-for" tabindex="-1"><a class="header-anchor" href="#la-boucle-for"><span>La Boucle <code v-pre>FOR</code></span></a></h2>
<p>L'une des façons les plus courantes de faire répéter une tâche à un ordinateur est d'utiliser une <strong>boucle FOR</strong>. Une boucle FOR est parfaite lorsque vous savez exactement <em>combien de fois</em> vous voulez répéter quelque chose.</p>
<p>Voici à quoi ressemble la syntaxe en pseudo code :</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">FOR compteur FROM 1 TO 4 DO</span>
<span class="line">  PRINT compteur</span>
<span class="line">END FOR</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si vous exécutez cet algorithme, l'ordinateur imprimera :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="decortiquer-la-boucle-for" tabindex="-1"><a class="header-anchor" href="#decortiquer-la-boucle-for"><span>Décortiquer la Boucle <code v-pre>FOR</code></span></a></h3>
<p>Regardons de plus près comment cela fonctionne :</p>
<ol>
<li><code v-pre>FOR compteur FROM 1</code> : Nous créons une variable temporaire nommée <code v-pre>compteur</code> et la démarrons à 1.</li>
<li><code v-pre>TO 4</code> : Nous disons à la boucle de continuer à se répéter jusqu'à ce que le compteur atteigne 4.</li>
<li><code v-pre>DO</code> : Cela indique à l'ordinateur d'exécuter les instructions à l'intérieur de la boucle.</li>
<li>Après chaque répétition, l'ordinateur augmente automatiquement le compteur de 1.</li>
<li><code v-pre>END FOR</code> : Ceci marque la fin du bloc de la boucle.</li>
</ol>
<h3 id="un-exemple-concret" tabindex="-1"><a class="header-anchor" href="#un-exemple-concret"><span>Un Exemple Concret</span></a></h3>
<p>Utilisons une boucle <code v-pre>FOR</code> pour faire le compte à rebours des jours jusqu'au week-end :</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">FOR jour FROM 1 TO 5 DO</span>
<span class="line">  PRINT &quot;C'est le jour &quot; + jour + &quot; de la semaine de travail.&quot;</span>
<span class="line">END FOR</span>
<span class="line"></span>
<span class="line">PRINT &quot;Hourra ! C'est le week-end !&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Le résultat sera :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">C'est le jour 1 de la semaine de travail.</span>
<span class="line">C'est le jour 2 de la semaine de travail.</span>
<span class="line">C'est le jour 3 de la semaine de travail.</span>
<span class="line">C'est le jour 4 de la semaine de travail.</span>
<span class="line">C'est le jour 5 de la semaine de travail.</span>
<span class="line">Hourra ! C'est le week-end !</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="la-boucle-while" tabindex="-1"><a class="header-anchor" href="#la-boucle-while"><span>La Boucle <code v-pre>WHILE</code></span></a></h2>
<p>Parfois, vous ne savez pas exactement combien de fois une boucle doit s'exécuter. Vous voulez juste qu'elle continue <strong>tant que</strong> (while) une certaine condition est vraie. Pour cela, nous utilisons une <strong>boucle WHILE</strong>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET niveau_faim TO 5</span>
<span class="line"></span>
<span class="line">WHILE niveau_faim &gt; 0 DO</span>
<span class="line">  PRINT &quot;Manger une part de pizza...&quot;</span>
<span class="line">  SET niveau_faim TO niveau_faim - 1</span>
<span class="line">END WHILE</span>
<span class="line"></span>
<span class="line">PRINT &quot;Je suis rassasié !&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cette boucle vérifiera la condition (<code v-pre>niveau_faim &gt; 0</code>). Si c'est vrai, elle mange une part de pizza et diminue le niveau de faim. Elle répétera cela 5 fois jusqu'à ce que le niveau de faim atteigne 0, moment auquel la boucle s'arrête et imprime &quot;Je suis rassasié !&quot;.</p>
<p>Les boucles sont des outils incroyablement puissants que vous utiliserez tout le temps lors de la création d'algorithmes !</p>
</div></template>


