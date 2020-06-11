const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

module.exports = (obj) => {
    const {
        actions,
        cache,
        createNodeId,
        createResolvers,
        store,
        reporter,
    } = obj;
    const { createNode } = actions
    createResolvers({
        WPGraphQL_SimpleProduct: {
            // Add ImageFile for node type WPGraphQL_SimpleProduct only.
            imageFile: {
                type: `File`,
                resolve(source, args, context, info) {
                    return createRemoteFileNode({
                        url: source.image.sourceUrl.replace('https', 'http'),
                        store,
                        cache,
                        createNode,
                        createNodeId,
                        reporter,
                    })
                },
            },
        },
    })
}