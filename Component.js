import { useState, useEffect, useMemo } from './MyReact.js';

export default function Component({ propCount, buttonElement }) {
    const [count, setCount] = useState(0);
    const propCountDoubled = useMemo(() => {
        console.log('use memo');
        return propCount * 2;
    }, [propCount]);


    useEffect(() => {
        const handler = () => setCount(currentCount => currentCount + 1);
        buttonElement.addEventListener('click', handler);

        return () => buttonElement.removeEventListener('click', handler);
    }, [buttonElement])

    return `
    State: ${count} 
    Prop: ${propCount}
    Prop Doubled: ${propCountDoubled}
    `
}