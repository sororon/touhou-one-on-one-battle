let DEBUG_battle = 1;

/* 次のターンへ。UIの更新も行う。 */
function NextTurn() {
    turnCount++;
    totalTurnCount++;

    /* 結界関連 */
    UsePlayerBarriar = 0;
    if (playerBACount == 0) { /* 結界が残り0の時に選択不可にする */
        ALLOWplayerbarriar = 0;
    }

    /* スキル関連 */
    skillEffect();
    judgeSkillReuse();

    showImage();
    showLog();

 if (DEBUG_battle == 1) {
    console.log("合計ターン数：" + totalTurnCount);
    console.log("ターン" + turnCount);
    /* 敵ステータス */
    console.log("＜" + enemyNAME + "＞\nＨＰ：", enemyHP, "\n陽攻：", enemyPA, "\n陽防：", enemyPD, "\n陰攻：", enemyMA, "\n陰防：", enemyMD, "\n速力：", enemySP);
    
    /* 味方ステータス */
    console.log("＜" + playerNAME + "＞\nＨＰ：", playerHP, "\n陽攻：", playerPA, "\n陽防：", playerPD, "\n陰攻：", playerMA, "\n陰防：", playerMD, "\n速力：", playerSP);
 }
}

/* 結界使用の有無 */
function useBarriar() {
    if (ALLOWnextstage == 1 || ALLOWplayerbarriar == 0) { 
        return;
    }
    if (UsePlayerBarriar == 0) {
        alert("結界使用状態（再度クリックで解除できます。）");
        UsePlayerBarriar++;
        playerBACount--;
        showLog();
    } else { 
        if (playerBACount >= MaxBarriar) {
            alert("これ以上結界は増加できません。\n結界の最大値を上回るので解除できません。");
            return;
        }
        alert("結界を解除しました。");
        UsePlayerBarriar = 0;
        playerBACount++;
        showLog();
    }
}

/* 敵キャラの行動決定のメソッド */
function enemyAction() {
    switch (enemyNum) {
        case 1: /* enemy1(ルーミア) */
            DecideRumia();
            break;
        case 2: /* enemy2(雛) */
            DecideHina();
            break;
        case 3: /* enemy3(アリス) */
            DecideArice();
            break;
        case 4: /* enemy4(さとり) */
            DecideSatori();
            break;
        case 5: /* enemy5(早苗) */
            DecideSanae();
            break;
        case 6: /* enemy6(輝夜) */
            DecideKaguya();
            break;
        default:
            break;
    }
}


/* スキルの一覧（ボタンが押されて動作） */
function sk1Use() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }
    if (ALLOWplayerSKL1 == 0) {
        alert("使用できません。\n使用可能まで残り" + playerReuseSKL1 + "ターン");
        return;
    }

    alert("スキル１発動！");
    if (playerNum == 1) { /* player1(霊夢) */
        sk1Reimu();
        showLog();
    }
}

function sk2Use() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }
    if (ALLOWplayerSKL2 == 0) {
        alert("使用できません。\n使用可能まで残り" + playerReuseSKL2 + "ターン");
        return;
    }
    alert("スキル2発動！");
    if (playerNum == 1) { /* player1(霊夢) */
        sk2Reimu();
        showLog();
    }
}

function sk3Use() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }
    if (ALLOWplayerSKL3 == 0) {
        alert("使用できません。\n使用可能まで残り" + playerReuseSKL3 + "ターン");
        return;
    }
    alert("スキル3発動！");
    if (playerNum == 1) { /* player1(霊夢) */
        sk3Reimu();
        showLog();
    }
}


/* 攻撃手段のメソッド一覧（ボタンが押されて動作） */
function difShot() { 
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }
    if (playerHP <= 0) { /* 時機キャラが倒されている時 */
        alert("攻撃する余力がない！\nページを読み込むと最初からやり直すことができます。");
        return;
    }

    alert("拡散ショット");

    /* 先攻後攻の決定 (if-else 内の記述順序が逆なだけ) */
    if (enemySP > playerSP) { /* 先攻：敵　後攻：自分 */
        /* 先攻 */
        enemyAction();
        if (playerHP <= 0) { /* 敵の攻撃で倒された場合 */
            showImage();
            showLog();
            return;
        }
        /* 後攻 */
        if (playerNum == 1) { /* player1(霊夢) */
            difReimu();
        }
    }
    else { /* 先攻：自分　後攻：敵 */
        /* 先攻 */
        if (playerNum == 1) { /* player1(霊夢) */
            difReimu();
        }
        /* 後攻 */
        enemyAction();
    }

    /* 敵を倒した */
    if (enemyHP <= 0) {
        ALLOWnextstage = 1; // 次のステージに進む許可
    }

    /* 自分が倒された(改善予定) */
    if (playerHP <= 0) {
        alert("霊夢は倒れた！");
    }

    /* ターン終了→次のターンへ */
    NextTurn();
}

function conShot() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }
    if (playerHP <= 0) { /* 時機キャラが倒されている時 */
        alert("攻撃する余力がない！\nページを読み込むと最初からやり直すことができます。");
        return;
    }

    alert("集中ショット");

    if (enemySP > playerSP) { 
        enemyAction();
        if (playerHP <= 0) {
            showImage();
            showLog();
            return;
        }
        if (playerNum == 1) { /* player1(霊夢) */
            conReimu();
        }
    } else { 
        if (playerNum == 1) { /* player1(霊夢) */
            conReimu();
        }
        enemyAction();
    }

    if (enemyHP <= 0) {
        ALLOWnextstage = 1; // 次のステージに進む許可
    }

    NextTurn();
}

function speCard1() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }

    if (playerHP <= 0) { /* 時機キャラが倒されている時 */
        alert("攻撃する余力がない！\nページを読み込むと最初からやり直すことができます。");
        return;
    }

    if (playerSP1Count > 0) { /* 使用制限付き */
        alert("スペルカード１");

        if (enemySP > playerSP) { 
            enemyAction();
            if (playerHP <= 0) {
                showImage();
                showLog();
                return;
            }
            if (playerNum == 1) { /* player1(霊夢) */
                sp1Reimu();
            }
        } else { 
            if (playerNum == 1) { /* player1(霊夢) */
                sp1Reimu();
            }
            enemyAction();
        }
    
        if (enemyHP <= 0) {
            ALLOWnextstage = 1; // 次のステージに進む許可
        }
    
        NextTurn();
    } else {
        alert("これ以上使用できません");
    }
}

function speCard2() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }

    if (playerHP <= 0) { /* 時機キャラが倒されている時 */
        alert("攻撃する余力がない！\nページを読み込むと最初からやり直すことができます。");
        return;
    }

    if (playerSP2Count > 0) {
        alert("スペルカード２");

        if (enemySP > playerSP) { 
            enemyAction();
            if (playerHP <= 0) {
                showImage();
                showLog();
                return;
            }
            if (playerNum == 1) { /* player1(霊夢) */
                sp2Reimu();
            }
        } else { 
            if (playerNum == 1) { /* player1(霊夢) */
                sp2Reimu();
            }
            enemyAction();
        }
    
        if (enemyHP <= 0) {
            ALLOWnextstage = 1; // 次のステージに進む許可
        }
    
        NextTurn();
    } else {
        alert("これ以上使用できません");
    }
}

function lastWord() {
    if (ALLOWnextstage == 1) { /* 次のステージに進む時は使用不可 */
        return;
    }

    if (playerHP <= 0) { /* 時機キャラが倒されている時 */
        alert("攻撃する余力がない！\nページを読み込むと最初からやり直すことができます。");
        return;
    }

    if (playerLWCount > 0) {
        alert("ラストワード");

        if (enemySP > playerSP) { 
            enemyAction();
            if (playerHP <= 0) {
                showImage();
                showLog();
                return;
            }
            if (playerNum == 1) { /* player1(霊夢) */
                lastReimu();
            }
        } else { 
            if (playerNum == 1) { /* player1(霊夢) */
                lastReimu();
            }
            enemyAction();
        }
    
        if (enemyHP <= 0) {
            ALLOWnextstage = 1; // 次のステージに進む許可
        }
    
        NextTurn();
    } else {
        alert("これ以上使用できません");
    }
}
