<template><div><h1 id="الحلقات-تكرار-المهام-تلقائيًا" tabindex="-1"><a class="header-anchor" href="#الحلقات-تكرار-المهام-تلقائيًا"><span>الحلقات: تكرار المهام تلقائيًا</span></a></h1>
<h2 id="لماذا-نحتاج-إلى-الحلقات؟" tabindex="-1"><a class="header-anchor" href="#لماذا-نحتاج-إلى-الحلقات؟"><span>لماذا نحتاج إلى الحلقات؟</span></a></h2>
<p>تخيل أن يُطلب منك كتابة العبارة &quot;لن أتحدث في الفصل&quot; على السبورة 100 مرة. سيستغرق ذلك وقتًا طويلاً وستؤلمك يدك!</p>
<p>في البرمجة، نحن نكره القيام بنفس الشيء مرارًا وتكرارًا بشكل يدوي. كلما دعت الحاجة إلى تكرار عملية ما، نستخدم أداة تسمى <strong>الحلقة (Loop)</strong>.</p>
<p>الحلقة هي ببساطة مجموعة من التعليمات التي يكررها الكمبيوتر تلقائيًا حتى يتم استيفاء شرط توقف محدد. تجعل الحلقات الكود الخاص بنا فعالاً وتوفر علينا الكثير من الكتابة!</p>
<h2 id="الحلقة-for" tabindex="-1"><a class="header-anchor" href="#الحلقة-for"><span>الحلقة <code v-pre>for</code></span></a></h2>
<p>إحدى أكثر الطرق شيوعًا لجعل الكمبيوتر يكرر مهمة ما هي استخدام <strong>حلقة <code v-pre>for</code></strong>.</p>
<p>تحتاج حلقة <code v-pre>for</code> إلى ثلاث معلومات لكي تعمل:</p>
<ol>
<li><strong>من أين تبدأ</strong> (التهيئة - Initialization)</li>
<li><strong>متى تتوقف</strong> (شرط التوقف - Stopping condition)</li>
<li><strong>كيف تحسب</strong> (خطوة التكرار - Iteration step)</li>
</ol>
<p>توضع هذه المعلومات الثلاث داخل أقواس <code v-pre>()</code> ويُفصل بينها بفواصل منقوطة <code v-pre>;</code>.</p>
<p>إليك كيف يبدو التركيب (Syntax):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> counter <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> counter<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>إذا قمت بتشغيل هذا الكود، سيطبع الكمبيوتر:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">0</span>
<span class="line">1</span>
<span class="line">2</span>
<span class="line">3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="تفصيل-حلقة-for" tabindex="-1"><a class="header-anchor" href="#تفصيل-حلقة-for"><span>تفصيل حلقة <code v-pre>for</code></span></a></h2>
<p>دعونا نلقي نظرة فاحصة على الأجزاء الثلاثة الموجودة داخل الأقواس في مثالنا:</p>
<ol>
<li>
<p><code v-pre>let counter = 0;</code><br>
<strong>من أين تبدأ:</strong> نقوم بإنشاء متغير يسمى <code v-pre>counter</code> (العداد) ونضبطه على <code v-pre>0</code>. من هنا تبدأ حلقتنا.</p>
</li>
<li>
<p><code v-pre>counter &lt; 4;</code><br>
<strong>متى تتوقف:</strong> هذا شرط، تمامًا كما في العبارة <code v-pre>if</code>! ستستمر الحلقة في العمل <strong>طالما أن</strong> العداد أقل من 4. إذا وصل العداد إلى 4، تتوقف الحلقة على الفور.</p>
</li>
<li>
<p><code v-pre>counter++</code><br>
<strong>كيف تحسب:</strong> بعد انتهاء كل حلقة، نحتاج إلى زيادة عدادنا حتى لا تعمل الحلقة إلى الأبد. <code v-pre>counter++</code> تضيف ببساطة <code v-pre>1</code> إلى العداد بعد كل جولة.</p>
</li>
</ol>
<p>داخل الأقواس المتعرجة <code v-pre>{}</code> يوجد الكود الفعلي الذي نريد من الكمبيوتر تكراره. في هذه الحالة، طلبنا منه طباعة <code v-pre>console.log(counter)</code>، ولهذا السبب يطبع الأرقام 0 و 1 و 2 و 3!</p>
<h2 id="مثال-من-العالم-الواقعي" tabindex="-1"><a class="header-anchor" href="#مثال-من-العالم-الواقعي"><span>مثال من العالم الواقعي</span></a></h2>
<p>دعنا نستخدم حلقة <code v-pre>for</code> للعد التنازلي للأيام حتى عطلة نهاية الأسبوع:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> day <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> day<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">هذا هو اليوم </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> من أسبوع العمل.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'مرحى! إنها عطلة نهاية الأسبوع!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>سيكون الناتج:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">هذا هو اليوم 1 من أسبوع العمل.</span>
<span class="line">هذا هو اليوم 2 من أسبوع العمل.</span>
<span class="line">هذا هو اليوم 3 من أسبوع العمل.</span>
<span class="line">هذا هو اليوم 4 من أسبوع العمل.</span>
<span class="line">هذا هو اليوم 5 من أسبوع العمل.</span>
<span class="line">مرحى! إنها عطلة نهاية الأسبوع!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>الحلقات أدوات قوية بشكل لا يصدق ستستخدمها طوال الوقت أثناء تعلمك للبرمجة!</p>
</div></template>


