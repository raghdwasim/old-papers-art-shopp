
/* =========================================================
   أوراق قديمة — Main JavaScript
   ========================================================= */

/* =========================
   إعدادات الموقع
   ========================= */

const CONFIG = {
    // اكتبي رقم واتساب الحقيقي بدون +
    whatsappNumber: "201093555168",

    // رابط موقعك الرئيسي
    portfolioUrl: "https://raghdwasim.github.io/drowing_artist_rr/",

    // صورة تظهر في حال لم يتم العثور على صورة اللوحة
    imageFallback: "images/artwork-placeholder.svg"
};


/* =========================================================
   بيانات اللوحات
   =========================================================
   
   لإضافة لوحة جديدة:
   1. ضعي الصورة داخل مجلد images
   2. أضيفي عنصر جديد بهذا الشكل
   3. غيّري البيانات التي تريدينها

   مثال:

   {
       id: 61,
       title: "اسم اللوحة",
       image: "images/artwork-61.jpg",
       technique: "رصاص",
       category: "pencil",
       colors: "درجات الجرافيت",
       price: 350,
       size: "21 × 30 سم",
       story: "قصة اللوحة..."
   }

========================================================= */

const artworksData = [
    {
        id: 1,
        title: "حيث تلتقي أرواحنا",
        image: "images/love colrt blk.jpeg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 500,
        story: "جسدان يديران ظهريهما لبعضهما، لكن أرواحهما ترفض الانفصال. أحيانًا لا يعني البعد أن شخصين ابتعدا فعلًا؛ فقد تبقى بينهما رابطة لا تراها العيون، ولا تستطيع المسافات أن تمحوها."
    },
    {
        id: 2,
        title: "اختلافٌ جميل",
        image: "images/not now.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 400,
        story: "ليست كل الأشياء بحاجة إلى رابط واضح كي تجتمع. أحيانًا تشبه اللوحة الحياة نفسها؛ تفاصيل متناقضة، لحظات لا تفسّر بعضها، وأجزاء تبدو عشوائية، لكنها معًا تصنع شيئًا لا يشبه سواه."
    },
    {
        id: 3,
        title: "مدينة خلف عينيها",
        image: "images/4444.jpg",
        technique: "فحم",
        category: "charcoal",
        price: 600,
        story: "النصف السفلي لأنثى هادئة يعكس ملامحها البشرية، بينما يعج رأسها بالمباني والعمران. إحساس بأن عقلها يمتلئ بضوضاء المدينة، طموحاتها، وأفكارها المتلاحمة كناطحات السحاب."
    },
    {
        id: 4,
        title: "بألواني أنا",
        image: "images/ana.jpeg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 500,
        story: "انعكاس مباشر لروحك، مليء بالحياة والألوان التي تعبر عن تقلباتك ومزاجك وتفرد شخصيتك بكل بهجتها وعمقها."
    },
    {
        id: 5,
        title: "النور الذي نجا",
        image: "images/black hand coler.jpeg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 250,
        story: "يد سوداء داكنة تحاول تلويث يد بيضاء بريئة، لكن المفاجأة أن براءة هذه اليد تفجرت نوراً ساطعاً كالشمس. إحساس بأن الأذى مهما حاول طمس الطهارة، فإن نقاء الروح يولد قوة خارقة تهزم العتمة."
    },
    {
        id: 6,
        title: "العيون التي لا تحيد بنظرها",
        image: "images/eyes bhu.jpeg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 350,
        story: "رجل أزرق اللون يغلق عينيه بيديه هرباً من العالم، تحيط به عيون كثيرة تتربص به. شعور بالاختناق، العزلة القسرية، والشعور الدائم بالمراقبة والضغط النفسي الداخلي."
    },
    {
        id: 7,
        title: "صمت الحجر",
        image: "images/wotre man.jpeg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 150,
        story: "ملامح رجل من زمن قديم، باهتة كأن الزمن محا عنها كل شيء إلا الصمت. يبدو كأنه شاهد على حكايات كثيرة، لكنه اختار ألّا يبوح بأيٍّ منها."
    },
    {
        id: 8,
        title: "حيث تضرب جذورها",
        image: "images/tree women.jpeg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 400,
        story: "من جسدها تنبت الجذور والورود، وكأنها لم تعد تبحث عن مكان تنتمي إليه، بل أصبحت هي المكان. قد يكون النمو مؤلمًا، لكنه يمنحنا القدرة على تحويل ما عشناه إلى شيء يزهر."
    },
    {
        id: 9,
        title: "غابة من النور المشتعل",
        image: "images/sandel gh.jpeg",
        technique: "رصاص",
        category: "pencil",
        price: 300,
        story: "غزال رقيق تحولت قرونه إلى شموع مشتعلة تذوب ببطء. شعور بالتضحية والجمال الهادئ الذي يحرق نفسه ليضيء للآخرين."
    },
    {
        id: 10,
        title: "ما يأخذه الدخان",
        image: "images/cigar.jpeg",
        technique: "رصاص",
        category: "pencil",
        price: 350,
        story: "فتاة تنفث سيجارتها وينمحي نصف وجهها تدريجياً مع تصاعد الدخان. شعور بالاحتراق الذاتي، والرغبة في التلاشي، والغياب البطيء عن تفاصيل الحاضر."
    },
    {
        id: 11,
        title: "الوحوش التي بداخلنا",
        image: "images/man narvos.jpeg",
        technique: "رصاص",
        category: "pencil",
        price: 450,
        story: "تخرج الوحوش من عقل يبدو كأنه لم يعد قادرًا على احتوائها. ربما لا تأتي بعض المعارك من العالم المحيط بنا، بل من أفكار تتكاثر في الداخل حتى يصبح العقل نفسه ساحة للصراع."
    },
    {
        id: 12,
        title: "وجوه كثيرة لذات واحدة",
        image: "images/many feces.jpeg",
        technique: "رصاص",
        category: "pencil",
        price: 350,
        story: "وجه يصرخ، وآخر يبكي، وثالث يلتزم الصمت. كلهم ينتمون إلى شخص واحد، لكن كلًّا منهم يحمل شعورًا لم يجد طريقه إلى الآخرين. أحيانًا لا يكون التناقض نفاقًا، بل ازدحامًا لمشاعر حقيقية في قلب واحد."
    },
    {
        id: 13,
        title: "لونان وصمت واحد",
        image: "images/horssss.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 600,
        story: "حصانان بلونين مختلفين (ذكر وأنثى) بلوحة خالية من أي ملامح تعبيرية. شعور بالسكينة الغامضة، التفاهم الصامت، والمسافة الهادئة بين روحين."
    },
    {
        id: 14,
        title: "غريزة قرمزية",
        image: "images/snako.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 350,
        story: "يلتف اللون الأحمر حول جسد الأفعى كأنه تحذير لا يحتاج إلى كلمات. إنها صورة عن الغريزة، والقوة التي لا يمكن تجاهلها، والخطر الذي قد يجذبنا بقدر ما يدفعنا إلى التراجع."
    },
    {
        id: 15,
        title: "قطعة صغيرة من السماء",
        image: "images/foom.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 100,
        story: "سماء بسيطة وقطع من الغيم تحيط بها الأغنام، في مشهد لا يحاول أن يثبت أي شيء. أحيانًا تكون الراحة في الأشياء الصغيرة، وفي عالم هادئ لا يطلب منا سوى أن نتوقف قليلًا وننظر."
    },
    {
        id: 16,
        title: "الطريق إلى زرقة البحر",
        image: "images/foon.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 200,
        story: "تمضي السلحفاة الصغيرة نحو البحر، حيث لا يعود هناك ما يقيّد اتجاهها. إنها حكاية عن العودة إلى المكان الذي يشبهنا، وعن الشجاعة الهادئة التي نحتاجها كي نبدأ طريقنا وحدنا."
    },
    {
        id: 17,
        title: "بين الجمر والجليد",
        image: "images/col.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 350,
        story: "بنتان متعاكستان؛ علوية بلون أحمر ناري يشبه الخريف، وسفلية بلون أزرق معصب كالثلج. إحساس بالتناقض الحاد بين الحرارة العاطفية والبرود القاسي."
    },
    {
        id: 18,
        title: "بتاجها في مواجهة الوحش",
        image: "images/qeen.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 200,
        story: "تقف الفتاة بظهرها إلينا، وتواجه ما يبدو أكبر منها وأكثر رعبًا. لا نرى وجهها ولا نعرف ما تشعر به، لكن وقفتها وحدها توحي بأن الشجاعة ليست غياب الخوف، بل البقاء في مكانك رغم وجوده."
    },
    {
        id: 19,
        title: "وُلدت من الرماد",
        image: "images/anaaq.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 400,
        story: "فتاة بلا ملامح تحمل أجنحة بلون العنقاء، كأنها خرجت من نهاية لم تكن نهاية فعلًا. أحيانًا لا نعود إلى الحياة كما كنّا؛ ننهض بنسخة جديدة من أنفسنا، تحمل آثار ما تجاوزته وقوة ما تعلّمته."
    },
    {
        id: 20,
        title: "رغد بين عالمين",
        image: "images/twooff.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 500,
        story: "وجهان لفتاة يمثل أحدهما الخير والآخر الشر، وتتوسطهما كلمة رغد إحساس بالازدواجية الإنسانية والصراع الخفي بين النقاء والقسوة في النفس البشرية."
    },
    {
        id: 21,
        title: "حرب مع النفس",
        image: "images/manyman.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 600,
        story: "الشخص ذاته يتكرر في اللوحة وهو يصارع نفسه وسط بقع من الدماء. إحساس بالاستنزاف الداخلي والمقاومة المستمرة للشيطان الداخلي والماضي."
    },
    {
        id: 22,
        title: "حضن النبض",
        image: "images/hart.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 400,
        story: "قلب نابض يضم في داخله ولداً يحتضن فتاة. إحساس بالأمان المطلق، وأن أثمن مكان يمكن للمرء أن يختبئ فيه هو قلب من يحب."
    },
    {
        id: 23,
        title: "الغصة",
        image: "images/katm.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 500,
        story: "ولد بلا ملامح يظهر كأنه مبسوط، لكن حلقه مليء بالدبابيس والدم. شعور بالكتمان، ابتلاع الجروح بصمت، والألم الخفي الذي لا يظهر على الوجه."
    },
    {
        id: 24,
        title: "دماء الملاك",
        image: "images/bloodbb.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 400,
        story: "ملاك يخلع وجهه كقناع ليتساقط منه الدم. إحساس بانكشاف الحقيقة المؤلمة، التعب من لعب دور المثالية، والمعاناة الخفية خلف ملامح الملائكة."
    },
    {
        id: 25,
        title: "هاري بوتر",
        image: "images/11.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 100,
        story: "إحساس بالحنين إلى عوالم السحر، المغامرة، والشجاعة في مواجهة قوى الظلام مهما كانت الظروف."
    },
    {
        id: 26,
        title: "لقاء في حلم لا ينسى ",
        image: "images/111111.jpg",
       technique: "ألوان مائية",
        category: "watercolor",
        price: 700,
        story: "حلم اشبه بخيال رائع للقاء الحبيب روح بعد فتره طويله من غياب ."
    },
    {
        id: 27,
        title: "إكس تنتاسيون",
        image: "images/33.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 100,
        story: "رسمة للمغني الراحل، تعبر عن طاقة الحزن، التمرد، الصراع النفسي العميق، والصوت الذي يتردد في صمت الأرواح المعذبة."
    },
    {
        id: 28,
        title: "عيون تفضح السكوت",
        image: "images/44.jpg",
        technique: "فحم",
        category: "charcoal",
        price: 50,
        story: "عيون فتاة مغمضة مرسومة بالفحم بدقة. شعور بالتأمل العميق، الحزن المكتوم، والرسائل الصامتة التي تحملها النظرات المغلقة."
    },
    {
        id: 29,
        title: "ظل الذات",
        image: "images/55.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 200,
        story: "فتاة مرسومة بلون أسود كامل وبشكل عادي. إحساس بالغياب، الغموض، والشعور بأنك مجرد طيف أو ظل في حياة الآخرين."
    },
    {
        id: 30,
        title: "صرخة تتلاشى",
        image: "images/66.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 50,
        story: "رجل يطلق صرخة مدوية بينما ينحل النصف الآخر منه ويتلاشى في الهواء. إحساس بالانهيار التام، والذوبان التدريجي للشخصية تحت ضغط الانهيار العصبي."
    },
    {
        id: 31,
        title: "رحلة في قارب الهدوء",
        image: "images/77.jpg",
        technique: "فحم",
        category: "charcoal",
        price: 50,
        story: "نهر هادئ تحيط به أشجار ساكنة وفي وسطه قارب يقل شخصين. إحساس بالسلام، العزلة الجميلة عن العالم، والانسجام الثنائي الخالص."
    },
    {
        id: 32,
        title: "وحشة الفضاء",
        image: "images/88.jpg",
        technique: "فحم",
        category: "charcoal",
        price: 50,
        story: "فضاء شاسع وغريب يتوسطه ولد يتأرجح بمفرده. إحساس بالغربة المطلقة، الوحدة وسط كون مترامي الأطراف، والحنين إلى الأمان."
    },
    {
        id: 33,
        title: "الاحتضان الدافئ",
        image: "images/99.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 400,
        story: "رجل يحتضن فتاة بحنان. إحساس بالاحتواء، الأمان، وإلغاء كل مخاوف العالم بلمسة قرب صادقة."
    },
    {
        id: 34,
        title: "موناليزا",
        image: "images/111.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 100,
        story: "رسمة بسيطة للموناليزا باللون الأسود فقط. إحساس بالكلاسيكية المحفوفة بالغموض، والنظرة التي تحمل ألف سر وسر دون تفوه بحرف."
    },
    {
        id: 35,
        title: "قوة التمسك",
        image: "images/222.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 100,
        story: "فتاة تحضن ولداً بقوة شديدة. إحساس بالخوف من الفقد، والرغبة في دمج الروحين معاً لمنع أي فراق محتمل."
    },
    {
        id: 36,
        title: "خسارة",
        image: "images/333.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 100,
        story: "ولد يمسك معصم فتاة بقوة بينما يداها مرخيتان تماماً. شعور بالتمسك بشخص قد رحل روحياً بالفعل، إحساس الخسارة الموجعة والمحاولة اليائسة للإبقاء عليه."
    },
    {
        id: 37,
        title: "شيطان وملاك في شخص",
        image: "images/444.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 200,
        story: "نصفان غير متكاملين لشيطان وملاك يندمجان في شخص واحد. إحساس بالصراع الأبدي بين الخير والشر داخل النفس البشرية دون انتصار حاسم لأحدهما."
    },
    {
        id: 38,
        title: "ندم",
        image: "images/555.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 350,
        story: "ولد يبكي ندماً وزعلاناً، وفتاة تحتضنه بينما تتلاشى تدريجياً. إحساس بالذنب القاتل، فوات الأوان، والمحاولة الأخيرة للحب وسط الفناء."
    },
    {
        id: 39,
        title: "حِدّة الملامح",
        image: "images/666.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 300,
        story: "وجه ولد بنصف أيمن بارز وملامح حادة للغاية. إحساس بالجمود، الصرامة، والنظرة الثاقبة التي تخترق التفاصيل."
    },
    {
        id: 40,
        title: "هالة السجائر",
        image: "images/777.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 300,
        story: "رجل يدخن ويسرح بخياله بينما يتصاعد الدخان ببطء. إحساس بالتفكير المفرط، القلق الصامت، والهروب من الواقع عبر الدخان."
    },
    {
        id: 41,
        title: "هيكل الوحش",
        image: "images/888.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 400,
        story: "وجه هيكل عظمي تنبت له قرون وحش مرعبة. إحساس بالرعب الداخلي، الموت، والتحول إلى كائن مظلم بعد صدمات قاسية."
    },
    {
        id: 42,
        title: "حزن",
        image: "images/121212.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 500,
        story: "فتاه تصارع الاكتئاب، والمفارقة أن داخل عيونها يظهر حبر اسود دليل على حزن قامع داخلها."
    },
    {
        id: 43,
        title: "نخل",
        image: "images/5555.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 200,
        story: "خلفية ملونة بألوان دافئة يتوسطها نخيل أسود اللون. إحساس بالحنين، الغربة، وهدوء اللحظات الأخيرة من النهار."
    },
    {
        id: 44,
        title: "تلامس الأضداد",
        image: "images/2222.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 50,
        story: "يد سوداء تماماً تمسك بيد فتاة بيضاء. إحساس بالتناقض الجذاب، سيطرة الظلام على النقاء أو محاولة أحدهما احتواء الآخر رغم اختلاف العوالم."
    },
    {
        id: 45,
        title: "اختناق",
        image: "images/45.jpg",
        technique: "حبر",
        category: "Ink",
        price: 50,
        story: "خيوط سوداء تشكل هيئة إنسان يتألم، يصرخ بمرارة واضعاً يديه على صدره من شدة الثقل. إحساس بالارتباك، الأفكار المعقدة والمشابكة التي تخنق الروح، والصدمات التي تحول الإنسان إلى كتلة من العقد والصرخات المكتومة."
    },
    {
        id: 46,
        title: "مقيد",
        image: "images/46.jpg",
        technique: "حبر",
        category: "Ink",
        price: 50,
        story: "جسد مكبل بحبال حمراء قاسية تضغط عليه. إحساس بالأسر العاطفي، التقييد بالقوة، والرغبة بالانفكاك من صراع أو حقيقة تفرض نفسها بقسوة وضغط شديد."
    },
    {
        id: 47,
        title: "انبعاث الجمال من الانكسار",
        image: "images/47.jpg",
        technique: "حبر",
        category: "Ink",
        price: 50,
        story: "جسد أنثى منشطر، طائر يحمل وردة بفمه يحلّق بالجزء العلوي، بينما تتفتح أزهار وردية من أحشائها السفلية. إحساس بالتحول والولادة من رحم الألم؛ فبالرغم من التمزق الشديد، يخرج الجمال والورود من أعمق الجروح."
    },
    {
        id: 48,
        title: "شظايا الرغبة والروح",
        image: "images/62.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 250,
        story: "لوحة تجمع مشاهد متعددة؛ رجل رياضي بخوذة دراجة، جسد أنثوي مائل للتفاصيل، وأرواح تتقاطع وتتلاقى في المنتصف. إحساس بالتداخل بين الانجذاب الجسدي، القوة، والتلاقح الروحي العميق في لوحة واحدة تجسد صخب الحياة."
    },
    {
        id: 49,
        title: "فم الخوف الداخلي",
        image: "images/49.jpg",
        technique: "حبر",
        category: "Ink",
        price: 50,
        story: "بطن فتاة يفتح كأنه فك وحش مرعب مليء بالأسنان الحادة. إحساس بالقلق العشوي، القلق الحاد الذي يأكل الإنسان من أحشائه، والصرخة الخفية من داخل البدن."
    },
    {
        id: 50,
        title: "زمن",
        image: "images/50.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 250,
        story: "وردة عتيقة ذابلة يُشير عقرب الساعة فيها بدقة إلى الرقم 25، بينما يسيل الدم منه ليغطي بقايا الوردة. إحساس بفوات الأوان، حسرة العمر المهدور عند سن أو لحظة معينة (25)، والزمن الذي يلتهم أجمل ما فينا."
    },
    {
        id: 51,
        title: "شغف النظرات",
        image: "images/51.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 350,
        story: "عينا شاب وفتاة تلتقيان بنظرة مشتعلة مليئة بالشغف والجاذبية. إحساس بالتواصل غير المرئي، الحب العميق الذي لا يحتاج لحديث، والانجذاب الصادق الخالص."
    },
    {
        id: 52,
        title: "هيام سرمدي",
        image: "images/522.jpg",
        technique: "حبر",
        category: "Ink",
        price: 150,
        story: "شمس على شكل فتاة باكية وقمر على شكل فتى نائم غارق في حلمه، وتتوسطهما عبارة إحساس بالحب الأبدي غير المتكافئ أو المستحيل؛ أحدهما يحترق ويبكي ليدفئ الآخر النائم في سلام إلى الأبد."
    },
    {
        id: 53,
        title: "متحف العيون",
        image: "images/533.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 150,
        story: "تشكيلة عيون نظراتها مختلفة بين العشق، الغضب، الحزن العميق، والخذلان القاسي. إحساس بالمرآة الصادقة للروح، فالعيون هي اللسان الوحياني الذي لا يكذب أبداً عندما تخذله الكلمات."
    },
    {
        id: 54,
        title: "ملاذ",
        image: "images/54.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 350,
        story: "فتاة تحتضن شاباً بأسلوب دافئ يحتوي كل جوانبه. إحساس بالأمان، الحماية العاطفية، والقدرة على إعادة ترميم الآخر حين ينهار."
    },
    {
        id: 55,
        title: "قبلة الشغف",
        image: "images/kiss.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 150,
        story: "شاب يقبل فتاة في لحظة صدق ورومانسية. إحساس بذوبان الوقت، الحرارة العاطفية، واستعادة السلام في غمضة عين."
    },
    {
        id: 56,
        title: "حدّة النظرة",
        image: "images/56.jpg",
        technique: "ألوان مائية",
        category: "watercolor",
        price: 150,
        story: "عينا أنثى حادتان وقويتان تسبران غور من ينظر إليهما. إحساس بالثقة، التحدي، والذكاء الذي يلمع كالسيف."
    },
    {
        id: 57,
        title: "صراع",
        image: "images/61.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 400,
        story: "بطن رياضي مشدود لأنثى يحمل ثقباً على شكل أفعى، وتحتها طائران (أسود وأبيض) في هجوم شرس على بعضهما. إحساس بالصراع الأبدي بين النور والظلمة، الجمال والقسوة، والافتراس الداخلي."
    },
    {
        id: 58,
        title: "Bankai",
        image: "images/58.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 50,
        story: "رسمة أنمي حماسية لشخصية تستحضر قوتها القصوى إحساس بالتحرر من القيود، تفجير الطاقات الكامنة، والوقوف بقوة وشجاعة في وجه المخاطر."
    },
    {
        id: 59,
        title: "ملاذ الامن",
        image: "images/59.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 400,
        story: "شاب يحتضن فتاة وهي تتوارى في صدره بكل رقة ودلال. إحساس بالأمان والهروب من قسوة العالم إلى أدفئ مكان في الكون."
    },
    {
        id: 60,
        title: "شهوة الجسد",
        image: "images/60.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 350,
        story: "مشاهد متداخلة لجسد أنثوي منحوت، شاب رياضي، وفم أنثوي بجمال حاد مع أنياب يقطر منها الدم وندبتين على الرقبة. إحساس بالخطورة المثيرة، الانجذاب المظلم (الجامح)، والخلط بين الخطر والعاطفة القاتلة."
    },

   {
        id: 61,
        title: "إقرأ ",
        image: "images/222222.jpg",
      technique: "ألوان مائية",
        category: "watercolor",
        price: 350,
        story: "اقراء تدل على القراءه وتعلم ."
    },

       {
        id: 62,
        title: " الجبال والهدوء",
        image: "images/333333.jpg",
       technique: "ألوان مائية",
        category: "watercolor",
        price: 300,
        story: "منظر طبيعي يبعث على التأمل العميق والسكينة المطلقة. تعكس قصة هرب مؤقت إلى عوالم هادئة وبعيدة عن صخب العالم، حيث تتناغم قمم الجبال المتموجة مع زرقة السماء لتعيد ترتيب أفكار الإنسان وتعيد له توازنه الداخلي."
    },

       {
        id: 63,
        title: "الشجرة النارية والغروب ",
        image: "images/444444.jpg",
      technique: "ألوان مائية",
        category: "watercolor",
        price: 300,
        story: "شجرة تتأجج فروعها بلون الشمس وغروبها، كأنها تحترق من شدة الحياة والشغف لا من الألم. ترمز القصة إلى مراحل النضج الكبرى، حيث تتخلى الروح عن قشورها القديمة لتشتعل من جديد وتبتكر ذاتها من بين رماد التجارب السابقة."
    },

       {
        id: 64,
        title: " الوحده",
        image: "images/555555.jpg",
     technique: "ألوان مائية",
        category: "watercolor",
        price: 100,
        story: "شعور الاختباء من جميع ومتطلباتهم ومع ذالك شعور الوحده العارم ."
    },


       {
        id: 65,
        title: " طبيعه هادئه",
        image: "images/666666.jpg",
      technique: "ألوان مائية",
        category: "watercolor",
        price: 150,
        story: "منظر من ارض واقع تم تصويره بطريقه هادئه وبسيطه مع الوان متناسقه ."
    },

       {
        id: 66,
        title: "الأيدي ",
        image: "images/777777.jpg",
       technique: "ألوان مائية",
        category: "watercolor",
        price: 150,
        story: "لوحه ايادي هيكل عظمي بلون الاحمر ."
    },

       {
        id: 67,
        title: "الجسد",
        image: "images/888888.jpg",
       technique: "ألوان مائية",
        category: "watercolor",
        price: 50,
        story: "جزء سفلي انثوي بلون بنفسجي رائع ."
    },

       {
        id: 68,
        title: " الاكتئاب الصارخ ",
        image: "images/999999.jpg",
        technique: "رصاص",
        category: "pencil",
        price: 350,
        story: "وجه فتاه ساكته يلطخها سواد تاكتمان لكن جمجمتها تصرخ بما داخلها ."
    },

     

];


/* =========================================================
   بدء الموقع
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initConfigurationLinks();

    renderGallery(artworksData);

    setupFilterEvents();

    setupModalEvents();

    setupMobileMenu();

});


/* =========================================================
   الروابط
========================================================= */

function initConfigurationLinks() {

    document.querySelectorAll(".external-portfolio-link").forEach(link => {
        link.href = CONFIG.portfolioUrl;
    });


    const footerWhatsapp = document.getElementById("footerWhatsapp");

    if (footerWhatsapp) {

        footerWhatsapp.href =
            `https://wa.me/${CONFIG.whatsappNumber}`;

    }

}


/* =========================================================
   رابط واتساب لكل لوحة
========================================================= */

function createWhatsAppUrl(art) {

    const message =
        `مرحباً، أرغب بطلب الرسمة: ${art.title} — السعر: ${art.price} EGP — المقاس: ${art.size}`;

    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

}


/* =========================================================
   عرض المعرض
========================================================= */

function renderGallery(items) {
    const grid = document.getElementById("artworkGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                لا توجد أعمال فنية في هذا القسم حالياً.
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(art => {
        const card = document.createElement("article");

        card.className = "artwork-card";
        card.dataset.id = art.id;

        const imagePath = art.image || CONFIG.imageFallback;
        const waUrl = createWhatsAppUrl(art);

        card.innerHTML = `
            <div
                class="card-image-wrapper"
                role="button"
                tabindex="0"
                data-art-id="${art.id}"
                aria-label="عرض ${art.title}"
            >
                <img
                    src="${imagePath}"
                    alt="${art.title}"
                    loading="lazy"
                >

                <span class="artwork-number">
                    ${String(art.id).padStart(2, "0")}
                </span>

                <span class="view-art">
                    عرض اللوحة
                </span>
            </div>

            <div class="card-info">
                <div class="card-top">
                    <span class="card-technique">
                        ${art.technique}
                    </span>
                </div>

                <h3
                    class="card-title"
                    tabindex="0"
                    data-art-id="${art.id}"
                >
                    ${art.title}
                </h3>

                <div class="card-bottom">
                    <div class="card-price">
                        ${art.price}
                        <small>EGP</small>
                    </div>

                    <a
                        href="${waUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-whatsapp"
                    >
                        طلب اللوحة
                    </a>
                </div>
            </div>
        `;

        // معالجة الصور التي لا يتم تحميلها
        const img = card.querySelector("img");

        img.addEventListener("error", () => {
            if (img.dataset.fallbackApplied) return;

            img.dataset.fallbackApplied = "true";
            img.src = CONFIG.imageFallback;
        });

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}


/* =========================================================
   الفلاتر
========================================================= */

function setupFilterEvents() {

    const filterContainer =
        document.getElementById("filterContainer");

    if (!filterContainer) return;


    const buttons =
        filterContainer.querySelectorAll(".filter-btn");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");


            const filter =
                button.dataset.filter;


            const filtered =
                filter === "all"
                    ? artworksData
                    : artworksData.filter(
                        art => art.category === filter
                    );


            renderGallery(filtered);

        });

    });

}


/* =========================================================
   المودال
========================================================= */

function setupModalEvents() {

    const modal =
        document.getElementById("artworkModal");

    const closeBtn =
        document.getElementById("modalClose");

    const grid =
        document.getElementById("artworkGrid");


    if (!modal || !closeBtn || !grid) return;


    closeBtn.addEventListener("click", closeModal);


    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal();

        }

    });


    grid.addEventListener("click", event => {

        const target =
            event.target.closest("[data-art-id]");


        if (!target) return;


        if (event.target.closest(".btn-whatsapp")) return;


        openArtworkModal(
            Number(target.dataset.artId)
        );

    });


    grid.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            const target =
                event.target.closest("[data-art-id]");


            if (!target) return;


            event.preventDefault();


            openArtworkModal(
                Number(target.dataset.artId)
            );

        }

    });


    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    });

}


/* =========================================================
   فتح تفاصيل اللوحة
========================================================= */

function openArtworkModal(id) {

    const art =
        artworksData.find(item => item.id === id);


    if (!art) return;


    const modal =
        document.getElementById("artworkModal");

    const content =
        document.getElementById("modalContent");


    if (!modal || !content) return;


    const imagePath =
        art.image || CONFIG.imageFallback;


    const waUrl =
        createWhatsAppUrl(art);


    content.innerHTML = `

        <div class="modal-grid">

            <div class="modal-image-wrapper">

                <img
                    src="${imagePath}"
                    alt="${art.title}"
                >

            </div>


            <div class="modal-details">

                <span class="modal-technique">
                    ${art.technique}
                </span>


                <h2
                    class="modal-title"
                    id="modalTitle"
                >
                    ${art.title}
                </h2>


                <div class="modal-price">
                    ${art.price}
                    <small>EGP</small>
                </div>


                <ul class="modal-spec-list">

                    <li>
                        <strong>التقنية:</strong>
                        ${art.technique}
                    </li>

                    <li>
                        <strong>الألوان:</strong>
                        ${art.colors}
                    </li>

                    <li>
                        <strong>المقاس:</strong>
                        ${art.size}
                    </li>

                </ul>


                <div class="modal-story-box">

                    <span>حكاية اللوحة</span>

                    <p>
                        ${art.story}
                    </p>

                </div>


                <div class="modal-actions">

                    <a
                        href="${waUrl}"
                        target="_blank"
                        rel="noopener"
                        class="btn btn-whatsapp"
                    >
                        أريد اقتناء هذه اللوحة
                    </a>

                </div>

            </div>

        </div>

    `;


    const img =
        content.querySelector("img");


    img.addEventListener("error", () => {

        if (img.dataset.fallbackApplied) return;

        img.dataset.fallbackApplied = "true";

        img.src = CONFIG.imageFallback;

    });


    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

}


/* =========================================================
   إغلاق المودال
========================================================= */

function closeModal() {

    const modal =
        document.getElementById("artworkModal");


    if (!modal) return;


    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   قائمة الهاتف
========================================================= */

function setupMobileMenu() {

    const toggle =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("siteNav");


    if (!toggle || !nav) return;


    toggle.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("active");


        toggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    nav.querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}