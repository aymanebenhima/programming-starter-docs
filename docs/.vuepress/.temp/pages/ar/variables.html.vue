<template><div><h1 id="المتغيرات-صناديقك-الرقمية" tabindex="-1"><a class="header-anchor" href="#المتغيرات-صناديقك-الرقمية"><span>المتغيرات: صناديقك الرقمية</span></a></h1>
<h2 id="ما-هو-المتغير؟" tabindex="-1"><a class="header-anchor" href="#ما-هو-المتغير؟"><span>ما هو المتغير؟</span></a></h2>
<p>تخيل أنك تحزم أمتعتك للانتقال إلى منزل جديد. تضع كتبك في صندوق وتكتب كلمة &quot;كتب&quot; في الخارج. لاحقًا، عندما تحتاج إلى كتاب، لن تبحث في كل مكان — بل ستعثر ببساطة على الصندوق المكتوب عليه &quot;كتب&quot;.</p>
<p>في البرمجة، <strong>المتغير (Variable)</strong> هو بالضبط هذا: صندوق يحمل ملصقاً حيث نقوم بتخزين المعلومات (البيانات) داخل ذاكرة الكمبيوتر. نعطي الصندوق اسمًا حتى نتمكن بسهولة من العثور على تلك المعلومات واستخدامها لاحقًا!</p>
<p>تتيح لنا المتغيرات تخزين أشياء مثل اسم المستخدم، أو أعلى نتيجة في لعبة، أو كلمة مرور سرية.</p>
<h2 id="إنشاء-واستخدام-متغير" tabindex="-1"><a class="header-anchor" href="#إنشاء-واستخدام-متغير"><span>إنشاء واستخدام متغير</span></a></h2>
<p>لإنشاء صندوق جديد (متغير) ووضع شيء بداخله، نستخدم الكلمة <code v-pre>SET</code> في الكود الزائف.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET my_name TO &quot;Arya&quot;</span>
<span class="line">PRINT my_name</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><em>(هذا سيطبع: Arya)</em></p>
<p>دعنا نوضح ما حدث للتو:</p>
<ol>
<li><code v-pre>SET</code> تخبر الكمبيوتر أننا نقوم بإنشاء أو تحديث متغير.</li>
<li><code v-pre>my_name</code> هو الملصق الذي كتبناه على صندوقنا.</li>
<li><code v-pre>TO</code> تخبر الكمبيوتر بوضع البيانات في الصندوق.</li>
<li><code v-pre>&quot;Arya&quot;</code> هي البيانات (سلسلة نصية) التي قمنا بتخزينها بالداخل.</li>
</ol>
<p>أفضل جزء في المتغيرات هو أنها يمكن أن &quot;تتغير&quot;! يمكنك تغيير ما بداخل الصندوق لاحقًا:</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET favorite_food TO &quot;بيتزا&quot;</span>
<span class="line">PRINT favorite_food </span>
<span class="line">// يطبع: بيتزا</span>
<span class="line"></span>
<span class="line">// لاحقاً، نغير رأينا!</span>
<span class="line">SET favorite_food TO &quot;تاكو&quot;</span>
<span class="line">PRINT favorite_food </span>
<span class="line">// يطبع: تاكو</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="الثوابت-constants" tabindex="-1"><a class="header-anchor" href="#الثوابت-constants"><span>الثوابت (Constants)</span></a></h2>
<p>أحيانًا، ترغب في تخزين معلومات لا ينبغي أن تتغير <strong>أبدًا</strong>. على سبيل المثال، تاريخ ميلادك أو قيمة باي (Pi).</p>
<p>بالنسبة للأشياء التي يجب أن تظل ثابتة، يمكننا تحديد أن الصندوق مقفل باستخدام <code v-pre>CONSTANT</code>.</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">CONSTANT birth_year TO 1995</span>
<span class="line">PRINT birth_year</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>إذا حاولت تغيير <code v-pre>CONSTANT</code>، ستفشل الخوارزمية لأن البيانات محمية.</p>
<h2 id="المتغيرات-والرياضيات" tabindex="-1"><a class="header-anchor" href="#المتغيرات-والرياضيات"><span>المتغيرات والرياضيات</span></a></h2>
<p>بما أن المتغيرات هي مجرد صناديق تحتوي على بيانات، فإذا كانت تحتوي على أرقام، يمكننا إجراء العمليات الحسابية معها!</p>
<div class="language-pseudo line-numbers-mode" data-highlighter="prismjs" data-ext="pseudo"><pre v-pre><code><span class="line">SET score TO 10</span>
<span class="line">SET score TO score + 5 </span>
<span class="line"></span>
<span class="line">PRINT score </span>
<span class="line">// يطبع: 15</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>نحن نخبر الكمبيوتر: &quot;خذ أيًا كان الموجود حاليًا داخل صندوق <code v-pre>score</code> (وهو 10)، أضف إليه 5، وضع النتيجة الجديدة (15) مرة أخرى في صندوق <code v-pre>score</code>!&quot;</p>
<h2 id="مراجعة-المتغيرات" tabindex="-1"><a class="header-anchor" href="#مراجعة-المتغيرات"><span>مراجعة المتغيرات</span></a></h2>
<p>دعنا نراجع ما تعلمناه:</p>
<ul>
<li><strong>المتغيرات (Variables)</strong> هي صناديق بأسماء تُستخدم لتخزين البيانات.</li>
<li>استخدم <code v-pre>SET ... TO ...</code> لوضع البيانات داخل المتغير.</li>
<li>يمكن تحديث المتغيرات أو تغييرها في أي وقت في الخوارزمية الخاصة بك.</li>
<li>استخدم <code v-pre>CONSTANT ... TO ...</code> إذا كان يجب قفل البيانات وعدم تغييرها أبدًا.</li>
<li>يمكنك القيام بالعمليات الحسابية مع المتغيرات إذا كانت تحتوي على أرقام.</li>
</ul>
</div></template>


