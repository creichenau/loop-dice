console.log("Loop Dice has been loaded.");

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"loop-dice",name:"Loop Dice"},true);
    dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/loop-dice/images/F1.png', 
        'modules/loop-dice/images/F2.png', 
        'modules/loop-dice/images/F3.png', 
        'modules/loop-dice/images/F4.png', 
        'modules/loop-dice/images/F5.png', 
        'modules/loop-dice/images/F6.png'
      ],
      system:"loop-dice"
    });
});