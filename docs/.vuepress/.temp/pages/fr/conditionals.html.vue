<template><div><h1 id="les-conditions-prendre-des-decisions" tabindex="-1"><a class="header-anchor" href="#les-conditions-prendre-des-decisions"><span>Les Conditions : Prendre des Décisions</span></a></h1>
<h2 id="comment-les-ordinateurs-prennent-des-decisions" tabindex="-1"><a class="header-anchor" href="#comment-les-ordinateurs-prennent-des-decisions"><span>Comment les Ordinateurs Prennent des Décisions</span></a></h2>
<p>Dans la vie de tous les jours, vous prenez des décisions tout le temps en fonction de la situation.</p>
<ul>
<li><strong>Si</strong> il pleut, <strong>alors</strong> je prendrai un parapluie.</li>
<li><strong>Sinon</strong>, je mettrai des lunettes de soleil.</li>
</ul>
<p>Nous pouvons apprendre aux ordinateurs à prendre ces mêmes types de décisions ! En pseudo code, nous appelons cela des <strong>instructions conditionnelles</strong> (conditional statements). Elles vérifient si une condition spécifique est vraie, puis effectuent une tâche en fonction du résultat.</p>
<h2 id="l-instruction-if-then" tabindex="-1"><a class="header-anchor" href="#l-instruction-if-then"><span>L'Instruction <code v-pre>IF ... THEN</code></span></a></h2>
<p>La façon la plus simple de prendre une décision est d'utiliser une instruction <code v-pre>IF</code>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET il_pleut TO TRUE</span>
<span class="line"></span>
<span class="line">IF il_pleut EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;Prends un parapluie !&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Voici comment c'est construit :</p>
<ol>
<li>Cela commence par le mot <code v-pre>IF</code> (SI).</li>
<li>Ensuite vient la <strong>condition</strong> (<code v-pre>il_pleut EQUALS TRUE</code>). C'est une question qui a une réponse oui/non.</li>
<li>Puis vient le mot <code v-pre>THEN</code> (ALORS). Les instructions à l'intérieur s'exécuteront <strong>uniquement si</strong> la condition est vraie.</li>
<li>Nous terminons le bloc avec <code v-pre>END IF</code> (FIN SI) pour que l'ordinateur sache où se termine la décision.</li>
</ol>
<p>Si <code v-pre>il_pleut</code> était <code v-pre>FALSE</code>, l'ordinateur ignorerait simplement le code à l'intérieur et n'imprimerait rien !</p>
<h2 id="l-instruction-if-then-else" tabindex="-1"><a class="header-anchor" href="#l-instruction-if-then-else"><span>L'Instruction <code v-pre>IF ... THEN ... ELSE</code></span></a></h2>
<p>Que se passe-t-il si nous voulons que l'ordinateur fasse autre chose lorsque la condition est fausse ? Nous pouvons ajouter une instruction <code v-pre>ELSE</code> (SINON) !</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET il_pleut TO FALSE</span>
<span class="line"></span>
<span class="line">IF il_pleut EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;Prends un parapluie !&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;Mets des lunettes de soleil !&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maintenant, si la condition est fausse, l'ordinateur saute le premier bloc et exécute le code à l'intérieur du bloc <code v-pre>ELSE</code> à la place. Dans ce cas, il imprimera : <code v-pre>Mets des lunettes de soleil !</code>.</p>
<h2 id="poser-des-questions-operateurs-de-comparaison" tabindex="-1"><a class="header-anchor" href="#poser-des-questions-operateurs-de-comparaison"><span>Poser des Questions : Opérateurs de Comparaison</span></a></h2>
<p>Généralement, nos conditions ne sont pas juste une simple variable VRAI ou FAUX. Nous voulons comparer des choses. Par exemple : &quot;Le score du joueur est-il supérieur à 100 ?&quot;</p>
<p>Pour poser ces questions, nous utilisons des <strong>opérateurs de comparaison</strong> :</p>
<ul>
<li><code v-pre>&lt;</code> : Moins que</li>
<li><code v-pre>&gt;</code> : Plus grand que</li>
<li><code v-pre>&lt;=</code> : Inférieur ou égal à</li>
<li><code v-pre>&gt;=</code> : Supérieur ou égal à</li>
<li><code v-pre>EQUALS</code> (ou <code v-pre>==</code>) : Est exactement égal à</li>
<li><code v-pre>NOT EQUALS</code> (ou <code v-pre>!=</code>) : N'est pas égal à</li>
</ul>
<p>Voyons cela en action :</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET niveau_faim TO 8</span>
<span class="line"></span>
<span class="line">IF niveau_faim &gt; 7 THEN</span>
<span class="line">  PRINT &quot;Il est temps de manger !&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;Nous pourrons manger plus tard !&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Puisque 8 est supérieur à 7, ce code imprimera : <code v-pre>Il est temps de manger !</code>.</p>
<h2 id="decisions-multiples-else-if" tabindex="-1"><a class="header-anchor" href="#decisions-multiples-else-if"><span>Décisions Multiples : <code v-pre>ELSE IF</code></span></a></h2>
<p>Parfois, la vie n'est pas juste A ou B. Il peut y avoir un C, D et E !</p>
<p>Si nous avons plus de deux résultats possibles, nous pouvons enchaîner les décisions en utilisant <code v-pre>ELSE IF</code> (SINON SI).</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET feu_signalisation TO &quot;jaune&quot;</span>
<span class="line"></span>
<span class="line">IF feu_signalisation EQUALS &quot;rouge&quot; THEN</span>
<span class="line">  PRINT &quot;Arrêtez-vous !&quot;</span>
<span class="line">ELSE IF feu_signalisation EQUALS &quot;jaune&quot; THEN</span>
<span class="line">  PRINT &quot;Ralentissez !&quot;</span>
<span class="line">ELSE IF feu_signalisation EQUALS &quot;vert&quot; THEN</span>
<span class="line">  PRINT &quot;Allez-y !&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;Attention, feu inconnu !&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>L'ordinateur lit de haut en bas. Il vérifie la première condition (<code v-pre>&quot;rouge&quot;</code>). Puisque c'est faux, il passe à la suivante (<code v-pre>&quot;jaune&quot;</code>). Puisque c'est vrai, il exécute ce bloc de code et ignore complètement le reste !</p>
<h2 id="verifier-plusieurs-choses-a-la-fois-operateurs-logiques" tabindex="-1"><a class="header-anchor" href="#verifier-plusieurs-choses-a-la-fois-operateurs-logiques"><span>Vérifier Plusieurs Choses à la Fois (Opérateurs Logiques)</span></a></h2>
<p>Et si vous vouliez aller au parc, mais <strong>seulement si</strong> il fait beau <strong>ET</strong> que c'est le week-end ?</p>
<p>Nous pouvons utiliser des <strong>opérateurs logiques</strong> pour combiner des conditions :</p>
<ul>
<li><strong>AND (ET)</strong> : Les deux conditions doivent être vraies.</li>
<li><strong>OR (OU)</strong> : Une seule des conditions doit être vraie.</li>
</ul>
<p>Utilisation de <code v-pre>AND</code> :</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET fait_beau TO TRUE</span>
<span class="line">SET est_weekend TO TRUE</span>
<span class="line"></span>
<span class="line">IF fait_beau EQUALS TRUE AND est_weekend EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;Allons au parc !&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Utilisation de <code v-pre>OR</code> :</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET jour TO &quot;Samedi&quot;</span>
<span class="line"></span>
<span class="line">IF jour EQUALS &quot;Samedi&quot; OR jour EQUALS &quot;Dimanche&quot; THEN</span>
<span class="line">  PRINT &quot;Profitez du week-end !&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resume" tabindex="-1"><a class="header-anchor" href="#resume"><span>Résumé</span></a></h2>
<p>Récapitulons les conditions :</p>
<ul>
<li><strong><code v-pre>IF ... THEN</code></strong> vérifie une condition et exécute un bloc de code si la condition est vraie.</li>
<li><strong><code v-pre>ELSE</code></strong> donne un plan de secours par défaut si la condition était fausse.</li>
<li><strong><code v-pre>ELSE IF</code></strong> vous permet de vérifier plusieurs conditions différentes à la suite.</li>
<li><strong>Les opérateurs de comparaison</strong> (comme <code v-pre>&gt;</code>, <code v-pre>&lt;</code>) vous aident à comparer des valeurs.</li>
<li><strong>Les opérateurs logiques</strong> (<code v-pre>AND</code>, <code v-pre>OR</code>) vous permettent de combiner plusieurs conditions ensemble.</li>
</ul>
</div></template>


