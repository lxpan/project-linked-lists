export default function NodeFactory(_value = null, _nextNode = null) {
    const value = _value;
    const nextNode = _nextNode;

    return {
        value,
        nextNode,
    };
}
