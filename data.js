// Mandarin Quest — Simplified Chinese learning data
// 97 essential HSK 1-2 characters with pinyin, tones, radicals, and example words.

const ZH_DATA = {
  // Tone system: 1=high, 2=rising, 3=dipping, 4=falling, 0=neutral
  // Radical groups are used for the "Radical Sort" game (analogous to Thai class sort)

  characters: [
    // ---- Numbers & quantities (10) ----
    { ch: "一", py: "yī", tone: 1, radical: "一", sound: "yee", memory: "One horizontal stroke — literally 'one'.", words: [{zh:"一个",py:"yī gè",mean:"one (of)"},{zh:"一起",py:"yīqǐ",mean:"together"}], hsk: 1 },
    { ch: "二", py: "èr", tone: 4, radical: "二", sound: "er", memory: "Two strokes = two.", words: [{zh:"二十",py:"èrshí",mean:"twenty"},{zh:"第二",py:"dì èr",mean:"second"}], hsk: 1 },
    { ch: "三", py: "sān", tone: 1, radical: "一", sound: "san", memory: "Three strokes = three.", words: [{zh:"三十",py:"sānshí",mean:"thirty"},{zh:"三星",py:"sānxīng",mean:"Samsung / three stars"}], hsk: 1 },
    { ch: "四", py: "sì", tone: 4, radical: "囗", sound: "suh", memory: "The box 囗 encloses 'legs' 八 — four corners of a square.", words: [{zh:"四个",py:"sì gè",mean:"four"},{zh:"四月",py:"sì yuè",mean:"April"}], hsk: 1 },
    { ch: "五", py: "wǔ", tone: 3, radical: "一", sound: "woo", memory: "Two horizontal bars connected by a zigzag — five fingers.", words: [{zh:"五个",py:"wǔ gè",mean:"five"},{zh:"五分钟",py:"wǔ fēnzhōng",mean:"five minutes"}], hsk: 1 },
    { ch: "六", py: "liù", tone: 4, radical: "八", sound: "leeo", memory: "Top dot + legs spreading down — six points.", words: [{zh:"六个",py:"liù gè",mean:"six"},{zh:"六月",py:"liù yuè",mean:"June"}], hsk: 1 },
    { ch: "七", py: "qī", tone: 1, radical: "一", sound: "chee", memory: "A horizontal line crossed by a curved vertical — seven.", words: [{zh:"七个",py:"qī gè",mean:"seven"},{zh:"七月",py:"qī yuè",mean:"July"}], hsk: 1 },
    { ch: "八", py: "bā", tone: 1, radical: "八", sound: "bah", memory: "Two strokes spreading apart like open legs — eight.", words: [{zh:"八个",py:"bā gè",mean:"eight"},{zh:"八月",py:"bā yuè",mean:"August"}], hsk: 1 },
    { ch: "九", py: "jiǔ", tone: 3, radical: "乙", sound: "jyoe", memory: "A hook shape — like a question mark turned — nine.", words: [{zh:"九个",py:"jiǔ gè",mean:"nine"},{zh:"九月",py:"jiǔ yuè",mean:"September"}], hsk: 1 },
    { ch: "十", py: "shí", tone: 2, radical: "十", sound: "sher", memory: "A cross — 十 is literally ten in ancient counting rods.", words: [{zh:"十个",py:"shí gè",mean:"ten"},{zh:"十一",py:"shíyī",mean:"eleven"}], hsk: 1 },

    // ---- People & pronouns (12) ----
    { ch: "人", py: "rén", tone: 2, radical: "人", sound: "ren", memory: "A stick figure standing — 人 = person.", words: [{zh:"别人",py:"biérén",mean:"others"},{zh:"三个人",py:"sān ge rén",mean:"three people"}], hsk: 1 },
    { ch: "我", py: "wǒ", tone: 3, radical: "戈", sound: "waw", memory: "Hand (手) holding a weapon (戈) — 'I' am the one who fights.", words: [{zh:"我们",py:"wǒmen",mean:"we/us"},{zh:"自我",py:"zìwǒ",mean:"self"}], hsk: 1 },
    { ch: "你", py: "nǐ", tone: 3, radical: "亻", sound: "nee", memory: "Person 亻 + 尔 = you. 尔 is an old word for 'you'.", words: [{zh:"你好",py:"nǐ hǎo",mean:"hello"},{zh:"你们",py:"nǐmen",mean:"you (plural)"}], hsk: 1 },
    { ch: "他", py: "tā", tone: 1, radical: "亻", sound: "tah", memory: "Person 亻 + 也 (also) — 'he' is also a person.", words: [{zh:"他们",py:"tāmen",mean:"they (male)"},{zh:"其他",py:"qítā",mean:"other"}], hsk: 1 },
    { ch: "她", py: "tā", tone: 1, radical: "女", sound: "tah", memory: "Woman 女 + 也 — 'she'. Same pronunciation as 他.", words: [{zh:"她们",py:"tāmen",mean:"they (female)"}], hsk: 1 },
    { ch: "们", py: "men", tone: 0, radical: "亻", sound: "men", memory: "Person 亻 + 门 (door) — plural marker. Opens the door to 'more people'.", words: [{zh:"我们",py:"wǒmen",mean:"we"},{zh:"他们",py:"tāmen",mean:"they"}], hsk: 1 },
    { ch: "爸", py: "bà", tone: 4, radical: "父", sound: "bah", memory: "Father 父 + 巴 (ba sound) — 'ba' for dad.", words: [{zh:"爸爸",py:"bàba",mean:"dad"},{zh:"爸妈",py:"bà mā",mean:"parents"}], hsk: 1 },
    { ch: "妈", py: "mā", tone: 1, radical: "女", sound: "mah", memory: "Woman 女 + 马 (horse, mǎ) — 'ma' for mom.", words: [{zh:"妈妈",py:"māma",mean:"mom"},{zh:"爸妈",py:"bà mā",mean:"parents"}], hsk: 1 },
    { ch: "男", py: "nán", tone: 2, radical: "田", sound: "nan", memory: "Field 田 + Power 力 — man works in the field with strength.", words: [{zh:"男人",py:"nánrén",mean:"man"},{zh:"男生",py:"nánshēng",mean:"boy"}], hsk: 1 },
    { ch: "女", py: "nǚ", tone: 3, radical: "女", sound: "nyu", memory: "A kneeling figure with arms crossed — woman in ancient pictograph.", words: [{zh:"女人",py:"nǚrén",mean:"woman"},{zh:"女孩",py:"nǚhái",mean:"girl"}], hsk: 1 },
    { ch: "孩", py: "hái", tone: 2, radical: "子", sound: "high", memory: "Child 子 + 亥 (hài) — 'hái' for child.", words: [{zh:"小孩",py:"xiǎohái",mean:"child"},{zh:"女孩",py:"nǚhái",mean:"girl"}], hsk: 1 },
    { ch: "友", py: "yǒu", tone: 3, radical: "又", sound: "yo", memory: "Two hands 又 reaching together — friendship.", words: [{zh:"朋友",py:"péngyou",mean:"friend"},{zh:"好友",py:"hǎoyǒu",mean:"good friend"}], hsk: 1 },

    // ---- Nature & time (12) ----
    { ch: "大", py: "dà", tone: 4, radical: "大", sound: "dah", memory: "A person standing with arms spread wide — big!", words: [{zh:"大人",py:"dàren",mean:"adult"},{zh:"大学",py:"dàxué",mean:"university"}], hsk: 1 },
    { ch: "小", py: "xiǎo", tone: 3, radical: "小", sound: "shiao", memory: "Three dots — tiny particles. Small.", words: [{zh:"小孩",py:"xiǎohái",mean:"child"},{zh:"小时",py:"xiǎoshí",mean:"hour"}], hsk: 1 },
    { ch: "天", py: "tiān", tone: 1, radical: "大", sound: "tyen", memory: "Great 大 with a line above — the sky above is great.", words: [{zh:"今天",py:"jīntiān",mean:"today"},{zh:"天气",py:"tiānqì",mean:"weather"}], hsk: 1 },
    { ch: "日", py: "rì", tone: 4, radical: "日", sound: "rr", memory: "A sun with a dot in the center — literally the sun.", words: [{zh:"生日",py:"shēngrì",mean:"birthday"},{zh:"日记",py:"rìjì",mean:"diary"}], hsk: 1 },
    { ch: "月", py: "yuè", tone: 4, radical: "月", sound: "yweh", memory: "A crescent moon shape — 月 = moon/month.", words: [{zh:"月亮",py:"yuèliang",mean:"moon"},{zh:"一月",py:"yī yuè",mean:"January"}], hsk: 1 },
    { ch: "水", py: "shuǐ", tone: 3, radical: "水", sound: "shway", memory: "Flowing streams — the central line is a river, dots are splashes.", words: [{zh:"喝水",py:"hē shuǐ",mean:"drink water"},{zh:"水果",py:"shuǐguǒ",mean:"fruit"}], hsk: 1 },
    { ch: "火", py: "huǒ", tone: 3, radical: "火", sound: "hwoh", memory: "Flames leaping up — fire pictogram.", words: [{zh:"火车",py:"huǒchē",mean:"train"},{zh:"发火",py:"fāhuǒ",mean:"get angry"}], hsk: 1 },
    { ch: "山", py: "shān", tone: 1, radical: "山", sound: "shan", memory: "Three mountain peaks rising from the ground.", words: [{zh:"山水",py:"shānshuǐ",mean:"landscape"},{zh:"大山",py:"dà shān",mean:"big mountain"}], hsk: 1 },
    { ch: "木", py: "mù", tone: 4, radical: "木", sound: "moo", memory: "A tree — trunk, branches above, roots below.", words: [{zh:"树木",py:"shùmù",mean:"trees"},{zh:"木桌",py:"mù zhuō",mean:"wooden table"}], hsk: 1 },
    { ch: "上", py: "shàng", tone: 4, radical: "一", sound: "shang", memory: "A mark above the line — up/above.", words: [{zh:"上面",py:"shàngmiàn",mean:"above"},{zh:"上网",py:"shàng wǎng",mean:"go online"}], hsk: 1 },
    { ch: "下", py: "xià", tone: 4, radical: "一", sound: "shyah", memory: "A mark below the line — down/below.", words: [{zh:"下面",py:"xiàmiàn",mean:"below"},{zh:"下雨",py:"xià yǔ",mean:"to rain"}], hsk: 1 },
    { ch: "中", py: "zhōng", tone: 1, radical: "丨", sound: "jong", memory: "A line through the center of a box — middle/center.", words: [{zh:"中国",py:"Zhōngguó",mean:"China"},{zh:"中午",py:"zhōngwǔ",mean:"noon"}], hsk: 1 },

    // ---- Actions (16) ----
    { ch: "吃", py: "chī", tone: 1, radical: "口", sound: "chir", memory: "Mouth 口 + 乞 — mouth begs to eat.", words: [{zh:"吃饭",py:"chīfàn",mean:"eat a meal"},{zh:"吃苹果",py:"chī píngguǒ",mean:"eat an apple"}], hsk: 1 },
    { ch: "喝", py: "hē", tone: 1, radical: "口", sound: "huh", memory: "Mouth 口 + 曷 — mouth with liquid going in.", words: [{zh:"喝水",py:"hē shuǐ",mean:"drink water"},{zh:"喝茶",py:"hē chá",mean:"drink tea"}], hsk: 1 },
    { ch: "看", py: "kàn", tone: 4, radical: "目", sound: "kan", memory: "Hand 手 over eye 目 — shading the eyes to look/see.", words: [{zh:"看书",py:"kàn shū",mean:"read a book"},{zh:"看见",py:"kànjiàn",mean:"to see"}], hsk: 1 },
    { ch: "听", py: "tīng", tone: 1, radical: "口", sound: "ting", memory: "Mouth 口 + 斤 — listen with your mouth (ears) open.", words: [{zh:"听见",py:"tīngjiàn",mean:"to hear"},{zh:"好听",py:"hǎotīng",mean:"sounds good"}], hsk: 1 },
    { ch: "说", py: "shuō", tone: 1, radical: "讠", sound: "shwaw", memory: "Speech 讠+ 兑 (duì) — words coming out.", words: [{zh:"说话",py:"shuōhuà",mean:"to speak"},{zh:"小说",py:"xiǎoshuō",mean:"novel"}], hsk: 1 },
    { ch: "读", py: "dú", tone: 2, radical: "讠", sound: "doo", memory: "Speech 讠+ 卖 (mài) — selling words = reading.", words: [{zh:"读书",py:"dú shū",mean:"read books"},{zh:"读者",py:"dúzhě",mean:"reader"}], hsk: 1 },
    { ch: "写", py: "xiě", tone: 3, radical: "冖", sound: "shyeh", memory: "Roof 冖 + 与 — writing under a roof.", words: [{zh:"写字",py:"xiě zì",mean:"write characters"},{zh:"写信",py:"xiě xìn",mean:"write a letter"}], hsk: 1 },
    { ch: "做", py: "zuò", tone: 4, radical: "亻", sound: "dzwaw", memory: "Person 亻 + 故 (old/past) — a person doing something.", words: [{zh:"做饭",py:"zuò fàn",mean:"cook"},{zh:"做事",py:"zuò shì",mean:"do things"}], hsk: 2 },
    { ch: "去", py: "qù", tone: 4, radical: "厶", sound: "chu", memory: "Earth 土 + private 厶 — going somewhere on your own.", words: [{zh:"去哪儿",py:"qù nǎr",mean:"go where"},{zh:"去年",py:"qùnián",mean:"last year"}], hsk: 1 },
    { ch: "来", py: "lái", tone: 2, radical: "木", sound: "lie", memory: "People coming from a distance — lines represent arriving.", words: [{zh:"回来",py:"huílái",mean:"come back"},{zh:"出来",py:"chūlái",mean:"come out"}], hsk: 1 },
    { ch: "买", py: "mǎi", tone: 3, radical: "买", sound: "my", memory: "A net over goods — buying things.", words: [{zh:"买东西",py:"mǎi dōngxi",mean:"go shopping"},{zh:"买单",py:"mǎi dān",mean:"pay the bill"}], hsk: 1 },
    { ch: "开", py: "kāi", tone: 1, radical: "廾", sound: "kie", memory: "Two hands opening a door — open/start.", words: [{zh:"开门",py:"kāi mén",mean:"open door"},{zh:"开始",py:"kāishǐ",mean:"begin"}], hsk: 1 },
    { ch: "学", py: "xué", tone: 2, radical: "子", sound: "shweh", memory: "Roof over a child 子 with hands learning above — school.", words: [{zh:"学习",py:"xuéxí",mean:"study"},{zh:"学校",py:"xuéxiào",mean:"school"}], hsk: 1 },
    { ch: "爱", py: "ài", tone: 4, radical: "爫", sound: "eye", memory: "Hand 爫 + cover 冖 + friend 友 — simplified 爱 drops the old heart 心, keeping the friend.", words: [{zh:"爱情",py:"àiqíng",mean:"love"},{zh:"爱好",py:"àihào",mean:"hobby"}], hsk: 1 },
    { ch: "想", py: "xiǎng", tone: 3, radical: "心", sound: "shyang", memory: "Tree/eye 相 + heart 心 — thinking with the heart.", words: [{zh:"我想",py:"wǒ xiǎng",mean:"I think/want"},{zh:"想法",py:"xiǎngfǎ",mean:"idea"}], hsk: 1 },
    { ch: "坐", py: "zuò", tone: 4, radical: "土", sound: "dzwaw", memory: "Two people 人 on the ground 土 — sitting.", words: [{zh:"请坐",py:"qǐng zuò",mean:"please sit"},{zh:"坐下",py:"zuò xià",mean:"sit down"}], hsk: 2 },

    // ---- Objects & places (15) ----
    { ch: "车", py: "chē", tone: 1, radical: "车", sound: "chuh", memory: "A vehicle seen from above — wheels and axle.", words: [{zh:"开车",py:"kāichē",mean:"drive"},{zh:"火车",py:"huǒchē",mean:"train"}], hsk: 1 },
    { ch: "书", py: "shū", tone: 1, radical: "曰", sound: "shoo", memory: "A brush writing on bamboo — a book.", words: [{zh:"看书",py:"kàn shū",mean:"read"},{zh:"书店",py:"shūdiàn",mean:"bookstore"}], hsk: 1 },
    { ch: "字", py: "zì", tone: 4, radical: "子", sound: "dz", memory: "Child 子 under a roof — written characters are like children of a language.", words: [{zh:"写字",py:"xiě zì",mean:"write"},{zh:"汉字",py:"Hànzì",mean:"Chinese character"}], hsk: 1 },
    { ch: "家", py: "jiā", tone: 1, radical: "宀", sound: "jyah", memory: "Roof 宀 + pig 豕 — pig under a roof = home (ancient: livestock indoors = wealth).", words: [{zh:"回家",py:"huí jiā",mean:"go home"},{zh:"家人",py:"jiārén",mean:"family"}], hsk: 1 },
    { ch: "门", py: "mén", tone: 2, radical: "门", sound: "men", memory: "Double doors — the frame of a doorway.", words: [{zh:"开门",py:"kāi mén",mean:"open door"},{zh:"门口",py:"ménkǒu",mean:"doorway"}], hsk: 1 },
    { ch: "手", py: "shǒu", tone: 3, radical: "手", sound: "show", memory: "A hand with five fingers reduced to strokes.", words: [{zh:"手机",py:"shǒujī",mean:"mobile phone"},{zh:"洗手",py:"xǐ shǒu",mean:"wash hands"}], hsk: 1 },
    { ch: "口", py: "kǒu", tone: 3, radical: "口", sound: "ko", memory: "An open mouth — literally the shape of one.", words: [{zh:"开口",py:"kāi kǒu",mean:"open mouth/speak"},{zh:"路口",py:"lùkǒu",mean:"intersection"}], hsk: 1 },
    { ch: "目", py: "mù", tone: 4, radical: "目", sound: "moo", memory: "An eye drawn vertically — with pupil inside.", words: [{zh:"目的",py:"mùdì",mean:"purpose"},{zh:"目前",py:"mùqián",mean:"currently"}], hsk: 2 },
    { ch: "心", py: "xīn", tone: 1, radical: "心", sound: "xin", memory: "A heart with its vessels — the organ of emotion.", words: [{zh:"开心",py:"kāixīn",mean:"happy"},{zh:"中心",py:"zhōngxīn",mean:"center"}], hsk: 1 },
    { ch: "国", py: "guó", tone: 2, radical: "囗", sound: "gwoh", memory: "A jade 玉 enclosed in borders 囗 — a kingdom/country with treasure inside.", words: [{zh:"中国",py:"Zhōngguó",mean:"China"},{zh:"国家",py:"guójiā",mean:"country"}], hsk: 1 },
    { ch: "生", py: "shēng", tone: 1, radical: "生", sound: "sheng", memory: "A plant growing from the ground — life/birth.", words: [{zh:"生日",py:"shēngrì",mean:"birthday"},{zh:"学生",py:"xuéshēng",mean:"student"}], hsk: 1 },
    { ch: "学", py: "xué", tone: 2, radical: "子", sound: "shweh", memory: "Hands passing knowledge over a child — to learn.", words: [{zh:"学校",py:"xuéxiào",mean:"school"},{zh:"同学",py:"tóngxué",mean:"classmate"}], hsk: 1, dup: true },
    { ch: "校", py: "xiào", tone: 4, radical: "木", sound: "shyao", memory: "Tree 木 + 交 (jiāo) — school building.", words: [{zh:"学校",py:"xuéxiào",mean:"school"},{zh:"校长",py:"xiàozhǎng",mean:"principal"}], hsk: 1 },
    { ch: "店", py: "diàn", tone: 4, radical: "广", sound: "dyen", memory: "Building 广 + 占 (zhàn) — a shop/store.", words: [{zh:"商店",py:"shāngdiàn",mean:"shop"},{zh:"书店",py:"shūdiàn",mean:"bookstore"}], hsk: 1 },
    { ch: "机", py: "jī", tone: 1, radical: "木", sound: "jee", memory: "Tree 木 + 几 (table) — machine/device.", words: [{zh:"手机",py:"shǒujī",mean:"phone"},{zh:"飞机",py:"fēijī",mean:"airplane"}], hsk: 1 },

    // ---- Descriptions & grammar (15) ----
    { ch: "好", py: "hǎo", tone: 3, radical: "女", sound: "how", memory: "Woman 女 + child 子 = good (mother and child = goodness).", words: [{zh:"好的",py:"hǎo de",mean:"okay"},{zh:"你好",py:"nǐ hǎo",mean:"hello"}], hsk: 1 },
    { ch: "不", py: "bù", tone: 4, radical: "一", sound: "boo", memory: "A line blocking a path — no/not.", words: [{zh:"不是",py:"bú shì",mean:"is not"},{zh:"不好",py:"bù hǎo",mean:"not good"}], hsk: 1 },
    { ch: "有", py: "yǒu", tone: 3, radical: "月", sound: "yo", memory: "Hand holding meat 月 — to have/possess.", words: [{zh:"没有",py:"méiyǒu",mean:"don't have"},{zh:"有人",py:"yǒu rén",mean:"someone"}], hsk: 1 },
    { ch: "没", py: "méi", tone: 2, radical: "氵", sound: "may", memory: "Water 氵 + 殳 — washed away = none/not.", words: [{zh:"没有",py:"méiyǒu",mean:"not have"},{zh:"没关系",py:"méi guānxi",mean:"no worries"}], hsk: 1 },
    { ch: "是", py: "shì", tone: 4, radical: "日", sound: "shr", memory: "Sun 日 + correct — 'is' means it's correct/true.", words: [{zh:"不是",py:"bú shì",mean:"is not"},{zh:"是的",py:"shì de",mean:"yes"}], hsk: 1 },
    { ch: "的", py: "de", tone: 0, radical: "白", sound: "duh", memory: "White 白 + spoon 勺 — possessive particle ('s).", words: [{zh:"我的",py:"wǒ de",mean:"my/mine"},{zh:"好的",py:"hǎo de",mean:"okay"}], hsk: 1 },
    { ch: "了", py: "le", tone: 0, radical: "乙", sound: "luh", memory: "A completed action — child wrapped up = done.", words: [{zh:"来了",py:"lái le",mean:"arrived"},{zh:"好了",py:"hǎo le",mean:"done/okay"}], hsk: 1 },
    { ch: "吗", py: "ma", tone: 0, radical: "口", sound: "ma", memory: "Mouth 口 + 马 (horse) — question particle (like 'neigh?'= question).", words: [{zh:"好吗",py:"hǎo ma",mean:"is it good?"},{zh:"是吗",py:"shì ma",mean:"really?"}], hsk: 1 },
    { ch: "很", py: "hěn", tone: 3, radical: "彳", sound: "hen", memory: "Step 彳 + 艮 — very/quite.", words: [{zh:"很好",py:"hěn hǎo",mean:"very good"},{zh:"很多",py:"hěn duō",mean:"very many"}], hsk: 1 },
    { ch: "多", py: "duō", tone: 1, radical: "夕", sound: "dwaw", memory: "Two pieces of meat 夕 stacked — abundance/many.", words: [{zh:"很多",py:"hěn duō",mean:"many"},{zh:"多少",py:"duōshao",mean:"how much"}], hsk: 1 },
    { ch: "少", py: "shǎo", tone: 3, radical: "小", sound: "shao", memory: "Small 小 + stroke — few/little.", words: [{zh:"多少",py:"duōshao",mean:"how much"},{zh:"少数",py:"shǎoshù",mean:"minority"}], hsk: 1 },
    { ch: "什", py: "shén", tone: 2, radical: "亻", sound: "shen", memory: "Person 亻 + 十 (ten) — 'what' (used only in 什么).", words: [{zh:"什么",py:"shénme",mean:"what"}], hsk: 1 },
    { ch: "么", py: "me", tone: 0, radical: "丿", sound: "muh", memory: "Stroke 丿 + 厶 — part of 'what' 什么.", words: [{zh:"什么",py:"shénme",mean:"what"},{zh:"怎么",py:"zěnme",mean:"how"}], hsk: 1 },
    { ch: "这", py: "zhè", tone: 4, radical: "辶", sound: "juh", memory: "Walking 辶 + words 言 — pointing at this thing.", words: [{zh:"这个",py:"zhège",mean:"this"},{zh:"这里",py:"zhèlǐ",mean:"here"}], hsk: 1 },
    { ch: "那", py: "nà", tone: 4, radical: "阝", sound: "nah", memory: "Ear 阝 pointing away — that one over there.", words: [{zh:"那个",py:"nàge",mean:"that"},{zh:"那里",py:"nàlǐ",mean:"there"}], hsk: 1 },

    // ---- Food & daily life (10) ----
    { ch: "茶", py: "chá", tone: 2, radical: "艹", sound: "chah", memory: "Grass 艹 + person 人 + tree 木 — tea leaves picked by people from trees.", words: [{zh:"喝茶",py:"hē chá",mean:"drink tea"},{zh:"茶馆",py:"cháguǎn",mean:"teahouse"}], hsk: 1 },
    { ch: "饭", py: "fàn", tone: 4, radical: "饣", sound: "fan", memory: "Food 饣 + 反 (fǎn) — a meal.", words: [{zh:"吃饭",py:"chīfàn",mean:"eat"},{zh:"早饭",py:"zǎofàn",mean:"breakfast"}], hsk: 1 },
    { ch: "水", py: "shuǐ", tone: 3, radical: "水", sound: "shway", memory: "Flowing water pictogram.", words: [{zh:"喝水",py:"hē shuǐ",mean:"drink water"},{zh:"矿泉水",py:"kuàngquán shuǐ",mean:"mineral water"}], hsk: 1, dup: true },
    { ch: "果", py: "guǒ", tone: 3, radical: "木", sound: "gwaw", memory: "Tree 木 with a round fruit on top — fruit.", words: [{zh:"苹果",py:"píngguǒ",mean:"apple"},{zh:"水果",py:"shuǐguǒ",mean:"fruit"}], hsk: 1 },
    { ch: "米", py: "mǐ", tone: 3, radical: "米", sound: "mee", memory: "Grain scattered — the dots represent rice grains.", words: [{zh:"米饭",py:"mǐfàn",mean:"rice"},{zh:"玉米",py:"yùmǐ",mean:"corn"}], hsk: 2 },
    { ch: "肉", py: "ròu", tone: 4, radical: "肉", sound: "row", memory: "An animal with ribs visible — meat.", words: [{zh:"猪肉",py:"zhūròu",mean:"pork"},{zh:"牛肉",py:"niúròu",mean:"beef"}], hsk: 2 },
    { ch: "菜", py: "cài", tone: 4, radical: "艹", sound: "tsie", memory: "Plant 艹 + pluck 采 — vegetable/dish.", words: [{zh:"点菜",py:"diǎn cài",mean:"order food"},{zh:"菜单",py:"càidān",mean:"menu"}], hsk: 1 },
    { ch: "钱", py: "qián", tone: 2, radical: "钅", sound: "chyen", memory: "Gold/metal 钅 + two halberds 戋 — money (ancient: metal weapons = wealth).", words: [{zh:"多少钱",py:"duōshao qián",mean:"how much money"},{zh:"花钱",py:"huā qián",mean:"spend money"}], hsk: 1 },
    { ch: "电", py: "diàn", tone: 4, radical: "日", sound: "dyen", memory: "Lightning captured in a container — electricity.", words: [{zh:"电脑",py:"diànnǎo",mean:"computer"},{zh:"电视",py:"diànshì",mean:"TV"}], hsk: 1 },
    { ch: "猫", py: "māo", tone: 1, radical: "犭", sound: "mao", memory: "Animal 犭 + seedling 苗 (miáo) — 'miao' = cat sound!", words: [{zh:"小猫",py:"xiǎo māo",mean:"kitten"},{zh:"猫粮",py:"māoliáng",mean:"cat food"}], hsk: 2 },

    // ---- More essentials (10) ----
    { ch: "电", py: "diàn", tone: 4, radical: "日", sound: "dyen", memory: "Lightning in a box — electricity.", words: [{zh:"电脑",py:"diànnǎo",mean:"computer"},{zh:"电视",py:"diànshì",mean:"TV"}], hsk: 1, dup: true },
    { ch: "脑", py: "nǎo", tone: 3, radical: "月", sound: "now", memory: "Flesh 月 + 文 (text) + brain components — brain/computer.", words: [{zh:"电脑",py:"diànnǎo",mean:"computer"},{zh:"脑筋",py:"nǎojīn",mean:"mind/brain"}], hsk: 1 },
    { ch: "视", py: "shì", tone: 4, radical: "礻", sound: "shr", memory: "Spirit 礻 + see 见 — to view/watch (TV).", words: [{zh:"电视",py:"diànshì",mean:"TV"},{zh:"视频",py:"shìpín",mean:"video"}], hsk: 2 },
    { ch: "话", py: "huà", tone: 4, radical: "讠", sound: "hwah", memory: "Speech 讠+ tongue 舌 — words/speech.", words: [{zh:"说话",py:"shuōhuà",mean:"speak"},{zh:"中国话",py:"Zhōngguó huà",mean:"Chinese language"}], hsk: 1 },
    { ch: "音", py: "yīn", tone: 1, radical: "音", sound: "yin", memory: "Sound 立 + 日 (sun) — sound rises like the sun.", words: [{zh:"音乐",py:"yīnyuè",mean:"music"},{zh:"声音",py:"shēngyīn",mean:"sound"}], hsk: 1 },
    { ch: "乐", py: "yuè", tone: 4, radical: "木", sound: "yweh", memory: "A musical instrument on a stand — music/happy.", words: [{zh:"音乐",py:"yīnyuè",mean:"music"},{zh:"快乐",py:"kuàilè",mean:"happy"}], hsk: 1 },
    { ch: "快", py: "kuài", tone: 4, radical: "忄", sound: "kwie", memory: "Heart 忄 + 夬 — quick heart = fast/happy.", words: [{zh:"快乐",py:"kuàilè",mean:"happy"},{zh:"快递",py:"kuàidì",mean:"express delivery"}], hsk: 1 },
    { ch: "新", py: "xīn", tone: 1, radical: "斤", sound: "xin", memory: "Tree 立 + wood 木 + axe 斤 — freshly cut = new.", words: [{zh:"新闻",py:"xīnwén",mean:"news"},{zh:"新年",py:"xīnnián",mean:"new year"}], hsk: 1 },
    { ch: "老", py: "lǎo", tone: 3, radical: "老", sound: "lao", memory: "An old person with a cane — old/venerable.", words: [{zh:"老师",py:"lǎoshī",mean:"teacher"},{zh:"老人",py:"lǎorén",mean:"elderly"}], hsk: 1 },
    { ch: "师", py: "shī", tone: 1, radical: "巾", sound: "shr", memory: "A master — cloth 巾 next to a pile = division of labor.", words: [{zh:"老师",py:"lǎoshī",mean:"teacher"},{zh:"师父",py:"shīfu",mean:"master"}], hsk: 1 },
  ],

  // Pinyin tone info for the Tones game
  tones: [
    { num: 1, name: "1st Tone (High)", mark: "ā", desc: "High and steady pitch — like singing a sustained note.", examples: [{zh:"妈妈",py:"māma"},{zh:"开车",py:"kāichē"},{zh:"生日",py:"shēngrì"}] },
    { num: 2, name: "2nd Tone (Rising)", mark: "á", desc: "Rising pitch — like asking 'huh?' or 'what?'", examples: [{zh:"什么",py:"shénme"},{zh:"人",py:"rén"},{zh:"钱",py:"qián"}] },
    { num: 3, name: "3rd Tone (Dipping)", mark: "ǎ", desc: "Dips down then rises — like 'weeell...' in English.", examples: [{zh:"你好",py:"nǐ hǎo"},{zh:"我",py:"wǒ"},{zh:"水",py:"shuǐ"}] },
    { num: 4, name: "4th Tone (Falling)", mark: "à", desc: "Sharp falling pitch — like an angry 'NO!'", examples: [{zh:"不是",py:"bú shì"},{zh:"饭",py:"fàn"},{zh:"电",py:"diàn"}] },
    { num: 0, name: "Neutral Tone (Light)", mark: "a", desc: "Short and light — no emphasis, quick and soft.", examples: [{zh:"的",py:"de"},{zh:"了",py:"le"},{zh:"吗",py:"ma"}] },
  ],

  // Tone descriptions for sort game & reference
  toneInfo: {
    1: { label: "1st Tone", color: "tone1", baseline: "High and steady" },
    2: { label: "2nd Tone", color: "tone2", baseline: "Rising pitch" },
    3: { label: "3rd Tone", color: "tone3", baseline: "Dipping then rising" },
    4: { label: "4th Tone", color: "tone4", baseline: "Sharp falling" },
    0: { label: "Neutral", color: "tone0", baseline: "Light, unstressed" },
  },

  allWords: null
};

// Remove duplicates
ZH_DATA.characters = ZH_DATA.characters.filter(c => !c.dup);

// Build flat word list
ZH_DATA.allWords = (() => {
  const list = [];
  ZH_DATA.characters.forEach(c => {
    (c.words || []).forEach(w => list.push({ ...w, ch: c.ch, tone: c.tone }));
  });
  const seen = new Set();
  return list.filter(w => { if (seen.has(w.zh)) return false; seen.add(w.zh); return true; });
})();

if (typeof window !== "undefined") window.ZH_DATA = ZH_DATA;
if (typeof module !== "undefined") module.exports = ZH_DATA;
