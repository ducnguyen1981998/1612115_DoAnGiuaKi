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

INSERT INTO
   QuanAo
VALUES
   (
      1,
      'QUẦN KAKI CO GIÃN ỐNG SUÔNG JS',
      'img/quan-kaki-co-dan-ong-suong-js.jpg',
      'img/quan-kaki-co-dan-ong-suong-js.jpg',
      1,
      250000,
      0,
      '2013-06-01',
      true
   ),
   (
      2,
      'QUẦN JEAN RÁCH DG CO GIÃN',
      'img/quan-jean-rach-dg-co-dan.jpg',
      'img/quan-jean-rach-dg-co-dan.jpg',
      1,
      280000,
      0,
      '2013-06-01',
      true
   ),
   (
      3,
      'QUẦN JOGGER KAKI CO GIÃN REBORN',
      'img/quan-jogger-kaki-co-dan-reborn.jpg',
      'img/quan-jogger-kaki-co-dan-reborn.jpg',
      1,
      280000,
      0,
      '2013-06-01',
      true
   ),
   (
      4,
      'QUẦN JEAN RÁCH/XƯỚC ỐNG SUÔNG',
      'img/quan-jean-rach-xuoc-ong-suong.png',
      'img/quan-jean-rach-xuoc-ong-suong.png',
      1,
      280000,
      0,
      '2013-06-01',
      true
   ),
   (
      5,
      'QUẦN KAKI ÂU ỐNG SUÔNG QC ĐEN',
      'img/quan-kaki-au-ong-suong-qc-den.jpg',
      'img/quan-kaki-au-ong-suong-qc-den.jpg',
      1,
      280000,
      0,
      '2013-06-01',
      true
   ),
   (
      6,
      'QUẦN JOGGER 3 SỌC TRACK PANT',
      'img/quan-jogger-3-soc-track-pant.jpg',
      'img/quan-jogger-3-soc-track-pant.jpg',
      1,
      280000,
      0,
      '2013-06-01',
      true
   ),
   (
      7,
      'QUẦN JOGGER THUN NIKE 2 DÂY KÉO',
      'img/quan-jogger-thun-nike-2-day-keo.jpg',
      'img/quan-jogger-thun-nike-2-day-keo.jpg',
      1,
      190000,
      0,
      '2013-06-01',
      true
   ),
   (
      8,
      'QUẦN JOGGER THUN TRƠN 2 DÂY KÉO',
      'img/quan-jogger-thun-tron-2-day-keo.jpg',
      'img/quan-jogger-thun-tron-2-day-keo.jpg',
      1,
      190000,
      0,
      '2013-06-01',
      true
   );

CREATE TABLE DanhMuc(
   iddanhmuc serial PRIMARY KEY,
   tendanhmuc VARCHAR (50) NOT NULL,
   DoiTuong int
);

INSERT INTO
   DanhMuc
VALUES
   (1, 'Quần Jogger', 1),
   (2, 'Áo khoác', 1),
   (3, 'Áo thun UNISEX', 1);

CREATE TABLE banner(
   idslider serial PRIMARY KEY,
   anhslider VARCHAR (50) NOT NULL
);

INSERT INTO
   banner
VALUES
   (1, 'img/banner3.jpg'),
   (2, 'img/banner1.jpg'),
   (3, 'img/banner3.jpg'),
   (4, 'img/banner2.webp');