const Engineer = require ('../lib/Engineer');


test('creates a manager object', () => {
    const number = 10; 
    const email = "test@gmail.com";
    const github = "username";
    const engineer = new Engineer('Chris', number, email, github);

    
//  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    expect(engineer.name).toBe('Chris');
    expect(engineer.id).toBe(number);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
  });

