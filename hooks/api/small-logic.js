module.exports = async (req, res) => {
    console.log(req.body);

    if (req.body.queryResult.intent.displayName === 'Default time') {
        console.log('IS TIME');
        res.send(`The time is ${new Date().toUTCString()}`);
    }
};
