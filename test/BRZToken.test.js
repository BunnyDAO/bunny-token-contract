const ETAToken = artifacts.require('ETAToken');
contract('ETAToken', accounts => {
    let token;
    const creator = accounts[0];
    beforeEach(async function () {
        token = await ETAToken.new("ETA Test Token", "ETA", 18);
    });
    it('has a name', async function () {
        const name = await token.name();
        assert.equal(name, 'ETA Test Token');
    });
    it('has a symbol', async function () {
        const symbol = await token.symbol();
        assert.equal(symbol, 'ETA');
    });
    it('has 3 decimals', async function () {
        const decimals = await token.decimals();
        assert.equal(decimals, 18);
    });
});
