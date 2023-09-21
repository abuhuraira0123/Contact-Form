 
 function sendEmail(){
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "abuhurairakhan7347@gmail.com",
                    Password: "Khan@121962",
                    To: 'abuhurairagaharwar@gmail.com',
                    From: document.getElementById("email").value,
                    Subject: "New Contect Form Enquiry",
                    Body: "Name: " + document.getElementById("name").value
                          + "<br> Email: "+ document.getElementById("email").value
                           + "<br> Email: "+ document.getElementById("phone").value
                            + "<br> Email: "+ document.getElementById("message").value
                }).then(
                    message => alert("mail send successfully")
                );
            }