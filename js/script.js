window.onload = function() {

	var categories = {
		'shirts': {
			name: 'Shirts',
			imgUrl: './img/categories/shirts.jpg',
			products: {
				1: {
					name: 'Shirt 1',
					description: 'Description Shirt 1',
					imgUrl: './img/Shirts/shirt1.jpg',
					price: 100
				},
				2: {
					name: 'Shirt 2',
					description: 'Description Shirt 2',
					imgUrl: './img/Shirts/shirt2.jpg',
					price: 200
				},
				3: {
					name: 'Shirt 3',
					description: 'Description Shirt 3',
					imgUrl: './img/Shirts/shirt3.jpg',
					price: 300
				},
				4: {
					name: 'Shirt 4',
					description: 'Description Shirt 4',
					imgUrl: './img/Shirts/shirt4.jpg',
					price: 400
				},
				5: {
					name: 'Shirt 5',
					description: 'Description Shirt 5',
					imgUrl: './img/Shirts/shirt5.jpg',
					price: 500
				},
				6: {
					name: 'Shirt 6',
					description: 'Description Shirt 6',
					imgUrl: './img/Shirts/shirt6.jpg',
					price: 600
				}
			}
		},
		'pants': {
			name: 'Pants',
			imgUrl: './img/categories/pants.jpeg',
			products: {
				1: {
					name: 'pant 1',
					description: 'Description pant 1',
					imgUrl: './img/pants/pant1.jpeg',
					price: 100
				},
				2: {
					name: 'pant 2',
					description: 'Description pant 2',
					imgUrl: './img/pants/pant2.jpeg',
					price: 200
				},
				3: {
					name: 'pant 3',
					description: 'Description pant 3',
					imgUrl: './img/pants/pant3.jpeg',
					price: 300
				},
				4: {
					name: 'pant 4',
					description: 'Description pant 4',
					imgUrl: './img/pants/pant4.jpeg',
					price: 400
				},
				5: {
					name: 'pant 5',
					description: 'Description pant 5',
					imgUrl: './img/pants/pant5.jpeg',
					price: 500
				},
				6: {
					name: 'pant 6',
					description: 'Description pant 6',
					imgUrl: './img/pants/pant6.jpeg',
					price: 600
				}
			}
		},
		'hats': {
			name: 'Hats',
			imgUrl: './img/categories/hats.jpg',
			products: {
				1: {
					name: 'Hat 1',
					description: 'Description Hat 1',
					imgUrl: './img/Hats/hat1.jpeg',
					price: 100
				},
				2: {
					name: 'Hat 2',
					description: 'Description Hat 2',
					imgUrl: './img/Hats/hat2.jpeg',
					price: 200
				},
				3: {
					name: 'Hat 3',
					description: 'Description Hat 3',
					imgUrl: './img/Hats/hat3.jpeg',
					price: 300
				},
				4: {
					name: 'Hat 4',
					description: 'Description Hat 4',
					imgUrl: './img/Hats/hat4.jpeg',
					price: 400
				},
				5: {
					name: 'Hat 5',
					description: 'Description Hat 5',
					imgUrl: './img/Hats/hat5.jpeg',
					price: 500
				},
				6: {
					name: 'Hat 6',
					description: 'Description Hat 6',
					imgUrl: './img/Hats/hat6.jpeg',
					price: 600
				}
			}
		},
		'jackets': {
			name: 'Jackets',
			imgUrl: './img/categories/jackets.jpg',
			products: {
				1: {
					name: 'Jacket 1',
					description: 'Description Jacket 1',
					imgUrl: './img/Jackets/jacket1.jpg',
					price: 100
				},
				2: {
					name: 'Jacket 2',
					description: 'Description Jacket 2',
					imgUrl: './img/Jackets/jacket2.jpg',
					price: 200
				},
				3: {
					name: 'Jacket 3',
					description: 'Description Jacket 3',
					imgUrl: './img/Jackets/jacket3.jpg',
					price: 300
				},
				4: {
					name: 'Jacket 4',
					description: 'Description Jacket 4',
					imgUrl: './img/Jackets/jacket4.jpg',
					price: 400
				},
				5: {
					name: 'Jacket 5',
					description: 'Description Jacket 5',
					imgUrl: './img/Jackets/jacket5.jpg',
					price: 500
				},
				6: {
					name: 'Jacket 6',
					description: 'Description Jacket 6',
					imgUrl: './img/Jackets/jacket6.jpg',
					price: 600
				}
			}
		},
		'shoes': {
			name: 'Shoes',
			imgUrl: './img/categories/shoes.jpg',
			products: {
				1: {
					name: 'Shoes 1',
					description: 'Description Shoe 1',
					imgUrl: './img/Shoes/shoe1.jpeg',
					price: 100
				},
				2: {
					name: 'Shoes 2',
					description: 'Description Shoe 2',
					imgUrl: './img/Shoes/shoe2.jpeg',
					price: 200
				},
				3: {
					name: 'Shirt 3',
					description: 'Description Shoe 3',
					imgUrl: './img/Shoes/shoe3.jpeg',
					price: 300
				},
				4: {
					name: 'Shoes 4',
					description: 'Description Shoe 4',
					imgUrl: './img/Shoes/shoe4.jpeg',
					price: 400
				},
				5: {
					name: 'Shoes 5',
					description: 'Description Shoe 5',
					imgUrl: './img/Shoes/shoe5.jpeg',
					price: 500
				},
				6: {
					name: 'Shoes 6',
					description: 'Description Shoe 6',
					imgUrl: './img/Shoes/shoe6.jpeg',
					price: 600
				}
			}
		}
	}

	createHeader();

	var page = document.createElement('div');
	page.className = 'page';
	document.body.appendChild(page);

	createCategoryList(categories);

	createProductList(categories);

	createContactForm();

	showCategoryList();

	createFooter();
};



function createHeader(){
	var header = `
	<div class="limiter">
		<nav class="navbar navbar-dark navbar-expand-sm bg-dark">
			<div class="container-fluid">

				<a class="navbar-brand" href="#">
					<img class="logo" src="img/logo.jpeg" />
				</a>
				<h1 class="text-white">Cottogig</h1>
				<button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#Navbar">
					<span class="navbar-toggler-icon"></span>
				</button>


				<div class="collapse navbar-collapse" id="Navbar">
					<ul class="navbar-nav ml-auto">
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="home" onClick = showCategoryList()>Home</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="shirts" onClick = showProductList('shirts')>Shirts</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="pants" onClick = showProductList('pants')>Pants</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="hats" onClick = showProductList('hats')>Hats</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="jackets" onClick = showProductList('jackets')>Jackets</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="shoes" onClick = showProductList('shoes')>Shoes</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="contact" onClick = showContactForm()>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		</div>`;
	
	var page = document.createElement('header');
	page.innerHTML = header;
	document.body.appendChild(page);
}

function createCategoryList(categories) {


	var categoryList = '<div class="row text-center text-white categories limiter">';
	categoryList += '<h1 class="col-12 text-dark">Products</h1>';

	var counter_1 = 0;
	for (category in categories) {
		if (counter_1 < 2 ) {
			categoryList += '<div class="col-12 col-md-6 p-0 background" style="background-image:url(\''+categories[category]['imgUrl']+'\');">';
		}
		else if (counter_1 == 2) {
			categoryList += '<div class="col-12 col-md-12 p-0 background" style="background-image:url(\''+categories[category]['imgUrl']+'\');">';
		}
		else{
			categoryList += '<div class="col-12 col-md-6 p-0 background" style="background-image:url(\''+categories[category]['imgUrl']+'\');">';
		}
		categoryList += `
				<div class="overlay"></div>
				<div class="position-absolute w-100 pt-5">
					<button id="` + category + `" class="btn mt-5 pl-5 pr-5 pt-2 pb-2" style="width: 150px; height: 150px" onClick = showProductList(this.id)>` + categories[category]['name'] + `</button>
				</div>
			</div>
		`;
		counter_1++;
	}

	categoryList +=	'</div>';

	$(".page").append(categoryList);
}

function createProductList(categories){

	var productList = '';
	var category_name = '';

	for (category in categories) {

		productList = '<div class="row text-center text-white products '+category+' limiter">';
		
		category_name = categories[category]['name'];
		productList += '<h1 class="col-12 text-dark">'+category_name+'</h1>';

		for (product in categories[category]['products']) {

			var productName = categories[category]['products'][product]['name'];
			var productDescription = categories[category]['products'][product]['description'];
			var productImgUrl = categories[category]['products'][product]['imgUrl'];
			var productPrice = categories[category]['products'][product]['price'];

			productList += `
				<div class="col-md-6 p-0 background" style="background-image:url('`+productImgUrl+`');" productName="`+productName+`" productDescription="`+productDescription+`" productImgUrl="`+productImgUrl+`" productPrice="`+productPrice+`" onClick = viewProduct(this)>
			 		<div class="overlay"></div>
			 		<div class="position-absolute w-100 pt-5">
			 			<h1>`+ category_name + ' ' + product + `</h1>
				 	</div>
				</div>`;

		}
		productList += '</div>';

		$(".page").append(productList);	
	}
}

function createContactForm(){

	var contactForm = `
	<div class="limiter">
		<div class="contact_form pb-md-4">
			<h1 class="pl-3 pl-md-5 pt-3 pb-3 font-weight-bold" style="text-align: center;">Contact</h1>
			<form class="col-md-6 offset-md-3" action="#" method="#">
				<div class="form-group">
					<label for="firstname" class="col-md-3 col-form-label">Enter First Name</label>
					<div class="col-md-9">
						<input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name Here">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-md-3 col-form-label">Enter Last Name</label>
					<div class="col-md-9">
						<input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name Here">
					</div>
				</div>
				<div class="form-group">
					<label for="email" class="col-md-3 col-form-label">Enter Email</label>
					<div class="col-md-9">
						<input type="email" class="form-control" id="email" name="email" placeholder="Email Here">
					</div>
				</div>
				<div class="form-group">
					<label for="message" class="col-md-3 col-form-label">Place Message</label>
					<div class="col-md-9">
						<textarea type="text" class="form-control" id="message" name="message" placeholder="Write Message Here" />
					</div>
				</div>
				<div class="form-group">
					<div class="offset-md-3 col-md-9">
						<button type="submit" class="btn btn-primary pl-4 pr-4 pt-2 pb-2 submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
		</div>
	`;

	$(".page").append(contactForm);
}

function showCategoryList(){
	$(".row, .contact_form").hide();
	$(".categories").show();
	$('.product_details').remove('');
}

function showProductList(category){
	$(".row, .contact_form").hide();
	$("."+category).show();
}

function viewProduct(product){

	$(".row").hide();

	$('.product_details').remove('');

	var name = product.getAttribute('productName');
	var description = product.getAttribute('productDescription');
	var imgUrl = product.getAttribute('productImgUrl');
	var price = product.getAttribute('productPrice');

	var product = `
		<div class="row product_details ml-md-5 p-4 p-md-5 limiter">
			<h3 class="font-weight-bold w-100">` + name + `</h4>
			<h4 class="font-weight-bold w-100">` + description + `</h4>
			<img class="col-md-4 p-0" src=" ` + imgUrl + ` "/>
			<h6 class="w-100">Price: <span class="font-weight-bold">` + price + `</span></h6>
		</div>
	`; 


	$(".page").append(product);	
}

function showContactForm(){
	$('.row').hide();
	$('.contact_form').show();
}

function createFooter(){
	var footer = document.createElement('footer');
	footer.className = 'text-center border p-2 limiter footer-area';
	footer.innerHTML = '<h6 class="m-0">© 2021 Cottogig</h6>';
	document.body.appendChild(footer);
}