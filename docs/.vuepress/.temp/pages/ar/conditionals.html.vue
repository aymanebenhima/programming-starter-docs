<template><div><h1 id="الشروط-اتخاذ-القرارات" tabindex="-1"><a class="header-anchor" href="#الشروط-اتخاذ-القرارات"><span>الشروط: اتخاذ القرارات</span></a></h1>
<h2 id="كيف-تتخذ-أجهزة-الكمبيوتر-القرارات" tabindex="-1"><a class="header-anchor" href="#كيف-تتخذ-أجهزة-الكمبيوتر-القرارات"><span>كيف تتخذ أجهزة الكمبيوتر القرارات</span></a></h2>
<p>في الحياة اليومية، تتخذ قرارات طوال الوقت بناءً على الموقف.</p>
<ul>
<li><strong>إذا (If)</strong> كانت تمطر، <strong>إذن</strong> سآخذ مظلة.</li>
<li><strong>وإلا (Else)</strong>، سأرتدي نظارة شمسية.</li>
</ul>
<p>يمكننا تعليم أجهزة الكمبيوتر اتخاذ هذه الأنواع من القرارات! في البرمجة، نسمي هذه <strong>العبارات الشرطية (Conditional Statements)</strong>. إنها تتحقق مما إذا كان شرط معين صحيحًا، ثم تقوم بمهمة بناءً على النتيجة.</p>
<h2 id="العبارة-if" tabindex="-1"><a class="header-anchor" href="#العبارة-if"><span>العبارة <code v-pre>if</code></span></a></h2>
<p>أبسط طريقة لاتخاذ قرار في الكود هي باستخدام العبارة <code v-pre>if</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> itIsRaining <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>itIsRaining<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'خذ مظلة!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>إليك كيفية بناء العبارة <code v-pre>if</code>:</p>
<ol>
<li>تبدأ بالكلمة <code v-pre>if</code>.</li>
<li>بعد ذلك تأتي الأقواس <code v-pre>()</code>. بداخلها يوضع <strong>الشرط</strong> (سؤال إجابته نعم/لا أو صحيح/خطأ).</li>
<li>أخيرًا، هناك أقواس متعرجة <code v-pre>{}</code>. بداخل هذه الأقواس يوضع الكود الذي سيعمل <strong>فقط إذا</strong> كان الشرط <code v-pre>true</code> (صحيحًا).</li>
</ol>
<p>إذا كان <code v-pre>itIsRaining</code> يساوي <code v-pre>false</code> (خطأ)، سيتخطى الكمبيوتر ببساطة الكود الموجود داخل الأقواس المتعرجة ولن يطبع أي شيء!</p>
<h2 id="العبارة-if-else" tabindex="-1"><a class="header-anchor" href="#العبارة-if-else"><span>العبارة <code v-pre>if...else</code></span></a></h2>
<p>ماذا لو أردنا أن يقوم الكمبيوتر بشيء آخر عندما يكون الشرط <code v-pre>false</code>؟ يمكننا إضافة عبارة <code v-pre>else</code> (وإلا)!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> itIsRaining <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>itIsRaining<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'خذ مظلة!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ارتدِ نظارة شمسية!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>الآن، إذا كان الشرط <code v-pre>false</code>، يتخطى الكمبيوتر الكتلة الأولى من الكود ويشغل الكود الموجود داخل كتلة <code v-pre>else</code> بدلاً من ذلك. في هذه الحالة، سيطبع: <code v-pre>ارتدِ نظارة شمسية!</code>.</p>
<h2 id="طرح-الأسئلة-معاملات-المقارنة-comparison-operators" tabindex="-1"><a class="header-anchor" href="#طرح-الأسئلة-معاملات-المقارنة-comparison-operators"><span>طرح الأسئلة: معاملات المقارنة (Comparison Operators)</span></a></h2>
<p>عادةً، لا تكون شروطنا مجرد متغير بسيط <code v-pre>true</code> أو <code v-pre>false</code>. نحن نريد مقارنة الأشياء. على سبيل المثال: &quot;هل نتيجة اللاعب أعلى من 100؟&quot;</p>
<p>لطرح هذه الأسئلة، نستخدم <strong>معاملات المقارنة</strong>:</p>
<ul>
<li>أصغر من: <code v-pre>&lt;</code></li>
<li>أكبر من: <code v-pre>&gt;</code></li>
<li>أصغر من أو يساوي: <code v-pre>&lt;=</code></li>
<li>أكبر من أو يساوي: <code v-pre>&gt;=</code></li>
<li>يساوي تماماً: <code v-pre>===</code></li>
<li>لا يساوي: <code v-pre>!==</code></li>
</ul>
<p><em>لاحظ أن &quot;يساوي&quot; تستخدم ثلاث علامات يساوي <code v-pre>===</code>. تذكر أن علامة اليساوي الواحدة <code v-pre>=</code> تُستخدم فقط لوضع البيانات في صندوق المتغير!</em></p>
<p>دعنا نرى هذا عمليًا:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> hungerLevel <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>hungerLevel <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'حان وقت الأكل!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'يمكننا أن نأكل لاحقاً!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>نظرًا لأن 8 أكبر من 7، سيطبع هذا الكود: <code v-pre>حان وقت الأكل!</code>.</p>
<h2 id="قرارات-متعددة-else-if" tabindex="-1"><a class="header-anchor" href="#قرارات-متعددة-else-if"><span>قرارات متعددة: <code v-pre>else if</code></span></a></h2>
<p>أحيانًا لا تكون الحياة مجرد A أو B. قد يكون هناك C و D و E!</p>
<p>إذا كان لدينا أكثر من نتيجتين محتملتين، يمكننا استخدام العبارات <code v-pre>else if</code> لربط القرارات معًا.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> stopLight <span class="token operator">=</span> <span class="token string">'أصفر'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>stopLight <span class="token operator">===</span> <span class="token string">'أحمر'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'توقف!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stopLight <span class="token operator">===</span> <span class="token string">'أصفر'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'تمهل!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stopLight <span class="token operator">===</span> <span class="token string">'أخضر'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'انطلق!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'احذر، إشارة غير معروفة!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>يقرأ الكمبيوتر من أعلى إلى أسفل. يتحقق من الشرط الأول (<code v-pre>'أحمر'</code>). وبما أنه خطأ، ينتقل إلى الشرط التالي (<code v-pre>'أصفر'</code>). وبما أن هذا صحيح، فإنه يشغل تلك الكتلة من الكود ويتجاهل الباقي تمامًا!</p>
<h2 id="التحقق-من-أشياء-متعددة-في-وقت-واحد-المعاملات-المنطقية" tabindex="-1"><a class="header-anchor" href="#التحقق-من-أشياء-متعددة-في-وقت-واحد-المعاملات-المنطقية"><span>التحقق من أشياء متعددة في وقت واحد (المعاملات المنطقية)</span></a></h2>
<p>ماذا لو أردت الذهاب إلى الحديقة، ولكن <strong>فقط إذا</strong> كان الجو مشمسًا <strong>و</strong> كانت عطلة نهاية الأسبوع؟</p>
<p>يمكننا استخدام <strong>المعاملات المنطقية (Logical Operators)</strong> لدمج الشروط:</p>
<ul>
<li><strong>و (AND)</strong> (<code v-pre>&amp;&amp;</code>): يجب أن يكون كلا الشرطين صحيحين.</li>
<li><strong>أو (OR)</strong> (<code v-pre>||</code>): يكفي أن يكون أحد الشرطين صحيحًا.</li>
</ul>
<p>استخدام و (<code v-pre>&amp;&amp;</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> isSunny <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> isWeekend <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>isSunny <span class="token operator">&amp;&amp;</span> isWeekend<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'دعنا نذهب إلى الحديقة!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>استخدام أو (<code v-pre>||</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token string">'السبت'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>day <span class="token operator">===</span> <span class="token string">'السبت'</span> <span class="token operator">||</span> day <span class="token operator">===</span> <span class="token string">'الأحد'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'استمتع بعطلة نهاية الأسبوع!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="مراجعة" tabindex="-1"><a class="header-anchor" href="#مراجعة"><span>مراجعة</span></a></h2>
<p>دعنا نراجع الشروط:</p>
<ul>
<li><strong><code v-pre>if</code></strong> تتحقق من شرط وتُشغل كتلة من الكود إذا كان الشرط <code v-pre>true</code>.</li>
<li><strong><code v-pre>else</code></strong> توفر خطة بديلة افتراضية إذا كان الشرط <code v-pre>false</code>.</li>
<li><strong><code v-pre>else if</code></strong> تتيح لك التحقق من عدة شروط مختلفة على التوالي.</li>
<li><strong>معاملات المقارنة</strong> (مثل <code v-pre>&gt;</code>، <code v-pre>&lt;</code>، <code v-pre>===</code>) تساعدك في مقارنة القيم.</li>
<li><strong>المعاملات المنطقية</strong> (<code v-pre>&amp;&amp;</code> لـ و، <code v-pre>||</code> لـ أو) تتيح لك دمج عدة شروط معًا.</li>
</ul>
</div></template>


