module.exports = async (req, res) => {
    console.log(req.body);

    if (req.body.queryResult.intent.displayName === 'Default time') {
        console.log('IS TIME');
        res.send({
            fulfillmentMessages: [
                {
                    text: {
                        text: [`The time is ${new Date().toUTCString()}`],
                    },
                },
            ],
        });
    }
};
