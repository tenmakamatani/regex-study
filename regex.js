"use strict";

// .
// 全ての文字列にマッチ
const regex1 = new RegExp(".");

// 文字列abcにマッチ
const regex2 = new RegExp("abc");

// ^
// 先頭がabcの文字列("abcde", "abc34234"など)にマッチ
const regex3 = new RegExp("^abc");

// $
// 最後がabcの文字列("deabc", "34234abc"など)にマッチ
const regex4 = new RegExp("abc$");

// *
// 直前の文字が0文字以上ある文字列("ac", "abbbbc"など)にマッチ
const regex5 = new RegExp("ab*c");

// +
// 直前の文字が1文字以上ある文字列("abc", "abbbc"など)にマッチ
const regex6 = new RegExp("ab+c");

// ?
// 直前の文字が0文字か1文字ある文字列("ac", "abc"のみ)にマッチ
const regex7 = new RegExp("ab?c");

// |
// 「|」で区切られた文字列のいずれかが存在する文字列("aaa1111", "222ddd22"など)にマッチ
const regex8 = new RegExp("aaa|bbb|ccc|ddd");

// []
// []の中のどれかにマッチする文字列("abc", "aac"など)にマッチ
const regex9 = new RegExp("a[abc]c");
// aからzのどれか
const regex10 = new RegExp("a[a-z]c");
// AからZ, aからz, 0から9のどれか
const regex11 = new RegExp("a[A-Za-z0-9]c");

// [^]
// []の中のどれか以外の文字列にマッチ
const regex12 = new RegExp("a[^bc]c");

// ()
// ()で囲まれた部分をグループ化する

// "abc", "abababc"など
const regex13 = new RegExp("(ab)+c");
// "aaac", "abbc"など
const regex14 = new RegExp("a(aa|bb|cc)c");

function test(regex, text) {
    if (regex.test(text)) {
        console.log("matched!");
    }
}