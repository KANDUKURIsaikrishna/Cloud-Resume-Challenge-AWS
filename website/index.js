$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        //'Cloud Engineer',
        'Software Engineer',
        //DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        //'Cloud Engineer',
        'Software Engineer',
        //'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://tzprobjsxh3zsnqf32rumchbby0uekdc.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();



		function submitToAPI(e) {
            e.preventDefault();
            var URL = "https://9iq1eoqrj4.execute-api.us-east-1.amazonaws.com/prod";

            var name = $("#name-input").val();
            var email = $("#email-input").val();
            var message = $("#message-input").val();
            var data = {
               name : name,
               email : email,
               message : message
             };

            $.ajax({
              type: "POST",
              url : "https://9iq1eoqrj4.execute-api.us-east-1.amazonaws.com/prod",
              dataType: "json",
              crossDomain: "true",
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify(data),

              
              success: function () {
                // clear form and show a success message
                alert("Thanks for contacting us, we will get back to you soon");
                document.getElementById("contact-form").reset();
            location.reload();
              },
              error: function () {
                // show an error message
                alert("UnSuccessfull");
              }});
          }

