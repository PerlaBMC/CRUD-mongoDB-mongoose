const Product = require ("../models/product")

const obtenerProductos =async  (req, res) => {

    const products = await Product.find()

    return res.json ({
        ok:true,
        msg: "productos obtenidos", 
        data: products,
    });
};

const cerarProductos = async (req, res) => {
try {
    const {product_name, description, price} = req.body

    const nuevo_producto = {
        product_name,
        description,
        price,
    }

    const new_product = await Product (nuevo_producto). save ()

    return res.json ({
        ok:true, 
        msg: "producto creado",
        data: new_product,
    });
    } catch (error) {
        return res.status (500).json ({
            ok: false,
            msg: "error en el servidor",
            data: {}
        });
    };
};

const actualizarProducto = async (req, res) => {
    try{
       const {id} = req.params;
        const {product_name, description, price} = req.body

        const informacion_nueva = {
            product_name,
            description,
            price,
        };

        const producto_actualizado = await Product.findByIdAndUpdate (id, informacion_nueva, {new: true})
        
        return res.json ({
            ok: true,
            msg: "usuario actualizado",
            data: producto_actualizado,
        });    
    } catch (error) {
        return res.status (500).json ({
            ok:false,
            masg: "error en el servidor",
            data: {},
    });
}
}

const eliminarProducto = async (req, res) => {
    try {
        const {id} = req.params ();
    
        const producto_eliminado = await Product.findByIdAndRemove (id);
    
        return res.json ({
            ok: true,
            msg: "producto eleminado",
            data: producto_eliminado,
        });
    } catch  (error) {
        return res.status (500).json ({
            ok: false,
            msg: "error en el servidor",
            data: {},
        })
    }
    }

    module.exports = {
        obtenerProductos,
        cerarProductos,
        actualizarProducto,
        eliminarProducto,
    }