// describe("Fetching weather 200", () => {
//   it("Get data for a location 200", () => {
//     cy.request({
//       method: "GET",
//       url: `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=84cbb6c6fcb30fa644a6da1056db1b2b&units=metric`,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.isOkStatusCode).to.eq(true);
//     });

//     cy.visit("/");
//     cy.get("[data-test-id='nextDays']").should("have.length", 5);
//   });
// });

// describe("Fetch city", () => {
//   beforeEach(() => {
//     cy.request({
//       method: "GET",
//       url: `https://api.openweathermap.org/data/2.5/weather?q=london&appid=84cbb6c6fcb30fa644a6da1056db1b2b&units=metric`,
//     });
//     cy.visit("/");
//   });
//   // beforeEach(() => {
//   //   cy.request({
//   //     method: "GET",
//   //     url: `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=84cbb6c6fcb30fa644a6da1056db1b2b&units=metric`,
//   //   });
//
