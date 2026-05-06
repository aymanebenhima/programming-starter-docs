<template><div><h1 id="loops-repeating-tasks-automatically" tabindex="-1"><a class="header-anchor" href="#loops-repeating-tasks-automatically"><span>Loops: Repeating Tasks Automatically</span></a></h1>
<h2 id="why-do-we-need-loops" tabindex="-1"><a class="header-anchor" href="#why-do-we-need-loops"><span>Why Do We Need Loops?</span></a></h2>
<p>Imagine you are told to write the phrase &quot;I will not talk in class&quot; on a chalkboard 100 times. That would take a long time and your hand would hurt!</p>
<p>In programming, we hate doing the same thing over and over manually. Whenever a process needs to be repeated, we use a tool called a <strong>loop</strong>.</p>
<p>A loop is simply a set of instructions that the computer repeats automatically until a specific stopping condition is met. Loops make our algorithms efficient and save us a lot of typing!</p>
<h2 id="the-for-loop" tabindex="-1"><a class="header-anchor" href="#the-for-loop"><span>The <code v-pre>FOR</code> Loop</span></a></h2>
<p>One of the most common ways to make a computer repeat a task is using a <strong>FOR loop</strong>. A FOR loop is perfect when you know exactly <em>how many times</em> you want to repeat something.</p>
<p>Here is what the syntax looks like in pseudo code:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">FOR counter FROM 1 TO 4 DO</span>
<span class="line">  PRINT counter</span>
<span class="line">END FOR</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run this algorithm, the computer will print:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line">4</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="breaking-down-the-for-loop" tabindex="-1"><a class="header-anchor" href="#breaking-down-the-for-loop"><span>Breaking Down the <code v-pre>FOR</code> Loop</span></a></h3>
<p>Let's look closely at how it works:</p>
<ol>
<li><code v-pre>FOR counter FROM 1</code>: We create a temporary variable named <code v-pre>counter</code> and start it at 1.</li>
<li><code v-pre>TO 4</code>: We tell the loop to keep repeating until the counter reaches 4.</li>
<li><code v-pre>DO</code>: This tells the computer to execute the instructions inside the loop.</li>
<li>After each repetition, the computer automatically increases the counter by 1.</li>
<li><code v-pre>END FOR</code>: This marks the end of the loop block.</li>
</ol>
<h3 id="a-real-world-example" tabindex="-1"><a class="header-anchor" href="#a-real-world-example"><span>A Real World Example</span></a></h3>
<p>Let's use a <code v-pre>FOR</code> loop to count down the days until the weekend:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">FOR day FROM 1 TO 5 DO</span>
<span class="line">  PRINT &quot;It is day &quot; + day + &quot; of the work week.&quot;</span>
<span class="line">END FOR</span>
<span class="line"></span>
<span class="line">PRINT &quot;Hooray! It is the weekend!&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output will be:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">It is day 1 of the work week.</span>
<span class="line">It is day 2 of the work week.</span>
<span class="line">It is day 3 of the work week.</span>
<span class="line">It is day 4 of the work week.</span>
<span class="line">It is day 5 of the work week.</span>
<span class="line">Hooray! It is the weekend!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-while-loop" tabindex="-1"><a class="header-anchor" href="#the-while-loop"><span>The <code v-pre>WHILE</code> Loop</span></a></h2>
<p>Sometimes, you don't know exactly how many times a loop needs to run. You just want it to keep going <strong>while</strong> a certain condition is true. For this, we use a <strong>WHILE loop</strong>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET hunger_level TO 5</span>
<span class="line"></span>
<span class="line">WHILE hunger_level &gt; 0 DO</span>
<span class="line">  PRINT &quot;Eating a slice of pizza...&quot;</span>
<span class="line">  SET hunger_level TO hunger_level - 1</span>
<span class="line">END WHILE</span>
<span class="line"></span>
<span class="line">PRINT &quot;I am full!&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This loop will check the condition (<code v-pre>hunger_level &gt; 0</code>). If it is true, it eats a slice of pizza and decreases the hunger level. It will repeat this 5 times until the hunger level hits 0, at which point the loop stops and prints &quot;I am full!&quot;.</p>
<p>Loops are incredibly powerful tools that you will use all the time as you build algorithms!</p>
</div></template>


