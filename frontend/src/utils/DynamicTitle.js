const TitleMap = {
  "/login": "Đăng nhập",
  "/app/overview": "Tổng quan",
  "/app/forms": "Biểu mẫu",
  "/app/documents": "Tài liệu",
  "/app/comrades": "Đảng viên chi bộ",
  "/app/candidates": "Đối tượng và quần chúng",
  "/app/events": "Sự kiện",
};

const DynamicTitle = (path) => {
  if (TitleMap[path]) {
    return `${TitleMap[path]} | CBSV5`;
  }

  const parts = path.split("/");
  if (parts.length > 2 && parts[0] === "" && parts[1] === "app") {
    // Check TitleMap for section-specific titles (e.g., /app/comrades)
    const sectionPath = `/${parts[1]}/${parts[2]}`; // Construct section path
    if (TitleMap[sectionPath]) {
      return `${TitleMap[sectionPath]} | CBSV5`;
    } else {
      // Fallback to section name for unmatched section paths
      return `${parts[2]} | CBSV5`;
    }
  }

  return "CBSV5"; // Default title
};

export default DynamicTitle;
