<template><div><h1 id="variables-your-digital-boxes" tabindex="-1"><a class="header-anchor" href="#variables-your-digital-boxes"><span>Variables: Your Digital Boxes</span></a></h1>
<h2 id="what-is-a-variable" tabindex="-1"><a class="header-anchor" href="#what-is-a-variable"><span>What is a Variable?</span></a></h2>
<p>Imagine you are packing to move to a new house. You put your books in a box and write &quot;Books&quot; on the outside. Later, when you need a book, you don't look everywhere—you just find the box labeled &quot;Books&quot;.</p>
<p>In programming, a <strong>variable</strong> is exactly that: a labeled box where we store information (data) inside the computer’s memory. We give the box a name so we can easily find and use that information later!</p>
<p>Variables let us store things like a user's name, a high score in a game, or a secret password.</p>
<h2 id="creating-and-using-a-variable" tabindex="-1"><a class="header-anchor" href="#creating-and-using-a-variable"><span>Creating and Using a Variable</span></a></h2>
<p>To create a new box (variable) and put something inside it, we use the <code v-pre>SET</code> keyword in pseudo code.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET my_name TO &quot;Arya&quot;</span>
<span class="line">PRINT my_name</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><em>(This will print: Arya)</em></p>
<p>Let’s break down what just happened:</p>
<ol>
<li><code v-pre>SET</code> tells the computer we are making or updating a variable.</li>
<li><code v-pre>my_name</code> is the label we wrote on our box.</li>
<li><code v-pre>TO</code> tells the computer to put the data into the box.</li>
<li><code v-pre>&quot;Arya&quot;</code> is the data (a String) that we stored inside.</li>
</ol>
<p>The best part about variables is that they can &quot;vary&quot; (change)! You can change what's inside the box later:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET favorite_food TO &quot;Pizza&quot;</span>
<span class="line">PRINT favorite_food </span>
<span class="line">// Prints: Pizza</span>
<span class="line"></span>
<span class="line">// Later on, we change our minds!</span>
<span class="line">SET favorite_food TO &quot;Tacos&quot;</span>
<span class="line">PRINT favorite_food </span>
<span class="line">// Prints: Tacos</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants"><span>Constants</span></a></h2>
<p>Sometimes, you want to store information that should <strong>never</strong> change. For example, your date of birth or the value of Pi.</p>
<p>For things that must remain constant, we can specify that the box is locked.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">CONSTANT my_birth_year TO 1995</span>
<span class="line">PRINT my_birth_year</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you try to change a <code v-pre>CONSTANT</code>, the algorithm will fail because the data is protected.</p>
<h2 id="variables-and-math" tabindex="-1"><a class="header-anchor" href="#variables-and-math"><span>Variables and Math</span></a></h2>
<p>Since variables are just boxes holding data, if they hold numbers, we can do math with them!</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET score TO 10</span>
<span class="line">SET score TO score + 5 </span>
<span class="line"></span>
<span class="line">PRINT score </span>
<span class="line">// Prints: 15</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We tell the computer: &quot;Take whatever is currently inside the <code v-pre>score</code> box (10), add 5 to it, and put the new result (15) back into the <code v-pre>score</code> box!&quot;</p>
<h2 id="review-variables" tabindex="-1"><a class="header-anchor" href="#review-variables"><span>Review Variables</span></a></h2>
<p>Let’s review what we learned:</p>
<ul>
<li><strong>Variables</strong> are labelled boxes used to store data.</li>
<li>Use <code v-pre>SET ... TO ...</code> to put data inside a variable.</li>
<li>Variables can be updated or changed at any time in your algorithm.</li>
<li>Use <code v-pre>CONSTANT ... TO ...</code> if the data should be locked and never change.</li>
<li>You can do math with variables if they contain numbers.</li>
</ul>
</div></template>


