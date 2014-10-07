var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){

		background  = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * 0.5,"background");
                background.scale.setTo(2,2);
		background.anchor.setTo(0.5,0.5);

                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);

		var playButton = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * .5,"play_btn",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);

                this.main_title();

                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
            
        },
	playTheGame: function(){
                click.play();
		this.game.state.start("TheGame");
	},
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        },

        main_title: function(){
                title = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .9,"main_title");
                title.inputEnabled = true;
                title.events.onInputDown.add(this.krisWeb,this);
                title.anchor.setTo(0.5,0.5);
        },
        krisWeb: function(){
            window.open("http://filmsbykris.com", "_blank");
        },


}   
