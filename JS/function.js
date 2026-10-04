export function useState(initialStste) {
    return [initialStste, () => {}];
}

export function useRef(ref) {
    return { current: ref };
}

const App = (Add) => {
    return "I am App Function";
}