const manager = require('./../managers/indexManager');

module.exports = {
    async getAboutUs(ctx) {
        const text = await manager.aboutUs();
        ctx.body = text;
    },

    async changeAboutUs(ctx) {
        const { aboutUs } = ctx.request.body;
        await manager.changeAboutUs( aboutUs );
        ctx.response.status = 200;
    }

};
