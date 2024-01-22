# CBSV5 Application - Ung Dung Dang Vien CBSV5

**Table of Contents**
- [Installation](#installation)
  - [Using Yarn](#using-yarn)
- [Features](#features)
- [Usage](#usage)
  - [Client](#client)
  - [Server](#server)
- [Contribution](#contribution)
- [License](#license)

## Overview
This repository contains the source code for the CBSV5 application, organized into client and server components, built using the following technologies:
- **Client**: React + Redux Toolkit
- **Server**: Express JS
- **Database**: CockroachDB (compatible with Postgre and MySQL)

## Installation
Ensure you have [nvm](https://github.com/nvm-sh/nvm) installed. Use the following command to install the LTS version of Node.js:
```bash
nvm install --lts
```

### Using Yarn
To use Yarn instead of npm, first, make sure you have [Yarn](https://yarnpkg.com/) installed globally:
```bash
npm install -g yarn
```

Then, install dependencies for both client and server using:
```bash
cd UngDungDangVienCBSV5/Client
yarn install

cd ../Server
yarn install
```

## Features
1. **Activity Statistics in CBSV5**
   - Monitor and analyze activity trends.

2. **Members in CBSV5**
   - View the list of members in CBSV5.

3. **Candidates in CBSV5**
   - Access the list of candidates in CBSV5.

4. **Access Important Documents**
   - Navigate critical documents seamlessly.

5. **Form Submission and PDF Export**
   - Fill forms and generate PDFs based on form results.

6. **Spreadsheet Statistics from Form Results**
   - Generate statistical spreadsheets based on form submissions.

7. **Explore CBSV5 Resources**
   - Access a variety of resources related to CBSV5.

8. **Restricted Access Features**
   - Features and utilities with limited access, based on user roles.

9. **Admin Session for Role Management**
   - Manage user roles and permissions through an admin session.

10. **Activity Logging**
    - Log all user activities for audit purposes.

## Usage
### Client
1. Navigate to the client directory:
   ```bash
   cd UngDungDangVienCBSV5/Client
   ```

2. Install client dependencies:
   ```bash
   yarn install
   ```

3. Run the client application:
   ```bash
   yarn start
   ```

### Server
1. Navigate to the server directory:
   ```bash
   cd UngDungDangVienCBSV5/Server
   ```

2. Install server dependencies:
   ```bash
   yarn install
   ```

3. Run the server:
   ```bash
   yarn start
   ```

## Contribution
Contributions are welcome. Please follow the [contribution guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [Apache License 2.0](LICENSE).
