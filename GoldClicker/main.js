var gold = 0
var cursors = 0
var cursorCost = 15
var pans = 0
var panCost = 125

function update() {
    cursorCost = Math.ceil(15 * Math.pow(1.15,cursors));
    panCost = Math.ceil(125 * Math.pow(1.15,pans));   
    document.getElementById("gold").innerHTML = gold;
    document.getElementById('cursors').innerHTML = cursors;  
    document.getElementById('cursorCost').innerHTML = cursorCost;
    document.getElementById('pans').innerHTML = pans;  
    document.getElementById('panCost').innerHTML = panCost; 
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

function buyPan(){
    var panCost = Math.ceil(125 * Math.pow(1.15,pans));   
    if(gold >= panCost){                                  
        pans++;                                
    	gold -= panCost;                          
        update();
    };
    update(); 
};

function save() {
    var save = {
        gold: gold,
        cursors: cursors,
        pans: pans
    }

    localStorage.setItem("save",JSON.stringify(save))
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));

    if (typeof savegame.gold !== "undefined") gold = savegame.gold;
    if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
    if (typeof savegame.pans !== "undefined") pans = savegame.pans;
    update();
}

window.setInterval(function(){

	mineGold(cursors + (pans * 3));

	
}, 1000);
