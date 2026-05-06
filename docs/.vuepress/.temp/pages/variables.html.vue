<template><div><h1 id="variables-your-digital-boxes" tabindex="-1"><a class="header-anchor" href="#variables-your-digital-boxes"><span>Variables: Your Digital Boxes</span></a></h1>
<h2 id="what-is-a-variable" tabindex="-1"><a class="header-anchor" href="#what-is-a-variable"><span>What is a Variable?</span></a></h2>
<p>Imagine you are packing to move to a new house. You put your books in a box and write &quot;Books&quot; on the outside. Later, when you need a book, you don't look everywhere—you just find the box labeled &quot;Books&quot;.</p>
<p>In programming, a <strong>variable</strong> is exactly that: a labeled box where we store information (data) inside the computer’s memory. We give the box a name so we can easily find and use that information later!</p>
<p>Variables let us store things like a user's name, a high score in a game, or a secret password.</p>
<h2 id="creating-a-variable-with-let" tabindex="-1"><a class="header-anchor" href="#creating-a-variable-with-let"><span>Creating a Variable with <code v-pre>let</code></span></a></h2>
<p>To create a new box (variable), we use a special word: <code v-pre>let</code>. This tells the computer, &quot;Hey, let's create a new variable!&quot;</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myName <span class="token operator">=</span> <span class="token string">'Arya'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This will print: Arya</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Let’s break down what just happened:</p>
<ol>
<li><code v-pre>let</code> creates the variable.</li>
<li><code v-pre>myName</code> is the label we wrote on our box.</li>
<li><code v-pre>=</code> is how we put something inside the box.</li>
<li><code v-pre>'Arya'</code> is the data (a String) that we stored inside.</li>
</ol>
<p>The best part about <code v-pre>let</code> is that we can change what's inside the box later!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> favoriteFood <span class="token operator">=</span> <span class="token string">'Pizza'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>favoriteFood<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints: Pizza</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Later on, we change our minds!</span></span>
<span class="line">favoriteFood <span class="token operator">=</span> <span class="token string">'Tacos'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>favoriteFood<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints: Tacos</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-a-variable-with-const" tabindex="-1"><a class="header-anchor" href="#creating-a-variable-with-const"><span>Creating a Variable with <code v-pre>const</code></span></a></h2>
<p>Sometimes, you want to store information that should <strong>never</strong> change. For example, your date of birth.</p>
<p>For things that must remain constant, we use the word <code v-pre>const</code> instead of <code v-pre>let</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myBirthYear <span class="token operator">=</span> <span class="token number">1995</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myBirthYear<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints: 1995</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you try to change a <code v-pre>const</code> variable, the computer will get angry and throw an error, protecting your data from being accidentally changed!</p>
<p><em>Tip: If you know a value will change later (like a score in a game), use <code v-pre>let</code>. If it will stay the same forever, use <code v-pre>const</code>.</em></p>
<h2 id="variables-and-math" tabindex="-1"><a class="header-anchor" href="#variables-and-math"><span>Variables and Math</span></a></h2>
<p>Since variables are just boxes holding data, if they hold numbers, we can do math with them!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">score <span class="token operator">=</span> score <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints: 15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Because adding to a score is so common in coding, JavaScript gives us a shortcut. Instead of writing <code v-pre>score = score + 5</code>, we can write <code v-pre>score += 5</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> lives <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">lives <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// This is a shortcut for: lives = lives - 1</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lives<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints: 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We also have shortcuts for adding exactly 1 (<code v-pre>++</code>) or subtracting exactly 1 (<code v-pre>--</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">level<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// This adds exactly 1 to level</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints: 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixing-words-and-variables" tabindex="-1"><a class="header-anchor" href="#mixing-words-and-variables"><span>Mixing Words and Variables</span></a></h2>
<p>What if you want to say hello to a user, but you don't know their name until they log in? You can use variables and glue them together with text!</p>
<p>You can use the <code v-pre>+</code> symbol to join text and variables together:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myPet <span class="token operator">=</span> <span class="token string">'cat'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I own a '</span> <span class="token operator">+</span> myPet <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// Prints: I own a cat.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a-better-way-string-interpolation" tabindex="-1"><a class="header-anchor" href="#a-better-way-string-interpolation"><span>A Better Way: String Interpolation</span></a></h2>
<p>Gluing text with the <code v-pre>+</code> symbol can get messy if you have a lot of variables. A newer and cleaner way to do this is called <strong>String Interpolation</strong>.</p>
<p>Instead of normal quotes, you use <strong>backticks</strong> <code v-pre>`</code> (usually found under the Esc key on your keyboard). Then, you put your variables inside <code v-pre>${ }</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myCity <span class="token operator">=</span> <span class="token string">'Paris'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> weather <span class="token operator">=</span> <span class="token string">'sunny'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">I live in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myCity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and it is very </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weather<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> today!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Prints: I live in Paris and it is very sunny today!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is much easier to read and write!</p>
<h2 id="review-variables" tabindex="-1"><a class="header-anchor" href="#review-variables"><span>Review Variables</span></a></h2>
<p>Let’s review what we learned:</p>
<ul>
<li><strong>Variables</strong> are labelled boxes used to store data.</li>
<li>Use <code v-pre>let</code> if the data might change later.</li>
<li>Use <code v-pre>const</code> if the data should be locked and never change.</li>
<li>You can do math with variables if they contain numbers (<code v-pre>+=</code>, <code v-pre>-=</code>, <code v-pre>++</code>).</li>
<li>You can mix text and variables together using the <code v-pre>+</code> symbol.</li>
<li>A cleaner way to mix text and variables is using backticks <code v-pre>`</code> and <code v-pre>${}</code>.</li>
</ul>
</div></template>


