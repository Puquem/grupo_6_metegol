const fs = require('fs');
const path = require('path'); // path permite unificar la ruta de manera más cómoda

const locationProductsJSON = path.join(__dirname, "../data/products.json") //lee el directorio, arma una ruta del archivo
let productsJSON = fs.readFileSync (locationProductsJSON,'utf-8');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

// Controller es la ruta que se exporta
const controller = {
	root: (req, res) => {
		res.render("index");
	},
	 
	login: (req, res) => {
		res.render("login");
	},

	addProduct: (req, res) => {
		res.render("addProduct");
	},

	saveProduct: (req, res) => {
		let arrayProducts = [] ;

		//si el archivo no está vacío
		if (productsJSON != " "){
		
		//tomo el contenido y lo convierto en un formato de array de objetos literales
			arrayProducts = JSON.parse(productsJSON);
		};

		//creo ID de producto (en primer lugar) y le sumo el id a los productos consiguientes
		req.body = {
			id: arrayProducts.length == 0 ? 1 : arrayProducts.length + 1,
			...req.body
		}

		//inserto producto nuevo
		arrayProducts.push(req.body);

		//convierto el array de productos en JSON formato legible
		let saveContent = JSON.stringify(arrayProducts,null, " ");

		//guardo array completo en el archivo JSON
		fs.writeFileSync (productsJSON, saveContent);

		//mensaje de éxito
		res.send ("Producto creado con éxito");
	},

	deleteProduct: (req, res) => {
		let arrayProducts = JSON.parse(productsJSON);
		let deleteProduct = arrayProducts.filter(function (aProduct){
			return aProduct.id != req.params.id;
		}) 

		fs.writeFileSync (productsJSON, JSON.stringify (deleteProduct, null, " "));
		res.redirect ("/")
	},
};

module.exports = controller 
