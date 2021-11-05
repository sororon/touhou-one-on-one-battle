
/* 現在の戦況などのログを表示 */

function barriarCount() {
    var ba = playerBACount;
    var non_ba = MaxBarriar - playerBACount;
    var result = "[　";
    for (let i = 0; i < ba; i++) {
        result += "■";
    }
    for (let j = 0; j < non_ba; j++) {
        result += "□";
    }
    result += "　]　";
    return result;
}

function skillAvaiable(allow, count) {
    var result = "";
    if (allow == 1) {
        result += "〇";
    } else {
        result += "あと" + count + "ターン";
    }
    result += "　";
    return result;
}

function showLog() {
    /* 時機キャラのスキル、攻撃指示用ボタン */
    let sk1 = document.getElementById('skill1');
    let sk2 = document.getElementById('skill2');
    let sk3 = document.getElementById('skill3');
    let dif = document.getElementById('diffusion');
    let con = document.getElementById('concentrate');
    let sp1 = document.getElementById('spell1');
    let sp2 = document.getElementById('spell2');
    let las = document.getElementById('lastword');

    /* UI一覧 */
    let stage = document.getElementById('now-stage');
    let data = document.getElementById('main-data');
    let e_total = document.getElementById("e-total");
    let m_log = document.getElementById('main-log');
    let s_log = document.getElementById('sub-log');
    let p_data = document.getElementById('sub-data');
    let p_total = document.getElementById('p-total');
    let p_bar = document.getElementById('rem-bar');
    let p_skl1 = document.getElementById('skl1');
    let p_skl2 = document.getElementById('skl2');
    let p_skl3 = document.getElementById('skl3');
    let p_card = document.getElementById('rem-card');

    p_bar.textContent = String("結界：残り" + playerBACount + "個" + barriarCount());
    p_skl1.textContent = String("スキル１：" + skillAvaiable(ALLOWplayerSKL1, playerReuseSKL1));
    p_skl2.textContent = String("スキル２：" + skillAvaiable(ALLOWplayerSKL2, playerReuseSKL2));
    p_skl3.textContent = String("スキル３：" + skillAvaiable(ALLOWplayerSKL3, playerReuseSKL3));
    p_card.textContent = String("スペカ１：残り" + playerSP1Count + "回　スペカ２：残り" + playerSP2Count + "回　ラスワ：残り" + playerLWCount + "回");

    if (ALLOWnextstage == 0) {
        s_log.textContent = String("霊夢はどうする？"); // キャラ選択可能時変更予定
    } else {
        s_log.textContent = String("次のステージに進もう！");
    }

    if (playerHP <= 0) {
        s_log.textContent = String("負けてしまった...");
    }

    /* player */
    if (playerNum == 1) { /* player1(霊夢) */
        p_data.textContent = String("【博麗霊夢　HP：" + playerHP + "/" + reimu.hp);
        p_total.textContent = String(reimu.calcStatus() + "】");

        /* 味方のスキル、スペルカード、攻撃手段（霊夢に設定）*/
        sk1.textContent = String("心願成就の祈祷");
        sk2.textContent = String("霊夢のお祓い棒");
        sk3.textContent = String("博麗の御守り");
        dif.textContent = String("ホーミングアミュレット");
        con.textContent = String("パスウェイジョンニードル");
        sp1.textContent = String("霊符「夢想封印」");
        sp2.textContent = String("夢符「封魔陣」");
        las.textContent = String("「夢想天生」");

        // さとり用
        /* dif.textContent = String("コールドリード");
        con.textContent = String("マインドハック");
        sp1.textContent = String("想起「テリブルスーヴニール」");
        sp2.textContent = String("脳符「ブレインフィンガープリント」");
        las.textContent = String("「赤神鷹の連撃」"); */
    }


    /* enemy */
    if (stageCount == 1) { /* stage1(ルーミア) */
        stage.textContent = String(stageCount);
        data.textContent = String("【ルーミア　HP：" + enemyHP + "/" + rumia.hp);
        e_total.textContent = String(rumia.calcStatus() + "】");

        /* ルーミアの状態 */
        if (turnCount == 1) {
            m_log.textContent = String("ルーミアが現れた！");
        } else { /* 残りHPから分岐 */
            if (enemyHP > percentRate(rumia.hp, 30)) {
                m_log.textContent = String("ルーミアはやる気に満ち溢れている。");
            }
            else if (enemyHP <= percentRate(rumia.hp, 30) && enemyHP > 0) {
                m_log.textContent = String("ルーミアは弱っているように見える。");
            }
            else {
                m_log.textContent = String("ルーミアは倒れた！");
            }
        }
        if (playerHP <= 0) { /* 時機キャラを倒したとき */
            m_log.textContent = String("ルーミアは無邪気に喜んでいる！");
        }
    }
    
    if (stageCount == 2) { /* stage2(雛) */
        stage.textContent = String(stageCount);
        data.textContent = String("【鍵山雛　HP：" + enemyHP + "/" + hina.hp);
        e_total.textContent = String(hina.calcStatus() + "】");

        if (turnCount == 1) {
            m_log.textContent = String("雛が現れた！");
        } else { 
            if (enemyHP > percentRate(hina.hp, 30)) {
                m_log.textContent = String("雛はやる気に満ち溢れている。");
            }
            else if (enemyHP <= percentRate(hina.hp, 30) && enemyHP > 0) {
                m_log.textContent = String("雛は弱っているように見える。");
            }
            else {
                m_log.textContent = String("雛は倒れた！");
            }
        }
        if (playerHP <= 0) { 
            m_log.textContent = String("雛は申し訳なさそうに喜んでいる！");
        }
    }

    if (stageCount == 3) { /* stage3(アリス) */
        stage.textContent = String(stageCount);
        data.textContent = String("【アリス　HP：" + enemyHP + "/" + arice.hp);
        e_total.textContent = String(arice.calcStatus() + "】");

        if (turnCount == 1) {
            m_log.textContent = String("アリスが現れた！");
        } else { 
            if (enemyHP > percentRate(arice.hp, 30)) {
                m_log.textContent = String("アリスはやる気に満ち溢れている。");
            }
            else if (enemyHP <= percentRate(arice.hp, 30) && enemyHP > 0) {
                m_log.textContent = String("アリスは弱っているように見える。");
            }
            else {
                m_log.textContent = String("アリスは倒れた！");
            }
        }
        if (playerHP <= 0) { 
            m_log.textContent = String("アリスは微笑んで喜んでいる！");
        }
    }

    if (stageCount == 4) { /* stage4(さとり) */
        stage.textContent = String(stageCount);
        data.textContent = String("【古明地さとり　HP：" + enemyHP + "/" + satori.hp);
        e_total.textContent = String(satori.calcStatus() + "】");

        if (turnCount == 1) {
            m_log.textContent = String("さとりが現れた！");
        } else { 
            if (enemyHP > percentRate(satori.hp, 30)) {
                m_log.textContent = String("さとりはやる気に満ち溢れている。");
            }
            else if (enemyHP <= percentRate(satori.hp, 30) && enemyHP > 0) {
                m_log.textContent = String("さとりは弱っているように見える。");
            }
            else {
                m_log.textContent = String("さとりは倒れた！");
            }
        }
        if (playerHP <= 0) { 
            m_log.textContent = String("さとりは静かに喜んでいる！");
        }
    }

    if (stageCount == 5) { /* stage5(早苗) */
        stage.textContent = String(stageCount);
        data.textContent = String("【東風谷早苗　HP：" + enemyHP + "/" + sanae.hp);
        e_total.textContent = String(sanae.calcStatus() + "】");

        if (turnCount == 1) {
            m_log.textContent = String("早苗が現れた！");
        } else { 
            if (enemyHP > percentRate(sanae.hp, 30)) {
                m_log.textContent = String("早苗はやる気に満ち溢れている。");
            }
            else if (enemyHP <= percentRate(sanae.hp, 30) && enemyHP > 0) {
                m_log.textContent = String("早苗は弱っているように見える。");
            }
            else {
                m_log.textContent = String("早苗は倒れた！");
            }
        }
        if (playerHP <= 0) { 
            m_log.textContent = String("早苗はものすごく喜んでいる！");
        }
    }

    if (stageCount == 6) { /* stage6(輝夜) */
        stage.textContent = String(stageCount);
        data.textContent = String("【蓬莱山輝夜　HP：" + enemyHP + "/" + kaguya.hp);
        e_total.textContent = String(kaguya.calcStatus() + "】");

        if (turnCount == 1) {
            m_log.textContent = String("輝夜が現れた！");
        } else { 
            if (enemyHP > percentRate(kaguya.hp, 30)) {
                m_log.textContent = String("輝夜はやる気に満ち溢れている。");
            }
            else if (enemyHP <= percentRate(kaguya.hp, 30) && enemyHP > 0) {
                m_log.textContent = String("輝夜は弱っているように見える。");
            }
            else {
                m_log.textContent = String("輝夜は倒れた！");
                s_log.textContent = String("全てのステージをクリアしました！おめでとうございます！（ページを再読み込みするか次のステージに進むを押すと、初めからプレイできます。）");
                alert("全ステージ攻略にかかったターン数：" + totalTurnCount);
            }
        }
        if (playerHP <= 0) { 
            m_log.textContent = String("輝夜は再挑戦を望んでいる...！？");
        }
    }
}
