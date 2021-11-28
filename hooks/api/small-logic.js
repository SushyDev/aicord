module.exports = async (req, res) => {
    console.log(req);
    // this function will be launched when the API is called.
    try {
        res.send(await retrieveLyrics()); // send the lyrics
    } catch (err) {
        res.send(err); // send the thrown error
    }
};
