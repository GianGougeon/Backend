const ignoreFavicon = (req, res, next) => {
    if (req.originalUrl && req.originalUrl.split("/").pop() === "favicon.ico") {
        return res.sendStatus(204);
    }
    next();
};

module.exports = ignoreFavicon;
