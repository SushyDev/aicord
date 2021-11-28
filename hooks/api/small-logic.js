module.exports = async (req, res) => {
    console.log(req.body);

    if (req.body.queryResults.intent.displayName === 'Default time') res.send(`The time is ${new Date().toUTCString()}`);
};
