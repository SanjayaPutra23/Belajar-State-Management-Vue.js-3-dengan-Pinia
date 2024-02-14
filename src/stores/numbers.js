import { defineStore } from "pinia";

export const useNumbers = defineStore("numbers", {
    state: () => ({
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }),
    actions: {
        addNumber() {
            this.numbers.push(this.numbers.length + 1);
        }
    },
    getters: {
        doubleNumber: (state) => state.numbers.map(num => num * 2),
        filterNumber: (state) => {
            return (minNumber) => state.numbers.filter(num => num >= minNumber)
        },
    },
})