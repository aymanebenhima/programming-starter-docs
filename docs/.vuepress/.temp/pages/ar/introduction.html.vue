<template><div><h1 id="مقدمة-في-جافا-سكريبت" tabindex="-1"><a class="header-anchor" href="#مقدمة-في-جافا-سكريبت"><span>مقدمة في جافا سكريبت</span></a></h1>
<h2 id="ما-هي-جافا-سكريبت؟" tabindex="-1"><a class="header-anchor" href="#ما-هي-جافا-سكريبت؟"><span>ما هي جافا سكريبت؟</span></a></h2>
<p>مرحبًا بك في عالم البرمجة! إذا لم يكن لديك أي خبرة سابقة في كتابة الأكواد، فأنت في المكان الصحيح.</p>
<p>تخيل أن موقع الويب يشبه المنزل:</p>
<ul>
<li><strong>HTML</strong> هو الهيكل (الجدران والغرف).</li>
<li><strong>CSS</strong> هو التصميم (الطلاء والديكور).</li>
<li><strong>JavaScript</strong> هي الكهرباء والسباكة. إنها تجعل المنزل &quot;حيًا&quot; وتفاعليًا!</li>
</ul>
<p>جافا سكريبت هي لغة قوية تستخدمها معظم متصفحات الويب الحديثة. تسمح لك بإنشاء إجراءات ديناميكية على مواقع الويب، مثل النقر فوق زر لإظهار نافذة منبثقة، أو تحريك الصور، أو التحقق مما إذا كانت كلمة المرور صحيحة.</p>
<h2 id="وحدة-التحكم-console-أداة-المطور-الخاصة-بك" tabindex="-1"><a class="header-anchor" href="#وحدة-التحكم-console-أداة-المطور-الخاصة-بك"><span>وحدة التحكم (Console): أداة المطور الخاصة بك</span></a></h2>
<p>عندما تكتب الكود، يكون الكثير من العمل الذي يقوم به الكمبيوتر غير مرئي. ولكن ماذا لو أردت رؤية ما يفعله الكمبيوتر؟</p>
<p>هنا يأتي دور <strong>وحدة التحكم (Console)</strong>! وحدة التحكم عبارة عن لوحة مخفية في متصفح الويب الخاص بك يستخدمها المطورون لرؤية الرسائل والتحقق من الأخطاء.</p>
<p>في جافا سكريبت، نستخدم أمرًا يسمى <code v-pre>console.log()</code> لطباعة الرسائل في هذه اللوحة المخفية. أي شيء تضعه بين الأقواس <code v-pre>()</code> سيظهر على الشاشة.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// هذا سيطبع الرقم 5 في وحدة التحكم</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// هذا سيطبع رسالة ترحيب</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'مرحباً بالعالم!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>ملاحظة: قد تلاحظ الفاصلة المنقوطة <code v-pre>;</code> في النهاية. فكر فيها كالنقطة في نهاية الجملة. إنها تخبر الكمبيوتر أن تعليماتك قد انتهت!</em></p>
<h2 id="التعليقات-comments-ملاحظات-للبشر" tabindex="-1"><a class="header-anchor" href="#التعليقات-comments-ملاحظات-للبشر"><span>التعليقات (Comments): ملاحظات للبشر</span></a></h2>
<p>في بعض الأحيان، قد ترغب في ترك ملاحظة في الكود الخاص بك لنفسك أو لأشخاص آخرين، لكنك لا تريد أن يقرأها الكمبيوتر. تُسمى هذه الملاحظات <strong>التعليقات</strong>. يتجاهلها الكمبيوتر تمامًا!</p>
<p>هناك طريقتان لكتابة التعليقات:</p>
<p><strong>1. تعليق على سطر واحد:</strong> استخدم شرطتين مائلتين <code v-pre>//</code>. يتم تجاهل كل شيء بعدهما في ذلك السطر.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// هذه ملاحظة لي. لن يقرأ الكمبيوتر هذا!</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. تعليق متعدد الأسطر:</strong> استخدم <code v-pre>/*</code> للبدء و <code v-pre>*/</code> للإنهاء. هذا رائع للملاحظات الطويلة.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line">  هذه ملاحظة طويلة.</span>
<span class="line">  يمكن أن تأخذ أسطر متعددة.</span>
<span class="line">  لن ينفذ الكمبيوتر أيًا من هذا!</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="أنواع-البيانات-data-types-أنواع-المعلومات" tabindex="-1"><a class="header-anchor" href="#أنواع-البيانات-data-types-أنواع-المعلومات"><span>أنواع البيانات (Data Types): أنواع المعلومات</span></a></h2>
<p>في الحياة الواقعية، نتعامل مع أنواع مختلفة من المعلومات: كلمات، أرقام، وإجابات نعم/لا. البرمجة تعمل بنفس الطريقة تمامًا!</p>
<p>في جافا سكريبت، نصنف المعلومات إلى <strong>أنواع بيانات</strong> مختلفة. إليك الأنواع الأساسية والمهمة للمبتدئين:</p>
<ul>
<li><strong>الرقم (Number)</strong>: أي رقم، بكسور عشرية أو بدونها. مثال: <code v-pre>4</code>، <code v-pre>15</code>، <code v-pre>23.42</code>.</li>
<li><strong>السلسلة النصية (String)</strong>: أي نص، مثل الحروف، الكلمات، أو الجمل. يجب أن تضع النصوص بين علامتي اقتباس حتى يعرف الكمبيوتر أنه نص. مثال: <code v-pre>'مرحباً'</code>، <code v-pre>&quot;أنا أحب البرمجة&quot;</code>.</li>
<li><strong>المنطقية (Boolean)</strong>: هذا مفتاح بسيط لـ &quot;التشغيل&quot; أو &quot;الإيقاف&quot;. يحتوي فقط على قيمتين محتملتين: <code v-pre>true</code> (نعم/صحيح) أو <code v-pre>false</code> (لا/خطأ). لا تستخدم علامات الاقتباس للقيم المنطقية!</li>
<li><strong>فارغ (Null)</strong>: هذا يعني ببساطة &quot;لا شيء&quot; أو &quot;فارغ&quot; عن قصد.</li>
<li><strong>غير محدد (Undefined)</strong>: هذا يعني أنه لم يتم تعيين قيمة بعد. الكمبيوتر يعرف أن هناك شيئًا موجودًا، لكنه لا يعرف ما هو.</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'هذه سلسلة نصية لأن بها علامات اقتباس!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// هذا رقم. لا توجد علامات اقتباس!</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// هذه قيمة منطقية.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="الرياضيات-في-الكود-المعاملات-الحسابية" tabindex="-1"><a class="header-anchor" href="#الرياضيات-في-الكود-المعاملات-الحسابية"><span>الرياضيات في الكود (المعاملات الحسابية)</span></a></h2>
<p>أجهزة الكمبيوتر هي في الأساس آلات حاسبة عملاقة. يمكنك القيام بالعمليات الحسابية في جافا سكريبت باستخدام رموز بسيطة تُسمى <strong>المعاملات (Operators)</strong>:</p>
<ul>
<li>جمع: <code v-pre>+</code></li>
<li>طرح: <code v-pre>-</code></li>
<li>ضرب: <code v-pre>*</code></li>
<li>قسمة: <code v-pre>/</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع 7</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع 4</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع 8</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="دمج-الكلمات-معًا-string-concatenation" tabindex="-1"><a class="header-anchor" href="#دمج-الكلمات-معًا-string-concatenation"><span>دمج الكلمات معًا (String Concatenation)</span></a></h2>
<p>الرمز <code v-pre>+</code> ليس للرياضيات فقط! إذا استخدمت <code v-pre>+</code> مع <strong>النصوص (Strings)</strong>، فإنه يدمج الكلمات معًا. يُسمى هذا <strong>الدمج (Concatenation)</strong>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'مر'</span> <span class="token operator">+</span> <span class="token string">'حباً'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع 'مرحباً'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'أنا أحب '</span> <span class="token operator">+</span> <span class="token string">'البرمجة.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع 'أنا أحب البرمجة.'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>لاحظ المسافة بعد كلمة &quot;أحب &quot;. الكمبيوتر يدمج النص تمامًا كما تكتبه، لذا إذا كنت تريد مسافة بين الكلمات، يجب عليك كتابتها داخل علامات الاقتباس!</p>
<h2 id="مراجعة" tabindex="-1"><a class="header-anchor" href="#مراجعة"><span>مراجعة</span></a></h2>
<p>دعنا نلخص ما تعلمته:</p>
<ul>
<li><strong>جافا سكريبت</strong> تجعل مواقع الويب تفاعلية.</li>
<li>استخدم <code v-pre>console.log()</code> لطباعة الرسائل ورؤية ما يفعله الكود الخاص بك.</li>
<li>اكتب <strong>التعليقات</strong> باستخدام <code v-pre>//</code> أو <code v-pre>/* ... */</code> لترك ملاحظات يتجاهلها الكمبيوتر.</li>
<li><strong>أنواع البيانات</strong> الأساسية هي الأرقام، النصوص (بين علامات اقتباس)، والقيم المنطقية (<code v-pre>true</code> أو <code v-pre>false</code>).</li>
<li>يمكنك القيام بالعمليات الحسابية باستخدام <code v-pre>+</code>، <code v-pre>-</code>، <code v-pre>*</code>، و <code v-pre>/</code>.</li>
<li>يمكنك دمج النصوص معًا باستخدام الرمز <code v-pre>+</code>.</li>
</ul>
</div></template>


