
const app = new Vue ({
    el: '#app',
    data: {
        isHidingFinishBlock: true, // скрыть финальный блок с кнопкой и счетом
        isHidingStartButton: false, // скрыть кнопку старт
        isHidingCardItem: true,  // скрыть окно с картинкой и кнопками
        isHidingCopyright: false, // скрыть копирайт
        buttonsColorSuccess: [false, false, false, false], // перключение классов с зеленым
        buttonsColorFail: [false, false, false, false], // перключение классов с красным
        switchHover: [true, true, true, true], // переделать через массив по аналогии

        cards: Seed.cards,
        count: 0, // индексы массива
        yourScore: 0 // счет набранный во время игры

    },
    methods: {
        startGame: function() { // начать игру
            this.isHidingStartButton = true;
            this.isHidingCardItem = false;
            this.isHidingCopyright = true;
        },
        choose: function(button) { // ф-я голоса

            let car = this.cards[this.count].btn[button];
            let rightCar = this.cards[this.count].right;
            let tempContext = this;

            Vue.set(this.switchHover, button, false); // выключить ховер, чтобы не перебивал при наведении верный/неверный ответ


            if (car == rightCar) { // сверяем значение от кнопки с верным и прибавляем +1 если условие true
                this.yourScore += 1;
                Vue.set(this.buttonsColorSuccess, button, true) // метод, чтобы массив был реактивным
            } else {
                Vue.set(this.buttonsColorFail, button, true)
            }

            setTimeout(function() {
                tempContext.switchHover[button] = true;
                tempContext.buttonsColorSuccess[button] = false;
                tempContext.buttonsColorFail[button] = false;
                tempContext.count = tempContext.count += 1; // идем по массиву с данными

                if (tempContext.count >= tempContext.cards.length) { // если массив с данными закончился, обнуляем счетчик, скрываем карточку и открываем финальный блок
                    tempContext.count = 0;
                    tempContext.isHidingCardItem = true;
                    tempContext.isHidingFinishBlock = false;
                }
            }, 1200, button);



        },
        restart: function() { // начать заново
            this.yourScore = 0;
            this.isHidingFinishBlock = true;
            this.isHidingCardItem = false;
        }
    }
})







