if (typeof window !== 'undefined') {
    const { worker } = require('./browser')
    worker.start({
        onUnhandledRequest: 'bypass'
    })
} else {
    console.log('worker not started')
}
