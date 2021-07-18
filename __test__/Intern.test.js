const Intern = require ('../lib/Intern');


test('creates a manager object', () => {
    const number = 10; 
    const email = "test@gmail.com";
    const school = "school"
    const intern = new Intern('Charles', number, email, school);

    
//  expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    expect(intern.name).toBe('Charles');
    expect(intern.id).toBe(number);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
  });
