var app = new Vue({
    el: "#app",
    data: {
        restaurants: [{
                name: 'Zorto',
                lastComment: 'Dnes mají v zortu burger 🍔, který mohu jen doporučit 😋 ',
                stars: 4,
                id: 152
            },
            {
                name: 'Melina',
                lastComment: 'Do meliny už nechodit!! ',
                stars: 2,
                id: 168
            },
            {
                name: 'McDonald\'s',
                lastComment: 'Dnes Dolore anim id laboris qui culpa veniam.',
                stars: 3,
                id: 151
            },
            {
                name: 'Jidelna s.r.o.',
                lastComment: 'Eiusmod voluptate commodo quis veniam dolore in sunt.',
                stars: 1,
                id: 14
            },
            {
                name: 'Zradlo s.r.o.',
                lastComment: 'Magna minim laboris pariatur eu laborum proident sit magna elit qui velit ad est. ',
                stars: 5,
                id: 2
            }
        ],
        restaurantMenu: [{
            restaurantId: 152,
            soup: [{
                id: 1,
                name: "Česnečka",
                price: 39
            }, {
                id: 2,
                name: "Gulášová",
                price: 30
            }],

            main: [{
                id: 3,
                name: "Burger",
                price: 140
            }, {
                id: 4,
                name: "Koleno",
                price: 160
            }, {
                id: 5,
                name: "Řízek",
                price: 120
            }, {
                id: 6,
                name: "Mozzarella pizza pasta",
                price: 1111
            }],

        }, {
            restaurantId: 168,
            soup: [{
                id: 7,
                name: "Čočková",
                price: 99
            }],

            main: [{
                id: 8,
                name: "Čočka",
                price: 140
            }, {
                id: 9,
                name: "Smažík",
                price: 160
            }, {
                id: 10,
                name: "Chleba",
                price: 120
            }],

        }, {
            restaurantId: 151,
            soup: [],

            main: [{
                id: 11,
                name: "Tuňák",
                price: 140
            }, {
                id: 12,
                name: "Tučňák",
                price: 160
            }, {
                id: 13,
                name: "Kuře",
                price: 120
            }, {
                id: 14,
                name: "T-Rex Happy Meal",
                price: 999999
            }],

        }, {
            restaurantId: 14,
            soup: [{
                id: 15,
                name: "Cibulačka",
                price: 29
            }, {
                id: 16,
                name: "Chlebová",
                price: 90
            }, {
                id: 17,
                name: "Mléková",
                price: 30
            }],

            main: [{
                id: 18,
                name: "Jídlo 1",
                price: 140
            }, {
                id: 19,
                name: "Jídlo 2",
                price: 160
            }, {
                id: 20,
                name: "Jídlo 3",
                price: 120
            }, {
                id: 21,
                name: "Jídlo 4",
                price: 1111
            }],

        }, {
            restaurantId: 2,
            soup: [{
                id: 22,
                name: "Dobnrá polévka",
                price: 39
            }],

            main: [{
                id: 23,
                name: "Dobré jídlo 1",
                price: 140
            }, {
                id: 24,
                name: "Dobré jídlo 2",
                price: 160
            }, {
                id: 25,
                name: "Dobré jídlo 3",
                price: 120
            }, {
                id: 26,
                name: "Dobré jídlo 4",
                price: 89
            }, {
                id: 27,
                name: "Dobré jídlo 5",
                price: 127
            }, {
                id: 28,
                name: "Dobré jídlo 6",
                price: 121
            }, {
                id: 29,
                name: "Dobré jídlo 7",
                price: 120
            }],

        }],
        selected: undefined,
        selected2: [],
        star: "⭐",
        total: 0


    },

    methods: {
        selectedSoup: function (item) {
            return this.activeRestaurantMenu.soup.find(x => x.id == item);
        },
        selectedMain: function (item) {
            return this.activeRestaurantMenu.main.find(x => x.id == item);
        },
        addToBill: function (item) {
            this.selected2.push(item.id)
            this.total += item.price;
        },
        removeFromBill: function (item) {
            this.selected2.splice(this.selected2.indexOf(item.id), 1);
            this.total -= item.price;
        }
    },
    computed: {
        activeRestaurant: function () {
            return this.restaurants.find(x => x.id === this.selected);
        },
        activeRestaurantMenu: function () {
            return this.restaurantMenu.find(x => x.restaurantId === this.selected);
        }
    }
});