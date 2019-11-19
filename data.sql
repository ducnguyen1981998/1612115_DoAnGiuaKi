-- CREATE DATABASE "1612074_1612115_dack"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Vietnamese_Vietnam.1258'
--     LC_CTYPE = 'Vietnamese_Vietnam.1258'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

CREATE TABLE QuanAo(
   	idQuanAo serial PRIMARY KEY,
   	TenQuanAo VARCHAR (50) NOT NULL,
	AnhQuanAo VARCHAR (50),
	AnhSauQuanAo VARCHAR (50),
    DanhMuc int,
   	Gia integer NOT NULL,
   	GiamGia integer,
   	ThoiGian timestamp,
	QuaTang boolean
);

INSERT INTO QuanAo
VALUES
   (1,'Áo khoác da nguyên chất ', 'img/product1.jpg', 'img/product1_2.jpg',2, 20,20, '2013-06-01', true ),
   (2,'Áo thun hoa hồng ', 'img/product2.jpg', 'img/product2_2.jpg',2, 30,50, '2013-06-01', true ),
   (3,'Áo choàng  mặt nạ đen', 'img/product3.jpg', 'img/product3_2.jpg',2, 40,30, '2013-06-01', true ),
   (4,'Áo khoác da nguyên chất', 'img/product1.jpg', 'img/product1_2.jpg',2, 20,20, '2013-06-01', true ),
   (5,'Áo thun hoa hồng', 'img/product2.jpg', 'img/product2_2.jpg',2, 50,40, '2013-06-01', true ),
   (6,'Áo choàng  mặt nạ đen', 'img/product3.jpg', 'img/product3_2.jpg',2, 10,20, '2013-06-01', true ),
   (7,'Áo khoác da nguyên chất', 'img/product1.jpg', 'img/product1_2.jpg',2, 40,10, '2013-06-01', true );
   
CREATE TABLE DanhMuc(
   	idChuyenDe serial PRIMARY KEY,
   	TenChuyenDe VARCHAR (50) NOT NULL,
   	DoiTuong int
);

INSERT INTO DanhMuc
VALUES
   (1,'Áo thun',  1),
   (2,'Áo sơ mi', 1),
   (3,'Quần kaki', 1),
   (4,'Quần sort', 1),
   (5,'Phụ kiện', 	1),
   (6,'Áo thun',  2),
   (7,'Áo sơ mi', 2),
   (8,'Quần kaki', 2),
   (9,'Quần sort', 2),
   (10,'Phụ kiện', 2),
   (14,'Quần áo', 3),
   (15,'Phụ kiện', 3);
   
CREATE TABLE banner(
   	idslider serial PRIMARY KEY,
   	anhslider VARCHAR (50) NOT NULL
); 

INSERT INTO banner
VALUES
   (1,'img/main-slider1.jpg'),
   (2,'img/main-slider2.jpg'),
   (3,'img/main-slider3.jpg'),
   (4,'img/main-slider4.jpg');
   
   
   
   