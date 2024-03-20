// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  
  test("Organization key has a value of nonprofit", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("Executive Director key has a value of Jeff", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("Percentage of cool employees is equal to 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("Programs offered is an array with 3 values", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("Returns 'Launch!' when passed a number that is ONLY divisible by 2", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("Returns 'Code!' when passed a number that is ONLY divisible by 3", () => {
    expect(launchcode.launchOutput(9)).toEqual("Code!");
  });

  test("Returns 'Rocks!' when passed a number that is ONLY divisible by 5", () => {
    expect(launchcode.launchOutput(25)).toEqual("Rocks!");
  });

  test("Returns 'LaunchCode!' when passed a number that is divisible by 2 AND 3", () => {
    expect(launchcode.launchOutput(18)).toEqual("LaunchCode!");
  });

  test("Returns 'Code Rocks!' when passed a number that is divisible by 3 AND 5", () => {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });

  test("Returns 'Launch Rocks!' when passed a number that is divisible by 2 AND 5", () => {
    expect(launchcode.launchOutput(20)).toEqual("Launch Rocks!");
  });

  test("Returns 'Rocks!' when passed a number that is divisible by 2, 3, AND 5", () => {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });

  test("Returns 'Rocks!' when passed a number that is NOT divisible by 2, 3 or 5", () => {
    expect(launchcode.launchOutput(74)).toEqual("Rutabagas! That doesn't work.");
  });
  
});