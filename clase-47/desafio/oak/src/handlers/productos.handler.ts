import { Context, helpers } from "../../deps.ts";
import logger from "../middlewares/logger.ts";
import { Productos } from "../types/product.types.ts";

const DB_PRODUCTOS: Productos[] = [];

DB_PRODUCTOS.push({ id: "1", nombre: "Ford", url: "https://i.gyazo.com/eb244538d34fce7c882d1b877eee6206.png", precio: 12222 });
DB_PRODUCTOS.push({ id: "2", nombre: "Toyota", url: "https://i.gyazo.com/6ed07a0fcdc23f4465521141c9c8319f.pngC", precio: 50000 });
DB_PRODUCTOS.push({ id: "3", nombre: "Hyundai", url: "https://http2.mlstatic.com/D_NQ_NP_850938-MLU51467230929_092022-W.webp", precio: 124000 });


// Todos los productos
export const findAll = async (ctx: Context) => {
  try {
    ctx.response.status = 200;
    logger.debug(`status: ${ctx.response.status} method: findAll handler`);

    ctx.response.body = await { code: "00", data: DB_PRODUCTOS };
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { code: "99", msg: error };
  }
};
// Producto por id
export const findProduct = async (ctx: Context) => {
  try {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    const product = await DB_PRODUCTOS.find((u) => u.id == id);

    if (product) {
      ctx.response.body = await { code: "00", data: product };
    } else {
      ctx.response.body = await {
        code: "01",
        msg: `Producto con id ${id} no encontrado.`,
      };
    }
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { code: "99", msg: error };
  }
};
// Crear producto
export const createProduct = async (ctx: Context) => {
  try {
    ctx.response.status = 201;
    logger.debug(`status: ${ctx.response.status} method: createProduct handler`);

    const { nombre, url, precio } = await ctx.request.body().value;

    const newId = Number(DB_PRODUCTOS[DB_PRODUCTOS.length - 1].id) + 1;
    const product: Producto = {
      id: newId.toString(),
      nombre: nombre,
      url: url,
      precio: precio,
    };
    DB_PRODUCTOS.push(product);

    ctx.response.body = await { code: "00", data: product };
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { code: "99", msg: error };
  }
};
// Actualizar producto
export const updateProduct = async (ctx: Context) => {
  try {
    ctx.response.status = 202;
    logger.debug(`status: ${ctx.response.status} method: updateProduct handler`);

    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    const productIndex = await DB_PRODUCTOS.findIndex((u) => u.id == id);

    if (productIndex) {
      const { nombre, url, precio } = await ctx.request.body().value;
      DB_PRODUCTOS.splice(productIndex, 1, {
        id: id,
        nombre,
        url,
        precio
      });

      ctx.response.body = {
        code: "00",
        data: { id: id, nombre, url, precio },
      };
    } else {
      ctx.response.body = {
        code: "01",
        msg: `Producto con id ${id} no encontrado.`,
      };
    }
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { msg: error };
  }
};
// Eliminar producto
export const deleteProduct = async (ctx: Context) => {
  try {
    ctx.response.status = 200;
    logger.debug(`status: ${ctx.response.status} method: deleteProduct handler`);

    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    const productIndex = await DB_PRODUCTOS.findIndex((u) => u.id == id);

    if (productIndex) {
      DB_PRODUCTOS.splice(productIndex, 1);

      ctx.response.body = {
        code: "00",
        msg: `Producto con id ${id} eliminado`,
      };
    } else {
      ctx.response.body = {
        code: "01",
        msg: `Producto con id ${id} no encontrado.`,
      };
    }
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { msg: error };
  }
};
