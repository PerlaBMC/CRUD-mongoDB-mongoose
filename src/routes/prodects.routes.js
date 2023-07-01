const {Router} = require ("express");
const {obtenerProductos, actualizarProducto, eliminarProducto, cerarProductos} = require ("../controllers/products.ctrl")
const router = Router ();

router.get("/", obtenerProductos);
router.post("/", cerarProductos);
router.put ("/:id", actualizarProducto);
router.delete ("/:id", eliminarProducto);

module.exports = router;