// catalogo.js - Lógica de renderização de cards do catálogo e filtros (Cards Limpos)

const filters = {
    line: '',
    length: '',
    connector: '',
    color: '',
    search: ''
};

const getUniqueValues = (key) => [...new Set(products.map(product => product[key]).filter(Boolean))].sort();

// derive a family key from the product code (letters prefix)
const familyKey = (product) => {
    if (!product || !product.code) return '';
    const m = product.code.match(/^[A-Za-z]+/);
    return (m && m[0]) ? m[0].toUpperCase() : product.code.toUpperCase();
};

// user-facing name without length details
const displayName = (product) => {
    if (!product || !product.name) return '';
    return product.name.replace(/\b\d+FT\b\s*\([^\)]*\)|\([^\)]+m\)|\b\d+(?:\.\d+)?M\b/gi, '').replace(/\s{2,}/g, ' ').trim();
};
const buildOptions = (select, values, placeholder) => {
    select.innerHTML = `<option value="">${placeholder}</option>` + values.map(value => `<option value="${value}">${value}</option>`).join('');
};

const renderCards = (productList) => {
    const container = document.getElementById('products-grid');
    if (!container) return;

    // group products by family (different lengths become variants)
    const groups = {};
    productList.forEach(p => {
        const key = familyKey(p);
        groups[key] = groups[key] || [];
        groups[key].push(p);
    });

    const displayList = Object.keys(groups).map(key => {
        // pick a representative variant (shortest length if possible)
        const variants = groups[key];
        const sorted = variants.slice().sort((a, b) => {
            const an = parseFloat((a.length || '').match(/(\d+(?:\.\d+)?)/)?.[0] || '0');
            const bn = parseFloat((b.length || '').match(/(\d+(?:\.\d+)?)/)?.[0] || '0');
            return an - bn || a.code.localeCompare(b.code);
        });
        return { family: key, variants, product: sorted[0] };
    });

    if (displayList.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <h3 style="font-family: 'Oswald', sans-serif; font-size: 24px; color: var(--text-white);">Nenhum produto encontrado</h3>
                <p style="margin-top: 10px; font-size: 14px;">Tente ajustar os filtros ou o termo de busca para encontrar o produto desejado.</p>
            </div>
        `;
    } else {
        container.innerHTML = displayList.map(item => {
            const product = item.product;
            const imgSrc = getProductImageUrl(product);
            const detailUrl = `produto-individual.html?family=${encodeURIComponent(item.family)}`;
            const name = displayName(product);
            return `
                <a href="${detailUrl}" class="product-card" data-family="${item.family}">
                    <div class="product-card-img-wrapper">
                        <img src="${imgSrc}" alt="${name}" loading="lazy">
                    </div>
                    <h3 class="product-card-title">${name}</h3>
                    <p class="product-card-variant-count">${item.variants.length} variação(es)</p>
                    <p class="product-card-code">Código: ${product.code}</p>
                    <div class="product-card-footer">
                        <span class="product-card-price">${product.price}</span>
                        <span class="product-card-btn">Ver Produto &rarr;</span>
                    </div>
                </a>
            `;
        }).join('');
    }

    const countText = document.getElementById('resultados-text');
    if (countText) {
        const familyCount = Object.keys(groups).length;
        countText.textContent = `Mostrando ${familyCount} famílias (${productList.length} variações).`;
    }
};

const applyFilters = () => {
    const filtered = products.filter(product => {
        const matchesLine = !filters.line || product.line === filters.line;
        const matchesLength = !filters.length || product.length === filters.length;
        const matchesConnector = !filters.connector || product.connector === filters.connector;
        const matchesColor = !filters.color || product.color === filters.color;
        const search = filters.search.trim().toLowerCase();
        const matchesSearch = !search || [product.code, product.name, product.line, product.connector, product.color].some(field => field.toLowerCase().includes(search));
        return matchesLine && matchesLength && matchesConnector && matchesColor && matchesSearch;
    });
    renderCards(filtered);
};

const setFilterValues = () => {
    buildOptions(document.getElementById('filter-line'), getUniqueValues('line'), 'Todas as linhas');
    buildOptions(document.getElementById('filter-length'), getUniqueValues('length'), 'Todos os tamanhos');
    buildOptions(document.getElementById('filter-connector'), getUniqueValues('connector'), 'Todos os conectores');
    buildOptions(document.getElementById('filter-color'), getUniqueValues('color'), 'Todas as cores');
};

const setQueryFilter = () => {
    const params = new URLSearchParams(window.location.search);
    const line = params.get('line');
    if (line) {
        const selectLine = document.getElementById('filter-line');
        const normalized = line.replace(/-/g, ' ').replace(/\+/g, ' ').toLowerCase();
        const match = getUniqueValues('line').find(item => item.toLowerCase() === normalized);
        if (match) {
            selectLine.value = match;
            filters.line = match;
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    setFilterValues();

    document.getElementById('filter-line').addEventListener('change', ({ target }) => {
        filters.line = target.value;
        applyFilters();
    });

    document.getElementById('filter-length').addEventListener('change', ({ target }) => {
        filters.length = target.value;
        applyFilters();
    });

    document.getElementById('filter-connector').addEventListener('change', ({ target }) => {
        filters.connector = target.value;
        applyFilters();
    });

    document.getElementById('filter-color').addEventListener('change', ({ target }) => {
        filters.color = target.value;
        applyFilters();
    });

    document.getElementById('search-input').addEventListener('input', ({ target }) => {
        filters.search = target.value;
        applyFilters();
    });

    setQueryFilter();
    applyFilters();
});
