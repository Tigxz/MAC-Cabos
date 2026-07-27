// produto-individual.js - Lógica de exibição dinâmica do produto selecionado

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    const product = getProductByCode(code) || products[0];
    if (!product) return;

    // Atualizar Título da Página
    document.title = `MAC Cabos - ${product.name}`;

    // Elementos principais
    const titleEl = document.getElementById('product-title');
    const skuEl = document.getElementById('product-sku');
    const descEl = document.getElementById('product-description');
    const priceEl = document.getElementById('product-price');
    const mainImgEl = document.getElementById('main-product-img');
    const specsContainer = document.getElementById('specs-grid');
    const btnRevender = document.getElementById('btn-revender');
    const btnVerLinha = document.getElementById('btn-ver-linha');
    const relatedContainer = document.getElementById('related-grid');

    if (titleEl) titleEl.textContent = product.name;
    if (skuEl) skuEl.textContent = `Código: ${product.code}`;
    if (descEl) descEl.textContent = getProductDescription(product);
    if (priceEl) priceEl.textContent = product.price;

    // Imagem principal e galeria
    const imgSrc = getProductImageUrl(product);
    if (mainImgEl) {
        mainImgEl.src = imgSrc;
        mainImgEl.alt = product.name;
    }

    // Miniaturas
    const thumbGrid = document.getElementById('thumb-grid');
    if (thumbGrid) {
        thumbGrid.innerHTML = [1, 2, 3, 4].map((num, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeMainImage('${imgSrc}', this)">
                <img src="${imgSrc}" alt="Thumb ${num}">
            </div>
        `).join('');
    }

    // Especificações
    if (specsContainer) {
        specsContainer.innerHTML = `
            <div class="spec-box"><span>Linha:</span><p>${product.line}</p></div>
            <div class="spec-box"><span>Comprimento:</span><p>${product.length}</p></div>
            <div class="spec-box"><span>Conector:</span><p>${product.connector}</p></div>
            <div class="spec-box"><span>Cor / Acabamento:</span><p>${product.color}</p></div>
            <div class="spec-box"><span>Tipo / Sinal:</span><p>${product.subtype}</p></div>
            <div class="spec-box"><span>Preço de Tabela:</span><p style="color: var(--primary-cyan); font-weight: bold;">${product.price}</p></div>
            <div class="spec-box"><span>Blindagem:</span><p>Dupla Cobre Oferecendo Som Limpo</p></div>
            <div class="spec-box"><span>Garantia:</span><p>5 Anos de Fábrica</p></div>
        `;
    }

    // Botões de Ação
    if (btnRevender) {
        btnRevender.href = `quero-revender.html?code=${encodeURIComponent(product.code)}`;
    }
    if (btnVerLinha) {
        btnVerLinha.textContent = `Ver Linha ${product.line}`;
        btnVerLinha.href = `catalogo.html?line=${encodeURIComponent(product.line)}`;
    }

    // Outros Modelos Recomendados (Cards)
    if (relatedContainer) {
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
});

function changeMainImage(src, element) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.thumb-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');
}
