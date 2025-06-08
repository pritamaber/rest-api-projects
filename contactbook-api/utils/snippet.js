// snippets.js

// 🔍 Filter by city query
function filterByCity(data, city) {
  if (!city) return data;
  return data.filter((item) => item.city.toLowerCase() === city.toLowerCase());
}

// 🔃 Sort by any field
function sortByField(data, sort = "asc", sortBy = "name") {
  if (!data.length || !data[0][sortBy]) return data;

  return data.sort((a, b) => {
    const aVal = a[sortBy].toString().toLowerCase();
    const bVal = b[sortBy].toString().toLowerCase();
    return sort === "desc"
      ? bVal.localeCompare(aVal)
      : aVal.localeCompare(bVal);
  });
}

// 🔢 Paginate array
function paginate(data, page = 1, limit = 10) {
  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = startIndex + Number(limit);
  return data.slice(startIndex, endIndex);
}

// 📦 Build paginated response
function buildPaginatedResponse(data, page, limit) {
  return {
    total: data.length,
    page: Number(page),
    limit: Number(limit),
    results: [],
  };
}

export { filterByCity, sortByField, paginate, buildPaginatedResponse };
