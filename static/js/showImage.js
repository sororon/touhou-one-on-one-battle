


/* 最大HPのrate%を計算 */
function percentRate(max_hp, rate) {
    return rate / 100 * max_hp;
}

/* 敵キャラクターのイメージ画像を表示 */

function showImage() {
    let image = document.getElementById('enemy-image'); // 画像を表示する場所の発見

    if (stageCount == 1) { /* stage1(ルーミア) */
        if (enemyHP > percentRate(rumia.hp, 30)) {
            image.innerHTML = '<img src="static/img/rumia/rumia-100.png" >';
        }
        else if (enemyHP <= percentRate(rumia.hp, 30) && enemyHP > percentRate(rumia.hp, 5)) {
            image.innerHTML = '<img src="static/img/rumia/rumia-30.png" >';
        }
        else {
            image.innerHTML = '<img src="static/img/rumia/rumia-0.png" >';
        }
    }
    
    if (stageCount == 2) { /* stage2(雛) */
        if (enemyHP > percentRate(hina.hp, 30)) {
            image.innerHTML = '<img src="static/img/hina/hina-100.png" >';
        }
        else if (enemyHP <= percentRate(hina.hp, 30) && enemyHP > percentRate(hina.hp, 5)) {
            image.innerHTML = '<img src="static/img/hina/hina-30.png" >';
        }
        else {
            image.innerHTML = '<img src="static/img/hina/hina-0.png" >';
        }
    }

    if (stageCount == 3) { /* stage3(アリス) */
        /* .img_dif1を呼び出す */

        if (enemyHP > percentRate(arice.hp, 30)) {
            image.innerHTML = '<img src="static/img/arice/arice-100.png" >';
        }
        else if (enemyHP <= percentRate(arice.hp, 30) && enemyHP > percentRate(arice.hp, 5)) {
            image.innerHTML = '<img src="static/img/arice/arice-30.png" >';
        }
        else {
            image.innerHTML = '<img src="static/img/arice/arice-0.png" >';
        }
        const img = document.querySelector("#enemy-image > img");
        img.className = "img_dif1";
        console.log(img);
    }

    if (stageCount == 4) { /* stage4(さとり) */
        if (enemyHP > percentRate(satori.hp, 30)) {
            image.innerHTML = '<img src="static/img/satori/satori-100.png" >';
        }
        else if (enemyHP <= percentRate(satori.hp, 30) && enemyHP > percentRate(satori.hp, 5)) {
            image.innerHTML = '<img src="static/img/satori/satori-30.png" >';
        }
        else {
            image.innerHTML = '<img src="static/img/satori/satori-0.png" >';
        }
    }

    if (stageCount == 5) { /* stage5(早苗) */
        if (enemyHP > percentRate(sanae.hp, 30)) {
            image.innerHTML = '<img src="static/img/sanae/sanae-100.png" >';
        }
        else if (enemyHP <= percentRate(sanae.hp, 30) && enemyHP > percentRate(sanae.hp, 5)) {
            image.innerHTML = '<img src="static/img/sanae/sanae-30.png" >';
        }
        else {
            image.innerHTML = '<img src="static/img/sanae/sanae-0.png" >';
        }
    }

    if (stageCount == 6) { /* stage6(輝夜) */
        if (enemyHP > percentRate(kaguya.hp, 30)) {
            image.innerHTML = '<img src="static/img/kaguya/kaguya-100.png" >';
        }
        else if (enemyHP <= percentRate(kaguya.hp, 30) && enemyHP > percentRate(kaguya.hp, 5)) {
            image.innerHTML = '<img src="static/img/kaguya/kaguya-30.png" >';
        }
        else {
            image.innerHTML = '<img src="static/img/kaguya/kaguya-0.png" >';
        }
        const img = document.querySelector("#enemy-image > img");
        img.className = "img_dif2";
        console.log(img);
    }
}

