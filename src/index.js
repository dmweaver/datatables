let table;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  const columns = [{title: "Company", data: "fieldData.CompanyName" },
    { title: "Address", data: "fieldData.StreetAddress" },
    { title: "City", data: "fieldData.City" },
    { title: "State", data: "fieldData.State" },
    { title: "Zip Code", data: "fieldData.Zip" },
];
//   const data = [
// {First: "Fred", Last: "Nerks", Age: 50 },
// {First: "Joe", Last: "Blo", Age: 40 },
// {First: "Bill", Last: "Smith", Age: 50 },
//   ];
  table = $("#dtable").DataTable({
    columns,
    data,
  });
};
