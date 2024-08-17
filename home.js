window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

function voltarAoTopo() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

document.addEventListener('DOMContentLoaded', function() {
    const starCounts = [700, 200, 100];
    const starSelectors = ['#stars', '#stars2', '#stars3'];

    starSelectors.forEach((selector, index) => {
        const element = document.querySelector(selector);
        const boxShadow = generateBoxShadow(starCounts[index]);
        element.style.boxShadow = boxShadow;
    });

    function generateBoxShadow(n) {
        let value = '';
        for (let i = 0; i < n; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            value += `${x}px ${y}px ${Math.random() * 2 + 1}px #FFF, `;
        }
        return value.slice(0, -2); // Remove trailing comma and space
    }
});

window.onload = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#1e3241';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
};


