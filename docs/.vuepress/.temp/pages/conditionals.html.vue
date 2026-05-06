<template><div><h1 id="conditional-statements-making-decisions" tabindex="-1"><a class="header-anchor" href="#conditional-statements-making-decisions"><span>Conditional Statements: Making Decisions</span></a></h1>
<h2 id="how-computers-make-decisions" tabindex="-1"><a class="header-anchor" href="#how-computers-make-decisions"><span>How Computers Make Decisions</span></a></h2>
<p>In everyday life, you make decisions all the time based on the situation.</p>
<ul>
<li><strong>If</strong> it is raining, <strong>then</strong> I will take an umbrella.</li>
<li><strong>Else</strong> (otherwise), I will wear sunglasses.</li>
</ul>
<p>We can teach computers to make these same kinds of decisions! In code, we call these <strong>conditional statements</strong>. They check if a specific condition is true, and then perform a task based on the result.</p>
<h2 id="the-if-statement" tabindex="-1"><a class="header-anchor" href="#the-if-statement"><span>The <code v-pre>if</code> Statement</span></a></h2>
<p>The simplest way to make a decision in code is using the <code v-pre>if</code> statement.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> itIsRaining <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>itIsRaining<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Take an umbrella!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is how an <code v-pre>if</code> statement is built:</p>
<ol>
<li>It starts with the word <code v-pre>if</code>.</li>
<li>Next are parentheses <code v-pre>()</code>. Inside them goes the <strong>condition</strong> (a question that has a yes/no or true/false answer).</li>
<li>Finally, there are curly braces <code v-pre>{}</code>. Inside the braces is the code that will run <strong>only if</strong> the condition is <code v-pre>true</code>.</li>
</ol>
<p>If <code v-pre>itIsRaining</code> was <code v-pre>false</code>, the computer would simply skip the code inside the curly braces and print nothing!</p>
<h2 id="the-if-else-statement" tabindex="-1"><a class="header-anchor" href="#the-if-else-statement"><span>The <code v-pre>if...else</code> Statement</span></a></h2>
<p>What if we want the computer to do something else when the condition is <code v-pre>false</code>? We can add an <code v-pre>else</code> statement!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> itIsRaining <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>itIsRaining<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Take an umbrella!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Wear sunglasses!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, if the condition is <code v-pre>false</code>, the computer skips the first block of code and runs the code inside the <code v-pre>else</code> block instead. In this case, it will print: <code v-pre>Wear sunglasses!</code>.</p>
<h2 id="asking-questions-comparison-operators" tabindex="-1"><a class="header-anchor" href="#asking-questions-comparison-operators"><span>Asking Questions: Comparison Operators</span></a></h2>
<p>Usually, our conditions aren't just a simple <code v-pre>true</code> or <code v-pre>false</code> variable. We want to compare things. For example: &quot;Is the player's score higher than 100?&quot;</p>
<p>To ask these questions, we use <strong>comparison operators</strong>:</p>
<ul>
<li>Less than: <code v-pre>&lt;</code></li>
<li>Greater than: <code v-pre>&gt;</code></li>
<li>Less than or equal to: <code v-pre>&lt;=</code></li>
<li>Greater than or equal to: <code v-pre>&gt;=</code></li>
<li>Is exactly equal to: <code v-pre>===</code></li>
<li>Is NOT equal to: <code v-pre>!==</code></li>
</ul>
<p><em>Notice that &quot;is equal to&quot; uses three equal signs <code v-pre>===</code>. Remember that a single equal sign <code v-pre>=</code> is only used for putting data into a variable box!</em></p>
<p>Let's see this in action:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> hungerLevel <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>hungerLevel <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Time to eat!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'We can eat later!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since 8 is greater than 7, this code will print: <code v-pre>Time to eat!</code>.</p>
<h2 id="multiple-decisions-else-if" tabindex="-1"><a class="header-anchor" href="#multiple-decisions-else-if"><span>Multiple Decisions: <code v-pre>else if</code></span></a></h2>
<p>Sometimes life isn't just A or B. There might be a C, D, and E!</p>
<p>If we have more than two possible outcomes, we can use <code v-pre>else if</code> statements to chain decisions together.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> stopLight <span class="token operator">=</span> <span class="token string">'yellow'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>stopLight <span class="token operator">===</span> <span class="token string">'red'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Stop!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stopLight <span class="token operator">===</span> <span class="token string">'yellow'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Slow down!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stopLight <span class="token operator">===</span> <span class="token string">'green'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Go!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Caution, unknown light!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The computer reads from top to bottom. It checks the first condition (<code v-pre>'red'</code>). Since that is false, it moves to the next one (<code v-pre>'yellow'</code>). Since that is true, it runs that block of code and completely ignores the rest!</p>
<h2 id="checking-multiple-things-at-once-logical-operators" tabindex="-1"><a class="header-anchor" href="#checking-multiple-things-at-once-logical-operators"><span>Checking Multiple Things at Once (Logical Operators)</span></a></h2>
<p>What if you want to go to the park, but <strong>only if</strong> it is sunny <strong>AND</strong> it is the weekend?</p>
<p>We can use <strong>logical operators</strong> to combine conditions:</p>
<ul>
<li><strong>AND</strong> (<code v-pre>&amp;&amp;</code>): Both conditions must be true.</li>
<li><strong>OR</strong> (<code v-pre>||</code>): Only one of the conditions needs to be true.</li>
</ul>
<p>Using AND (<code v-pre>&amp;&amp;</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> isSunny <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> isWeekend <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>isSunny <span class="token operator">&amp;&amp;</span> isWeekend<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Let us go to the park!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using OR (<code v-pre>||</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token string">'Saturday'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>day <span class="token operator">===</span> <span class="token string">'Saturday'</span> <span class="token operator">||</span> day <span class="token operator">===</span> <span class="token string">'Sunday'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Enjoy the weekend!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="review" tabindex="-1"><a class="header-anchor" href="#review"><span>Review</span></a></h2>
<p>Let’s review conditionals:</p>
<ul>
<li><strong><code v-pre>if</code></strong> checks a condition and runs a block of code if the condition is <code v-pre>true</code>.</li>
<li><strong><code v-pre>else</code></strong> gives a default backup plan if the condition was <code v-pre>false</code>.</li>
<li><strong><code v-pre>else if</code></strong> lets you check multiple different conditions in a row.</li>
<li><strong>Comparison operators</strong> (like <code v-pre>&gt;</code>, <code v-pre>&lt;</code>, <code v-pre>===</code>) help you compare values.</li>
<li><strong>Logical operators</strong> (<code v-pre>&amp;&amp;</code> for AND, <code v-pre>||</code> for OR) let you combine multiple conditions together.</li>
</ul>
</div></template>


