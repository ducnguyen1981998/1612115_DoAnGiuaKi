var express = require("express");
var app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function(request, response)  {

    response.render("page/index");
});

app.get("/register", function(request, response)  {

    response.render("page/register");
});
app.get("/contact", function(request, response)  {

    response.render("page/contact");
});
app.get("/category", function(request, response)  {

    response.render("page/category");
});

app.get("/basket", function(request, response)  {

    response.render("page/basket");
});
app.get("/blog", function(request, response)  {

    response.render("page/blog");
});
app.get("/customer-account", function(request, response)  {

    response.render("page/customer-account");
});
app.get("/customer-order", function(request, response)  {

    response.render("page/customer-order");
});

app.get("/customer-orders", function(request, response)  {

    response.render("page/customer-orders");
});
app.get("/customer-wishlist", function(request, response)  {

    response.render("page/customer-wishlist");
});
app.get("/detail", function(request, response)  {

    response.render("page/detail");
});
app.get("/checkout1", function(request, response)  {

    response.render("page/checkout1");
});

app.get("/checkout2", function(request, response)  {

    response.render("page/checkout2");
});
app.get("/checkout3", function(request, response)  {

    response.render("page/checkout3");
});
app.get("/checkout4", function(request, response)  {

    response.render("page/checkout4");
});

app.post('/customer-orders', (req, res, next) => {

    (async() => {
        try {
           res.render('page/customer-orders',{
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
           res.render('page/customer-order',{
            });
        } finally {

        }
    })(req,res).catch((e) => {
        console.log(e.stack)
        // req.flash("error", "Tìm kiếm thất bại / Lỗi: " + e.message)
    })
})

app.get("/admin", function(request, response)  {

    response.render("admin/index");
});

app.get("/useraccount", function(request, response)  {

    response.render("admin/useraccount");
});

app.get("/userprofile", function(request, response)  {

    response.render("admin/userprofile");
});
app.get("/productadmin", function(request, response)  {

    response.render("admin/productadmin");
});
app.get("/ordersManagement", function(request, response)  {

    response.render("admin/ordersManagement");
});

app.get("/editacc", function(request, response)  {

    response.render("admin/editaccount");
});

app.get("/editpro", function(request, response)  {

    response.render("admin/editprofile");
});
app.get("/editproduct", function(request, response)  {

    response.render("admin/editproduct");
});
app.get("/thongKeDoanhSo", function(request, response)  {

    response.render("admin/abc");
});
app.get("/thongKeSoLuong", function(request, response)  {

    response.render("admin/editproduct");
});
