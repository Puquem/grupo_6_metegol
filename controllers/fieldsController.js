const fs = require('fs');
const path = require('path'); // path permite unificar la ruta de manera más cómoda


const ubicacionProductosJSON = path.join(__dirname, "../data/products.json") //lee el directorio, arma una ruta del archivo
let contenidoProductosJSON = fs.readFileSync (ubicacionProductosJSON,'utf-8');
let fields = JSON.parse(contenidoProductosJSON);

function leerArchivo (fileName) {
	let leerArchivo = fs.readFileSync(path.join(__dirname, `/../data/${fileName}.json`), 'utf-8');
	return leerArchivo;
}

// controller es la ruta que se exporta
const controller = {
	index:(req, res) => {
		// Me traigo todos los productos
		
		// Renderizo la vista con los productos
		res.render('fields/index',{fields});
	},

	create: (req, res) => {
		res.render("createField");
	},

	show: (req, res) => {
		let canchas=JSON.parse(leerArchivo("products"));
		let idCancha=req.params.id;
		let cancha=canchas[idCancha];
		res.render('showField',{cancha});
	},

	store: (req, res) => {
		let arrayDeProductos = [] ;

		//si el archivo no está vacío
		if (contenidoProductosJSON != " "){
		
		//tomo el contenido y lo convierto en un formato de array de objetos literales
			arrayDeProductos = JSON.parse(contenidoProductosJSON);
		};

		//creo ID de producto (en primer lugar) y le sumo el id a los productos consiguientes
		req.body = {
			id: arrayDeProductos.length == 0 ? 1 : arrayDeProductos.length + 1,
			...req.body
		}

		//inserto producto nuevo
		arrayDeProductos.push(req.body);

		//convierto el array de productos en JSON formato legible
		let contenidoGuardar = JSON.stringify(arrayDeProductos,null, " ");

		//guardo array completo en el archivo JSON
		fs.writeFileSync (ubicacionProductosJSON, contenidoGuardar);

		//mensaje de éxito
		res.send ("Producto creado con éxito");
	},

	delete: (req, res) => {
		let arrayProducts = JSON.parse(productsJSON);
		let deleteProduct = arrayProducts.filter(function (aProduct){
			return aProduct.id != req.params.id;
		}) 

		fs.writeFileSync (productsJSON, JSON.stringify (deleteProduct, null, " "));
		res.redirect ("/")
	},

};

module.exports = controller 
