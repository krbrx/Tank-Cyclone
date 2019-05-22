(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Game_atlas_", frames: [[383,1064,195,50],[327,1347,250,44],[611,915,391,268],[579,1347,233,44],[327,1393,233,44],[611,602,391,311],[802,273,200,37],[802,195,200,37],[802,156,200,37],[0,602,609,460],[802,234,200,37],[802,312,200,37],[802,39,200,37],[802,78,200,37],[802,117,200,37],[383,1116,200,37],[802,0,200,37],[383,1185,550,160],[562,1393,231,44],[894,351,65,30],[580,1064,20,30],[802,351,90,30],[383,1155,77,28],[0,1064,381,260],[0,0,800,600],[0,1326,325,198]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.level1background = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["Game_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tank3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHXhjIAvAAIAvAAIAAF0IgvAAIgvAAgAEWjmQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAARgMAMQgNANgSAAQgRAAgMgNQgNgMAAgRgAEvjmQAAgIAGgGQAFgFAIAAQAHAAAGAFQAGAGAAAIQAAAIgGAFQgGAFgHAAQgIAAgFgFQgGgFAAgIgADrhjIAvAAIAvAAIAvAAIAvAAAAvhjIAvAAIAvAAIAvAAIAvAAADrERIgvAAIgvAAIgvAAIgvAAIAAl0AGnERIgvAAIgvAAIgvAAIgvAAIAAl0AIGhjIAAF0AGnERIAAl0IAwAAAHXERIgwAAABeERIAAl0ACNhjIAAF0AEaERIAAl0AFJhjIAAF0AC8ERIAAl0AF4ERIAAl0AhdhjIAvAAIAuAAIAvAAAiMhjIAvAAAlojmQAAgIAFgGQAFgFAIAAQAIAAAGAFQAFAGAAAIQAAAIgFAFQgGAFgIAAQgIAAgFgFQgFgFAAgIgAmBjmQAAgRAMgNQANgMARAAQARAAAOAMQAMANAAARQAAARgMAMQgOANgRAAQgRAAgNgNQgMgMAAgRgAlIhjIAvAAIAvAAIAvAAIAvAAAl4hjIAwAAAoFhjIAvAAIAvAAIAAF0IgvAAIgvAAIgvAAIAAl0gAiMERIgvAAIgvAAIgvAAIgvAAIgwAAIgvAAAAAERIguAAIgvAAIgvAAIAAl0AnWERIAAl0Ai7ERIAAl0AjqhjIAAF0AkZERIAAl0AhdERIAAl0AguhjIAAF0AAAERIAAl0AlIERIAAl0AmnhjIAvAAAl4ERIAAl0AoFERIAAl0AAvERIgvAA");
	this.shape.setTransform(78.6,27.8,1,0.985);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AIGEQIAAlyIAAFyIgwAAIAAlyIAwAAIAvAAIAAFygAGnEQIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAvAAIAvAAIAvAAIAvAAIAvAAIAvAAIAvAAIAvAAIAvAAIAAFygAAAEQIAAlyIAvAAIAAFygAAAEQIguAAIAAlyIAAFyIgwAAIAAlyIAAFyIgvAAIAAlyIAAFyIguAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgwAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAvAAIAvAAIAwAAIAvAAIAvAAIAuAAIAvAAIAwAAIAuAAIAAFygAmnEQIgvAAIAAlyIAAFyIgvAAIAAlyIAAFyIgvAAIAAlyIAvAAIAvAAIAvAAIAAFygAHWhigAAvhigAEijJQgMgMAAgRQAAgRAMgMQANgMARAAQARAAAOAMQAMAMgBARQABARgMAMQgOANgRAAQgRAAgNgNgAE0jZQAFAGAJgBQAHABAGgGQAGgFAAgIQAAgHgGgGQgGgGgHAAQgJAAgFAGQgFAGAAAHQAAAIAFAFgAl1jJQgMgMAAgRQAAgRAMgMQAMgMASAAQARAAAOAMQALAMAAARQAAARgLAMQgOANgRAAQgSAAgMgNgAljjZQAGAGAHgBQAIABAFgGQAGgFAAgIQAAgHgGgGQgFgGgIAAQgHAAgGAGQgGAGABAHQgBAIAGAFgAE0jZQgFgFAAgIQAAgHAFgGQAFgGAJAAQAHAAAGAGQAGAGAAAHQAAAIgGAFQgGAGgHgBQgJABgFgGgAljjZQgGgFABgIQgBgHAGgGQAGgGAHAAQAIAAAFAGQAGAGAAAHQAAAIgGAFQgFAGgIgBQgHABgGgGgAEvjmIAAAAgAlojmIAAAAg");
	this.shape_1.setTransform(78.6,27.8,1,0.985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ak9rKIjIAAIAAgyIDIAAgAIGrKIjIAAIAAgyIDIAAgABKoSIBKAAIAAlPIjyAAIAAFPIBKAAABKoSIAAV0IheAAIAA10ABKoSIheAA");
	this.shape_2.setTransform(78.6,264.7,1,0.985);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AguNiIAA10IhKAAIAAlPIDxAAIAAFPIhKAAIhdAAIBdAAIAAV0g");
	this.shape_3.setTransform(81.3,264.7,1,0.985);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AE+AZIAAgxIDIAAIAAAxgAoFAZIAAgxIDIAAIAAAxg");
	this.shape_4.setTransform(78.6,191.9,1,0.985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AIGAoIAAA1IkbAAIAAi5IEbAAIAAAoIAvAAIAABcIgvAAIAAhcAESA7IAAhvIDQAAIAABvgAoFg6IAAgiIEbAAIAAC5IkbAAIAAg8IgvAAIAAhbIAvAAIAABbAniA8IAAhvIDPAAIAABvgAlMAhIheAAIAAgbIBeAAgAGqAgIheAAIAAgbIBeAAg");
	this.shape_5.setTransform(78.6,100.8,1,0.985);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ADrBdIAAi5IEbAAIAAAoIAvAAIAABcIgvAAIAAhcIAABcIAAA1gAHhA6IAAhuIjPAAIAABugAoFBcIAAg7IAAhcIAAghIEbAAIAAC4gAkUA7IAAhuIjPAAIAABugAnjA7IAAhuIDPAAIAABugAmqAhIBeAAIheAAIAAgcIBeAAIAAAcIAAgcIheAAIAAAcgAnjA7gAESA6IAAhuIDPAAIAABugAFMAgIBdAAIhdAAIAAgcIBdAAIAAAcIAAgcIhdAAIAAAcgAESA6gAo0AhIAAhcIAvAAIAABcg");
	this.shape_6.setTransform(78.6,100.8,1,0.985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AMgyjIkaAAIAAhdIEaAAgAoFyjIkaAAIAAhdIEaAAgAMgUBIkaAAIAAiMIEaAAgAoFUBIkaAAIAAiMIEaAAg");
	this.shape_7.setTransform(80,126.1,1,0.985);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AIGUBIAAiMIEaAAIAACMgAsfUBIAAiMIEaAAIAACMgAIGyjIAAhdIEaAAIAABdgAsfyjIAAhdIEaAAIAABdg");
	this.shape_8.setTransform(80,126.1,1,0.985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer 10
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AJOqCIDShZI4/AEICzBVAJOqCIAAQeIy6AAIioFAApsGcIAAweIS6AAAMVLcIjHlA");
	this.shape_9.setTransform(80,138.9,1,0.985);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ApcIPIAAwdIS5AAIAAQdg");
	this.shape_10.setTransform(78.5,127.5,1,0.985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("ArBwAIWDAAAMVQBI4pAA");
	this.shape_11.setTransform(80,110,1,0.985);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AMgSMI4/AAMAAAgkXIY/AAg");
	this.shape_12.setTransform(80,123.8,1,0.985);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AsfSMMAAAgkXIY/AAMAAAAkXg");
	this.shape_13.setTransform(80,123.8,1,0.985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,162,352);


(lib.tank2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AIfrqIBWlAAhtIJIAuAAIAwAAIAuAAIAvAAIAvAAIAvAAIAuAAIAwAAIAvAAIAwAAIAvAAIAvAAIAvAAIAAF1IgvAAIgvAAIgvAAIgwAAIgvAAIgwAAIguAAIgvAAIgvAAIgvAAIguAAIgwAAIguAAIgwAAIgvAAIguAAIgwAAIgvAAIgvAAIAAl1IAvAAIAvAAIAwAAIAuAAIAvAAIAwAAIAAF1AEqQBQAAAIgFAGQgGAFgHAAQgIAAgGgFQgFgGAAgIQAAgIAFgFQAGgGAIAAQAHAAAGAGQAFAFAAAIgAFDQBQAAARgMANQgNAMgRAAQgSAAgNgMQgMgNAAgRQAAgRAMgMQANgNASAAQARAAANANQAMAMAAARgAlVQBQAAARgMANQgNAMgRAAQgRAAgNgMQgMgNAAgRQAAgRAMgMQANgNARAAQARAAANANQAMAMAAARgAluQBQAAAIgFAGQgFAFgIAAQgIAAgGgFQgFgGAAgIQAAgIAFgFQAGgGAIAAQAIAAAFAGQAFAFAAAIgAHHIJIAAF1AGYIJIAAF1AFpN+IAAl1AE5IJIAAF1AEKIJIAAF1ADaIJIAAF1ACsN+IAAl1AB9IJIAAF1ABOIJIAAF1AAfIJIAAF1AgPN+IAAl1Ag/IJIAAF1AidIJIAAF1AjMN+IAAl1Aj6IJIAAF1AkqIJIAAF1AlZIJIAAF1ApFN+IgvAAIAAl1IAvAAIAwAAIAvAAIAvAAIAAF1IgvAAIgvAAIgwAAIAAl1AoVIJIAAF1AnmIJIAAF1Am3IJIAvAAAmIN+IgvAA");
	this.shape.setTransform(87.8,222.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AE5EEQgMgMAAgSQAAgQAMgMQAOgNASAAQARAAAMANQAMAMAAAQQAAASgMAMQgMAMgRABQgSgBgOgMgAFEDmQAAAJAFAGQAGAEAIAAQAIAAAFgEQAGgGAAgJQAAgHgGgFQgFgFgIgBQgIABgGAFQgFAFAAAHIAAAAgAldEEQgMgMgBgSQABgQAMgMQANgNARAAQARAAAMANQANAMAAAQQAAASgNAMQgMAMgRABQgRgBgNgMgAlTDmQgBAJAGAGQAGAEAIAAQAHAAAFgEQAGgGAAgJQAAgHgGgFQgFgFgHgBQgIABgGAFQgGAFABAHIAAAAgAFJD1QgFgGAAgJQAAgHAFgFQAGgFAIgBQAIABAFAFQAGAFAAAHQAAAJgGAGQgFAEgIAAQgIAAgGgEgAlOD1QgGgGABgJQgBgHAGgFQAGgFAIgBQAHABAFAFQAGAFAAAHQAAAJgGAGQgFAEgHAAQgIAAgGgEgAFqDmIAAAAgAkuDmIAAAAgAIGBkIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgwAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAAF0IguAAIAAl0IAuAAIAvAAIAvAAIAvAAIAvAAIAvAAIAvAAIAvAAIAwAAIAvAAIAvAAIAvAAIAvAAIAAF0gAhdBkIAAl0IAAF0IgvAAIAAl0IAAF0IguAAIAAl0IAAF0IgwAAIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAvAAIAvAAIAwAAIAuAAIAvAAIAvAAIAAF0gAl3BkIAAl0IAAF0IgvAAIAAl0IAvAAIAvAAIAAF0gAnWBkIAAl0IAAF0IgvAAIAAl0IAAF0IgvAAIAAl0IAvAAIAvAAIAwAAIAAF0gAlIkQgAmmkQg");
	this.shape_1.setTransform(81.4,301.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABUIPIAA11IBfAAIAAV1IBEAAIAAFPIjyAAIAAlPgAklNLIBeAAIAAAcIheAAgAHRNKIBeAAIAAAcIheAAgACzIPIhfAAAouEfIBXFA");
	this.shape_2.setTransform(68.2,87.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AmpNnIAAgcIBeAAIAAAcgAFMNmIAAgcIBeAAIAAAcgAh/NeIAAlPIBQAAIBdAAIhdAAIAA11IBdAAIAAV1IBFAAIAAFPg");
	this.shape_3.setTransform(81.5,87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AIGggIAvAAIAABcIgvAAgAHjg7IAABvIjPAAIAAhvgAkRg6IAABvIjQAAIAAhvgAo0gnIAvAAIAABcIgvAAg");
	this.shape_4.setTransform(81.4,174.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AIGA8IAAhcIAvAAIAABcgAnhA1IAAhuIDQAAIAABugAo0A1IAAhcIAvAAIAABcgAEUA0IAAhuIDPAAIAABug");
	this.shape_5.setTransform(81.4,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("ADrCbIEbAAIAAC6IkbAAgAoFCbIEbAAIAAC6IkbAAgAjGlUIGCAAIAAI+ImCAAg");
	this.shape_6.setTransform(81.4,149.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("ADrFVIAAi6IEbAAIAAC6gAoFFVIAAi6IEbAAIAAC6gAjGDqIAAo+IGCAAIAAI+g");
	this.shape_7.setTransform(81.4,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AIG0AIEaAAIAACMIkaAAgAIGSkIEaAAIAABdIkaAAgAsf0AIEaAAIAACMIkaAAgAsfSkIEaAAIAABdIkaAAg");
	this.shape_8.setTransform(80,201.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AIGUBIAAhdIEaAAIAABdgAsfUBIAAhdIEaAAIAABdgAIGx0IAAiMIEaAAIAACMgAsfx0IAAiMIEaAAIAACMg");
	this.shape_9.setTransform(80,201.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ALCyLIBeAAMAAAAkXIheAAgAsfyLIBeAAMAAAAkXIheAAg");
	this.shape_10.setTransform(80,204.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ALCSMMAAAgkXIBeAAMAAAAkXgAsfSMMAAAgkXIBeAAMAAAAkXg");
	this.shape_11.setTransform(80,204.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ApcoOIS5AAIAAQdIy5AAg");
	this.shape_12.setTransform(81.5,200.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("ApcIPIAAwdIS5AAIAAQdg");
	this.shape_13.setTransform(81.5,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("ArBwAIWDAAMAAAAgBI2DAAg");
	this.shape_14.setTransform(80,218.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AnPrJIDIAAIAAAyIjIAAgAEorJIDIAAIAAAyIjIAAgArByLIWDAAMAAAAkXI2DAAg");
	this.shape_15.setTransform(80,204.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AEYAZIAAgxIDIAAIAAAxgAnfAZIAAgxIDIAAIAAAxg");
	this.shape_16.setTransform(81.6,135.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("ArBSMMAAAgkXIWDAAMAAAAkXgAEoqXIDIAAIAAgyIjIAAgAnPqXIDIAAIAAgyIjIAAg");
	this.shape_17.setTransform(80,204.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,162,332);


(lib.tank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s("#000000").ss(2,2,1).rc(-4.75,-12.4,9.5,24.8,0,0,4.75,4.75);
	this.shape.setTransform(105.8,317.7,1,0.99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s("#000000").ss(2,2,1).rc(-4.75,-12.4,9.5,24.8,0,0,4.75,4.75);
	this.shape_1.setTransform(65.1,317.7,1,0.99);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AEajDIAoAAIAAGHIgoAAIgwAAIguAAIAAmHIAuAAIAAGHAFJjDIApAAIAwAAIAAGHIgwAAIgwAAAAzjDIApAAIAvAAIAwAAIAAGHIgwAAIgvAAIgwAAIgpAAIgvAAIgtAAIAAmHIAtAAIAAGHADsjDIAuAAIAAGHAADjDIApAAIAAGHAFyjDIAAGHACLjDIAAGHABcjDIAAGHAmhjDIAwAAIAAGHIgwAAgAiKjDIAvAAIAAGHIgvAAIgwAAIgwAAIgoAAIgwAAIguAAIAAmHIAuAAIAAGHAgqjDIAtAAIAAGHAkSjDIAoAAIAAGHAjjjDIApAAIAwAAIAAGHAlAjDIAuAAIAAGHAi6jDIAAGH");
	this.shape_2.setTransform(80.8,255.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("ADXgYIDIAAIAAAxIjIAAgAmegYIDIAAIAAAxIjIAAg");
	this.shape_3.setTransform(80.2,100.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AFyDEIAAmHIAAGHIgwAAIgoAAIAAmHIAoAAIAAGHIAAmHIAHAAIApAAIAwAAIAAGHgADqDEIAAmHIAAGHIguAAIAAmHIAuAAIACAAIAuAAIAAGHgACLDEIAAmHIAAGHIgvAAIAAmHIAAGHIgwAAIAAmHIAHAAIApAAIAvAAIAwAAIAAGHgAADDEIAAmHIApAAIAAGHgAgsDEIAAmHIACAAIAtAAIAAGHgAgsDEIgtAAIAAmHIAtAAIAAGHgAiKDEIAAmHIAvAAIAAGHgAi6DEIAAmHIAwAAIAAGHgAi6DEIgwAAIAAmHIAAGHIgoAAIAAmHIAoAAIAHAAIApAAIAAGHgAkSDEIgwAAIAAmHIAAGHIguAAIAAmHIAuAAIACAAIAuAAIAAGHgAmhDEIAAmHIAwAAIAAGHgAAsjDgAiKjDg");
	this.shape_4.setTransform(80.8,255.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADXAZIAAgxIDIAAIAAAxgAmeAZIAAgxIDIAAIAAAxg");
	this.shape_5.setTransform(80.2,100.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 16
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AB8lMQgngEgbgcQggghAAguQAAgvAgghQAfggAuAAQAtAAAgAgQAfAhAAAvQAAAugfAhQgbAbgjAFIAAAVIgaAAIAAgVIAAgWQgegEgVgWQgagaAAglQAAgmAagZQAZgbAkAAQAkAAAaAbQAZAZAAAmQAAAlgZAaQgUAUgaAFIAAAXADJnXIAAASIiDAAIAAgSAB8liIAAgCIAaAAIAAABAHTClIAAhiIC+AAIAABiIAABiIi+AAIAAhiIC+AAAKRFpIAABiIi+AAIAAhiIAAhiAKRFpIi+AAAKREHIAABiAKRHLIAABiIi+AAIAAhiAh+ldQgkgBgZgaQgagbAAgmQAAgmAagbQAagbAlAAQAiAAAZAXQACACACACQAaAbAAAmQAAAmgaAbQgCACgCADQgYAVggABIAGAAIAAAWIAAAXIgaAAIAAgXQgkgGgagbQghgiAAgvQAAgwAhghQAIgIAHgGQAcgTAjAAQAuAAAgAhQAhAhAAAwQAAAvghAiQgIAJgKAHQgXAPgbACAjBnVICFAAIAAASIiFAAgAiNlHIAAgWIAPAAAh5ldIgFAAAqQClIAAhiIC+AAIAABiIAABiIAABiIAABiIi+AAIAAhiIAAhigAnSFpIi+AAAnSClIi+AAAnSEHIi+AAAnSHLIAABiIi+AAIAAhi");
	this.shape_6.setTransform(80.1,224.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AHTD1IAAhiIC+AAIAABigAqQD1IAAhiIC+AAIAABigAHTCTIAAhiIAAhhIAAhiIC+AAIi+AAIAAhiIC+AAIAABiIAABiIi+AAIC+AAIAABhIi+AAIC+AAIAABigAqQCTIAAhiIAAhhIC+AAIAABhIi+AAIC+AAIAABigAqQCTgAnSgwgAqQgwIAAhiIC+AAIAABigAnSiSgAqQiSIAAhiIC+AAIAABig");
	this.shape_7.setTransform(80.1,256.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003300").s().p("AiQB+IAAgYQgkgFgagcQghghAAgvQAAgvAhghQAIgJAHgGQAcgTAjAAQAuAAAhAiQAgAhAAAvQAAAvggAhQgJAKgKAGQgXAPgbADIAAAXgAh2BnIAAgXIgGAAQAggBAYgVIAEgEQAagbAAgmQAAglgagbIgEgFQgZgWgiAAQglAAgaAbQgZAbgBAlQABAmAZAbQAZAZAkABIgPAAIAAAWIAAgWIAPAAIAFAAIAGAAgAB5B3IAAgVQgngEgcgdQgfggAAguQAAgvAfggQAgghAuAAQAsAAAgAhQAgAgAAAvQAAAuggAgQgaAbgjAFIAAgXIAAAXIAAAWgAB5BiIAAgXQgegDgVgWQgagbAAgkQAAglAagaQAZgaAkAAQAkAAAaAaQAZAagBAlQABAkgZAbQgVAUgZAEQAZgEAVgUQAZgbgBgkQABglgZgaQgagagkAAQgkAAgZAaQgaAaAAAlQAAAkAaAbQAVAWAeADgAB5BLIAAgBIAaAAIAAAAIAAAAIgaAAgABDgXICCAAIACAAIAAgRIgCAAIAAARIiCAAIAAgRIAAARgAh8BQIgFAAQgkgBgZgZQgZgbgBgmQABglAZgbQAagbAlAAQAiAAAZAWIAEAFQAaAbAAAlQAAAmgaAbIgEAEQgYAVggABgAjEgUICFAAIAAgTIiFAAICFAAIAAATIiFAAIAAgTIAAATgAiBBQg");
	this.shape_8.setTransform(80.4,181.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 15
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("ADwhYICPAAIAAAUIiPAAgAEpAmIAdAAIAAAxIgdAAgAl+hYICPAAIAAAUIiPAAgAlGAoIAdAAIAAAxIgdAAg");
	this.shape_9.setTransform(80.4,130.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003300").s().p("AlGBZIAAgxIAdAAIAAAxgAEpBXIAAgxIAdAAIAAAxgADwhEIAAgUICPAAIAAAUgAl+hEIAAgUICPAAIAAAUg");
	this.shape_10.setTransform(80.4,130.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 14
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AGTAAQAAAogaAeQgdAcgnAAQgoAAgcgcQgcgeAAgoQAAgnAcgdQAcgdAoAAQAnAAAdAdQAaAdAAAngAjUAAQAAAogcAeQgDACgCADQgbAXgkAAQgnAAgcgcQgbgeAAgoQAAgnAbgdQAcgdAnAAQAkAAAbAYQACADADACQAcAdAAAng");
	this.shape_11.setTransform(80.4,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003300").s().p("ADxBGQgcgdAAgpQAAgnAcgdQAcgdAoAAQAoAAAbAdQAbAdAAAnQAAApgbAdQgbAcgoAAQgoAAgcgcgAl3BGQgcgdAAgpQAAgnAcgdQAcgdAnAAQAlAAAaAYIAFAFQAcAdAAAnQAAApgcAdIgFAEQgaAYglAAQgnAAgcgcg");
	this.shape_12.setTransform(80.4,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 13
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AGsAAQAAAzgiAkQgjAkgyAAQgxAAgjgkQgjgkAAgzQAAgyAjgjQAjglAxAAQAyAAAjAlQAiAjAAAygAi+AAQAAAGAAAGQgEArgeAgQgKAJgKAIQgdATgjAAQgyAAgjgkQgigkAAgzQAAgyAigjQAJgJAJgHQAdgVAmAAQAxAAAjAlQAeAfAEAsQAAAFAAAFg");
	this.shape_13.setTransform(80.3,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("ADhBXQgjgkAAgzQAAgyAjgkQAjgjAxgBQAyABAjAjQAiAkAAAyQAAAzgiAkQgjAkgyAAQgxAAgjgkgAmJBXQgigkAAgzQAAgyAigkQAJgIAJgHQAdgUAmgBQAxABAjAjQAeAgAEAsIAAAKIAAAMQgEAsgeAfQgKAKgKAHQgdASgjABQgyAAgjgkg");
	this.shape_14.setTransform(80.3,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer 12
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AEeAAQAAB7hUBWQhUBVh2AAQh1AAhUhVQhUhWAAh7QAAh4BUhXQBUhWB1AAQB2AABUBWQBUBXAAB4g");
	this.shape_15.setTransform(81,181.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003300").s().p("AjJDQQhUhVAAh7QAAh4BUhXQBUhWB1AAQB2AABUBWQBUBXAAB4QAAB7hUBVQhUBWh2AAQh1AAhUhWg");
	this.shape_16.setTransform(81,181.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer 11
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AheHFIAAjIIAqAAAheHFIBeBiIBghiAjlJPIiJiNICGiLICKCOAjlMTIjCAAIAAjEIDCAAAAAM8IheBiIiKCNIiGiLICJiNIBfhiIhfhiABgOeIAADHIi+AAIAAjHAiGKxICGiKAA1D9IArAAIAADIICJiOICGCLIiJCNIDCAAIAADEIjCAAACHKxIBfBiICJCNIiGCLIiJiNIhghiADmJPIhfBiIiHCLAgvxkIBfAAIAAW9IhfAAg");
	this.shape_17.setTransform(80.5,112.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003300").s().p("AheRlIAAjHIBehiIheBiIiKCNIiGiLICJiNIBfhiICGiKIiGCKIhfhiIBfBiIhfBiIjCAAIAAjEIDCAAIiJiNICGiLICKCOIBeBiIhehiIAAjIIAqAAIAABgIBkAAIAAgEIAFAAIAAhcIArAAIAADIICJiOICGCLIiJCNIDCAAIAADEIjCAAIhfhiIBfhiIhfBiIBfBiICJCNIiGCLIiJiNIhghiICHiLIiHCLIBgBiIAADHgAAAInIBghigABgOegAiGKxgAguFZIAA29IBdAAIAAW9g");
	this.shape_18.setTransform(80.5,112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Layer 10
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("AGsAAQAAC3h9CBQh+CBixAAQiwAAh+iBQh9iBAAi3QAAi2B9iBQApgpAugdQATgLATgKQACAAADgBQAVgLAYgHQA9gTBCAAQCxAAB+CBQB9CBAAC2g");
	this.shape_19.setTransform(80.3,181.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003300").s().p("AkuE4Qh9iBAAi3QAAi1B9iCQApgqAugcQATgMATgJIAFgCQAVgKAYgHQA9gTBCAAQCxAAB+CBQB9CCAAC1QAAC3h9CBQh+CBixAAQiwAAh+iBg");
	this.shape_20.setTransform(80.3,181.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer 9
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("ABPAEIBYAAIAACSIkdAAIAAiSgAimiVID1CZ");
	this.shape_21.setTransform(143.4,303.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003300").s().p("AiOBJIAAiRIDFAAIBYAAIAACRg");
	this.shape_22.setTransform(145.7,311.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Layer 8
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("AiOhIIEdAAIAACRIkdAAg");
	this.shape_23.setTransform(14.3,311.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003300").s().p("AiOBJIAAiRIEdAAIAACRg");
	this.shape_24.setTransform(14.3,311.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer 7
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("AimhhIFNAAIAADDIlNAAg");
	this.shape_25.setTransform(143.4,73.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003300").s().p("AilBiIAAjDIFMAAIAADDg");
	this.shape_26.setTransform(143.4,73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// Layer 6
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("AgvzIIBfAAMAAAAmRIhfAAg");
	this.shape_27.setTransform(155.3,196);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003300").s().p("AgvTJMAAAgmRIBfAAMAAAAmRg");
	this.shape_28.setTransform(155.3,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	// Layer 5
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("AilhhIFMAAIAADDIlMAAg");
	this.shape_29.setTransform(16.7,73.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003300").s().p("AimBiIAAjDIFMAAIAADDg");
	this.shape_30.setTransform(16.7,73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Layer 4
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("AgvzIIBfAAMAAAAmRIhfAAg");
	this.shape_31.setTransform(4.8,196);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003300").s().p("AgvTJMAAAgmRIBfAAMAAAAmRg");
	this.shape_32.setTransform(4.8,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("AnbgwIO3AAIAABhIu3AAg");
	this.shape_33.setTransform(80.9,78.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003300").s().p("AnbAxIAAhhIO3AAIAABhg");
	this.shape_34.setTransform(80.9,78.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("AHPtVID1juAHPtVIAAcUIukAAArDxPIDuD6ArDRQIDuiRIAA8UIOkAA");
	this.shape_35.setTransform(80.4,192.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003300").s().p("AnSOLIAA8VIOlAAIAAcVg");
	this.shape_36.setTransform(80,197.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("ArJzIIWTAAMAAAAmRI2TAAg");
	this.shape_37.setTransform(79.1,196);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003300").s().p("ArJTJMAAAgmRIWTAAMAAAAmRg");
	this.shape_38.setTransform(79.1,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,162,332);


(lib.SpeedBoost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABVAkIBLCGIksAAIBLiGIhLAAICWkKICWEKIhLAAIiWAAAD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQgfgggTglQgXgxAAg7QAAg6AXgwQATgmAfggQBJhJBnAAQBoAABJBJQBJBJAABng");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AiVDIIBLiFICVAAIiVAAIhLAAICVkKICWEKIhLAAIBLCFg");
	this.shape_1.setTransform(26,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpeedBoost, new cjs.Rectangle(-1,-1,52,52), null);


(lib.ShieldDrop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AETAAQAAByhQBRQhRBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxgAAACvIiVkrIErAAg");
	this.shape.setTransform(27.5,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AiViVIErAAIiWErg");
	this.shape_1.setTransform(27.5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ShieldDrop, new cjs.Rectangle(-1,-1,57,57), null);


(lib.Shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AETAAQAAByhQBRQhRBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shield, new cjs.Rectangle(-1,-1,57,57), null);


(lib.Turret = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{u:0,r:1,d:2,l:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AA3hVIACgDIAOANQAEAEAFACQACAEAEAEIAMALIgDABIgUAWABHhLIAPAOAAShiIAAAVIgoAAIAAgVIAAgOIAoAAIAAAOIAIgBIAAAFIABAZQADACAFACQANAGALAKQAJAJAHANQACAEADADIAdAAIAEAAIAAAzIgEAAIgdABQgBADgCADIAXARIACABIglApIgCgDQgHAEgGADQgJAFgLACIAAAFIg4AAIAAgEIAAgbQgEgCgFgCIgUATIgCADIgpgjIADgDIAUgUQgCgEgBgFQgFgLAAgPQgBgOAEgLQACgCABgDQAGgMAMgOQAJgIALgFQAEgDAFgCQANgEAQAAQAPgBANADAAgAaQgJAAgEgEQgHgIAAgHQAAgJAGgFQAHgHAJAAQAKAAAGAHQAHAFAAAJQAAAHgHAIQgEAEgHAAIAAAGIAAAGIgHAAIAAgGIAAgGIAHAAAAgAgQgLgBgHgFQgJgIAAgLQAAgJAJgKQAJgGAMAAQALAAAJAGQAHAJABAKQAAAKgIAJQgHAFgJABAAjhBIAUgUAAaheQAPABAOAIABfgxQAJAOAFAPAhrAhIgEAAIgBgzIADAAIAdAAAgfheIAAgEIAJAAAg+hRQADgBACgCQAEgBAGgFIABAAQAGgDAFgBQADAAABAAAgehDIgBgbAhkgoIgCgDIAmgnIACABIAXATAglAhQgJgBgHgGQgJgIAAgLQAAgJAJgKQAAAAADgCQAIgEAHAAQAOAAAIAGQAIAKABAJQAAALgIAIQgCAFgDAAQgGACgHAAIAAAGIgHAAIAAgGIAAgCQgHgFgFgEQgHgHAAgIQAAgIAGgGQAIgFAJAAQAHAAAHAEQACABAAAAQAHAGAAAIQAAAIgHAHIAAAAQgGAJgHAAQgBAAgBAAIgFAAAhNgXIgXgRAhtgSQACgMAHgKAgyACIAhAAIAAAFIghAAgAgeAfIAAACAgaBtQgMgCgKgFQgCgCgFgDAgjBOQgNgFgLgKQgKgMgGgJAhfA+QgJgPgDgOAhOAhIgdAAAARABIAjAAIAAADIgjAAgABQgUQAEANAAAOQAAALgEAOAApBMQgFABgGADQgNAFgQAAQgOAAgNgDAAeBQIAAAcABNAmQgGANgMALQgJAJgJAFAA/BeIgWgSABtAfQgDAOgGAK");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AgZBxIAAgEIAAgbIgJgEIAJAEIAAAbQgNgCgKgFIgHgGIAVgSQgOgGgLgJIgQgVIgDgJIADAJIAQAVQALAJAOAGIgVASIgCAEIgogjIACgDQgJgPgDgOIAdAAQgEgMgBgPIAAgGQAAgJAEgJQgEAJAAAJIAAAGQABAPAEAMIgdAAIgEAAIgBgzIADAAQACgMAHgKIgCgDIAmgnIADABQACgBACgCQAFgBAFgFIABAAQAGgDAGgBIADAAIABAbIgBgbIAAgEIAJAAIAAgOIAnAAIAAAOIAIgBIAAAFIACAZIAHAEIAVgUIACgDIAOANQAEAEAEACQACAEAFAEIALAMIgCAAQAJAPAFAOIAEAAIAAAzIgEAAIgeABIAegBQgEAOgFAKIACABIglAoIgCgCIgXgSQAKgFAJgJQALgLAHgNQgHANgLALQgJAJgKAFIgKAEIAKgEIAXASIgNAHQgKAFgKACIAAgcQgOAEgPABQgNAAgNgDQANADANAAQAPgBAOgEIAAAcIAAAFgAhfA+IAUgUgABNAmIAXARIgXgRIACgGQAFgOAAgMQAAgMgFgOIAeAAIgeAAIgEgHQgHgNgJgJQgLgJgOgHQAOAHALAJQAJAJAHANIAEAHQAFAOAAAMQAAAMgFAOIgCAGIAAAAgAgeAnIAAgGIAAAGIgHAAIAAgGIAAgCIgMgJQgHgHAAgJQABgGAFgGQAIgGAJAAQAIAAAGAFIADABQAGAGAAAGQAAAJgGAHIgBAAQgGAJgHAAQAHAAAGgJIABAAQAGgHAAgJQAAgGgGgGIgDgBQgGgFgIAAQgJAAgIAGQgFAGgBAGQAAAJAHAHIAMAJIAAACQgIgBgHgGQgJgIAAgMIgBAAQAAgIAJgKIADgBQAIgFAIAAQANAAAIAGQAIALABAHQAAAMgIAIQgCAEgDABQgGACgHAAIAAgCIgCAAIgFAAIAFAAIACAAIAAACQAHAAAGgCQADgBACgEQAIgIAAgMQgBgHgIgLQgIgGgNAAQgIAAgIAFIgDABQgJAKAAAIIABAAQAAAMAJAIQAHAGAIABIAAAGIAHAAgAAgAmIAHAAIAAgGIAAgGIgHAAQgJAAgEgEQgHgJAAgHQAAgHAGgFQAHgIAIABQAKgBAHAIQAHAFAAAHQAAAHgHAJQgFAEgGAAQAGAAAFgEQAHgJAAgHQAAgHgHgFQgHgIgKABQgIgBgHAIQgGAFAAAHQAAAHAHAJQAEAEAJAAIAHAAIAAAGIAAAGIgHAAIAAgGIAAgGIAAAGQgLgCgHgFQgJgHAAgMQAAgHAJgLQAIgGAMAAQALAAAKAGQAGAJACAJQAAALgIAIQgHAFgJACQAJgCAHgFQAIgIAAgLQgCgJgGgJQgKgGgLAAQgMAAgIAGQgJALAAAHQAAAMAJAHQAHAFALACIAAAGgAgyAGIAiAAIAAgEIgiAAIAiAAIAAAEIgiAAIAAgEIAAAEgAAQAEIAjAAIAAgDIgjAAIAjAAIAAADIgjAAIAAgDIAAADgAhPgSIgeAAgAhPgSIACgEQAGgNAMgOQAJgIALgFIgWgTIAWATQgLAFgJAIQgMAOgGANIgXgSIAXASIgCAEgABLgbIAUgWgABWg9IgPgOgAgBhHQgPAAgOAEIgJAFIAJgFQAOgEAPAAQAPgBANADQgKgCgLAAIgHAAgAgWhMIAnAAIAAgWIAAAWIgnAAIAAgWIAAAWgAA/BegAgeAhgAhrAhgAAgAgIAAAAgABtAfIAAAAgAAihBIAAAAgAAbhFIgCgZQAQACAOAHIgVAUIgHgEg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AAphkIADgCIAnAmIgBACQABADACACQABAEAFAGIAAABQADAGABAFQAAADAAABIAEAAIAAAJIAOAAIAAAoIgOAAIgVAAIAAgoIAVAAAAThtIAAAdQACACADABIARgXAgghrIAAgEIAzgBIAAADQAMACAKAHAgeglQAFgHAEgFQAHgHAIAAQAIAAAGAGQAFAIAAAJQAAAHgEAHQgBACAAAAQgGAHgIAAQgIAAgHgHIAAAAQgJgGAAgHIgCAAIgGAAIAAgHIAGAAQABgJAGgHQAIgJALAAQAJAAAKAJQAAAAACADQAEAIAAAHQAAAOgGAIQgKAIgJABQgLAAgIgIQgFgCAAgDQgCgGAAgHAA/gnQADAEACAFIAbgBABEgeQAEANAAAQQABAPgDANQgCADgCAFIAUAUIADACIgNAOIgOAPIgLAMIgBgDQgOAJgPAFIAAAEIgzAAIAAgEIgBgdQgDgBgDgCQgNgGgLgMQgJgJgFgJQgBgFgDgGQgFgNAAgQQAAgOADgNQACgEACgFQAFgNAKgLQAMgKAJgGQAEgCAFgBQALgFAPAAQAOgBALAEABSg+IgTAXAAYhNQAMAGAOAMQAIAJAFALAhrAeIgFAAIAAg4IAEAAQACgMAFgKQACgCADgFIgDgCIAjgpIADADQAPgJAOgDAgghOIAAgdAhNgjIgTgUAgBgyIAAAhIgFAAIAAghgAgegeQAAgBAAgBIAAgFAggglIACAAAg9hfIAUAUAhsgaIAbAAAAAARIAAAjIgDAAIAAgjgAgZAgQAAgJAEgEQAIgHAHAAQAJAAAFAGQAHAHAAAJQAAAKgHAGQgFAHgJAAQgHAAgIgHQgEgEAAgHIgGAAIgGAAIAAgHIAGAAQABgLAFgHQAIgJALAAQAJAAAKAJQAGAJAAAMQAAALgGAJQgJAHgKABQgKAAgJgIQgFgHgBgJAgZAgIAAAHAgfAgIAGAAAg2BkIgBACIgpglIADgCIASgWAAVBQQgNAEgOAAQgLAAgOgEAgeBtQgOgDgKgGAglBNIgRAXAhdA/QgEgHgDgGQgFgJgCgLAhPAeIgcAAABjASIABAIIgFAAQgBAPgIAOABfAaIgZABAAyBfIgWgUQgEACgDADIAAAdABMBHQgEAEgCAFQgEACgEAEABCAjQgGANgKALQgJAJgNAH");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("AgeBxIAAgEIgBgeIABAeQgOgEgKgFIARgXIAGACIgGgCQgNgHgLgLQgJgJgFgKQAFAKAJAJQALALANAHIgRAXIgBACIgoglIACgCIgHgNQgFgKgCgKIAcAAQgEgOgBgPQAAgNADgNIgbAAIAbAAQgDANAAANQABAPAEAOIgcAAIgFAAIAAg3IAEAAQACgNAFgKIAGgHIgEgCIAjgoIADACIAUAUIgUgUQAPgJAOgDIAAgEIAzgBIAAADIAAAeIAAgeQAMACAKAHIADgCIAnAmIgBADQABACACACQABAFAFAFIAAABQADAGAAAGIABADIAEAAIAAAJIAOAAIAAAnIgOAAIgWAAIAAgnIAWAAIgWAAIAAAnIAWAAIABAIIgFAAIgZACQACgKAAgLIAAgHQAAgPgEgOIAbgBIgbABIgFgJIATgWIgTAWIAFAJQAEAOAAAPIAAAHQAAALgCAKIAZgCQgCAQgHAOIgUgVIAEgHIgEAHQgHAOgKALQgIAJgNAHQANgHAIgJQAKgLAHgOIAUAVIADACIgNAOIgOAPIgMALIgBgCIgVgUIAVAUQgOAJgOAFIAAgeIAHgEIgHAEQgOAFgMAAQgMAAgOgFQAOAFAMAAQAMAAAOgFIAAAeIAAAEgAglAnIAGAAQACAJAFAHQAIAIALAAQAJgCAJgGQAGgKAAgLQAAgMgGgIQgLgJgHAAQgMAAgHAJQgFAHgCALIgGAAIAAAHgAhdA/IASgXgAhLAoIgEgKIAEAKgAgegRQABADAEACQAIAIAMAAQAHgBALgIQAGgIAAgNQAAgIgFgIIgBgDIgBAAIAAgBIgCgBIAAAAQgIgGgGgBIgBAAIAAAAIAAAAIAAABQgMAAgIAJQgGAHgBAIIgGAAIAAAHIAGAAQAAAHACAGgAhRgZIAEgJQAGgOAJgLIAVgQIAJgDQAMgEAPgBIAFAAIAAAAIABAAQAHAAAHACIABABIABAAIACABIAEACIgEgCIgCgBIgBAAIgBgBQgHgCgHAAIgBAAIAAAAIgFAAQgPABgMAEIgJADIgVAQQgJALgGAOIgSgVIASAVIgEAJgAAXhNQANAGANAMQAJAJAFALQgFgLgJgJQgNgMgNgGIASgXIgSAXgAgghOIAAgdgABMBHQgEAEgCAEQgEACgEAFgABMBHIAAAAgAgYA3QgFgHgCgJIAGAAQAAAGAEAFQAIAHAIAAQAHAAAFgHQAIgHgBgKQABgIgIgHQgFgGgHAAQgIAAgIAHQgEAEAAAJIgGAAQACgLAFgHQAHgJAMAAQAHAAALAJQAGAIAAAMQAAALgGAKQgJAGgJACQgLAAgIgIgAgVAyQgEgFAAgGIAAgHQAAgJAEgEQAIgHAIAAQAHAAAFAGQAIAHgBAIQABAKgIAHQgFAHgHAAQgIAAgIgHgAgDAzIADAAIAAgjIgDAAIAAAjgAgDAzIAAgjIADAAIAAAjgAgZAnIgGAAIgGAAIAAgHIAGAAIAGAAIAAAHIAAAAgABCAigAgfAggABGAbIAAAAgAAAAQgAgZgMQgEgCgBgDQgCgGAAgHIACAAQAAAHAJAGIAAABQAHAGAJAAQAGAAAGgGIABgDQAFgGAAgIQAAgJgGgIQgGgFgGgBQgJAAgHAHIgJAMIgCAAQABgIAGgHQAIgJAMAAIAAgBIAAAAIAAAAIABAAQAGABAIAGIAAAAIACABIAAABIABAAIABADQAFAIAAAIQAAANgGAIQgLAIgHABQgMAAgIgIgAgVgQIAAgBQgJgGAAgHIAAgCIAAgFIAJgMQAHgHAJAAQAGABAGAFQAGAIAAAJQAAAIgFAGIgBADQgGAGgGAAQgJAAgHgGgAgFgQIAEAAIAAgiIgEAAIAAAigAgFgQIAAgiIAEAAIAAAigAgggeIgGAAIAAgHIAGAAIACAAIAAAFIAAACgAgegeIAAAAgAhNgigAgeglgAgBgyg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AA4hgIACgDIApAjIgDADIgUAUQACAEABAFQAFALAAAPQABAOgEALQgCACgBADQgGAMgMAOQgJAIgLAFQgEADgFACQgNAEgQAAQgPABgNgDQgDgCgFgCIgUAUIgCADIgOgNQgEgEgFgCQgCgEgEgEIgMgLIADgBIAUgWQgCgEgDgDQgEgNAAgOQAAgLAEgOQABgDACgDIgXgRIgCgBIAlgpIACADQAHgEAGgDQAJgFALgCIAAgFIA4AAIAAAEIAAAbQAEACAFACQANAFALAKQAKAMAGAJAAbhsQAMACAKAFQACACAFADAAfggIAAgGIAHAAIAAAGQAJABAHAGQAJAIAAALQAAAJgJAKQAAAAgDACQgIAEgHAAQgOAAgIgGQgIgKgBgJQAAgLAIgIQACgFADAAQAGgCAHAAgAAmgeQAHAFAFAEQAHAHAAAIQAAAIgGAGQgIAFgJAAQgHAAgHgEQgCgBAAAAQgHgGAAgIQAAgIAHgHIAAAAQAGgJAHAAQABAAABAAgAAzgBIghAAIAAgFIAhAAgAAmggIAAACAAfgeIAAgCAAkhNIAUgTABsggIAEAAIABAzIgDAAIgdAAABPggIAdAAABgg9QAJAPADAOAhsAVIgEAAIAAgzIAEAAQADgOAGgKAgdhPIAAgcAgohLQAFgBAGgDQANgFAQAAQAOAAANADAgfgfQALABAHAFQAJAIAAALQAAAJgJAKQgJAGgMAAQgLAAgJgGQgHgJgBgKQAAgKAIgJQAHgFAJgBIAAgGIAHAAIAAAGIAAAGIgHAAAgQAAIgjAAIAAgDIAjAAgAgfgZQAJAAAEAEQAHAIAAAHQAAAJgGAFQgHAHgJAAQgKAAgGgHQgHgFAAgJQAAgHAHgIQAEgEAHAAIAAgGAhMglQAGgNAMgLQAJgJAJgFAg+hdIAWASAhsgeIAdgBAgiBCQgNgGgLgKQgJgJgHgNAhGBMIgPgOAgZBfIgBgZAgRBjIAAgVIAoAAIAAAVIAAAOIgoAAIAAgOIgIABIAAgFQgPgBgOgIAhPAVIgdAAAheAyQgJgOgFgPABOAYIAXARIACADIgmAnIgCgBIgXgTAA/BSQgDABgCACQgEABgGAFIgBAAQgGADgFABQgDAAgBAAIAAAEIgJAAAAfBEIABAbABuATQgCAMgHAK");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AgQBxIAAgOIgIABIAAgFIgCgZQANADAPgBQAPAAAOgEIAAAbIAAAEIgIAAIAAgWIgnAAIAAAWIAAgWIAnAAIAAAWIAAAOgAAfBEQgOAEgPAAQgPABgNgDIACAZQgQgCgOgHIAVgUIAHAEIgHgEQgOgHgLgKQgJgIgHgNQAHANAJAIQALAKAOAHIgVAUIgCADIgOgNIgPgOIgLgMIACgBQgJgOgFgOIAeAAIAEAHIgUAVIAUgVIgEgHQgFgOAAgMQAAgMAFgOIACgGIgCAGQgFAOAAAMQAAAMAFAOIgeAAIgEAAIAAgzIAEAAIAegBIgeABQAEgOAFgKIgCgBIAlgoIACACIANgHQAJgFALgCIAAgFIA3AAIAAAEQANACAKAFIAHAGIACgEIAoAjIgCADQAJAPADAOIgdAAIAdAAIAEAAIABAzIgDAAIgeAAIAeAAQgCAMgHAKIgXgSIACgEIgCAEQgGANgMANQgJAJgLAFIgJAFIAJgFIAWATQgCABgCACQgFABgFAFIgBAAQgHADgFAAIgEABgABQATQAEgJAAgKIAAgFQgBgPgEgMIgDgJIAUgUIgUAUIgQgVQgLgJgOgGIAVgSIgVASQAOAGALAJIAQAVIADAJQAEAMABAPIAAAFQAAAKgEAJgAAEgFQACAHAIALQAIAGANAAQAIAAAIgFIADgBQAJgKAAgIIgBAAQAAgMgJgIQgHgGgIgBIAAgGIgHAAIAAAGQgHAAgGACQgDABgCAEQgIAIgBAMIAAAAgAg+gFQACAJAGAJQAKAGALAAQAMAAAIgGQAJgLAAgHQAAgMgJgHQgHgFgLgCIAAgGIgHAAIAAAGQgJACgHAFQgIAIAAALIAAAAgAhMglQAHgNALgLQAJgJAJgFIALgEIgLAEIgWgSIAWASQgJAFgJAJQgLALgHANIgXgRgAAahRIAJAEIgJgEIAAgbIAAAbgAgdhPQAOgEAPgBQANAAANADQgNgDgNAAQgPABgOAEIAAgcIAAAcIAAAAgAA+BSIgWgTQALgFAJgJQAMgNAGgNIAXASIACADIgmAngAA+BSgAhOBGQgCgEgFgEIAPAOQgEgEgEgCgAghBCIAAAAgAhVA+gABuATgAAOANQgIgLgCgHQABgMAIgIQACgEADgBQAGgCAHAAIAAACQgHAAgGAJIgBAAQgGAHAAAJQAAAGAGAGIADABQAGAFAIAAQAJAAAIgGQAFgGABgGQAAgJgIgHIgLgJIAAgCQAIABAHAGQAJAIAAAMIABAAQAAAIgJAKIgDABQgIAFgIAAQgNAAgIgGgAg2ANQgGgJgCgJQAAgLAIgIQAHgFAJgCIAAAGQgGAAgFAEQgHAIAAAIQAAAHAHAFQAHAIAKgBQAIABAHgIQAGgFAAgHQAAgIgHgIQgEgEgJAAIAAgGQALACAHAFQAJAHAAAMQAAAHgJALQgIAGgMAAQgLAAgKgGgAgxAHQgHgFAAgHQAAgIAHgIQAFgEAGAAIAHAAQAJAAAEAEQAHAIAAAIQAAAHgGAFQgHAIgIgBQgKABgHgIgAgyAAIAjAAIgjAAIAAgDIAjAAIAAADIAAgDIgjAAIAAADgAAUAIIgDgBQgGgGAAgGQAAgJAGgHIABAAQAGgJAHAAIACAAIAFAAIALAJQAIAHAAAJQgBAGgFAGQgIAGgJAAQgIAAgGgFgAARgBIAiAAIgiAAIAAgEIAiAAIAAAEIAAgEIgiAAIAAAEgAgmgZIAAgGIAAgGIAHAAIAAAGIAAAGgAAmgeIgFAAIgCAAIAAgCIAAgGIAHAAIAAAGIAAACIAAAAgAgfgfIAAAAgAgmgfgAAfgggAgohLgAAjhNIAAAAgAgdhPg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AA3hjIABgCIApAlIgDACIgSAWQABAFADAGQAFANAAAQQAAAOgDANQgCAEgCAFQgFANgKALQgMAKgJAGQgEACgFABIAAAdIAAAEIgzABIAAgDIAAgdQgCgCgDgBIgRAXIgDACIgngmIABgCQgBgDgCgCQgBgEgFgGIAAgBQgDgGgBgFQAAgDAAgBIgEAAIAAgJIgOAAIAAgoIAOAAIgBgIIAFAAIAZgBQACgDACgFIgUgUIgDgCIANgOQAEgEACgFQAEgCAEgEIALgMIABADQAOgJAPgFIAAgEIAzAAIAAAEIABAdQADABADACQANAGALAMQAJAJAFAJAgUhPQANgEAOAAQALAAAOAEAAggfIgGAAIAAgHIAGAAIAGAAIAAAHIgGAAQgBALgFAHQgIAJgLAAQgJAAgKgJQgGgJAAgMQAAgLAGgJQAJgHAKgBQAKAAAJAIQAFAHABAJAABgQIAAgjIADAAIAAAjgAAagfQAAAJgEAEQgIAHgHAAQgJAAgFgGQgHgHAAgJQAAgKAHgGQAFgHAJAAQAHAAAIAHQAEAEAAAHAAfhsQAOADAKAGAAmhMIARgXABeg+QAEAHADAGQAFAJACALIAFAAIAAA4IgEAAQgCAMgFAKQgCACgDAFIADACIgjApIgDgDIgUgUABQgdIAcAAAgbhKQAEgCADgDIAAgdAgxheIAWAUAhLhGIAOgPAhigRIAVAAIAAAoIgVAAAhegZQABgPAIgOAhBgiQAGgNAKgLQAJgJANgHAAhAmQgBAJgGAHQgIAJgLAAQgJAAgKgJQAAAAgCgDQgEgIAAgHQAAgOAGgIQAKgIAJgBQALAAAIAIQAFACAAADQACAGAAAHIAGAAIAAAHIgGAAIgCAAQgFAHgEAFQgHAHgIAAQgIAAgGgGQgFgIAAgJQAAgHAEgHQABgCAAAAQAGgHAIAAQAIAAAHAHIAAAAQAJAGAAAHIACAAAg+AoQgDgEgCgFIgbABAhDAfQgEgNAAgQQgBgPADgNAgSBuQgMgCgKgHAhRA/IATgXAgXBOQgMgGgOgMQgIgJgFgLABOAkIATAUAACAzIAAghIAFAAIAAAhgAAfAfQAAABAAABIAAAFAAhBPQgLAFgPAAQgOABgLgEAA+BgQgPAJgOADABtAbIgbAA");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003300").s().p("AgSBuIAAgeIgEgCQgNgGgOgMQgIgJgFgLIgFgJQgEgOAAgPIAAgHQAAgLACgKQgCAKAAALIAAAHQAAAPAEAOIgbAAIAbAAIAFAJQAFALAIAJQAOAMANAGIAEACIAAAeQgMgCgKgHIASgXIgSAXIgDACIgngmIABgDQgBgCgCgCQgBgFgFgFIAAgBQgDgHgBgFIAAgEIgEAAIAAgIIgOAAIAAgnIAOAAIgBgIIAFAAIAZgCIgZACQACgQAHgOIAUAVIgUgVIgDgCIANgOIAOgPIAMgLIAAACQAPgJAOgFIAAAeQAOgFAMAAQAMAAAOAFIAGACQANAHALALQAJAJAFAJQgFgJgJgJQgLgLgNgHIARgXIgRAXIgGgCIgBgeQAOAEAKAFIABgCIAoAlIgCACIgSAWIAEALQAEAOABAPQAAANgDANQADgNAAgNQgBgPgEgOIAcAAIgcAAIgEgLIASgWIAHANQAFAJACALIAFAAIAAA3IgEAAIgbAAIAbAAQgCANgFAKIgGAHIAEACIgjAoIgDgCIgUgUIAUAUQgPAJgOADIAAgdIAJgDIAVgQQAJgLAGgOIASAVIgSgVIAEgJIgEAJQgGAOgJALIgVAQIgJADQgMAEgPABIgGAAIAAAAIAAAAQgHAAgHgCIgBgBIgBAAIgCgBIACABIABAAIABABQAHACAHAAIAAAAIAAAAIAGAAQAPgBAMgEIAAAdIAAAEIgzABgAAGA/IAAAAIAAgBQAMAAAIgJQAGgHABgIIgCAAIAAgFIAAgCIACAAIAGAAIAAAHIgGAAIAGAAIAAgHIgGAAIgCAAIAAACIAAAFIgJALQgHAIgJAAQgGgBgGgFQgGgIAAgJQAAgIAFgGIABgDQAGgGAGAAQAJAAAHAGIAAABQAJAGAAAHQAAgHgJgGIAAgBQgHgGgJAAQgGAAgGAGIgBADQgFAGAAAIQAAAJAGAIQAGAFAGABQAJAAAHgIIAJgLIACAAQgBAIgGAHQgIAJgMAAIAAABIAAAAIAAAAIgBAAQgGgBgIgGIAAAAIgCgBIgBgBIgBgDQgFgIAAgIQAAgNAGgIQALgIAHgCQAMABAIAIQAEACABADQACAGAAAHQAAgHgCgGQgBgDgEgCQgIgIgMgBQgHACgLAIQgGAIAAANQAAAIAFAIIABADIABABIACABIAAAAQAIAGAGABIABAAIAAAAgAhRA+IATgWgAAGAzIAAgiIgEAAIAAAigAhMAXIAAgnIgWAAIAWAAIAAAnIgWAAgAgSghQAAAMAGAIQALAJAHAAQAMAAAHgJQAFgHACgLIAGAAIAAgHIgGAAQgCgJgFgHQgIgIgLAAQgJACgJAGQgGAKAAALIAAAAgAgbhKQgNAHgJAJQgJALgHAOIgEAHIAEgHQAHgOAJgLQAJgJANgHIAHgEIgHAEgAgbhKIgWgUgAA+BggAACAzIAAgiIAEAAIAAAigAACAzgABOAjgAhDAfIAAAAgABtAagAgMgNQgGgIAAgMQAAgLAGgKQAJgGAJgCQALAAAIAIQAFAHACAJIgGAAQAAgGgEgFQgJgHgHAAQgHAAgFAHQgIAHABAKQgBAIAIAHQAFAGAHAAQAHAAAJgHQAEgEAAgJQAAAJgEAEQgJAHgHAAQgHAAgFgGQgIgHABgIQgBgKAIgHQAFgHAHAAQAHAAAJAHQAEAFAAAGIAAAHIAGAAQgCALgFAHQgHAJgMAAQgHAAgLgJgAAEgPIAAgjIgDAAIAAAjgAABgPIAAgjIADAAIAAAjgAABgPgAAggfIgGAAIAAgHIAGAAIAGAAIAAAHgAAggfgAhFhOQAEgCAEgFIgOAPQAEgEACgEgAAmhMIAAAAgAAGhTQgMAAgOAFIAAgeIAAgEIAzAAIAAAEIABAeQgOgFgMAAgAg9hVgAAfhsIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-12.2,24.5,24.5);


(lib.Tank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tu:0,tr:1,td:2,tl:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AD6jTIgeAAACRjTIBFAAIAGABIgcAPIgvAYIAAD7IA8AAIAAATIAAATIAAAUIAAATIAAAUIg8AAIAAAPIkiAAIAAgPIg7AAIAAgUIAAgTIAAgUIAAgTIAAgTIA7AAIAAATIAAATIAAAUIg7AAACRjmIAAgTIBpAAIAAAmIAAGyIAAAbIhaAAIlAAAIhZAAIAAgbIAeAAIA7AAIAAAbADfDfIAbAAADcDcIAAADIADAAADcDcIADADACgD6IAAgbIA8AAADcjSIAAGuACRjTIAAgTABehpQgOAAgJgHQgKgHAAgKQAAgKAKgHQALgHAQAAQAPAAALAHQALAHAAAKQAAAKgLAHQgJAGgMABIAAAFIgJAAIAAgFIAAgFQgKgBgIgEQgIgGAAgIQAAgIAIgFQAJgGANAAQAMAAAJAGQAIAFAAAIQAAAIgIAGQgHAEgJABIAAAFABJi3IArAAIAAAEIgrAAgABMiHIAsAAIAAAEIgsAAgAiSipIEeAAIAFgCABehuIAJAAAj5jTIAAgmIBoAAIAAATIEiAAAiRjTIAAgTAhkhpQgMgBgJgGQgLgHAAgKQAAgKALgHQACgBADgBQAJgFAMAAQAQAAAKAHQAKAGABAIQAAACAAABQAAACAAABQgBAIgKAGQgDACgDABQgHAEgJAAIAAAFIgJAAIAAgFIAAgFIACAAQgKAAgHgFQgJgGAAgIQAAgIAJgFQAIgGAMAAQALAAAJAFQABAAAAABQAJAFAAAIQAAAIgJAGQAAAAgBABQgHADgJABIAAAFAh3i3IAtAAIAAAEIgtAAgAh2iHIAtAAIAAAEIgtAAgAjXjTIgEAAIgeAAAjXjTQASAKARALQAEACAFAEQADABADACIATAMAhbhuQgBAAgCAAIgEAAAiRjTIhGAAAhwBZIAOAAIAABNIgOAAIgPAAIAAhNgAhEBZIANAAIAABNIgPAAIgNAAIgPAAAhhBZIAOAAIANAAIAABNAjbDcIAAADAiRCdIAAAUAiRCdIAAgTAhwCmIAAhNAhTBZIAABNAjbDcIBKgcAiRBjIg7AAAjMCdIA7AAAiRB2Ig7AAABMBZIAOAAIANAAIAABNIgNAAIgPAAAA9BZIAOAAIAABNIgOAAIgPAAIgPAAIgPAAIgMAAIgOAAIgPAAIgPAAIAAhNIAPAAIAPAAIAABNACRBjIAAgTABpBZIANAAAB3BZIAPAAIAABNIgPAAgACRBjIAAATAAfBZIAPAAIAPAAIAABNAASBZIANAAIAABNAAEBZIAMAAIAABNAgKBZIAOAAIAABNACRCxIAAgUAB2CmIgPAAACRCKIAAATACRCKIAAgUABaBZIAABNAAuBZIAABNAgZCmIAAhNAiRBQIgBj5AgoCmIgPAAAg3BZIAPAAAjbjTIAAGvACRjTIkiAAAj5DfIAAmyACRDAIBLAcADNB2Ig8AAADNCKIg8AAACRBjIA8AAADNCdIg8AA");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AB0AmIAAhLIAPAAIAABLgABkAmIAAhLIAABLIgNAAIAAhLIANAAIACAAIANAAIAABLgABIAmIAAhLIABAAIAOAAIAABLgAA5AmIAAhLIAPAAIAABLgAArAmIAAhLIAOAAIAABLgAAcAmIAAhLIAPAAIAABLgAANAmIAAhLIAABLIgMAAIAAhLIAMAAIACAAIANAAIAABLgAABAmIgOAAIAAhLIAAAAIAOAAIAABLgAgcAmIAAhLIAPAAIAABLgAgrAmIAAhLIAPAAIAABLgAg6AmIgPAAIAAhLIAABLIgNAAIAAhLIAABLIgPAAIgOAAIAAhLIAOAAIAABLIAAhLIABAAIAOAAIANAAIACAAIANAAIAABLIAAhLIAPAAIAABLgAiCAmIAAhLIAPAAIAABLgAAcglgAgcglg");
	this.shape_1.setTransform(25.3,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ACRAxIAAgUIAAgTIAAgTIAAgUIAAgTIA8AAIAAATIg8AAIA8AAIAAAUIg8AAIA8AAIAAATIg8AAIA8AAIAAATIg8AAIA8AAIAAAUgAjMAxIAAgUIAAgTIA7AAIAAATIg7AAIA7AAIAAAUgAjMAKIAAgTIA7AAIg7AAIAAgUIA7AAIg7AAIAAgTIA7AAIAAATIAAAUIAAATgADNgdg");
	this.shape_2.setTransform(25,37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKACIAAgDIAsAAIAAADgAh1ACIAAgDIAtAAIAAADg");
	this.shape_3.setTransform(24.8,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("ACgD6IAAgbIA8AAIg8AAIAAAbIlAAAIAAgbIg7AAIAAgDIBKgcIAAgPIAAAPIhKAcIAAADIgeAAIAAmxIAeAAIAEAAIgEAAIgeAAIAAgnIBoAAIAAATIAAAUIEiAAIBFAAIAGAAIgcAQIAcgPIAAgBIgGAAIhFAAIAAgUIAAgTIBpAAIAAAnIAAGxIgbAAIAbAAIAAAbgADfDfIgDgCIAAmuIAAGuIhLgdIkiAAIEiAAIBLAdIAAACIADAAgAjbDcIAAmugACRBiIAAAUIAAAUIAAATIAAAUIAAAPIAAgPIA8AAIAAgUIAAgTIAAgUIAAgUIAAgTIg8AAIAAj6IAAD6gAjMBiIAAAUIAAAUIAAATIAAAUIA7AAIAAgUIAAgTIAAgUIAAgUIAAgTIgBj4IABD4Ig7AAgAB3CmIAPAAIAAhNIgPAAgABMCmIAOAAIANAAIAPAAIAAhNIgNAAIgCAAIgNAAIgNAAIgBAAgAgnCmIAOAAIAPAAIAOAAIAMAAIAQAAIAOAAIAOAAIAPAAIAAhNIgPAAIgOAAIgOAAIgOAAIgCAAIgMAAIgOAAIAAAAIgPAAIgOAAgAh/CmIAQAAIANAAIAPAAIANAAIAPAAIAPAAIAAhNIgPAAIgMAAIgDAAIgNAAIgOAAIgBAAIgNAAIgQAAgABnhkIAAgFIAAAFIgJAAIAAgEIAAgGQgKgBgHgEQgKgGABgHQgBgJAKgFQAIgGAMABQANgBAJAGQAIAFAAAJQAAAHgIAGQgHAEgJABIgJAAIAJAAIAAAFQAMgBAJgFQALgIAAgJQAAgKgLgIQgLgHgQAAQgPAAgLAHQgLAIAAAKQAAAJALAIQAKAGANABQgNgBgKgGQgLgIAAgJQAAgKALgIQALgHAPAAQAQAAALAHQALAIAAAKQAAAJgLAIQgJAFgMABIAAgFQAJgBAHgEQAIgGAAgHQAAgJgIgFQgJgGgNABQgMgBgIAGQgKAFABAJQgBAHAKAGQAHAEAKABIAAAGIAAAEIAJAAgAhkhkIAJAAIAAgEQAJgBAIgEIAGgCQAJgHACgIIAAgCIAAgDQgCgJgJgGQgLgHgPAAQgNAAgJAFIgFACQgLAIAAAKQAAAJALAIQAJAFAMABIAAAFgABNiDIAsAAIAAgEIgsAAIAsAAIAAAEIgsAAIAAgEIAAAEgACNipIAEgCIgEACIkfAAIEfAAgAiki1IASAMIgSgMIgHgDIgJgGIgjgUIBGAAIhGAAIAjAXIAJAGQADACAEgCIAAAAgACRirIAvgXgABIizIAsAAIAAgDIgsAAgAh2izIAsAAIAAgDIgsAAgAD6jSIgeAAgAigD6IhZAAIAAgbIAeAAIA7AAIAAAbgADfDfgADcDfIAAgCIADACgAjbDfgADcDdgADcDdgAhkhkIAAgFIAAgFIACAAIgCAAIAAAFQgMgBgJgFQgLgIAAgJQAAgKALgIIAFgCQAJgFANAAQAPAAALAHQAJAGACAJIAAADIAAACQgCAIgJAHIgGACQgIAEgJABIAAgGQAJgBAIgDIAAgBQAKgGgBgHQABgJgKgFIAAgBQgKgFgKABQgMgBgJAGQgJAFAAAJQAAAHAJAGQAHAFAKAAQgKAAgHgFQgJgGAAgHQAAgJAJgFQAJgGAMABQAKgBAKAFIAAABQAKAFgBAJQABAHgKAGIAAABQgIADgJABIgCAAIgFAAIAFAAIACAAIAAAGIAAAEgAhJiDIAAgEIgtAAIAtAAIAAAEIgtAAIAAgEIAAAEIAtAAgABnhpgABnhugAhbhuIAAAAgAiRjSIAAgUIEiAAIAAAUgACRjSgACRjmg");
	this.shape_4.setTransform(25,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("ADUjXIAAgEIAAgeIAmAAIAABoIgTAAIAAEiIATAAIAABpIgmAAIAAgeIgCAAImuAAIgCAAIAAADIAAAbIgbAAIAAhaIAbAAIAAA8ADUiRIATAAADUiRIAAhGIgvBGIAAEiIAtBLAC0h2IAAAtIgDAAIAAgtgAC0BMIAAAsIgDAAIAAgsgADUCRIATAAADUDcIAAhLIAAkiACHh2IAAAtIgDAAIAAgtgABvhkQAAgJAFgGQAGgJAIAAQAIAAAFAJQAGAIAAAMQAAALgFAJQAAABgBAAQgFAJgIAAQgIAAgGgJQAAAAgBgBQgEgHAAgJQAAgBAAgCgABqhkQAAgMAHgJQAHgLAKAAQAKAAAHALQABACABADQAFAJAAAMQAAAQgHAKQgHAKgHABQgCAAgBAAQgCAAgBAAQgIgBgGgKQgCgDgBgDQgEgHgBgJABqhkIAFAAABvhbIgGAAIgEAAIAAgJIAFAAAiJjMIAUAAIATAAIATAAIAAA7IgTAAIgTAAIgUAAgAhiiRIAAg7Ah1iRIAAg7AiviRIAAg7IATAAIAAA7gAjej5IAAAeAj5igIAAhZIAbAAIGyAAAjbjbIgDAAIAAA7IgbAAAi/iRIAQAAAjbjbIAcBKAilhTIAAgPIAAgOIBNAAIAAAOIhNAAAilhGIAAgNAilgKIAAgPIAAgPIBNAAIAAAPIAAAPgAilgoIAAgPIAAgPAhYhTIAAANIhNAAAhYhhIAAAOIhNAAAhYg3IAAAPAhYhEIAAANIhNAAAicjMIATAAAiciRIATAAAilgZIBNAAAilhwIAAgPIBNAAIAAAPAhYASIAAANIAAAPIAAAPIAAAOIhNAAIAAgOIAAgPIAAgPIAAgPIAAgMIAAgOAhYAEIAAAMIhNAAAhYBpIAAANAhYBMIAAAOIAAANIhNAAAilB2IAAgPIAAgNIAAgPAivCRIgQAAIgdBLIgCADAivCRIATAAAicDNIgTAAIAAg8AicDNIAAg8AiJCRIAUAAAhiCRIgTAAAh1DNIgUAAIAAg8IgTAAAhiDNIgTAAIAAg8AhiCRIAAA8AhPCRIAAA8IgTAAAhiCRIATAAAhYA9IhNAAAhYAEIhNAAAhYBaIhNAAAhYAuIhNAAAhYAfIhNAAAiJDNIgTAAAhYB3IAAAPIhNAAIAAgPgABqBnIgFAAIAAgJIAEAAQABgOAHgJQAHgKAKAAQAKAAAHAKQAHALAAAQQAAAPgHALQgHALgKAAQgKAAgHgLQgHgJAAgMgACHBMIAAAsIgDAAIAAgsgABvBeQAAgKAFgIQAGgIAIAAQAIAAAFAIQAGAJAAANQAAAMgGAJQgFAIgIAAQgIAAgGgIQgFgHAAgJIgFAAABpBeIAGAAIAAAJAhYgKIAAAOAi/CRIAAkiAj5CgIAAlAAClCRIj0AAAhPiRID0AAADUD6ImyAAADUjbImvAA");
	this.shape_5.setTransform(25,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAdDNIgTAAIAAg8IAAA8IgTAAIAAg8IAAA8IgTAAIAAg8IATAAIATAAIATAAIAAA8IAAg8IATAAIAAA8gAgvDNIAAg8IATAAIAAA8gAgcCRgAAdiRIgTAAIAAg7IAAA7IgTAAIAAg7IATAAIATAAIAAA7IAAg7IATAAIAAA7gAgJiRIgTAAIAAg7IATAAIAAA7gAgviRIAAg7IATAAIAAA7gAgcjMg");
	this.shape_6.setTransform(12.2,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgmCDIAAgPIBNAAIAAAPgAgmBzIAAgPIAAgNIAAgPIBNAAIAAABIAAAOIhNAAIBNAAIAAANIhNAAIBNAAIAAACIAAANgAAnBXgAgmBIIAAgPIAAgOIAAgPIAAgPIAAgMIAAgOIBNAAIAAAAIAAAOIhNAAIBNAAIAAAMIhNAAIBNAAIAAACIAAANIhNAAIBNAAIAAAPIhNAAIBNAAIAAAOIhNAAIBNAAIAAAPgAgmgNIAAgPIAAgPIBNAAIAAAPIhNAAIBNAAIAAAPgAgmgrIAAgPIBNAAIAAAPgAgmg6IAAgPIBNAAIAAACIAAANgAgmg6gAgmhJIAAgNIBNAAIAAANgAgmhJgAgmhWIAAgPIAAgOIBNAAIhNAAIAAgPIBNAAIAAAPIAAAOIhNAAIBNAAIAAABIAAAOg");
	this.shape_7.setTransform(12.3,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBB4IAAgsIADAAIAAAsgAgBhKIAAgtIADAAIAAAtg");
	this.shape_8.setTransform(42.8,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003300").s().p("ADUD6IAAgeIAAhLIAABLIgBAAIABAAIAAAeImxAAIAAgbIAAAbIgcAAIAAhaIAcAAIAAA8IAAg8IgcAAIAAlAIAcAAIAAg7IADAAIgDAAIAAgeIGxAAIAAAeImuAAIAbBKIAQAAIgQAAIgbhKIGuAAIAAAEIgvBGIAvhGIAAgEIAAgeIAmAAIAABoIgTAAIAAEiIATAAIAABpgAjdDfIACgDIgCAAIAAADgADTDcImuAAgAClCRIAuBLIguhLIj0AAIgTAAIgTAAIgUAAIgTAAIgTAAIgQAAIAAkiIAAEiIgcBLIAchLIAQAAIAAA8IATAAIATAAIAUAAIATAAIATAAIAAg8gADUCRIATAAIgTAAIAAkiIATAAIgTAAIAAhGIAABGIAAEigAClCRIAAkiIj0AAIAAg7IgTAAIgTAAIgUAAIgTAAIgTAAIAAA7IATAAIATAAIAUAAIATAAIATAAID0AAgABxB8QAHALAKAAQAJAAAIgLQAHgLAAgQQAAgPgHgLQgIgLgJAAQgKAAgHALQgHAKgBANIgEAAIAAAJIAFAAIgFAAIAAgJIAEAAIAGAAIAAAJQAAAJAFAHQAGAIAIAAQAHAAAGgIQAFgJABgNQgBgMgFgIQgGgKgHABQgIgBgGAKQgFAHAAAKIgGAAQABgNAHgKQAHgLAKAAQAJAAAIALQAHALAAAPQAAAQgHALQgIALgJAAQgKAAgHgLQgHgJAAgMIAFAAIgFAAQAAAMAHAJgAilCGIBNAAIAAgPIhNAAgACxB5IADAAIAAgsIgDAAgAilBaIAAANIAAAPIBNAAIAAgNIAAgCIAAgNIAAgNIAAgBIhNAAgAilgZIAAAPIAAAOIAAAMIAAAQIAAAOIAAAOIAAAPIBNAAIAAgPIAAgOIAAgOIAAgOIAAgCIAAgMIAAgOIAAAAIAAgPIAAgOIhNAAgAilhvIAAANIAAAPIAAANIAAAPIAAAPIBNAAIAAgPIAAgMIAAgDIAAgNIAAgOIAAgBIAAgNIAAgQIhNAAgABthKIAEAGQAFAJAJACIADAAIADAAQAIgCAGgJQAHgLAAgPQAAgNgFgJIgCgFQgIgLgJAAQgKAAgHALQgHAJAAAMIAFAAIAAAHIAAACIgGAAIgEAAIAAgJIAFAAIgFAAIAAAJIAEAAIAGAAQAAAJAEAIIABAAQAGAKAIgBQAHABAGgKIABAAQAEgKABgKQgBgMgFgJQgGgJgHAAQgIAAgGAJQgFAGAAAJIgFAAQAAgMAHgJQAHgLAKAAQAJAAAIALIACAFQAFAJAAANQAAAPgHALQgGAJgIACIgDAAIgDAAQgJgCgFgJIgEgGQgDgIgBgJQABAJADAIgACxhJIADAAIAAgtIgDAAgAjdDfgAjdDcIACAAIgCADgAi/CRgAB0B3QgFgHAAgJIAAgJQAAgKAFgHQAGgKAIABQAHgBAGAKQAFAIABAMQgBANgFAJQgGAIgHAAQgIAAgGgIgACEB5IADAAIAAgsIgDAAIAAAsgACEB5IAAgsIADAAIAAAsgACHBNgAB0hKIgBAAQgEgIAAgJIAAgCIAAgHQAAgJAFgGQAGgJAIAAQAHAAAGAJQAFAJABAMQgBAKgEAKIgBAAQgGAKgHgBQgIABgGgKgACEhJIADAAIAAgtIgDAAIAAAtgACEhJIAAgtIADAAIAAAtgACHh2gAj5igIAAhZIAcAAIAAAeIAAA7gAjdjbgADUj5g");
	this.shape_9.setTransform(25,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,1,1).p("ADcjbIAAgDIg8AAIAAgbIBaAAIAAAbIgeAAACRivIA8AAIAAATIAAATIAAAUIAAATIAAATIg8AAIAAgTIAAgTIAAgUIA8AAADcDUIAeAAIAAAmIhoAAIAAgTIkjAAIAAATIhoAAIAAgmIAeAAIAAgCIAAmuIgDgCIgbAAIAAgbIBZAAIAAAbIg7AAIgDAAADXDUIAFAAIAAmvIhLAcIAAAQAD6jeIAAGyAA4ilIAOAAIAOAAIAPAAIAOAAIAPAAIAABNIgPAAIgOAAIAAhNACRicIAAgTACRicIAAATAgDilIAOAAIAPAAIAPAAIAABNIgPAAIgPAAIAAhNAgtilIAPAAIAPAAIAMAAAgRhYIgNAAIgPAAIAAhNAgDhYIgMAAIAAhNAALhYIgOAAIAAhNABFhYIgNAAIAAhNABihYIgOAAIgOAAIAAhNABUhYIAAhNABxilIAABNAgehYIAAhNAAailIAABNAApilIAPAAAA4hYIgPAAAiRiJIAAgTAiRivIAAATAiRivIAAgQIhKgdIAAgCAh1ilIAPAAIAMAAIAPAAAh2hYIgPAAIAAhNIAPAAgAg8hYIgOAAIAAhNIAOAAIAPAAAjNiJIAAgTIAAgTIA8AAAjNhiIAAgTIAAgUIA8AAIAAAUAiRhPIg8AAIAAgTAhLhYIgPAAIgMAAIAAhNAiRhiIAAATAiRhiIAAgTAhphYIgMAAAg8hYIAAhNAhahYIAAhNAjNh1IA8AAAiRhiIg8AAAjNicIA8AAAhdBvQAKAAAIAFQAIAGAAAIQAAAIgIAFQgJAGgNAAQgMAAgJgGQgIgFAAgIQAAgIAIgGQAHgFAJAAIAAgFAhdBpQANABAKAHQAKAHAAAKQAAAKgKAHQgLAHgQAAQgPAAgLgHQgLgHAAgKQAAgKALgHQAJgHAMAAIAAgFIAJAAIAAAEIAAAGIgJAAAhLC0IgtAAIAAgDIAtAAgAhLCHIgtAAIAAgDIAtAAgAiRDUIAAATAjbDUIBKAAIEjAAIAAATAiRClIhKAtABlBvQAJABAGAEQAJAGAAAIQAAAIgJAFQgIAGgNAAQgKAAgKgFQAAAAAAgBQgJgFAAgIQAAgIAJgGQAAAAAAgBQAIgEAJAAIAAgGIAAgEIAJAAIAAAFQAMAAAJAHQALAHAAAKQAAAKgLAHQgCABgDABQgJAFgNAAQgPAAgKgHQgKgHgBgHQAAgCAAgBQAAgCAAgBQABgIAKgGQADgCACgBQAIgEAJgBABlBqIAAAFABcBvQABAAACAAIAGAAAB3C0IgtAAIAAgDIAtAAgAB3CHIgtAAIAAgDIAtAAgAj5DUIAAmyAgthYIgPAAAiRi/IEiAAAiRClIAAj0ACRClIkiAAACRhPIAAD0ADXDUIhGgvACSDUIBFAAACRhiIA8AAACRh1IA8AAADNicIg8AAAigj5IFAAA");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("ACSAwIAAgTIAAgTIAAgTIAAgTIAAgTIA7AAIAAATIg7AAIA7AAIAAATIg7AAIA7AAIAAATIg7AAIA7AAIAAATIg7AAIA7AAIAAATgAjMAwIAAgTIA8AAIAAATgAjMAdIAAgTIA8AAIg8AAIAAgTIA8AAIAAATIAAATgAjMgJIAAgTIAAgTIA8AAIAAATIg8AAIA8AAIAAATgADNgcgAiQgcg");
	this.shape_11.setTransform(25,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AB0AnIAAhNIAPAAIAABNgABmAnIAAhNIAOAAIAABNgABlAnIgOAAIAAhNIAABNIgNAAIAAhNIAABNIgCAAIgNAAIAAhNIAPAAIANAAIAPAAIAABNgAAsAnIAAhNIAPAAIAABNgAAdAnIAAhNIAABNIgPAAIAAhNIAABNIAAAAIgOAAIAAhNIAOAAIAPAAIAPAAIAABNgAgMAnIAAhNIAABNIgCAAIgNAAIAAhNIAABNIgPAAIAAhNIAPAAIAPAAIAMAAIAABNgAg4AnIAAhNIAOAAIAABNgAhHAnIAAhNIAPAAIAABNgAhIAnIgOAAIAAhNIAABNIgNAAIAAhNIAABNIgCAAIgNAAIAAhNIAPAAIANAAIAPAAIAABNgAiCAnIAAhNIAPAAIAABNgAA7gmgAg4gmg");
	this.shape_12.setTransform(24.7,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABKACIAAgDIAtAAIAAADgAh2ACIAAgDIAsAAIAAADg");
	this.shape_13.setTransform(24.9,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003300").s().p("ACSD6IAAgTIkjAAIAAgTIEjAAIAAATIAAgTIkjAAIhKAAIBKAAIAAATIAAATIhoAAIAAgmIAAmxIAAgcIBZAAIAAAcIg7AAIgCAAIACAAIA7AAIAAgcIFAAAIAAAcIA8AAIAAADIhLAbIAAAQIAAATIAAATIAAAUIAAATIAAATIA8AAIAAgTIAAgTIAAgUIAAgTIAAgTIg8AAIAAgQIBLgbIAAGuIgFAAIhGgvIAAj0IAAD0IkiAAIAAj0IAAD0IhKAuIAAmuIAAGuIBKguIEiAAIBGAvIAFAAIAeAAIgeAAIAAmuIAAgDIg8AAIAAgcIBaAAIAAAcIAAGxIAAAmgADXDUIhFAAgAjbDUIAAgBIAAABIgeAAIAeAAgABJC0IAtAAIAAgDIgtAAgAh3C0IAsAAIAAgDIgsAAgAA7CFQABAIAKAGQAKAHAQAAQAMAAAJgFIAFgCQALgIAAgJQAAgKgLgHQgJgHgMAAIAAgFIgJAAIAAAEQgJABgHADIgGAEQgKAFgBAJIAAADIAAADIAAAAgAiGCCQAAAJALAIQALAHAPAAQAQAAAKgHQAMgIAAgJQAAgKgMgHQgIgHgOgBIAAgEIgJAAIAAAFQgMAAgJAHQgLAHAAAKIAAAAgAjNicIAAATIAAAUIAAATIAAATIA8AAIAAgTIAAgTIAAgUIAAgTIAAgTIAAgQIAAAQIg8AAgAAphYIAOAAIAOAAIABAAIAOAAIAOAAIAAAAIAPAAIAOAAIAAhNIgOAAIgPAAIgOAAIgOAAIgPAAIgOAAgAhKhYIAPAAIANAAIAQAAIANAAIABAAIANAAIANAAIABAAIAOAAIAQAAIAAhNIgQAAIgOAAIgOAAIgNAAIgOAAIgQAAIgNAAIgPAAgAh1hYIANAAIACAAIAMAAIAPAAIABAAIAAhNIgQAAIgMAAIgPAAgAiFhYIAPAAIAAhNIgPAAgAjbjbIBKAcIEiAAIkiAAIhKgcIAAgCIAAACIgCgCIgcAAIAcAAIACACgAD6jdIgeAAgADcDUgAiRDUgAiRClgABGCTQgKgGgBgIIAAgDIAAgDQABgJAKgFIAGgEQAHgDAJgBIAAAGQgKAAgGAEIgBABQgJAGAAAIQAAAHAJAGIABABQAIAEAMABQAMgBAIgFQAJgGAAgHQAAgIgJgGQgGgEgJgBIAAgFIAAAFQAJABAGAEQAJAGAAAIQAAAHgJAGQgIAFgMABQgMgBgIgEIgBgBQgJgGAAgHQAAgIAJgGIABgBQAGgEAKAAIADAAIAGAAIgGAAIgDAAIAAgGIAAgEIAJAAIAAAFQAMAAAJAHQALAHAAAKQAAAJgLAIIgFACQgJAFgMAAQgQAAgKgHgABJCHIAtAAIgtAAIAAgDIAtAAIAAADIAAgDIgtAAIAAADgAh7CTQgLgIAAgJQAAgKALgHQAJgHAMAAIAAAFQgJAAgHAFQgIAGAAAIQAAAHAIAGQAJAFAMABQANgBAJgFQAIgGABgHQgBgIgIgGQgIgFgKAAIAAgGQAOABAIAHQAMAHAAAKQAAAJgMAIQgKAHgQAAQgPAAgLgHgAh2CPQgIgGAAgHQAAgIAIgGQAHgFAJAAIAJAAQAKAAAIAFQAIAGABAIQgBAHgIAGQgJAFgNABQgMgBgJgFgAh3CHIAsAAIgsAAIAAgDIAsAAIAAADIAAgDIgsAAIAAADgAhmBvIAAgFIAAgFIAJAAIAAAEIAAAGgAhdBvIAAAAgABcBpgADcjdgACgj5g");
	this.shape_14.setTransform(25,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.5,1,1).p("ADcjbIADAAIAAgDIAAgbIAbAAIAABZIgbAAIAAg7ADcjbIADgDACdjNIAUAAIAAA8IgUAAACxiRIAPAAIAchKACdjNIAAA8ACmh1IAAAPIAAAMIAAAPACmgtIAAAPIAAAPIAAAMIAAAOIAAAPIAAAPIhNAAIAAgPIAAgPIBNAAACmg8IAAAPABZg8IAAgOIBNAAIAAAOABZh2IAAgPIBNAAIAAAPgACmApIAAAPIAAAOIAAAOIAAAPIAAAOIAAAPIhNAAIAAgPIAAgOIBNAAADfDcIAAg8IAbAAIAABaIgbAAgACdCRIAUAAADACRIgPAAIAAA8IgUAAIAAg8IgTAAIAAA8IgUAAIgTAAIgTAAIAAg8IATAAIATAAIAUAAADcDcIADAAADcDcIgchLAD6igIAAFAADAiRIAAEiAB2jNIAUAAIAAA8IgUAAABQiRIAAg8IATAAIATAAIAAA8ABjiRIgTAAABjiRIAAg8ABjiRIATAAABZhaIAAgMIBNAAABZhpIAAgMABZhLIAAgPIBNAAABZgRIAAgNIAAgPIAAgPIBNAAABZgDIAAgMIBNAAAjmiRIgTAAIAAhoIAmAAIAAAeIABAAIGuAAAjTiRIgTAAAjTjbIAABKIAAEjIAABFIAvhGIAAkiIguhKAizhLIAAgtIADAAIAAAtgAhphdQAAANgHAKQgHAKgKAAQgKAAgHgKQgHgLAAgQQAAgPAHgLQAHgLAKAAQAKAAAHALQAGAJABAMIAFAAIAAAJIgFAAIgFAAIAAgJIAFAAAhuhdQgBAKgEAIQgGAIgIAAQgIAAgFgIQgGgJAAgNQAAgMAGgJQAFgIAIAAQAIAAAGAIQAEAHABAJAiHhLIAAgtIAEAAIAAAtgAhpBlQgBAMgGAJQgHALgKAAQgKAAgHgLQgBgCgBgDQgFgJAAgNQAAgPAHgKQAGgKAIgBQACAAABAAQACAAABAAQAIABAGAKQACADABACQAEAIAAAJIAFAAIAAAJIgFAAIgFAAQgBAJgEAGQgGAJgIAAQgIAAgFgJQgGgIAAgNQAAgKAFgKQAAAAABAAQAFgJAIAAQAIAAAGAJQAAAAABAAQADAIABAJIAFAAAiHB3IAAgtIAEAAIAAAtgAhuBlIAAgGQAAgCAAgBAizB3IAAgtIADAAIAAAtgAjTDXIAAAFIAAAeIgmAAIAAhoIATAAIAAkjAjTCSIgTAAABZA4IAAgPABZBUIAAgOIBNAAABZBiIAAgOIBNAAABZBFIAAgNIBNAAAB2CRIAAA8ABjCRIAAA8ABZALIAAgOIBNAAAikiRID0AAABQCRIj0AAACKjNIATAAACKiRIATAAABZgeIBNAAABZgtIBNAAACmAaIhNAAACmBxIhNAAACdDNIgTAAAjTj5IGyAAAjTDcIGvAAADfD6ImyAA");
	this.shape_15.setTransform(25,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AAdDNIAAg7IAUAAIAAA7gAAKDNIAAg7IATAAIAAA7gAgJDNIAAg7IATAAIAAA7gAgdDNIAAg7IAUAAIAAA7gAgdDNIgTAAIAAg7IATAAIAAA7gAAKCSgAAdiQIgTAAIAAg8IATAAIAAA8IAAg8IAUAAIAAA8gAgJiQIAAg8IAAA8IgUAAIAAg8IAUAAIATAAIAAA8gAgdiQIgTAAIAAg8IATAAIAAA8g");
	this.shape_16.setTransform(37.8,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AglCDIAAgPIBLAAIAAAPgAglB0IAAgOIBLAAIhLAAIAAgBIAAgOIBLAAIhLAAIAAgNIBLAAIhLAAIAAgCIAAgNIAAgPIBLAAIAAAPIhLAAIBLAAIAAAPIAAANIAAAPIAAAOgAAmA7gAglAsIAAgPIBLAAIAAAPgAglAdIAAgPIBLAAIhLAAIAAAAIAAgOIBLAAIhLAAIAAgMIAAgCIAAgNIBLAAIhLAAIAAgPIBLAAIhLAAIAAgOIAAgPIBLAAIAAAPIhLAAIBLAAIAAAOIAAAPIAAAPIhLAAIBLAAIAAAMIAAAOIAAAPgAAmg4gAglhHIAAgBIAAgOIBLAAIAAAPgAglhWIAAgNIAAgCIAAgNIBLAAIAAAPIhLAAIBLAAIAAANgAAmhjgAglhzIAAgPIBLAAIAAAPg");
	this.shape_17.setTransform(37.8,24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBB3IAAgtIADAAIAAAtgAgBhKIAAgsIADAAIAAAsg");
	this.shape_18.setTransform(7.2,24.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003300").s().p("ADfD6IAAgeIgDAAIgchLIAAkiIAAEiIAcBLImuAAIAAgFIAAAFIAAAeIgnAAIAAhoIATAAIAAkjIgTAAIAAhoIAnAAIGxAAIAAAcIgCACImuAAIAuBKIAAEiIgvBGIAAhFIAAkjIAAhKIAABKIgUAAIAUAAIAAEjIgUAAIAUAAIAABFIAvhGIAAkiIDyAAIjyAAIguhKIGuAAIgdBKIgPAAIAAg8IgUAAIgTAAIgUAAIgUAAIgTAAIAAA8IATAAIAUAAIAUAAIATAAIAUAAIAPAAIAdhKIACAAIAAgCIAAgcIAbAAIAABZIAAFAIgbAAIAAA8IAAg8IAbAAIAABagABPDNIATAAIAUAAIAUAAIATAAIAUAAIAAg8IAPAAIgPAAIgUAAIgTAAIgUAAIgUAAIgTAAIjyAAIDyAAgAiZBgQAAAMAFAJIACAFQAIALAKAAQAJAAAIgLQAFgJABgMIAFAAIAAgJIgEAAQgBgJgEgHIgCgGQgHgKgIgBIgCAAIgDAAQgJABgGAKQgHAKAAAQIAAAAgABZA3IAAAOIAAABIAAAOIAAAOIAAAAIAAAPIAAAOIBNAAIAAgOIAAgPIAAgOIAAgOIAAgPIAAgOIhNAAgAizB2IAEAAIAAgtIgEAAgABZg7IAAANIAAAQIAAANIAAABIAAANIAAANIAAABIAAAOIAAAQIBNAAIAAgQIAAgOIAAgOIAAgNIAAgOIAAgQIAAgNIAAgPIhNAAgAiZhhQAAAQAHAKQAIAMAKAAQAJAAAIgMQAGgIABgOIAEAAIAAgJIgFAAQgBgMgFgJQgIgLgJAAQgKAAgIALQgHALAAAPIAAAAgABZhoIAAACIAAAMIAAAPIAAABIBNAAIAAgQIAAgMIAAgPIhNAAgAizhLIAEAAIAAgsIgEAAgABZh2IBNAAIAAgPIhNAAgADfigIAbAAIgbAAIAAg7IAAA7gAjSjbIABAAIgBAAIAAgeIAAAegAjSD6IAAgeIGuAAIADAAIAAAegAjSCSgABPCRgAiSB6IgCgFQgFgJAAgMQAAgQAHgKQAGgKAJgBIADAAIACAAQAIABAHAKIACAGQAEAHABAJIgGAAQgBgKgDgGIgBgBQgGgJgHAAQgJAAgFAJIgBABQgFAIABAMQgBAMAGAIQAFAJAJAAQAHAAAGgJQAEgGABgJIAFAAQgBAMgFAJQgIALgJAAQgKAAgIgLgAiOB0QgGgIABgMQgBgMAFgIIABgBQAFgJAJAAQAHAAAGAJIABABQADAGABAKIAAADIAAAGQgBAJgEAGQgGAJgHAAQgJAAgFgJgAiDB2IAAgtIgEAAIAAAtgAiHB2IAAgtIAEAAIAAAtgAiHB2gAhpBlIgFAAIAAgGIAAgDIAGAAIAEAAIAAAJgAhpBlgAhoBcgAiShHQgHgKAAgQQAAgPAHgLQAIgLAKAAQAJAAAIALQAFAJABAMIgFAAQgBgJgEgHQgGgIgHAAQgJAAgFAIQgGAJABAMQgBANAGAJQAFAIAJABQAHgBAGgIQAEgIABgKQgBAKgEAIQgGAIgHABQgJgBgFgIQgGgJABgNQgBgMAGgJQAFgIAJAAQAHAAAGAIQAEAHABAJIAAAJIAGAAQgBAOgGAIQgIAMgJAAQgKAAgIgMgAiDhLIAAgsIgEAAIAAAsgAiHhLIAAgsIAEAAIAAAsgAiHhLgAhohdIgGAAIAAgJIAFAAIAFAAIAAAJgAhohdgAhuhmIAAAAgACxiRgADdjbIACgCIAAACgADdjbgAjRjbgADfj5g");
	this.shape_19.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,52,52);


(lib.numTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.txtTime = new cjs.Text("", "bold 30px 'Arial'");
	this.txtTime.name = "txtTime";
	this.txtTime.textAlign = "center";
	this.txtTime.lineHeight = 36;
	this.txtTime.lineWidth = 46;
	this.txtTime.parent = this;
	this.txtTime.setTransform(102,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtTime},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.numTime, new cjs.Rectangle(0,0,127,50), null);


(lib.numScore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.txtScore = new cjs.Text("", "bold 30px 'Arial'");
	this.txtScore.name = "txtScore";
	this.txtScore.textAlign = "center";
	this.txtScore.lineHeight = 36;
	this.txtScore.lineWidth = 46;
	this.txtScore.parent = this;
	this.txtScore.setTransform(115,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtScore},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.numScore, new cjs.Rectangle(0,0,140,50), null);


(lib.lvl1Screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.level1background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lvl1Screen, new cjs.Rectangle(-1,-1,802,602), null);


(lib.LandMine5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABiACQAAAqgdAdQgeAdgoAAQgqAAgdgdQgdgdAAgqQAAgoAdgeQAdgdAqAAQAoAAAeAdQAdAeAAAogADIAAQAABTg7A6Qg6A7hTAAQhSAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAQgoAAgegdg");
	this.shape_1.setTransform(19.8,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiMCNQg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7gAhIhEQgdAdAAApQAAAqAdAdQAeAdApAAQAoAAAdgdQAegdAAgqQAAgpgegdQgdgdgoAAQgpAAgeAdg");
	this.shape_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LandMine5, new cjs.Rectangle(-1,-1,42,42), null);


(lib.LandMine4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSgABiACQAAAqgdAdQgeAdgoAAQgqAAgdgdQgdgdAAgqQAAgoAdgeQAdgdAqAAQAoAAAeAdQAdAeAAAog");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAQgoAAgegdg");
	this.shape_1.setTransform(19.8,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiMCNQg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7gAhIhEQgdAdAAApQAAAqAdAdQAeAdApAAQAoAAAdgdQAegdAAgqQAAgpgegdQgdgdgoAAQgpAAgeAdg");
	this.shape_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LandMine4, new cjs.Rectangle(-1,-1,42,42), null);


(lib.LandMine3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABiACQAAAqgdAdQgeAdgoAAQgqAAgdgdQgdgdAAgqQAAgoAdgeQAdgdAqAAQAoAAAeAdQAdAeAAAogADIAAQAABTg7A6Qg6A7hTAAQhSAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAQgoAAgegdg");
	this.shape_1.setTransform(19.8,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiMCNQg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7gAhIhEQgdAdAAApQAAAqAdAdQAeAdApAAQAoAAAdgdQAegdAAgqQAAgpgegdQgdgdgoAAQgpAAgeAdg");
	this.shape_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LandMine3, new cjs.Rectangle(-1,-1,42,42), null);


(lib.LandMine2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSgABiACQAAAqgdAdQgeAdgoAAQgqAAgdgdQgdgdAAgqQAAgoAdgeQAdgdAqAAQAoAAAeAdQAdAeAAAog");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAQgoAAgegdg");
	this.shape_1.setTransform(19.8,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiMCNQg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7gAhIhEQgdAdAAApQAAAqAdAdQAeAdApAAQAoAAAdgdQAegdAAgqQAAgpgegdQgdgdgoAAQgpAAgeAdg");
	this.shape_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LandMine2, new cjs.Rectangle(-1,-1,42,42), null);


(lib.LandMine1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABiACQAAAqgdAdQgeAdgoAAQgqAAgdgdQgdgdAAgqQAAgoAdgeQAdgdAqAAQAoAAAeAdQAdAeAAAogADIAAQAABTg7A6Qg6A7hTAAQhSAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhGBHQgdgdAAgqQAAgpAdgdQAegdAoAAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAQgoAAgegdg");
	this.shape_1.setTransform(19.8,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiMCNQg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7gAhIhEQgdAdAAApQAAAqAdAdQAeAdApAAQAoAAAdgdQAegdAAgqQAAgpgegdQgdgdgoAAQgpAAgeAdg");
	this.shape_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LandMine1, new cjs.Rectangle(-1,-1,42,42), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADRBFQg4BvhIA4QgXATgVAJQgTAKgQABQgSgBgVgLQgUgJgXgSQhHg4g4htQg5htgJhjQgHhiAtgdQAugdBHA5QBBA0A2BhQA1hiBBg0QBIg4AtAdQAuAdgIBhQgIBjg5Bsg");
	this.shape.setTransform(25,25,0.909,0.909);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AglEHQgUgJgXgSQhHg4g4htQg5htgJhjQgHhiAtgdQAugdBHA5QBBA0A2BhQA1hiBBg0QBIg4AtAdQAuAdgIBhQgIBjg5BsQg4BvhIA4QgXATgVAJQgTAKgQABQgSgBgVgLg");
	this.shape_1.setTransform(25,25,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,52,52);


(lib.Heal3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADIAAQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A7AABSg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(2,1,1).p("AgxgxIAAhkIBjAAIAABkIBkAAIAABjIhkAAIAABkIhjAAIAAhkIhkAAIAAhjIBkAAIBjAAAAyAyIhjAA");
	this.shape_1.setTransform(20.4,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgxCWIAAhkIhkAAIAAhjIBkAAIBjAAIhjAAIAAhkIBjAAIAABkIBkAAIAABjIhkAAIhjAAIBjAAIAABkg");
	this.shape_2.setTransform(20.4,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Heal3, new cjs.Rectangle(-1,-1,42,42), null);


(lib.Heal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADIAAQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A7AABSg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(2,1,1).p("AAygxIBkAAIAABjIhkAAIAABkIhjAAIAAhkIhkAAIAAhjIBkAAIAAhkIBjAAgAAyAyIhjAAAgxgxIBjAA");
	this.shape_1.setTransform(20.4,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgxCWIAAhkIBjAAIAABkgAAyAyIhjAAIhkAAIAAhjIBkAAIBjAAIBkAAIAABjgAAygxIhjAAIAAhkIBjAAIAABkgAgxgxg");
	this.shape_2.setTransform(20.4,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Heal2, new cjs.Rectangle(-1,-1,42,42), null);


(lib.Heal1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADIAAQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A7AABSg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(2,1,1).p("AgxgxIAAhkIBjAAIAABkIBkAAIAABjIhkAAIAABkIhjAAIAAhkIhkAAIAAhjIBkAAIBjAAAAyAyIhjAA");
	this.shape_1.setTransform(20.4,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgxCWIAAhkIhkAAIAAhjIBkAAIBjAAIhjAAIAAhkIBjAAIAABkIBkAAIAABjIhkAAIhjAAIBjAAIAABkg");
	this.shape_2.setTransform(20.4,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Heal1, new cjs.Rectangle(-1,-1,42,42), null);


(lib.Enemy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACkjYIANAAIAABaIgNAAIgOAAIgNAAIgNAAIgOAAIgNAAIgNAAIgNAAIgNAAIgOAAIgNAAIgNAAIgNAAIgNAAIgNAAIgNAAIgNAAIgNAAIgOAAIgNAAIgNAAIgOAAIgNAAIgNAAIAAhaIANAAIANAAIAOAAIANAAIANAAIAOAAIANAAIANAAIANAAIANAAIANAAIANAAIANAAIANAAIAOAAIANAAIANAAIANAAIANAAIAOAAIANAAIANAAIAOAAIAABaABgj4QAAgEAEgDQADgDAFAAQAFAAAEADQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDQgEgDAAgEgABnj4QAAgCACgBQABgBACAAQACAAACABQACABAAACQAAACgCABQgCACgCAAQgCAAgBgCQgCgBAAgCgAB8h+IAAhaABujYIAABaABhh+IAAhaABUh+IAAhaABHh+IAAhaAA6jYIAABaAAsh+IAAhaACJh+IAAhaACWh+IAAhaAAfh+IAAhaAASh+IAAhaAAFjYIAABaAhaj4QAAgEAEgDQADgDAFAAQAFAAAEADQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDQgEgDAAgEgAhTj4QAAgCACgBQABgBACAAQADAAABABQACABAAACQAAACgCABQgBACgDAAQgCAAgBgCQgCgBAAgCgAhkjYIAABaAhXh+IAAhaAhKh+IAAhaAgIh+IAAhaAg8h+IAAhaAgvjYIAABaAgih+IAAhaAgVh+IAAhaAh/h+IAAhaAhyh+IAAhaAiYC1IgYBO");
	this.shape.setTransform(20.3,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ACSBCIAAhZIANAAIAABZgACEBCIAAhZIAOAAIAABZgAB3BCIAAhZIANAAIAABZgAB3BCIgNAAIAAhZIANAAIAABZgABqBCIgOAAIAAhZIAOAAIAABZgABPBCIAAhZIANAAIAABZgABCBCIAAhZIANAAIAABZgABCBCIgNAAIAAhZIANAAIAABZgAA1BCIgNAAIAAhZIANAAIAABZgAAaBCIAAhZIAOAAIAABZgAANBCIAAhZIAABZIgNAAIAAhZIAABZIgMAAIAAhZIAABZIgOAAIAAhZIAOAAIAMAAIANAAIANAAIAABZgAgnBCIAAhZIAABZIgNAAIAAhZIAABZIgNAAIAAhZIAABZIgNAAIAAhZIANAAIANAAIANAAIANAAIAABZgAhcBCIAAhZIAOAAIAABZgAhcBCIgNAAIAAhZIANAAIAABZgAhpBCIgNAAIAAhZIANAAIAABZgAh2BCIgOAAIAAhZIAABZIgNAAIAAhZIAABZIgNAAIAAhZIANAAIANAAIAOAAIAABZgACEgXgABPgXgAAagXgAgagXgABSgwQgEgDAAgEQAAgEAEgDQADgDAFAAQAFAAAEADQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDgABXg0QAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIAEgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgEAAIgDAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABABAAgAhogwQgEgDAAgEQAAgEAEgDQADgDAFAAQAFAAAEADQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDgAhjg0QAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAgBQABAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgEAAIgDAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABABAAgABXg0QgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIADAAIAEAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgEACQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgAhjg0QgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIADAAIAEAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgABVg3IAAAAgAhlg3IAAAAg");
	this.shape_1.setTransform(22.1,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AiCjLIgaAAIAAgHIAaAAgAgxh/IgUAAIAAhRIBFAAIAABRIgXAAIAAFSIgaAAIAAlSIAaAAABTjLIgbAAIAAgHIAbAAgACdhEIgYhO");
	this.shape_2.setTransform(25.8,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgMDTIAAlSIgUAAIAAhRIBEAAIAABRIgWAAIgaAAIAaAAIAAFSgABdjMIAAgGIAbAAIAAAGgAh3jMIAAgGIAbAAIAAAGg");
	this.shape_3.setTransform(22.1,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AiRAIIgNAAIAAgVIANAAgAiHAOIAAgaIA6AAIAAAagACfAKIgNAAIAAgWIANAAgABNAOIAAgaIA6AAIAAAag");
	this.shape_4.setTransform(22.1,37.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABNAOIAAgaIA6AAIAAAagAiHAOIAAgaIA6AAIAAAagACSAKIAAgWIANAAIAAAWgAieAIIAAgVIANAAIAAAVg");
	this.shape_5.setTransform(22.1,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AhBglIhQAAIAAgtIBQAAgACSglIhQAAIAAgtIBQAAgAA4BTIhsAAIAAiLIBsAAg");
	this.shape_6.setTransform(22.1,43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag0BTIAAiLIBsAAIAACLgABCglIAAgtIBQAAIAAAtgAiRglIAAgtIBQAAIAAAtg");
	this.shape_7.setTransform(22.1,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ADhkfIhPAAIAAgXIBPAAgAiRkfIhPAAIAAgXIBPAAgADhE3IhPAAIAAgiIBPAAgAiRE3IhPAAIAAgiIBPAAg");
	this.shape_8.setTransform(22.5,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ACSE2IAAgiIBPAAIAAAigAjgE2IAAgiIBPAAIAAAigACSkfIAAgXIBPAAIAAAXgAjgkfIAAgXIBPAAIAAAXg");
	this.shape_9.setTransform(22.5,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("ADhEaIgaAAIAAozIAaAAgAjGEaIgaAAIAAozIAaAAg");
	this.shape_10.setTransform(22.5,30.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ADHEaIAAozIAaAAIAAIzgAjgEaIAAozIAaAAIAAIzg");
	this.shape_11.setTransform(22.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("ACqCAIlTAAIAAj/IFTAAg");
	this.shape_12.setTransform(22.1,31.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AipCAIAAj/IFTAAIAAD/g");
	this.shape_13.setTransform(22.1,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("ADHD5ImNAAIAAnxIGNAAg");
	this.shape_14.setTransform(22.5,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AhSCtIg5AAIAAgMIA5AAgACKCtIg5AAIAAgMIA5AAgADHEaImNAAIAAozIGNAAg");
	this.shape_15.setTransform(22.5,30.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABTAGIAAgLIA4AAIAAALgAiJAGIAAgLIA4AAIAAALg");
	this.shape_16.setTransform(22.4,47.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AjGEaIAAozIGNAAIAAIzgABSCtIA4AAIAAgMIg4AAgAiKCtIA4AAIAAgMIg4AAg");
	this.shape_17.setTransform(22.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Enemy2, new cjs.Rectangle(-1,-1,47,82), null);


(lib.Enemy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADZhyIAAAOIAAANIAAANIAAAOIAAANIAAANIAAANIAAANIAAANIAAANIAAANIAAANIAAAOIAAANIAAANIAAANIAAANIAAAOIAAANIAAANIAAAOIhbAAIAAgOIAAgNIAAgNIAAgOIAAgNIAAgNIAAgNIAAgNIAAgOIBbAAAD5hTQACAAABACQABABAAACQAAADgBABQgBACgCAAQgCAAgBgCQgCgBAAgDQAAgCACgBQABgCACAAgAD5haQAEAAADAEQADADAAAFQAAAFgDAEQgDADgEAAQgFAAgCgDQgDgEAAgFQAAgFADgDQACgEAFAAgADZh/IAAANAB+h/IAAgNIBbAAIAAANAB+hyIAAgNIBbAAAB+hkIAAgOIBbAAAB+hXIAAgNAB+gvIAAgNIAAgOIBbAAAB+giIAAgNAB+gVIAAgNIBbAAAB+ASIAAgNIAAgNIAAgNIBbAAAB+AfIAAgNIBbAAADZgvIhbAAAB+g8IBbAAADZhkIhbAAAB+hXIBbAAAB+gIIBbAAAB+hKIAAgNAB+AfIBbAAADZAFIhbAAAD5BnQACAAABACQABABAAACQAAACgBACQgBACgCAAQgCAAgBgCQgCgCAAgCQAAgCACgBQABgCACAAgAD5BgQAEAAADAEQADADAAAFQAAAFgDAEQgDADgEAAQgFAAgCgDQgDgEAAgFQAAgFADgDQACgEAFAAgAB+B8IBbAAADZBuIhbAAADZCkIAAANIhbAAIAAgNAB+BhIBbAAAB+BUIBbAAAB+BHIBbAAADZA6IhbAAAB+CJIBbAAAB+CWIBbAAAB+AsIAAgNAjYBnIANAAIAAA4IgNAAgAi0iYIhOgY");
	this.shape.setTransform(53.9,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_1.setTransform(32.8,33.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhBCfIAAgNIBZAAIAAANgAhBCSIAAgOIAAgNIAAgNIAAgOIAAgNIBZAAIAAANIhZAAIBZAAIAAAOIhZAAIBZAAIAAANIhZAAIBZAAIAAANIhZAAIBZAAIAAAOgAAxBjQgDgEAAgFQAAgFADgDQADgEAEAAQAEAAADAEQADADAAAFQAAAFgDAEQgDADgEAAQgEAAgDgDgAAzBaIACAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAgEIAAgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIAAADIAAAEQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgCgEQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIAAAAgAAYBPgAhBBPIAAgNIAAgNIAAgNIAAgOIBZAAIAAAOIhZAAIBZAAIAAANIhZAAIBZAAIAAANIhZAAIBZAAIAAANgAhBAaIAAgNIBZAAIAAANgAhBANIAAgNIBZAAIAAANgAhBAAIAAgMIAAgOIBZAAIAAAOIhZAAIBZAAIAAAMgAhBgaIAAgNIAAgNIAAgNIBZAAIAAANIhZAAIBZAAIAAANIhZAAIBZAAIAAANgAhBhBIAAgNIAAgOIBZAAIAAAOIhZAAIBZAAIAAANgAAxhXQgDgEAAgFQAAgFADgDQADgEAEAAQAEAAADAEQADADAAAFQAAAFgDAEQgDADgEAAQgEAAgDgDgAAzhgQAAABABAAQAAABAAABQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAgEIAAgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIAAADIAAAEQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIAAAAgAAYhcIhZAAIAAgNIBZAAIAAANgAhBhpIAAgNIAAgOIAAgNIAAgNIBZAAIAAANIhZAAIBZAAIAAANIhZAAIBZAAIAAAOIhZAAIBZAAIAAANgAAYiRg");
	this.shape_2.setTransform(73.2,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ADMiCIAAgaIAHAAIAAAagADMBTIAAgbIAHAAIAAAbgACAgxIAAgUIBRAAIAABFIhRAAIAAgXIlSAAIAAgaIFSAAIAAAaABGCdIBNgY");
	this.shape_3.setTransform(21.1,25.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ADNB4IAAgbIAGAAIAAAbgACAAkIAAgWIAAgaIAAgUIBRAAIAABEgAjSAOIAAgaIFSAAIAAAagADNhcIAAgbIAGAAIAAAbg");
	this.shape_4.setTransform(21.1,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AgNiHIAaAAIAAA6IgaAAgAgHiRIAAgNIAVAAIAAANgAgJCfIAAgNIAWAAIAAANgAgNBNIAaAAIAAA6IgaAAg");
	this.shape_5.setTransform(42.3,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgJCfIAAgNIAWAAIAAANgAgNCHIAAg6IAaAAIAAA6gAgNhNIAAg6IAaAAIAAA6gAgHiRIAAgNIAVAAIAAANg");
	this.shape_6.setTransform(42.3,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AhSA4IAAhsICLAAIAABsgAAmhBIAAhQIAtAAIAABQgAAmCSIAAhQIAtAAIAABQg");
	this.shape_7.setTransform(36.3,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAmCSIAAhQIAtAAIAABQgAhSA4IAAhsICLAAIAABsgAAmhBIAAhQIAtAAIAABQg");
	this.shape_8.setTransform(36.3,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AEgiRIAAhPIAXAAIAABPgAEgDhIAAhPIAXAAIAABPgAk2iRIAAhPIAiAAIAABPgAk2DhIAAhPIAiAAIAABPg");
	this.shape_9.setTransform(49,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AEgDhIAAhPIAXAAIAABPgAk1DhIAAhPIAiAAIAABPgAEgiRIAAhPIAXAAIAABPgAk1iRIAAhPIAiAAIAABPg");
	this.shape_10.setTransform(49,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("AkZjGIAAgaIIzAAIAAAagAkZDhIAAgaIIzAAIAAAag");
	this.shape_11.setTransform(49.5,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AkZDhIAAgaIIzAAIAAAagAkZjGIAAgaIIzAAIAAAag");
	this.shape_12.setTransform(49.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 10
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("Ah/CqIAAlTID/AAIAAFTg");
	this.shape_13.setTransform(48.6,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("Ah/CqIAAlTID/AAIAAFTg");
	this.shape_14.setTransform(48.6,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("Aj3DHIAAmNIHwAAIAAGNg");
	this.shape_15.setTransform(52.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AkZDHIAAmNIIzAAIAAGNgAishSIAAg5IAMAAIAAA5gAisCKIAAg5IAMAAIAAA5g");
	this.shape_16.setTransform(49.5,22.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_17.setTransform(32.8,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_18.setTransform(32.8,33.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AkZDHIAAmNIIzAAIAAGNgAisCKIAMAAIAAg4IgMAAgAishSIAMAAIAAg4IgMAAg");
	this.shape_19.setTransform(49.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Enemy, new cjs.Rectangle(-1,-1,82,47), null);


(lib.Bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgFAAgFgFQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAFg");
	this.shape.setTransform(1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bullet, new cjs.Rectangle(-1,-1,5,5), null);


(lib.btnSound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgxiVIDHjIIAAK7IjHjIIhkAAIAAkrIBkAAIAAEr");
	this.shape.setTransform(15,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgxCWIAAkrIDGjIIABK7gAiVCWIAAkrIBkAAIAAErg");
	this.shape_1.setTransform(15,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnSound, new cjs.Rectangle(-1,-1,32,72), null);


(lib.numLife = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(115,0);

	this.instance_1 = new lib.Bitmap5();
	this.instance_1.parent = this;

	this.instance_2 = new lib.heart();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,15.4,1,0.6,0,0,0,25,25);

	this.txtLife = new cjs.Text("", "bold 30px 'Arial'");
	this.txtLife.name = "txtLife";
	this.txtLife.textAlign = "center";
	this.txtLife.lineHeight = 36;
	this.txtLife.lineWidth = 48;
	this.txtLife.parent = this;
	this.txtLife.setTransform(169.5,2,1.336,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtLife},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.numLife, new cjs.Rectangle(0,-0.2,204.1,50.3), null);


(lib.btnStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s("#000000").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape.setTransform(100,25);

	this.instance_1 = new lib.Bitmap26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,7);

	this.instance_2 = new lib.tank3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.7,40,0.281,0.286,-90,0,0,35.6,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s("#FFFFFF").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape_1.setTransform(97.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,52);


(lib.btnRestart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s("#000000").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape.setTransform(100,25);

	this.instance_1 = new lib.Bitmap24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,7);

	this.instance_2 = new lib.tank3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.7,40,0.281,0.286,-90,0,0,35.6,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s("#FFFFFF").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape_1.setTransform(97.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,52);


(lib.btnHow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s("#000000").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape.setTransform(100,25);

	this.instance_1 = new lib.Bitmap22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,7);

	this.instance_2 = new lib.tank3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.6,40,0.281,0.286,-90,0,0,35.6,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s("#FFFFFF").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape_1.setTransform(97.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,52);


(lib.btnCredit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s("#000000").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape.setTransform(100,25);

	this.instance_1 = new lib.Bitmap20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,7);

	this.instance_2 = new lib.tank3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.5,40,0.281,0.281,-90,0,0,35.6,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s("#FFFFFF").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape_1.setTransform(97.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,52);


(lib.btnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s("#000000").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape.setTransform(100,25);

	this.instance_1 = new lib.Bitmap18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,7);

	this.instance_2 = new lib.tank3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.7,40,0.281,0.286,-90,0,0,35.6,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s("#FFFFFF").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape_1.setTransform(100,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s("#FFFFFF").ss(2,1,1).rr(-100,-25,200,50,25);
	this.shape_2.setTransform(100,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,52);


(lib.winScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(153,287);

	this.instance_1 = new lib.Bitmap9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(213,0);

	this.btnSound = new lib.btnSound();
	this.btnSound.parent = this;
	this.btnSound.setTransform(772.1,36.1,0.667,0.572,0,0,0,15,35.1);

	this.btnBack = new lib.btnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(314,407);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnBack},{t:this.btnSound},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.txtScore = new cjs.Text("", "bold 30px 'Arial'", "#999999");
	this.txtScore.name = "txtScore";
	this.txtScore.lineHeight = 36;
	this.txtScore.lineWidth = 246;
	this.txtScore.parent = this;
	this.txtScore.setTransform(405,289);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.txtScore}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.winScreen, new cjs.Rectangle(-1,-1,802,602), null);


(lib.timeUpScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(153,287);

	this.instance_1 = new lib.Bitmap13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(213,10);

	this.btnSound = new lib.btnSound();
	this.btnSound.parent = this;
	this.btnSound.setTransform(772.1,36.1,0.667,0.572,0,0,0,15,35.1);

	this.btnBack = new lib.btnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(287,473.9);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.btnRestart = new lib.btnRestart();
	this.btnRestart.parent = this;
	this.btnRestart.setTransform(287,413);
	new cjs.ButtonHelper(this.btnRestart, 0, 1, 1);

	this.txtScore = new cjs.Text("", "bold 30px 'Arial'", "#999999");
	this.txtScore.name = "txtScore";
	this.txtScore.lineHeight = 36;
	this.txtScore.lineWidth = 246;
	this.txtScore.parent = this;
	this.txtScore.setTransform(399.5,279.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtScore},{t:this.btnRestart},{t:this.btnBack},{t:this.btnSound},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeUpScreen, new cjs.Rectangle(-1,-1,802,602), null);


(lib.startScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.tank("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(625.1,327.6,0.982,1.02,0,0,0,0.1,125.1);

	this.instance_1 = new lib.tank2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.9,330,1,1,0,0,0,-0.1,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.btnStart = new lib.btnStart();
	this.btnStart.parent = this;
	this.btnStart.setTransform(315,365);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 1);

	this.btnCredit = new lib.btnCredit();
	this.btnCredit.parent = this;
	this.btnCredit.setTransform(315,485);
	new cjs.ButtonHelper(this.btnCredit, 0, 1, 1);

	this.btnHow = new lib.btnHow();
	this.btnHow.parent = this;
	this.btnHow.setTransform(315,425);
	new cjs.ButtonHelper(this.btnHow, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnHow},{t:this.btnCredit},{t:this.btnStart}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.title();
	this.instance_2.parent = this;
	this.instance_2.setTransform(240,0,1.015,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("EAjSgZoQheihh9hTQh7hQhSAvQhQAuAICTQAJCUBeChIH4NiIGIjhIn3tiImJDhAd2O5QAAAMAAALIAAPRInCAAIAAvOQAAgLAAgLQAAgCAAgCQAAi6BBiFQBCiDBeAAQBdAABCCDQBCCFAAC6gAW0O5IHCAAEgjUgZ5QBdiiB7hSQB7hRBRAvQBQAvgICSQgJCUhdCiQgGAKgGAKInoNOImGjhIHntMQAGgKAFgKQABgBABgBIGGDhAzrO5QAAAMAAALIAAPRInCAAIAAvOQAAgLAAgLQAAgCAAgCQAAi6BBiFQBCiDBeAAQBdAABCCDQBCCFAAC6gA6tO5IHCAA");
	this.shape_1.setTransform(406.9,274.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AW0ehIAAvOIAAgWIAAgEIHCAAIAAAXIAAPRgA6tehIAAvOIAAgWIAAgEIHCAAIAAAXIAAPRgAW0O5QAAi6BCiFQBBiDBeAAQBdAABCCDQBCCFAAC6gAW0O5gA6tO5QAAi6BBiFQBDiDBdAAQBdAABCCDQBCCFAAC6gA6tO5gAdJ2HIGJjhIH3NiImJDhgEgrIgMXIHntMIAMgUIABgCIGGDhImGjhQBdiiB8hSQB6hRBRAvQBRAvgJCSQgJCUhdCiIgMAUInoNOgAbi68QgIiTBRguQBRgvB8BQQB8BTBeChImJDhQhdihgKiUgEAjSgZoIAAAAg");
	this.shape_2.setTransform(406.9,274.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_3.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.startScreen, new cjs.Rectangle(-1,-1,802,602), null);


(lib.loseScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(213,0);

	this.instance_1 = new lib.Bitmap15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153,287);

	this.btnSound = new lib.btnSound();
	this.btnSound.parent = this;
	this.btnSound.setTransform(772.1,36.1,0.667,0.572,0,0,0,15,35.1);

	this.btnBack = new lib.btnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(287,473.9);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.btnRestart = new lib.btnRestart();
	this.btnRestart.parent = this;
	this.btnRestart.setTransform(287,413);
	new cjs.ButtonHelper(this.btnRestart, 0, 1, 1);

	this.txtScore = new cjs.Text("", "bold 30px 'Arial'", "#999999");
	this.txtScore.name = "txtScore";
	this.txtScore.lineHeight = 36;
	this.txtScore.lineWidth = 246;
	this.txtScore.parent = this;
	this.txtScore.setTransform(388,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtScore},{t:this.btnRestart},{t:this.btnBack},{t:this.btnSound},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B0000").s().p("EAz+AcKQiSkpAAmkQAAmkCSkpQAihFAkg1Qi9g8iPkLQi4lbAAnpQAAnqC4lbQC5lZEFAAQEEAAC5FZQC5FbAAHqQAAHpi5FbQg9ByhHBNQB1BFBdC9QCTEpAAGkQAAGkiTEpQiSEqjPAAQjQAAiSkqgEg/AAcKQiTkpAAmkQAAmkCTkpQBdi9B1hFQhHhNg9hyQi5lbAAnpQAAnqC5lbQC4lZEFAAQEFAAC5FZQC4FbAAHqQAAHpi4FbQiPELi9A8QAkA1AiBFQCSEpAAGkQAAGkiSEpQiSEqjQAAQjPAAiSkqg");
	this.shape_1.setTransform(403,198.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.loseScreen, new cjs.Rectangle(-14.9,-11.9,836,613), null);


(lib.howScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("EAs9go5IE+E+IrDLDIk+k+gEAs9AEgIE+E+IrDLDIk+k/gEAnlgNVIE+k+ILDLDIk+E/gAgMZSIvfAAIAACnIBbAAIOEAAIAAinIDHAAIAACnIAACnIjHAAIAAinAuQegIAAinEgOQAhGIAAimA26egIAACmIAACnI/QAAIAACnIAACmIfQAAIAAimIAAinA26b5IAACnIuEAAIjIAAIAAinIAAinIDIAAIAACnIOEAAIBtAAIAAinIvxAAEgOQAmUIAACmIfPAAIAAimIAAinI/PAAIAACnIfPAAEgOQAjtIAAinEg2KAhGIAAimIAAinIOEAAEg2KAjtIAAinEgoGAZSIvfAAIAACnIBbAAEgk+Ab5IAACnEgoGAegIuEAAEg2KAmUIfQAAEgW6AhGI/QAAAQ/b5IBtAAIAAinIvxAAAQ/b5IAACnIAACmIAACnAQ/egIuEAAAC7b5IOEAAEAQ/AhGI/PAAAgMegIuEAA");
	this.shape_1.setTransform(392,323.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("EgpUgIgMBSpAAAIAARBMhSpAAAg");
	this.shape_2.setTransform(286.5,297.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ASZCnIAAinIAAimIDIAAIAACmIAACngA1gCnIAAinIAAimIDIAAIAACmIAACng");
	this.shape_3.setTransform(273,501.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AEMH0IAAinIAAimIAAinIAAimIAAimIOEAAIAACmIDIAAIAAimIAAinIPxAAIAACnIhtAAIuEAAIOEAAIAACmIuEAAIOEAAIAACmI/QAAIfQAAIAACnI/QAAIfQAAIAACmI/QAAIfQAAIAACngASQimIuEAAgEgjtAH0IAAinIAAimIAAinIAAimIAAimIhbAAIAAinIPfAAIAACnIuEAAIOEAAIAACmIDIAAIAAimIAAinIPxAAIAACnIhtAAIuEAAIOEAAIAACmIuEAAIOEAAIAACmI/QAAIfQAAIAACnI/QAAIfQAAIAACmI/QAAIfQAAIAACngA1pimIuEAAgEAjcgFMgASQlMgAEMlMIhbAAIAAinIPfAAIAACngAkdlMgA1plMg");
	this.shape_4.setTransform(273.9,535);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996600").s().p("Aq1ZvILCrDIE+E+IrCLEgAlKjIIE+k+ILCLBIk+E/gAq1zpILCrEIE+E/IrCLDg");
	this.shape_5.setTransform(678.4,258);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("EgpUAIhIAAxBMBSpAAAIAARBg");
	this.shape_6.setTransform(286.5,297.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 3
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,70);

	this.btnStart = new lib.btnStart();
	this.btnStart.parent = this;
	this.btnStart.setTransform(595,485);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 1);

	this.btnBack = new lib.btnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(595,545);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGHAhIAAAAQgngLgwACQgKABgIgHQgIgHAAgLQgBgJAHgIQAHgHAKgBQA5gDAvAOIAAAAQAlAKA3gSQBIgYAvAMQAnAJAvAAQAwAAAogFQArgFBGAJQBBAJAngBIAAAAQAjAAAtgFIACgBIADAAIACAAIAAAAIAGgBIAEAAIABAAQAHABAHAFQAHAGABALQABAJgGAIQgGAIgKABIgBAAIAAAAIgEAAIgDABIAAAAIgBAAIgDAAQgHAAgCgCIADABIgRgMQgHAPATgBQgqAFghAAIAAAAQgrABhEgJQg/gJgmAFQgqAFg0AAQg1AAgtgLQgkgHg3ASQgtAPgjAAQgXAAgTgGgAxNAaIgKgEQgJgEgEgJQgFgJAEgJQAEgKAKgEQAFgCAFAAQAEAAAFACQAdALAzgDQA6gDA9ABIAAAAQA6ABApgEIAAAAQAsgFAzAAIABAAIBZAAIBYABQAwABBHgCQAKAAAIAHQAHAHABALQAAAJgHAHQgIAIgKAAQhIACgwgBIhYgBIhZAAIAAAAQgxAAgqAEQgrAFg+gBQg7gBg4ADIgZABQgoAAgbgJgAiZAcQgvgIg0AEIAAAAQg6AFgqgFQgKgBgGgJQgGgIABgJQABgKAIgHQAJgGAKABQAlAFA0gFIAAAAQA7gFA1AJQAwAIAugCQAygCA2gBIAAAAQA1gBA2gDQA5gDAhAAQAKAAAHAHQAIAIAAAKQAAAJgIAIQgHAHgKAAQggAAg3ADQg4ADg1ABQg2ABgwACIgYABQgpAAgpgHg");
	this.shape_7.setTransform(110.2,50.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Eg+fAu4MAAAhVbQAkALA4gDQA5gDA6AAQA+ACAsgFQAqgEAwgBIAAAAIBZABIBYABQAxABBHgCQALAAAHgIQAHgHAAgKQAAgLgIgHQgHgHgLAAQhHABgvAAIhYgBIhaAAIAAAAQgzAAgsAFIgBAAQgpAEg6gBIAAAAQg9gCg6AEQgyADgegLQgEgCgFAAIAAngMB8/AAAMAAABdvgEglQgmlQA4gTAkAIQAsALA1AAQA0AAAqgFQAngFA+AJQBFAJAqgBIABAAQAhAAApgFQgTABAHgPIASAMIgDgBQABACAIAAIADAAIAAgBIABAAIADAAIADAAIAAAAIABAAQAKgBAHgJQAGgHgBgLQgBgKgIgGQgGgGgIAAIgBAAIgEAAIgFABIgBAAIgCAAIgCAAIgCABQgtAFgjAAIAAAAQgoABhAgJQhHgJgrAFQgnAFgxAAQguAAgogJQgvgMhIAYQg2ASglgKIgBAAQgugOg5ADQgLABgGAHQgHAIAAAKQABALAHAHQAIAGAKAAQAwgCAnALIAAAAQAxAQBJgZgEgvqgmhQA1AJA0gDQAygCA1gCQA2AAA3gDQA3gDAgAAQAKAAAIgHQAHgIAAgKQAAgKgHgIQgIgHgKAAQghAAg4ADQg3ADg1ABIAAAAQg2AAgyADQgvACgwgIQg1gJg7AFIAAAAQg0AFglgFQgKgBgIAGQgIAHgCAKQgBAKAGAIQAHAIAKACQApAFA7gFIAAAAIAjgBQAhAAAfAFg");
	this.shape_8.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.btnBack},{t:this.btnStart},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.howScreen, new cjs.Rectangle(-2.5,-1,903.5,602), null);


(lib.creditScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg+fgu3MB8/AAAMAAABdvMh8/AAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AKhwyIDIAAIAACmIAACnIjIAAIAAinIAAimIveAAIAACmIBbAAIODAAAbtuMIBtAAIAAimIvxAAAbtrlIAACnIAACnI/PAAIAAinIAAinIAAinAbtuMIAACnIuEAAANpuMIOEAAAjijxIAACnIfPAAIAAinIAAimAXmVYIAACmIAACmIAACoI/PAAIAACmIAACnIfPAAIAAinIAAimAXmVYIBtAAIAAioIvxAAIAACoIAACmIjIAAIAAimIAAioIveAAIAACoIBbAAIODAAEADZgiYIE+E/IrCLDIk+k/gAyW/IIE/E+IrDLDIk/k+gAnpX+IAAimAGaSwIDIAAAGaX+IuDAAAjimXIAACmIfPAAAnpdMIAAioIAAimAXmakI/PAAAnpfyIfPAAAXmX+IuEAAAJiVYIOEAAAKhrlIuDAAAbto+I/PAA");
	this.shape_1.setTransform(580.8,236.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("Ay4EqILErCIE+E/IrDLBgAC3BbILDrDIE/E/IrELCg");
	this.shape_2.setTransform(513.5,77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjnUZIAAinIAAinIDJAAIAACnIAACngAAgvKIAAinIAAinIDIAAIAACnIAACng");
	this.shape_3.setTransform(644.9,259);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("Ax0ZmIAAinIfQAAIAACngAx0W/IAAimIfQAAIAACmgAx0W/gAx0UZIAAinIfQAAIAACngAx0RyIAAimIAAinIhbAAIAAinIPfAAIAACnIuEAAIOEAAIAACnIDJAAIODAAIAACmgAjwPMIuEAAgAx0RygAgnPMIAAinIODAAIuDAAIAAinIPwAAIAACnIhtAAIAACngAgnMlgAjwMlgAtsp9IAAinIfPAAIAACngAtsskIAAimIfPAAIAACmgAtsskgAtsvKIAAinIfPAAIAACngAtsxxIAAimIODAAIuDAAIAAinIhcAAIAAinIPfAAIAACnIuDAAIODAAIAACnIDIAAIAAinIAAinIPxAAIAACnIhtAAIuEAAIOEAAIAACnIuEAAIOEAAIAACmgAAX2+g");
	this.shape_4.setTransform(645.8,292.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(2,1,1).p("EgphgMsMBTDAAAIAAZZMhTDAAAg");
	this.shape_5.setTransform(265.8,500.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("EgphAMtIAA5ZMBTDAAAIAAZZg");
	this.shape_6.setTransform(265.8,500.3);

	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(5,70);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;

	this.btnStart = new lib.btnStart();
	this.btnStart.parent = this;
	this.btnStart.setTransform(597,491);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 1);

	this.btnBack = new lib.btnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(595,545);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AstAhQgygJgxgFQgKgBgGgJQgHgIABgJQABgKAIgHQAIgGAKABQA0AFAzAKQAwAKAlgBIAAAAQAlAAA5gMIABAAQA/gMAxAAIBkAAQA3AAAyAHIABAAQAsAHAugNQAKgDAJAFQAJAFADAKQADAKgFAIQgFAJgKADQg5AQg3gJQgvgGgzAAIhkAAQgtAAg6ALQg/ANgpAAIAAAAIgEAAQgnAAgzgKgACWAdQg1gLgwAEQgzAFgzgCQgzgBg2gFQgLgBgGgIQgHgIABgKQABgKAIgHQAIgGAKABQA1AFAxABQAxACAwgFIAAAAQA2gEA9AMIAAAAQAyAKAegKIABAAQAogNAwABIAAAAQArACA7gIQBCgJA2AMQAtAKArgGQALgBAIAGQAIAGACAKQABAJgGAJQgGAIgLABQgzAIg3gMQgtgKg6AHQg/AJgugCIAAAAQgogBggAKIAAAAQgVAIgcAAQgaAAgfgGgAKxASQgKgCgFgJQgGgIADgKQACgKAJgGQAJgFAKACQAqALArgDIAAAAQAqgCAbgKIAAgBQAygUAYAiQAHAIgBAKQgBAKgIAGQgIAHgLgCQgKgBgHgIQgFgDgLAFIAAAAQghAOg0ACIgBAAIgSABQgpAAgogKg");
	this.shape_7.setTransform(91,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.btnBack},{t:this.btnStart},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_8.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.creditScreen, new cjs.Rectangle(-2.5,-1,905.5,602), null);


// stage content:
(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//------------------------------------------------------------------
		// Program: PF01ASG02.fla
		// Author: Wong Jia He
		// Date Created: 6/7/2017
		// Date Modified:
		// Description: Game
		//------------------------------------------------------------------
		
		//Global Variables
		
		var commSpeed = 5; //Store speed of tank
		var tankLeft;
		var tankRight;
		var tankUp;
		var tankDown;
		var turretLeft;
		var turretRight;
		var turretUp;
		var turretDown;
		var main;
		var gameLoopBd = gameLoop.bind(this);
		var playerTank;
		var playerTurret;
		var tankMove;
		var turretMove;
		
		/*var shield;
		var heal1;
		var heal2;
		var heal3;
		var speedBoost;
		var landMine1;
		var landMine2;
		var landMine3;
		var landMine4;
		var landMine5;*/
		
		var initGameBd = initGame.bind(this);
		var endGameBd = endGame.bind(this);
		var endGame2Bd = endGame2.bind(this);
		var winGameBd = winGame.bind(this);
		var checkEndGameConditionsBd = checkEndGameConditions.bind(this);
		var checkEndGameConditions2Bd = checkEndGameConditions2.bind(this);
		var checkWinGameConditionsBd = checkWinGameConditions.bind(this);
		var removeEnemiesBd = removeEnemies.bind(this)
		
		var enemy;
		var enemies =[]; //Array to store enemies
		
		//var enemy2;
		//var enemies2 =[];
		
		var life;
		var life =[];
		
		var score = 0;  
		var countdownTimer;  
		var timeLeft; 
		var countdownHandlerBd = countdownHandler.bind(this);
		
		var bullet;
		var bSpeed = 5; 
		var acc = 0.4; 
		var fire; 
		var main; 
		var dist; 
		var bullets = [];
		var whichBullet = 0;
		var maxNoOfBullets = 3; 
		var angle = 0;  
		var angleInRad; 
		
		var shootSound;
		var expSound;
		
		main = this;
		
		//Add event listener
		this.startScreen.btnStart.addEventListener("click", startGame.bind(this));
		this.startScreen.btnHow.addEventListener("click", startGuide.bind(this));
		this.startScreen.btnCredit.addEventListener("click", startCredit.bind(this));
		this.howScreen.btnBack.addEventListener("click", startHome.bind(this));
		this.howScreen.btnStart.addEventListener("click", startGame.bind(this));
		this.creditScreen.btnBack.addEventListener("click", startHome.bind(this));
		this.creditScreen.btnStart.addEventListener("click", startGame.bind(this));
		this.winScreen.btnBack.addEventListener("click", startHome.bind(this));
		this.loseScreen.btnRestart.addEventListener("click", startGame.bind(this));
		this.loseScreen.btnBack.addEventListener("click", startHome.bind(this));
		this.timeUpScreen.btnRestart.addEventListener("click", startGame.bind(this));
		this.timeUpScreen.btnBack.addEventListener("click", startHome.bind(this));
		window.addEventListener("keydown", keyDownHandler.bind(this));
		window.addEventListener("keyup", keyUpHandler.bind(this));
		
		/*----------Display of each screen----------*/
		//Hide start screen
		this.howScreen.visible = false;
		this.creditScreen.visible = false;
		
		// Function: Initialise game
		function initGame() {
			score = 0;
			this.numScore.txtScore.text = String(score);
			life = [0,1,2,3,4,5];
			this.numLife.txtLife.text = life.length;
			timeLeft = 10;
			this.numTime.txtTime.text = String(timeLeft);
		}
		
		// Function: Start game
		function startGame(evt) {
			this.startScreen.visible = false;  //Hide home page
			this.howScreen.visible = false;    //Hide guide page
			this.creditScreen.visible = false; //Hide credit page
			this.loseScreen.visible = false; //Hide credit page
			this.winScreen.visible = false; //Hide credit page
			this.lvl1Screen.visible = true;
			this.numScore.visible = true;
		    this.numLife.visible = true;
			this.numTime.visible = true;
			initGameBd();
			createPlayer(main);                //Create tank
		    createBullets(maxNoOfBullets);     // Create bullets 
		    createEnemies(main)              //Create enemies
			
			countdownTimer = window.setInterval(countdownHandlerBd, 1000);  
			
			createjs.Ticker.addEventListener("tick", gameLoopBd);
		}
		
		// Function: Run instruction page
		function startGuide(evt) {
			this.startScreen.visible = false;  //Hide home page
			this.creditScreen.visible = false; //Hide credit page
			this.lvl1Screen.visible = false;   //Hide level 1 
			this.howScreen.visible = true;     //Show guide screen
		}
		
		// Function: Go to credit page
		function startCredit(evt) {
			this.startScreen.visible = false;  //Hide home page
			this.howScreen.visible = false;    //Hide guide page
			this.lvl1Screen.visible = false;   //Hide level 1 
			this.creditScreen.visible = true;   //Show credit page
		}
		
		// Function: Go to home page
		function startHome(evt) {
			this.startScreen.visible = true;   //Show home page
		}
		
		// Function: Go to home page
		function muteSound(evt) {
			this.startScreen.visible = true;   //Show home page
		}
		
		/*----------Genrate Items----------*/
		//Function: Create player
		function createPlayer(main){
			playerTank = new lib.Tank();//Create tank
			playerTank.x = 365;
			playerTank.y = 548;
			playerTank.setBounds(playerTank.x,playerTank.y, 50, 50);
			main.addChild(playerTank);
			
			playerTurret = new lib.Turret();//Create turret
			playerTurret.x = 390;
			playerTurret.y = 571;
			playerTurret.setBounds(playerTurret.x,playerTurret.y, 22.5, 22.5);
		    main.addChild(playerTurret);
		}
		
		//Function: Create enemy
		function createEnemies(main){
			//Create 10 Enemies
			for (var i =0;i<10;i++){
			enemy = new lib.Enemy();
			enemy.x = Math.random()*1000 + 1000;
			enemy.y = Math.random()*400+ 100;
			enemy.name ="enemy";
			enemy.gs = Math.random()*4 + 5;
			enemy.setBounds(enemy.x, enemy.y, 100, 50);
		    enemies[i] = enemy;//Add to enemy array
			main.addChild(enemy);
			}
		}
		
		////Function: Create shield drop
		//function createShieldDrop(main){
		//	shieldDrop = new lib.ShieldDrop();//Create shield drop
		//	shieldDrop = enemies[i].x;
		//	shieldDrop.y = enemies[i].y;
		//	shieldDrop.setBounds(shieldDrop.x,shieldDrop.y, 50, 50);
		//	main.addChild(shieldDrop);
		//}
		
		////Function: Create shield
		//function createShield(main){
		//	shield = new lib.Shield();//Create shield
		//	shield = playerTank.x;
		//	shield.y = playerTank.y;
		//	shield.setBounds(shield.x,shield.y, 55, 55);
		//	main.addChild(shield);
		//}
		
		//// Function: Create healing pack
		//function createHeal1(main) {
		//	if (enemies.length == 4) {
		//	heal1 = new lib.Heal1();//Create heal pack
		//	heal1.x = enemies[i];
		//	heal1.y = enemies[i];
		//	heal1.setBounds(heal1.x,heal1.y, 50, 50);
		//	main.addChild(heal1);
		//	}
		//}
		
		//// Function: Create healing pack 2
		//function createHeal2(main) {
		//	if (enemies.length == 4) {
		//	heal2 = new lib.Heal2();//Create heal pack
		//	heal2.x = enemies[i];
		//	heal2.y = enemies[i];
		//	heal2.setBounds(heal2.x,heal2.y, 50, 50);
		//	main.addChild(heal2);
		//	}
		//}
		
		//// Function: Create healing pack 3
		//function createHeal3(main) {
		//	if (enemies.length == 4) {
		//	heal3 = new lib.Heal2();//Create heal pack
		//	heal3.x = enemies[i];
		//	heal3.y = enemies[i];
		//	heal3.setBounds(heal3.x,heal3.y, 50, 50);
		//	main.addChild(heal3);
		//	}
		//}
		
		//// Function: Create speed boost
		//function createSpeedBoost(main) {
		//	if (enemies.length == 4) {
		//	speedBoost = new lib.SpeedBoost();//Create speed boost
		//	speedBoost.x = enemies[i];
		//	speedBoost.y = enemies[i];
		//	speedBoost.setBounds(heal.x,heal.y, 50, 50);
		//	main.addChild(speedBoost);
		//	}
		//}
		
		//// Function: Create land mine 1
		//function createLandMine1(main) {
		//	if (enemies.length == 4) {
		//	landMine = new lib.LandMine();//Create land mine
		//	landMine.x = enemies[i];
		//	landMine.y = enemies[i];
		//	landMine.setBounds(landMine.x,landMine.y, 50, 50);
		//	main.addChild(landMine);
		//	}
		//}
		
		//// Function: Create land mine 2
		//function createLandMine2(main) {
		//	if (enemies.length == 3) {
		//	landMine2 = new lib.LandMine2();//Create land mine
		//	landMine2.x = enemies[i];
		//	landMine2.y = enemies[i];
		//	landMine2.setBounds(landMine2.x,landMine2.y, 50, 50);
		//	main.addChild(landMine2);
		//	}
		//}
		
		//// Function: Create land mine 3
		//function createLandMine3(main) {
		//	if (enemies.length == 3) {
		//	landMine2 = new lib.LandMine2();//Create land mine
		//	landMine2.x = enemies[i];
		//	landMine2.y = enemies[i];
		//	landMine2.setBounds(landMine3.x,landMine3.y, 50, 50);
		//	main.addChild(landMine2);
		//	}
		//}
		
		//// Function: Create land mine 4
		//function createLandMine4(main) {
		//	if (enemies.length == 3) {
		//	landMine4 = new lib.LandMine4();//Create land mine
		//	landMine4.x = enemies[i];
		//	landMine4.y = enemies[i];
		//	landMine4.setBounds(landMine4.x,landMine4.y, 50, 50);
		//	main.addChild(landMine4);
		//	}
		//}
		
		//// Function: Create land mine 5
		//function createLandMine5(main) {
		//	if (enemies.length == 3) {
		//	landMine5 = new lib.LandMine5();//Create land mine
		//	landMine5.x = enemies[i];
		//	landMine5.y = enemies[i];
		//	landMine5.setBounds(landMine5.x,landMine5.y, 50, 50);
		//	main.addChild(landMine5);
		//	}
		//}
		
		// Function: Create timer
		function countdownHandler() {
			timeLeft--;
			this.numTime.txtTime.text = String(timeLeft);
		}
		
		/*----------Create game loop----------*/
		function gameLoop(evt) {
			moveTank();
			rotateTurret();
			moveBullets(main);		
			for (var i =0;i<enemies.length;i++){
				enemies[i].x -=enemies[i].gs;
				
				if(enemies[i].x <-300){
				   enemies[i].x = Math.random()*1000 + 1000;
				   enemies[i].y = Math.random()*400 + 100;
				}
				
				if(hitTestObject(playerTank,enemies[i])){
					/*console.log("There s a hit");*/
					score += 10;
				    this.numScore.txtScore.text = String(score);
					this.removeChild(enemies[i]);
					enemies.splice(i,1);
					i--;
					life.splice(-1,1);
					i--;
					this.numLife.txtLife.text = life.length;
					expSound = createjs.Sound.createInstance("ExpSound");
					expSound.play();
					expSound = createjs.Sound.createInstance("ExpSound");
					expSound.stop();
					//createShieldDrop();
					//createShield();
					//createSpeedBoost();
					//createHeal1();
					//createHeal2();
					//createHeal3();
					//createLandMine1();
					//createLandMine2();
					//createLandMine3();
					//createLandMine4();
					//createLandMine5();
			    }
				//if(hitTestObject(shield,enemies[i])){
				//	/*console.log("There s a hit");*/
				//	score += 10;
				//    this.numScore.txtScore.text = String(score);
				//	this.removeChild(enemies[i]);
				//	enemies.splice(i,1);
				//	i--;
				//  //createShieldDrop();
				//	//createShield();
				//	//createSpeedBoost();
				//	//createHeal1();
				//	//createHeal2();
				//	//createHeal3();
				//	//createLandMine1();
				//	//createLandMine2();
				//	//createLandMine3();
				//	//createLandMine4();
				//	//createLandMine5();
			    //}
				
				for (var j =0;j<bullets.length;j++) {
					if(hitTestObject(bullets[j],enemies[i])){
						//console.log("There s a hit");
						score += 10;
						this.numScore.txtScore.text = String(score);
						this.removeChild(enemies[i]);
						this.removeChild(bullets[j]);
						bullets[j].dx = 0;
						bullets[j].dy = 0;
						bullets[j].acc = 0;
						bullets[j].dist = 0;
						bullets[j].isMoving = false;
						enemies.splice(i,1);
						i--;
						expSound = createjs.Sound.createInstance("ExpSound");
				        expSound.play();
						expSound = createjs.Sound.createInstance("ExpSound");
				        expSound.stop();
						//createShieldDrop();
						//createShield();
						//createSpeedBoost();
						//createHeal1();
						//createHeal2();
						//createHeal3();
						//createLandMine1();
						//createLandMine2();
						//createLandMine3();
						//createLandMine4();
						//createLandMine5();
					} 
				} 
				
			    this.numTime.txtTime.text = String(timeLeft);
		    }
			checkEndGameConditionsBd();
			checkEndGameConditions2Bd();
			checkWinGameConditionsBd();
		}
		
		/*function timeCheck(){
		   if(enemies.length <=0){
			    if (timeLeft <= 50){
					score += 20;
					}  
			    else if (timeLeft <= 40){
					score += 15;
					}  
				else if (timeLeft <= 30){
					score += 10;
		            }  
			    else if (timeLeft <= 20){
			        score += 5;
			        }
			}
		}*/
		
		function checkEndGameConditions() {
			if (life.length <= 0) {
				endGameBd();
			}
		}
		
		function checkEndGameConditions2() {
			if (timeLeft <= 0){
				endGame2Bd();
			}
		}
		
		function checkWinGameConditions() {
			if (enemies.length <= 0) {
				winGameBd();
			}
		}
		
		//Function: End game
		function endGame() {
		createjs.Ticker.removeEventListener("tick", gameLoopBd);
			this.loseScreen.visible = true;  // Show end screen
			this.lvl1Screen.visible = false;
			this.removeChild(playerTank);
			this.removeChild(playerTurret);
			this.removeChild(enemies[i]);
			this.removeChild(bullets[i]);
			this.numScore.visible = false;
		    this.numLife.visible = false;
			this.numTime.visible = false;
			this.winScreen.txtScore.text = String(score);
			window.clearInterval(countdownTimer);
			removeEnemiesBd();
		}
		
		//Function: End game
		function endGame2() {
			createjs.Ticker.removeEventListener("tick", gameLoopBd);
			this.timeUpScreen.visible = true;  // Show end screen
			this.lvl1Screen.visible = false;
			this.removeChild(playerTank);
			this.removeChild(playerTurret);
			this.removeChild(enemies[i]);
			this.removeChild(bullets[i]);
			this.numScore.visible = false;
		    this.numLife.visible = false;
			this.numTime.visible = false;
			this.timeUpScreen.txtScore.text = String(score);
			window.clearInterval(countdownTimer);
			removeEnemiesBd();
		}
		
		//Function: win game
		function winGame() {
			createjs.Ticker.removeEventListener("tick", gameLoopBd);
			this.winScreen.visible = true;  // Show end screen
			this.lvl1Screen.visible = false;
			this.removeChild(playerTank);
			this.removeChild(playerTurret);
			this.removeChild(enemies[i]);
			this.removeChild(bullets[i]);
			this.numScore.visible = false;
		    this.numLife.visible = false;
			this.numTime.visible = false;
			this.winScreen.txtScore.text = String(score);
			removeEnemiesBd();
			window.clearInterval(countdownTimer);
		}
		
		function removeEnemies() {
			//  Remove enemies
			for (var i=0;i<enemies.length;i++) {
				this.removeChild(enemies[i]);
			}
			enemies.length = 0; 
		}
		
		/*----------Control of tank----------*/
		
		//Function: Handle key down press
		function keyDownHandler(evt){
			//console.log("Key Pressed: " + evt.keyCode);
			if(evt.keyCode == 68){
				tankRight = true;
			}
			else if(evt.keyCode == 65){
				tankLeft = true;
			}
			else if(evt.keyCode == 87){
				tankUp = true;
			}
			else if(evt.keyCode == 83) {
				tankDown = true;
			}
			else if(evt.keyCode == 69){
				turretRight = true;
			}
			else if(evt.keyCode == 82){
				turretUp = true;
			}
			else if(evt.keyCode == 70){
				turretDown = true;
			}
			else if(evt.keyCode == 81) {
				turretLeft = true;
			}
			else if (evt.keyCode == 75) { 
				bullet = bullets[whichBullet];
				if (!bullet.isMoving) {
					bullet.x = playerTurret.x;  
					bullet.y = playerTurret.y;
					
					angleInRad = angle * Math.PI / 180;
			
					console.log(angle);
					
					bullet.dx = Math.round(Math.cos(angleInRad)*bSpeed);
					bullet.dy = Math.round(Math.sin(angleInRad)*bSpeed);
					bullet.speed = bSpeed;
					bullet.acc = acc;
					bullet.dist = 0;
					bullet.isMoving = true;
					
					main.addChild(bullet);
					whichBullet++;  // Move to next bullet
					
					shootSound = createjs.Sound.createInstance("TankFiring");
					shootSound.play();
		
					if (whichBullet >= maxNoOfBullets) {
						whichBullet = 0;  // Go back to first bullet.  
					}
				}
			}
		}
		
		// Function: Handle key up press
		function keyUpHandler(evt){
			//console.log("Key Pressed: " + evt.keyCode);
			if(evt.keyCode == 68){
				tankRight = false;
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.stop();
			}
			else if(evt.keyCode == 65){
				tankLeft = false;
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.stop();
			}
			else if(evt.keyCode == 87){
				tankUp = false;
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.stop();
			}
			else if(evt.keyCode == 83) {
				tankDown = false;
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.stop();
			}
			else if(evt.keyCode == 69){
				turretRight = false;
				turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.stop();
			}
			else if(evt.keyCode == 82){
				turretUp = false;
				turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.stop();
			}
			else if(evt.keyCode == 70){
				turretDown = false;
				turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.stop();
			}
			else if(evt.keyCode == 81) {
				turretLeft = false;
			    turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.stop();
			}
		}
		
		// Function: Move tank
		function moveTank() {	
			if (tankUp) {
				playerTank.y -= commSpeed;
				playerTurret.y -= commSpeed;
				//shield.y -= commSpeed;
				setAnimationState("tu");
				setAnimationState("u");
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.play();
				angle = -90;
			}
			if (tankRight) {
				playerTank.x += commSpeed;
				playerTurret.x += commSpeed;
				//shield.x += commSpeed;
				setAnimationState("tr");
				setAnimationState("r");
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.play();
				angle = 0;
			}
			if (tankDown) {
				playerTank.y += commSpeed;
				playerTurret.y += commSpeed;
				//shield.y += commSpeed;
				setAnimationState("td");
				setAnimationState("d");
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.play();
				angle = 90;
			}
			if (tankLeft) {
				playerTank.x -= commSpeed;
				playerTurret.x -= commSpeed;
				//shield.x -= commSpeed;
				setAnimationState("tl");
				setAnimationState("l");
				tankMove = createjs.Sound.createInstance("TankMove");
				tankMove.play();
				angle = 180;
			}
		}
		
		// Function: Rotate Turret
		function rotateTurret() {	
			if (turretUp) {
				setAnimationState("u");
				turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.play();
				angle = -90;
			}
			
			if (turretDown) {
				setAnimationState("d");
				turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.play();
				angle = 90;
			}
			
			if (turretLeft) {
				setAnimationState("l");
				turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.play();
				angle = 180;
			}
			
			if (turretRight) {
				setAnimationState("r");
			    turretMove = createjs.Sound.createInstance("TurretMove");
				turretMove.play();
				angle = 0;
			}
		}
		
		// Function: Control animation state
		function setAnimationState(state) {
			if (state == "tu") {
				playerTank.gotoAndStop("tu");
			}
			else if (state == "tr") {
				playerTank.gotoAndStop("tr");
			}
			else if (state == "td") {
				playerTank.gotoAndStop("td");
			}
			else if (state == "tl") {
				playerTank.gotoAndStop("tl");
			}
			if (state == "u") {
				playerTurret.gotoAndStop("u");
			}
			else if (state == "r") {
				playerTurret.gotoAndStop("r");
			}
			else if (state == "d") {
				playerTurret.gotoAndStop("d");
			}
			else if (state == "l") {
				playerTurret.gotoAndStop("l");
			}
		}
		
		/*----------Firing Mechanism----------*/
		
		//Function: Create bullets
		function createBullets(noOfBullets) {
			for (var i=0;i<noOfBullets;i++) {
				bullet = new lib.Bullet();
				bullet.dx = 0;  
				bullet.dy = 0;  
				bullet.acc = 0; 
				bullet.speed = 0; 
				bullet.isMoving = false;
				bullet.setBounds(bullet.x,bullet.y, 5, 5);
				bullets.push(bullet); // Add to array
			}
		}
		
		//Function: Move bullets
		function moveBullets(main) {
		
			for (var i=0;i<bullets.length;i++) {
				if (bullets[i].isMoving) {
					bullets[i].speed += bullets[i].acc;
					bullet.dx = Math.round(Math.cos(angleInRad)*bullets[i].speed);
					bullet.dy = Math.round(Math.sin(angleInRad)*bullets[i].speed);
					//bullets[i].dx += bullets[i].acc; 
					//bullets[i].dy += bullets[i].acc; 
					bullets[i].x += bullets[i].dx; 
					bullets[i].y += bullets[i].dy; 
					bullets[i].dist += Math.sqrt(Math.pow(bullets[i].dx,2) + Math.pow(bullets[i].dy,2));
					
				
					if (bullets[i].isMoving && bullets[i].dist > 1000) { 
						bullets[i].dx = 0;
						bullets[i].dy = 0;
						bullets[i].acc = 0;
						bullets[i].dist = 0;
						bullets[i].isMoving = false;
						
						main.removeChild(bullets[i]);  
					}
				}
			}
		}
		
		/*----------Collision----------*/
		
		function hitTestObject(obj1, obj2) {	
			var hit = false;
			
			// Get bounds
			var boundsObj1 = obj1.getBounds();
			var boundsObj2 = obj2.getBounds();
			
			// Distance between objects
			var vx = (obj1.x + boundsObj1.width/2) - (obj2.x + boundsObj2.width/2);
			var vy = (obj1.y + boundsObj1.height/2) - (obj2.y + boundsObj2.height/2);
			
			//Figure out the combined half-widths and half-heights
			var combinedHalfWidths = boundsObj1.width/2 + boundsObj2.width/2;
			var combinedHalfHeights = boundsObj1.height/2 + boundsObj2.height/2;
		
			//Check for a collision on the x axis
			if (Math.abs(vx) < combinedHalfWidths) {
				//A collision might be occuring. Check for a collision on the y axis
				if (Math.abs(vy) < combinedHalfHeights) {
					//There's definitely a collision happening
					hit = true;
				} 
				else {
					//There's no collision on the y axis
					hit = false;
				}   
			}
			else {
				//There's no collision on the x axis
				hit = false;
			}
		
			return hit;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Start
	this.startScreen = new lib.startScreen();
	this.startScreen.parent = this;
	this.startScreen.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.startScreen).wait(1));

	// Guide
	this.howScreen = new lib.howScreen();
	this.howScreen.parent = this;
	this.howScreen.setTransform(0,275,1,1,0,0,0,0,275);

	this.timeline.addTween(cjs.Tween.get(this.howScreen).wait(1));

	// Credit
	this.creditScreen = new lib.creditScreen();
	this.creditScreen.parent = this;
	this.creditScreen.setTransform(0,227,1,1,0,0,0,0,227);

	this.timeline.addTween(cjs.Tween.get(this.creditScreen).wait(1));

	// Game Display
	this.numTime = new lib.numTime();
	this.numTime.parent = this;
	this.numTime.setTransform(314.8,25,1,1,0,0,0,0,13.9);

	this.numScore = new lib.numScore();
	this.numScore.parent = this;
	this.numScore.setTransform(212.1,36.1,0.993,1,0,0,0,53,25);

	this.numLife = new lib.numLife();
	this.numLife.parent = this;
	this.numLife.setTransform(12.1,11.1,0.722,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.numLife},{t:this.numScore},{t:this.numTime}]}).wait(1));

	// Game Play
	this.lvl1Screen = new lib.lvl1Screen();
	this.lvl1Screen.parent = this;
	this.lvl1Screen.setTransform(0,275,1,1,0,0,0,0,275);

	this.timeline.addTween(cjs.Tween.get(this.lvl1Screen).wait(1));

	// Win Game
	this.winScreen = new lib.winScreen();
	this.winScreen.parent = this;
	this.winScreen.setTransform(187.7,150,1,1,0,0,0,187.7,150);

	this.timeline.addTween(cjs.Tween.get(this.winScreen).wait(1));

	// Time Up
	this.timeUpScreen = new lib.timeUpScreen();
	this.timeUpScreen.parent = this;
	this.timeUpScreen.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.timeUpScreen).wait(1));

	// Lose Game
	this.loseScreen = new lib.loseScreen();
	this.loseScreen.parent = this;
	this.loseScreen.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.loseScreen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.1,288.1,836,613);
// library properties:
lib.properties = {
	id: '6D5171323170E14D9FAAF081BEF9CB0C',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Game_atlas_.png?1501736465447", id:"Game_atlas_"},
		{src:"sounds/ExpSound.mp3?1501736465517", id:"ExpSound"},
		{src:"sounds/TankFiring.mp3?1501736465517", id:"TankFiring"},
		{src:"sounds/TurretMove.mp3?1501736465517", id:"TurretMove"},
		{src:"sounds/TankMove.mp3?1501736465517", id:"TankMove"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6D5171323170E14D9FAAF081BEF9CB0C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;