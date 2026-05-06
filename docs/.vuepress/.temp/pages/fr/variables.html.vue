<template><div><h1 id="les-variables-vos-boites-numeriques" tabindex="-1"><a class="header-anchor" href="#les-variables-vos-boites-numeriques"><span>Les Variables : Vos Boîtes Numériques</span></a></h1>
<h2 id="qu-est-ce-qu-une-variable" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-qu-une-variable"><span>Qu'est-ce qu'une Variable ?</span></a></h2>
<p>Imaginez que vous faites vos cartons pour déménager dans une nouvelle maison. Vous mettez vos livres dans un carton et écrivez &quot;Livres&quot; dessus. Plus tard, quand vous avez besoin d'un livre, vous ne cherchez pas partout — vous trouvez juste le carton avec l'étiquette &quot;Livres&quot;.</p>
<p>En programmation, une <strong>variable</strong> est exactement cela : une boîte avec une étiquette où nous stockons des informations (des données) dans la mémoire de l'ordinateur. Nous donnons un nom à la boîte pour pouvoir retrouver et utiliser facilement ces informations plus tard !</p>
<p>Les variables nous permettent de stocker des choses comme le nom d'un utilisateur, le meilleur score dans un jeu, ou un mot de passe secret.</p>
<h2 id="creer-et-utiliser-une-variable" tabindex="-1"><a class="header-anchor" href="#creer-et-utiliser-une-variable"><span>Créer et Utiliser une Variable</span></a></h2>
<p>Pour créer une nouvelle boîte (variable) et y mettre quelque chose, nous utilisons le mot-clé <code v-pre>SET</code> en pseudo code.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET mon_nom TO &quot;Arya&quot;</span>
<span class="line">PRINT mon_nom</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><em>(Ceci imprimera : Arya)</em></p>
<p>Décomposons ce qui vient de se passer :</p>
<ol>
<li><code v-pre>SET</code> indique à l'ordinateur que nous créons ou mettons à jour une variable.</li>
<li><code v-pre>mon_nom</code> est l'étiquette que nous avons écrite sur notre boîte.</li>
<li><code v-pre>TO</code> indique à l'ordinateur de mettre la donnée dans la boîte.</li>
<li><code v-pre>&quot;Arya&quot;</code> est la donnée (une Chaîne de caractères) que nous avons stockée à l'intérieur.</li>
</ol>
<p>La meilleure chose avec les variables, c'est qu'elles peuvent &quot;varier&quot; (changer) ! Vous pouvez changer ce qu'il y a dans la boîte plus tard :</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET plat_prefere TO &quot;Pizza&quot;</span>
<span class="line">PRINT plat_prefere </span>
<span class="line">// Imprime : Pizza</span>
<span class="line"></span>
<span class="line">// Plus tard, on change d'avis !</span>
<span class="line">SET plat_prefere TO &quot;Tacos&quot;</span>
<span class="line">PRINT plat_prefere </span>
<span class="line">// Imprime : Tacos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="les-constantes" tabindex="-1"><a class="header-anchor" href="#les-constantes"><span>Les Constantes</span></a></h2>
<p>Parfois, vous voulez stocker des informations qui ne devraient <strong>jamais</strong> changer. Par exemple, votre date de naissance ou la valeur de Pi.</p>
<p>Pour les choses qui doivent rester constantes, nous pouvons spécifier que la boîte est verrouillée en utilisant <code v-pre>CONSTANT</code>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">CONSTANT annee_naissance TO 1995</span>
<span class="line">PRINT annee_naissance</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Si vous essayez de changer une <code v-pre>CONSTANT</code>, l'algorithme échouera car la donnée est protégée.</p>
<h2 id="les-variables-et-les-mathematiques" tabindex="-1"><a class="header-anchor" href="#les-variables-et-les-mathematiques"><span>Les Variables et les Mathématiques</span></a></h2>
<p>Puisque les variables ne sont que des boîtes contenant des données, si elles contiennent des nombres, nous pouvons faire des mathématiques avec !</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET score TO 10</span>
<span class="line">SET score TO score + 5 </span>
<span class="line"></span>
<span class="line">PRINT score </span>
<span class="line">// Imprime : 15</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nous disons à l'ordinateur : &quot;Prends ce qui est actuellement à l'intérieur de la boîte <code v-pre>score</code> (10), ajoute-y 5, et remets le nouveau résultat (15) dans la boîte <code v-pre>score</code> !&quot;</p>
<h2 id="resume-des-variables" tabindex="-1"><a class="header-anchor" href="#resume-des-variables"><span>Résumé des Variables</span></a></h2>
<p>Récapitulons ce que nous avons appris :</p>
<ul>
<li>Les <strong>Variables</strong> sont des boîtes étiquetées utilisées pour stocker des données.</li>
<li>Utilisez <code v-pre>SET ... TO ...</code> pour mettre des données dans une variable.</li>
<li>Les variables peuvent être mises à jour ou modifiées à tout moment dans votre algorithme.</li>
<li>Utilisez <code v-pre>CONSTANT ... TO ...</code> si les données doivent être verrouillées et ne jamais changer.</li>
<li>Vous pouvez faire des mathématiques avec des variables si elles contiennent des nombres.</li>
</ul>
</div></template>


