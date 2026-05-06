<template><div><h1 id="المتغيرات-صناديقك-الرقمية" tabindex="-1"><a class="header-anchor" href="#المتغيرات-صناديقك-الرقمية"><span>المتغيرات: صناديقك الرقمية</span></a></h1>
<h2 id="ما-هو-المتغير؟" tabindex="-1"><a class="header-anchor" href="#ما-هو-المتغير؟"><span>ما هو المتغير؟</span></a></h2>
<p>تخيل أنك تحزم أمتعتك للانتقال إلى منزل جديد. تضع كتبك في صندوق وتكتب كلمة &quot;كتب&quot; في الخارج. لاحقًا، عندما تحتاج إلى كتاب، لن تبحث في كل مكان — بل ستعثر ببساطة على الصندوق المكتوب عليه &quot;كتب&quot;.</p>
<p>في البرمجة، <strong>المتغير (Variable)</strong> هو بالضبط هذا: صندوق يحمل ملصقاً حيث نقوم بتخزين المعلومات (البيانات) داخل ذاكرة الكمبيوتر. نعطي الصندوق اسمًا حتى نتمكن بسهولة من العثور على تلك المعلومات واستخدامها لاحقًا!</p>
<p>تتيح لنا المتغيرات تخزين أشياء مثل اسم المستخدم، أو أعلى نتيجة في لعبة، أو كلمة مرور سرية.</p>
<h2 id="إنشاء-متغير-باستخدام-let" tabindex="-1"><a class="header-anchor" href="#إنشاء-متغير-باستخدام-let"><span>إنشاء متغير باستخدام <code v-pre>let</code></span></a></h2>
<p>لإنشاء صندوق جديد (متغير)، نستخدم كلمة خاصة: <code v-pre>let</code>. هذا يخبر الكمبيوتر، &quot;مرحبًا، لنقم بإنشاء متغير جديد!&quot;</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myName <span class="token operator">=</span> <span class="token string">'Arya'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// هذا سيطبع: Arya</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>دعنا نوضح ما حدث للتو:</p>
<ol>
<li><code v-pre>let</code> تنشئ المتغير.</li>
<li><code v-pre>myName</code> هو الملصق الذي كتبناه على صندوقنا.</li>
<li><code v-pre>=</code> هو كيف نضع شيئًا داخل الصندوق.</li>
<li><code v-pre>'Arya'</code> هي البيانات (نص) التي قمنا بتخزينها بالداخل.</li>
</ol>
<p>أفضل جزء في <code v-pre>let</code> هو أنه يمكننا تغيير ما بداخل الصندوق لاحقًا!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> favoriteFood <span class="token operator">=</span> <span class="token string">'بيتزا'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>favoriteFood<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع: بيتزا</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// لاحقاً، نغير رأينا!</span></span>
<span class="line">favoriteFood <span class="token operator">=</span> <span class="token string">'تاكو'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>favoriteFood<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع: تاكو</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="إنشاء-متغير-باستخدام-const" tabindex="-1"><a class="header-anchor" href="#إنشاء-متغير-باستخدام-const"><span>إنشاء متغير باستخدام <code v-pre>const</code></span></a></h2>
<p>أحيانًا، ترغب في تخزين معلومات لا ينبغي أن تتغير <strong>أبدًا</strong>. على سبيل المثال، سنة ميلادك.</p>
<p>بالنسبة للأشياء التي يجب أن تظل ثابتة، نستخدم الكلمة <code v-pre>const</code> بدلاً من <code v-pre>let</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myBirthYear <span class="token operator">=</span> <span class="token number">1995</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myBirthYear<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع: 1995</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>إذا حاولت تغيير متغير <code v-pre>const</code>، سيغضب الكمبيوتر ويظهر خطأ، مما يحمي بياناتك من التغيير عن طريق الخطأ!</p>
<p><em>نصيحة: إذا كنت تعرف أن القيمة ستتغير لاحقًا (مثل نتيجة في لعبة)، استخدم <code v-pre>let</code>. إذا كانت ستبقى كما هي إلى الأبد، استخدم <code v-pre>const</code>.</em></p>
<h2 id="المتغيرات-والرياضيات" tabindex="-1"><a class="header-anchor" href="#المتغيرات-والرياضيات"><span>المتغيرات والرياضيات</span></a></h2>
<p>بما أن المتغيرات هي مجرد صناديق تحتوي على بيانات، فإذا كانت تحتوي على أرقام، يمكننا إجراء العمليات الحسابية معها!</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">score <span class="token operator">=</span> score <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع: 15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>نظرًا لأن إضافة النقاط للنتيجة أمر شائع جدًا في البرمجة، تمنحنا جافا سكريبت اختصارًا. بدلاً من كتابة <code v-pre>score = score + 5</code>، يمكننا كتابة <code v-pre>score += 5</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> lives <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">lives <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// هذا اختصار لـ: lives = lives - 1</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lives<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع: 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>لدينا أيضًا اختصارات لإضافة 1 بالضبط (<code v-pre>++</code>) أو طرح 1 بالضبط (<code v-pre>--</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">level<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// هذا يضيف 1 بالضبط إلى المستوى</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// يطبع: 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="مزج-الكلمات-والمتغيرات" tabindex="-1"><a class="header-anchor" href="#مزج-الكلمات-والمتغيرات"><span>مزج الكلمات والمتغيرات</span></a></h2>
<p>ماذا لو كنت ترغب في إلقاء التحية على مستخدم، لكنك لا تعرف اسمه حتى يقوم بتسجيل الدخول؟ يمكنك استخدام المتغيرات ودمجها مع النص!</p>
<p>يمكنك استخدام الرمز <code v-pre>+</code> لدمج النص والمتغيرات معًا:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myPet <span class="token operator">=</span> <span class="token string">'قطة'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'أنا أمتلك '</span> <span class="token operator">+</span> myPet <span class="token operator">+</span> <span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// يطبع: أنا أمتلك قطة.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="طريقة-أفضل-دمج-النصوص-المتطور-string-interpolation" tabindex="-1"><a class="header-anchor" href="#طريقة-أفضل-دمج-النصوص-المتطور-string-interpolation"><span>طريقة أفضل: دمج النصوص المتطور (String Interpolation)</span></a></h2>
<p>قد يصبح دمج النصوص باستخدام الرمز <code v-pre>+</code> فوضوياً إذا كان لديك الكثير من المتغيرات. هناك طريقة أحدث وأكثر نظافة للقيام بذلك تسمى <strong>String Interpolation</strong>.</p>
<p>بدلاً من علامات الاقتباس العادية، تستخدم <strong>علامات الاقتباس المائلة</strong> <code v-pre>`</code> (الموجودة عادةً تحت مفتاح Esc في لوحة المفاتيح). ثم تضع المتغيرات داخل <code v-pre>${ }</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myCity <span class="token operator">=</span> <span class="token string">'باريس'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> weather <span class="token operator">=</span> <span class="token string">'مشمس'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">أنا أعيش في </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myCity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> والجو </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weather<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> جداً اليوم!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// يطبع: أنا أعيش في باريس والجو مشمس جداً اليوم!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>هذه الطريقة أسهل بكثير في القراءة والكتابة!</p>
<h2 id="مراجعة-المتغيرات" tabindex="-1"><a class="header-anchor" href="#مراجعة-المتغيرات"><span>مراجعة المتغيرات</span></a></h2>
<p>دعنا نراجع ما تعلمناه:</p>
<ul>
<li><strong>المتغيرات (Variables)</strong> هي صناديق بأسماء تُستخدم لتخزين البيانات.</li>
<li>استخدم <code v-pre>let</code> إذا كانت البيانات قد تتغير لاحقًا.</li>
<li>استخدم <code v-pre>const</code> إذا كان يجب قفل البيانات وعدم تغييرها أبدًا.</li>
<li>يمكنك القيام بالرياضيات مع المتغيرات إذا كانت تحتوي على أرقام (<code v-pre>+=</code>، <code v-pre>-=</code>، <code v-pre>++</code>).</li>
<li>يمكنك مزج النص والمتغيرات معًا باستخدام الرمز <code v-pre>+</code>.</li>
<li>طريقة أنظف لمزج النص والمتغيرات هي استخدام علامات الاقتباس المائلة <code v-pre>`</code> و <code v-pre>${}</code>.</li>
</ul>
</div></template>


