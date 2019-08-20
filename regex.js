"use strict";

function test(regex, text) {
    if (regex.test(text)) {
        console.log("matched!");
    }
}

/*
    javascriptでは、new を使う方法、デリミタ(「/」のみ)を使う方法の二種類で正規表現を生み出せる
    ① new を使う方法
      const regex = new RegExp("[A-Za-z0-9]+");
    ② デリミタを使う方法
      const regex = /[A-Za-z0-9]+/;
    このファイル内ではデリミタを使うことにしている
    デリミタを使う場合、デリミタに使った文字が文字列中に出てくるとエスケープしなければならない(そもそも「/」はメタ文字列ではない)
*/

// .
// 全ての文字列にマッチ
const regex1 = /./;

// 文字列abcにマッチ
const regex2 = /abc/;

// ^
// 先頭がabcの文字列("abcde", "abc34234"など)にマッチ
const regex3 = /^abc/;

// $
// 最後がabcの文字列("deabc", "34234abc"など)にマッチ
const regex4 = /abc$/;

// *
// 直前の文字が0文字以上ある文字列("ac", "abbbbc"など)にマッチ
const regex5 = /ab*c/;

// +
// 直前の文字が1文字以上ある文字列("abc", "abbbc"など)にマッチ
const regex6 = /ab+c/;

// ?
// 直前の文字が0文字か1文字ある文字列("ac", "abc"のみ)にマッチ
const regex7 = /ab?c/;

// |
// 「|」で区切られた文字列のいずれかが存在する文字列("aaa1111", "222ddd22"など)にマッチ
const regex8 = /aaa|bbb|ccc|ddd/;

// []
// []の中のどれかにマッチする文字列("abc", "aac"など)にマッチ
const regex9 = /a[abc]c/;
// aからzのどれか
const regex10 = /a[a-z]c/;
// AからZ, aからz, 0から9のどれか
const regex11 = /a[A-Za-z0-9]c/;

// [^]
// []の中のどれか以外の文字列にマッチ
const regex12 = /a[^bc]c/;

// ()
// ()で囲まれた部分をグループ化する

// "abc", "abababc"など
const regex13 = /(ab)+c/;
// "aaac", "abbc"など
const regex14 = /a(aa|bb|cc)c/;

// {}
// {}内の数字だけ前の文字を繰り返ししている文字列にマッチ
const regex15 = /ab{3}c/; // 3回
const regex16 = /ab{1,3}c/; // 1回~3回
const regex17 = /ab{1,}c/; // 1回以上

// \
// \.のように使うことでメタ文字列をエスケープできる
// 下は"https://twitter.com/home?lang=ja"にマッチ、デリミタに「/」を使ったので文字列中の「/」はエスケープ
const regex19 = /https:\/\/twitter.com\/home\?lang=ja/;