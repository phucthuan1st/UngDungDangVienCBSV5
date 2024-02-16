CREATE DATABASE DB_PartyCommitteeDataManagement;
USE DB_PartyCommitteeDataManagement;

CREATE TABLE Users(
	Identifier integer not null,
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
	PRIMARY KEY (Identifier)
);

CREATE TABLE Images(
	Identifier integer not null,
	UserID integer not null,
	Base64Image varchar(max) not null,
	UploadTime timestamp not null,
	IsAvatar bit,
	PRIMARY KEY (Identifier)
);

CREATE TABLE FundPaymentHistory(
	Identifier integer not null,
	UserID integer not null,
	FundOfMonth Date not null,
	PaymentTime timestamp,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Roles(
	Identifier integer not null,
	RoleName varchar(200) not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE Rights(
	Identifier integer not null,
	RoleID integer not null,
	RightName varchar(200) not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE PartyProfileHistory(
	Identifier integer not null,
	ModifyOn timestamp,
	Detail varchar,
	UserID integer not null,
	PersonInChargeID integer,
	ProfileStatusID integer,
	PRIMARY KEY (Identifier)
);

CREATE TABLE PartyProfileStatus(
	Identifier integer not null,
	StatusName varchar not null,
	PRIMARY KEY (Identifier)
);

CREATE TABLE PartyEvents(
	Identifier integer not null,
	EventName varchar,
	EventDetail varchar,
	NumberOfAttendees integer,
	StartedTime timestamp,
	FinishTime timestamp,
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
	Identifier integer not null,
	DocumentDescription varchar not null,
	DocumentLink varchar not null,
	PRIMARY KEY (Identifier)
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