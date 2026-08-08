// produto-individual.js - Lógica de exibição dinâmica do produto selecionado

let currentProduct = null;

// derive family key from code
const familyKey = (product) => {
    if (!product) return '';
    const code = typeof product === 'string' ? product : product.code;
    if (!code) return '';
    const m = code.match(/^[A-Za-z]+/);
    return (m && m[0]) ? m[0].toUpperCase() : code.toUpperCase();
};

function renderRelated(product) {
    const relatedContainer = document.getElementById('related-grid');
    if (!relatedContainer) return;
    const relatedList = getRelatedProducts(product, 3);
    relatedContainer.innerHTML = relatedList.map(rel => {
        const relImg = getProductImageUrl(rel);
        return `
                <a href="produto-individual.html?code=${encodeURIComponent(rel.code)}" class="product-card" data-code="${rel.code}">
                    <span class="product-card-badge">${rel.line}</span>
                    <div class="product-card-img-wrapper">
                        <img src="${relImg}" alt="${rel.name}" loading="lazy">
                    </div>
                    <h3 class="product-card-title">${rel.name}</h3>
                    <p class="product-card-code">Código: ${rel.code}</p>
                    <div class="product-card-specs">
                        <span class="product-spec-pill">📏 ${rel.length}</span>
                        <span class="product-spec-pill">🔌 ${rel.connector}</span>
                    </div>
                    <div class="product-card-footer">
                        <span class="product-card-price">${rel.price}</span>
                        <span class="product-card-btn">Ver Produto &rarr;</span>
                    </div>
                </a>
            `;
    }).join('');
}

function updateProductDisplay(product, variants=[]) {
    if (!product) return;
    currentProduct = product;
    document.title = `MAC Cabos - ${product.name}`;
    const titleEl = document.getElementById('product-title');
    const skuEl = document.getElementById('product-sku');
    const descEl = document.getElementById('product-description');
    const priceEl = document.getElementById('product-price');
    const mainImgEl = document.getElementById('main-product-img');
    const specsContainer = document.getElementById('specs-grid');
    const btnRevender = document.getElementById('btn-revender');
    const btnVerLinha = document.getElementById('btn-ver-linha');

    if (titleEl) titleEl.textContent = product.name;
    if (skuEl) skuEl.textContent = `Código: ${product.code}`;
    if (descEl) descEl.textContent = getProductDescription(product);
    if (priceEl) priceEl.textContent = product.price;

    // Badges (e.g., Lançamento, Pacote) - only visible for specific CS products
    let badgesEl = document.getElementById('product-badges');
    if (!badgesEl && titleEl) {
        badgesEl = document.createElement('div');
        badgesEl.id = 'product-badges';
        badgesEl.className = 'product-badges';
        titleEl.insertAdjacentElement('afterend', badgesEl);
    }
    if (badgesEl) {
        if (product.code === 'CS10LB' || product.code === 'CS15LB') {
            badgesEl.innerHTML = `<span class="badge badge-launch">LANÇAMENTO</span> <span class="badge badge-pack">PACOTE</span>`;
        } else {
            badgesEl.innerHTML = '';
        }
    }

    const imgSrc = getProductImageUrl(product);
    if (mainImgEl) {
        mainImgEl.src = imgSrc;
        mainImgEl.alt = product.name;
    }

    // Thumbnails: render all available product images
    const thumbGrid = document.getElementById('thumb-grid');
    if (thumbGrid) {
        const images = (typeof getProductImages === 'function') ? getProductImages(product) : [imgSrc];
        thumbGrid.innerHTML = images.map((src, idx) => `
            <div class="thumb-item ${(idx === 0) ? 'active' : ''}" onclick="changeMainImage('${src}', this)">
                <img src="${src}" alt="Thumb ${idx + 1}">
            </div>
        `).join('');
    }

    if (specsContainer) {
        // build length field as a select when variants are available
        let lengthField = `<p>${product.length}</p>`;
        if (variants && variants.length > 1) {
            const options = variants.map(v => `<option value="${v.code}" ${v.code===product.code? 'selected' : ''}>${v.length} — ${v.code}</option>`).join('');
            lengthField = `<select id="variant-select">${options}</select>`;
        }

        // Determine initial color from the first image when a color map exists for this product
        let displayColor = product.color;
        if (typeof getProductImageColor === 'function') {
            const firstImage = getProductImageUrl(product);
            const imgColor = getProductImageColor(product, firstImage);
            if (imgColor) displayColor = imgColor;
        }

        specsContainer.innerHTML = `
            <div class="spec-box"><span>Linha:</span><p>${product.line}</p></div>
            <div class="spec-box"><span>Comprimento:</span>${lengthField}</div>
            <div class="spec-box"><span>Conector:</span><p>${product.connector}</p></div>
            <div class="spec-box"><span>Cor / Acabamento:</span><p>${displayColor}</p></div>
            <div class="spec-box"><span>Tipo / Sinal:</span><p>${product.subtype}</p></div>
            <div class="spec-box"><span>Preço de Tabela:</span><p style="color: var(--primary-cyan); font-weight: bold;">${product.price}</p></div>
            <div class="spec-box"><span>Blindagem:</span><p>Dupla Cobre Oferecendo Som Limpo</p></div>
            <div class="spec-box"><span>Garantia:</span><p>5 Anos de Fábrica</p></div>
        `;

        // attach change listener to the inline selector (if present)
        const variantSelect = document.getElementById('variant-select');
        if (variantSelect) {
            variantSelect.addEventListener('change', (e) => {
                const selectedCode = e.target.value;
                const selected = products.find(p => p.code === selectedCode);
                if (selected) {
                    history.replaceState(null, '', `produto-individual.html?code=${encodeURIComponent(selected.code)}`);
                    updateProductDisplay(selected, variants);
                }
            });
        }
    }

    if (btnRevender) {
        btnRevender.href = `quero-revender.html?code=${encodeURIComponent(product.code)}`;
    }
    if (btnVerLinha) {
        btnVerLinha.textContent = `Ver Linha ${product.line}`;
        btnVerLinha.href = `linha.html?line=${encodeURIComponent(product.line)}`;
    }

    renderRelated(product);

    // variant selector is rendered inline inside specsGrid now
}

function changeMainImage(src, element) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) {
        mainImg.src = src;
        mainImg.dataset.loaded = 'false';
    }
    document.querySelectorAll('.thumb-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');

    // Update the color spec dynamically when the image changes to a colored variant
    if (currentProduct && typeof getProductImageColor === 'function') {
        const color = getProductImageColor(currentProduct, src);
        if (color) {
            const specBoxes = document.querySelectorAll('#specs-grid .spec-box');
            specBoxes.forEach(box => {
                const span = box.querySelector('span');
                if (span && span.textContent.includes('Cor')) {
                    const p = box.querySelector('p');
                    if (p) p.textContent = color;
                }
            });
        }
    }
}

function setupMagnifier(image, lens, zoom = 2.5) {
    if (!image || !lens) return;

    const updateLens = (event) => {
        const parentRect = image.parentElement.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const xInImage = event.clientX - imageRect.left;
        const yInImage = event.clientY - imageRect.top;

        if (xInImage < 0 || yInImage < 0 || xInImage > imageRect.width || yInImage > imageRect.height) {
            lens.classList.add('hidden');
            return;
        }

        const lensWidth = lens.offsetWidth;
        const lensHeight = lens.offsetHeight;
        const xInParent = event.clientX - parentRect.left;
        const yInParent = event.clientY - parentRect.top;

        lens.classList.remove('hidden');
        lens.style.left = `${Math.min(Math.max(xInParent - lensWidth / 2, 0), parentRect.width - lensWidth)}px`;
        lens.style.top = `${Math.min(Math.max(yInParent - lensHeight / 2, 0), parentRect.height - lensHeight)}px`;
        lens.style.backgroundImage = `url('${image.src}')`;
        lens.style.backgroundSize = `${image.naturalWidth * zoom}px ${image.naturalHeight * zoom}px`;
        lens.style.backgroundPosition = `${-(xInImage * (image.naturalWidth / imageRect.width) * zoom - lensWidth / 2)}px ${-(yInImage * (image.naturalHeight / imageRect.height) * zoom - lensHeight / 2)}px`;
    };

    const hideLens = () => lens.classList.add('hidden');
    const showLens = (event) => updateLens(event);

    image.addEventListener('mousemove', updateLens);
    image.addEventListener('mouseenter', showLens);
    image.addEventListener('mouseleave', hideLens);
    image.addEventListener('touchmove', (event) => {
        if (event.touches.length !== 1) return;
        updateLens(event.touches[0]);
    }, { passive: true });
    image.addEventListener('touchend', hideLens);
}

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const family = params.get('family');

    let product = null;
    let variants = [];

    if (code) {
        product = getProductByCode(code);
        if (product) {
            variants = products.filter(p => familyKey(p) === familyKey(product));
        }
    } else if (family) {
        variants = products.filter(p => familyKey(p) === (family || '').toUpperCase());
        product = variants[0];
    }

    product = product || products[0];
    if (!product) return;

    updateProductDisplay(product, variants);

    const mainImg = document.getElementById('main-product-img');
    const lens = document.getElementById('magnifier-lens');

    if (mainImg && lens) {
        mainImg.addEventListener('load', () => {
            lens.classList.add('hidden');
            lens.style.backgroundImage = `url('${mainImg.src}')`;
        });
        setupMagnifier(mainImg, lens, 1.3);
    }
});
