
/* 初期状態。game.html読み込み時に実行される。 */


/* 将来的にキャラクターの選択ができる予定 */
if (playerNum == 1) { 
    SetStatusReimu();
}

/* 敵キャラ（デフォルトはルーミア） */
SetStatusRumia();

showImage();
showLog();


console.log("合計ターン数：" + totalTurnCount);
console.log("ターン" + turnCount);
/* 敵ステータス */
console.log("＜" + enemyNAME + "＞\nＨＰ：", enemyHP, "\n陽攻：", enemyPA, "\n陽防：", enemyPD, "\n陰攻：", enemyMA, "\n陰防：", enemyMD, "\n速力：", enemySP);

/* 味方ステータス */
console.log("＜" + playerNAME + "＞\nＨＰ：", playerHP, "\n陽攻：", playerPA, "\n陽防：", playerPD, "\n陰攻：", playerMA, "\n陰防：", playerMD, "\n速力：", playerSP);






/* 今後の実装予定 */
// 現状では勝てない、良くてステージ３にたどり着くまで。
// （完了）そこで、バリア（使用したターンの攻撃を無効化、手持ちバリアは５）を実装
// また、一定時間能力を上昇させるスキル（最大５ターン攻撃を上昇など）を実装

/* console.log("＜" + enemyNAME + "＞");
console.log("ＨＰ：", enemyHP);
console.log("陽攻：", enemyPA);
console.log("陽防：", enemyPD);
console.log("陰攻：", enemyMA);
console.log("陰防：", enemyMD);
console.log("速力：", enemySP);
 */