document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-links li");
    const langButton = document.querySelector(".language-switch");

    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        }, index * 200); // Aparece cada 200ms
    });

    setTimeout(() => {
        langButton.style.opacity = "1";
        langButton.style.transform = "translateY(0)";
        langButton.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    }, navItems.length * 200); // Aparece después de los <li>
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Animación del logo activada.");

    const logo = document.querySelector(".logo");

    if (!logo) {
        console.error("No se encontró el logo.");
        return;
    }

    setTimeout(() => {
        logo.classList.add("show");
    }, 300); // Aparece después de 300ms para hacer la animación más fluida
});

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero-text h1");
    const paragraph = document.querySelector(".hero-text p");

    if (!title || !paragraph) {
        console.error("No se encontraron los elementos h1 o p.");
        return;
    }

    // Efecto máquina de escribir con espacios correctos
    const text = title.innerText.split(""); // Separa cada letra correctamente
    title.innerText = "";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            title.innerHTML += text[index] === " " ? "&nbsp;" : text[index]; // Mantiene espacios
            index++;
            setTimeout(typeEffect, 80); // Controla la velocidad de escritura
        } else {
            paragraph.classList.add("show"); // Activa animación del párrafo después de completar el título
        }
    }

    setTimeout(typeEffect, 500); // Retraso antes de iniciar la animación
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".gest-int-des");
    const title = section.querySelector("h1");
    const subTitle = section.querySelector("h4");
    const paragraph = section.querySelector("p");
    const image = section.querySelector(".gest-int-img img");

    let triggered = false; // Evita que la animación se active múltiples veces

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5; 
    }

    function activateAnimations() {
        if (triggered) return;
        if (isInViewport(section)) {
            triggered = true;

            // Asegurar visibilidad inicial del H1
            title.style.opacity = "1";

            // Efecto máquina de escribir con corrección de espacios
            const text = title.textContent; // Obtener el texto original
            title.textContent = ""; // Borrar el contenido inicial
            let index = 0;

            function typeEffect() {
                if (index < text.length) {
                    title.innerHTML += text[index] === " " ? "&nbsp;" : text[index];
                    index++;
                    setTimeout(typeEffect, 45); // Velocidad de escritura
                } else {
                    // Activar el h4 después de completar el h1
                    subTitle.classList.add("show");

                    // Activar el p después del h4 con retraso
                    setTimeout(() => paragraph.classList.add("show"), 400);

                    // Activar la imagen después del párrafo
                    setTimeout(() => image.classList.add("show"), 800);
                }
            }

            setTimeout(typeEffect, 200); // Comienza antes para mejorar fluidez
        }
    }

    window.addEventListener("scroll", activateAnimations);
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".gest-int-des");
    const instructivos = document.querySelectorAll(".gest-int-instructivos");
    let triggered = false;

    function isSectionInView() {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.2; // Se activa cuando el usuario llega al 20% de la sección
    }

    function activateAnimations() {
        if (triggered) return;

        if (isSectionInView()) {
            instructivos.forEach((instructivo) => {
                instructivo.classList.add("show");
            });
            triggered = true; // Evita que la animación se dispare varias veces
        }
    }

    window.addEventListener("scroll", activateAnimations);
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".implementacion-consultoria");

    if (!section) {
        console.error("Error: No se encontró la sección .implementacion-consultoria");
        return;
    }

    const labels = section.querySelectorAll(".implementacion-consultoria-data label");
    let triggered = false; // Controla si la animación ya se ejecutó

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.3; // Activa la animación cuando el 30% de la sección sea visible
    }

    function animateNumbers(label) {
        const finalValue = parseInt(label.textContent.replace(/[^\d]/g, ""), 10); // Extrae solo números
        if (isNaN(finalValue)) {
            console.warn(`Advertencia: ${label.textContent} no es un número válido`);
            return;
        }

        const isHours = label.textContent.includes("hs");
        let counter = 0;
        const increment = Math.ceil(finalValue / 50); // Divide en 50 pasos

        function updateCounter() {
            if (counter < finalValue) {
                counter += increment;
                if (counter > finalValue) counter = finalValue;
                label.textContent = isHours ? `${counter}hs` : counter;
                setTimeout(updateCounter, 100); // Controla la velocidad de la animación
            }
        }

        updateCounter();
    }

    function activateAnimations() {
        if (triggered) return; // Evita repetir la animación

        if (isInViewport(section)) {
            labels.forEach(label => {
                label.classList.add("show");
                animateNumbers(label);
            });

            triggered = true;
        }
    }

    window.addEventListener("scroll", activateAnimations);
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".implementacion-consultoria");
    const title = section.querySelector("h3");
    const paragraph = section.querySelector("p");
    const logo = section.querySelector(".implementacion-consultoria-img img");
    
    let triggered = false;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.3; // Activa cuando el 30% de la sección sea visible
    }

    function activateAnimations() {
        if (triggered) return;

        if (isInViewport(section)) {
            setTimeout(() => {
                title.classList.add("show"); // Aparece el h3 primero
                
                setTimeout(() => {
                    paragraph.classList.add("show"); // Luego el p
                }, 40); // 0.6s después
            }, 100); // 🔥 IMPORTANTE: 2 segundos antes de iniciar la animación
            
            logo.classList.add("show"); // El logo gira inmediatamente cuando aparece la sección
            triggered = true; // Evita que la animación se repita
        }
    }

    window.addEventListener("scroll", activateAnimations);
});
document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.getElementById("whatsapp-button");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace haga un comportamiento inesperado
            window.open("https://wa.me/5492974739803?text=Hola,%20quiero%20más%20información%20sobre%20NelX.", "_blank");
        });
    } else {
        console.error("No se encontró el botón de WhatsApp.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const whatsappMessage = document.getElementById("whatsapp-message");

    if (whatsappMessage) {
        setTimeout(() => {
            whatsappMessage.classList.add("show");

            // Ocultar el mensaje después de 3 segundos con efecto de explosión
            setTimeout(() => {
                whatsappMessage.classList.add("explode");

                // Remover el mensaje después de la animación
                setTimeout(() => {
                    whatsappMessage.classList.remove("show", "explode");
                }, 20); // Duración de la explosión
            }, 6000);
        }, 2600); // 🔥 Se muestra 1.5s después de cargar la página
    } else {
        console.error("No se encontró el mensaje de WhatsApp.");
    }
});
