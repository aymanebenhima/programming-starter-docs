<template><div><h1 id="les-boucles-repeter-des-taches-automatiquement" tabindex="-1"><a class="header-anchor" href="#les-boucles-repeter-des-taches-automatiquement"><span>Les Boucles : Répéter des Tâches Automatiquement</span></a></h1>
<h2 id="pourquoi-avons-nous-besoin-de-boucles" tabindex="-1"><a class="header-anchor" href="#pourquoi-avons-nous-besoin-de-boucles"><span>Pourquoi Avons-Nous Besoin de Boucles ?</span></a></h2>
<p>Imaginez qu'on vous demande d'écrire la phrase &quot;Je ne bavarderai pas en classe&quot; sur un tableau noir 100 fois. Cela prendrait beaucoup de temps et vous ferait mal à la main !</p>
<p>En programmation, nous détestons faire la même chose encore et encore manuellement. Chaque fois qu'un processus doit être répété, nous utilisons un outil appelé une <strong>boucle</strong> (loop).</p>
<p>Une boucle est simplement un ensemble d'instructions que l'ordinateur répète automatiquement jusqu'à ce qu'une condition d'arrêt spécifique soit remplie. Les boucles rendent notre code efficace et nous évitent de taper beaucoup de texte !</p>
<h2 id="la-boucle-for" tabindex="-1"><a class="header-anchor" href="#la-boucle-for"><span>La Boucle <code v-pre>for</code></span></a></h2>
<p>L'une des façons les plus courantes de faire répéter une tâche à un ordinateur est d'utiliser une <strong>boucle <code v-pre>for</code></strong> (pour).</p>
<p>Une boucle <code v-pre>for</code> a besoin de trois éléments d'information pour fonctionner :</p>
<ol>
<li><strong>Où commencer</strong> (Initialisation)</li>
<li><strong>Quand s'arrêter</strong> (Condition d'arrêt)</li>
<li><strong>Comment compter</strong> (Étape d'itération)</li>
</ol>
<p>Ces trois éléments d'information vont à l'intérieur de parenthèses <code v-pre>()</code> et sont séparés par des points-virgules <code v-pre>;</code>.</p>
<p>Voici à quoi ressemble la syntaxe :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> compteur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> compteur <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> compteur<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compteur<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si vous exécutez ce code, l'ordinateur imprimera :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">0</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="decortiquer-la-boucle-for" tabindex="-1"><a class="header-anchor" href="#decortiquer-la-boucle-for"><span>Décortiquer la Boucle <code v-pre>for</code></span></a></h2>
<p>Regardons de plus près les trois parties à l'intérieur des parenthèses de notre exemple :</p>
<ol>
<li>
<p><code v-pre>let compteur = 0;</code><br>
<strong>Où commencer :</strong> Nous créons une variable nommée <code v-pre>compteur</code> et la réglons sur <code v-pre>0</code>. C'est là que notre boucle commence.</p>
</li>
<li>
<p><code v-pre>compteur &lt; 4;</code><br>
<strong>Quand s'arrêter :</strong> C'est une condition, tout comme dans une instruction <code v-pre>if</code> ! La boucle continuera de s'exécuter <strong>tant que</strong> le compteur est inférieur à 4. Si le compteur atteint 4, la boucle s'arrête immédiatement.</p>
</li>
<li>
<p><code v-pre>compteur++</code><br>
<strong>Comment compter :</strong> Une fois chaque boucle terminée, nous devons augmenter notre compteur pour que la boucle ne s'exécute pas indéfiniment. <code v-pre>compteur++</code> ajoute simplement <code v-pre>1</code> au compteur après chaque tour.</p>
</li>
</ol>
<p>À l'intérieur des accolades <code v-pre>{}</code> se trouve le code réel que nous voulons que l'ordinateur répète. Dans ce cas, nous lui avons dit de faire un <code v-pre>console.log(compteur)</code>, c'est pourquoi il imprime les nombres 0, 1, 2, et 3 !</p>
<h2 id="un-exemple-concret" tabindex="-1"><a class="header-anchor" href="#un-exemple-concret"><span>Un Exemple Concret</span></a></h2>
<p>Utilisons une boucle <code v-pre>for</code> pour faire le compte à rebours des jours jusqu'au week-end :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> jour <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> jour <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> jour<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">C'est le jour </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>jour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> de la semaine de travail.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hourra ! C\'est le week-end !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Le résultat sera :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">C'est le jour 1 de la semaine de travail.</span>
<span class="line">C'est le jour 2 de la semaine de travail.</span>
<span class="line">C'est le jour 3 de la semaine de travail.</span>
<span class="line">C'est le jour 4 de la semaine de travail.</span>
<span class="line">C'est le jour 5 de la semaine de travail.</span>
<span class="line">Hourra ! C'est le week-end !</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Les boucles sont des outils incroyablement puissants que vous utiliserez tout le temps au fur et à mesure que vous apprendrez à coder !</p>
</div></template>


