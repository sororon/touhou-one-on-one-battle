const statusClass = class 
{
  constructor(name, hp, ph_at, ph_df, mg_at, mg_df, sp) { /* コンストラクタ */
    this.name = name;
    this.hp = hp;
    this.ph_at = ph_at;
    this.ph_df = ph_df;
    this.mg_at = mg_at;
    this.mg_df = mg_df;
    this.sp = sp;
  }

  calcStatus() {  /* メソッド */
    return this.hp + this.ph_at + this.ph_df + this.mg_at + this.mg_df + this.sp;
  }
}

/* キャラクター能力値の設定 (config of character status) */
const satori = new statusClass("古明地さとり",6000,1390,1150,1210,1050,900);
const rumia = new statusClass("ルーミア",3900,670,620,1340,1390,1000);
const hina = new statusClass("鍵山雛",4900,1300,900,1200,800,790);
const sanae = new statusClass("東風谷早苗",8000,1000,885,940,845,980);
const kaguya = new statusClass("蓬莱山輝夜",5400,2480,1010,2390,950,990);
const arice = new statusClass("アリス・マーガトロイド",5350,890,910,1220,1080,1280);

/* 時機キャラ */
const reimu = new statusClass("博麗霊夢",6650,930,1235,855,1190,910);


/* グローバル変数の宣言 */

let stageCount = 1;     // 現在のステージ
let turnCount = 1;      // 現在のターン数
let totalTurnCount = 1; // 合計のターン数

let playerNum = 1;  // 時機キャラの設定
let enemyNum = 1;  // 敵キャラの設定

let ALLOWnextstage = 0; // 次のステージに進むための許可（1：許可 0：拒否）
let ALLOWreset = 0; // （未使用）

// 実際のバトルで使用するステータス変数
let enemyNAME;
let enemyHP;
let enemyPA;
let enemyPD;
let enemyMA;
let enemyMD;
let enemySP;

let playerNAME;
let playerHP;
let playerPA;
let playerPD;
let playerMA;
let playerMD;
let playerSP;

// スペルカード、ラストワード使用のカウント
let enemySP1Count;
let enemySP2Count;
let enemyLWCount;

let playerSP1Count;
let playerSP2Count;
let playerLWCount;

// スキル効果持続のカウント
let playerEffectSKL1;
let playerEffectSKL2;
let playerEffectSKL3;

// スキル再使用のカウント
let playerReuseSKL1;
let playerReuseSKL2;
let playerReuseSKL3;

// スキルの使用許可
let ALLOWplayerSKL1 = 1;
let ALLOWplayerSKL2 = 1;
let ALLOWplayerSKL3 = 1;

// 結界使用のカウント
let enemyBACount; // 未使用

let playerBACount;
let UsePlayerBarriar = 0; // 結界を選択しているかどうかの判別（1：使用 0：解除）
let ALLOWplayerbarriar = 1;
let MaxBarriar;


/* メソッド一覧 */
function select(player) {
  let myPlayer = player;
}

function nextStage() {
  if (ALLOWnextstage == 1) {
    if (stageCount == 1) { /* stage1->2 */
      SetStatusHina();
    }
    if (stageCount == 2) { /* stage2->3 */
      SetStatusArice(); 
    }
    if (stageCount == 3) { /* stage3->4 */
      SetStatusSatori(); 
    }
    if (stageCount == 4) { /* stage4->5 */
      SetStatusSanae(); 
    }
    if (stageCount == 5) { /* stage5->6 */
      SetStatusKagya(); 
    }
    if (stageCount == 6) { /* stage6->1 */
      /* ステータスの再セットアップ */
      if (playerNum == 1) { /* player1(霊夢) */
        SetStatusReimu();
      }
      SetStatusRumia();
      totalTurnCount = 1; // トータルターン数のリセット
      stageCount = 0;
      enemyNum = 0;
    }

    /* 次のステージに進む */
    stageCount++;
    enemyNum++;
    ALLOWnextstage = 0;
    turnCount = 1; // 次のステージの1ターン目
    /* 敵のステータス、イメージ画像を更新 */
    showImage();
    showLog();
    console.log("合計ターン数：" + totalTurnCount);
    console.log("ターン" + turnCount);
    /* 敵ステータス */
    console.log("＜" + enemyNAME + "＞\nＨＰ：", enemyHP, "\n陽攻：", enemyPA, "\n陽防：", enemyPD, "\n陰攻：", enemyMA, "\n陰防：", enemyMD, "\n速力：", enemySP);

    /* 味方ステータス */
    console.log("＜" + playerNAME + "＞\nＨＰ：", playerHP, "\n陽攻：", playerPA, "\n陽防：", playerPD, "\n陰攻：", playerMA, "\n陰防：", playerMD, "\n速力：", playerSP);
  }
}

function showStatus(player) {
  var name = document.getElementById('name');
  name.textContent = String(player.name);
  var total = document.getElementById('total');
  total.textContent = String(player.calcStatus());
  var hp = document.getElementById('hp');
  hp.textContent = String(player.hp);
  var ph_at = document.getElementById('ph_at');
  ph_at.textContent = String(player.ph_at);
  var ph_df = document.getElementById('ph_df');
  ph_df.textContent = String(player.ph_df);
  var mg_at = document.getElementById('mg_at');
  mg_at.textContent = String(player.mg_at);
  var mg_df = document.getElementById('mg_df');
  mg_df.textContent = String(player.mg_df);
  var sp = document.getElementById('sp');
  sp.textContent = String(player.sp);
}

