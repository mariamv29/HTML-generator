const Manager = require ('../lib/Manager');


test('creates a manager object', () => {
    const number = 10; 
    const email = "test@gmail.com"
    const manager = new Manager('Alex', number, email);

    
//  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe(number);
    expect(manager.email).toBe(email);
  });

