export default (...funcs) => (comp) => {
    return funcs.reduceRight((wrapped, f) => f(wrapped), comp)
}