<template><div><h1 id="مقدمة-في-الكود-الزائف-pseudo-code" tabindex="-1"><a class="header-anchor" href="#مقدمة-في-الكود-الزائف-pseudo-code"><span>مقدمة في الكود الزائف (Pseudo Code)</span></a></h1>
<h2 id="ما-هي-الخوارزمية؟" tabindex="-1"><a class="header-anchor" href="#ما-هي-الخوارزمية؟"><span>ما هي الخوارزمية؟</span></a></h2>
<p>مرحبًا بك في عالم البرمجة! إذا لم يكن لديك أي خبرة في كتابة الأكواد، فأنت في المكان الصحيح.</p>
<p>قبل أن نكتب الكود لأجهزة الكمبيوتر، نحتاج إلى فهم كيفية حل المشكلات. <strong>الخوارزمية (Algorithm)</strong> هي ببساطة قائمة من التعليمات خطوة بخطوة تُستخدم لإكمال مهمة أو حل مشكلة.</p>
<p>فكر في وصفة لخبز كعكة:</p>
<ol>
<li>اجمع المكونات.</li>
<li>اخلط الدقيق والسكر.</li>
<li>اخبز في الفرن لمدة 30 دقيقة.</li>
</ol>
<p>إذا اتبعت الخوارزمية تمامًا، ستحصل على كعكة! تعمل أجهزة الكمبيوتر بنفس الطريقة تمامًا. إنها سريعة بشكل لا يصدق، لكنها ليست ذكية. إنها تحتاج <em>منك</em> أن تعطيها تعليمات دقيقة وخطوة بخطوة.</p>
<h2 id="ما-هو-الكود-الزائف-pseudo-code-؟" tabindex="-1"><a class="header-anchor" href="#ما-هو-الكود-الزائف-pseudo-code-؟"><span>ما هو الكود الزائف (Pseudo Code)؟</span></a></h2>
<p><strong>الكود الزائف</strong> (أو الكود الوهمي) هو طريقة لتدوين الخوارزميات باستخدام لغة بشرية بسيطة ممزوجة ببعض القواعد الهيكلية البسيطة.</p>
<p>لماذا نستخدمه؟</p>
<ul>
<li>إنه يتجاهل القواعد النحوية الصارمة (مثل نسيان فاصلة منقوطة <code v-pre>;</code>).</li>
<li>يساعدك على التركيز على <strong>المنطق</strong> و <strong>حل المشكلات</strong>.</li>
<li>بمجرد أن يعمل الكود الزائف الخاص بك، يمكن ترجمته بسهولة إلى <em>أي</em> لغة برمجة حقيقية (مثل بايثون، جافا سكريبت، أو C).</li>
</ul>
<h2 id="المخرجات-عرض-المعلومات" tabindex="-1"><a class="header-anchor" href="#المخرجات-عرض-المعلومات"><span>المخرجات: عرض المعلومات</span></a></h2>
<p>عندما تعمل خوارزمية، غالبًا ما نريد منها أن تظهر لنا نتيجة. في الكود الزائف، نستخدم كلمة <code v-pre>PRINT</code> لنخبر الكمبيوتر بإظهار رسالة على الشاشة.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">PRINT &quot;مرحباً بالعالم!&quot;</span>
<span class="line">PRINT 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>عندما يقرأ الكمبيوتر الخوارزمية أعلاه، سيُظهر الكلمات <code v-pre>مرحباً بالعالم!</code> متبوعة بالرقم <code v-pre>5</code> على الشاشة.</p>
<h2 id="أنواع-البيانات-أنواع-المعلومات" tabindex="-1"><a class="header-anchor" href="#أنواع-البيانات-أنواع-المعلومات"><span>أنواع البيانات: أنواع المعلومات</span></a></h2>
<p>في الحياة الواقعية، نتعامل مع أنواع مختلفة من المعلومات: كلمات، أرقام، وإجابات نعم/لا. البرمجة تعمل بنفس الطريقة تمامًا!</p>
<p>نصنف المعلومات إلى <strong>أنواع بيانات (Data Types)</strong> مختلفة. إليك الأنواع الأساسية:</p>
<ul>
<li><strong>الرقم (Number)</strong>: أي رقم، بكسور عشرية أو بدونها. مثال: <code v-pre>4</code>، <code v-pre>15</code>، <code v-pre>23.42</code>.</li>
<li><strong>السلسلة النصية (String)</strong>: أي نص، مثل الحروف، الكلمات، أو الجمل. يجب أن تضع النصوص بين علامتي اقتباس حتى يعرف الكمبيوتر أنه نص. مثال: <code v-pre>&quot;مرحباً&quot;</code>، <code v-pre>&quot;أنا أحب البرمجة&quot;</code>.</li>
<li><strong>المنطقية (Boolean)</strong>: هذا مفتاح بسيط لـ &quot;التشغيل&quot; أو &quot;الإيقاف&quot;. يحتوي فقط على قيمتين محتملتين: <code v-pre>TRUE</code> (نعم/صحيح) أو <code v-pre>FALSE</code> (لا/خطأ).</li>
</ul>
<h2 id="الرياضيات-في-الكود-الزائف" tabindex="-1"><a class="header-anchor" href="#الرياضيات-في-الكود-الزائف"><span>الرياضيات في الكود الزائف</span></a></h2>
<p>أجهزة الكمبيوتر هي في الأساس آلات حاسبة عملاقة. يمكنك القيام بالعمليات الحسابية في الكود الزائف باستخدام رموز بسيطة:</p>
<ul>
<li>جمع: <code v-pre>+</code></li>
<li>طرح: <code v-pre>-</code></li>
<li>ضرب: <code v-pre>*</code></li>
<li>قسمة: <code v-pre>/</code></li>
</ul>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">PRINT 3 + 4   // يطبع 7</span>
<span class="line">PRINT 5 - 1   // يطبع 4</span>
<span class="line">PRINT 4 * 2   // يطبع 8</span>
<span class="line">PRINT 9 / 3   // يطبع 3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="مراجعة" tabindex="-1"><a class="header-anchor" href="#مراجعة"><span>مراجعة</span></a></h2>
<p>دعنا نلخص ما تعلمته:</p>
<ul>
<li><strong>الخوارزمية</strong> هي قائمة تعليمات خطوة بخطوة لحل مشكلة.</li>
<li><strong>الكود الزائف</strong> هو طريقة لكتابة الخوارزميات بلغة بسيطة للتركيز على المنطق بدلاً من النحو الصارم.</li>
<li>استخدم <code v-pre>PRINT</code> لعرض الرسائل أو النتائج.</li>
<li><strong>أنواع البيانات</strong> الأساسية هي الأرقام، النصوص (بين علامات اقتباس)، والقيم المنطقية (<code v-pre>TRUE</code> أو <code v-pre>FALSE</code>).</li>
<li>يمكنك القيام بالعمليات الحسابية باستخدام المعاملات القياسية مثل <code v-pre>+</code>، <code v-pre>-</code>، <code v-pre>*</code>، و <code v-pre>/</code>.</li>
</ul>
</div></template>


