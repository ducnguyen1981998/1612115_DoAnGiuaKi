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
   (1,'Áo thun nguyên chất ',   'img/product1.jpg', 'img/product1_2.jpg',6, 20,20, '2013-06-01', true ),
   (2,'Áo thun hoa hồng ', 		'img/product2.jpg', 'img/product2_2.jpg',6, 30,50, '2013-06-01', true ),
   (3,'Áo choàng  mặt nạ đen', 	'img/product3.jpg', 'img/product3_2.jpg',7, 40,30, '2013-06-01', true ),
   (4,'Áo khoác kaki',	  	    'img/product1.jpg', 'img/product1_2.jpg',7, 20,20, '2013-06-01', true ),
   (5,'Áo thun hoa hồng', 		'img/product2.jpg', 'img/product2_2.jpg',6, 50,40, '2013-06-01', true ),
   (6,'Quần kaki HKRE', 		'img/product3.jpg', 'img/product3_2.jpg',8, 10,20, '2013-06-01', true ),
   (7,'Quần short M150', 		'img/product1.jpg', 'img/product1_2.jpg',9, 40,10, '2013-06-01', true ),
   (8,'Quân short HERH ', 		'img/product1.jpg', 'img/product1_2.jpg',9, 20,20, '2013-06-01', true ),
   (9,'Quân short HERH ', 		'img/product2.jpg', 'img/product2_2.jpg',4, 30,50, '2013-06-01', true ),
   (10,'Quần short M150', 		'img/product3.jpg', 'img/product3_2.jpg',4, 40,30, '2013-06-01', true ),
   (11,'Quần kaki HKRE', 		'img/product1.jpg', 'img/product1_2.jpg',3, 20,20, '2013-06-01', true ),
   (12,'Quần kaki HGMD', 		'img/product2.jpg', 'img/product2_2.jpg',3, 50,40, '2013-06-01', true ),
   (13,'Quần kaki NONAME', 		'img/product3.jpg', 'img/product3_2.jpg',3, 10,20, '2013-06-01', true ),
   (14,'Áo khoác da DERG', 		'img/product1.jpg', 'img/product1_2.jpg',2, 40,10, '2013-06-01', true ),
   (15,'Áo sơ mi cổ tàu ', 		'img/product1.jpg', 'img/product1_2.jpg',2, 20,20, '2013-06-01', true ),
   (16,'Áo sơ mi cổ trung ', 	'img/product2.jpg', 'img/product2_2.jpg',2, 30,50, '2013-06-01', true ),
   (17,'Áo thun tàu', 			'img/product3.jpg', 'img/product3_2.jpg',1, 40,30, '2013-06-01', true ),
   (18,'Áo thun Hàn',		    'img/product1.jpg', 'img/product1_2.jpg',1, 20,20, '2013-06-01', true ),
   (19,'Áo thun Nhật', 			'img/product2.jpg', 'img/product2_2.jpg',1, 50,40, '2013-06-01', true ),
   (20,'Áo sơ mi nam ', 		'img/product3.jpg', 'img/product3_2.jpg',2, 10,20, '2013-06-01', true ),
   (21,'Áo sơ mi nữ', 			'img/product1.jpg', 'img/product1_2.jpg',6, 40,10, '2013-06-01', true );
   
CREATE TABLE DanhMuc(
   	iddanhmuc serial PRIMARY KEY,
   	tendanhmuc VARCHAR (50) NOT NULL,
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
   (11,'Quần áo', 3),
   (12,'Phụ kiện', 3);
   
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
   
   
   
   