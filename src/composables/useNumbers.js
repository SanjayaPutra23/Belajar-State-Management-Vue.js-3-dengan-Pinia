
import { ref } from 'vue';

export default function useNumbers() {
    const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const addNumber = () => {
        numbers.value.push(numbers.value.length + 1);
    }

    return {
        numbers,
        addNumber
    }
}