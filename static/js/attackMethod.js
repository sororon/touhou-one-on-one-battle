let DEBUG_method = 0;

/* player1(霊夢) */
function difReimu() {
    alert("霊夢の拡散ショット！\nホーミングアミュレット");
    // confirm("よろしいでしょうか？");
 if (DEBUG_method == 1) {
     console.log("enemyHPにCalcDamageを代入前");
     console.log("enemyHp:", enemyHP);
     console.log("playerAttack:", playerPA);
     console.log("enemyDeffence:", enemyPD);
 }

    enemyHP = CalcDamage(enemyHP, playerPA, enemyPD);

 if (DEBUG_method == 1) {
     console.log("enemyHPにCalcDamageを代入後");
     console.log("enemyHp:", enemyHP);
     console.log("playerAttack:", playerPA);
     console.log("enemyDeffence:", enemyPD);
 }
}

function conReimu() {
    alert("霊夢の集中ショット！\nパスウェイジョンニードル");
    enemyHP = CalcDamage(enemyHP, playerMA, enemyMD);
}

function sp1Reimu() {
    alert("霊夢はスペルカードを使用した！\n霊符「夢想封印」");
    enemyHP = CalcDamage(enemyHP, playerPA*2, enemyPD);
    playerSP1Count--;
}

function sp2Reimu() {
    alert("霊夢はスペルカードを使用した！\n夢符「封魔陣」");
    enemyHP = CalcDamage(enemyHP, playerMA*2, enemyMD);
    playerSP2Count--;
}

function lastReimu() {
    alert("霊夢はラストワードを発動した！\n「夢想天生」");
    enemyHP = CalcDamage(enemyHP, (playerPA+playerMA)*2, Math.min(enemyPD,enemyMD));
    playerLWCount--;
}


/* enemy1(ルーミア) */
function difRumia() {
    alert("ルーミアの拡散ショット！\n宵闇");
    playerHP = CalcDamage(playerHP, enemyPA, playerPD);
    
}

function conRumia() {
    alert("ルーミアの集中ショット！\n黒の安息日");
    playerHP = CalcDamage(playerHP, enemyMA, playerMD);
}

function sp1Rumia() {
    alert("ルーミアはスペルカードを使用した！\n夜符「ナイトバード」");
    playerHP = CalcDamage(playerHP, enemyPA*2, playerPD);
    enemySP1Count--;
}

function sp2Rumia() {
    alert("ルーミアはスペルカードを使用した！\n闇符「ダークサイドオブザムーン」");
    playerHP = CalcDamage(playerHP, enemyMA*2, playerMD);
    enemySP2Count--;
}

function lastRumia() {
    alert("ルーミアはラストワードを発動した！\n「トワイライトゾーン」");
    playerHP = CalcDamage(playerHP, (enemyPA+enemyMA)*2, Math.min(playerPD,playerMD));
    enemyLWCount--;
}


/* enemy2(雛) */
function difHina() {
    alert("雛の拡散ショット！\nスケープゴート");
    playerHP = CalcDamage(playerHP, enemyPA, playerPD);
}

function conHina() {
    alert("雛の集中ショット！\nハンド・オブ・ファティマ");
    playerHP = CalcDamage(playerHP, enemyMA, playerMD);
}

function sp1Hina() {
    alert("雛はスペルカードを使用した！\n創符「ペインフロー」");
    playerHP = CalcDamage(playerHP, enemyPA*2, playerPD);
    enemySP1Count--;
}

function sp2Hina() {
    alert("雛はスペルカードを使用した！\n疵痕「壊されたお守り」");
    playerHP = CalcDamage(playerHP, enemyMA*2, playerMD);
    enemySP2Count--;
}

function lastHina() {
    alert("雛はラストワードを発動した！\n「厄祓いダイソンスフィア」");
    playerHP = CalcDamage(playerHP, (enemyPA+enemyMA)*2, Math.min(playerPD,playerMD));
    enemyLWCount--;
}


/* enemy3(アリス) */
function difArice() {
    alert("アリスの拡散ショット！\nスペクトルミステリー");
    playerHP = CalcDamage(playerHP, enemyPA, playerPD);
}

function conArice() {
    alert("アリスの集中ショット！\n上海人形");
    playerHP = CalcDamage(playerHP, enemyMA, playerMD);
}

function sp1Arice() {
    alert("アリスはスペルカードを使用した！\n紅符「和蘭人形」");
    playerHP = CalcDamage(playerHP, enemyPA*2, playerPD);
    enemySP1Count--;
}

function sp2Arice() {
    alert("アリスはスペルカードを使用した！\n偵符「シーカードールズ」");
    playerHP = CalcDamage(playerHP, enemyMA*2, playerMD);
    enemySP2Count--;
}

function lastArice() {
    alert("アリスはラストワードを発動した！\n「グランギニョル座の怪人」");
    playerHP = CalcDamage(playerHP, (enemyPA+enemyMA)*2, Math.min(playerPD,playerMD));
    enemyLWCount--;
}


/* enemy4(さとり) */
function difSatori() {
    alert("さとりの拡散ショット！\nコールドリード");
    playerHP = CalcDamage(playerHP, enemyPA, playerPD);
}

function conSatori() {
    alert("さとりの集中ショット！\nマインドハック");
    playerHP = CalcDamage(playerHP, enemyMA, playerMD);
}

function sp1Satori() {
    alert("さとりはスペルカードを使用した！\n想起「テリブルスーヴニール」");
    playerHP = CalcDamage(playerHP, enemyPA*2, playerPD);
    enemySP1Count--;
}

function sp2Satori() {
    alert("さとりはスペルカードを使用した！\n脳符「ブレインフィンガープリント」");
    playerHP = CalcDamage(playerHP, enemyMA*2, playerMD);
    enemySP2Count--;
}

function lastSatori() {
    alert("さとりはラストワードを発動した！\n「赤神鷹の連撃」");
    playerHP = CalcDamage(playerHP, (enemyPA+enemyMA)*2, Math.min(playerPD,playerMD));
    enemyLWCount--;
}


/* enemy5(早苗) */
function difSanae() {
    alert("早苗の拡散ショット！\nコバルトスプレッド");
    playerHP = CalcDamage(playerHP, enemyPA, playerPD);
}

function conSanae() {
    alert("早苗の集中ショット！\nスカイサーペント");
    playerHP = CalcDamage(playerHP, enemyMA, playerMD);
}

function sp1Sanae() {
    alert("早苗はスペルカードを使用した！\n秘術「グレイソーマタージ」");
    playerHP = CalcDamage(playerHP, enemyPA*2, playerPD);
    enemySP1Count--;
}

function sp2Sanae() {
    alert("早苗はスペルカードを使用した！\n開海「海が割れる日」");
    playerHP = CalcDamage(playerHP, enemyMA*2, playerMD);
    enemySP2Count--;
}

function lastSanae() {
    alert("早苗はラストワードを発動した！\n「奇跡の価値」");
    playerHP = CalcDamage(playerHP, (enemyPA+enemyMA)*2, Math.min(playerPD,playerMD));
    enemyLWCount--;
}


/* enemy6(輝夜) */
function difKaguya() {
    alert("輝夜の拡散ショット！\nジュエルブランチ");
    playerHP = CalcDamage(playerHP, enemyPA, playerPD);
}

function conKaguya() {
    alert("輝夜の集中ショット！\n珠玉プリズム光");
    playerHP = CalcDamage(playerHP, enemyMA, playerMD);
}

function sp1Kaguya() {
    alert("輝夜はスペルカードを使用した！\n神宝「ブディストダイアモンド」");
    playerHP = CalcDamage(playerHP, enemyPA*2, playerPD);
    enemySP1Count--;
}

function sp2Kaguya() {
    alert("輝夜はスペルカードを使用した！\n神宝「サラマンダーシールド」");
    playerHP = CalcDamage(playerHP, enemyMA*2, playerMD);
    enemySP2Count--;
}

function lastKaguya() {
    alert("輝夜はラストワードを発動した！\n「蓬莱の樹海」");
    playerHP = CalcDamage(playerHP, (enemyPA+enemyMA)*2, Math.min(playerPD,playerMD));
    enemyLWCount--;
}

