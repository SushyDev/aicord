module.exports = async (req, res) => {
    console.log(req.body);

    if (req.body.queryResult.intent.displayName === 'Default time') {
        res.send({
            fulfillmentText: `The time is ${new Date().toUTCString()}`,
        });
    }
};
