
function RandomInteger() {
    var min = 1 ;
    var max = 10 ;

    var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return a;
}

/* enemy1(ルーミア) */
function DecideRumia() {
    if (enemyHP <= 0) { /* 既に倒されている時 */
        return;
    }

    var action = RandomInteger();

    /* スペルカード使用可能の時（3ターン） */
    if (turnCount % 3 == 0) {
        /* ラストワード使用可能の時（6ターン）*/
        if (turnCount % 6 == 0) {
            if (enemyLWCount > 0) {
                lastRumia();
                return
            }
        }
        if (action > 5) { /* スペルカード１ */
            if (enemySP1Count > 0) {
                sp1Rumia();
                return
            }
        } else { /* スペルカード２ */
            if (enemySP2Count > 0) {
                sp2Rumia();
                return
            }
        }
    } 

    /* スペカ使用不可時 */
    if (action > 5) { /* 拡散ショット */
        difRumia();
    } else { /* 集中ショット */
        conRumia();
    }
}

/* enemy2(雛) */
function DecideHina() {
    if (enemyHP <= 0) { 
        return;
    }

    var action = RandomInteger();

    /* スペルカード使用可能の時（3ターン） */
    if (turnCount % 3 == 0) {
        /* ラストワード使用可能の時（6ターン）*/
        if (turnCount % 6 == 0) {
            if (enemyLWCount > 0) {
                lastHina();
                return
            }
        }
        if (action > 5) { /* スペルカード１ */
            if (enemySP1Count > 0) {
                sp1Hina();
                return
            }
        } else { /* スペルカード２ */
            if (enemySP2Count > 0) {
                sp2Hina();
                return
            }
        }
    } 

    /* スペカ使用不可時 */
    if (action > 5) { /* 拡散ショット */
        difHina();
    } else { /* 集中ショット */
        conHina();
    }
}

/* enemy3(アリス) */
function DecideArice() {
    if (enemyHP <= 0) { 
        return;
    }

    var action = RandomInteger();

    /* スペルカード使用可能の時（3ターン） */
    if (turnCount % 3 == 0) {
        /* ラストワード使用可能の時（6ターン）*/
        if (turnCount % 6 == 0) {
            if (enemyLWCount > 0) {
                lastArice();
                return
            }
        }
        if (action > 5) { /* スペルカード１ */
            if (enemySP1Count > 0) {
                sp1Arice();
                return
            }
        } else { /* スペルカード２ */
            if (enemySP2Count > 0) {
                sp2Arice();
                return
            }
        }
    } 

    /* スペカ使用不可時 */
    if (action > 5) { /* 拡散ショット */
        difArice();
    } else { /* 集中ショット */
        conArice();
    }
}

/* enemy4(さとり) */
function DecideSatori() {
    if (enemyHP <= 0) { 
        return;
    }

    var action = RandomInteger();

    /* スペルカード使用可能の時（2ターン） */
    if (turnCount % 2 == 0) {
        /* ラストワード使用可能の時（4ターン）*/
        if (turnCount % 4 == 0) {
            if (enemyLWCount > 0) {
                lastSatori();
                return
            }
        }
        if (action > 5) { /* スペルカード１ */
            if (enemySP1Count > 0) {
                sp1Satori();
                return
            }
        } else { /* スペルカード２ */
            if (enemySP2Count > 0) {
                sp2Satori();
                return
            }
        }
    } 

    /* スペカ使用不可時 */
    if (action > 5) { /* 拡散ショット */
        difSatori();
    } else { /* 集中ショット */
        conSatori();
    }
}

/* enemy5(早苗) */
function DecideSanae() {
    if (enemyHP <= 0) { 
        return;
    }

    var action = RandomInteger();

    /* スペルカード使用可能の時（2ターン） */
    if (turnCount % 2 == 0) {
        /* ラストワード使用可能の時（4ターン）*/
        if (turnCount % 4 == 0) {
            if (enemyLWCount > 0) {
                lastSanae();
                return
            }
        }
        if (action > 5) { /* スペルカード１ */
            if (enemySP1Count > 0) {
                sp1Sanae();
                return
            }
        } else { /* スペルカード２ */
            if (enemySP2Count > 0) {
                sp2Sanae();
                return
            }
        }
    } 

    /* スペカ使用不可時 */
    if (action > 5) { /* 拡散ショット */
        difSanae();
    } else { /* 集中ショット */
        conSanae();
    }
}

/* enemy6(輝夜) */
function DecideKaguya() {
    if (enemyHP <= 0) { 
        return;
    }

    var action = RandomInteger();

    /* スペルカード使用可能の時（2ターン） */
    if (turnCount % 2 == 0) {
        /* ラストワード使用可能の時（4ターン）*/
        if (turnCount % 4 == 0) {
            if (enemyLWCount > 0) {
                lastKaguya();
                return
            }
        }
        if (action > 5) { /* スペルカード１ */
            if (enemySP1Count > 0) {
                sp1Kaguya();
                return
            }
        } else { /* スペルカード２ */
            if (enemySP2Count > 0) {
                sp2Kaguya();
                return
            }
        }
    } 

    /* スペカ使用不可時 */
    if (action > 5) { /* 拡散ショット */
        difKaguya();
    } else { /* 集中ショット */
        conKaguya();
    }
}
