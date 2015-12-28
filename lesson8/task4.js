


function Article() {
    this.created = new Date();
    Article.totalCreated = new Date();
    Article.totalCounter++;
    this.id = Article.totalCounter;
    this.showStats = function(){
        console.log('Date of creation: ' + this.created.toLocaleString());
        console.log('Id: ' + this.id);
    };
}

Article.totalCounter = 0;
Article.showTotalStats = function() {
    console.log('Date of the last creation: ' + Article.totalCreated.toLocaleString());
    console.log('Total created: ' + Article.totalCounter);
};


var article1 = new Article();
article1.showStats();
var article2 = new Article();
article2.showStats();
Article.showTotalStats(); // �����: 2, ���������: (����)

var article3 = new Article();

Article.showTotalStats(); // �����: 3, ���������: (����)
