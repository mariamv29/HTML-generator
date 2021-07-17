//create a function to generate html template/ team profile
function generateTeam(data) {
  return `
    
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
    </div>
  </header>
  <main class="container my-5">
  

    
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="team-item-title text-light">${data.name}</h3>
          <h5 class="team-item-title text-light">${data.role}</h5>
          <h5 class="team-item-title text-light">
            ID:${data.managerId}</h5
          <h5 class="team-item-title text-light">Office Number:${data.officeNumber}</h5>
          <a href="mailto:${data.link}? subject=subject text" class="btn mt-auto"><i class="fab fa-github mr-2"></i>Email</a>
          
        </div>
      
    </div>
  </section>

  </main>

  </main>
  <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; 2021 by ${data.name}</h3>
  </footer>
</body>
</html>
`;
}

module.exports = generateTeam;