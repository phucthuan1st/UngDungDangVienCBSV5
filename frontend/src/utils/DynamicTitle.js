const TitleMap = {
    "/login": "Đăng nhập",
    "/app/overview": "Tổng quan",
    "/app/forms": "Biểu mẫu",
    "/app/documents": "Tài liệu",
    "/app/comrades": "Đảng viên chi bộ",
    "/app/candidates": "Đối tượng và quần chúng",
    "/app/events": "Sự kiện",
    // Dynamic path patterns with regular expressions:
    "/^/app/forms/(w+)$/": (path) =>
        path.match(/\/app\/forms\/(\w+)$/)[1] + " | CBSV5",
    "/^/app/candidates/(w+)$/": (path) =>
        path.match(/\/app\/candidates\/(\w+)$/)[1] + " | CBSV5",
    "/^/app/comrades/(w+)$/": (path) =>
        path.match(/\/app\/comrades\/(\w+)$/)[1] + " | CBSV5",
    "/^/app/documents/(w+)$/": (path) =>
        path.match(/\/app\/documents\/(\w+)$/)[1] + " | CBSV5",
    "/^/app/events/(w+)$/": (path) =>
        path.match(/\/app\/event\/(\w+)$/)[1] + " | CBSV5",
};

const DynamicTitle = (path) => {
    if (TitleMap[path]) {
        return `${TitleMap[path]} | CBSV5`;
    }

    // Match dynamic paths using regular expressions:
    for (const pattern in TitleMap) {
        if (new RegExp(pattern).test(path)) {
            return `${TitleMap[pattern](path)} | CBSV5`; // Call the matching function to extract title
        }
    }

    return "CBSV5"; // Default title
};

export default DynamicTitle;
