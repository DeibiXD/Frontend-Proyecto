

function testing() {
    var div1 = document.getElementById('landing-page');
    var div2 = document.getElementById('main-page');
    var computedStyle1 = window.getComputedStyle(div1);
    var computedStyle2 = window.getComputedStyle(div2);
    var current_active;

    if (computedStyle1.display === 'block') {
        current_active = 1;
    } else if (computedStyle2.display === 'block') {
        current_active = 2;
    }

    switch (current_active) {
        case 1:
            div1.style.display = 'none';
            div2.style.display = 'block';
            break;

        case 2:
            div2.style.display = 'none';
            div1.style.display = 'block';
            break;
    }
}

  