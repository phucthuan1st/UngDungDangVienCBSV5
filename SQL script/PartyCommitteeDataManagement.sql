CREATE DATABASE DB_PartyCommitteeDataManagement;
USE DB_PartyCommitteeDataManagement;

CREATE TABLE Users(
	Identifier integer DEFAULT unique_rowid() not null,
	Username varchar(50) not null,
	Pass varchar(128) not null,
	FirstName varchar(128),
	LastName varchar(128),
	BirthDate Date,
	StudentID varchar(50),
	OfficerID varchar(50),
	Hometown varchar(500),
	DateJoinPartyCommittee Date,
	PhoneNumber varchar(15),
	Email varchar(128),
	PartyMembershipCardCode varchar(20),
	RoleID integer not null,
	Ethnicity VARCHAR,
	Religion VARCHAR,
	Gendor integer,
	OfficialDay Date,
	PermanentAddress VARCHAR,
	ContactAddress VARCHAR,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Gendors(
	Identifier integer DEFAULT unique_rowid() not null,
	GendorName VARCHAR not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Images(
	Identifier integer DEFAULT unique_rowid() not null,
	UserID integer not null,
	ImageLink varchar not null,
	UploadTime TIMESTAMP not null,
	IsAvatar bit,
	PRIMARY KEY (Identifier)
);

CREATE TABLE FundPaymentHistory(
	Identifier integer DEFAULT unique_rowid() not null,
	UserID integer not null,
	FundOfMonth Date not null,
	PaymentTime TIMESTAMP,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Roles(
	Identifier integer DEFAULT unique_rowid() not null,
	RoleName varchar(200) not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Rights(
	Identifier integer DEFAULT unique_rowid() not null,
	RoleID integer not null,
	RightName varchar(200) not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE PartyProfileHistory(
	Identifier integer DEFAULT unique_rowid() not null,
	ModifyOn TIMESTAMP,
	Detail varchar,
	UserID integer not null,
	PersonInChargeID integer,
	ProfileStatusID integer,
	PRIMARY KEY (Identifier)
);

CREATE TABLE PartyProfileStatus(
	Identifier integer DEFAULT unique_rowid() not null,
	StatusName varchar not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE PartyEvents(
	Identifier integer DEFAULT unique_rowid() not null,
	EventName varchar,
	EventDetail varchar,
	NumberOfAttendees integer,
	StartedTime TIMESTAMP,
	FinishTime TIMESTAMP,
	Place varchar,
	PRIMARY KEY (Identifier)
);

CREATE TABLE UserAttendEvent(
	UserID integer not null,
	EventID integer not null,
	CheckIn bit,
	CheckOut bit,
	PRIMARY KEY (UserID, EventID)
);

CREATE TABLE Documents(
	Identifier integer DEFAULT unique_rowid() not null,
	DocumentDescription varchar not null,
	DocumentLink varchar not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Forms (
	Identifier integer DEFAULT unique_rowid() not null,
	FormDescription varchar not null,
	FormDataLink VARCHAR not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE FormResults(
	FormID integer not null,
	UserID integer not null,
	FormResultLink VARCHAR not null,
	PRIMARY KEY (FormID, UserID)
);

ALTER TABLE Images
ADD FOREIGN KEY (UserID) 
REFERENCES Users(Identifier);

ALTER TABLE FundPaymentHistory
ADD FOREIGN KEY (UserID) 
REFERENCES Users(Identifier);

ALTER TABLE Rights
ADD FOREIGN KEY (RoleID)
REFERENCES Roles(Identifier);

ALTER TABLE Users
ADD FOREIGN KEY (RoleID)
REFERENCES Roles(Identifier);

ALTER TABLE Users
ADD FOREIGN KEY (Gendor)
REFERENCES Gendors(Identifier);

ALTER TABLE PartyProfileHistory
ADD FOREIGN KEY (UserID) 
REFERENCES Users(Identifier);

ALTER TABLE PartyProfileHistory
ADD FOREIGN KEY (PersonInChargeID) 
REFERENCES Users(Identifier);

ALTER TABLE PartyProfileHistory
ADD FOREIGN KEY (ProfileStatusID) 
REFERENCES PartyProfileStatus(Identifier);

ALTER TABLE UserAttendEvent
ADD FOREIGN KEY (UserID) 
REFERENCES Users(Identifier);

ALTER TABLE UserAttendEvent
ADD FOREIGN KEY (EventID) 
REFERENCES PartyEvents(Identifier);

ALTER TABLE FormResults
ADD FOREIGN KEY (FormID) 
REFERENCES Forms(Identifier);

ALTER TABLE FormResults
ADD FOREIGN KEY (UserID) 
REFERENCES Users(Identifier);

INSERT INTO Gendors
           (Identifier, GendorName)
     VALUES
           (1,'Nam'),
		   (2,'Nữ');

INSERT INTO Roles
           (Identifier, RoleName)
     VALUES
           (1, 'Admin'),
		   (2, 'Đảng viên'),
		   (3, 'Đảng viên dự bị'),
		   (4, 'Đối tượng Đảng');

INSERT INTO Users
           (Username
		   ,StudentID
		   ,OfficerID
           ,FirstName
           ,LastName
		   ,Gendor
           ,BirthDate
		   ,Ethnicity
           ,Religion
           ,DateJoinPartyCommittee
           ,OfficialDay
           ,PartyMembershipCardCode
           ,PhoneNumber
           ,Email
           ,RoleID
		   ,Pass -- default is base 64 of 12345678!
		   ,Hometown
		   ,PermanentAddress
           ,ContactAddress) 
VALUES
('18120286', '18120286', null, 'Nguyễn Quốc', 'Bảo', 1, DATE '2000-02-22', 'Kinh', 'Không', DATE '2018-08-09', DATE '2019-08-09', '40251240', '0935742428', 'nqbao.fit.hcmus@gmail.com', 2, 'MTIzNDU2Nzgh', null,'Khu phố Định Thọ 2, Thị trấn Phú Hòa, Huyện Phú Hòa, Phú Yên','63 Thân Nhân Trung, phường 13, quận Tân Bình, TP.HCM'),
('23120114', '23120114', null, 'Vũ Đình Ngọc', 'Bảo', 1, DATE '2005-01-29', 'Kinh', 'Không', DATE '2023-02-08', null, null, '0353770109', 'vudinhngocbao2901@gmail.com', 3, 'MTIzNDU2Nzgh', 'Uất Lâm, Hòa Hiệp Bắc, Đông Hòa, Phú Yên','Uất Lâm, Hòa Hiệp Bắc, Đông Hòa, Phú Yên','2a1, đường số 39, linh đông, thủ đức'),
('21120006', '21120006', null, 'Nguyễn Hải', 'Chấn', 1, DATE '2023-06-12', 'Kinh', 'Không', DATE '2021-08-09', DATE '2022-08-09', null, '0395042586', '21120006@student.hcmus.edu.vn', 2, 'MTIzNDU2Nzgh', 'thôn Phú Mỹ, xã An Thọ, huyện Tuy An, tỉnh Phú Yên','Thôn Phú mỹ, Xã An Thọ, Huyện Tuy An, Phú Yên','Phòng 1108, Dãy nhà D02, KTX khu B ĐHQG'),
('22125013', '22125013', null, 'Lê Văn', 'Cường', 1, DATE '2004-04-02', 'Kinh', 'Không', DATE '2022-07-26', DATE '2023-07-26', null, '0789469907', 'lecuongvan2004@gmail.com', 2, 'MTIzNDU2Nzgh', 'Thôn Duy Viên, Xã Vĩnh Lâm, Huyện Vĩnh Linh, Tỉnh Quảng Trị','Thôn Duy Viên, Xã Vĩnh Lâm, Huyện Vĩnh Linh, Tỉnh Quảng Trị','135B, Trần Hưng Đạo, Quận 1, TPHCM'),
('22127089', '22127089', null, 'Trần Lê Bảo', 'Duy', 1, DATE '2004-01-12', 'Kinh', 'Không', DATE '2022-07-13', DATE '2023-07-13', null, '0383640250', 'paody2004@gmail.com', 2, 'MTIzNDU2Nzgh', 'Ấp Bình Hoà, Thị trấn Bình Đại, Huyện Bình Đại, Tỉnh Bến Tre','Ấp Bình Hoà, Thị trấn Bình Đại, Huyện Bình Đại, Tỉnh Bến Tre','Khu 3, chung cư Trần Văn Kiểu,414 Lý Thuờng Kiệt'),
('23120243', '23120243', null, 'Trần Nhật', 'Dương', 1, DATE '2005-01-01', 'Kinh', 'Không', DATE '2023-07-22', null, null, '0327037990', 'nhatduong0411@gmail.com', 3, 'MTIzNDU2Nzgh', 'Thôn Nam Yên, Xã Nam Phúc Thăng, Huyện Cẩm Xuyên, Tỉnh Hà Tĩnh','Thôn Nam Yên, Xã Nam Phúc Thăng, Huyện Cẩm Xuyên, Tỉnh Hà Tĩnh','5/7D, Đường số 30, Linh Đông, Thủ Đức, TP.HCM'),
('2540', null, '2540', 'Trần Quốc', 'Đạt', 1, DATE '1993-07-28', 'Kinh', 'Không', DATE '2014-05-07', DATE '2015-05-07', '40.205 953', '0931467808', 'tqdat@hcmus.edu.vn', 2, 'MTIzNDU2Nzgh', 'ấp 1, xã An Khánh, huyện Châu Thành, tỉnh Bến Tre','Ấp 1, xã An Khánh, Huyện Châu Thành, Bến Tre','135B Trần Hưng Đạo, P. Cầu Ông Lãnh, Quận 1, TP. HCM'),
('21120224', '21120224', null, 'Lều Huy', 'Đức', 1, DATE '2003-01-11', 'Kinh', 'Không', DATE '2023-12-10', null, null, '0858578586', 'huyduchhh000@gmail.com', 3, 'MTIzNDU2Nzgh', 'xã Vĩnh Thịnh, huyện Vĩnh Lộc, tỉnh Thanh Hóa','tdp 2, Thị trấn Krông Năng, huyện Krông Năng, tỉnh Đắk Lắk','chung cư lavita charm,đường số 1, phường trường thọ, tp Thủ Đức'),
('21120174', '21120174', null, 'Nguyễn Thị', 'Gái', 2, DATE '2003-05-19', 'Kinh', 'Không', DATE '2021-09-11', DATE '2022-09-11', null, '0705275921', 'ntgai1905@gmail.com', 2, 'MTIzNDU2Nzgh', null,'thôn Hương Sơn, Xã Cẩm Sơn, Huyện Cẩm Xuyên, Hà Tĩnh','Phòng 1005, Dãy Nhà A1, Khu B, KTX ĐHQG'),
('21120238', '21120238', null, 'Nguyễn Thu', 'Hà', 2, DATE '2003-12-24', 'Kinh', 'Không', DATE '2023-12-10', null, null, '0977522181', 'thuha123pm@gmail.com', 3, 'MTIzNDU2Nzgh', 'Thôn Hòa Bình, xã Thanh Hòa, huyện Thanh Chương, tỉnh Nghệ An','Thôn Bình Trị, xã Mỹ Quang, huyện Phù Mỹ, tỉnh Bình Định','56/7 khu phố Thắng Lợi 2, Dĩ An, Dĩ An, Bình Dương'),
('23120041', '23120041', null, 'Lê Minh', 'Hải', 1, DATE '2005-04-29', 'Kinh', 'Không', DATE '2023-07-18', null, null, null, null, 3, 'MTIzNDU2Nzgh', null, null, null),
('19120224', '19120224', null, 'Lê Thị Thu', 'Hiền', 2, DATE '2001-11-21', 'Kinh', 'Không', DATE '2023-04-23', null, null, '0347004821', 'hienhoa2126@gmail.com', 3, 'MTIzNDU2Nzgh', 'Đường Nhuệ Giang, phường Tây Mỗ, quận Nam Từ Liêm, tp. Hà Nội','10 Đoàn Thị Điểm, Thạnh Mỹ, Đơn Dương, Lâm Đồng','231E/38/6T2 Dương Bá Trạc, phường 1, quận 8, tp. HCM'),
('19120510', '19120510', null, 'Phan Duy Trung', 'Hiếu', 1, DATE '2001-01-23', 'Kinh', 'Không', DATE '2019-06-28', DATE '2020-06-28', '40258201', '0941712074', 'trunghieuronaldo@gmail.com', 2, 'MTIzNDU2Nzgh', 'thôn Đông Châu, xã Phù Lưu, huyện Lộc Hà, tỉnh Hà Tĩnh','thôn Đông Châu, xã Phù Lưu, huyện Lộc Hà, tỉnh Hà Tĩnh','79 Nguyễn Sơn Hà, Phường 5, Quận 3, TP.HCM'),
('20120090', '20120090', null, 'Nguyễn Thế', 'Hoàng', 1, DATE '2002-11-05', 'Kinh', 'Không', DATE '2023-12-10', null, null, '0901264425', 'thehoangcn511@gmail.com', 3, 'MTIzNDU2Nzgh', 'Thôn Mai Trung, xã Tân Trường, huyện Cẩm Giàng, tỉnh Hải Dương','Khu phố Thị Vải, phường Mỹ Xuân, thị xã Phú Mỹ, tỉnh Bà Rịa - Vũng Tàu','B28, Đường 4A, Khu phố 4, phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh'),
('19120525', '19120525', null, 'Lê Minh', 'Hữu', 1, DATE '2001-01-06', 'Kinh', 'Không', DATE '2019-06-14', DATE '2020-06-14', '40258198', '0372452286', 'minhhuu06012001@gmail.com', 2, 'MTIzNDU2Nzgh', 'xã Ân Tường Tây, huyện Hoài Ân, tỉnh Bình Định','85 Nguyễn Tất Thành, Thị trấn Tăng Bạt Hổ, Huyện Hoài Ân, Bình Định','Phòng 719, Dãy Nhà F2, Khu B, KTX ĐHQG'),
('23227221', '23227221', null, 'Nguyễn Tiến', 'Luật', 1, DATE '2005-03-01', 'Kinh', 'Không', DATE '2023-07-22', null, null, '0935080522', 'luatpro103qn@gmail.com', 3, 'MTIzNDU2Nzgh', 'phường Chánh Lộ, TP. Quảng Ngãi, Tỉnh Quảng Ngãi','968/51/14 Quang Trung, phường Chánh Lộ, TP. Quảng Ngãi, Tỉnh Quảng Ngãi','60/4 Ung Văn Khiêm, Quận Bình Thạnh, TP.HCM'),
('22120199', '22120199', null, 'Trần', 'Lượng', 1, DATE '2004-03-18', 'Kinh', 'Không', DATE '2022-06-25', DATE '2023-06-25', null, '0965389527', 'luongtran1832004@gmail.com', 2, 'MTIzNDU2Nzgh', 'Thôn An Thành, xã Nhơn Lộc, thị xã An Nhơn, tỉnh Bình Định.','Thôn An Thành, xã Nhơn Lộc, thị xã An Nhơn, tỉnh Bình Định.','Phòng 1013, dãy nhà D6, KTX khu B ĐHQG'),
('22127272', '22127272', null, 'Phạm Văn', 'Minh', 1, DATE '2004-02-10', 'Kinh', 'Không', DATE '2022-08-04', DATE '2023-08-04', null, '0973994154', 'phamminh0973@gmail.com', 2, 'MTIzNDU2Nzgh', 'Thôn Vân Tây, Xã Bình Triều, Huyện Thăng Bình, Tỉnh Quảng Nam.','Thôn Vân Tây, Huyện Thăng Bình, Tỉnh Quảng Nam.', null),
('19120583', '19120583', null, 'Lê Thái Bình', 'Minh', 1, DATE '2001-08-05', 'Kinh', 'Không', DATE '2022-11-06', null, null, '8525762820', 'ltbm.ming@gmail.com', 3, 'MTIzNDU2Nzgh', 'Thôn Võng Ngoại, xã Võng Xuyên, huyện Phúc Thọ, TP. Hà Nội','Thôn Phúc Hưng, xã Phúc Thọ, huyện Lâm Hà, tỉnh Lâm Đồng','903 3/2, phường 14, quận 11, TPHCM'),
('22125065', '22125065', null, 'Nguyễn Quốc', 'Nghĩa', 1, DATE '2024-02-03', 'Kinh', 'Không', DATE '2022-08-06', DATE '2023-08-06', null, '0343325645', 'nguyennghia3224@gmail.com', 2, 'MTIzNDU2Nzgh', 'xã Vĩnh Hòa Hưng Nam, huyện Gò Quao, Tỉnh Kiên Giang','Khu phố 1, Phường Dương Đông, Thành phố Phú Quốc, Tỉnh Kiên Giang','339/7A Tô Hiến Thành, Phường 13, Quận 10'),
('21127122', '21127122', null, 'Hồ Thanh', 'Nhân', 1, DATE '2003-05-23', 'Kinh', 'Không', DATE '2022-12-25', null, null, '0962360437', 'hothanhnhan24@gmail.com', 3, 'MTIzNDU2Nzgh', '316/12, Ấp Tân Phú, Xã Sơn Định, Huyện Chợ Lách, Tỉnh Bến Tre','316/12, Ấp Tân Phú, Xã Sơn Định, Huyện Chợ Lách, Tỉnh Bến Tre', null),
('20120020', '20120020', null, 'Huỳnh Đức', 'Nhâm', 1, DATE '2002-03-15', 'Kinh', 'Không', DATE '2020-07-29', DATE '2021-07-29', '40263652', '0344714490', 'huynhducnham@gmail.com', 2, 'MTIzNDU2Nzgh', 'Khu phố 3, phường Phú Thạnh, TP. Tuy Hòa, Phú Yên','Khu phố 2, phường Phú Thạnh, TP. Tuy Hòa, Phú Yên','135B, Trần Hưng Đạo, Quận 1, TPHCM'),
('21120527', '21120527', null, 'Nguyễn Thế', 'Phong', 1, DATE '2003-03-27', 'Kinh', 'Không', DATE '2024-02-24', null, null, '0384191615', 'nguyenthephong508@gmail.com', 3, 'MTIzNDU2Nzgh', 'xã Vĩnh Thành, huyện Vĩnh Linh, tỉnh Quảng Trị','75/154/03/09 Nguyễn Lương Bằng, TP. Buôn Ma Thuột, tỉnh Đắk Lắk','46 Tân Lập, phường Đông Hoà, TP. Dĩ An, tỉnh Bình Dương'),
('2090', null, '2090', 'Bùi Thị Kiều', 'Phương', 2, DATE '1990-08-02', 'Kinh', 'Không', DATE '2017-03-31', DATE '2018-03-31', null, '0396814334', 'btkphuong@hcmus.edu.vn', 2, 'MTIzNDU2Nzgh', null,'La Hà, Tư Nghĩa, Quảng Ngãi','51 đường số 9, Trường Thọ, TP. Thủ Đức, TP.HCM'),
('23120342', '23120342', null, 'Trần Nguyễn Minh', 'Quân', 1, DATE '2005-05-22', 'Kinh', 'Không', DATE '2023-07-11', null, null, '0889997764', 'trnguyenmquan@gmail.com', 3, 'MTIzNDU2Nzgh', 'xã Vĩnh Tú, huyện Vĩnh Linh, tỉnh Quảng Trị','thôn Hòa Thuận, xã Đức Thuận, huyện Tánh Linh, tỉnh Bình Thuận', null),
('20120368', '20120368', null, 'Nguyễn Minh', 'Tâm', 1, DATE '2002-09-18', 'Kinh', 'Không', DATE '2022-11-06', null, null, '3386696220', 'minhtam.nguyen18902@gmail.com', 3, 'MTIzNDU2Nzgh', 'Khu vực 1, phường Trần Quang Diệu, thành phố Quy Nhơn, tỉnh Bình Định','Khu vực 1, phường Trần Quang Diệu, thành phố Quy Nhơn, tỉnh Bình Định','68/18 Nguyễn Thái Sơn, phường 3, quận Gò Vấp, TP.HCM'),
('21120132', '21120132', null, 'Lê Hình Nhựt', 'Thanh', 1, DATE '2003-12-09', 'Kinh', 'Không', DATE '2022-12-25', null, null, '9437840160', 'thanhh.khtn@gmail.com', 3, 'MTIzNDU2Nzgh', 'Xã Đông Hưng A, huyện An Minh, tỉnh Kiên Giang','số 8 Trần Nhật Duật, khu phố 3, phường An Hòa, thành phố Rạch Giá, tỉnh Kiên Giang','Phòng 1105, dãy nhà C02, KTX khu B ĐHQG'),
('20120375', '20120375', null, 'Cao Thị Phương', 'Thảo', 2, DATE '2002-01-04', 'Kinh', 'Không', DATE '2020-10-08', DATE '2021-10-08', '40263663', '0376213425', 'caothiphuongthao0401@gmail.com', 2, 'MTIzNDU2Nzgh', 'Thôn Phú Mỹ, xã Nghĩa Mỹ, huyện Tư Nghĩa, tỉnh Quảng Ngãi','khu phố Nam Trung, thị trấn Thuận Nam, huyện Hàm Thuận Nam, Bình Thuận','Phòng 816, Dãy Nhà BA5, Khu B, KTX ĐHQG'),
('19120043', '19120043', null, 'Phạm Đức', 'Tú', 1, DATE '2001-05-12', 'Kinh', 'Không', DATE '2019-06-21', DATE '2020-06-21', null, '0834596979', 'tubmt01@gmail.com', 2, 'MTIzNDU2Nzgh', 'phường Văn Đẩu, quận Kiến An, tỉnh Hải Phòng','50 Trần Huy Liệu, phường Tân Thành, Buôn Ma Thuột, Đắk Lắk','373/19A Lý Thường Kiệt, phường 9, quận Tân Bình, TP.HCM'),
('20120380', '20120380', null, 'Nguyễn Phúc', 'Thuần', 1, DATE '2002-05-09', 'Kinh', 'Không', DATE '2020-08-31', DATE '2021-08-31', '40263661', '0706427643', 'phucthuan1st@gmail.com', 2, 'MTIzNDU2Nzgh', 'ấp An Phú, xã Mỹ An Hưng B, huyện Lấp Vò, tỉnh Đồng Tháp','498 Kinh Thầy Lâm, ấp An Phú, Xã Mỹ An Hưng B, Huyện Lấp Vò, Đồng Tháp','Phòng 705, Dãy Nhà D2, Khu B, KTX ĐHQG'),
('19127601', '19127601', null, 'Trần Hữu', 'Trọng', 1, DATE '2001-05-06', 'Kinh', 'Không', DATE '2019-05-17', DATE '2020-05-17', '40258202', '0848781107', 'tranhuutronghdt@gmail.com', 2, 'MTIzNDU2Nzgh', 'Xã Cẩm Long, huyện Cẩm Xuên, tỉnh Hà Tỉnh','20, xóm 1, Đồi Giang, Đức Thuận, Tánh Linh, Bình Thuận','135B, Trần Hưng Đạo, Quận 1, TPHCM'),
('22120394', '22120394', null, 'Nguyễn Minh', 'Trực', 1, DATE '2004-09-07', 'Kinh', 'Không', DATE '2023-12-10', null, null, '0365546014', 'minhtruc1239@gmail.com', 3, 'MTIzNDU2Nzgh', 'ấp Mỹ Hòa, xã Mỹ Long, huyện Cai Lậy, tỉnh Tiền Giang','ấp Mỹ Hòa, xã Mỹ Long, huyện Cai Lậy, tỉnh Tiền Giang','37/11 khu phố Tân Lập, Đông Hòa, Dĩ An, Bình Dương'),
('21120157', '21120157', null, 'Lê Phạm Hoàng', 'Trung', 1, DATE '2003-10-25', 'Kinh', 'Không', DATE '2022-12-25', null, null, '0985879454', 'trungsanglong@gmail.com', 3, 'MTIzNDU2Nzgh', 'Xã Thành An, huyện Mỏ Cày Bắc, tỉnh Bến Tre','Ấp Giáp Nước, xã Phước Thạnh, thành phố Mỹ Tho, tỉnh Tiền Giang','Phòng C06, toà C6, KTX Khu B, KTX ĐHQG HCM'),
('18120655', '18120655', null, 'Phạm Minh', 'Vương', 1, DATE '2000-10-25', 'Kinh', 'Không', DATE '2022-12-25', null, null, '0988788146', 'minhvuongpham025@gmail.com', 3, 'MTIzNDU2Nzgh', 'Thôn Thanh Danh, xã Nhơn Phong, thị xã An Nhơn, tỉnh Bình Định','Thôn Thanh Danh, xã Nhơn Phong, thị xã An Nhơn, tỉnh Bình Định','1078/22, đường Trường Sơn, Linh Trung, Thủ Đức, Hồ Chí Minh'),
('23120412', '23120412', null, 'Nguyễn Thị Hoàng', 'Yến', 2, DATE '2005-01-28', 'Kinh', 'Không', DATE '2023-07-06', null, null, '0393013460', 'hoangyen2801205@gmail.com', 3, 'MTIzNDU2Nzgh', 'Ấp Xương Long, Xã Thới Thạnh, Huyện Thạnh Phú, Tỉnh Bến Tre','Ấp Xương Long, Xã Thới Thạnh, Huyện Thạnh Phú, Tỉnh Bến Tre','Phòng 211, KTX Cỏ May, Phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh');
