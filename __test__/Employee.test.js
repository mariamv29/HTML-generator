const Employee = require ('../lib/Employee');

test('creates a employee object', () => {
    const number = 10; 
    const email = "test@gmail.com"
    const employee = new Employee('Dave', number, email);

    
//  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(number);
    expect(employee.email).toBe(email);
  });

