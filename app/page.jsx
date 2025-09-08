"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const vocabularyData = {
  "Greetings & Phrases": [
    {
      japanese: "こんにちは",
      romanji: "konnichiwa",
      english: "Hello / Good Afternoon",
      example: "こんにちは、元気ですか？",
      exampleRomanji: "Konnichiwa, genki desu ka?",
      exampleEnglish: "Hello, how are you?",
    },
    {
      japanese: "おはようございます",
      romanji: "ohayō gozaimasu",
      english: "Good Morning",
      example: "おはようございます、いい天気ですね。",
      exampleRomanji: "Ohayō gozaimasu, ii tenki desu ne.",
      exampleEnglish: "Good morning, the weather is nice, isn't it?",
    },
    {
      japanese: "こんばんは",
      romanji: "konbanwa",
      english: "Good Evening",
      example: "こんばんは、お仕事お疲れ様です。",
      exampleRomanji: "Konbanwa, o-shigoto otsukaresama desu.",
      exampleEnglish: "Good evening, thank you for your hard work.",
    },
    {
      japanese: "おやすみなさい",
      romanji: "oyasuminasai",
      english: "Good Night",
      example: "おやすみなさい、また明日。",
      exampleRomanji: "Oyasuminasai, mata ashita.",
      exampleEnglish: "Good night, see you tomorrow.",
    },
    {
      japanese: "さようなら",
      romanji: "sayōnara",
      english: "Goodbye",
      example: "さようなら、また会いましょう。",
      exampleRomanji: "Sayōnara, mata aimashō.",
      exampleEnglish: "Goodbye, let's meet again.",
    },
    {
      japanese: "ありがとうございます",
      romanji: "arigatō gozaimasu",
      english: "Thank you",
      example: "ありがとうございます、助かりました。",
      exampleRomanji: "Arigatō gozaimasu, tasukarimashita.",
      exampleEnglish: "Thank you, you helped me a lot.",
    },
    {
      japanese: "どういたしまして",
      romanji: "dō itashimashite",
      english: "You're welcome",
      example: "どういたしまして、いつでもどうぞ。",
      exampleRomanji: "Dō itashimashite, itsudemo dōzo.",
      exampleEnglish: "You're welcome, anytime.",
    },
    {
      japanese: "すみません",
      romanji: "sumimasen",
      english: "Excuse me / I'm sorry",
      example: "すみません、ちょっと通ります。",
      exampleRomanji: "Sumimasen, chotto tōrimasu.",
      exampleEnglish: "Excuse me, I'd like to get by.",
    },
    {
      japanese: "お願いします",
      romanji: "onegaishimasu",
      english: "Please",
      example: "お水を一杯お願いします。",
      exampleRomanji: "O-mizu o ippai onegaishimasu.",
      exampleEnglish: "A glass of water, please.",
    },
    {
      japanese: "はい",
      romanji: "hai",
      english: "Yes",
      example: "はい、そうです。",
      exampleRomanji: "Hai, sō desu.",
      exampleEnglish: "Yes, that's right.",
    },
    {
      japanese: "いいえ",
      romanji: "iie",
      english: "No",
      example: "いいえ、違います。",
      exampleRomanji: "Iie, chigaimasu.",
      exampleEnglish: "No, that's wrong.",
    },
    {
      japanese: "わかりません",
      romanji: "wakarimasen",
      english: "I don't understand",
      example: "すみません、日本語がわかりません。",
      exampleRomanji: "Sumimasen, nihongo ga wakarimasen.",
      exampleEnglish: "I'm sorry, I don't understand Japanese.",
    },
    {
      japanese: "はじめまして",
      romanji: "hajimemashite",
      english: "Nice to meet you",
      example: "はじめまして、どうぞよろしく。",
      exampleRomanji: "Hajimemashite, dōzo yoroshiku.",
      exampleEnglish: "Nice to meet you, pleased to make your acquaintance.",
    },
    {
      japanese: "お元気ですか？",
      romanji: "o-genki desu ka?",
      english: "How are you?",
      example: "ええ、元気です。あなたは？",
      exampleRomanji: "Ee, genki desu. Anata wa?",
      exampleEnglish: "Yes, I'm well. And you?",
    },
    {
      japanese: "いただきます",
      romanji: "itadakimasu",
      english: "I humbly receive",
      example: "いただきます！とても美味しそうです。",
      exampleRomanji: "Itadakimasu! Totemo oishisō desu.",
      exampleEnglish: "I'll start eating! It looks very delicious.",
    },
    {
      japanese: "ごちそうさまでした",
      romanji: "gochisōsama deshita",
      english: "Thank you for the meal",
      example: "ごちそうさまでした、美味しかったです。",
      exampleRomanji: "Gochisōsama deshita, oishikatta desu.",
      exampleEnglish: "Thank you for the meal, it was delicious.",
    },
    {
      japanese: "ただいま",
      romanji: "tadaima",
      english: "I'm home",
      example: "ただいま、今日のご飯は何？",
      exampleRomanji: "Tadaima, kyō no gohan wa nani?",
      exampleEnglish: "I'm home, what's for dinner today?",
    },
    {
      japanese: "おかえりなさい",
      romanji: "okaerinasai",
      english: "Welcome home",
      example: "おかえりなさい、お疲れ様。",
      exampleRomanji: "Okaerinasai, otsukaresama.",
      exampleEnglish: "Welcome home, you must be tired.",
    },
    {
      japanese: "いってきます",
      romanji: "ittekimasu",
      english: "I'm leaving",
      example: "いってきます、夜までには帰ります。",
      exampleRomanji: "Ittekimasu, yoru made ni wa kaerimasu.",
      exampleEnglish: "I'm leaving, I'll be back by evening.",
    },
    {
      japanese: "いってらっしゃい",
      romanji: "itterasshai",
      english: "Go and come back",
      example: "いってらっしゃい、気をつけてね。",
      exampleRomanji: "Itterasshai, ki o tsukete ne.",
      exampleEnglish: "Have a good trip, be careful.",
    },
  ],
  "Pronouns & People": [
    {
      japanese: "私",
      romanji: "watashi",
      english: "I / Me",
      example: "私の名前は田中です。",
      exampleRomanji: "Watashi no namae wa Tanaka desu.",
      exampleEnglish: "My name is Tanaka.",
    },
    {
      japanese: "あなた",
      romanji: "anata",
      english: "You",
      example: "あなたは学生ですか？",
      exampleRomanji: "Anata wa gakusei desu ka?",
      exampleEnglish: "Are you a student?",
    },
    {
      japanese: "彼",
      romanji: "kare",
      english: "He / Him",
      example: "彼は私の友達です。",
      exampleRomanji: "Kare wa watashi no tomodachi desu.",
      exampleEnglish: "He is my friend.",
    },
    {
      japanese: "彼女",
      romanji: "kanojo",
      english: "She / Her",
      example: "彼女はとても優しいです。",
      exampleRomanji: "Kanojo wa totemo yasashii desu.",
      exampleEnglish: "She is very kind.",
    },
    {
      japanese: "私たち",
      romanji: "watashi-tachi",
      english: "We / Us",
      example: "私たちは日本人です。",
      exampleRomanji: "Watashi-tachi wa nihonjin desu.",
      exampleEnglish: "We are Japanese.",
    },
    {
      japanese: "あなたたち",
      romanji: "anata-tachi",
      english: "You (plural)",
      example: "あなたたちはどこから来ましたか？",
      exampleRomanji: "Anata-tachi wa doko kara kimashita ka?",
      exampleEnglish: "Where did you all come from?",
    },
    {
      japanese: "彼ら",
      romanji: "karera",
      english: "They (male/mixed)",
      example: "彼らはサッカーが好きです。",
      exampleRomanji: "Karera wa sakka ga suki desu.",
      exampleEnglish: "They like soccer.",
    },
    {
      japanese: "彼女ら",
      romanji: "kanojora",
      english: "They (female)",
      example: "彼女らは歌を歌っています。",
      exampleRomanji: "Kanojora wa uta o utatte imasu.",
      exampleEnglish: "They are singing a song.",
    },
    {
      japanese: "人",
      romanji: "hito",
      english: "Person",
      example: "あの人は誰ですか？",
      exampleRomanji: "Ano hito wa dare desu ka?",
      exampleEnglish: "Who is that person?",
    },
    {
      japanese: "男",
      romanji: "otoko",
      english: "Man",
      example: "あの男の人を知っていますか？",
      exampleRomanji: "Ano otoko no hito o shitte imasu ka?",
      exampleEnglish: "Do you know that man?",
    },
    {
      japanese: "女",
      romanji: "onna",
      english: "Woman",
      example: "女の人が話しています。",
      exampleRomanji: "Onna no hito ga hanashite imasu.",
      exampleEnglish: "A woman is talking.",
    },
    {
      japanese: "子供",
      romanji: "kodomo",
      english: "Child",
      example: "子供が公園で遊んでいます。",
      exampleRomanji: "Kodomo ga kōen de asonde imasu.",
      exampleEnglish: "The children are playing in the park.",
    },
    {
      japanese: "友達",
      romanji: "tomodachi",
      english: "Friend",
      example: "友達と一緒に映画を見ます。",
      exampleRomanji: "Tomodachi to issho ni eiga o mimasu.",
      exampleEnglish: "I'm going to watch a movie with a friend.",
    },
    {
      japanese: "先生",
      romanji: "sensei",
      english: "Teacher",
      example: "先生、質問があります。",
      exampleRomanji: "Sensei, shitsumon ga arimasu.",
      exampleEnglish: "Teacher, I have a question.",
    },
    {
      japanese: "学生",
      romanji: "gakusei",
      english: "Student",
      example: "私は大学生です。",
      exampleRomanji: "Watashi wa daigakusei desu.",
      exampleEnglish: "I am a university student.",
    },
    {
      japanese: "家族",
      romanji: "kazoku",
      english: "Family",
      example: "家族と旅行に行きます。",
      exampleRomanji: "Kazoku to ryokō ni ikimasu.",
      exampleEnglish: "I'm going on a trip with my family.",
    },
    {
      japanese: "お父さん",
      romanji: "otōsan",
      english: "Father",
      example: "お父さんは仕事に行きました。",
      exampleRomanji: "Otōsan wa shigoto ni ikimashita.",
      exampleEnglish: "My father went to work.",
    },
    {
      japanese: "お母さん",
      romanji: "okāsan",
      english: "Mother",
      example: "お母さんが料理を作ってくれます。",
      exampleRomanji: "Okāsan ga ryōri o tsukutte kuremasu.",
      exampleEnglish: "My mother cooks for me.",
    },
    {
      japanese: "お兄さん",
      romanji: "onīsan",
      english: "Older brother",
      example: "お兄さんは医者です。",
      exampleRomanji: "Onīsan wa isha desu.",
      exampleEnglish: "My older brother is a doctor.",
    },
    {
      japanese: "お姉さん",
      romanji: "onēsan",
      english: "Older sister",
      example: "お姉さんはピアノが上手です。",
      exampleRomanji: "Onēsan wa piano ga jōzu desu.",
      exampleEnglish: "My older sister is good at piano.",
    },
    {
      japanese: "弟",
      romanji: "otōto",
      english: "Younger brother",
      example: "弟はまだ小さいです。",
      exampleRomanji: "Otōto wa mada chiisai desu.",
      exampleEnglish: "My younger brother is still small.",
    },
    {
      japanese: "妹",
      romanji: "imōto",
      english: "Younger sister",
      example: "妹と買い物をします。",
      exampleRomanji: "Imōto to kaimono o shimasu.",
      exampleEnglish: "I'm going shopping with my younger sister.",
    },
    {
      japanese: "祖父",
      romanji: "sofu",
      english: "Grandfather",
      example: "祖父は庭で花を育てています。",
      exampleRomanji: "Sofu wa niwa de hana o sodatete imasu.",
      exampleEnglish: "My grandfather is growing flowers in the garden.",
    },
    {
      japanese: "祖母",
      romanji: "sobo",
      english: "Grandmother",
      example: "祖母はいつも元気です。",
      exampleRomanji: "Sobo wa itsumo genki desu.",
      exampleEnglish: "My grandmother is always healthy.",
    },
    {
      japanese: "医者",
      romanji: "isha",
      english: "Doctor",
      example: "医者に診てもらいました。",
      exampleRomanji: "Isha ni mite moraimashita.",
      exampleEnglish: "I had a doctor examine me.",
    },
    {
      japanese: "警察官",
      romanji: "keisatsukan",
      english: "Police officer",
      example: "警察官に道を尋ねました。",
      exampleRomanji: "Keisatsukan ni michi o tazunemashita.",
      exampleEnglish: "I asked a police officer for directions.",
    },
    {
      japanese: "会社員",
      romanji: "kaishain",
      english: "Company employee",
      example: "私は会社の社員です。",
      exampleRomanji: "Watashi wa kaisha no shain desu.",
      exampleEnglish: "I am a company employee.",
    },
    {
      japanese: "日本人",
      romanji: "nihonjin",
      english: "Japanese person",
      example: "日本人は親切です。",
      exampleRomanji: "Nihonjin wa shinsetsu desu.",
      exampleEnglish: "Japanese people are kind.",
    },
    {
      japanese: "外国人",
      romanji: "gaikokujin",
      english: "Foreigner",
      example: "彼は外国人です。",
      exampleRomanji: "Kare wa gaikokujin desu.",
      exampleEnglish: "He is a foreigner.",
    },
    {
      japanese: "名前",
      romanji: "namae",
      english: "Name",
      example: "お名前は何ですか？",
      exampleRomanji: "O-namae wa nan desu ka?",
      exampleEnglish: "What is your name?",
    },
  ],
  "Nouns": [
    {
      japanese: "部屋",
      romanji: "heya",
      english: "Room",
      example: "この部屋はとてもきれいです。",
      exampleRomanji: "Kono heya wa totemo kirei desu.",
      exampleEnglish: "This room is very clean.",
    },
    {
      japanese: "家",
      romanji: "ie / uchi",
      english: "House",
      example: "家に帰りましょう。",
      exampleRomanji: "Ie ni kaerimashō.",
      exampleEnglish: "Let's go home.",
    },
    {
      japanese: "机",
      romanji: "tsukue",
      english: "Desk",
      example: "机の上に本があります。",
      exampleRomanji: "Tsukue no ue ni hon ga arimasu.",
      exampleEnglish: "There is a book on the desk.",
    },
    {
      japanese: "椅子",
      romanji: "isu",
      english: "Chair",
      example: "椅子に座ってください。",
      exampleRomanji: "Isu ni suwatte kudasai.",
      exampleEnglish: "Please sit on the chair.",
    },
    {
      japanese: "ドア",
      romanji: "doa",
      english: "Door",
      example: "ドアを開けてください。",
      exampleRomanji: "Doa o akete kudasai.",
      exampleEnglish: "Please open the door.",
    },
    {
      japanese: "窓",
      romanji: "mado",
      english: "Window",
      example: "窓から外を見ます。",
      exampleRomanji: "Mado kara soto o mimasu.",
      exampleEnglish: "I look outside from the window.",
    },
    {
      japanese: "冷蔵庫",
      romanji: "reizōko",
      english: "Refrigerator",
      example: "冷蔵庫に牛乳があります。",
      exampleRomanji: "Reizōko ni gyūnyū ga arimasu.",
      exampleEnglish: "There is milk in the refrigerator.",
    },
    {
      japanese: "洗濯機",
      romanji: "sentakuki",
      english: "Washing machine",
      example: "洗濯機で服を洗います。",
      exampleRomanji: "Sentakuki de fuku o araimasu.",
      exampleEnglish: "I wash clothes in the washing machine.",
    },
    {
      japanese: "エアコン",
      romanji: "eakon",
      english: "Air conditioner",
      example: "エアコンをつけましょうか？",
      exampleRomanji: "Eakon o tsukemashō ka?",
      exampleEnglish: "Shall I turn on the air conditioner?",
    },
    {
      japanese: "掃除機",
      romanji: "sōjiki",
      english: "Vacuum cleaner",
      example: "掃除機で部屋を掃除します。",
      exampleRomanji: "Sōjiki de heya o sōji shimasu.",
      exampleEnglish: "I'll clean the room with the vacuum cleaner.",
    },
    {
      japanese: "お風呂",
      romanji: "ofuro",
      english: "Bathtub / Bath",
      example: "毎晩お風呂に入ります。",
      exampleRomanji: "Maiban ofuro ni hairimasu.",
      exampleEnglish: "I take a bath every night.",
    },
    {
      japanese: "シャワー",
      romanji: "shawā",
      english: "Shower",
      example: "朝シャワーを浴びます。",
      exampleRomanji: "Asa shawā o abimasu.",
      exampleEnglish: "I take a shower in the morning.",
    },
    {
      japanese: "トイレ",
      romanji: "toire",
      english: "Toilet",
      example: "トイレはどこですか？",
      exampleRomanji: "Toire wa doko desu ka?",
      exampleEnglish: "Where is the toilet?",
    },
    {
      japanese: "タオル",
      romanji: "taoru",
      english: "Towel",
      example: "このタオルを使ってください。",
      exampleRomanji: "Kono taoru o tsukatte kudasai.",
      exampleEnglish: "Please use this towel.",
    },
    {
      japanese: "石鹸",
      romanji: "sekken",
      english: "Soap",
      example: "石鹸で手を洗います。",
      exampleRomanji: "Sekken de te o araimasu.",
      exampleEnglish: "I wash my hands with soap.",
    },
    {
      japanese: "歯磨き",
      romanji: "hamigaki",
      english: "Toothbrushing",
      example: "歯磨きをしてください。",
      exampleRomanji: "Hamigaki o shite kudasai.",
      exampleEnglish: "Please brush your teeth.",
    },
    {
      japanese: "服",
      romanji: "fuku",
      english: "Clothes",
      example: "新しい服を買いました。",
      exampleRomanji: "Atarashii fuku o kaimashita.",
      exampleEnglish: "I bought new clothes.",
    },
    {
      japanese: "靴",
      romanji: "kutsu",
      english: "Shoes",
      example: "この靴はちょっと小さいです。",
      exampleRomanji: "Kono kutsu wa chotto chiisai desu.",
      exampleEnglish: "These shoes are a little small.",
    },
    {
      japanese: "帽子",
      romanji: "bōshi",
      english: "Hat",
      example: "帽子をかぶります。",
      exampleRomanji: "Bōshi o kaburimasu.",
      exampleEnglish: "I wear a hat.",
    },
    {
      japanese: "眼鏡",
      romanji: "megane",
      english: "Glasses",
      example: "眼鏡をかけます。",
      exampleRomanji: "Megane o kakemasu.",
      exampleEnglish: "I put on my glasses.",
    },
    {
      japanese: "携帯電話",
      romanji: "keitai denwa",
      english: "Mobile phone",
      example: "携帯電話を忘れました。",
      exampleRomanji: "Keitai denwa o wasuremashita.",
      exampleEnglish: "I forgot my mobile phone.",
    },
    {
      japanese: "パソコン",
      romanji: "pasokon",
      english: "Personal computer",
      example: "パソコンで仕事をします。",
      exampleRomanji: "Pasokon de shigoto o shimasu.",
      exampleEnglish: "I work on my computer.",
    },
    {
      japanese: "テレビ",
      romanji: "terebi",
      english: "Television",
      example: "毎晩テレビを見ます。",
      exampleRomanji: "Maiban terebi o mimasu.",
      exampleEnglish: "I watch TV every night.",
    },
    {
      japanese: "カメラ",
      romanji: "kamera",
      english: "Camera",
      example: "カメラで写真を撮ります。",
      exampleRomanji: "Kamera de shashin o torimasu.",
      exampleEnglish: "I take pictures with a camera.",
    },
    {
      japanese: "時計",
      romanji: "tokei",
      english: "Clock / Watch",
      example: "この時計は高いです。",
      exampleRomanji: "Kono tokei wa takai desu.",
      exampleEnglish: "This watch is expensive.",
    },
    {
      japanese: "鍵",
      romanji: "kagi",
      english: "Key",
      example: "鍵をなくしました。",
      exampleRomanji: "Kagi o nakushimashita.",
      exampleEnglish: "I lost my key.",
    },
    {
      japanese: "財布",
      romanji: "saifu",
      english: "Wallet",
      example: "財布はカバンの中にあります。",
      exampleRomanji: "Saifu wa kaban no naka ni arimasu.",
      exampleEnglish: "The wallet is inside the bag.",
    },
    {
      japanese: "小銭",
      romanji: "kozeni",
      english: "Small change",
      example: "小銭がありません。",
      exampleRomanji: "Kozeni ga arimasen.",
      exampleEnglish: "I don't have small change.",
    },
    {
      japanese: "荷物",
      romanji: "nimotsu",
      english: "Luggage",
      example: "荷物がとても重いです。",
      exampleRomanji: "Nimotsu ga totemo omoi desu.",
      exampleEnglish: "My luggage is very heavy.",
    },
    {
      japanese: "学校",
      romanji: "gakkō",
      english: "School",
      example: "毎日学校に行きます。",
      exampleRomanji: "Mainichi gakkō ni ikimasu.",
      exampleEnglish: "I go to school every day.",
    },
    {
      japanese: "会社",
      romanji: "kaisha",
      english: "Company",
      example: "会社で働いています。",
      exampleRomanji: "Kaisha de hataraite imasu.",
      exampleEnglish: "I work at a company.",
    },
    {
      japanese: "駅",
      romanji: "eki",
      english: "Station",
      example: "駅はどこですか？",
      exampleRomanji: "Eki wa doko desu ka?",
      exampleEnglish: "Where is the station?",
    },
    {
      japanese: "病院",
      romanji: "byōin",
      english: "Hospital",
      example: "病院に行かなければなりません。",
      exampleRomanji: "Byōin ni ikanakereba narimasen.",
      exampleEnglish: "I have to go to the hospital.",
    },
    {
      japanese: "銀行",
      romanji: "ginkō",
      english: "Bank",
      example: "銀行でお金をおろします。",
      exampleRomanji: "Ginkō de o-kane o oroshimasu.",
      exampleEnglish: "I'll withdraw money at the bank.",
    },
    {
      japanese: "郵便局",
      romanji: "yūbin-kyoku",
      english: "Post office",
      example: "郵便局で手紙を出します。",
      exampleRomanji: "Yūbin-kyoku de tegami o dashimasu.",
      exampleEnglish: "I'll mail a letter at the post office.",
    },
    {
      japanese: "スーパー",
      romanji: "sūpā",
      english: "Supermarket",
      example: "スーパーで買い物をします。",
      exampleRomanji: "Sūpā de kaimono o shimasu.",
      exampleEnglish: "I'll go shopping at the supermarket.",
    },
    {
      japanese: "レストラン",
      romanji: "resutoran",
      english: "Restaurant",
      example: "レストランで食事をします。",
      exampleRomanji: "Resutoran de shokuji o shimasu.",
      exampleEnglish: "I'll eat at a restaurant.",
    },
    {
      japanese: "デパート",
      romanji: "depāto",
      english: "Department store",
      example: "デパートでプレゼントを買います。",
      exampleRomanji: "Depāto de purezento o kaimasu.",
      exampleEnglish: "I'll buy a present at the department store.",
    },
    {
      japanese: "公園",
      romanji: "kōen",
      english: "Park",
      example: "公園で散歩します。",
      exampleRomanji: "Kōen de sanpo shimasu.",
      exampleEnglish: "I'll take a walk in the park.",
    },
    {
      japanese: "図書館",
      romanji: "toshokan",
      english: "Library",
      example: "図書館で本を借ります。",
      exampleRomanji: "Toshokan de hon o karimasu.",
      exampleEnglish: "I'll borrow a book from the library.",
    },
    {
      japanese: "映画館",
      romanji: "eigakan",
      english: "Movie theater",
      example: "映画館で映画を見ます。",
      exampleRomanji: "Eigakan de eiga o mimasu.",
      exampleEnglish: "I'll watch a movie at the movie theater.",
    },
    {
      japanese: "ホテル",
      romanji: "hoteru",
      english: "Hotel",
      example: "ホテルに泊まります。",
      exampleRomanji: "Hoteru ni tomarimasu.",
      exampleEnglish: "I'll stay at a hotel.",
    },
    {
      japanese: "町",
      romanji: "machi",
      english: "Town",
      example: "この町はとてもにぎやかです。",
      exampleRomanji: "Kono machi wa totemo nigiyaka desu.",
      exampleEnglish: "This town is very lively.",
    },
    {
      japanese: "国",
      romanji: "kuni",
      english: "Country",
      example: "どこの国から来ましたか？",
      exampleRomanji: "Doko no kuni kara kimashita ka?",
      exampleEnglish: "What country are you from?",
    },
    {
      japanese: "日本",
      romanji: "nihon",
      english: "Japan",
      example: "私は日本に住んでいます。",
      exampleRomanji: "Watashi wa Nihon ni sunde imasu.",
      exampleEnglish: "I live in Japan.",
    },
    {
      japanese: "空港",
      romanji: "kūkō",
      english: "Airport",
      example: "空港に行かなければなりません。",
      exampleRomanji: "Kūkō ni ikanakereba narimasen.",
      exampleEnglish: "I have to go to the airport.",
    },
    {
      japanese: "道",
      romanji: "michi",
      english: "Road / Way",
      example: "この道はまっすぐです。",
      exampleRomanji: "Kono michi wa massugu desu.",
      exampleEnglish: "This road is straight.",
    },
    {
      japanese: "切符",
      romanji: "kippu",
      english: "Ticket",
      example: "切符を二枚ください。",
      exampleRomanji: "Kippu o ni-mai kudasai.",
      exampleEnglish: "Two tickets, please.",
    },
    {
      japanese: "地図",
      romanji: "chizu",
      english: "Map",
      example: "地図を見てください。",
      exampleRomanji: "Chizu o mite kudasai.",
      exampleEnglish: "Please look at the map.",
    },
    {
      japanese: "住所",
      romanji: "jūsho",
      english: "Address",
      example: "住所を教えてください。",
      exampleRomanji: "Jūsho o oshiete kudasai.",
      exampleEnglish: "Please tell me your address.",
    },
    {
      japanese: "パスポート",
      romanji: "pasupōto",
      english: "Passport",
      example: "パスポートをなくしました。",
      exampleRomanji: "Pasupōto o nakushimashita.",
      exampleEnglish: "I lost my passport.",
    },
    {
      japanese: "ビザ",
      romanji: "biza",
      english: "Visa",
      example: "ビザが必要です。",
      exampleRomanji: "Biza ga hitsuyō desu.",
      exampleEnglish: "A visa is necessary.",
    },
    {
      japanese: "お土産",
      romanji: "omiyage",
      english: "Souvenir",
      example: "お土産を買いました。",
      exampleRomanji: "Omiyage o kaimashita.",
      exampleEnglish: "I bought a souvenir.",
    },
  ],
  Verbs: [
    {
      japanese: "たべる",
      romanji: "taberu",
      english: "To eat",
      example: "朝ごはんを食べます。",
      exampleRomanji: "Asagohan o tabemasu.",
      exampleEnglish: "I eat breakfast.",
    },
    {
      japanese: "のむ",
      romanji: "nomu",
      english: "To drink",
      example: "水を飲みます。",
      exampleRomanji: "Mizu o nomimasu.",
      exampleEnglish: "I drink water.",
    },
    {
      japanese: "みる",
      romanji: "miru",
      english: "To see/watch",
      example: "テレビを見ます。",
      exampleRomanji: "Terebi o mimasu.",
      exampleEnglish: "I watch TV.",
    },
    {
      japanese: "きく",
      romanji: "kiku",
      english: "To listen/hear",
      example: "音楽を聞きます。",
      exampleRomanji: "Ongaku o kikimasu.",
      exampleEnglish: "I listen to music.",
    },
    {
      japanese: "はなす",
      romanji: "hanasu",
      english: "To speak",
      example: "日本語を話します。",
      exampleRomanji: "Nihongo o hanashimasu.",
      exampleEnglish: "I speak Japanese.",
    },
    {
      japanese: "よむ",
      romanji: "yomu",
      english: "To read",
      example: "本を読みます。",
      exampleRomanji: "Hon o yomimasu.",
      exampleEnglish: "I read a book.",
    },
    {
      japanese: "かく",
      romanji: "kaku",
      english: "To write",
      example: "手紙を書きます。",
      exampleRomanji: "Tegami o kakimasu.",
      exampleEnglish: "I write a letter.",
    },
    {
      japanese: "あるく",
      romanji: "aruku",
      english: "To walk",
      example: "公園を歩きます。",
      exampleRomanji: "Kōen o arukimasu.",
      exampleEnglish: "I walk in the park.",
    },
    {
      japanese: "はしる",
      romanji: "hashiru",
      english: "To run",
      example: "毎朝走ります。",
      exampleRomanji: "Maiasa hashirimasu.",
      exampleEnglish: "I run every morning.",
    },
    {
      japanese: "およぐ",
      romanji: "oyogu",
      english: "To swim",
      example: "海で泳ぎます。",
      exampleRomanji: "Umi de oyogimasu.",
      exampleEnglish: "I swim in the sea.",
    },
    {
      japanese: "ねる",
      romanji: "neru",
      english: "To sleep",
      example: "夜早く寝ます。",
      exampleRomanji: "Yoru hayaku nemasu.",
      exampleEnglish: "I sleep early at night.",
    },
    {
      japanese: "おきる",
      romanji: "okiru",
      english: "To wake up",
      example: "朝六時に起きます。",
      exampleRomanji: "Asa rokuji ni okimasu.",
      exampleEnglish: "I wake up at 6 AM.",
    },
    {
      japanese: "すわる",
      romanji: "suwaru",
      english: "To sit",
      example: "椅子に座ります。",
      exampleRomanji: "Isu ni suwarimasu.",
      exampleEnglish: "I sit on a chair.",
    },
    {
      japanese: "たつ",
      romanji: "tatsu",
      english: "To stand",
      example: "電車で立ちます。",
      exampleRomanji: "Densha de tachimasu.",
      exampleEnglish: "I stand on the train.",
    },
    {
      japanese: "いく",
      romanji: "iku",
      english: "To go",
      example: "学校に行きます。",
      exampleRomanji: "Gakkō ni ikimasu.",
      exampleEnglish: "I go to school.",
    },
    {
      japanese: "くる",
      romanji: "kuru",
      english: "To come",
      example: "友達が来ます。",
      exampleRomanji: "Tomodachi ga kimasu.",
      exampleEnglish: "My friend comes.",
    },
    {
      japanese: "かえる",
      romanji: "kaeru",
      english: "To return",
      example: "家に帰ります。",
      exampleRomanji: "Ie ni kaerimasu.",
      exampleEnglish: "I return home.",
    },
    {
      japanese: "かう",
      romanji: "kau",
      english: "To buy",
      example: "パンを買います。",
      exampleRomanji: "Pan o kaimasu.",
      exampleEnglish: "I buy bread.",
    },
    {
      japanese: "うる",
      romanji: "uru",
      english: "To sell",
      example: "車を売ります。",
      exampleRomanji: "Kuruma o urimasu.",
      exampleEnglish: "I sell a car.",
    },
    {
      japanese: "つくる",
      romanji: "tsukuru",
      english: "To make",
      example: "ケーキを作ります。",
      exampleRomanji: "Kēki o tsukurimasu.",
      exampleEnglish: "I make a cake.",
    },
    {
      japanese: "りょうりする",
      romanji: "ryouri suru",
      english: "To cook",
      example: "晩ご飯を料理します。",
      exampleRomanji: "Bangohan o ryōri shimasu.",
      exampleEnglish: "I cook dinner.",
    },
    {
      japanese: "そうじする",
      romanji: "souji suru",
      english: "To clean",
      example: "部屋を掃除します。",
      exampleRomanji: "Heya o sōji shimasu.",
      exampleEnglish: "I clean the room.",
    },
    {
      japanese: "あらう",
      romanji: "arau",
      english: "To wash",
      example: "手を洗います。",
      exampleRomanji: "Te o araimasu.",
      exampleEnglish: "I wash my hands.",
    },
    {
      japanese: "あける",
      romanji: "akeru",
      english: "To open",
      example: "窓を開けます。",
      exampleRomanji: "Mado o akemasu.",
      exampleEnglish: "I open the window.",
    },
    {
      japanese: "しめる",
      romanji: "shimeru",
      english: "To close",
      example: "ドアを閉めます。",
      exampleRomanji: "Doa o shimemasu.",
      exampleEnglish: "I close the door.",
    },
    {
      japanese: "はじめる",
      romanji: "hajimeru",
      english: "To begin",
      example: "勉強を始めます。",
      exampleRomanji: "Benkyō o hajimemasu.",
      exampleEnglish: "I begin studying.",
    },
    {
      japanese: "おわる",
      romanji: "owaru",
      english: "To end",
      example: "授業が終わります。",
      exampleRomanji: "Jugyō ga owarimasu.",
      exampleEnglish: "The class ends.",
    },
    {
      japanese: "べんきょうする",
      romanji: "benkyou suru",
      english: "To study",
      example: "図書館で勉強します。",
      exampleRomanji: "Toshokan de benkyō shimasu.",
      exampleEnglish: "I study at the library.",
    },
    {
      japanese: "はたらく",
      romanji: "hataraku",
      english: "To work",
      example: "会社で働きます。",
      exampleRomanji: "Kaisha de hatarakimasu.",
      exampleEnglish: "I work at a company.",
    },
    {
      japanese: "やすむ",
      romanji: "yasumu",
      english: "To rest",
      example: "日曜日に休みます。",
      exampleRomanji: "Nichiyōbi ni yasumimasu.",
      exampleEnglish: "I rest on Sunday.",
    },
    {
      japanese: "あそぶ",
      romanji: "asobu",
      english: "To play",
      example: "友達と遊びます。",
      exampleRomanji: "Tomodachi to asobimasu.",
      exampleEnglish: "I play with friends.",
    },
    {
      japanese: "わらう",
      romanji: "warau",
      english: "To laugh",
      example: "面白い話で笑います。",
      exampleRomanji: "Omoshiroi hanashi de waraimasu.",
      exampleEnglish: "I laugh at funny stories.",
    },
    {
      japanese: "なく",
      romanji: "naku",
      english: "To cry",
      example: "悲しい映画で泣きます。",
      exampleRomanji: "Kanashii eiga de nakimasu.",
      exampleEnglish: "I cry at sad movies.",
    },
    {
      japanese: "おこる",
      romanji: "okoru",
      english: "To get angry",
      example: "遅刻して怒ります。",
      exampleRomanji: "Chikoku shite okorimasu.",
      exampleEnglish: "I get angry about being late.",
    },
    {
      japanese: "よろこぶ",
      romanji: "yorokobu",
      english: "To be happy",
      example: "プレゼントで喜びます。",
      exampleRomanji: "Purezento de yorokobimasu.",
      exampleEnglish: "I'm happy about the present.",
    },
    {
      japanese: "おどろく",
      romanji: "odoroku",
      english: "To be surprised",
      example: "突然の知らせに驚きます。",
      exampleRomanji: "Totsuzen no shirase ni odorokimasu.",
      exampleEnglish: "I'm surprised by sudden news.",
    },
    {
      japanese: "わすれる",
      romanji: "wasureru",
      english: "To forget",
      example: "名前を忘れます。",
      exampleRomanji: "Namae o wasuremasu.",
      exampleEnglish: "I forget the name.",
    },
    {
      japanese: "おぼえる",
      romanji: "oboeru",
      english: "To remember",
      example: "新しい言葉を覚えます。",
      exampleRomanji: "Atarashii kotoba o oboemasu.",
      exampleEnglish: "I remember new words.",
    },
    {
      japanese: "しる",
      romanji: "shiru",
      english: "To know",
      example: "彼の住所を知っています。",
      exampleRomanji: "Kare no jūsho o shitte imasu.",
      exampleEnglish: "I know his address.",
    },
    {
      japanese: "わかる",
      romanji: "wakaru",
      english: "To understand",
      example: "日本語がわかります。",
      exampleRomanji: "Nihongo ga wakarimasu.",
      exampleEnglish: "I understand Japanese.",
    },
    {
      japanese: "おしえる",
      romanji: "oshieru",
      english: "To teach",
      example: "英語を教えます。",
      exampleRomanji: "Eigo o oshiemasu.",
      exampleEnglish: "I teach English.",
    },
    {
      japanese: "ならう",
      romanji: "narau",
      english: "To learn",
      example: "ピアノを習います。",
      exampleRomanji: "Piano o naraimasu.",
      exampleEnglish: "I learn piano.",
    },
    {
      japanese: "てつだう",
      romanji: "tetsudau",
      english: "To help",
      example: "母を手伝います。",
      exampleRomanji: "Haha o tetsudaimasu.",
      exampleEnglish: "I help my mother.",
    },
    {
      japanese: "まつ",
      romanji: "matsu",
      english: "To wait",
      example: "バスを待ちます。",
      exampleRomanji: "Basu o machimasu.",
      exampleEnglish: "I wait for the bus.",
    },
    {
      japanese: "いそぐ",
      romanji: "isogu",
      english: "To hurry",
      example: "学校に急ぎます。",
      exampleRomanji: "Gakkō ni isogimasu.",
      exampleEnglish: "I hurry to school.",
    },
    {
      japanese: "とまる",
      romanji: "tomaru",
      english: "To stop",
      example: "赤信号で止まります。",
      exampleRomanji: "Akashingō de tomarimasu.",
      exampleEnglish: "I stop at the red light.",
    },
    {
      japanese: "つづける",
      romanji: "tsuzukeru",
      english: "To continue",
      example: "勉強を続けます。",
      exampleRomanji: "Benkyō o tsuzukemasu.",
      exampleEnglish: "I continue studying.",
    },
    {
      japanese: "かわる",
      romanji: "kawaru",
      english: "To change",
      example: "天気が変わります。",
      exampleRomanji: "Tenki ga kawarimasu.",
      exampleEnglish: "The weather changes.",
    },
    {
      japanese: "うまれる",
      romanji: "umareru",
      english: "To be born",
      example: "日本で生まれました。",
      exampleRomanji: "Nihon de umaremashita.",
      exampleEnglish: "I was born in Japan.",
    },
    {
      japanese: "しぬ",
      romanji: "shinu",
      english: "To die",
      example: "花が死にます。",
      exampleRomanji: "Hana ga shinimasu.",
      exampleEnglish: "The flower dies.",
    },
    {
      japanese: "もつ",
      romanji: "motsu",
      english: "To hold/have",
      example: "カバンを持ちます。",
      exampleRomanji: "Kaban o mochimasu.",
      exampleEnglish: "I hold a bag.",
    },
    {
      japanese: "いる",
      romanji: "iru",
      english: "To be (animate)",
      example: "家にいます。",
      exampleRomanji: "Ie ni imasu.",
      exampleEnglish: "I am at home.",
    },
    {
      japanese: "ある",
      romanji: "aru",
      english: "To be (inanimate)",
      example: "机の上に本があります。",
      exampleRomanji: "Tsukue no ue ni hon ga arimasu.",
      exampleEnglish: "There is a book on the desk.",
    },
    {
      japanese: "できる",
      romanji: "dekiru",
      english: "To be able to",
      example: "日本語ができます。",
      exampleRomanji: "Nihongo ga dekimasu.",
      exampleEnglish: "I can speak Japanese.",
    },
    {
      japanese: "きる",
      romanji: "kiru",
      english: "To wear",
      example: "新しい服を着ます。",
      exampleRomanji: "Atarashii fuku o kimasu.",
      exampleEnglish: "I wear new clothes.",
    },
    {
      japanese: "ぬぐ",
      romanji: "nugu",
      english: "To take off",
      example: "靴を脱ぎます。",
      exampleRomanji: "Kutsu o nugimasu.",
      exampleEnglish: "I take off my shoes.",
    },
    {
      japanese: "かぶる",
      romanji: "kaburu",
      english: "To wear (hat)",
      example: "帽子をかぶります。",
      exampleRomanji: "Bōshi o kaburimasu.",
      exampleEnglish: "I wear a hat.",
    },
    {
      japanese: "かける",
      romanji: "kakeru",
      english: "To put on (glasses)",
      example: "眼鏡をかけます。",
      exampleRomanji: "Megane o kakemasu.",
      exampleEnglish: "I put on glasses.",
    },
    {
      japanese: "はく",
      romanji: "haku",
      english: "To wear (pants/shoes)",
      example: "ズボンをはきます。",
      exampleRomanji: "Zubon o hakimasu.",
      exampleEnglish: "I wear pants.",
    },
    {
      japanese: "のる",
      romanji: "noru",
      english: "To ride/get on",
      example: "電車に乗ります。",
      exampleRomanji: "Densha ni norimasu.",
      exampleEnglish: "I get on the train.",
    },
    {
      japanese: "おりる",
      romanji: "oriru",
      english: "To get off",
      example: "バスから降ります。",
      exampleRomanji: "Basu kara orimasu.",
      exampleEnglish: "I get off the bus.",
    },
    {
      japanese: "とぶ",
      romanji: "tobu",
      english: "To fly/jump",
      example: "鳥が空を飛びます。",
      exampleRomanji: "Tori ga sora o tobimasu.",
      exampleEnglish: "Birds fly in the sky.",
    },
    {
      japanese: "おちる",
      romanji: "ochiru",
      english: "To fall",
      example: "葉っぱが落ちます。",
      exampleRomanji: "Happa ga ochimasu.",
      exampleEnglish: "Leaves fall.",
    },
    {
      japanese: "あがる",
      romanji: "agaru",
      english: "To go up",
      example: "階段を上がります。",
      exampleRomanji: "Kaidan o agarimasu.",
      exampleEnglish: "I go up the stairs.",
    },
    {
      japanese: "さがる",
      romanji: "sagaru",
      english: "To go down",
      example: "エレベーターで下がります。",
      exampleRomanji: "Erebētā de sagarimasu.",
      exampleEnglish: "I go down by elevator.",
    },
    {
      japanese: "でる",
      romanji: "deru",
      english: "To exit/leave",
      example: "部屋から出ます。",
      exampleRomanji: "Heya kara demasu.",
      exampleEnglish: "I leave the room.",
    },
    {
      japanese: "はいる",
      romanji: "hairu",
      english: "To enter",
      example: "お風呂に入ります。",
      exampleRomanji: "Ofuro ni hairimasu.",
      exampleEnglish: "I enter the bath.",
    },
    {
      japanese: "つける",
      romanji: "tsukeru",
      english: "To turn on",
      example: "電気をつけます。",
      exampleRomanji: "Denki o tsukemasu.",
      exampleEnglish: "I turn on the light.",
    },
    {
      japanese: "けす",
      romanji: "kesu",
      english: "To turn off",
      example: "テレビを消します。",
      exampleRomanji: "Terebi o keshimasu.",
      exampleEnglish: "I turn off the TV.",
    },
    {
      japanese: "おくる",
      romanji: "okuru",
      english: "To send",
      example: "手紙を送ります。",
      exampleRomanji: "Tegami o okurimasu.",
      exampleEnglish: "I send a letter.",
    },
  ],
  Adjectives: [
    {
      japanese: "おおきい",
      romanji: "ookii",
      english: "Big",
      example: "大きい家に住んでいます。",
      exampleRomanji: "Ōkii ie ni sunde imasu.",
      exampleEnglish: "I live in a big house.",
    },
    {
      japanese: "ちいさい",
      romanji: "chiisai",
      english: "Small",
      example: "小さい猫がいます。",
      exampleRomanji: "Chiisai neko ga imasu.",
      exampleEnglish: "There is a small cat.",
    },
    {
      japanese: "たかい",
      romanji: "takai",
      english: "High/expensive",
      example: "この時計は高いです。",
      exampleRomanji: "Kono tokei wa takai desu.",
      exampleEnglish: "This watch is expensive.",
    },
    {
      japanese: "やすい",
      romanji: "yasui",
      english: "Cheap",
      example: "安い服を買いました。",
      exampleRomanji: "Yasui fuku o kaimashita.",
      exampleEnglish: "I bought cheap clothes.",
    },
    {
      japanese: "ひくい",
      romanji: "hikui",
      english: "Low",
      example: "低い建物です。",
      exampleRomanji: "Hikui tatemono desu.",
      exampleEnglish: "It's a low building.",
    },
    {
      japanese: "ながい",
      romanji: "nagai",
      english: "Long",
      example: "長い髪の女性です。",
      exampleRomanji: "Nagai kami no josei desu.",
      exampleEnglish: "She's a woman with long hair.",
    },
    {
      japanese: "みじかい",
      romanji: "mijikai",
      english: "Short",
      example: "短いスカートです。",
      exampleRomanji: "Mijikai sukāto desu.",
      exampleEnglish: "It's a short skirt.",
    },
    {
      japanese: "あたらしい",
      romanji: "atarashii",
      english: "New",
      example: "新しい車を買いました。",
      exampleRomanji: "Atarashii kuruma o kaimashita.",
      exampleEnglish: "I bought a new car.",
    },
    {
      japanese: "ふるい",
      romanji: "furui",
      english: "Old",
      example: "古い本を読みます。",
      exampleRomanji: "Furui hon o yomimasu.",
      exampleEnglish: "I read an old book.",
    },
    {
      japanese: "わかい",
      romanji: "wakai",
      english: "Young",
      example: "若い先生です。",
      exampleRomanji: "Wakai sensei desu.",
      exampleEnglish: "He's a young teacher.",
    },
    {
      japanese: "はやい",
      romanji: "hayai",
      english: "Fast/early",
      example: "早い電車に乗ります。",
      exampleRomanji: "Hayai densha ni norimasu.",
      exampleEnglish: "I take the fast train.",
    },
    {
      japanese: "おそい",
      romanji: "osoi",
      english: "Slow/late",
      example: "遅い時間に帰ります。",
      exampleRomanji: "Osoi jikan ni kaerimasu.",
      exampleEnglish: "I return home late.",
    },
    {
      japanese: "うつくしい",
      romanji: "utsukushii",
      english: "Beautiful",
      example: "美しい花が咲いています。",
      exampleRomanji: "Utsukushii hana ga saite imasu.",
      exampleEnglish: "Beautiful flowers are blooming.",
    },
    {
      japanese: "きれい",
      romanji: "kirei",
      english: "Pretty/clean",
      example: "きれいな部屋ですね。",
      exampleRomanji: "Kirei na heya desu ne.",
      exampleEnglish: "It's a clean room, isn't it?",
    },
    {
      japanese: "きたない",
      romanji: "kitanai",
      english: "Dirty",
      example: "汚い靴を洗います。",
      exampleRomanji: "Kitanai kutsu o araimasu.",
      exampleEnglish: "I wash dirty shoes.",
    },
    {
      japanese: "いい",
      romanji: "ii",
      english: "Good",
      example: "いい天気ですね。",
      exampleRomanji: "Ii tenki desu ne.",
      exampleEnglish: "It's good weather, isn't it?",
    },
    {
      japanese: "わるい",
      romanji: "warui",
      english: "Bad",
      example: "悪い知らせがあります。",
      exampleRomanji: "Warui shirase ga arimasu.",
      exampleEnglish: "There is bad news.",
    },
    {
      japanese: "ただしい",
      romanji: "tadashii",
      english: "Correct",
      example: "正しい答えです。",
      exampleRomanji: "Tadashii kotae desu.",
      exampleEnglish: "It's the correct answer.",
    },
    {
      japanese: "まちがい",
      romanji: "machigai",
      english: "Wrong",
      example: "間違いがあります。",
      exampleRomanji: "Machigai ga arimasu.",
      exampleEnglish: "There is a mistake.",
    },
    {
      japanese: "かんたん",
      romanji: "kantan",
      english: "Easy",
      example: "簡単な問題です。",
      exampleRomanji: "Kantan na mondai desu.",
      exampleEnglish: "It's an easy problem.",
    },
    {
      japanese: "むずかしい",
      romanji: "muzukashii",
      english: "Difficult",
      example: "難しい宿題があります。",
      exampleRomanji: "Muzukashii shukudai ga arimasu.",
      exampleEnglish: "I have difficult homework.",
    },
    {
      japanese: "おもしろい",
      romanji: "omoshiroi",
      english: "Interesting",
      example: "面白い映画を見ました。",
      exampleRomanji: "Omoshiroi eiga o mimashita.",
      exampleEnglish: "I watched an interesting movie.",
    },
    {
      japanese: "つまらない",
      romanji: "tsumaranai",
      english: "Boring",
      example: "つまらない授業でした。",
      exampleRomanji: "Tsumaranai jugyō deshita.",
      exampleEnglish: "It was a boring class.",
    },
    {
      japanese: "たのしい",
      romanji: "tanoshii",
      english: "Fun",
      example: "楽しいパーティーでした。",
      exampleRomanji: "Tanoshii pātī deshita.",
      exampleEnglish: "It was a fun party.",
    },
    {
      japanese: "かなしい",
      romanji: "kanashii",
      english: "Sad",
      example: "悲しいニュースを聞きました。",
      exampleRomanji: "Kanashii nyūsu o kikimashita.",
      exampleEnglish: "I heard sad news.",
    },
    {
      japanese: "うれしい",
      romanji: "ureshii",
      english: "Happy",
      example: "嬉しいプレゼントをもらいました。",
      exampleRomanji: "Ureshii purezento o moraimashita.",
      exampleEnglish: "I received a happy present.",
    },
    {
      japanese: "こわい",
      romanji: "kowai",
      english: "Scary",
      example: "怖い映画は見ません。",
      exampleRomanji: "Kowai eiga wa mimasen.",
      exampleEnglish: "I don't watch scary movies.",
    },
    {
      japanese: "あんぜん",
      romanji: "anzen",
      english: "Safe",
      example: "安全な場所にいます。",
      exampleRomanji: "Anzen na basho ni imasu.",
      exampleEnglish: "I'm in a safe place.",
    },
    {
      japanese: "きけん",
      romanji: "kiken",
      english: "Dangerous",
      example: "危険な道は通りません。",
      exampleRomanji: "Kiken na michi wa tōrimasen.",
      exampleEnglish: "I don't take dangerous roads.",
    },
    {
      japanese: "あたたかい",
      romanji: "atatakai",
      english: "Warm",
      example: "暖かい日ですね。",
      exampleRomanji: "Atatakai hi desu ne.",
      exampleEnglish: "It's a warm day, isn't it?",
    },
    {
      japanese: "さむい",
      romanji: "samui",
      english: "Cold",
      example: "寒い冬の日です。",
      exampleRomanji: "Samui fuyu no hi desu.",
      exampleEnglish: "It's a cold winter day.",
    },
    {
      japanese: "あつい",
      romanji: "atsui",
      english: "Hot",
      example: "暑い夏の日です。",
      exampleRomanji: "Atsui natsu no hi desu.",
      exampleEnglish: "It's a hot summer day.",
    },
    {
      japanese: "すずしい",
      romanji: "suzushii",
      english: "Cool",
      example: "涼しい風が吹いています。",
      exampleRomanji: "Suzushii kaze ga fuite imasu.",
      exampleEnglish: "A cool wind is blowing.",
    },
    {
      japanese: "あかるい",
      romanji: "akarui",
      english: "Bright",
      example: "明るい部屋が好きです。",
      exampleRomanji: "Akarui heya ga suki desu.",
      exampleEnglish: "I like bright rooms.",
    },
    {
      japanese: "くらい",
      romanji: "kurai",
      english: "Dark",
      example: "暗い夜道を歩きます。",
      exampleRomanji: "Kurai yomichi o arukimasu.",
      exampleEnglish: "I walk on dark night roads.",
    },
    {
      japanese: "しずか",
      romanji: "shizuka",
      english: "Quiet",
      example: "静かな図書館で勉強します。",
      exampleRomanji: "Shizuka na toshokan de benkyō shimasu.",
      exampleEnglish: "I study in a quiet library.",
    },
    {
      japanese: "うるさい",
      romanji: "urusai",
      english: "Noisy",
      example: "うるさい音楽を止めてください。",
      exampleRomanji: "Urusai ongaku o tomete kudasai.",
      exampleEnglish: "Please stop the noisy music.",
    },
    {
      japanese: "おもい",
      romanji: "omoi",
      english: "Heavy",
      example: "重いカバンを持っています。",
      exampleRomanji: "Omoi kaban o motte imasu.",
      exampleEnglish: "I'm carrying a heavy bag.",
    },
    {
      japanese: "かるい",
      romanji: "karui",
      english: "Light",
      example: "軽い荷物で旅行します。",
      exampleRomanji: "Karui nimotsu de ryokō shimasu.",
      exampleEnglish: "I travel with light luggage.",
    },
    {
      japanese: "つよい",
      romanji: "tsuyoi",
      english: "Strong",
      example: "強い風が吹いています。",
      exampleRomanji: "Tsuyoi kaze ga fuite imasu.",
      exampleEnglish: "A strong wind is blowing.",
    },
    {
      japanese: "よわい",
      romanji: "yowai",
      english: "Weak",
      example: "弱い光が見えます。",
      exampleRomanji: "Yowai hikari ga miemasu.",
      exampleEnglish: "I can see a weak light.",
    },
    {
      japanese: "ふとい",
      romanji: "futoi",
      english: "Thick",
      example: "太い木があります。",
      exampleRomanji: "Futoi ki ga arimasu.",
      exampleEnglish: "There is a thick tree.",
    },
    {
      japanese: "ほそい",
      romanji: "hosoi",
      english: "Thin",
      example: "細い道を通ります。",
      exampleRomanji: "Hosoi michi o tōrimasu.",
      exampleEnglish: "I go through a thin road.",
    },
    {
      japanese: "ひろい",
      romanji: "hiroi",
      english: "Wide",
      example: "広い公園で遊びます。",
      exampleRomanji: "Hiroi kōen de asobimasu.",
      exampleEnglish: "I play in a wide park.",
    },
    {
      japanese: "せまい",
      romanji: "semai",
      english: "Narrow",
      example: "狭い部屋に住んでいます。",
      exampleRomanji: "Semai heya ni sunde imasu.",
      exampleEnglish: "I live in a narrow room.",
    },
    {
      japanese: "ふかい",
      romanji: "fukai",
      english: "Deep",
      example: "深い海で泳ぎます。",
      exampleRomanji: "Fukai umi de oyogimasu.",
      exampleEnglish: "I swim in the deep sea.",
    },
    {
      japanese: "あさい",
      romanji: "asai",
      english: "Shallow",
      example: "浅い川を渡ります。",
      exampleRomanji: "Asai kawa o watarimasu.",
      exampleEnglish: "I cross a shallow river.",
    },
    {
      japanese: "ちかい",
      romanji: "chikai",
      english: "Near",
      example: "近い店で買い物します。",
      exampleRomanji: "Chikai mise de kaimono shimasu.",
      exampleEnglish: "I shop at a nearby store.",
    },
    {
      japanese: "とおい",
      romanji: "tooi",
      english: "Far",
      example: "遠い国から来ました。",
      exampleRomanji: "Tōi kuni kara kimashita.",
      exampleEnglish: "I came from a far country.",
    },
    {
      japanese: "いそがしい",
      romanji: "isogashii",
      english: "Busy",
      example: "忙しい一日でした。",
      exampleRomanji: "Isogashii ichinichi deshita.",
      exampleEnglish: "It was a busy day.",
    },
    {
      japanese: "ひま",
      romanji: "hima",
      english: "Free/not busy",
      example: "暇な時間があります。",
      exampleRomanji: "Hima na jikan ga arimasu.",
      exampleEnglish: "I have free time.",
    },
    {
      japanese: "げんき",
      romanji: "genki",
      english: "Healthy/energetic",
      example: "元気な子供たちです。",
      exampleRomanji: "Genki na kodomo-tachi desu.",
      exampleEnglish: "They are energetic children.",
    },
    {
      japanese: "びょうき",
      romanji: "byouki",
      english: "Sick",
      example: "病気の友達を見舞います。",
      exampleRomanji: "Byōki no tomodachi o mimaimasu.",
      exampleEnglish: "I visit my sick friend.",
    },
    {
      japanese: "すき",
      romanji: "suki",
      english: "Like",
      example: "好きな食べ物は何ですか？",
      exampleRomanji: "Suki na tabemono wa nan desu ka?",
      exampleEnglish: "What food do you like?",
    },
    {
      japanese: "きらい",
      romanji: "kirai",
      english: "Dislike",
      example: "嫌いな野菜があります。",
      exampleRomanji: "Kirai na yasai ga arimasu.",
      exampleEnglish: "There are vegetables I dislike.",
    },
    {
      japanese: "じょうず",
      romanji: "jouzu",
      english: "Good at/skillful",
      example: "上手な料理を作ります。",
      exampleRomanji: "Jōzu na ryōri o tsukurimasu.",
      exampleEnglish: "I make skillful cooking.",
    },
    {
      japanese: "へた",
      romanji: "heta",
      english: "Bad at/unskillful",
      example: "下手な絵を描きます。",
      exampleRomanji: "Heta na e o kakimasu.",
      exampleEnglish: "I draw unskillful pictures.",
    },
    {
      japanese: "ゆうめい",
      romanji: "yuumei",
      english: "Famous",
      example: "有名な歌手です。",
      exampleRomanji: "Yūmei na kashu desu.",
      exampleEnglish: "He's a famous singer.",
    },
    {
      japanese: "しんせつ",
      romanji: "shinsetsu",
      english: "Kind",
      example: "親切な人に会いました。",
      exampleRomanji: "Shinsetsu na hito ni aimashita.",
      exampleEnglish: "I met a kind person.",
    },
    {
      japanese: "べんり",
      romanji: "benri",
      english: "Convenient",
      example: "便利な場所に住んでいます。",
      exampleRomanji: "Benri na basho ni sunde imasu.",
      exampleEnglish: "I live in a convenient place.",
    },
    {
      japanese: "ふべん",
      romanji: "fuben",
      english: "Inconvenient",
      example: "不便な田舎に住んでいます。",
      exampleRomanji: "Fuben na inaka ni sunde imasu.",
      exampleEnglish: "I live in an inconvenient countryside.",
    },
    {
      japanese: "たいせつ",
      romanji: "taisetsu",
      english: "Important",
      example: "大切な友達がいます。",
      exampleRomanji: "Taisetsu na tomodachi ga imasu.",
      exampleEnglish: "I have important friends.",
    },
    {
      japanese: "ひつよう",
      romanji: "hitsuyou",
      english: "Necessary",
      example: "必要な物を買います。",
      exampleRomanji: "Hitsuyō na mono o kaimasu.",
      exampleEnglish: "I buy necessary things.",
    },
    {
      japanese: "だめ",
      romanji: "dame",
      english: "No good/useless",
      example: "だめな計画でした。",
      exampleRomanji: "Dame na keikaku deshita.",
      exampleEnglish: "It was a useless plan.",
    },
    {
      japanese: "すばらしい",
      romanji: "subarashii",
      english: "Wonderful",
      example: "素晴らしい景色ですね。",
      exampleRomanji: "Subarashii keshiki desu ne.",
      exampleEnglish: "It's a wonderful view, isn't it?",
    },
    {
      japanese: "ひどい",
      romanji: "hidoi",
      english: "Terrible",
      example: "ひどい天気でした。",
      exampleRomanji: "Hidoi tenki deshita.",
      exampleEnglish: "It was terrible weather.",
    },
    {
      japanese: "おいしい",
      romanji: "oishii",
      english: "Delicious",
      example: "美味しい料理を食べました。",
      exampleRomanji: "Oishii ryōri o tabemashita.",
      exampleEnglish: "I ate delicious food.",
    },
    {
      japanese: "まずい",
      romanji: "mazui",
      english: "Tastes bad",
      example: "まずい薬を飲みます。",
      exampleRomanji: "Mazui kusuri o nomimasu.",
      exampleEnglish: "I drink bad-tasting medicine.",
    },
    {
      japanese: "からい",
      romanji: "karai",
      english: "Spicy",
      example: "辛い料理が好きです。",
      exampleRomanji: "Karai ryōri ga suki desu.",
      exampleEnglish: "I like spicy food.",
    },
    {
      japanese: "あまい",
      romanji: "amai",
      english: "Sweet",
      example: "甘いケーキを食べます。",
      exampleRomanji: "Amai kēki o tabemasu.",
      exampleEnglish: "I eat sweet cake.",
    },
  ],
}

export default function JapaneseFlashcardApp() {
  const [currentView, setCurrentView] = useState("home")
  const [selectedSection, setSelectedSection] = useState(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [sessionCards, setSessionCards] = useState([])
  const [knownCards, setKnownCards] = useState([])
  const [unknownCards, setUnknownCards] = useState([])
  const [sessionStartTime, setSessionStartTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [isGuideExpanded, setIsGuideExpanded] = useState(false)

  useEffect(() => {
    let interval = null
    if (sessionStartTime && !isPaused && !showSummary) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - sessionStartTime)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [sessionStartTime, isPaused, showSummary])

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const startSession = (sectionName, cards = null) => {
    const cardsToUse = cards || vocabularyData[sectionName]
    setSelectedSection(sectionName)
    setSessionCards(cardsToUse)
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setKnownCards([])
    setUnknownCards([])
    setSessionStartTime(Date.now())
    setElapsedTime(0)
    setIsPaused(false)
    setShowSummary(false)
    setCurrentView("flashcard")
  }

  const handleCardAction = (isKnown) => {
    const currentCard = sessionCards[currentCardIndex]

    if (isKnown) {
      setKnownCards([...knownCards, currentCard])
    } else {
      setUnknownCards([...unknownCards, currentCard])
    }

    if (currentCardIndex + 1 >= sessionCards.length) {
      setShowSummary(true)
    } else {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    }
  }

  const retryUnknowns = () => {
    if (unknownCards.length > 0) {
      startSession(selectedSection, unknownCards)
    }
  }

  const startOver = () => {
    startSession(selectedSection)
  }

  const goHome = () => {
    setCurrentView("home")
    setSelectedSection(null)
    setSessionStartTime(null)
    setElapsedTime(0)
    setShowSummary(false)
  }

  const togglePause = () => {
    if (isPaused) {
      setSessionStartTime(Date.now() - elapsedTime)
    }
    setIsPaused(!isPaused)
  }

  const progressPercentage =
    sessionCards.length > 0 ? ((currentCardIndex + (showSummary ? 1 : 0)) / sessionCards.length) * 100 : 0

  const scorePercentage =
    knownCards.length + unknownCards.length > 0
      ? Math.round((knownCards.length / (knownCards.length + unknownCards.length)) * 100)
      : 0

  if (currentView === "home") {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">日本語 Flashcards</h1>
            <p className="text-muted-foreground text-lg">Master Japanese vocabulary with interactive flashcards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Object.keys(vocabularyData).map((section) => (
              <Card
                key={section}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border"
                onClick={() => startSession(section)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">
                    {section === "Greetings & Phrases" && "👋"}
                    {section === "Pronouns & People" && "👥"}
                    {section === "Nouns" && "🏠"}
                    {section === "Verbs" && "🏃"}
                    {section === "Adjectives" && "✨"}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{section}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{vocabularyData[section].length} words</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/30 border-primary/10">
            <CardContent className="p-4">
              <Button
                onClick={() => setIsGuideExpanded(!isGuideExpanded)}
                variant="ghost"
                className="w-full flex items-center justify-between text-left p-2 hover:bg-muted/50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">📚</span>
                  <span className="font-medium text-card-foreground">How to Use This App</span>
                </div>
                <span className="text-muted-foreground text-sm">{isGuideExpanded ? "▲ Hide" : "▼ Show"}</span>
              </Button>

              {isGuideExpanded && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-primary mb-1 flex items-center gap-1">
                          <span className="text-base">🎯</span> Getting Started
                        </h3>
                        <ul className="space-y-1 text-muted-foreground text-xs">
                          <li>• Choose a vocabulary category above</li>
                          <li>• Each section contains 20-50 Japanese words</li>
                          <li>• Perfect for beginners and intermediate learners</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1 flex items-center gap-1">
                          <span className="text-base">🔄</span> Learning Process
                        </h3>
                        <ul className="space-y-1 text-muted-foreground text-xs">
                          <li>• Tap cards to flip and see the English meaning</li>
                          <li>• Mark words as "Known" or "Unknown"</li>
                          <li>• Review unknown words at the end</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-primary mb-1 flex items-center gap-1">
                          <span className="text-base">⏱️</span> Study Sessions
                        </h3>
                        <ul className="space-y-1 text-muted-foreground text-xs">
                          <li>• Sessions are timed to track your progress</li>
                          <li>• You can pause anytime using the pause button</li>
                          <li>• Complete all cards to see your final score</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1 flex items-center gap-1">
                          <span className="text-base">🎉</span> After Each Session
                        </h3>
                        <ul className="space-y-1 text-muted-foreground text-xs">
                          <li>• Retry only the words you didn't know</li>
                          <li>• Start the entire section over again</li>
                          <li>• Return home to choose a different category</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (showSummary) {
    return (
      <div className="min-h-screen bg-background p-4 flex items-center justify-center">
        <Card className="w-full max-w-md bg-card border-border">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🎉</div>
            <h2 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4">Session Complete!</h2>

            <div className="bg-muted/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Great job! Here's how you performed in this session:
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Known:</span>
                <span className="font-semibold text-secondary">{knownCards.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Unknown:</span>
                <span className="font-semibold text-destructive">{unknownCards.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Score:</span>
                <span className="font-bold text-primary text-lg sm:text-xl">{scorePercentage}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Time:</span>
                <span className="font-semibold text-sm">{formatTime(elapsedTime)}</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {unknownCards.length > 0 && (
                <div>
                  <Button
                    onClick={retryUnknowns}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm"
                  >
                    🔄 Retry Unknowns ({unknownCards.length})
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">Practice only the words you marked as unknown</p>
                </div>
              )}
              <div>
                <Button
                  onClick={startOver}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                >
                  🔁 Start Over
                </Button>
                <p className="text-xs text-muted-foreground mt-1">Restart this entire section from the beginning</p>
              </div>
              <div>
                <Button onClick={goHome} variant="outline" className="w-full bg-transparent text-sm">
                  🏠 Back to Home
                </Button>
                <p className="text-xs text-muted-foreground mt-1">Choose a different vocabulary category</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentCard = sessionCards[currentCardIndex]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button onClick={goHome} variant="outline" className="text-xs sm:text-sm bg-transparent">
              ← Back to Home
            </Button>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button onClick={togglePause} variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                {isPaused ? "▶️" : "⏸️"}
              </Button>
              <span className="text-xs sm:text-sm font-mono bg-muted px-2 sm:px-3 py-1 rounded">
                {formatTime(elapsedTime)}
              </span>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold text-center text-card-foreground mb-6">{selectedSection}</h2>

          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
              <span>
                {currentCardIndex + 1} / {sessionCards.length}
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-6 sm:mb-8">
          <Card
            className="cursor-pointer transition-all duration-300 hover:shadow-xl min-h-[250px] sm:min-h-[300px] bg-card border-border"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[250px] sm:min-h-[300px]">
              {!isFlipped ? (
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-4xl font-bold text-card-foreground">{currentCard?.japanese}</h3>
                  <p className="text-lg sm:text-xl text-muted-foreground">{currentCard?.romanji}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">👆 Tap to reveal meaning</p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">{currentCard?.english}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-base sm:text-lg">{currentCard?.japanese}</p>
                    <p className="text-sm sm:text-base">{currentCard?.romanji}</p>
                  </div>
                  {currentCard?.example && (
                    <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-primary/20">
                      <p className="text-xs text-primary font-medium mb-2">Example Phrase:</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-card-foreground">{currentCard.example}</p>
                        <p className="text-xs text-muted-foreground">{currentCard.exampleRomanji}</p>
                        <p className="text-xs text-primary">{currentCard.exampleEnglish}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-primary mt-3 sm:mt-4">⬇️ Now mark whether you knew this word</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Button
            onClick={() => handleCardAction(false)}
            className="h-12 sm:h-16 text-sm sm:text-lg bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            disabled={!isFlipped}
          >
            ❌ Unknown
          </Button>
          <Button
            onClick={() => handleCardAction(true)}
            className="h-12 sm:h-16 text-sm sm:text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            disabled={!isFlipped}
          >
            ✅ Known
          </Button>
        </div>

        {!isFlipped ? (
          <div className="text-center mt-4 space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              👆 Flip the card first to see the English meaning
            </p>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Try to guess the meaning before flipping for better learning
            </p>
          </div>
        ) : (
          <div className="text-center mt-4 space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-primary font-medium">Did you know this word before flipping?</p>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Be honest - unknown words will be reviewed at the end
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
