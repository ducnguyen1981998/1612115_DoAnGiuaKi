var express = require("express");
var app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function(request, response)  {

    response.render("index");
});

app.get("/register", function(request, response)  {

    response.render("register");
});
app.get("/contact", function(request, response)  {

    response.render("contact");
});
app.get("/category", function(request, response)  {

    response.render("category");
});

app.get("/basket", function(request, response)  {

    response.render("basket");
});
app.get("/blog", function(request, response)  {

    response.render("blog");
});
app.get("/customer-account", function(request, response)  {

    response.render("customer-account");
});
app.get("/customer-order", function(request, response)  {

    response.render("customer-order");
});

app.get("/customer-orders", function(request, response)  {

    response.render("customer-orders");
});
app.get("/customer-wishlist", function(request, response)  {

    response.render("customer-wishlist");
});
app.get("/detail", function(request, response)  {

    response.render("detail");
});
app.get("/checkout1", function(request, response)  {

    response.render("checkout1");
});

app.get("/checkout2", function(request, response)  {

    response.render("checkout2");
});
app.get("/checkout3", function(request, response)  {

    response.render("checkout3");
});
app.get("/checkout4", function(request, response)  {

    response.render("checkout4");
});

app.post('/customer-orders', (req, res, next) => {

    (async() => {
        try {
           res.render('customer-orders',{
            });
        } finally {

        }
    })(req,res).catch((e) => {
        console.log(e.stack)
        // req.flash("error", "Tìm kiếm thất bại / Lỗi: " + e.message)
    })
})

app.post('/customer-order', (req, res, next) => {

    (async() => {
        try {
           res.render('customer-order',{
            });
        } finally {

        }
    })(req,res).catch((e) => {
        console.log(e.stack)
        // req.flash("error", "Tìm kiếm thất bại / Lỗi: " + e.message)
    })
})
