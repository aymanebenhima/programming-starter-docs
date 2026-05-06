<template><div><h1 id="introduction-to-javascript" tabindex="-1"><a class="header-anchor" href="#introduction-to-javascript"><span>Introduction to JavaScript</span></a></h1>
<h2 id="what-is-javascript" tabindex="-1"><a class="header-anchor" href="#what-is-javascript"><span>What is JavaScript?</span></a></h2>
<p>Welcome to the world of programming! If you have zero experience in coding, you are in the right place.</p>
<p>Think of a website like a house:</p>
<ul>
<li><strong>HTML</strong> is the structure (the walls and rooms).</li>
<li><strong>CSS</strong> is the design (the paint and decorations).</li>
<li><strong>JavaScript</strong> is the electricity and plumbing. It makes the house &quot;alive&quot; and interactive!</li>
</ul>
<p>JavaScript is a powerful language used by most modern web browsers. It allows you to create dynamic actions on websites, like clicking a button to show a popup, animating images, or checking if a password is correct.</p>
<h2 id="the-console-your-developer-tool" tabindex="-1"><a class="header-anchor" href="#the-console-your-developer-tool"><span>The Console: Your Developer Tool</span></a></h2>
<p>When you write code, a lot of the work the computer does is invisible. But what if you want to see what the computer is doing?</p>
<p>That's where the <strong>console</strong> comes in! The console is a hidden panel in your web browser that developers use to see messages and check for errors.</p>
<p>In JavaScript, we use a command called <code v-pre>console.log()</code> to print messages to this hidden panel. Whatever you put inside the parentheses <code v-pre>()</code> will show up on the screen.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// This will print the number 5 to the console</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// This will print a greeting</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Note: You might notice the semicolon <code v-pre>;</code> at the end. Think of it like a period at the end of a sentence. It tells the computer that your instruction is finished!</em></p>
<h2 id="comments-notes-for-humans" tabindex="-1"><a class="header-anchor" href="#comments-notes-for-humans"><span>Comments: Notes for Humans</span></a></h2>
<p>Sometimes you want to leave a note in your code for yourself or other people, but you don't want the computer to read it. These notes are called <strong>comments</strong>. The computer completely ignores them!</p>
<p>There are two ways to write comments:</p>
<p><strong>1. Single-line comment:</strong> Use two forward slashes <code v-pre>//</code>. Everything after them on that line is ignored.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// This is a note for me. The computer won't read this!</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. Multi-line comment:</strong> Use <code v-pre>/*</code> to start and <code v-pre>*/</code> to end. This is great for longer notes.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line">  This is a long note.</span>
<span class="line">  It can take up multiple lines.</span>
<span class="line">  None of this will be executed by the computer!</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-types-the-kinds-of-information" tabindex="-1"><a class="header-anchor" href="#data-types-the-kinds-of-information"><span>Data Types: The Kinds of Information</span></a></h2>
<p>In real life, we deal with different kinds of information: words, numbers, and yes/no answers. Programming is exactly the same!</p>
<p>In JavaScript, we classify information into different <strong>Data Types</strong>. Here are the most basic and important ones for beginners:</p>
<ul>
<li><strong>Number</strong>: Any number, with or without decimals. Example: <code v-pre>4</code>, <code v-pre>15</code>, <code v-pre>23.42</code>.</li>
<li><strong>String</strong>: Any text, like letters, words, or sentences. You MUST wrap strings in quotes so the computer knows it's text. Example: <code v-pre>'Hello'</code>, <code v-pre>&quot;I love coding&quot;</code>.</li>
<li><strong>Boolean</strong>: This is a simple &quot;on&quot; or &quot;off&quot; switch. It only has two possible values: <code v-pre>true</code> (yes) or <code v-pre>false</code> (no). Do not use quotes for booleans!</li>
<li><strong>Null</strong>: This simply means &quot;nothing&quot; or &quot;empty&quot; on purpose.</li>
<li><strong>Undefined</strong>: This means a value hasn't been assigned yet. The computer knows something exists, but doesn't know what it is.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is a String because it has quotes!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This is a Number. No quotes!</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This is a Boolean.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="math-with-code-arithmetic-operators" tabindex="-1"><a class="header-anchor" href="#math-with-code-arithmetic-operators"><span>Math with Code (Arithmetic Operators)</span></a></h2>
<p>Computers are essentially giant calculators. You can do math in JavaScript using basic symbols, called <strong>operators</strong>:</p>
<ul>
<li>Add: <code v-pre>+</code></li>
<li>Subtract: <code v-pre>-</code></li>
<li>Multiply: <code v-pre>*</code></li>
<li>Divide: <code v-pre>/</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 7</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 4</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 8</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gluing-words-together-string-concatenation" tabindex="-1"><a class="header-anchor" href="#gluing-words-together-string-concatenation"><span>Gluing Words Together (String Concatenation)</span></a></h2>
<p>The <code v-pre>+</code> symbol isn't just for math! If you use <code v-pre>+</code> with <strong>Strings</strong> (text), it glues the words together. This is called <strong>concatenation</strong>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hi'</span> <span class="token operator">+</span> <span class="token string">'ya'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 'hiya'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I love '</span> <span class="token operator">+</span> <span class="token string">'coding.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints 'I love coding.'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the space after the word &quot;love &quot;. The computer glues text exactly as you write it, so if you want a space between words, you have to type it inside the quotes!</p>
<h2 id="review" tabindex="-1"><a class="header-anchor" href="#review"><span>Review</span></a></h2>
<p>Let’s recap what you've learned:</p>
<ul>
<li><strong>JavaScript</strong> makes websites interactive.</li>
<li>Use <code v-pre>console.log()</code> to print messages and see what your code is doing.</li>
<li>Write <strong>comments</strong> using <code v-pre>//</code> or <code v-pre>/* ... */</code> to leave notes that the computer ignores.</li>
<li>The basic <strong>Data Types</strong> are Numbers, Strings (text in quotes), and Booleans (<code v-pre>true</code> or <code v-pre>false</code>).</li>
<li>You can do math using <code v-pre>+</code>, <code v-pre>-</code>, <code v-pre>*</code>, and <code v-pre>/</code>.</li>
<li>You can glue text (Strings) together using the <code v-pre>+</code> symbol.</li>
</ul>
</div></template>


