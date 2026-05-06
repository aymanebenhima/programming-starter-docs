<template><div><h1 id="conditionals-making-decisions" tabindex="-1"><a class="header-anchor" href="#conditionals-making-decisions"><span>Conditionals: Making Decisions</span></a></h1>
<h2 id="how-computers-make-decisions" tabindex="-1"><a class="header-anchor" href="#how-computers-make-decisions"><span>How Computers Make Decisions</span></a></h2>
<p>In everyday life, you make decisions all the time based on the situation.</p>
<ul>
<li><strong>If</strong> it is raining, <strong>then</strong> I will take an umbrella.</li>
<li><strong>Else</strong> (otherwise), I will wear sunglasses.</li>
</ul>
<p>We can teach computers to make these same kinds of decisions! In pseudo code, we call these <strong>conditional statements</strong>. They check if a specific condition is true, and then perform a task based on the result.</p>
<h2 id="the-if-then-statement" tabindex="-1"><a class="header-anchor" href="#the-if-then-statement"><span>The <code v-pre>IF ... THEN</code> Statement</span></a></h2>
<p>The simplest way to make a decision is using an <code v-pre>IF</code> statement.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET is_raining TO TRUE</span>
<span class="line"></span>
<span class="line">IF is_raining EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;Take an umbrella!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is how it is built:</p>
<ol>
<li>It starts with the word <code v-pre>IF</code>.</li>
<li>Next is the <strong>condition</strong> (<code v-pre>is_raining EQUALS TRUE</code>). This is a question that has a yes/no answer.</li>
<li>Then comes the word <code v-pre>THEN</code>. The instructions inside will run <strong>only if</strong> the condition is true.</li>
<li>We finish the block with <code v-pre>END IF</code> so the computer knows where the decision ends.</li>
</ol>
<p>If <code v-pre>is_raining</code> was <code v-pre>FALSE</code>, the computer would simply skip the code inside and print nothing!</p>
<h2 id="the-if-then-else-statement" tabindex="-1"><a class="header-anchor" href="#the-if-then-else-statement"><span>The <code v-pre>IF ... THEN ... ELSE</code> Statement</span></a></h2>
<p>What if we want the computer to do something else when the condition is false? We can add an <code v-pre>ELSE</code> statement!</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET is_raining TO FALSE</span>
<span class="line"></span>
<span class="line">IF is_raining EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;Take an umbrella!&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;Wear sunglasses!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, if the condition is false, the computer skips the first block and runs the code inside the <code v-pre>ELSE</code> block instead. In this case, it will print: <code v-pre>Wear sunglasses!</code>.</p>
<h2 id="asking-questions-comparison-operators" tabindex="-1"><a class="header-anchor" href="#asking-questions-comparison-operators"><span>Asking Questions: Comparison Operators</span></a></h2>
<p>Usually, our conditions aren't just a simple TRUE or FALSE variable. We want to compare things. For example: &quot;Is the player's score higher than 100?&quot;</p>
<p>To ask these questions, we use <strong>comparison operators</strong>:</p>
<ul>
<li><code v-pre>&lt;</code> : Less than</li>
<li><code v-pre>&gt;</code> : Greater than</li>
<li><code v-pre>&lt;=</code> : Less than or equal to</li>
<li><code v-pre>&gt;=</code> : Greater than or equal to</li>
<li><code v-pre>EQUALS</code> (or <code v-pre>==</code>) : Is exactly equal to</li>
<li><code v-pre>NOT EQUALS</code> (or <code v-pre>!=</code>) : Is not equal to</li>
</ul>
<p>Let's see this in action:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET hunger_level TO 8</span>
<span class="line"></span>
<span class="line">IF hunger_level &gt; 7 THEN</span>
<span class="line">  PRINT &quot;Time to eat!&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;We can eat later!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since 8 is greater than 7, this code will print: <code v-pre>Time to eat!</code>.</p>
<h2 id="multiple-decisions-else-if" tabindex="-1"><a class="header-anchor" href="#multiple-decisions-else-if"><span>Multiple Decisions: <code v-pre>ELSE IF</code></span></a></h2>
<p>Sometimes life isn't just A or B. There might be a C, D, and E!</p>
<p>If we have more than two possible outcomes, we can chain decisions together using <code v-pre>ELSE IF</code>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET stop_light TO &quot;yellow&quot;</span>
<span class="line"></span>
<span class="line">IF stop_light EQUALS &quot;red&quot; THEN</span>
<span class="line">  PRINT &quot;Stop!&quot;</span>
<span class="line">ELSE IF stop_light EQUALS &quot;yellow&quot; THEN</span>
<span class="line">  PRINT &quot;Slow down!&quot;</span>
<span class="line">ELSE IF stop_light EQUALS &quot;green&quot; THEN</span>
<span class="line">  PRINT &quot;Go!&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;Caution, unknown light!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The computer reads from top to bottom. It checks the first condition (<code v-pre>&quot;red&quot;</code>). Since that is false, it moves to the next one (<code v-pre>&quot;yellow&quot;</code>). Since that is true, it runs that block of code and completely ignores the rest!</p>
<h2 id="checking-multiple-things-at-once-logical-operators" tabindex="-1"><a class="header-anchor" href="#checking-multiple-things-at-once-logical-operators"><span>Checking Multiple Things at Once (Logical Operators)</span></a></h2>
<p>What if you want to go to the park, but <strong>only if</strong> it is sunny <strong>AND</strong> it is the weekend?</p>
<p>We can use <strong>logical operators</strong> to combine conditions:</p>
<ul>
<li><strong>AND</strong>: Both conditions must be true.</li>
<li><strong>OR</strong>: Only one of the conditions needs to be true.</li>
</ul>
<p>Using <code v-pre>AND</code>:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET is_sunny TO TRUE</span>
<span class="line">SET is_weekend TO TRUE</span>
<span class="line"></span>
<span class="line">IF is_sunny EQUALS TRUE AND is_weekend EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;Let us go to the park!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using <code v-pre>OR</code>:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET day TO &quot;Saturday&quot;</span>
<span class="line"></span>
<span class="line">IF day EQUALS &quot;Saturday&quot; OR day EQUALS &quot;Sunday&quot; THEN</span>
<span class="line">  PRINT &quot;Enjoy the weekend!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="review" tabindex="-1"><a class="header-anchor" href="#review"><span>Review</span></a></h2>
<p>Let’s review conditionals:</p>
<ul>
<li><strong><code v-pre>IF ... THEN</code></strong> checks a condition and runs a block of code if the condition is true.</li>
<li><strong><code v-pre>ELSE</code></strong> gives a default backup plan if the condition was false.</li>
<li><strong><code v-pre>ELSE IF</code></strong> lets you check multiple different conditions in a row.</li>
<li><strong>Comparison operators</strong> (like <code v-pre>&gt;</code>, <code v-pre>&lt;</code>) help you compare values.</li>
<li><strong>Logical operators</strong> (<code v-pre>AND</code>, <code v-pre>OR</code>) let you combine multiple conditions together.</li>
</ul>
</div></template>


