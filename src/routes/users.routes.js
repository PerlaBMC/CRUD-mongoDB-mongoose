const {Router} = require ("express");
const {obtenerUsusarios, crearUsuario, actualizarUsuario, eliminarUsuario} = require ("../controllers/users.ctrl")

const router = Router ();

router.get("/", obtenerUsusarios);
router.post("/", crearUsuario);
router.put ("/:id", actualizarUsuario);
router.delete ("/:id", eliminarUsuario);

module.exports = router;