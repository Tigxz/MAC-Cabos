// catalogo.js - Lógica de renderização de cards do catálogo e filtros (Cards Limpos)

const filters = {
    line: '',
    length: '',
    connector: '',
    color: '',
    search: ''
};

const getUniqueValues = (key) => [...new Set(products.map(product => product[key]).filter(Boolean))].sort();

const buildOptions = (select, values, placeholder) => {
    select.innerHTML = `<option value="">${placeholder}</option>` + values.map(value => `<option value="${value}">${value}</option>`).join('');
};

const renderCards = (productList) => {
    const container = document.getElementById('products-grid');
    if (!container) return;

    if (productList.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <h3 style="font-family: 'Oswald', sans-serif; font-size: 24px; color: var(--text-white);">Nenhum produto encontrado</h3>
                <p style="margin-top: 10px; font-size: 14px;">Tente ajustar os filtros ou o termo de busca para encontrar o produto desejado.</p>
            </div>
        `;
    } else {
        container.innerHTML = productList.map(product => {
            const imgSrc = getProductImageUrl(product);
            const detailUrl = `produto-individual.html?code=${encodeURIComponent(product.code)}`;
            return `
                <a href="${detailUrl}" class="product-card" data-code="${product.code}">
                    <div class="product-card-img-wrapper">
                        <img src="${imgSrc}" alt="${product.name}" loading="lazy">
                    </div>
                    <h3 class="product-card-title">${product.name}</h3>
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
        countText.textContent = `Mostrando ${productList.length} de ${products.length} produtos.`;
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
