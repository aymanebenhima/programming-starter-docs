<template><div><h1 id="introduction-a-javascript" tabindex="-1"><a class="header-anchor" href="#introduction-a-javascript"><span>Introduction à JavaScript</span></a></h1>
<h2 id="qu-est-ce-que-javascript" tabindex="-1"><a class="header-anchor" href="#qu-est-ce-que-javascript"><span>Qu'est-ce que JavaScript ?</span></a></h2>
<p>Bienvenue dans le monde de la programmation ! Si vous n'avez aucune expérience en codage, vous êtes au bon endroit.</p>
<p>Imaginez un site web comme une maison :</p>
<ul>
<li><strong>HTML</strong> est la structure (les murs et les pièces).</li>
<li><strong>CSS</strong> est le design (la peinture et la décoration).</li>
<li><strong>JavaScript</strong> est l'électricité et la plomberie. Il rend la maison &quot;vivante&quot; et interactive !</li>
</ul>
<p>JavaScript est un langage puissant utilisé par la plupart des navigateurs web modernes. Il vous permet de créer des actions dynamiques sur les sites web, comme cliquer sur un bouton pour afficher un pop-up, animer des images, ou vérifier si un mot de passe est correct.</p>
<h2 id="la-console-votre-outil-de-developpeur" tabindex="-1"><a class="header-anchor" href="#la-console-votre-outil-de-developpeur"><span>La Console : Votre Outil de Développeur</span></a></h2>
<p>Lorsque vous écrivez du code, une grande partie du travail que fait l'ordinateur est invisible. Mais que faire si vous voulez voir ce que l'ordinateur fait ?</p>
<p>C'est là qu'intervient la <strong>console</strong> ! La console est un panneau caché dans votre navigateur web que les développeurs utilisent pour voir des messages et vérifier les erreurs.</p>
<p>En JavaScript, nous utilisons une commande appelée <code v-pre>console.log()</code> pour imprimer des messages dans ce panneau caché. Tout ce que vous mettez entre les parenthèses <code v-pre>()</code> apparaîtra à l'écran.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Ceci imprimera le chiffre 5 dans la console</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Ceci imprimera un message d'accueil</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bonjour tout le monde !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Note : Vous remarquerez peut-être le point-virgule <code v-pre>;</code> à la fin. Considérez-le comme un point à la fin d'une phrase. Il indique à l'ordinateur que votre instruction est terminée !</em></p>
<h2 id="les-commentaires-des-notes-pour-les-humains" tabindex="-1"><a class="header-anchor" href="#les-commentaires-des-notes-pour-les-humains"><span>Les Commentaires : Des Notes pour les Humains</span></a></h2>
<p>Parfois, vous voulez laisser une note dans votre code pour vous-même ou pour d'autres personnes, mais vous ne voulez pas que l'ordinateur la lise. Ces notes s'appellent des <strong>commentaires</strong>. L'ordinateur les ignore complètement !</p>
<p>Il y a deux façons d'écrire des commentaires :</p>
<p><strong>1. Commentaire sur une seule ligne :</strong> Utilisez deux barres obliques <code v-pre>//</code>. Tout ce qui suit sur cette ligne est ignoré.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Ceci est une note pour moi. L'ordinateur ne lira pas ceci !</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. Commentaire multi-lignes :</strong> Utilisez <code v-pre>/*</code> pour commencer et <code v-pre>*/</code> pour terminer. C'est idéal pour les notes plus longues.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line">  Ceci est une longue note.</span>
<span class="line">  Elle peut prendre plusieurs lignes.</span>
<span class="line">  Rien de tout cela ne sera exécuté par l'ordinateur !</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="les-types-de-donnees-les-sortes-d-informations" tabindex="-1"><a class="header-anchor" href="#les-types-de-donnees-les-sortes-d-informations"><span>Les Types de Données : Les Sortes d'Informations</span></a></h2>
<p>Dans la vraie vie, nous traitons différents types d'informations : des mots, des chiffres, et des réponses oui/non. La programmation fonctionne exactement de la même manière !</p>
<p>En JavaScript, nous classons les informations dans différents <strong>Types de Données</strong>. Voici les plus basiques et importants pour les débutants :</p>
<ul>
<li><strong>Number (Nombre)</strong> : N'importe quel nombre, avec ou sans décimales. Exemple : <code v-pre>4</code>, <code v-pre>15</code>, <code v-pre>23.42</code>.</li>
<li><strong>String (Chaîne de caractères)</strong> : N'importe quel texte, comme des lettres, des mots ou des phrases. Vous DEVEZ entourer les chaînes de guillemets pour que l'ordinateur sache que c'est du texte. Exemple : <code v-pre>'Bonjour'</code>, <code v-pre>&quot;J'aime coder&quot;</code>.</li>
<li><strong>Boolean (Booléen)</strong> : Il s'agit d'un simple interrupteur &quot;marche&quot; ou &quot;arrêt&quot;. Il n'a que deux valeurs possibles : <code v-pre>true</code> (vrai/oui) ou <code v-pre>false</code> (faux/non). N'utilisez pas de guillemets pour les booléens !</li>
<li><strong>Null</strong> : Cela signifie simplement &quot;rien&quot; ou &quot;vide&quot; de manière intentionnelle.</li>
<li><strong>Undefined (Non défini)</strong> : Cela signifie qu'une valeur n'a pas encore été attribuée. L'ordinateur sait que quelque chose existe, mais ne sait pas ce que c'est.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Ceci est une chaîne de caractères (String) car elle a des guillemets !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ceci est un Nombre. Pas de guillemets !</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ceci est un Booléen.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faire-des-mathematiques-avec-du-code-operateurs-arithmetiques" tabindex="-1"><a class="header-anchor" href="#faire-des-mathematiques-avec-du-code-operateurs-arithmetiques"><span>Faire des Mathématiques avec du Code (Opérateurs Arithmétiques)</span></a></h2>
<p>Les ordinateurs sont essentiellement des calculatrices géantes. Vous pouvez faire des mathématiques en JavaScript en utilisant des symboles basiques, appelés <strong>opérateurs</strong> :</p>
<ul>
<li>Additionner : <code v-pre>+</code></li>
<li>Soustraire : <code v-pre>-</code></li>
<li>Multiplier : <code v-pre>*</code></li>
<li>Diviser : <code v-pre>/</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime 7</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime 4</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime 8</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="coller-des-mots-ensemble-concatenation-de-chaines" tabindex="-1"><a class="header-anchor" href="#coller-des-mots-ensemble-concatenation-de-chaines"><span>Coller des Mots Ensemble (Concaténation de Chaînes)</span></a></h2>
<p>Le symbole <code v-pre>+</code> n'est pas seulement pour les mathématiques ! Si vous utilisez <code v-pre>+</code> avec des <strong>Strings</strong> (texte), il colle les mots ensemble. Cela s'appelle la <strong>concaténation</strong>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sal'</span> <span class="token operator">+</span> <span class="token string">'ut'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime 'salut'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"J'aime "</span> <span class="token operator">+</span> <span class="token string">'coder.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Imprime "J'aime coder."</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Remarquez l'espace après le mot &quot;aime &quot;. L'ordinateur colle le texte exactement comme vous l'écrivez, donc si vous voulez un espace entre les mots, vous devez le taper à l'intérieur des guillemets !</p>
<h2 id="resume" tabindex="-1"><a class="header-anchor" href="#resume"><span>Résumé</span></a></h2>
<p>Récapitulons ce que vous avez appris :</p>
<ul>
<li><strong>JavaScript</strong> rend les sites web interactifs.</li>
<li>Utilisez <code v-pre>console.log()</code> pour imprimer des messages et voir ce que fait votre code.</li>
<li>Écrivez des <strong>commentaires</strong> en utilisant <code v-pre>//</code> ou <code v-pre>/* ... */</code> pour laisser des notes que l'ordinateur ignore.</li>
<li>Les <strong>Types de Données</strong> de base sont les Nombres (Numbers), les Chaînes de caractères (Strings - texte entre guillemets) et les Booléens (<code v-pre>true</code> ou <code v-pre>false</code>).</li>
<li>Vous pouvez faire des mathématiques en utilisant <code v-pre>+</code>, <code v-pre>-</code>, <code v-pre>*</code>, et <code v-pre>/</code>.</li>
<li>Vous pouvez coller du texte (Strings) ensemble en utilisant le symbole <code v-pre>+</code>.</li>
</ul>
</div></template>


