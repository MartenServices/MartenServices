// export 
class Card{
    constructor(wrapper,amountCards){
        this.wrapper = wrapper;
        this.amountCards = amountCards;
        for(let i = 0; i < this.amountCards / 2; i++){
            for(let j = 0; j <= 1; j++){
                this.card = document.createElement('div');
                this.card.className = 'card';
                this.card.dataset.spider = `${i}`
                this,wrapper.append(this.card);
                this.card.addEventListener('click', flipCard);
                this.cardFront = document.createElement('img');
                this.cardFront.className = 'card-front';
                this.cardFront.src = `img/spider${i+1}.jpg`;
                this.cardBack = document.createElement('img');
                this.cardBack.className = 'card-back';
                this.card.append(this.cardFront, this.cardBack);
                this.determineSize(this.card, this.amountCards);
                this.wrapper.append(this.card);
            }
        }
    }
    //  
    //Funtion for determine size of cards
    determineSize = (card, amountCards) => {
        switch (amountCards) {
            case "8":
                card.style.width = "20%";
                card.style.height = "50%";
                break;
            case "16":
                card.style.width = "20%";
                card.style.height = "25%";
                break;
            case "20":
                card.style.width = "20%";
                card.style.height = "20%";
                break;
        }
        return card;
    };
}
