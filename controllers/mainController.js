const fs = require('fs');
const path = require('path'); // path permite unificar la ruta de manera más cómoda

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

function leerArchivo (fileName) {
	let leerArchivo = fs.readFileSync(path.join(__dirname, `/../data/${fileName}.json`), 'utf-8');
	return leerArchivo;
}

// controller es la ruta que se exporta
const controller = {
	root: (req, res) => {
		res.render("index");
	},
	 
	login: (req, res) => {
		res.render("login");
	},

	addProduct: (req, res) => {
		res.render('addProduct');
	},


	detalleproducto: (req, res) => {
		
		let canchas=JSON.parse(leerArchivo("products"));
		let idCancha=req.params.id;
		let cancha=canchas[idCancha];
		res.render('detalleproducto',{cancha});

	},
};


module.exports = controller 
