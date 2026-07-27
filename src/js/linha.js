// linha.js - Lógica dinâmica para renderização de páginas de linha no layout de referência

const lineSummaries = {
    'Classic': 'A Linha Classic reúne cabos de instrumento e para estúdio com construção robusta e conectores de alta qualidade. Ideal para músicos que precisam de confiabilidade em palcos, ensaios e gravação.',
    'Cacau Santos Signature': 'Produtos assinados pelo artista Cacau Santos, desenvolvidos com especificações técnicas exigentes e componentes de alto padrão para timbre limpo e máxima durabilidade.',
    'Iron Flex': 'Cabos ultra flexíveis projetados com dupla blindagem e revestimento reforçado. Perfeitos para suportar o uso intenso em viagens, palcos e apresentações ao vivo.',
    'Iron Flex Textil': 'Malha têxtil premium sobre cabo ultra flexível. Combina visual sofisticado, alta proteção mecânica e facilidade de manuseio sem emaranhar.',
    'Iron Flex Tarja': 'Cabos coloridos com tarjas marcantes para rápida identificação nos palcos. Desempenho profissional e visual dinâmico para seu setup.',
    'Vintage Espiral': 'Estilo clássico retro com cabo espiralado unificado em diversas cores. Proporciona excelente alcance dinâmico sem enrolar fios no chão.',
    'Acoustic': 'Desenvolvido especialmente para violões e instrumentos acústicos. Resposta de frequência linear e preservação do timbre natural sem perdas de graves.',
    'Keyboard': 'Cabos duplos para teclados e sintetizadores estéreo. Elimina interferências e garante sinal balanceado e limpo para palco e estúdio.',
    'King Line': 'Cabos equipados com chave silenciosa ON/OFF no conector. Permite trocar de instrumento no palco sem estalos ou ruídos no amplificador.',
    'Bass Jumbo': 'Cabo de seção reforçada (1.50mm²) projetado para contrabaixo. Transmissão estável e encorpada de graves profundos.',
    'Pedal Series': 'Cabos curtos e emendas de pedal de alta precisão. Maximizam a fidelidade do sinal na sua pedaleira reduzindo perdas e ruídos.',
    'Speaker': 'Cabos de potência para caixas acústicas, amplificadores e conectores Speakon. Suportam alta corrente com segurança.',
    'Extender': 'Extensões de fone de ouvido e cabos de sinal de longa distância com conectores reforçados para estúdio e palco.',
    'DJ Series': 'Cabos de sinal com várias combinações de conectores (RCA, P10, P2) para equipamentos de DJ, mixers e interfaces de áudio.',
    'Caixa Multicanal': 'Caixas de medusa em aço para organização de palco e multicabos profissionais.',
    'Fio Multicanal': 'Multicabos por metro para instalação fixa de som e transmissão multicanal.',
    'Fios Diversos': 'Fios avulsos e rolos por metro para montagem e manutenção de cabos.',
    'Conectores Diversos': 'Plugs P10, P2, XLR Cannon e acessórios para montagem profissional.',
    'Correias': 'Correias de alta resistência e couro ecológico para instrumentos de corda.'
};

const lineBulletPoints = {
    'Classic': [
        'Matérias-primas de alta qualidade resultando em timbres mais nítidos.',
        'Blindagem espiral + semicondutora que reduz interferências externas.',
        'Alta flexibilidade mecânica para uso contínuo.',
        'Plugs injetados c/ ótimo desempenho contra ruídos nos conectores.'
    ],
    'Iron Flex': [
        'Cobertura externa ultra flexível em borracha PVC de alta resistência.',
        'Dupla blindagem em cobre trançado para transparência total de áudio.',
        'Alta durabilidade em condições extremas de palco e turnê.',
        'Conectores reforçados com alívio de tensão.'
    ],
    'Vintage Espiral': [
        'Formato espiral clássico vintage em diversas cores atraentes.',
        'Retração elástica que evita nós e mantém a organização no palco.',
        'Conectores P10 reto e 90° com banho de ouro.',
        'Isolamento interno reforçado para alta impedância.'
    ],
    'Acoustic': [
        'Condutor exclusivo para frequências harmônicas de instrumentos acústicos.',
        'Baixa capacitância preservando os agudos naturais e médios quentes.',
        'Acabamento premium na cor Coca ou malha têxtil.',
        'Garantia de 5 anos contra defeitos de fabricação.'
    ]
};

const defaultBullets = [
    'Matérias-primas de alta qualidade resultando em timbres nítidos e puros.',
    'Blindagem espiral reforçada que elimina interferências e ruídos externos.',
    'Excelente flexibilidade mecânica para palcos, ensaios e estúdio.',
    'Conectores de alta precisão com máxima condução e durabilidade.'
];

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const lineParam = params.get('line') || 'Classic';

    // Encontrar nome exato da linha em getUniqueValues('line')
    const uniqueLines = [...new Set(products.map(p => p.line))];
    const matchedLine = uniqueLines.find(l => l.toLowerCase() === lineParam.toLowerCase()) || 'Classic';

    // Filtrar produtos da linha
    const lineProducts = products.filter(p => p.line === matchedLine);

    // Atualizar título da página
    document.title = `MAC Cabos - Linha ${matchedLine}`;

    // Atualizar Header da Linha
    const headerTitle = document.getElementById('line-title');
    const headerDesc = document.getElementById('line-description');

    if (headerTitle) headerTitle.textContent = `LINHA ${matchedLine.toUpperCase()}`;
    if (headerDesc) headerDesc.textContent = lineSummaries[matchedLine] || `Conheça todos os produtos da Linha ${matchedLine} da MAC Cabos. Projetados para alta resistência, som limpo e durabilidade incomparável.`;

    // Agrupar produtos por subtipo
    const groups = {};
    lineProducts.forEach(product => {
        const key = product.subtype || 'Geral';
        if (!groups[key]) groups[key] = [];
        groups[key].push(product);
    });

    const showcaseContainer = document.getElementById('line-showcase-container');
    if (!showcaseContainer) return;

    const bullets = lineBulletPoints[matchedLine] || defaultBullets;

    showcaseContainer.innerHTML = Object.keys(groups).map((subtype, groupIdx) => {
        const groupProducts = groups[subtype];
        const featuredProduct = groupProducts[0];
        const imgSrc = getProductImageUrl(featuredProduct);

        const rowsHtml = groupProducts.map(p => `
            <tr onclick="window.location.href='produto-individual.html?code=${encodeURIComponent(p.code)}'">
                <td><strong>${p.code}</strong></td>
                <td>${p.name}</td>
                <td>${p.length}</td>
                <td>${p.connector}</td>
                <td style="color: var(--primary-cyan); font-weight: bold;">${p.price}</td>
            </tr>
        `).join('');

        return `
            <div class="line-showcase-group">
                <div class="line-showcase-block">
                    <div class="line-showcase-img-box">
                        <button class="arrow-nav arrow-left" onclick="prevProductImg(${groupIdx})">&lt;</button>
                        <img id="group-img-${groupIdx}" src="${imgSrc}" alt="${featuredProduct.name}">
                        <button class="arrow-nav arrow-right" onclick="nextProductImg(${groupIdx})">&gt;</button>
                    </div>
                    <div class="line-showcase-info">
                        <h2>${matchedLine} - ${subtype}</h2>
                        <ul class="line-features-list">
                            ${bullets.map(b => `<li>${b}</li>`).join('')}
                        </ul>
                        <a href="quero-revender.html" class="btn-outline">Quero Revender</a>
                    </div>
                </div>

                <div class="line-variations-table-wrapper">
                    <table class="line-variations-table">
                        <thead>
                            <tr>
                                <th>CÓDIGO</th>
                                <th>DESCRIÇÃO</th>
                                <th>TAMANHO</th>
                                <th>CONECTOR</th>
                                <th>PREÇO</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
});

function prevProductImg(groupIdx) {
    const imgEl = document.getElementById(`group-img-${groupIdx}`);
    if (imgEl) {
        imgEl.style.transform = 'scale(0.92)';
        imgEl.style.opacity = '0.4';
        setTimeout(() => {
            imgEl.style.transform = 'scale(1)';
            imgEl.style.opacity = '1';
        }, 200);
    }
}

function nextProductImg(groupIdx) {
    const imgEl = document.getElementById(`group-img-${groupIdx}`);
    if (imgEl) {
        imgEl.style.transform = 'scale(1.08)';
        imgEl.style.opacity = '0.4';
        setTimeout(() => {
            imgEl.style.transform = 'scale(1)';
            imgEl.style.opacity = '1';
        }, 200);
    }
}
