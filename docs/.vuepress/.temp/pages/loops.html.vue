<template><div><h1 id="loops-repeating-tasks-automatically" tabindex="-1"><a class="header-anchor" href="#loops-repeating-tasks-automatically"><span>Loops: Repeating Tasks Automatically</span></a></h1>
<h2 id="why-do-we-need-loops" tabindex="-1"><a class="header-anchor" href="#why-do-we-need-loops"><span>Why Do We Need Loops?</span></a></h2>
<p>Imagine you are told to write the phrase &quot;I will not talk in class&quot; on a chalkboard 100 times. That would take a long time and your hand would hurt!</p>
<p>In programming, we hate doing the same thing over and over manually. Whenever a process needs to be repeated, we use a tool called a <strong>loop</strong>.</p>
<p>A loop is simply a set of instructions that the computer repeats automatically until a specific stopping condition is met. Loops make our code efficient and save us a lot of typing!</p>
<h2 id="the-for-loop" tabindex="-1"><a class="header-anchor" href="#the-for-loop"><span>The <code v-pre>for</code> Loop</span></a></h2>
<p>One of the most common ways to make a computer repeat a task is using a <strong>for loop</strong>.</p>
<p>A <code v-pre>for</code> loop needs three pieces of information to work:</p>
<ol>
<li><strong>Where to start</strong> (Initialization)</li>
<li><strong>When to stop</strong> (Stopping condition)</li>
<li><strong>How to count up</strong> (Iteration step)</li>
</ol>
<p>These three pieces of information go inside parentheses <code v-pre>()</code> and are separated by semicolons <code v-pre>;</code>.</p>
<p>Here is what the syntax looks like:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> counter <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> counter<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run this code, the computer will print:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">0</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breaking-down-the-for-loop" tabindex="-1"><a class="header-anchor" href="#breaking-down-the-for-loop"><span>Breaking Down the <code v-pre>for</code> Loop</span></a></h2>
<p>Let's look closely at the three parts inside the parentheses of our example:</p>
<ol>
<li>
<p><code v-pre>let counter = 0;</code><br>
<strong>Where to start:</strong> We create a variable named <code v-pre>counter</code> and set it to <code v-pre>0</code>. This is where our loop begins.</p>
</li>
<li>
<p><code v-pre>counter &lt; 4;</code><br>
<strong>When to stop:</strong> This is a condition, just like in an <code v-pre>if</code> statement! The loop will keep running <strong>as long as</strong> the counter is less than 4. If the counter reaches 4, the loop stops immediately.</p>
</li>
<li>
<p><code v-pre>counter++</code><br>
<strong>How to count up:</strong> After each loop finishes, we need to increase our counter so the loop doesn't run forever. <code v-pre>counter++</code> simply adds <code v-pre>1</code> to the counter after every single round.</p>
</li>
</ol>
<p>Inside the curly braces <code v-pre>{}</code> is the actual code we want the computer to repeat. In this case, we told it to <code v-pre>console.log(counter)</code>, which is why it prints the numbers 0, 1, 2, and 3!</p>
<h2 id="a-real-world-example" tabindex="-1"><a class="header-anchor" href="#a-real-world-example"><span>A Real World Example</span></a></h2>
<p>Let's use a <code v-pre>for</code> loop to count down the days until the weekend:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> day <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> day<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">It is day </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> of the work week.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hooray! It is the weekend!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output will be:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">It is day 1 of the work week.</span>
<span class="line">It is day 2 of the work week.</span>
<span class="line">It is day 3 of the work week.</span>
<span class="line">It is day 4 of the work week.</span>
<span class="line">It is day 5 of the work week.</span>
<span class="line">Hooray! It is the weekend!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Loops are incredibly powerful tools that you will use all the time as you learn to code!</p>
</div></template>


