const htmlGen = function (teams) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile Generator</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-success">
   <h1 class="display-3 text-white text-center">Our current team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${teams} 
    </div>
</div>
<script src="https://kit.fontawesome.com/159dad213a.js" crossorigin="anonymous"></script>  
</body>
</html>`

}

const genCard = function (arr) {
   
    let icon;
    
    let role;

    if (arr.title === "Manager") {
        icon = `<i class="fas fa-mug-hot"></i>`
        role = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        icon = `<i class="fas fa-glasses"></i>`
        role = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        icon = `<i class="fas fa-user-graduate"></i>`
        role = `School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
    <div class="card mb-5 bg-white">
        <div class="card-header bg-primary">
            <h5 class="text-white text-center">${arr.name}</h5>
            <h5 class="text-white text-center">${icon}</i> ${arr.title}</h5>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${role}</i>
            </u>
        </div>
    </div>
  </div>
`
}

exports.htmlGen = htmlGen;
exports.genCard = genCard;