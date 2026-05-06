<template><div><h1 id="les-variables-vos-boites-numeriques" tabindex="-1"><a class="header-anchor" href="#les-variables-vos-boites-numeriques"><span>Les Variables : Vos Boîtes Numériques</span></a></h1>
<h2 id="qu-est-ce-qu-une-variable" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-qu-une-variable"><span>Qu'est-ce qu'une Variable ?</span></a></h2>
<p>Imaginez que vous faites vos cartons pour déménager dans une nouvelle maison. Vous mettez vos livres dans un carton et écrivez &quot;Livres&quot; dessus. Plus tard, quand vous avez besoin d'un livre, vous ne cherchez pas partout — vous trouvez juste le carton avec l'étiquette &quot;Livres&quot;.</p>
<p>En programmation, une <strong>variable</strong> est exactement cela : une boîte avec une étiquette où nous stockons des informations (des données) dans la mémoire de l'ordinateur. Nous donnons un nom à la boîte pour pouvoir retrouver et utiliser facilement ces informations plus tard !</p>
<p>Les variables nous permettent de stocker des choses comme le nom d'un utilisateur, le meilleur score dans un jeu, ou un mot de passe secret.</p>
<h2 id="creer-une-variable-avec-let" tabindex="-1"><a class="header-anchor" href="#creer-une-variable-avec-let"><span>Créer une Variable avec <code v-pre>let</code></span></a></h2>
<p>Pour créer une nouvelle boîte (variable), nous utilisons un mot spécial : <code v-pre>let</code>. Cela dit à l'ordinateur : &quot;Hé, créons une nouvelle variable !&quot;</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> monNom <span class="token operator">=</span> <span class="token string">'Arya'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>monNom<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ceci imprimera : Arya</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Décomposons ce qui vient de se passer :</p>
<ol>
<li><code v-pre>let</code> crée la variable.</li>
<li><code v-pre>monNom</code> est l'étiquette que nous avons écrite sur notre boîte.</li>
<li><code v-pre>=</code> est la façon dont nous mettons quelque chose à l'intérieur de la boîte.</li>
<li><code v-pre>'Arya'</code> est la donnée (une Chaîne de caractères) que nous avons stockée à l'intérieur.</li>
</ol>
<p>La meilleure chose avec <code v-pre>let</code>, c'est que nous pouvons changer ce qu'il y a dans la boîte plus tard !</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> platPrefere <span class="token operator">=</span> <span class="token string">'Pizza'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>platPrefere<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime : Pizza</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Plus tard, on change d'avis !</span></span>
<span class="line">platPrefere <span class="token operator">=</span> <span class="token string">'Tacos'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>platPrefere<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime : Tacos</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creer-une-variable-avec-const" tabindex="-1"><a class="header-anchor" href="#creer-une-variable-avec-const"><span>Créer une Variable avec <code v-pre>const</code></span></a></h2>
<p>Parfois, vous voulez stocker des informations qui ne devraient <strong>jamais</strong> changer. Par exemple, votre année de naissance.</p>
<p>Pour les choses qui doivent rester constantes, nous utilisons le mot <code v-pre>const</code> au lieu de <code v-pre>let</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> monAnneeDeNaissance <span class="token operator">=</span> <span class="token number">1995</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>monAnneeDeNaissance<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime : 1995</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Si vous essayez de changer une variable <code v-pre>const</code>, l'ordinateur se fâchera et affichera une erreur, protégeant ainsi vos données pour éviter qu'elles ne soient modifiées par accident !</p>
<p><em>Astuce : Si vous savez qu'une valeur changera plus tard (comme un score dans un jeu), utilisez <code v-pre>let</code>. Si elle doit rester la même pour toujours, utilisez <code v-pre>const</code>.</em></p>
<h2 id="les-variables-et-les-mathematiques" tabindex="-1"><a class="header-anchor" href="#les-variables-et-les-mathematiques"><span>Les Variables et les Mathématiques</span></a></h2>
<p>Puisque les variables ne sont que des boîtes contenant des données, si elles contiennent des nombres, nous pouvons faire des mathématiques avec !</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">score <span class="token operator">=</span> score <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime : 15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parce qu'ajouter des points à un score est très courant en codage, JavaScript nous donne un raccourci. Au lieu d'écrire <code v-pre>score = score + 5</code>, nous pouvons écrire <code v-pre>score += 5</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> vies <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">vies <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Ceci est un raccourci pour : vies = vies - 1</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vies<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime : 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nous avons aussi des raccourcis pour ajouter exactement 1 (<code v-pre>++</code>) ou soustraire exactement 1 (<code v-pre>--</code>) :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> niveau <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">niveau<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// Ceci ajoute exactement 1 au niveau</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>niveau<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime : 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="melanger-des-mots-et-des-variables" tabindex="-1"><a class="header-anchor" href="#melanger-des-mots-et-des-variables"><span>Mélanger des Mots et des Variables</span></a></h2>
<p>Et si vous vouliez dire bonjour à un utilisateur, mais que vous ne connaissez pas son nom avant qu'il ne se connecte ? Vous pouvez utiliser des variables et les coller avec du texte !</p>
<p>Vous pouvez utiliser le symbole <code v-pre>+</code> pour joindre du texte et des variables ensemble :</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> monAnimal <span class="token operator">=</span> <span class="token string">'chat'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Je possède un '</span> <span class="token operator">+</span> monAnimal <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// Imprime : Je possède un chat.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="une-meilleure-facon-l-interpolation-de-chaines" tabindex="-1"><a class="header-anchor" href="#une-meilleure-facon-l-interpolation-de-chaines"><span>Une Meilleure Façon : L'Interpolation de Chaînes</span></a></h2>
<p>Coller du texte avec le symbole <code v-pre>+</code> peut devenir brouillon si vous avez beaucoup de variables. Une méthode plus récente et plus propre pour faire cela s'appelle l'<strong>Interpolation de Chaînes</strong> (String Interpolation).</p>
<p>Au lieu des guillemets normaux, vous utilisez des <strong>backticks</strong> <code v-pre>`</code> (généralement trouvés sur la touche 7 ou <code v-pre>Alt Gr</code> de votre clavier). Ensuite, vous placez vos variables à l'intérieur de <code v-pre>${ }</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> maVille <span class="token operator">=</span> <span class="token string">'Paris'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> meteo <span class="token operator">=</span> <span class="token string">'ensoleillé'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">J'habite à </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>maVille<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> et il fait très </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>meteo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> aujourd'hui !</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Imprime : J'habite à Paris et il fait très ensoleillé aujourd'hui !</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C'est beaucoup plus facile à lire et à écrire !</p>
<h2 id="resume-des-variables" tabindex="-1"><a class="header-anchor" href="#resume-des-variables"><span>Résumé des Variables</span></a></h2>
<p>Récapitulons ce que nous avons appris :</p>
<ul>
<li>Les <strong>Variables</strong> sont des boîtes étiquetées utilisées pour stocker des données.</li>
<li>Utilisez <code v-pre>let</code> si les données pourraient changer plus tard.</li>
<li>Utilisez <code v-pre>const</code> si les données doivent être verrouillées et ne jamais changer.</li>
<li>Vous pouvez faire des mathématiques avec des variables si elles contiennent des nombres (<code v-pre>+=</code>, <code v-pre>-=</code>, <code v-pre>++</code>).</li>
<li>Vous pouvez mélanger du texte et des variables en utilisant le symbole <code v-pre>+</code>.</li>
<li>Une façon plus propre de mélanger texte et variables est d'utiliser les backticks <code v-pre>`</code> et <code v-pre>${}</code>.</li>
</ul>
</div></template>


