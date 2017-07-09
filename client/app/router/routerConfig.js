
export default [
    {
        name:'start',
        url:"/start",
        template:'<start></start>',
        lazyload:require("bundle-loader?lazy&name=start!../components/start/start.js"),
        tracking:{
            key:'start'
        }
    },
]
