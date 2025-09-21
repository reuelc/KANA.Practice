"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const vocabularyData = {
  "Hiragana - Vowels": [
    {
      japanese: "あ",
      romanji: "a",
      english: "a sound",
      example: "あり",
      exampleRomanji: "ari",
      exampleEnglish: "ant",
      mnemonic: "Looks like an apple with a leaf on top",
    },
    {
      japanese: "い",
      romanji: "i",
      english: "i sound",
      example: "いぬ",
      exampleRomanji: "inu",
      exampleEnglish: "dog",
      mnemonic: "Looks like two i's (sticks) leaning on each other",
    },
    {
      japanese: "う",
      romanji: "u",
      english: "u sound",
      example: "うみ",
      exampleRomanji: "umi",
      exampleEnglish: "sea",
      mnemonic: "Looks like the letter 'u' with a hook - or someone saying 'oo'",
    },
    {
      japanese: "え",
      romanji: "e",
      english: "e sound",
      example: "えき",
      exampleRomanji: "eki",
      exampleEnglish: "station",
      mnemonic: "An exotic bird with a long tail",
    },
    {
      japanese: "お",
      romanji: "o",
      english: "o sound",
      example: "おはな",
      exampleRomanji: "ohana",
      exampleEnglish: "flower",
      mnemonic: "Like 'oh!' with mouth wide open - circular shape",
    },
  ],
  "Hiragana - K Sounds": [
    {
      japanese: "か",
      romanji: "ka",
      english: "ka sound",
      example: "かみ",
      exampleRomanji: "kami",
      exampleEnglish: "paper",
      mnemonic: "A karate chop cutting through",
    },
    {
      japanese: "き",
      romanji: "ki",
      english: "ki sound",
      example: "きつね",
      exampleRomanji: "kitsune",
      exampleEnglish: "fox",
      mnemonic: "A key with teeth at the bottom",
    },
    {
      japanese: "く",
      romanji: "ku",
      english: "ku sound",
      example: "くま",
      exampleRomanji: "kuma",
      exampleEnglish: "bear",
      mnemonic: "A cooking spoon or ladle",
    },
    {
      japanese: "け",
      romanji: "ke",
      english: "ke sound",
      example: "けん",
      exampleRomanji: "ken",
      exampleEnglish: "sword",
      mnemonic: "A kettle with steam coming out",
    },
    {
      japanese: "こ",
      romanji: "ko",
      english: "ko sound",
      example: "こども",
      exampleRomanji: "kodomo",
      exampleEnglish: "child",
      mnemonic: "Two commas stacked together",
    },
  ],
  "Hiragana - S Sounds": [
    {
      japanese: "さ",
      romanji: "sa",
      english: "sa sound",
      example: "さくら",
      exampleRomanji: "sakura",
      exampleEnglish: "cherry blossom",
      mnemonic: "Someone bowing and saying 'sorry'",
    },
    {
      japanese: "し",
      romanji: "shi",
      english: "shi sound",
      example: "しろ",
      exampleRomanji: "shiro",
      exampleEnglish: "white",
      mnemonic: "A shell or sea creature",
    },
    {
      japanese: "す",
      romanji: "su",
      english: "su sound",
      example: "すし",
      exampleRomanji: "sushi",
      exampleEnglish: "sushi",
      mnemonic: "A sun with rays going sideways",
    },
    {
      japanese: "せ",
      romanji: "se",
      english: "se sound",
      example: "せかい",
      exampleRomanji: "sekai",
      exampleEnglish: "world",
      mnemonic: "A sewing needle with thread",
    },
    {
      japanese: "そ",
      romanji: "so",
      english: "so sound",
      example: "そら",
      exampleRomanji: "sora",
      exampleEnglish: "sky",
      mnemonic: "A sock or serpent zigzagging",
    },
  ],
  "Hiragana - T Sounds": [
    {
      japanese: "た",
      romanji: "ta",
      english: "ta sound",
      example: "たまご",
      exampleRomanji: "tamago",
      exampleEnglish: "egg",
      mnemonic: "Like a table with one leg",
    },
    {
      japanese: "ち",
      romanji: "chi",
      english: "chi sound",
      example: "ちいさい",
      exampleRomanji: "chiisai",
      exampleEnglish: "small",
      mnemonic: "A cheerleader raising arms",
    },
    {
      japanese: "つ",
      romanji: "tsu",
      english: "tsu sound",
      example: "つき",
      exampleRomanji: "tsuki",
      exampleEnglish: "moon",
      mnemonic: "A tsunami wave",
    },
    {
      japanese: "て",
      romanji: "te",
      english: "te sound",
      example: "て",
      exampleRomanji: "te",
      exampleEnglish: "hand",
      mnemonic: "A telephone pole with wire",
    },
    {
      japanese: "と",
      romanji: "to",
      english: "to sound",
      example: "とり",
      exampleRomanji: "tori",
      exampleEnglish: "bird",
      mnemonic: "A tornado swirl",
    },
  ],
  "Hiragana - N Sounds": [
    {
      japanese: "な",
      romanji: "na",
      english: "na sound",
      example: "なまえ",
      exampleRomanji: "namae",
      exampleEnglish: "name",
      mnemonic: "A naughty person with arms crossed, head bent",
    },
    {
      japanese: "に",
      romanji: "ni",
      english: "ni sound",
      example: "にほん",
      exampleRomanji: "nihon",
      exampleEnglish: "Japan",
      mnemonic: "A knee bent",
    },
    {
      japanese: "ぬ",
      romanji: "nu",
      english: "nu sound",
      example: "ぬいぐるみ",
      exampleRomanji: "nuigurumi",
      exampleEnglish: "stuffed animal",
      mnemonic: "Noodle on chopsticks",
    },
    {
      japanese: "ね",
      romanji: "ne",
      english: "ne sound",
      example: "ねこ",
      exampleRomanji: "neko",
      exampleEnglish: "cat",
      mnemonic: "A cat's tail - cats say 'nyan'",
    },
    {
      japanese: "の",
      romanji: "no",
      english: "no sound",
      example: "のみもの",
      exampleRomanji: "nomimono",
      exampleEnglish: "drink",
      mnemonic: "No entry sign (prohibition symbol)",
    },
  ],
  "Hiragana - H Sounds": [
    {
      japanese: "は",
      romanji: "ha",
      english: "ha sound",
      example: "はな",
      exampleRomanji: "hana",
      exampleEnglish: "flower",
      mnemonic: "Person ha-ha laughing with arms up",
    },
    {
      japanese: "ひ",
      romanji: "hi",
      english: "hi sound",
      example: "ひ",
      exampleRomanji: "hi",
      exampleEnglish: "fire/sun",
      mnemonic: "A person saying 'hee hee' with a smile",
    },
    {
      japanese: "ふ",
      romanji: "fu",
      english: "fu sound",
      example: "ふゆ",
      exampleRomanji: "fuyu",
      exampleEnglish: "winter",
      mnemonic: "Mt. Fuji with snow on top",
    },
    {
      japanese: "へ",
      romanji: "he",
      english: "he sound",
      example: "へや",
      exampleRomanji: "heya",
      exampleEnglish: "room",
      mnemonic: "A helicopter rotor blade",
    },
    {
      japanese: "ほ",
      romanji: "ho",
      english: "ho sound",
      example: "ほん",
      exampleRomanji: "hon",
      exampleEnglish: "book",
      mnemonic: "A house with chimney and cross",
    },
  ],
  "Hiragana - M Sounds": [
    {
      japanese: "ま",
      romanji: "ma",
      english: "ma sound",
      example: "まち",
      exampleRomanji: "machi",
      exampleEnglish: "town",
      mnemonic: "A mammal nursing (loops like breasts)",
    },
    {
      japanese: "み",
      romanji: "mi",
      english: "mi sound",
      example: "みず",
      exampleRomanji: "mizu",
      exampleEnglish: "water",
      mnemonic: "Number 3 + 1 = 'mi' (三 = san/three in Japanese)",
    },
    {
      japanese: "む",
      romanji: "mu",
      english: "mu sound",
      example: "むし",
      exampleRomanji: "mushi",
      exampleEnglish: "insect",
      mnemonic: "A moo-cow's face",
    },
    {
      japanese: "め",
      romanji: "me",
      english: "me sound",
      example: "め",
      exampleRomanji: "me",
      exampleEnglish: "eye",
      mnemonic: "An eye (me in Japanese = 目)",
    },
    {
      japanese: "も",
      romanji: "mo",
      english: "mo sound",
      example: "もり",
      exampleRomanji: "mori",
      exampleEnglish: "forest",
      mnemonic: "A monster with curly tongue",
    },
  ],
  "Hiragana - Y/R/W Sounds": [
    {
      japanese: "や",
      romanji: "ya",
      english: "ya sound",
      example: "やま",
      exampleRomanji: "yama",
      exampleEnglish: "mountain",
      mnemonic: "A yacht sailing",
    },
    {
      japanese: "ゆ",
      romanji: "yu",
      english: "yu sound",
      example: "ゆき",
      exampleRomanji: "yuki",
      exampleEnglish: "snow",
      mnemonic: "A fish hook - 'you' can catch fish",
    },
    {
      japanese: "よ",
      romanji: "yo",
      english: "yo sound",
      example: "よる",
      exampleRomanji: "yoru",
      exampleEnglish: "night",
      mnemonic: "Yo-yo on a string",
    },
    {
      japanese: "ら",
      romanji: "ra",
      english: "ra sound",
      example: "らいねん",
      exampleRomanji: "rainen",
      exampleEnglish: "next year",
      mnemonic: "A raccoon standing",
    },
    {
      japanese: "り",
      romanji: "ri",
      english: "ri sound",
      example: "りんご",
      exampleRomanji: "ringo",
      exampleEnglish: "apple",
      mnemonic: "A river flowing down",
    },
    {
      japanese: "る",
      romanji: "ru",
      english: "ru sound",
      example: "るすばん",
      exampleRomanji: "rusuban",
      exampleEnglish: "house-sitting",
      mnemonic: "A rooster's profile",
    },
    {
      japanese: "れ",
      romanji: "re",
      english: "re sound",
      example: "れいぞうこ",
      exampleRomanji: "reizouko",
      exampleEnglish: "refrigerator",
      mnemonic: "A refuse/trash bin tipped over",
    },
    {
      japanese: "ろ",
      romanji: "ro",
      english: "ro sound",
      example: "ろく",
      exampleRomanji: "roku",
      exampleEnglish: "six",
      mnemonic: "A robot with antenna",
    },
    {
      japanese: "わ",
      romanji: "wa",
      english: "wa sound",
      example: "わたし",
      exampleRomanji: "watashi",
      exampleEnglish: "I/me",
      mnemonic: "Waffle with syrup dripping",
    },
    {
      japanese: "を",
      romanji: "wo",
      english: "wo sound",
      example: "を",
      exampleRomanji: "wo",
      exampleEnglish: "object particle",
      mnemonic: "Like わ but with an extra 'wow' loop",
    },
    {
      japanese: "ん",
      romanji: "n",
      english: "n sound",
      example: "にほん",
      exampleRomanji: "nihon",
      exampleEnglish: "Japan",
      mnemonic: "A nose in profile - or someone saying 'mmm'",
    },
  ],
  "Katakana - Vowels": [
    {
      japanese: "ア",
      romanji: "a",
      english: "a sound",
      example: "アメリカ",
      exampleRomanji: "amerika",
      exampleEnglish: "America",
      mnemonic: "A-frame ladder",
    },
    {
      japanese: "イ",
      romanji: "i",
      english: "i sound",
      example: "イタリア",
      exampleRomanji: "itaria",
      exampleEnglish: "Italy",
      mnemonic: "Two i's (like Roman numeral II)",
    },
    {
      japanese: "ウ",
      romanji: "u",
      english: "u sound",
      example: "ウール",
      exampleRomanji: "uuru",
      exampleEnglish: "wool",
      mnemonic: "Ooh! Arms reaching up",
    },
    {
      japanese: "エ",
      romanji: "e",
      english: "e sound",
      example: "エレベーター",
      exampleRomanji: "erebeetaa",
      exampleEnglish: "elevator",
      mnemonic: "Elevator doors opening",
    },
    {
      japanese: "オ",
      romanji: "o",
      english: "o sound",
      example: "オレンジ",
      exampleRomanji: "orenji",
      exampleEnglish: "orange",
      mnemonic: "Ocean with three waves",
    },
  ],
  "Katakana - K Sounds": [
    {
      japanese: "カ",
      romanji: "ka",
      english: "ka sound",
      example: "カメラ",
      exampleRomanji: "kamera",
      exampleEnglish: "camera",
      mnemonic: "Karate chop/knife cutting",
    },
    {
      japanese: "キ",
      romanji: "ki",
      english: "ki sound",
      example: "キーボード",
      exampleRomanji: "kiiboodo",
      exampleEnglish: "keyboard",
      mnemonic: "Key with notches",
    },
    {
      japanese: "ク",
      romanji: "ku",
      english: "ku sound",
      example: "クラス",
      exampleRomanji: "kurasu",
      exampleEnglish: "class",
      mnemonic: "A bird's beak saying 'coo'",
    },
    {
      japanese: "ケ",
      romanji: "ke",
      english: "ke sound",
      example: "ケーキ",
      exampleRomanji: "keeki",
      exampleEnglish: "cake",
      mnemonic: "A K without the vertical line",
    },
    {
      japanese: "コ",
      romanji: "ko",
      english: "ko sound",
      example: "コーヒー",
      exampleRomanji: "koohii",
      exampleEnglish: "coffee",
      mnemonic: "Two corner pieces",
    },
  ],
  "Katakana - S Sounds": [
    {
      japanese: "サ",
      romanji: "sa",
      english: "sa sound",
      example: "サラダ",
      exampleRomanji: "sarada",
      exampleEnglish: "salad",
      mnemonic: "Samurai with hat cross-section",
    },
    {
      japanese: "シ",
      romanji: "shi",
      english: "shi sound",
      example: "シャツ",
      exampleRomanji: "shatsu",
      exampleEnglish: "shirt",
      mnemonic: "Shell with horizontal ridges (シ points right →)",
    },
    {
      japanese: "ス",
      romanji: "su",
      english: "su sound",
      example: "スポーツ",
      exampleRomanji: "supootsu",
      exampleEnglish: "sports",
      mnemonic: "Suction cup or swing",
    },
    {
      japanese: "セ",
      romanji: "se",
      english: "se sound",
      example: "セーター",
      exampleRomanji: "seetaa",
      exampleEnglish: "sweater",
      mnemonic: "Seven with top cut off",
    },
    {
      japanese: "ソ",
      romanji: "so",
      english: "so sound",
      example: "ソファ",
      exampleRomanji: "sofa",
      exampleEnglish: "sofa",
      mnemonic: "Sock hanging (ソ starts high, points left ←)",
    },
  ],
  "Katakana - T Sounds": [
    {
      japanese: "タ",
      romanji: "ta",
      english: "ta sound",
      example: "タクシー",
      exampleRomanji: "takushii",
      exampleEnglish: "taxi",
      mnemonic: "Table top view",
    },
    {
      japanese: "チ",
      romanji: "chi",
      english: "chi sound",
      example: "チーズ",
      exampleRomanji: "chiizu",
      exampleEnglish: "cheese",
      mnemonic: "Cheerleader (looks like 千 = 1000)",
    },
    {
      japanese: "ツ",
      romanji: "tsu",
      english: "tsu sound",
      example: "ツアー",
      exampleRomanji: "tsuaa",
      exampleEnglish: "tour",
      mnemonic: "Tsunami (ツ points up ↑)",
    },
    {
      japanese: "テ",
      romanji: "te",
      english: "te sound",
      example: "テレビ",
      exampleRomanji: "terebi",
      exampleEnglish: "television",
      mnemonic: "Television antenna",
    },
    {
      japanese: "ト",
      romanji: "to",
      english: "to sound",
      example: "トマト",
      exampleRomanji: "tomato",
      exampleEnglish: "tomato",
      mnemonic: "Totem pole",
    },
  ],
  "Katakana - N Sounds": [
    {
      japanese: "ナ",
      romanji: "na",
      english: "na sound",
      example: "ナイフ",
      exampleRomanji: "naifu",
      exampleEnglish: "knife",
      mnemonic: "Naughty plus sign",
    },
    {
      japanese: "ニ",
      romanji: "ni",
      english: "ni sound",
      example: "ニュース",
      exampleRomanji: "nyuusu",
      exampleEnglish: "news",
      mnemonic: "Two knees (like number 2)",
    },
    {
      japanese: "ヌ",
      romanji: "nu",
      english: "nu sound",
      example: "ヌードル",
      exampleRomanji: "nuudoru",
      exampleEnglish: "noodle",
      mnemonic: "Noodles slurped up",
    },
    {
      japanese: "ネ",
      romanji: "ne",
      english: "ne sound",
      example: "ネクタイ",
      exampleRomanji: "nekutai",
      exampleEnglish: "necktie",
      mnemonic: "Net for catching",
    },
    {
      japanese: "ノ",
      romanji: "no",
      english: "no sound",
      example: "ノート",
      exampleRomanji: "nooto",
      exampleEnglish: "notebook",
      mnemonic: "Note - a single stroke slash",
    },
  ],
  "Katakana - H Sounds": [
    {
      japanese: "ハ",
      romanji: "ha",
      english: "ha sound",
      example: "ハンバーガー",
      exampleRomanji: "hanbaagaa",
      exampleEnglish: "hamburger",
      mnemonic: "Ha-ha laughing (^v^)",
    },
    {
      japanese: "ヒ",
      romanji: "hi",
      english: "hi sound",
      example: "ヒーター",
      exampleRomanji: "hiitaa",
      exampleEnglish: "heater",
      mnemonic: "Heel and toe dancing",
    },
    {
      japanese: "フ",
      romanji: "fu",
      english: "fu sound",
      example: "フォーク",
      exampleRomanji: "fooku",
      exampleEnglish: "fork",
      mnemonic: "Fumbling to catch something",
    },
    {
      japanese: "ヘ",
      romanji: "he",
      english: "he sound",
      example: "ヘルメット",
      exampleRomanji: "herumetto",
      exampleEnglish: "helmet",
      mnemonic: "Same as hiragana - helicopter blade",
    },
    {
      japanese: "ホ",
      romanji: "ho",
      english: "ho sound",
      example: "ホテル",
      exampleRomanji: "hoteru",
      exampleEnglish: "hotel",
      mnemonic: "Holy cross with extras",
    },
  ],
  "Katakana - M Sounds": [
    {
      japanese: "マ",
      romanji: "ma",
      english: "ma sound",
      example: "マスク",
      exampleRomanji: "masuku",
      exampleEnglish: "mask",
      mnemonic: "Math plus and minus stacked",
    },
    {
      japanese: "ミ",
      romanji: "mi",
      english: "mi sound",
      example: "ミルク",
      exampleRomanji: "miruku",
      exampleEnglish: "milk",
      mnemonic: "Missiles shooting (3 arrows)",
    },
    {
      japanese: "ム",
      romanji: "mu",
      english: "mu sound",
      example: "ムービー",
      exampleRomanji: "muubii",
      exampleEnglish: "movie",
      mnemonic: "Moo-cow horns",
    },
    {
      japanese: "メ",
      romanji: "me",
      english: "me sound",
      example: "メール",
      exampleRomanji: "meeru",
      exampleEnglish: "email",
      mnemonic: "Measuring X marks the spot",
    },
    {
      japanese: "モ",
      romanji: "mo",
      english: "mo sound",
      example: "モニター",
      exampleRomanji: "monitaa",
      exampleEnglish: "monitor",
      mnemonic: "More (three horizontal lines)",
    },
  ],
  "Katakana - Y/R/W Sounds": [
    {
      japanese: "ヤ",
      romanji: "ya",
      english: "ya sound",
      example: "ヤード",
      exampleRomanji: "yaado",
      exampleEnglish: "yard",
      mnemonic: "Yacht mast",
    },
    {
      japanese: "ユ",
      romanji: "yu",
      english: "yu sound",
      example: "ユニフォーム",
      exampleRomanji: "yunifomu",
      exampleEnglish: "uniform",
      mnemonic: "You (letter U with hook)",
    },
    {
      japanese: "ヨ",
      romanji: "yo",
      english: "yo sound",
      example: "ヨーグルト",
      exampleRomanji: "yooguruto",
      exampleEnglish: "yogurt",
      mnemonic: "Yo-yo (three strings)",
    },
    {
      japanese: "ラ",
      romanji: "ra",
      english: "ra sound",
      example: "ラジオ",
      exampleRomanji: "rajio",
      exampleEnglish: "radio",
      mnemonic: "Raven perched",
    },
    {
      japanese: "リ",
      romanji: "ri",
      english: "ri sound",
      example: "リモコン",
      exampleRomanji: "rimokon",
      exampleEnglish: "remote control",
      mnemonic: "Reed (two vertical sticks)",
    },
    {
      japanese: "ル",
      romanji: "ru",
      english: "ru sound",
      example: "ルール",
      exampleRomanji: "ruuru",
      exampleEnglish: "rule",
      mnemonic: "Root curving down",
    },
    {
      japanese: "レ",
      romanji: "re",
      english: "re sound",
      example: "レストラン",
      exampleRomanji: "resutoran",
      exampleEnglish: "restaurant",
      mnemonic: "Rectangular L-shape",
    },
    {
      japanese: "ロ",
      romanji: "ro",
      english: "ro sound",
      example: "ロボット",
      exampleRomanji: "robotto",
      exampleEnglish: "robot",
      mnemonic: "Robot mouth (square)",
    },
    {
      japanese: "ワ",
      romanji: "wa",
      english: "wa sound",
      example: "ワイン",
      exampleRomanji: "wain",
      exampleEnglish: "wine",
      mnemonic: "Waffle iron (looks like 7)",
    },
    {
      japanese: "ヲ",
      romanji: "wo",
      english: "wo sound",
      example: "ヲ",
      exampleRomanji: "wo",
      exampleEnglish: "object particle",
      mnemonic: "Rare, like ワ with extra stroke",
    },
    {
      japanese: "ン",
      romanji: "n",
      english: "n sound",
      example: "パン",
      exampleRomanji: "pan",
      exampleEnglish: "bread",
      mnemonic: "Like a needle or slash (different from ソ)",
    },
  ],
  "JLPT N5 Kanji": [
    {
      japanese: "一",
      romanji: "ichi",
      english: "one",
      example: "一人",
      exampleRomanji: "hitori",
      exampleEnglish: "one person",
      mnemonic: "ONE horizontal line - literally the number one",
    },
    {
      japanese: "二",
      romanji: "ni",
      english: "two",
      example: "二人",
      exampleRomanji: "futari",
      exampleEnglish: "two people",
      mnemonic: "TWO horizontal lines stacked - literally the number two",
    },
    {
      japanese: "三",
      romanji: "san",
      english: "three",
      example: "三つ",
      exampleRomanji: "mittsu",
      exampleEnglish: "three things",
      mnemonic: "THREE horizontal lines stacked - literally the number three",
    },
    {
      japanese: "四",
      romanji: "shi/yon",
      english: "four",
      example: "四時",
      exampleRomanji: "yoji",
      exampleEnglish: "four o'clock",
    },
    {
      japanese: "五",
      romanji: "go",
      english: "five",
      example: "五分",
      exampleRomanji: "gofun",
      exampleEnglish: "five minutes",
    },
    {
      japanese: "六",
      romanji: "roku",
      english: "six",
      example: "六時",
      exampleRomanji: "rokuji",
      exampleEnglish: "six o'clock",
    },
    {
      japanese: "七",
      romanji: "shichi/nana",
      english: "seven",
      example: "七日",
      exampleRomanji: "nanoka",
      exampleEnglish: "seven days",
    },
    {
      japanese: "八",
      romanji: "hachi",
      english: "eight",
      example: "八月",
      exampleRomanji: "hachigatsu",
      exampleEnglish: "August",
    },
    {
      japanese: "九",
      romanji: "kyuu/ku",
      english: "nine",
      example: "九時",
      exampleRomanji: "kuji",
      exampleEnglish: "nine o'clock",
    },
    {
      japanese: "十",
      romanji: "juu",
      english: "ten",
      example: "十分",
      exampleRomanji: "juppun",
      exampleEnglish: "ten minutes",
    },
    {
      japanese: "百",
      romanji: "hyaku",
      english: "hundred",
      example: "百円",
      exampleRomanji: "hyakuen",
      exampleEnglish: "100 yen",
    },
    {
      japanese: "千",
      romanji: "sen",
      english: "thousand",
      example: "千円",
      exampleRomanji: "senen",
      exampleEnglish: "1000 yen",
    },
    {
      japanese: "万",
      romanji: "man",
      english: "ten thousand",
      example: "一万",
      exampleRomanji: "ichiman",
      exampleEnglish: "ten thousand",
    },
    {
      japanese: "日",
      romanji: "hi/nichi",
      english: "day/sun",
      example: "今日",
      exampleRomanji: "kyou",
      exampleEnglish: "today",
      mnemonic: "Picture of the SUN - a circle with a line through the middle",
    },
    {
      japanese: "月",
      romanji: "tsuki/getsu",
      english: "moon/month",
      example: "来月",
      exampleRomanji: "raigetsu",
      exampleEnglish: "next month",
      mnemonic: "Crescent MOON shape on the left side of the character",
    },
    {
      japanese: "火",
      romanji: "hi/ka",
      english: "fire/Tuesday",
      example: "火曜日",
      exampleRomanji: "kayoubi",
      exampleEnglish: "Tuesday",
    },
    {
      japanese: "水",
      romanji: "mizu/sui",
      english: "water/Wednesday",
      example: "水曜日",
      exampleRomanji: "suiyoubi",
      exampleEnglish: "Wednesday",
      mnemonic: "Streams of WATER flowing - the center line is like a river",
    },
    {
      japanese: "木",
      romanji: "ki/moku",
      english: "tree/Thursday",
      example: "木曜日",
      exampleRomanji: "mokuyoubi",
      exampleEnglish: "Thursday",
    },
    {
      japanese: "金",
      romanji: "kane/kin",
      english: "gold/Friday",
      example: "金曜日",
      exampleRomanji: "kinyoubi",
      exampleEnglish: "Friday",
    },
    {
      japanese: "土",
      romanji: "tsuchi/do",
      english: "earth/Saturday",
      example: "土曜日",
      exampleRomanji: "doyoubi",
      exampleEnglish: "Saturday",
    },
    {
      japanese: "年",
      romanji: "nen/toshi",
      english: "year",
      example: "今年",
      exampleRomanji: "kotoshi",
      exampleEnglish: "this year",
    },
    {
      japanese: "時",
      romanji: "ji/toki",
      english: "time/hour",
      example: "何時",
      exampleRomanji: "nanji",
      exampleEnglish: "what time",
    },
    {
      japanese: "分",
      romanji: "fun/pun",
      english: "minute",
      example: "十分",
      exampleRomanji: "juppun",
      exampleEnglish: "ten minutes",
    },
    {
      japanese: "週",
      romanji: "shuu",
      english: "week",
      example: "来週",
      exampleRomanji: "raishuu",
      exampleEnglish: "next week",
    },
    {
      japanese: "今",
      romanji: "ima/kon",
      english: "now",
      example: "今日",
      exampleRomanji: "kyou",
      exampleEnglish: "today",
    },
    {
      japanese: "前",
      romanji: "mae/zen",
      english: "before/front",
      example: "前",
      exampleRomanji: "mae",
      exampleEnglish: "in front",
    },
    {
      japanese: "後",
      romanji: "ato/go",
      english: "after/behind",
      example: "後で",
      exampleRomanji: "ato de",
      exampleEnglish: "later",
    },
    {
      japanese: "上",
      romanji: "ue/jou",
      english: "above/up",
      example: "上",
      exampleRomanji: "ue",
      exampleEnglish: "above",
    },
    {
      japanese: "下",
      romanji: "shita/ka",
      english: "below/down",
      example: "下",
      exampleRomanji: "shita",
      exampleEnglish: "below",
    },
    {
      japanese: "中",
      romanji: "naka/chuu",
      english: "inside/middle",
      example: "中",
      exampleRomanji: "naka",
      exampleEnglish: "inside",
    },
    {
      japanese: "外",
      romanji: "soto/gai",
      english: "outside",
      example: "外",
      exampleRomanji: "soto",
      exampleEnglish: "outside",
    },
    {
      japanese: "左",
      romanji: "hidari/sa",
      english: "left",
      example: "左",
      exampleRomanji: "hidari",
      exampleEnglish: "left",
    },
    {
      japanese: "右",
      romanji: "migi/u",
      english: "right",
      example: "右",
      exampleRomanji: "migi",
      exampleEnglish: "right",
    },
    {
      japanese: "東",
      romanji: "higashi/tou",
      english: "east",
      example: "東京",
      exampleRomanji: "toukyou",
      exampleEnglish: "Tokyo",
    },
    {
      japanese: "西",
      romanji: "nishi/sei",
      english: "west",
      example: "西",
      exampleRomanji: "nishi",
      exampleEnglish: "west",
    },
    {
      japanese: "南",
      romanji: "minami/nan",
      english: "south",
      example: "南",
      exampleRomanji: "minami",
      exampleEnglish: "south",
    },
    {
      japanese: "北",
      romanji: "kita/hoku",
      english: "north",
      example: "北",
      exampleRomanji: "kita",
      exampleEnglish: "north",
    },
    {
      japanese: "人",
      romanji: "hito/jin",
      english: "person",
      example: "日本人",
      exampleRomanji: "nihonjin",
      exampleEnglish: "Japanese person",
      mnemonic: "Looks like a person walking with two legs spread apart",
    },
    {
      japanese: "男",
      romanji: "otoko/dan",
      english: "man/male",
      example: "男の人",
      exampleRomanji: "otoko no hito",
      exampleEnglish: "man",
    },
    {
      japanese: "女",
      romanji: "onna/jo",
      english: "woman/female",
      example: "女の人",
      exampleRomanji: "onna no hito",
      exampleEnglish: "woman",
    },
    {
      japanese: "子",
      romanji: "ko/shi",
      english: "child",
      example: "子供",
      exampleRomanji: "kodomo",
      exampleEnglish: "child",
    },
    {
      japanese: "父",
      romanji: "chichi/fu",
      english: "father",
      example: "お父さん",
      exampleRomanji: "otousan",
      exampleEnglish: "father",
    },
    {
      japanese: "母",
      romanji: "haha/bo",
      english: "mother",
      example: "お母さん",
      exampleRomanji: "okaasan",
      exampleEnglish: "mother",
    },
    {
      japanese: "兄",
      romanji: "ani/kei",
      english: "older brother",
      example: "お兄さん",
      exampleRomanji: "oniisan",
      exampleEnglish: "older brother",
    },
    {
      japanese: "姉",
      romanji: "ane/shi",
      english: "older sister",
      example: "お姉さん",
      exampleRomanji: "oneesan",
      exampleEnglish: "older sister",
    },
    {
      japanese: "弟",
      romanji: "otouto/tei",
      english: "younger brother",
      example: "弟",
      exampleRomanji: "otouto",
      exampleEnglish: "younger brother",
    },
    {
      japanese: "妹",
      romanji: "imouto/mai",
      english: "younger sister",
      example: "妹",
      exampleRomanji: "imouto",
      exampleEnglish: "younger sister",
    },
    {
      japanese: "家",
      romanji: "ie/ka",
      english: "house/home",
      example: "家",
      exampleRomanji: "ie",
      exampleEnglish: "house",
    },
    {
      japanese: "学",
      romanji: "gaku/mana",
      english: "study/learning",
      example: "学校",
      exampleRomanji: "gakkou",
      exampleEnglish: "school",
    },
    {
      japanese: "校",
      romanji: "kou",
      english: "school",
      example: "学校",
      exampleRomanji: "gakkou",
      exampleEnglish: "school",
    },
    {
      japanese: "生",
      romanji: "sei/nama",
      english: "life/birth",
      example: "学生",
      exampleRomanji: "gakusei",
      exampleEnglish: "student",
    },
    {
      japanese: "先",
      romanji: "saki/sen",
      english: "before/ahead",
      example: "先生",
      exampleRomanji: "sensei",
      exampleEnglish: "teacher",
    },
    {
      japanese: "会",
      romanji: "ai/kai",
      english: "meet/meeting",
      example: "会社",
      exampleRomanji: "kaisha",
      exampleEnglish: "company",
    },
    {
      japanese: "社",
      romanji: "sha",
      english: "company/society",
      example: "会社",
      exampleRomanji: "kaisha",
      exampleEnglish: "company",
    },
    {
      japanese: "名",
      romanji: "na/mei",
      english: "name",
      example: "名前",
      exampleRomanji: "namae",
      exampleEnglish: "name",
    },
    {
      japanese: "本",
      romanji: "hon/moto",
      english: "book/origin",
      example: "本",
      exampleRomanji: "hon",
      exampleEnglish: "book",
    },
    {
      japanese: "車",
      romanji: "kuruma/sha",
      english: "car",
      example: "車",
      exampleRomanji: "kuruma",
      exampleEnglish: "car",
    },
    {
      japanese: "電",
      romanji: "den",
      english: "electricity",
      example: "電車",
      exampleRomanji: "densha",
      exampleEnglish: "train",
    },
    {
      japanese: "気",
      romanji: "ki/ke",
      english: "spirit/feeling",
      example: "元気",
      exampleRomanji: "genki",
      exampleEnglish: "healthy",
    },
    {
      japanese: "天",
      romanji: "ten/ama",
      english: "heaven/sky",
      example: "天気",
      exampleRomanji: "tenki",
      exampleEnglish: "weather",
    },
    {
      japanese: "雨",
      romanji: "ame/u",
      english: "rain",
      example: "雨",
      exampleRomanji: "ame",
      exampleEnglish: "rain",
    },
    {
      japanese: "雪",
      romanji: "yuki/setsu",
      english: "snow",
      example: "雪",
      exampleRomanji: "yuki",
      exampleEnglish: "snow",
    },
    {
      japanese: "山",
      romanji: "yama/san",
      english: "mountain",
      example: "山",
      exampleRomanji: "yama",
      exampleEnglish: "mountain",
      mnemonic: "Three MOUNTAIN peaks rising up from the ground",
    },
    {
      japanese: "川",
      romanji: "kawa/sen",
      english: "river",
      example: "川",
      exampleRomanji: "kawa",
      exampleEnglish: "river",
    },
    {
      japanese: "海",
      romanji: "umi/kai",
      english: "sea/ocean",
      example: "海",
      exampleRomanji: "umi",
      exampleEnglish: "sea",
    },
    {
      japanese: "空",
      romanji: "sora/kuu",
      english: "sky/empty",
      example: "空",
      exampleRomanji: "sora",
      exampleEnglish: "sky",
    },
    {
      japanese: "国",
      romanji: "kuni/koku",
      english: "country",
      example: "国",
      exampleRomanji: "kuni",
      exampleEnglish: "country",
    },
    {
      japanese: "語",
      romanji: "go/kata",
      english: "language",
      example: "日本語",
      exampleRomanji: "nihongo",
      exampleEnglish: "Japanese language",
    },
    {
      japanese: "文",
      romanji: "bun/fumi",
      english: "writing/text",
      example: "文字",
      exampleRomanji: "moji",
      exampleEnglish: "character",
    },
    {
      japanese: "字",
      romanji: "ji/aza",
      english: "character/letter",
      example: "文字",
      exampleRomanji: "moji",
      exampleEnglish: "character",
    },
    {
      japanese: "手",
      romanji: "te/shu",
      english: "hand",
      example: "手",
      exampleRomanji: "te",
      exampleEnglish: "hand",
    },
    {
      japanese: "足",
      romanji: "ashi/soku",
      english: "foot/leg",
      example: "足",
      exampleRomanji: "ashi",
      exampleEnglish: "foot",
    },
    {
      japanese: "目",
      romanji: "me/moku",
      english: "eye",
      example: "目",
      exampleRomanji: "me",
      exampleEnglish: "eye",
    },
    {
      japanese: "口",
      romanji: "kuchi/kou",
      english: "mouth",
      example: "口",
      exampleRomanji: "kuchi",
      exampleEnglish: "mouth",
    },
    {
      japanese: "耳",
      romanji: "mimi/ji",
      english: "ear",
      example: "耳",
      exampleRomanji: "mimi",
      exampleEnglish: "ear",
    },
    {
      japanese: "頭",
      romanji: "atama/tou",
      english: "head",
      example: "頭",
      exampleRomanji: "atama",
      exampleEnglish: "head",
    },
    {
      japanese: "心",
      romanji: "kokoro/shin",
      english: "heart/mind",
      example: "心",
      exampleRomanji: "kokoro",
      exampleEnglish: "heart",
    },
    {
      japanese: "食",
      romanji: "ta/shoku",
      english: "eat/food",
      example: "食べる",
      exampleRomanji: "taberu",
      exampleEnglish: "to eat",
    },
    {
      japanese: "飲",
      romanji: "no/in",
      english: "drink",
      example: "飲む",
      exampleRomanji: "nomu",
      exampleEnglish: "to drink",
    },
    {
      japanese: "見",
      romanji: "mi/ken",
      english: "see/look",
      example: "見る",
      exampleRomanji: "miru",
      exampleEnglish: "to see",
    },
    {
      japanese: "聞",
      romanji: "ki/bun",
      english: "hear/listen",
      example: "聞く",
      exampleRomanji: "kiku",
      exampleEnglish: "to hear",
    },
    {
      japanese: "話",
      romanji: "hana/wa",
      english: "talk/speak",
      example: "話す",
      exampleRomanji: "hanasu",
      exampleEnglish: "to speak",
    },
    {
      japanese: "読",
      romanji: "yo/doku",
      english: "read",
      example: "読む",
      exampleRomanji: "yomu",
      exampleEnglish: "to read",
    },
    {
      japanese: "書",
      romanji: "ka/sho",
      english: "write",
      example: "書く",
      exampleRomanji: "kaku",
      exampleEnglish: "to write",
    },
    {
      japanese: "来",
      romanji: "ku/rai",
      english: "come",
      example: "来る",
      exampleRomanji: "kuru",
      exampleEnglish: "to come",
    },
    {
      japanese: "行",
      romanji: "i/gyou",
      english: "go",
      example: "行く",
      exampleRomanji: "iku",
      exampleEnglish: "to go",
    },
    {
      japanese: "帰",
      romanji: "kae/ki",
      english: "return/go home",
      example: "帰る",
      exampleRomanji: "kaeru",
      exampleEnglish: "to return",
    },
    {
      japanese: "出",
      romanji: "de/shutsu",
      english: "exit/come out",
      example: "出る",
      exampleRomanji: "deru",
      exampleEnglish: "to exit",
    },
    {
      japanese: "入",
      romanji: "hai/nyuu",
      english: "enter",
      example: "入る",
      exampleRomanji: "hairu",
      exampleEnglish: "to enter",
    },
    {
      japanese: "立",
      romanji: "ta/ritsu",
      english: "stand",
      example: "立つ",
      exampleRomanji: "tatsu",
      exampleEnglish: "to stand",
    },
    {
      japanese: "休",
      romanji: "yasu/kyuu",
      english: "rest",
      example: "休む",
      exampleRomanji: "yasumu",
      exampleEnglish: "to rest",
    },
    {
      japanese: "買",
      romanji: "ka/bai",
      english: "buy",
      example: "買う",
      exampleRomanji: "kau",
      exampleEnglish: "to buy",
    },
    {
      japanese: "売",
      romanji: "u/bai",
      english: "sell",
      example: "売る",
      exampleRomanji: "uru",
      exampleEnglish: "to sell",
    },
    {
      japanese: "作",
      romanji: "tsuku/saku",
      english: "make",
      example: "作る",
      exampleRomanji: "tsukuru",
      exampleEnglish: "to make",
    },
    {
      japanese: "使",
      romanji: "tsuka/shi",
      english: "use",
      example: "使う",
      exampleRomanji: "tsukau",
      exampleEnglish: "to use",
    },
    {
      japanese: "思",
      romanji: "omo/shi",
      english: "think",
      example: "思う",
      exampleRomanji: "omou",
      exampleEnglish: "to think",
    },
    {
      japanese: "知",
      romanji: "shi/chi",
      english: "know",
      example: "知る",
      exampleRomanji: "shiru",
      exampleEnglish: "to know",
    },
    {
      japanese: "言",
      romanji: "i/gen",
      english: "say",
      example: "言う",
      exampleRomanji: "iu",
      exampleEnglish: "to say",
    },
    {
      japanese: "大",
      romanji: "oo/dai",
      english: "big/large",
      example: "大きい",
      exampleRomanji: "ookii",
      exampleEnglish: "big",
      mnemonic: "A person (人) with arms stretched out wide to show BIG",
    },
    {
      japanese: "小",
      romanji: "chii/shou",
      english: "small",
      example: "小さい",
      exampleRomanji: "chiisai",
      exampleEnglish: "small",
      mnemonic: "A person with arms close to their body - SMALL and compact",
    },
    {
      japanese: "高",
      romanji: "taka/kou",
      english: "high/expensive",
      example: "高い",
      exampleRomanji: "takai",
      exampleEnglish: "high",
    },
    {
      japanese: "安",
      romanji: "yasu/an",
      english: "cheap/safe",
      example: "安い",
      exampleRomanji: "yasui",
      exampleEnglish: "cheap",
    },
    {
      japanese: "新",
      romanji: "atara/shin",
      english: "new",
      example: "新しい",
      exampleRomanji: "atarashii",
      exampleEnglish: "new",
    },
    {
      japanese: "古",
      romanji: "furu/ko",
      english: "old",
      example: "古い",
      exampleRomanji: "furui",
      exampleEnglish: "old",
    },
    {
      japanese: "良",
      romanji: "yo/ryou",
      english: "good",
      example: "良い",
      exampleRomanji: "yoi",
      exampleEnglish: "good",
    },
    {
      japanese: "悪",
      romanji: "waru/aku",
      english: "bad",
      example: "悪い",
      exampleRomanji: "warui",
      exampleEnglish: "bad",
    },
    {
      japanese: "白",
      romanji: "shiro/haku",
      english: "white",
      example: "白い",
      exampleRomanji: "shiroi",
      exampleEnglish: "white",
    },
    {
      japanese: "黒",
      romanji: "kuro/koku",
      english: "black",
      example: "黒い",
      exampleRomanji: "kuroi",
      exampleEnglish: "black",
    },
    {
      japanese: "赤",
      romanji: "aka/seki",
      english: "red",
      example: "赤い",
      exampleRomanji: "akai",
      exampleEnglish: "red",
    },
    {
      japanese: "青",
      romanji: "ao/sei",
      english: "blue",
      example: "青い",
      exampleRomanji: "aoi",
      exampleEnglish: "blue",
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

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const startSession = (sectionName, cards = null) => {
    let cardsToUse = cards || vocabularyData[sectionName]

    // Don't shuffle vowel sections - keep them in natural a-i-u-e-o order
    const isVowelSection = sectionName.includes("Vowels")

    // Shuffle all other sections for variety
    if (!isVowelSection && !cards) {
      cardsToUse = shuffleArray(cardsToUse)
    }

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
    // Force shuffle for restart - shuffle all sections including vowels
    const originalCards = vocabularyData[selectedSection]
    const shuffledCards = shuffleArray(originalCards)
    startSession(selectedSection, shuffledCards)
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
            <h1 className="text-4xl font-bold text-primary mb-2">Learn Japanese Characters</h1>
            <p className="text-muted-foreground text-lg">Master hiragana, katakana, and JLPT N5 kanji with interactive flashcards</p>
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
                    {section.includes("Hiragana - Vowels") && "あ"}
                    {section.includes("Hiragana - K") && "か"}
                    {section.includes("Hiragana - S") && "さ"}
                    {section.includes("Hiragana - T") && "た"}
                    {section.includes("Hiragana - N") && "な"}
                    {section.includes("Hiragana - H") && "は"}
                    {section.includes("Hiragana - M") && "ま"}
                    {section.includes("Hiragana - Y/R/W") && "や"}
                    {section.includes("Katakana - Vowels") && "ア"}
                    {section.includes("Katakana - K") && "カ"}
                    {section.includes("Katakana - S") && "サ"}
                    {section.includes("Katakana - T") && "タ"}
                    {section.includes("Katakana - N") && "ナ"}
                    {section.includes("Katakana - H") && "ハ"}
                    {section.includes("Katakana - M") && "マ"}
                    {section.includes("Katakana - Y/R/W") && "ヤ"}
                    {section.includes("JLPT N5 Kanji") && "漢"}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{section}</h3>

                  {/* Character Preview for sections with 5 characters or fewer */}
                  {vocabularyData[section].length <= 5 ? (
                    <div className="mb-4">
                      <div className="flex justify-center gap-2 sm:gap-3 mb-1">
                        {vocabularyData[section].map((char, index) => (
                          <span key={index} className="text-lg sm:text-xl font-medium text-card-foreground">
                            {char.japanese}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center gap-2 sm:gap-3 mb-3">
                        {vocabularyData[section].map((char, index) => (
                          <span key={index} className="text-xs sm:text-sm text-muted-foreground">
                            {char.romanji}
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">{vocabularyData[section].length} characters</p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm mb-4">{vocabularyData[section].length} characters</p>
                  )}

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
                <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">🎯 Learning Process:</h4>
                      <ul className="space-y-1 pl-4">
                        <li>• Choose a character set to practice (hiragana, katakana, or kanji)</li>
                        <li>• Look at the Japanese character and try to recall its pronunciation</li>
                        <li>• Tap the card to reveal the romanization and meaning</li>
                        <li>• Mark whether you knew it before flipping</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">📝 Character Sets:</h4>
                      <ul className="space-y-1 pl-4">
                        <li>• <strong>Hiragana:</strong> 46 basic characters organized by sound families</li>
                        <li>• <strong>Katakana:</strong> 46 basic characters (same sounds as hiragana)</li>
                        <li>• <strong>JLPT N5 Kanji:</strong> 100 essential kanji for beginners</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">⏱️ Session Features:</h4>
                      <ul className="space-y-1 pl-4">
                        <li>• Timer tracks your learning session</li>
                        <li>• Progress bar shows completion status</li>
                        <li>• Pause/resume functionality available</li>
                        <li>• Return home anytime to switch character sets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">📊 After Each Session:</h4>
                      <ul className="space-y-1 pl-4">
                        <li>• Review your performance summary</li>
                        <li>• Retry only the characters you didn't know</li>
                        <li>• Start the entire section over again</li>
                        <li>• Return home to choose a different character set</li>
                      </ul>
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
                  <p className="text-xs text-muted-foreground mt-1">Practice only the characters you marked as unknown</p>
                </div>
              )}
              <div>
                <Button
                  onClick={startOver}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                >
                  🔀 Shuffle & Restart
                </Button>
                <p className="text-xs text-muted-foreground mt-1">Shuffle cards and restart this section</p>
              </div>
              <div>
                <Button onClick={goHome} variant="outline" className="w-full bg-transparent text-sm">
                  🏠 Back to Home
                </Button>
                <p className="text-xs text-muted-foreground mt-1">Choose a different character set</p>
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
                  <h3 className="text-4xl sm:text-6xl font-bold text-card-foreground">{currentCard?.japanese}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">👆 Tap to reveal pronunciation and meaning</p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">{currentCard?.english}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-2xl sm:text-3xl font-bold text-card-foreground">{currentCard?.japanese}</p>
                    <p className="text-lg sm:text-xl">{currentCard?.romanji}</p>
                  </div>
                  {currentCard?.mnemonic && (
                    <div className="mt-4 p-3 bg-secondary/20 rounded-lg border border-secondary/30">
                      <p className="text-xs text-secondary font-medium mb-2">💡 Memory Helper:</p>
                      <p className="text-sm text-card-foreground">{currentCard.mnemonic}</p>
                    </div>
                  )}
                  {currentCard?.example && (
                    <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-primary/20">
                      <p className="text-xs text-primary font-medium mb-2">Example Usage:</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-card-foreground">{currentCard.example}</p>
                        <p className="text-xs text-muted-foreground">{currentCard.exampleRomanji}</p>
                        <p className="text-xs text-primary">{currentCard.exampleEnglish}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-primary mt-3 sm:mt-4">⬇️ Now mark whether you knew this character</p>
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
              👆 Flip the card first to see the pronunciation and meaning
            </p>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Try to recall the pronunciation before flipping for better learning
            </p>
          </div>
        ) : (
          <div className="text-center mt-4 space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-primary font-medium">Did you know this character before flipping?</p>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Be honest - unknown characters will be reviewed at the end
            </p>
          </div>
        )}
      </div>
    </div>
  )
}