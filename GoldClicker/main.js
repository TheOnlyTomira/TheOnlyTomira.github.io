var gold = 0
var cursors = 0
var cursorCost = 15

function update() {
    cursorCost = Math.ceil(15 * Math.pow(1.15,cursors));
    document.getElementById("gold").innerHTML = gold;
    document.getElementById('cursors').innerHTML = cursors;  
    document.getElementById('cursorCost').innerHTML = cursorCost;
}

function mineGold(increment){
    gold += increment;
    update();
};

function buyCursor(){
    var cursorCost = Math.ceil(15 * Math.pow(1.15,cursors));     //works out the cost of this cursor
    if(gold >= cursorCost){                                   //checks that the player can afford the cursor
        cursors++;                                   //increases number of cursors
    	gold -= cursorCost;                          
        update();
    };
    update(); 
};

function save() {
    var save = {
        gold: gold,
        cursors: cursors
    }

    localStorage.setItem("save",JSON.stringify(save))
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));

    if (typeof savegame.gold !== "undefined") gold = savegame.gold;
    if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
    update();
}

window.setInterval(function(){

	mineGold(cursors);

	
}, 1000);