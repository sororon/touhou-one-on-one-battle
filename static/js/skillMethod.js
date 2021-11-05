
let DEBUG_skill = 1;
let DEBUG_skill_check = 0;

/* スキル効果持続の定義 */
function skillEffect() {
    if (ALLOWplayerSKL1 == 0 && playerEffectSKL1 != 2) { /* スキル１発動中、一旦制御を霊夢の持続ターン２で判別 */ 
        console.log(playerEffectSKL1);
        if (playerEffectSKL1 == 0) { /* スキル持続効果が切れた時 */
            if (playerNum == 1) { /* player1(霊夢) */
                 if (DEBUG_skill == 1) {
                    console.log("対象：", playerNAME);
                    console.log("陽攻：", playerPA);
                    console.log("陰攻：", playerMA);
                 }
                alert("スキル１の効果が切れた。");
                playerPA = reimu.ph_at;
                playerMA = reimu.mg_at;
                 if (DEBUG_skill == 1) {
                    console.log("効果切れ");
                    console.log("陽攻：", playerPA);
                    console.log("陰攻：", playerMA);
                 }
                playerEffectSKL1 = 2;
            }
        } else {
            playerEffectSKL1--;
        }
        console.log(playerEffectSKL1);
    }
    if (ALLOWplayerSKL2 == 0 && playerEffectSKL2 != 2) { /* スキル２発動中、一旦制御を霊夢の持続ターン２で判別 */
        if (playerEffectSKL2 == 0) { /* スキル持続効果が切れた時 */
            if (playerNum == 1) { /* player1(霊夢) */
                 if (DEBUG_skill == 1) {
                    console.log("対象：", playerNAME);
                    console.log("陽防：", playerPD);
                    console.log("陰防：", playerMD);
                 }
                alert("スキル２の効果が切れた。");
                playerPD = reimu.ph_df;
                playerMD = reimu.mg_df;
                 if (DEBUG_skill == 1) {
                    console.log("効果切れ");
                    console.log("陽防：", playerPD);
                    console.log("陰防：", playerMD);
                 }
                playerEffectSKL2 = 2;
            }
        } else {
            playerEffectSKL2--;
        }
    }
    if (ALLOWplayerSKL3 == 0) { /* スキル３発動中 */
        if (playerEffectSKL3 == 0) { /* スキル持続効果が切れた時 */
            if (playerNum == 1) { /* player1(霊夢) */
                /* 回復のみなので関係なし */
                return;
            }
        } else {
            if (playerNum == 1) { /* player1(霊夢) */
                /* 回復のみなので関係なし */
                return;
            }
            playerEffectSKL3--;
        }
    }
}


/* スキル再使用の定義（現状霊夢のみ適用可能） */
function judgeSkillReuse() {
    if (ALLOWplayerSKL1 == 0) { /* スキル１ */
        playerReuseSKL1--;
        if (playerReuseSKL1 == 0) { /* 再使用可能になったら */
            ALLOWplayerSKL1 = 1;
            playerReuseSKL1 = SetSkillReuse(reimu.name, 1);
        }
    }

    if (ALLOWplayerSKL2 == 0) { /* スキル２ */
        playerReuseSKL2--;
        if (playerReuseSKL2 == 0) { /* 再使用可能になったら */
            ALLOWplayerSKL2 = 1;
            playerReuseSKL2 = SetSkillReuse(reimu.name, 2);
        }
    }

    if (ALLOWplayerSKL3 == 0) { /* スキル３ */
        playerReuseSKL3--;
        if (playerReuseSKL3 == 0) { /* 再使用可能になったら */
            ALLOWplayerSKL3 = 1;
            playerReuseSKL3 = SetSkillReuse(reimu.name, 3);
        }
    }

 if (DEBUG_skill_check == 1) {
    console.log("Allow1:" + ALLOWplayerSKL1);
    console.log("Reuse1:" + playerReuseSKL1);
    console.log("Allow2:" + ALLOWplayerSKL2);
    console.log("Reuse2:" + playerReuseSKL2);
    console.log("Allow3:" + ALLOWplayerSKL3);
    console.log("Reuse3:" + playerReuseSKL3);
 }
}


/* キャラクターのスキルの定義 */
/* 現状、自己バフのみ考慮。 */

function sk1Reimu() {
 if (DEBUG_skill == 1) {
    console.log("対象：", playerNAME);
    console.log("陽攻：", playerPA);
    console.log("陰攻：", playerMA);
 }
    alert("霊夢はスキルを発動した！\n心願成就の祈祷");
    playerPA = Math.floor(playerPA * 1.6);
    playerMA = Math.floor(playerMA * 1.6);
 if (DEBUG_skill == 1) {
    console.log("効果：攻撃バフ（２ターン）");
    console.log("陽攻：", playerPA);
    console.log("陰攻：", playerMA);
 }
    alert("霊夢の陽攻と陰攻が上昇した！");
    ALLOWplayerSKL1 = 0; // スキル使用不可に変更
    playerEffectSKL1--;
}

function sk2Reimu() {
 if (DEBUG_skill == 1) {
    console.log("対象：", playerNAME);
    console.log("陽防：", playerPD);
    console.log("陰防：", playerMD);
 }
    alert("霊夢はスキルを発動した！\n霊夢のお祓い棒");
    playerPD = Math.floor(playerPD * 1.6);
    playerMD = Math.floor(playerMD * 1.6);
 if (DEBUG_skill == 1) {
    console.log("効果：防御バフ（２ターン）");
    console.log("陽防：", playerPD);
    console.log("陰防：", playerMD);
 }
    alert("霊夢の陽防と陰防が上昇した！");
    ALLOWplayerSKL2 = 0; // スキル使用不可に変更
    playerEffectSKL2--;
}

function sk3Reimu() {
    if (playerBACount == 0) {
        ALLOWplayerbarriar = 1;
    }
 if (DEBUG_skill == 1) {
    console.log("対象：", playerNAME);
    console.log("ＨＰ：", playerHP);
    console.log("結界：", playerBACount);
 }
    alert("霊夢はスキルを発動した！\n博麗の御守り");
    playerHP += Math.floor(percentRate(reimu.hp, 10));
    if (playerHP >= reimu.hp) {
        playerHP = reimu.hp;
    }
    alert("霊夢のHPが回復した！");

    if (playerBACount >= MaxBarriar) {
        alert("これ以上結界は増加できません。");
    } else {
        alert("霊夢の結界が増加した！");
        playerBACount++;
    }
 if (DEBUG_skill == 1) {
    console.log("効果：ＨＰ回復＆結界増加");
    console.log("ＨＰ：", playerHP);
    console.log("結界：", playerBACount);
 }
    ALLOWplayerSKL3 = 0; // スキル使用不可に変更
}
