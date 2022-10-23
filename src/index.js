let table;
let columnType;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  columnType = obj.type;
  const customersColumns = [{ title: "Company", data: "fieldData.CompanyName" },
    { title: "Address", data: "fieldData.StreetAddress" },
    { title: "City", data: "fieldData.City" },
    { title: "State", data: "fieldData.State" },
    { title: "Zip Code", data: "fieldData.Zip" },
  ];

  const admissionsColumns = [
    { title: "Matric Year", data: "fieldData.MatricYear" },
    { title: "Category", data: "fieldData.Category" },
    { title: "School", data: "fieldData.School" },
    { title: "State", data: "fieldData.State" },
    // { title: "Zip Code", data: "fieldData.Zip" },
  ];
  //   const data = [
  // {First: "Fred", Last: "Nerks", Age: 50 },
  // {First: "Joe", Last: "Blo", Age: 40 },
  // {First: "Bill", Last: "Smith", Age: 50 },
  //   ];

  const columns = columnType === "Customers" ? customersColumns : admissionsColumns;
  table = $("#dtable").DataTable({
    columns,
    data,
  });
};
$("#dtable").on("click", "tr", function () {
  // Code goes here
  const row = table.row(this);
  const data = row.data();
  console.log(data);
  const primaryKey = data.fieldData.PrimaryKey;
  const obj = { primaryKey, columnType };
  FileMaker.PerformScript("Get Data Back from JS", JSON.stringify(obj));
});
