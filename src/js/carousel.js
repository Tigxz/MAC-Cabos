/**
 * Carousel semiautomático para a página inicial.
 * - Avança automaticamente a cada 5 segundos.
 * - Pausa ao passar o mouse (hover).
 * - Navegação manual com setas prev/next.
 * - Wrap-around (volta ao primeiro ao chegar ao último).
 */
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const wrapper = document.querySelector('.carousel-wrapper');

    let currentIndex = 0;
    let autoSlideInterval = null;
    const AUTO_DELAY = 5000; // 5 segundos

    /** Calcula a largura de um slide (largura + margem direita) */
    function getSlideWidth() {
        const style = getComputedStyle(slides[0]);
        const width = slides[0].getBoundingClientRect().width;
        const marginRight = parseFloat(style.marginRight) || 0;
        return width + marginRight;
    }

    /** Atualiza a posição do track com base no índice atual */
    function updateTransform() {
        const slideWidth = getSlideWidth();
        const translateX = currentIndex * slideWidth;
        track.style.transform = `translateX(-${translateX}px)`;
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateTransform();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateTransform();
    }

    function startAuto() {
        if (autoSlideInterval) return;
        autoSlideInterval = setInterval(goToNext, AUTO_DELAY);
    }

    function pauseAuto() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }

    /** Reinicia o timer de auto-avanço após interação manual */
    function resetAuto() {
        pauseAuto();
        startAuto();
    }

    // Navegação com setas
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToNext();
            resetAuto();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToPrev();
            resetAuto();
        });
    }

    // Teclado: setas esquerda/direita para navegar
    document.addEventListener('keydown', (e) => {
        if (e.target.closest('.carousel-wrapper')) {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToNext();
                resetAuto();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPrev();
                resetAuto();
            }
        }
    });

    // Pausa ao passar o mouse, retoma ao sair
    if (wrapper) {
        wrapper.addEventListener('mouseenter', pauseAuto);
        wrapper.addEventListener('mouseleave', startAuto);
    }

    // Recalcula posição no redimensionamento da janela
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateTransform, 150);
    });

    // Inicia o auto-avanço
    startAuto();
});
