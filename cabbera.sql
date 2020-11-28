DROP DATABASE IF EXISTS cabbera;

CREATE DATABASE IF NOT EXISTS cabbera;

USE cabbera;                                                                                                                                                      

CREATE TABLE subctgrs(
	subctgr_id 		INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	subctgr_detll	VARCHAR(30) NOT NULL

);

CREATE TABLE uniconteo(
	uniconteo_id 		INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	uniconteo_detll		VARCHAR(30) NOT NULL

);


CREATE TABLE catgrs(
	catgr_id   		INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	catgr_nombr 	VARCHAR(30) NOT NULL,
	catgr_subcgtr	INTEGER UNSIGNED NOT NULL,
	catgr_deVent	BOOLEAN,
	FOREIGN KEY (catgr_subcgtr) REFERENCES subctgrs(subctgr_id) 
	ON DELETE RESTRICT ON UPDATE CASCADE                                                                                             

);



CREATE TABLE prodcts(
	prodct_id		  		INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	prodct_nombr			VARCHAR(80) NOT NULL,
	prodct_catgr			INTEGER UNSIGNED NOT NULL,
	prodct_descrpcn 		VARCHAR(150) DEFAULT '',
	prodct_costo			INTEGER UNSIGNED DEFAULT 0,
	prodct_valor			INTEGER UNSIGNED DEFAULT 0,
	prodct_conteo1			INTEGER UNSIGNED DEFAULT 0,
	prodct_imagen 			VARCHAR(150) DEFAULT 'no-imagen.jpg',
	prodct_suspndd			BOOLEAN,
	prodct_stockMin			INTEGER UNSIGNED DEFAULT 0,
	prodct_stockMax			INTEGER UNSIGNED DEFAULT 0,
	FOREIGN KEY (prodct_catgr) REFERENCES catgrs(catgr_id) 
	ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY	(prodct_conteo1) REFERENCES uniconteo(uniconteo_id) 
	ON UPDATE CASCADE


);

CREATE TABLE movprom(
	movprom_id				INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	movprom_numdoc			INTEGER UNSIGNED NOT NULL,
	movprom_fecha			DATETIME,
	movprom_tipdoc			TINYINT UNSIGNED NOT NULL,
	movprom_bodeg			TINYINT UNSIGNED NOT NULL,
	movprom_fecsys			DATETIME DEFAULT CURRENT_TIMESTAMP,
	movprom_detll			VARCHAR(80),
	movprom_provdr			TINYINT UNSIGNED DEFAULT 0,
	movprom_valor			INTEGER UNSIGNED ,
	movprom_ivapag			INTEGER UNSIGNED DEFAULT 0


);

CREATE TABLE movprod(
	movprod_id 				INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	movprod_idprom			INTEGER UNSIGNED,
	movprod_prodct			INTEGER UNSIGNED,
	movprod_cant1			TINYINT UNSIGNED DEFAULT 0,
	movprod_cant2			TINYINT UNSIGNED DEFAULT 0,
	movprod_unidd			TINYINT UNSIGNED DEFAULT 0,
	movprod_costo			FLOAT UNSIGNED DEFAULT 0.0,
	FOREIGN KEY (movprod_idprom) REFERENCES movprom(movprom_id) ON DELETE CASCADE,
	FOREIGN KEY (movprod_prodct) REFERENCES prodcts(prodct_id) ON DELETE RESTRICT 


);

CREATE TABLE tipostercr(
	tipotercr_id			TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,			
	tipotercr_descrpcn		VARCHAR(30)
);




CREATE TABLE tercrs(
	tercr_id				INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	tercr_nombr				VARCHAR(50) DEFAULT '',
	tercr_nit				VARCHAR(20) DEFAULT '',
	tercr_direcc			VARCHAR(30) DEFAULT '',
	tercr_telfns			VARCHAR(50) DEFAULT '',
	tercr_ciudd				SMALLINT DEFAULT 0,
	tercr_tipo				TINYINT UNSIGNED,
	tercr_detll				VARCHAR(150),
	FOREIGN KEY (tercr_tipo) REFERENCES tipostercr(tipotercr_id) 
);




CREATE TABLE ventsM(
	ventM_id				INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	ventM_factr				INTEGER UNSIGNED DEFAULT 0,
	ventM_bodeg				TINYINT UNSIGNED DEFAULT 1,
	ventM_cuent				TINYINT UNSIGNED,
	ventM_fecha				DATETIME DEFAULT CURRENT_TIMESTAMP,
	ventM_hinic				TIMESTAMP DEFAULT CURRENT_TIMESTAMP  ,
	ventM_hfina				TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
	ventM_descnt			INTEGER UNSIGNED DEFAULT 0,
	ventM_tercr				INTEGER UNSIGNED DEFAULT 1,
	ventM_impuest			INTEGER UNSIGNED,
	ventM_valor				INTEGER UNSIGNED,
	ventM_cancld			BOOLEAN DEFAULT 0,
	ventM_anuldd			BOOLEAN DEFAULT 0,
	ventM_user				INTEGER DEFAULT 1,
	ventM_domcl				SMALLINT UNSIGNED,
	ventM_comnd				INTEGER DEFAULT 0,
	ventM_mesero			SMALLINT DEFAULT 0,
	ventM_propn				INTEGER UNSIGNED DEFAULT 0
	

);

CREATE TABLE ventsD(
	ventD_id  				INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	ventM_id				INTEGER NOT NULL,
	ventD_prodct			INTEGER NOT NULL,
	ventD_cantdd			TINYINT UNSIGNED,
	ventD_valor				INTEGER DEFAULT 0,
	ventD_detll             VARCHAR(50),
	ventD_descntd			BOOLEAN,
	ventD_enviado			BOOLEAN
	-- FOREIGN KEY (ventM_id) REFERENCES ventsM(ventM_id),
	-- FOREIGN KEY (ventD_prodct) REFERENCES prodcts(prodct_id)

);


INSERT INTO tipostercr (tipotercr_descrpcn) VALUES
('GENERICO'),
('EMPLEADO'),
('PROVEEDOR'),
('CLIENTE');

INSERT INTO tercrs (tercr_nombr, tercr_tipo) VALUES
('GENERICO', 1);


INSERT INTO subctgrs (subctgr_detll) VALUES
('NO INVENTARIO'),
('DE INVENTARIO'),
('INVENTARIO S/N'),
('PERECEDEROS'),
('MENAJE'),
('PRODUCTOS FORMULADOS'),
('ESPECIALES');

INSERT INTO uniconteo (uniconteo_detll) VALUES
('------'),
('UNIDAD'),
('GRAMOS'),
('MILILITROS');

INSERT INTO catgrs (catgr_nombr, catgr_subcgtr, catgr_deVent) VALUES
('PESCADO',6,1),
('POLLO',6,1),
('INGREDIENTES O INSUMOS',2,0),
('CARNE',6,1),
('BEBIDAS',2,1),
('CERVEZAS',2,1),
('BEBIDAS',2,1),
('LICORES',2,1);




INSERT INTO prodcts (prodct_nombr, prodct_catgr, prodct_valor, prodct_conteo1, prodct_suspndd ) VALUES
('POLLO ENTERO', 2, 16000, 1, 0)	,
('GASEOSA 350 VIDRIO', 6, 2000,1, 0)	,
('GASEOSA 1 1/4 LTO VIDRIO', 6, 3500,1, 0)	,
('GASEOSA 1.5 LTOS PLASTICA', 6, 4000,1, 1)	,
('GASEOSA 3 LTOS PLASTICA', 6, 7000,1, 0)	,
('JUGO DEL VALLE 1.5 LTO PLASTICO', 6, 4000,1, 0)	,
('AGUA BOTELLA', 6, 2500,1, 0)	,
('GASEOSA 400 ML PLASTICA', 6, 2200,1, 1)	,
('JUGO DEL VALLE 400 ML PLASTICO', 6, 1800,1, 0)	,
('POLLO POR CUARTO (1/4)', 2, 4500,1, 0)	,
('PORCION ARROZ', 2, 2000,1, 0)	,
('PORCION PAPA', 2, 2000,1, 0)	,
('PORCION MADURO', 2, 2000,1, 0)	,
('CONSOME', 2, 3000,1, 1)	,
('CERVEZA', 6, 2500,1, 0)	,
('CERVEZA LIGHT', 6, 2500,1, 0)	,
('POLLO SAZONADO (INGRED)', 3, 0,1, 0)	,
('POLLO Y MEDIO', 2, 24000, 1, 0);	


ALTER TABLE ventsM add CONSTRAINT FK_tercr FOREIGN KEY (ventM_tercr) REFERENCES tercrs(tercr_id);
ALTER TABLE ventsM add CONSTRAINT FK_user FOREIGN KEY (ventM_user) REFERENCES tercrs(tercr_id);
ALTER TABLE ventsM add CONSTRAINT FK_mesero FOREIGN KEY (ventM_mesero) REFERENCES tercrs(tercr_id);