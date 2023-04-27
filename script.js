var count = 0
var ing_list = ""
var dish_str

function generate_prompt(){
    data = {
        "origin":["#intro#"],
        "intro":["You #chefs# have been tasked with #making# a culinary masterpiece, linking together ten ingredients to make a unique dish. Today, you will be making a(n) #adj_good# and #modifier# "],
        "chefs":["chefs", "cooks"],
        "adj_good":["delicious"," tasty", "exquisite", "mouth-watering"],
        "making":["making", "creating", "cooking", "cooking up", "crafting"],
        "modifier":["sweet", "salty", "sour", "spicy", "savory", "tangy", "healthy", "extremely unhealthy"],
        "dish":["pizza", "ice cream", "frittata", "cake", "pie", "sandwich", "burger", "fried rice", "soup", "stew", "smoothie"]
    }
    g = tracery.createGrammar(data)

    var maintext = document.getElementById("main_text")
    dish_str = g.flatten("#dish#")
    maintext.innerHTML = g.flatten("#origin#" + dish_str + "!")
  }

  function add_ing(){
    var i = document.getElementById("ing").value;
    document.getElementById("ingreds").innerHTML += i + ", ";
    count += 1;
    ing_list += i + ", ";
    if (count >= 10){
        generate_end();
    }
  }

  function generate_end(){
    data = {
        "origin":["#intro# #main# \"#final#\""],
        "intro":["You have been completed your #adj_good# dish.", "Your #adj_good# masterpiece is ready.", "You are done with the #adj_good# dish."],
        "adj_good":["delicious"," tasty", "exquisite"],
        "main":["Your " + dish_str + " is made with  " + ing_list],
        "final":["Enjoy.", "Bon appetite.", "Good eating!"]
    }

    g = tracery.createGrammar(data)
    var maintext = document.getElementById("main_text")
    maintext.innerHTML = g.flatten("#origin#")
  }