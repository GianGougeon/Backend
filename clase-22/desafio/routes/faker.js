const { Router } = require("express");
const fakerRouter = Router();
const { faker } = require("@faker-js/faker");

fakerRouter.get("/", (req, res) => {
    // render 5 objets
    try {
        const products = [];
        let id = 1;
        for (let i = 0; i < 5; i++) {
            products.push({
                id: id++,
                nombre: faker.vehicle.bicycle(),
                precio: faker.datatype.number({ min: 100, max: 500 }),
                url: faker.image.imageUrl(300, 300, "bikes"),
            });
        }
        res.status(200).send(products);
    } catch (err) {
        console.log(err);
        req.status(500).json({ error: "Error en el servidor" });
    }
});

module.exports = fakerRouter;
