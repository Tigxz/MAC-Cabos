// produto-individual.js - Lógica de exibição dinâmica do produto selecionado

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

    const imgSrc = getProductImageUrl(product);
    if (mainImgEl) {
        mainImgEl.src = imgSrc;
        mainImgEl.alt = product.name;
    }

    const thumbGrid = document.getElementById('thumb-grid');
    if (thumbGrid) {
        thumbGrid.innerHTML = [1, 2, 3, 4].map((num, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeMainImage('${imgSrc}', this)">
                <img src="${imgSrc}" alt="Thumb ${num}">
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

        specsContainer.innerHTML = `
            <div class="spec-box"><span>Linha:</span><p>${product.line}</p></div>
            <div class="spec-box"><span>Comprimento:</span>${lengthField}</div>
            <div class="spec-box"><span>Conector:</span><p>${product.connector}</p></div>
            <div class="spec-box"><span>Cor / Acabamento:</span><p>${product.color}</p></div>
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

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const family = params.get('family');

    let product = null;
    let variants = [];

    if (code) {
        product = getProductByCode(code);
        // derive variants from family of this product
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
});

function changeMainImage(src, element) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.thumb-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');
}
