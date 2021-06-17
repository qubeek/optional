const ProxyOptions = {
    enumerable: true,
    get: function (target, prop, receiver) {
        if (Object.keys(target).length === 0)
            return null

        return target[prop]
    },
}

/**
 * Helper function, that ignores chains if target is null or undefined.
 * @param {Object} target
 * @returns {null}
 */
export default function optional(target= null) {
    if (target === null || target === undefined)
        target = {}

    // Should skip proxying for non-object values.
    if (typeof target !== 'object')
        return target

    // Just return Proxy.
    return new Proxy(target, ProxyOptions)
}
