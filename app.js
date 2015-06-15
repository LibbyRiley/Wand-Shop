(function() {

    var app = angular.module('wandStore', []);

    app.controller('StoreController', function(){
        this.products = wands;
    });

    app.controller('ReviewController', function(){
    	this.review = {};

    	this.addReview = function(product){
            this.review.createdOn = Date.now();
    		product.reviews.push(this.review);
    		this.review = {};
    	};
    });

    /* Product title, image, price, add to cart button */
    app.directive("productTitle", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    /* Product info: wood, core, langth, flexibility, and reviews */
    app.directive("productTabs", function() {
        return {
            restrict: "E",
            templateUrl: "product-tabs.html",
            controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

    app.directive('woodDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'wood-description.html'
        };
    });

    app.directive('coreDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'core-description.html'
        };
    });

    app.directive('productSpecs', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: "E",
            templateUrl: "product-reviews.html"
        };
    });

    /* Array containing product descriptions */
    var wands = [
    { 
    	wood: 'Elder', 
    	woodInfo: 'The rarest wand wood of all, and reputed to be deeply unlucky, elder wands are trickier to master than any other. \n\nThey contain powerful magic, but scorn to remain with any owner who is not the superior of his or her company; it takes a remarkable wizard to keep an elder wand for any length of time. The old superstition, \'wand of elder, never prosper,\' has its basis in this fear of the wand, but in fact, the superstition is baseless, and those foolish wandmakers who refuse to work with elder do so more because they doubt they will be able to sell their products than from fear of working with this wood. The truth is that only a highly unusual person will find their perfect match in elder, and on the rare occasion when such a pairing occurs, it may be taken as certain that the witch or wizard in question is marked out for a special destiny. Interestingly, Garrick Ollivander found - during his long years of study - that the owners of elder wands almost always feel a powerful affinity with those chosen by rowan.',
    	length: 13.5, 
    	core: 'Dragon Heartstring', 
    	coreInfo: 'Dragon heartstring is a material from a dragon that can be used in the core of a wand. It is unknown from which varieties of dragon the heartstrings are collected, and what effect this difference makes on the abilities of the wand, if any. Due to the heart being a vital organ in any creature, it can be assumed that the material is taken after the dragon has either died of natural causes or been killed. It is also unknown what quantity of string can be collected from each beast\'s heart. As a rule, dragon heartstrings produce wands with the most power, capable of the most flamboyant spells. Dragon wands tend to learn quicker than other types. While they can change allegiance if won from their original master, they always bond strongly with the current owner. The dragon wand tends to be easiest to turn to the Dark Arts, though it will not incline that way of its own accord. It is also the most prone of the three cores to accidents, being somewhat temperamental. It also tends to be lethally hazardous if combined with certain woods.',
    	flexability: 'Bendy',
    	price: 220,
    	images:[
    	{
    		full: 'http://img4.wikia.nocookie.net/__cb20130807175734/harrypotter/images/4/43/Elder.png',
    		thumb: 'http://img2.wikia.nocookie.net/__cb20130807175734/harrypotter/images/thumb/4/43/Elder.png/250px-Elder.png'
    	}],
    	reviews: [{
        stars: 5,
        body: "I love this wand!",
        author: "joe@example.org",
        createdOn: 1397490980837
		}, {
		stars: 1,
		body: "This wand backfires.",
		author: "tim@example.org",
		createdOn: 1397490980837
		}]
    },
    { 
    	wood: 'Holly', 
    	woodInfo: 'Holly is one of the rarer kinds of wand woods; traditionally considered protective, it works most happily for those who may need help overcoming a tendency to anger and impetuosity. At the same time, holly wands often choose owners who are engaged in some dangerous and often spiritual quest. Holly is one of those woods that varies most dramatically in performance depending on the wand core, and it is a notoriously difficult wood to team with phoenix feather, as the wood\'s volatility conflicts strangely with the phoenix\'s detachment. In the unusual event of such a pairing finding its ideal match, however, nothing and nobody should stand in their way. Wizarding superstition holds that those with a wand made of holly are incompatible with those with a wand made of oak and should not marry.',
    	length: 11, 
    	core: 'Unicorn Hair',
    	coreInfo: 'Unicorn hair generally produces the most consistent magic, and is least subject to fluctuations and blockages. Wands with unicorn cores are generally the most difficult to turn to the Dark Arts. They are the most faithful of all wands, and usually remain strongly attached to their first owner, irrespective of whether he or she was an accomplished witch or wizard. Minor disadvantages of unicorn hair are that they do not make the most powerful wands (although the wand wood may compensate) and that they are prone to melancholy if seriously mishandled, meaning that the hair may \'die\' and need replacing.',
    	flexability: 'Brittle',
    	price: 310,
    	images: [
    	{
    		full: 'http://img3.wikia.nocookie.net/__cb20130807192409/harrypotter/images/b/b8/Holly.png',
    		thumb: 'http://img2.wikia.nocookie.net/__cb20130807192409/harrypotter/images/thumb/b/b8/Holly.png/230px-Holly.png'
    	}], 
    	reviews: [{
        stars: 3,
        body: "Sturdy, well-made, a bit on the wild side though.",
        author: "joe@example.org",
        createdOn: 1397490980837
		}, {
		stars: 2,
		body: "Way too expensive for the quality!",
		author: "tim@example.org",
		createdOn: 1397490980837
		}]
    },
    { 
    	wood: 'Oak',
    	woodInfo: 'A wand for good times and bad, this is a friend as loyal as the wizard who deserves it. Wands of English oak demand partners of strength, courage and fidelity. Less well-known is the propensity for owners of English oak wands to have powerful intuition, and, often, an affinity with the magic of the natural world, with the creatures and plants that are necessary to wizardkind for both magic and pleasure. The oak tree is called King of the Forest from the winter solstice up until the summer solstice, and its wood should only be collected during that time (holly becomes King as the days begin to shorten again, and so holly should only be gathered as the year wanes).', 
    	length: 10, 
    	core: 'Phoenix Feather', 
    	coreInfo: 'This is the rarest core type. Phoenix feathers are capable of the greatest range of magic, though they may take longer than either unicorn or dragon cores to reveal this. They show the most initiative, sometimes acting of their own accord, a quality that many witches and wizards dislike. Phoenix feather wands are always the pickiest when it comes to potential owners, for the creature from which they are taken is one of the most independent and detached in the world. These wands are the hardest to tame and to personalise, and their allegiance is usually hard won.',
    	flexability: 'Rather Whippy',
    	price: 395,
    	images: [
    	{
    		full: 'http://img3.wikia.nocookie.net/__cb20120718231206/harrypotter/images/b/bf/Oak.png',
    		thumb: 'http://img3.wikia.nocookie.net/__cb20120718231206/harrypotter/images/thumb/b/bf/Oak.png/250px-Oak.png'
    	}]
    }
  ];
})();