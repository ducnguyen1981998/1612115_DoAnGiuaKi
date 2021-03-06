var express = require("express");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
const pool = require("./model");
var path = require('path');
var app = express();
app.use(express.static("public"));
// app.use(express.static("./public"));
app.use(express.static(__dirname + "/public/img"));
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, 'views/page'));
// const Router = require('express-promise-router')
// const router = new Router()
var port = Number(process.env.PORT || 5000);
app.listen(port);
// console.log('THINGS WORK !!!');
// var auth = require('./auth')
/* GET Trang chủ. */

app.get("/", function(req, res, next) {
  (async () => {
    const client = await pool.connect();
    
    try {
      //QuanAo
      const QuanAo = await client.query("SELECT * FROM public.quanao");
      const slider = await client.query("SELECT * FROM public.banner");
      console.log(QuanAo.rows[0].tenquanao);
      res.render("page/index", {
        title: "1612074_1612115",
        QuanAo: QuanAo.rows,
        slider: slider.rows
      });
    } finally {
      client.release();
    }
  })().catch(e => console.log(e.stack));
});
// app.post('/customer-orders', (req, res) => {
//   res.send('Username is ' + req.body.name + '<br>Password is ' + req.body.pwd);
//   console.log(req.body)
// });
//Hiển thị danh sách chuyên mục
app.get("/category/:id", function(req, res, next) {
  (async () => {
    const client = await pool.connect();
    //let error = req.flash('error');
    try {
      const DanhMucNam = await client.query(
        "SELECT * FROM public.danhmuc where doituong=1"
      );
      const TongDanhMucNam = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=1`
      );

      const DanhMucNu = await client.query(
        "SELECT * FROM public.danhmuc where doituong=2"
      );
      const TongDanhMucNu = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=2`
      );
      const DanhMucTreEm = await client.query(
        "SELECT * FROM public.danhmuc where doituong=3"
      );
      const TongDanhMucTreEm = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=3`
      );
      const QuanAo = await client.query(
        "SELECT * FROM public.quanao INNER JOIN public.danhmuc ON danhmuc=iddanhmuc WHERE doituong=" +
          req.params.id +
          "ORDER BY public.quanao.gia ASC"
      );
      // const QuanAo2 = await client.query(
      //   "SELECT * FROM public.quanao INNER JOIN public.danhmuc ON danhmuc=iddanhmuc WHERE doituong=" +
      //     req.params.id +"ORDER BY quanao.gia DESC"
      // );

      res.render("page/category", {
        title: "1612074_1612115",
        QuanAo: QuanAo.rows,
        DanhMucNam: DanhMucNam.rows,
        TongDanhMucNam: TongDanhMucNam.rows,
        DanhMucNu: DanhMucNu.rows,
        TongDanhMucNu: TongDanhMucNu.rows,
        DanhMucTreEm: DanhMucTreEm.rows,
        TongDanhMucTreEm: TongDanhMucTreEm.rows
      });
      // res.render("page/category/:id/sortnamedown", {
      //   title: "1612074_1612115",
      //   QuanAo: QuanAo2.rows,
      //   DanhMucNam: DanhMucNam.rows,
      //   TongDanhMucNam: TongDanhMucNam.rows,
      //   DanhMucNu: DanhMucNu.rows,
      //   TongDanhMucNu: TongDanhMucNu.rows,
      //   DanhMucTreEm: DanhMucTreEm.rows,
      //   TongDanhMucTreEm: TongDanhMucTreEm.rows,

      // });
    } finally {
      client.release();
    }
  })().catch(e => console.log(e.stack));
});
app.get("/search", function(req, res, next) {
  (async () => {
    const client = await pool.connect();
    try {

      const QuanAo = await client.query(
        "SELECT * FROM public.quanao INNER JOIN public.danhmuc ON danhmuc=iddanhmuc WHERE ((doituong=1) AND(LOWER(tenquanao) LIKE '"
        +" "+
        "') )ORDER BY public.quanao.gia ASC"
      );
      res.render("page/search", {
        title: "1612074_1612115",
        QuanAo: QuanAo.rows,
        
      });
    } finally {
      client.release();
    }
  })().catch(e => console.log(e.stack));
});
app.get("/category/:id/sortnamedown", function(req, res, next) {
  (async () => {
    const client = await pool.connect();
    //let error = req.flash('error');
    try {
      const DanhMucNam = await client.query(
        "SELECT * FROM public.danhmuc where doituong=1"
      );
      const TongDanhMucNam = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=1`
      );

      const DanhMucNu = await client.query(
        "SELECT * FROM public.danhmuc where doituong=2"
      );
      const TongDanhMucNu = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=2`
      );
      const DanhMucTreEm = await client.query(
        "SELECT * FROM public.danhmuc where doituong=3"
      );
      const TongDanhMucTreEm = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=3`
      );
      const QuanAo = await client.query(
        "SELECT * FROM public.quanao INNER JOIN public.danhmuc ON danhmuc=iddanhmuc WHERE doituong=" +
          req.params.id +
          "ORDER BY public.quanao.gia ASC"
      );
      const QuanAo2 = await client.query(
        "SELECT * FROM public.quanao INNER JOIN public.danhmuc ON danhmuc=iddanhmuc WHERE doituong=" +
          req.params.id +
          "ORDER BY public.quanao.gia DESC"
      );

      console.log(QuanAo.rows);
      res.render("page/category", {
        title: "1612074_1612115",
        QuanAo: QuanAo2.rows,
        DanhMucNam: DanhMucNam.rows,
        TongDanhMucNam: TongDanhMucNam.rows,
        DanhMucNu: DanhMucNu.rows,
        TongDanhMucNu: TongDanhMucNu.rows,
        DanhMucTreEm: DanhMucTreEm.rows,
        TongDanhMucTreEm: TongDanhMucTreEm.rows
      });
      // res.render("page/category/:id/sortnamedown", {
      //   title: "1612074_1612115",
      //   QuanAo: QuanAo2.rows,
      //   DanhMucNam: DanhMucNam.rows,
      //   TongDanhMucNam: TongDanhMucNam.rows,
      //   DanhMucNu: DanhMucNu.rows,
      //   TongDanhMucNu: TongDanhMucNu.rows,
      //   DanhMucTreEm: DanhMucTreEm.rows,
      //   TongDanhMucTreEm: TongDanhMucTreEm.rows,

      // });
    } finally {
      client.release();
    }
  })().catch(e => console.log(e.stack));
});

app.get("/category/:doituong/:iddanhmuc", function(req, res, next) {
  (async () => {
    const client = await pool.connect();
    //let error = req.flash('error');
    try {
      const DanhMucNam = await client.query(
        "SELECT * FROM public.danhmuc where doituong=1"
      );
      const TongDanhMucNam = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=1 and danhmuc=1`
      );
      const DanhMucNu = await client.query(
        "SELECT * FROM public.danhmuc where doituong=2"
      );
      const TongDanhMucNu = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=2`
      );
      const DanhMucTreEm = await client.query(
        "SELECT * FROM public.danhmuc where doituong=3"
      );
      const TongDanhMucTreEm = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=3`
      );
      //	const QuanAo= await client.query("SELECT * FROM public.quanao order by random() limit 6" );
      const QuanAo = await client.query(
        "SELECT * FROM quanao INNER JOIN danhmuc ON danhmuc= iddanhmuc  WHERE danhmuc.doituong=" +
          req.params.doituong +
          "AND danhmuc.iddanhmuc=" +
          req.params.iddanhmuc
      );

      res.render("page/category", {
        title: "1612074_1612115",
        QuanAo: QuanAo.rows,
        DanhMucNam: DanhMucNam.rows,
        TongDanhMucNam: TongDanhMucNam.rows,
        DanhMucNu: DanhMucNu.rows,
        TongDanhMucNu: TongDanhMucNu.rows,
        DanhMucTreEm: DanhMucTreEm.rows,
        TongDanhMucTreEm: TongDanhMucTreEm.rows
      });
    } finally {
      client.release();
    }
  })().catch(e => console.log(e.stack));
});

/* Hien thi chi tiet */
app.get("/detail/:idquanao", function(req, res, next) {
  (async () => {
    const client = await pool.connect();
    // let error = req.flash('error');
    try {
      const DanhMucNam = await client.query(
        "SELECT * FROM public.danhmuc where doituong=1"
      );
      const TongDanhMucNam = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=1`
      );
      const DanhMucNu = await client.query(
        "SELECT * FROM public.danhmuc where doituong=2"
      );
      const TongDanhMucNu = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=2`
      );
      const DanhMucTreEm = await client.query(
        "SELECT * FROM public.danhmuc where doituong=3"
      );
      const TongDanhMucTreEm = await client.query(
        `SELECT COUNT(*) as SoLuong
        FROM public.quanao JOIN public.danhmuc
        ON quanao.danhmuc = danhmuc.iddanhmuc
        where doituong=3`
      );
      const result = await client.query(
        "SELECT * FROM quanao WHERE idquanao=" + req.params.idquanao
      );
      res.render("page/detail", {
        result: result.rows,
        DanhMucNam: DanhMucNam.rows,
        TongDanhMucNam: TongDanhMucNam.rows,
        DanhMucNu: DanhMucNu.rows,
        TongDanhMucNu: TongDanhMucNu.rows,
        DanhMucTreEm: DanhMucTreEm.rows,
        TongDanhMucTreEm: TongDanhMucTreEm.rows
      });
    } finally {
      client.release();
    }
  })().catch(e => console.log(e.stack));
});
// app.get("/detail", function(request, response)  {
//
//     response.render("page/detail");
// });
// app.get("/category", function(request, response)  {
//
//     response.render("page/category");
// });

app.get("/register", function(request, response) {
  response.render("page/register");
});

app.get("/basket", function(request, response) {
  response.render("page/basket");
});
// app.get("/blog", function(request, response)  {
//
//     response.render("page/blog");
// });
app.get("/customer-account", function(request, response) {
  response.render("page/customer-account");
});
app.get("/customer-order", function(request, response) {
  response.render("page/customer-order");
});

app.get("/customer-orders", function(request, response) {
  response.render("page/customer-orders");
});
// app.get("/customer-wishlist", function(request, response)  {
//
//     response.render("page/customer-wishlist");
// });
app.get("/checkout1", function(request, response) {
  response.render("page/checkout1");
});

app.get("/checkout2", function(request, response) {
  response.render("page/checkout2");
});
app.get("/checkout3", function(request, response) {
  response.render("page/checkout3");
});
app.get("/checkout4", function(request, response) {
  response.render("page/checkout4");
});

app.post("/customer-orders", (req, res, next) => {
  (async () => {
    try {
      res.render("page/customer-orders", {});
    } finally {
    }
  })(req, res).catch(e => {
    console.log(e.stack);
    // req.flash("error", "Tìm kiếm thất bại / Lỗi: " + e.message)
  });
});

app.post("/customer-order", (req, res, next) => {
  (async () => {
    try {
      res.render("page/customer-order", {});
    } finally {
    }
  })(req, res).catch(e => {
    console.log(e.stack);
    // req.flash("error", "Tìm kiếm thất bại / Lỗi: " + e.message)
  });
});

app.get("/admin", function(request, response) {
  response.render("admin/index");
});

app.get("/useraccount", function(request, response) {
  response.render("admin/useraccount");
});

app.get("/userprofile", function(request, response) {
  response.render("admin/userprofile");
});
app.get("/productadmin", function(request, response) {
  response.render("admin/productadmin");
});
app.get("/ordersManagement", function(request, response) {
  response.render("admin/ordersManagement");
});

app.get("/editacc", function(request, response) {
  response.render("admin/editaccount");
});

app.get("/editpro", function(request, response) {
  response.render("admin/editprofile");
});
app.get("/editproduct", function(request, response) {
  response.render("admin/editproduct");
});
app.get("/thongKeDoanhSo", function(request, response) {
  response.render("admin/abc");
});
app.get("/thongKeSoLuong", function(request, response) {
  response.render("admin/editproduct");
});
// app.use('/auth',auth)