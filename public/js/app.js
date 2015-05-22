var ingredients = [{"name":"Bell Pepper (red)","qty":1,"price":"1.5","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Bell Pepper (yellow)","qty":1,"price":"1.5","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Bell Pepper (green)","qty":1,"price":"0.89","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Jalapaneo","qty":1,"price":"0.99","unit":"lb","salePrice":null,"avgWeight":null,"count":1},
{"name":"Onion","qty":1,"price":"0.39","unit":"lb","salePrice":null,"avgWeight":"0.5","count":1},
{"name":"Garlic (1 head)","qty":1,"price":"0.33","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Cauliflower (1 head)","qty":1,"price":"1.49","unit":"lb","salePrice":null,"avgWeight":"1.5","count":1},
{"name":"Zucchini","qty":1,"price":"1.49","unit":"lb","salePrice":null,"avgWeight":null,"count":1},
{"name":"Mushrooms (1 bag)","qty":1,"price":"2.99","unit":"lb","salePrice":null,"avgWeight":"0.75","count":1},
{"name":"Avocado","qty":1,"price":"1.78","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Artichoke","qty":1,"price":"2.99","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Asparagus (bundle)","qty":1,"price":"3.49","unit":"lb","salePrice":2.49,"avgWeight":"1.88","count":1},
{"name":"Celery (bundle)","qty":1,"price":"0.79","unit":"lb","salePrice":null,"avgWeight":"1.5","count":1},
{"name":"Super Greens (1 container)","qty":1,"price":"3.99","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Raspberries (small container)","qty":1,"price":"3.29","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Salami (pack)","qty":1,"price":"4.49","unit":null,"salePrice":3.49,"avgWeight":null,"count":1},
{"name":"Kielbasa","qty":1,"price":"4.99","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Pork Shoulder","qty":1,"price":"2.38","unit":"lb","salePrice":null,"avgWeight":"2-2.5","count":1},
{"name":"Pork Roast","qty":1,"price":"3.99","unit":"lb","salePrice":null,"avgWeight":"1.8-2.8","count":1},
{"name":"Boneless Chicken - Organic (pack)","qty":1,"price":"5.99","unit":"lb","salePrice":null,"avgWeight":"1.85","count":1},
{"name":"Pack Fish Steak (TJs)","qty":1,"price":"null","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Ground Beed - Organic (1lb)","qty":1,"price":"6.99","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Eggs - dozen (cook quality)","qty":1,"price":"5.37","unit":null,"salePrice":null,"avgWeight":null,"count":12},
{"name":"Eggs - dozen (for boiling)","qty":1,"price":"2.69","unit":null,"salePrice":null,"avgWeight":null,"count":12},
{"name":"Sheep Feta (lg)","qty":1,"price":"5.50-6.00","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Sour Cream","qty":1,"price":"1.97","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Brie Wedge","qty":1,"price":"4.00-6.00","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Cheese - blend (bag)","qty":1,"price":"2.59","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Butter","qty":1,"price":"3.99","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Cream Cheese","qty":1,"price":"1.59","unit":null,"salePrice":0.99,"avgWeight":null,"count":1},
{"name":"String Cheese (12ct)","qty":1,"price":"3.89","unit":null,"salePrice":null,"avgWeight":null,"count":12},
{"name":"Goat Cheese log (TJs)","qty":1,"price":"null","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Bacon (pack)","qty":1,"price":"4-5.50","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Diced Tomatoes (can)","qty":1,"price":"0.59","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Almonds (can)","qty":1,"price":"3.59","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Diet coke (2lt)","qty":1,"price":"1.67","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Arizona Tea (1gal)","qty":1,"price":"2.79","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Snapple (lg bottle)","qty":1,"price":"2.19","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Almond Milk - Unsweetend","qty":1,"price":"2.99","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Whipped Cream (can)","qty":1,"price":"3.59","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Hot Sauce","qty":1,"price":"null","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Sardines (can)","qty":1,"price":"2.59","unit":null,"salePrice":null,"avgWeight":null,"count":1},
{"name":"Pasta Sauce (jar)","qty":1,"price":"3.09","unit":null,"salePrice":null,"avgWeight":null,"count":1}];

ingredients.sort(compare);
ingredients.forEach(function (f,i) { f.id = i; });



function getItemCost(ind) {
	var price = 0;
	var item = ingredients[ind];
	if (item.price.indexOf('-') > -1) {
		var temp = item.price.split('-');
		price = (Number(temp[0]) + Number(temp[1])) / 2;
	} else {
		price = Number(item.price);
	}
	if (item.avgWeight) {
		var weight = 0;
		if (item.avgWeight.indexOf('-') > -1) {
			var temp = item.avgWeight.split('-');
			weight = (Number(temp[0]) + Number(temp[1])) / 2;			
		} else {
			weight = Number(item.avgWeight);
		}
		price = price * weight;
	}		
	return price;
}


var meal = {
	iList: [],
	calculateCost: function() {
		var cost = 0;
		this.iList.forEach(function (z) {
			cost += getItemCost(z.inID) * z.qty;
		});
		return cost;
	},
	toTable: function() {
		$('#mealSummary').empty();  
        this.iList.forEach(function (z) {
			var tr = document.createElement('tr');
			tr.setAttribute('id', z.id);
			tr.innerHTML = '<td><input type="checkbox" id="c' + z.id + '"></td>\n' +
							'<td>' + z.qty + '</td>\n' +
							'<td>' + ingredients[z.inID].name + '</td>\n' +
							'<td>$' + (getItemCost(z.inID) * z.qty) + '</td>';
			$('#mealSummary').append(tr);
    	});

    	var tr = document.createElement('tr');
 		tr.innerHTML=('<td></td>\n<td></td>\n<td></td>\n<td><strong>$' + this.calculateCost() + '</strong></td>');
 		$('#mealSummary').append(tr);     
	}
}

function addIngredient() {
	var ind = $('#ingredientList').val();
	var qty = $('#quantity').val();
	var item = {
		id: meal.iList.length,
		inID: ind,
		qty: qty
	}
	meal.iList.push(item); 
	meal.toTable();
}

function removeIngredient() {

	meal.iList.forEach(function (f,i) {
		if ($('#c' + f.id).is(':checked'))
			delete meal.iList[i];
	});
	meal.toTable();
}




function initApp() {

	ingredients.forEach(function (f) {
		$('#ingredientList').append('<option value="' + f.id + '">' + f.name + '</option>');
	});


	$('#addIn').click(addIngredient);
	$('#removeIn').click(removeIngredient);
}


function compare(a,b) {
  if (a.name < b.name)
     return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}