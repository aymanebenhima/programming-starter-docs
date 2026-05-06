<template><div><h1 id="les-conditions-prendre-des-decisions" tabindex="-1"><a class="header-anchor" href="#les-conditions-prendre-des-decisions"><span>Les Conditions : Prendre des Décisions</span></a></h1>
<h2 id="comment-les-ordinateurs-prennent-des-decisions" tabindex="-1"><a class="header-anchor" href="#comment-les-ordinateurs-prennent-des-decisions"><span>Comment les Ordinateurs Prennent des Décisions</span></a></h2>
<p>Dans la vie de tous les jours, vous prenez des décisions tout le temps en fonction de la situation.</p>
<ul>
<li><strong>Si (If)</strong> il pleut, <strong>alors</strong> je prendrai un parapluie.</li>
<li><strong>Sinon (Else)</strong>, je mettrai des lunettes de soleil.</li>
</ul>
<p>Nous pouvons apprendre aux ordinateurs à prendre ces mêmes types de décisions ! En code, nous appelons cela des <strong>instructions conditionnelles</strong> (conditional statements). Elles vérifient si une condition spécifique est vraie, puis effectuent une tâche en fonction du résultat.</p>
<h2 id="l-instruction-if" tabindex="-1"><a class="header-anchor" href="#l-instruction-if"><span>L'Instruction <code v-pre>if</code></span></a></h2>
<p>La façon la plus simple de prendre une décision en code est d'utiliser l'instruction <code v-pre>if</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> ilPleut <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>ilPleut<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Prends un parapluie !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Voici comment une instruction <code v-pre>if</code> est construite :</p>
<ol>
<li>Elle commence par le mot <code v-pre>if</code> (si).</li>
<li>Ensuite, il y a des parenthèses <code v-pre>()</code>. À l'intérieur va la <strong>condition</strong> (une question qui a une réponse oui/non ou vrai/faux).</li>
<li>Enfin, il y a des accolades <code v-pre>{}</code>. À l'intérieur des accolades se trouve le code qui s'exécutera <strong>uniquement si</strong> la condition est <code v-pre>true</code> (vraie).</li>
</ol>
<p>Si <code v-pre>ilPleut</code> était <code v-pre>false</code> (faux), l'ordinateur ignorerait simplement le code à l'intérieur des accolades et n'imprimerait rien !</p>
<h2 id="l-instruction-if-else" tabindex="-1"><a class="header-anchor" href="#l-instruction-if-else"><span>L'Instruction <code v-pre>if...else</code></span></a></h2>
<p>Que se passe-t-il si nous voulons que l'ordinateur fasse autre chose lorsque la condition est <code v-pre>false</code> ? Nous pouvons ajouter une instruction <code v-pre>else</code> (sinon) !</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> ilPleut <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>ilPleut<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Prends un parapluie !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Mets des lunettes de soleil !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maintenant, si la condition est <code v-pre>false</code>, l'ordinateur saute le premier bloc de code et exécute le code à l'intérieur du bloc <code v-pre>else</code> à la place. Dans ce cas, il imprimera : <code v-pre>Mets des lunettes de soleil !</code>.</p>
<h2 id="poser-des-questions-operateurs-de-comparaison" tabindex="-1"><a class="header-anchor" href="#poser-des-questions-operateurs-de-comparaison"><span>Poser des Questions : Opérateurs de Comparaison</span></a></h2>
<p>Généralement, nos conditions ne sont pas juste une simple variable <code v-pre>true</code> ou <code v-pre>false</code>. Nous voulons comparer des choses. Par exemple : &quot;Le score du joueur est-il supérieur à 100 ?&quot;</p>
<p>Pour poser ces questions, nous utilisons des <strong>opérateurs de comparaison</strong> :</p>
<ul>
<li>Moins que : <code v-pre>&lt;</code></li>
<li>Plus grand que : <code v-pre>&gt;</code></li>
<li>Inférieur ou égal à : <code v-pre>&lt;=</code></li>
<li>Supérieur ou égal à : <code v-pre>&gt;=</code></li>
<li>Est exactement égal à : <code v-pre>===</code></li>
<li>N'est PAS égal à : <code v-pre>!==</code></li>
</ul>
<p><em>Remarquez que &quot;est égal à&quot; utilise trois signes égal <code v-pre>===</code>. N'oubliez pas qu'un seul signe égal <code v-pre>=</code> n'est utilisé que pour mettre des données dans une boîte de variable !</em></p>
<p>Voyons cela en action :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> niveauDeFaim <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>niveauDeFaim <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Il est temps de manger !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Nous pourrons manger plus tard !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Puisque 8 est supérieur à 7, ce code imprimera : <code v-pre>Il est temps de manger !</code>.</p>
<h2 id="decisions-multiples-else-if" tabindex="-1"><a class="header-anchor" href="#decisions-multiples-else-if"><span>Décisions Multiples : <code v-pre>else if</code></span></a></h2>
<p>Parfois, la vie n'est pas juste A ou B. Il peut y avoir un C, D et E !</p>
<p>Si nous avons plus de deux résultats possibles, nous pouvons utiliser les instructions <code v-pre>else if</code> (sinon si) pour enchaîner les décisions.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> feuDeSignalisation <span class="token operator">=</span> <span class="token string">'jaune'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>feuDeSignalisation <span class="token operator">===</span> <span class="token string">'rouge'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Arrêtez-vous !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>feuDeSignalisation <span class="token operator">===</span> <span class="token string">'jaune'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Ralentissez !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>feuDeSignalisation <span class="token operator">===</span> <span class="token string">'vert'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Allez-y !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Attention, feu inconnu !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>L'ordinateur lit de haut en bas. Il vérifie la première condition (<code v-pre>'rouge'</code>). Puisque c'est faux, il passe à la suivante (<code v-pre>'jaune'</code>). Puisque c'est vrai, il exécute ce bloc de code et ignore complètement le reste !</p>
<h2 id="verifier-plusieurs-choses-a-la-fois-operateurs-logiques" tabindex="-1"><a class="header-anchor" href="#verifier-plusieurs-choses-a-la-fois-operateurs-logiques"><span>Vérifier Plusieurs Choses à la Fois (Opérateurs Logiques)</span></a></h2>
<p>Et si vous vouliez aller au parc, mais <strong>seulement si</strong> il fait beau <strong>ET</strong> que c'est le week-end ?</p>
<p>Nous pouvons utiliser des <strong>opérateurs logiques</strong> pour combiner des conditions :</p>
<ul>
<li><strong>ET (AND)</strong> (<code v-pre>&amp;&amp;</code>) : Les deux conditions doivent être vraies.</li>
<li><strong>OU (OR)</strong> (<code v-pre>||</code>) : Une seule des conditions doit être vraie.</li>
</ul>
<p>Utilisation de ET (<code v-pre>&amp;&amp;</code>) :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> faitBeau <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> estWeekend <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>faitBeau <span class="token operator">&amp;&amp;</span> estWeekend<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Allons au parc !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Utilisation de OU (<code v-pre>||</code>) :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> jour <span class="token operator">=</span> <span class="token string">'Samedi'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>jour <span class="token operator">===</span> <span class="token string">'Samedi'</span> <span class="token operator">||</span> jour <span class="token operator">===</span> <span class="token string">'Dimanche'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Profitez du week-end !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resume" tabindex="-1"><a class="header-anchor" href="#resume"><span>Résumé</span></a></h2>
<p>Récapitulons les conditions :</p>
<ul>
<li><strong><code v-pre>if</code></strong> vérifie une condition et exécute un bloc de code si la condition est <code v-pre>true</code> (vraie).</li>
<li><strong><code v-pre>else</code></strong> donne un plan de secours par défaut si la condition était <code v-pre>false</code> (fausse).</li>
<li><strong><code v-pre>else if</code></strong> vous permet de vérifier plusieurs conditions différentes à la suite.</li>
<li><strong>Les opérateurs de comparaison</strong> (comme <code v-pre>&gt;</code>, <code v-pre>&lt;</code>, <code v-pre>===</code>) vous aident à comparer des valeurs.</li>
<li><strong>Les opérateurs logiques</strong> (<code v-pre>&amp;&amp;</code> pour ET, <code v-pre>||</code> pour OU) vous permettent de combiner plusieurs conditions ensemble.</li>
</ul>
</div></template>


