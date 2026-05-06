<template><div><h1 id="الشروط-اتخاذ-القرارات" tabindex="-1"><a class="header-anchor" href="#الشروط-اتخاذ-القرارات"><span>الشروط: اتخاذ القرارات</span></a></h1>
<h2 id="كيف-تتخذ-أجهزة-الكمبيوتر-القرارات" tabindex="-1"><a class="header-anchor" href="#كيف-تتخذ-أجهزة-الكمبيوتر-القرارات"><span>كيف تتخذ أجهزة الكمبيوتر القرارات</span></a></h2>
<p>في الحياة اليومية، تتخذ قرارات طوال الوقت بناءً على الموقف.</p>
<ul>
<li><strong>إذا (If)</strong> كانت تمطر، <strong>إذن</strong> سآخذ مظلة.</li>
<li><strong>وإلا (Else)</strong>، سأرتدي نظارة شمسية.</li>
</ul>
<p>يمكننا تعليم أجهزة الكمبيوتر اتخاذ هذه الأنواع من القرارات! في الكود الزائف، نسمي هذه <strong>العبارات الشرطية (Conditional Statements)</strong>. إنها تتحقق مما إذا كان شرط معين صحيحًا، ثم تقوم بمهمة بناءً على النتيجة.</p>
<h2 id="العبارة-if-then" tabindex="-1"><a class="header-anchor" href="#العبارة-if-then"><span>العبارة <code v-pre>IF ... THEN</code></span></a></h2>
<p>أبسط طريقة لاتخاذ قرار هي باستخدام عبارة <code v-pre>IF</code>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET is_raining TO TRUE</span>
<span class="line"></span>
<span class="line">IF is_raining EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;خذ مظلة!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>إليك كيفية بناء هذه العبارة:</p>
<ol>
<li>تبدأ بكلمة <code v-pre>IF</code> (إذا).</li>
<li>بعد ذلك يأتي <strong>الشرط</strong> (<code v-pre>is_raining EQUALS TRUE</code>). هذا سؤال إجابته نعم/لا.</li>
<li>ثم تأتي كلمة <code v-pre>THEN</code> (إذن). ستعمل التعليمات الموجودة بالداخل <strong>فقط إذا</strong> كان الشرط صحيحًا.</li>
<li>ننهي الكتلة بـ <code v-pre>END IF</code> ليعرف الكمبيوتر أين ينتهي القرار.</li>
</ol>
<p>إذا كان <code v-pre>is_raining</code> هو <code v-pre>FALSE</code>، سيتخطى الكمبيوتر ببساطة الكود الموجود بالداخل ولن يطبع أي شيء!</p>
<h2 id="العبارة-if-then-else" tabindex="-1"><a class="header-anchor" href="#العبارة-if-then-else"><span>العبارة <code v-pre>IF ... THEN ... ELSE</code></span></a></h2>
<p>ماذا لو أردنا أن يقوم الكمبيوتر بشيء آخر عندما يكون الشرط خاطئًا؟ يمكننا إضافة عبارة <code v-pre>ELSE</code> (وإلا)!</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET is_raining TO FALSE</span>
<span class="line"></span>
<span class="line">IF is_raining EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;خذ مظلة!&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;ارتدِ نظارة شمسية!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>الآن، إذا كان الشرط خاطئًا، يتخطى الكمبيوتر الكتلة الأولى ويشغل الكود الموجود داخل كتلة <code v-pre>ELSE</code> بدلاً من ذلك. في هذه الحالة، سيطبع: <code v-pre>ارتدِ نظارة شمسية!</code>.</p>
<h2 id="طرح-الأسئلة-معاملات-المقارنة" tabindex="-1"><a class="header-anchor" href="#طرح-الأسئلة-معاملات-المقارنة"><span>طرح الأسئلة: معاملات المقارنة</span></a></h2>
<p>عادةً، لا تكون شروطنا مجرد متغير بسيط <code v-pre>TRUE</code> أو <code v-pre>FALSE</code>. نحن نريد مقارنة الأشياء. على سبيل المثال: &quot;هل نتيجة اللاعب أعلى من 100؟&quot;</p>
<p>لطرح هذه الأسئلة، نستخدم <strong>معاملات المقارنة (Comparison Operators)</strong>:</p>
<ul>
<li><code v-pre>&lt;</code> : أصغر من</li>
<li><code v-pre>&gt;</code> : أكبر من</li>
<li><code v-pre>&lt;=</code> : أصغر من أو يساوي</li>
<li><code v-pre>&gt;=</code> : أكبر من أو يساوي</li>
<li><code v-pre>EQUALS</code> (أو <code v-pre>==</code>) : يساوي تماماً</li>
<li><code v-pre>NOT EQUALS</code> (أو <code v-pre>!=</code>) : لا يساوي</li>
</ul>
<p>دعنا نرى هذا عمليًا:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET hunger_level TO 8</span>
<span class="line"></span>
<span class="line">IF hunger_level &gt; 7 THEN</span>
<span class="line">  PRINT &quot;حان وقت الأكل!&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;يمكننا أن نأكل لاحقاً!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>نظرًا لأن 8 أكبر من 7، سيطبع هذا الكود: <code v-pre>حان وقت الأكل!</code>.</p>
<h2 id="قرارات-متعددة-else-if" tabindex="-1"><a class="header-anchor" href="#قرارات-متعددة-else-if"><span>قرارات متعددة: <code v-pre>ELSE IF</code></span></a></h2>
<p>أحيانًا لا تكون الحياة مجرد أبيض أو أسود. قد تكون هناك خيارات متعددة!</p>
<p>إذا كان لدينا أكثر من نتيجتين محتملتين، يمكننا ربط القرارات معًا باستخدام <code v-pre>ELSE IF</code>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET stop_light TO &quot;yellow&quot;</span>
<span class="line"></span>
<span class="line">IF stop_light EQUALS &quot;red&quot; THEN</span>
<span class="line">  PRINT &quot;توقف!&quot;</span>
<span class="line">ELSE IF stop_light EQUALS &quot;yellow&quot; THEN</span>
<span class="line">  PRINT &quot;تمهل!&quot;</span>
<span class="line">ELSE IF stop_light EQUALS &quot;green&quot; THEN</span>
<span class="line">  PRINT &quot;انطلق!&quot;</span>
<span class="line">ELSE</span>
<span class="line">  PRINT &quot;احذر، إشارة غير معروفة!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>يقرأ الكمبيوتر من أعلى إلى أسفل. يتحقق من الشرط الأول (<code v-pre>&quot;red&quot;</code>). وبما أنه خطأ، ينتقل إلى الشرط التالي (<code v-pre>&quot;yellow&quot;</code>). وبما أن هذا صحيح، فإنه يشغل تلك الكتلة من الكود ويتجاهل الباقي تمامًا!</p>
<h2 id="التحقق-من-أشياء-متعددة-في-وقت-واحد-المعاملات-المنطقية" tabindex="-1"><a class="header-anchor" href="#التحقق-من-أشياء-متعددة-في-وقت-واحد-المعاملات-المنطقية"><span>التحقق من أشياء متعددة في وقت واحد (المعاملات المنطقية)</span></a></h2>
<p>ماذا لو أردت الذهاب إلى الحديقة، ولكن <strong>فقط إذا</strong> كان الجو مشمسًا <strong>و</strong> كانت عطلة نهاية الأسبوع؟</p>
<p>يمكننا استخدام <strong>المعاملات المنطقية (Logical Operators)</strong> لدمج الشروط:</p>
<ul>
<li><strong>AND (و)</strong> : يجب أن يكون كلا الشرطين صحيحين.</li>
<li><strong>OR (أو)</strong> : يكفي أن يكون أحد الشرطين صحيحًا.</li>
</ul>
<p>استخدام <code v-pre>AND</code>:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET is_sunny TO TRUE</span>
<span class="line">SET is_weekend TO TRUE</span>
<span class="line"></span>
<span class="line">IF is_sunny EQUALS TRUE AND is_weekend EQUALS TRUE THEN</span>
<span class="line">  PRINT &quot;دعنا نذهب إلى الحديقة!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>استخدام <code v-pre>OR</code>:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET day TO &quot;Saturday&quot;</span>
<span class="line"></span>
<span class="line">IF day EQUALS &quot;Saturday&quot; OR day EQUALS &quot;Sunday&quot; THEN</span>
<span class="line">  PRINT &quot;استمتع بعطلة نهاية الأسبوع!&quot;</span>
<span class="line">END IF</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="مراجعة" tabindex="-1"><a class="header-anchor" href="#مراجعة"><span>مراجعة</span></a></h2>
<p>دعنا نراجع الشروط:</p>
<ul>
<li><strong><code v-pre>IF ... THEN</code></strong> تتحقق من شرط وتُشغل كتلة من الكود إذا كان الشرط صحيحًا.</li>
<li><strong><code v-pre>ELSE</code></strong> توفر خطة بديلة افتراضية إذا كان الشرط خاطئًا.</li>
<li><strong><code v-pre>ELSE IF</code></strong> تتيح لك التحقق من عدة شروط مختلفة على التوالي.</li>
<li><strong>معاملات المقارنة</strong> (مثل <code v-pre>&gt;</code>، <code v-pre>&lt;</code>) تساعدك في مقارنة القيم.</li>
<li><strong>المعاملات المنطقية</strong> (<code v-pre>AND</code>، <code v-pre>OR</code>) تتيح لك دمج عدة شروط معًا.</li>
</ul>
</div></template>


