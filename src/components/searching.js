import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
  // @todo: #5.1 — настроить компаратор

  const compareSearch = createComparison(
    ["skipEmptyTargetValues"],
    [
      rules.searchMultipleFields(
        searchField.name,
        ["date", "customer", "seller"],
        false
      ),
    ]
  );

  return (data, state, action) => {
    // @todo: #5.2 — применить компаратор
    const filteredData = data.filter((row) => compareSearch(row, state));
    return filteredData;
  };
}
