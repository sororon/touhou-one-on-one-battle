
function SetSkillReuse(name, skill_num) {
    if (name == reimu.name) { /* player1(霊夢) */
        if (skill_num == 1) { /* スキル１ */
            return 4;
        }
        if (skill_num == 2) { /* スキル２ */
            return 4;
        }
        if (skill_num == 3) { /* スキル３ */
            return 5;
        }
    }
}

/* 時機キャラの設定(現在は霊夢のみ) */
function SetStatusReimu() { /* player1(霊夢) */
    playerNAME = reimu.name;
    playerHP = reimu.hp;
    playerPA = reimu.ph_at;
    playerPD = reimu.ph_df;
    playerMA = reimu.mg_at;
    playerMD = reimu.mg_df;
    playerSP = reimu.sp;

    playerSP1Count = 3;
    playerSP2Count = 3;
    playerLWCount = 1;

    playerEffectSKL1 = 2;
    playerEffectSKL2 = 2;
    playerEffectSKL3 = 0;

    playerReuseSKL1 = SetSkillReuse(reimu.name, 1);
    playerReuseSKL2 = SetSkillReuse(reimu.name, 2);
    playerReuseSKL3 = SetSkillReuse(reimu.name, 3);

    playerBACount = 5;
    MaxBarriar = 5;
}


/* 敵キャラの設定(ステージごとに分岐) */
function SetStatusRumia() { /* stage1(ルーミア) */
    enemyNAME = rumia.name;
    enemyHP = rumia.hp;
    enemyPA = rumia.ph_at;
    enemyPD = rumia.ph_df;
    enemyMA = rumia.mg_at;
    enemyMD = rumia.mg_df;
    enemySP = rumia.sp;

    enemySP1Count = 1;
    enemySP2Count = 1;
    enemyLWCount = 1;
}

function SetStatusHina() { /* stage2(雛) */
    enemyNAME = hina.name;
    enemyHP = hina.hp;
    enemyPA = hina.ph_at;
    enemyPD = hina.ph_df;
    enemyMA = hina.mg_at;
    enemyMD = hina.mg_df;
    enemySP = hina.sp;

    enemySP1Count = 1;
    enemySP2Count = 1;
    enemyLWCount = 1;
}

function SetStatusArice() { /* stage3(アリス) */
    enemyNAME = arice.name;
    enemyHP = arice.hp;
    enemyPA = arice.ph_at;
    enemyPD = arice.ph_df;
    enemyMA = arice.mg_at;
    enemyMD = arice.mg_df;
    enemySP = arice.sp;

    enemySP1Count = 2;
    enemySP2Count = 2;
    enemyLWCount = 1;
}

function SetStatusSatori() { /* stage4(さとり) */
    enemyNAME = satori.name;
    enemyHP = satori.hp;
    enemyPA = satori.ph_at;
    enemyPD = satori.ph_df;
    enemyMA = satori.mg_at;
    enemyMD = satori.mg_df;
    enemySP = satori.sp;

    enemySP1Count = 2;
    enemySP2Count = 2;
    enemyLWCount = 1;
}

function SetStatusSanae() { /* stage5(早苗) */
    enemyNAME = sanae.name;
    enemyHP = sanae.hp;
    enemyPA = sanae.ph_at;
    enemyPD = sanae.ph_df;
    enemyMA = sanae.mg_at;
    enemyMD = sanae.mg_df;
    enemySP = sanae.sp;

    enemySP1Count = 2;
    enemySP2Count = 2;
    enemyLWCount = 1;
}

function SetStatusKagya() { /* stage6(輝夜) */
    enemyNAME = kaguya.name;
    enemyHP = kaguya.hp;
    enemyPA = kaguya.ph_at;
    enemyPD = kaguya.ph_df;
    enemyMA = kaguya.mg_at;
    enemyMD = kaguya.mg_df;
    enemySP = kaguya.sp;

    enemySP1Count = 3;
    enemySP2Count = 3;
    enemyLWCount = 1;
}
