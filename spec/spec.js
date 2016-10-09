 var pow = require('../script.js');
describe("Тестируем функцию pow", function() {
  it("Передаем значения 2,3,ожидаемое значение - 8", function() {
    var result=pow(2,3);
    expect(result).toBe(8);
  });
  it("Передаем значения 4,0,ожидаемое значение - 1", function() {
    var result=pow(4,0);
    expect(result).toBe(1);
  });
  it("Передаем значения 5,1,ожидаемое значение - 5", function() {
    var result=pow(5,1);
    expect(result).toBe(5);
  });
});
