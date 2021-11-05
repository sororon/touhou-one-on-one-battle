let DEBUG_damage = 0;

function CalcDamage(hp, at, df) {
 if (DEBUG_damage == 1) {
    console.log("CalcDamage処理前");
    console.log("enemyHp:", hp);
    console.log("playerAttack:", at);
    console.log("enemyDeffence:", df);
 }

    if (hp == playerHP) { /* 時機キャラが攻撃対象の時 */
        if (UsePlayerBarriar == 1) { /* 結界使用時はノーダメージ */
            alert("霊夢は結界によって守られた！"); // 現在は霊夢のみ
            return hp;
        }
    }

    if (at-df < 0) { /* ダメージ逆転防止 */
        hp -= 1;
        alert("1のダメージ！");
    } 
    else { /* ダメージ計算 */
        hp -= (at - df);
        alert((at - df) + "のダメージ！");
    }

    /* オーバーキル防止 */
    if (hp < 0) {
        hp = 0;
    }

 if (DEBUG_damage == 1) {
    console.log("CalcDamage処理後");
    console.log("enemyHp:", hp);
    console.log("playerAttack:", at);
    console.log("enemyDeffence:", df);
 }
    return hp;
}
