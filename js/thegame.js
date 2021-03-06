var theGame = function(game){
    words = ["CAT","DOG","OWL","BOX","FOX","BAT","FROG","COW","HOT","SUN","PIG","WET","BIG"];
}

theGame.prototype = {
  	create: function(){
            this.load_paper();
            this.load_word();
            var click_me = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * 0.2,"click_me",this.level1,this);
	    click_me.anchor.setTo(0.5,0.5);
	    //this.create_player("playerf");
	},
        clickMe: function(player){
            click.play();
            tween = this.game.add.tween(player).to({ x: this.game.world.width + 500 }, 1000);
            tween.start();           
            //console.log(player); 
            if(player.key == "playerf"){
                this.create_player("playerf2");
            }else{
                this.create_player("playerf");
            }
        },
        level1: function(){
            click.play();
            this.game.state.start("TheGame");
        },
        load_paper: function(){
            background  = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * 0.5,"background");
            background.scale.setTo(2,2);
            background.anchor.setTo(0.5,0.5);
        },
        load_word: function(){
            var word = words[Math.floor(Math.random()*words.length)];
            var l = word.split("");
            for(var i=0;i<l.length;i++){
                var letter = this.game.add.button(200*i+128,this.game.world.height * 0.5,l[i] + "_img",null,this);
                letter.snd = this.game.add.audio(l[i] +"_snd");
                letter.anchor.setTo(.5,.5);
                letter.scale.setTo(4,4);
                letter.events.onInputOver.add(function(_this){
                    _this.snd.play('',0,1,false);
                    var tween = _this.game.add.tween(_this.scale)
                    .to({ x: 5, y: 5 }, 200)
                    .to({ x: 4, y: 4 }, 400)
                    .start();
                });
                letter.events.onInputDown.add(function(_this){
                    _this.snd.play('',0,1,false);
                    var tween = _this.game.add.tween(_this.scale)
                    .to({ x: 5, y: 5 }, 200)
                    .to({ x: 4, y: 4 }, 400)
                    .start();
                });



            }
        }

}
