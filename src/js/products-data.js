const products = [
    // Linha Classic Mono
    { code: 'MONOIC03B', name: 'Cabo Instrumento 03FT (0.91M) P10 + P10 Classic', line: 'Classic', subtype: 'Mono', length: '03FT (0.91M)', connector: 'P10 + P10', price: 'R$ 18.98', color: 'Preto' },
    { code: 'IC10B', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 Classic', line: 'Classic', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 29.44', color: 'Preto' },
    { code: 'IC15B', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 Classic', line: 'Classic', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 36.03', color: 'Preto' },
    { code: 'IC20B', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 Classic', line: 'Classic', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 47.81', color: 'Preto' },
    { code: 'IC25B', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 Classic', line: 'Classic', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 52.37', color: 'Preto' },
    { code: 'IC30B', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 Classic', line: 'Classic', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10', price: 'R$ 60.06', color: 'Preto' },
    { code: 'IC10LB', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 90° Classic', line: 'Classic', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10 90°', price: 'R$ 29.44', color: 'Preto' },
    { code: 'IC15LB', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 90° Classic', line: 'Classic', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10 90°', price: 'R$ 36.03', color: 'Preto' },
    { code: 'IC20LB', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 90° Classic', line: 'Classic', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10 90°', price: 'R$ 47.81', color: 'Preto' },
    { code: 'IC25LB', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 90° Classic', line: 'Classic', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10 90°', price: 'R$ 52.37', color: 'Preto' },
    { code: 'IC30LB', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 90° Classic', line: 'Classic', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10 90°', price: 'R$ 60.06', color: 'Preto' },
    // Linha Classic Estéreo
    { code: 'MC03PB', name: 'Cabo Desbalanceado 03FT (0.91M) - XLR + P10 Classic Series', line: 'Classic', subtype: 'Estéreo', length: '03FT (0.91M)', connector: 'XLR + P10', price: 'R$ 27.60', color: 'Preto' },
    { code: 'MC10PB', name: 'Cabo Desbalanceado 10FT (3.05M) - XLR + P10 Classic Series', line: 'Classic', subtype: 'Estéreo', length: '10FT (3.05M)', connector: 'XLR + P10', price: 'R$ 33.90', color: 'Preto' },
    { code: 'MC15PB', name: 'Cabo Desbalanceado 15FT (4.57M) - XLR + P10 Classic Series', line: 'Classic', subtype: 'Estéreo', length: '15FT (4.57M)', connector: 'XLR + P10', price: 'R$ 40.20', color: 'Preto' },
    { code: 'MC20PB', name: 'Cabo Desbalanceado 20FT (6.10M) - XLR + P10 Classic Series', line: 'Classic', subtype: 'Estéreo', length: '20FT (6.10M)', connector: 'XLR + P10', price: 'R$ 49.20', color: 'Preto' },
    { code: 'MC25PB', name: 'Cabo Desbalanceado 25FT (7.62M) - XLR + P10 Classic Series', line: 'Classic', subtype: 'Estéreo', length: '25FT (7.62M)', connector: 'XLR + P10', price: 'R$ 56.20', color: 'Preto' },
    { code: 'MC30PB', name: 'Cabo Desbalanceado 30FT (9.15M) - XLR + P10 Classic Series', line: 'Classic', subtype: 'Estéreo', length: '30FT (9.15M)', connector: 'XLR + P10', price: 'R$ 63.90', color: 'Preto' },
    { code: 'MC03XB', name: 'Cabo Balanceado 03FT (0.91M) - XLR + XLR Classic Series', line: 'Classic', subtype: 'Estéreo', length: '03FT (0.91M)', connector: 'XLR + XLR', price: 'R$ 29.90', color: 'Preto' },
    { code: 'MC10XB', name: 'Cabo Balanceado 10FT (3.05M) - XLR + XLR Classic Series', line: 'Classic', subtype: 'Estéreo', length: '10FT (3.05M)', connector: 'XLR + XLR', price: 'R$ 38.94', color: 'Preto' },
    { code: 'MC15XB', name: 'Cabo Balanceado 15FT (4.57M) - XLR + XLR Classic Series', line: 'Classic', subtype: 'Estéreo', length: '15FT (4.57M)', connector: 'XLR + XLR', price: 'R$ 45.30', color: 'Preto' },
    { code: 'MC20XB', name: 'Cabo Balanceado 20FT (6.10M) - XLR + XLR Classic Series', line: 'Classic', subtype: 'Estéreo', length: '20FT (6.10M)', connector: 'XLR + XLR', price: 'R$ 54.20', color: 'Preto' },
    { code: 'MC25XB', name: 'Cabo Balanceado 25FT (7.62M) - XLR + XLR Classic Series', line: 'Classic', subtype: 'Estéreo', length: '25FT (7.62M)', connector: 'XLR + XLR', price: 'R$ 61.87', color: 'Preto' },
    { code: 'MC30XB', name: 'Cabo Balanceado 30FT (9.15M) - XLR + XLR Classic Series', line: 'Classic', subtype: 'Estéreo', length: '30FT (9.15M)', connector: 'XLR + XLR', price: 'R$ 70.20', color: 'Preto' },
    // Linha Cacau Santos Signature
    { code: 'CS10LB', name: 'Cabo Instrumento Cacau Santos Signature 10FT/3,05mts Reto/90º', line: 'Cacau Santos Signature', subtype: 'Instrumento', length: '10FT (3.05M)', connector: 'P10 + P10 / 90°', price: 'R$ 91.50', color: 'Preto' },
    { code: 'CS15LB', name: 'Cabo Instrumento Cacau Santos Signature 15FT/4,57mts Reto/90º', line: 'Cacau Santos Signature', subtype: 'Instrumento', length: '15FT (4.57M)', connector: 'P10 + P10 / 90°', price: 'R$ 75.53', color: 'Preto' },
    // Linha Iron Flex Mono
    { code: 'IF10B', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 39.76', color: 'Preto' },
    { code: 'IF15B', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 53.52', color: 'Preto' },
    { code: 'IF20B', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 70.32', color: 'Preto' },
    { code: 'IF25B', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 78.79', color: 'Preto' },
    { code: 'IF30B', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10', price: 'R$ 91.74', color: 'Preto' },
    { code: 'IF10LB', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 90° Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10 90°', price: 'R$ 39.76', color: 'Preto' },
    { code: 'IF15LB', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 90° Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10 90°', price: 'R$ 53.52', color: 'Preto' },
    { code: 'IF20LB', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 90° Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10 90°', price: 'R$ 70.32', color: 'Preto' },
    { code: 'IF25LB', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 90° Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10 90°', price: 'R$ 78.79', color: 'Preto' },
    { code: 'IF30LB', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 90° Ironflex Series', line: 'Iron Flex', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10 90°', price: 'R$ 91.74', color: 'Preto' },
    // Linha Iron Flex Textil
    { code: 'IF10TX', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 48.62', color: 'Textil' },
    { code: 'IF15TX', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 64.22', color: 'Textil' },
    { code: 'IF20TX', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 78.88', color: 'Textil' },
    { code: 'IF25TX', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 91.41', color: 'Textil' },
    { code: 'IF30TX', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10', price: 'R$ 107.04', color: 'Textil' },
    { code: 'IF10LTX', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 90° Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10 90°', price: 'R$ 48.62', color: 'Textil' },
    { code: 'IF15LTX', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 90° Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10 90°', price: 'R$ 64.22', color: 'Textil' },
    { code: 'IF20LTX', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 90° Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10 90°', price: 'R$ 78.88', color: 'Textil' },
    { code: 'IF25LTX', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 90° Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10 90°', price: 'R$ 91.41', color: 'Textil' },
    { code: 'IF30LTX', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 90° Ironflex Series Textil', line: 'Iron Flex Textil', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10 90°', price: 'R$ 107.04', color: 'Textil' },
    // Linha Iron Flex Tarja (Coloridos)
    { code: 'IF10AZT', name: 'Cabo Instrumento 10FT P10 + P10 Ironflex Tarja AZT', line: 'Iron Flex Tarja', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 39.76', color: 'Azul Turquesa' },
    { code: 'IF15RO', name: 'Cabo Instrumento 15FT P10 + P10 Ironflex Tarja RO', line: 'Iron Flex Tarja', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 53.52', color: 'Vermelho' },
    { code: 'IF20LA', name: 'Cabo Instrumento 20FT P10 + P10 Ironflex Tarja LA', line: 'Iron Flex Tarja', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 70.32', color: 'Laranja' },
    { code: 'IF25VM', name: 'Cabo Instrumento 25FT P10 + P10 Ironflex Tarja VM', line: 'Iron Flex Tarja', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 78.80', color: 'Verde' },
    { code: 'IF30RX', name: 'Cabo Instrumento 30FT P10 + P10 Ironflex Tarja RX', line: 'Iron Flex Tarja', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10', price: 'R$ 91.74', color: 'Roxo' },
    { code: 'IF10VE', name: 'Cabo Instrumento 10FT P10 + P10 Ironflex Tarja VE', line: 'Iron Flex Tarja', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 39.76', color: 'Verde Escuro' },
    // Linha Vintage Espiral
    { code: 'ESP30LB', name: 'Cabo Instrumento 30FT (9.10M) P10 + P10 90° Espiral Branco', line: 'Vintage Espiral', subtype: 'Mono', length: '30FT (9.10M)', connector: 'P10 + P10 90°', price: 'R$ 139.00', color: 'Branco' },
    { code: 'ESP30LR', name: 'Cabo Instrumento 30FT (9.10M) P10 + P10 90° Espiral Vermelho', line: 'Vintage Espiral', subtype: 'Mono', length: '30FT (9.10M)', connector: 'P10 + P10 90°', price: 'R$ 139.00', color: 'Vermelho' },
    { code: 'ESP30LBK', name: 'Cabo Instrumento 30FT (9.10M) P10 + P10 90° Espiral Preto', line: 'Vintage Espiral', subtype: 'Mono', length: '30FT (9.10M)', connector: 'P10 + P10 90°', price: 'R$ 139.00', color: 'Preto' },
    { code: 'ESP30LAZ', name: 'Cabo Instrumento 30FT (9.10M) P10 + P10 90° Espiral Azul', line: 'Vintage Espiral', subtype: 'Mono', length: '30FT (9.10M)', connector: 'P10 + P10 90°', price: 'R$ 139.00', color: 'Azul' },
    { code: 'ESP30LBG', name: 'Cabo Instrumento 30FT (9.10M) P10 + P10 90° Espiral Bege', line: 'Vintage Espiral', subtype: 'Mono', length: '30FT (9.10M)', connector: 'P10 + P10 90°', price: 'R$ 139.00', color: 'Bege' },
    // Linha Acústicas
    { code: 'AS10B', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 Acoustic (Cor Coca)', line: 'Acoustic', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 70.51', color: 'Coca' },
    { code: 'AS15B', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 Acoustic (Cor Coca)', line: 'Acoustic', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 88.64', color: 'Coca' },
    { code: 'AS20B', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 Acoustic (Cor Coca)', line: 'Acoustic', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 106.78', color: 'Coca' },
    { code: 'AS25B', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 Acoustic (Cor Coca)', line: 'Acoustic', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 124.90', color: 'Coca' },
    { code: 'AS30B', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 Acoustic (Cor Coca)', line: 'Acoustic', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10', price: 'R$ 143.04', color: 'Coca' },
    { code: 'AS10LB', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 90° Acoustic', line: 'Acoustic', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10 90°', price: 'R$ 70.51', color: 'Coca' },
    { code: 'AS15LB', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 90° Acoustic', line: 'Acoustic', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10 90°', price: 'R$ 88.64', color: 'Coca' },
    { code: 'AS20LB', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 90° Acoustic', line: 'Acoustic', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10 90°', price: 'R$ 106.78', color: 'Coca' },
    { code: 'AS25LB', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 90° Acoustic', line: 'Acoustic', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10 90°', price: 'R$ 124.90', color: 'Coca' },
    { code: 'AS30LB', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 90° Acoustic', line: 'Acoustic', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10 90°', price: 'R$ 143.04', color: 'Coca' },
    { code: 'AS10TX', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 80.18', color: 'Textil' },
    { code: 'AS15TX', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 64.22', color: 'Textil' },
    { code: 'AS20TX', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 78.88', color: 'Textil' },
    { code: 'AS25TX', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 91.41', color: 'Textil' },
    { code: 'AS30TX', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10', price: 'R$ 107.04', color: 'Textil' },
    { code: 'AS10LTX', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 90° Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10 90°', price: 'R$ 80.18', color: 'Textil' },
    { code: 'AS15LTX', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 90° Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10 90°', price: 'R$ 64.22', color: 'Textil' },
    { code: 'AS20LTX', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 90° Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10 90°', price: 'R$ 78.88', color: 'Textil' },
    { code: 'AS25LTX', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 90° Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10 90°', price: 'R$ 91.41', color: 'Textil' },
    { code: 'AS30LTX', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 90° Acoustic Têxtil', line: 'Acoustic', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10 90°', price: 'R$ 107.04', color: 'Textil' },
    // Linha Keyboard
    { code: 'KBD07B', name: 'Cabo Instrumento 07FT (2.10M) 2P10 + 2P10 Keyboard Series', line: 'Keyboard', subtype: 'Mono', length: '07FT (2.10M)', connector: '2P10 + 2P10', price: 'R$ 117.74', color: 'Preto' },
    { code: 'KBD10B', name: 'Cabo Instrumento 10FT (3.05M) 2P10 + 2P10 Keyboard Series', line: 'Keyboard', subtype: 'Mono', length: '10FT (3.05M)', connector: '2P10 + 2P10', price: 'R$ 170.75', color: 'Preto' },
    { code: 'KBD15B', name: 'Cabo Instrumento 15FT (4.57M) 2P10 + 2P10 Keyboard Series', line: 'Keyboard', subtype: 'Mono', length: '15FT (4.57M)', connector: '2P10 + 2P10', price: 'R$ 215.57', color: 'Preto' },
    { code: 'KBD20B', name: 'Cabo Instrumento 20FT (6.10M) 2P10 + 2P10 Keyboard Series', line: 'Keyboard', subtype: 'Mono', length: '20FT (6.10M)', connector: '2P10 + 2P10', price: 'R$ 262.94', color: 'Preto' },
    { code: 'KBD25B', name: 'Cabo Instrumento 25FT (7.62M) 2P10 + 2P10 Keyboard Series', line: 'Keyboard', subtype: 'Mono', length: '25FT (7.62M)', connector: '2P10 + 2P10', price: 'R$ 310.07', color: 'Preto' },
    { code: 'KBD30B', name: 'Cabo Instrumento 30FT (9.15M) 2P10 + 2P10 Keyboard Series', line: 'Keyboard', subtype: 'Mono', length: '30FT (9.15M)', connector: '2P10 + 2P10', price: 'R$ 354.79', color: 'Preto' },
    // Linha King Line
    { code: 'KL10LB', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 King Line (ON/OFF)', line: 'King Line', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10', price: 'R$ 129.09', color: 'Preto' },
    { code: 'KL15LB', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 King Line (ON/OFF)', line: 'King Line', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10', price: 'R$ 153.89', color: 'Preto' },
    { code: 'KL20LB', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 King Line (ON/OFF)', line: 'King Line', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10', price: 'R$ 178.72', color: 'Preto' },
    { code: 'KL25LB', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 King Line (ON/OFF)', line: 'King Line', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10', price: 'R$ 203.55', color: 'Preto' },
    // Linha Bass Jumbo
    { code: 'KBJ02LB', name: 'Cabo Instrumento 6.5FT (2.00M) P10 + P10 90° Bass Jumbo 1.50mm²', line: 'Bass Jumbo', subtype: 'Mono', length: '06.5FT (2.00M)', connector: 'P10 + P10 90°', price: 'R$ 87.98', color: 'Preto' },
    { code: 'KBJ10LB', name: 'Cabo Instrumento 10FT (3.05M) P10 + P10 90° Bass Jumbo 1.50mm²', line: 'Bass Jumbo', subtype: 'Mono', length: '10FT (3.05M)', connector: 'P10 + P10 90°', price: 'R$ 98.58', color: 'Preto' },
    { code: 'KBJ15LB', name: 'Cabo Instrumento 15FT (4.57M) P10 + P10 90° Bass Jumbo 1.50mm²', line: 'Bass Jumbo', subtype: 'Mono', length: '15FT (4.57M)', connector: 'P10 + P10 90°', price: 'R$ 142.00', color: 'Preto' },
    { code: 'KBJ20LB', name: 'Cabo Instrumento 20FT (6.10M) P10 + P10 90° Bass Jumbo 1.50mm²', line: 'Bass Jumbo', subtype: 'Mono', length: '20FT (6.10M)', connector: 'P10 + P10 90°', price: 'R$ 174.10', color: 'Preto' },
    { code: 'KBJ25LB', name: 'Cabo Instrumento 25FT (7.62M) P10 + P10 90° Bass Jumbo 1.50mm²', line: 'Bass Jumbo', subtype: 'Mono', length: '25FT (7.62M)', connector: 'P10 + P10 90°', price: 'R$ 205.95', color: 'Preto' },
    { code: 'KBJ30LB', name: 'Cabo Instrumento 30FT (9.15M) P10 + P10 90° Bass Jumbo 1.50mm²', line: 'Bass Jumbo', subtype: 'Mono', length: '30FT (9.15M)', connector: 'P10 + P10 90°', price: 'R$ 238.05', color: 'Preto' },
    // Linha Pedal Series
    { code: 'EPR', name: 'Emenda Pedal Reto + Reto', line: 'Pedal Series', subtype: 'Pedal', length: '15CM', connector: 'P10 + P10', price: 'R$ 21.16', color: 'Preto' },
    { code: 'PIM15B', name: 'Cabo Pedal 15CM 0,30mm² 90º P10 + P10 90º', line: 'Pedal Series', subtype: 'Pedal', length: '15CM', connector: 'P10 90º + P10 90º', price: 'R$ 21.16', color: 'Preto' },
    { code: 'PIM25B', name: 'Cabo Pedal 25CM 0,30mm² P10 90º + P10 90º', line: 'Pedal Series', subtype: 'Pedal', length: '25CM', connector: 'P10 90º + P10 90º', price: 'R$ 22.66', color: 'Preto' },
    { code: 'PIM45B', name: 'Cabo Pedal 45CM 0,30mm² P10 90º + P10 90º', line: 'Pedal Series', subtype: 'Pedal', length: '45CM', connector: 'P10 90º + P10 90º', price: 'R$ 26.19', color: 'Preto' },
    { code: 'PIM15TX', name: 'Cabo Pedal Textil 15CM 0,30mm² P10 90º + P10 90º', line: 'Pedal Series', subtype: 'Pedal', length: '15CM', connector: 'P10 90º + P10 90º', price: 'R$ 27.20', color: 'Textil' },
    { code: 'PIM25TX', name: 'Cabo Pedal Textil 25CM 0,30mm² P10 90º + P10 90º', line: 'Pedal Series', subtype: 'Pedal', length: '25CM', connector: 'P10 90º + P10 90º', price: 'R$ 28.21', color: 'Textil' },
    { code: 'PIM45TX', name: 'Cabo Pedal Textil 45CM 0,30mm² P10 90º + P10 90º', line: 'Pedal Series', subtype: 'Pedal', length: '45CM', connector: 'P10 90º + P10 90º', price: 'R$ 29.84', color: 'Textil' },
    // Linha Speaker
    { code: 'PPC101', name: 'Cabo Speaker P10 + P10 - 1.0mm 03FT (0.91M)', line: 'Speaker', subtype: 'Speaker', length: '03FT (0.91M)', connector: 'P10 + P10', price: 'R$ 31.52', color: 'Preto' },
    { code: 'PPC103', name: 'Cabo Speaker P10 + P10 - 1.0mm 9.84FT (3.00M)', line: 'Speaker', subtype: 'Speaker', length: '9.84FT (3.00M)', connector: 'P10 + P10', price: 'R$ 38.05', color: 'Preto' },
    { code: 'PPC105', name: 'Cabo Speaker P10 + P10 - 1.0mm 16.40FT (5.00M)', line: 'Speaker', subtype: 'Speaker', length: '16.40FT (5.00M)', connector: 'P10 + P10', price: 'R$ 49.48', color: 'Preto' },
    { code: 'PPC155', name: 'Cabo Speaker P10 + P10 - 1.5mm 16.40FT (5.00M)', line: 'Speaker', subtype: 'Speaker', length: '16.40FT (5.00M)', connector: 'P10 + P10', price: 'R$ 60.62', color: 'Preto' },
    { code: 'PPC1510', name: 'Cabo Speaker P10 + P10 - 1.5mm 32.80FT/10M', line: 'Speaker', subtype: 'Speaker', length: '32.80FT/10M', connector: 'P10 + P10', price: 'R$ 101.03', color: 'Preto' },
    { code: 'PPC1515', name: 'Cabo Speaker P10 + P10 - 1.5mm 49.21FT/15M', line: 'Speaker', subtype: 'Speaker', length: '49.21FT/15M', connector: 'P10 + P10', price: 'R$ 141.43', color: 'Preto' },
    { code: 'PPC2510', name: 'Cabo Speaker P10 + P10 - 2.5mm 32.80FT/10M', line: 'Speaker', subtype: 'Speaker', length: '32.80FT/10M', connector: 'P10 + P10', price: 'R$ 141.96', color: 'Preto' },
    { code: 'PPC2515', name: 'Cabo Speaker P10 + P10 - 2.5mm 49.21FT/15M', line: 'Speaker', subtype: 'Speaker', length: '49.21FT/15M', connector: 'P10 + P10', price: 'R$ 202.81', color: 'Preto' },
    { code: 'PSC101', name: 'Cabo Speaker P10 + Speakon 1.0mm 03FT', line: 'Speaker', subtype: 'Speaker', length: '03FT', connector: 'P10 + Speakon', price: 'R$ 39.66', color: 'Preto' },
    { code: 'PSC2515', name: 'Cabo Speaker P10 + Speakon 2.5mm 49.21FT', line: 'Speaker', subtype: 'Speaker', length: '49.21FT', connector: 'P10 + Speakon', price: 'R$ 210.60', color: 'Preto' },
    { code: 'SSC101', name: 'Cabo Speaker Speakon + Speakon 1.0mm 03FT', line: 'Speaker', subtype: 'Speaker', length: '03FT', connector: 'Speakon + Speakon', price: 'R$ 47.85', color: 'Preto' },
    { code: 'SSC2515', name: 'Cabo Speaker Speakon + Speakon 2.5mm 49.21FT', line: 'Speaker', subtype: 'Speaker', length: '49.21FT', connector: 'Speakon + Speakon', price: 'R$ 219.29', color: 'Preto' },
    // Linha Extender
    { code: 'EX10B', name: 'Cabo Extensor de Fone 10FT/3.05M 1P10ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '10FT (3.05M)', connector: 'P10ST + P2', price: 'R$ 51.06', color: 'Preto' },
    { code: 'EX15B', name: 'Cabo Extensor de Fone 15FT/4.57M 1P10ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '15FT (4.57M)', connector: 'P10ST + P2', price: 'R$ 69.23', color: 'Preto' },
    { code: 'EX20B', name: 'Cabo Extensor de Fone 20FT/6.10M 1P10ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '20FT (6.10M)', connector: 'P10ST + P2', price: 'R$ 88.07', color: 'Preto' },
    { code: 'EX25B', name: 'Cabo Extensor de Fone 25FT/7.62M 1P10ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '25FT (7.62M)', connector: 'P10ST + P2', price: 'R$ 99.64', color: 'Preto' },
    { code: 'EX30B', name: 'Cabo Extensor de Fone 30FT/9.15M 1P10ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '30FT (9.15M)', connector: 'P10ST + P2', price: 'R$ 114.86', color: 'Preto' },
    { code: 'EX10PB', name: 'Cabo Extensor de Fone 10FT/3.05M 1P2ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '10FT (3.05M)', connector: 'P2ST + P2', price: 'R$ 55.89', color: 'Preto' },
    { code: 'EX15PB', name: 'Cabo Extensor de Fone 15FT/4.57M 1P2ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '15FT (4.57M)', connector: 'P2ST + P2', price: 'R$ 74.30', color: 'Preto' },
    { code: 'EX20PB', name: 'Cabo Extensor de Fone 20FT/6.10M 1P2ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '20FT (6.10M)', connector: 'P2ST + P2', price: 'R$ 93.64', color: 'Preto' },
    { code: 'EX25PB', name: 'Cabo Extensor de Fone 25FT/7.62M 1P2ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '25FT (7.62M)', connector: 'P2ST + P2', price: 'R$ 104.09', color: 'Preto' },
    { code: 'EX30PB', name: 'Cabo Extensor de Fone 30FT/9.15M 1P2ST + 1P2 Fêmea', line: 'Extender', subtype: 'Extensor', length: '30FT (9.15M)', connector: 'P2ST + P2', price: 'R$ 123.47', color: 'Preto' },
    { code: 'EX10XB', name: 'Cabo Extensor 1XLR Feminino + 1P2 Feminino', line: 'Extender', subtype: 'Extensor', length: '10FT (3.05M)', connector: 'XLR + P2', price: 'R$ 52.70', color: 'Preto' },
    { code: 'EX30XB', name: 'Cabo Extensor 1XLR Feminino + 1P2 Feminino', line: 'Extender', subtype: 'Extensor', length: '30FT (9.15M)', connector: 'XLR + P2', price: 'R$ 116.07', color: 'Preto' },
    // Linha DJ Series
    { code: 'SG01N', name: 'Cabo de Sinal 1.06M 2RCA + 2P10 Mono', line: 'DJ Series', subtype: 'Sinal', length: '1.06M', connector: '2RCA + 2P10', price: 'R$ 44.13', color: 'Preto' },
    { code: 'SG04N', name: 'Cabo de Sinal 1.52M 2RCA + 1P10ST', line: 'DJ Series', subtype: 'Sinal', length: '1.52M', connector: '2RCA + P10ST', price: 'R$ 37.27', color: 'Preto' },
    { code: 'SG05N', name: 'Cabo de Sinal 1.52M 1P10 Mono + 1P2ST', line: 'DJ Series', subtype: 'Sinal', length: '1.52M', connector: 'P10 + P2ST', price: 'R$ 28.00', color: 'Preto' },
    { code: 'SG08N', name: 'Cabo de Sinal 1.52M 1P2ST + 1P2ST', line: 'DJ Series', subtype: 'Sinal', length: '1.52M', connector: 'P2ST + P2ST', price: 'R$ 30.21', color: 'Preto' },
    { code: 'SG19N', name: 'Cabo XLR Macho + P10 Classic 0.91M', line: 'DJ Series', subtype: 'Sinal', length: '0.91M', connector: 'XLR + P10', price: 'R$ 27.60', color: 'Preto' },
    { code: 'SG19N/30', name: 'Cabo XLR Macho + P10 Classic 9.15M', line: 'DJ Series', subtype: 'Sinal', length: '9.15M', connector: 'XLR + P10', price: 'R$ 82.59', color: 'Preto' },
    { code: 'SG20N', name: 'Cabo XLR Macho + P10 Max 0.91M', line: 'DJ Series', subtype: 'Sinal', length: '0.91M', connector: 'XLR + P10', price: 'R$ 28.77', color: 'Preto' },
    { code: 'SG20N/30', name: 'Cabo XLR Macho + P10 Max 9.15M', line: 'DJ Series', subtype: 'Sinal', length: '9.15M', connector: 'XLR + P10', price: 'R$ 89.22', color: 'Preto' },
    // Linha Caixa Multicanal
    { code: 'CM08', name: 'Caixa Multicanal 08 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 60.54', color: 'Azul' },
    { code: 'CM12', name: 'Caixa Multicanal 12 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 75.65', color: 'Azul' },
    { code: 'CM16', name: 'Caixa Multicanal 16 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 83.27', color: 'Azul' },
    { code: 'CM20', name: 'Caixa Multicanal 20 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 89.07', color: 'Azul' },
    { code: 'CM28', name: 'Caixa Multicanal 28 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 118.48', color: 'Azul' },
    { code: 'CM36', name: 'Caixa Multicanal 36 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 135.07', color: 'Azul' },
    { code: 'CM48', name: 'Caixa Multicanal 48 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 136.43', color: 'Azul' },
    { code: 'CM56', name: 'Caixa Multicanal 56 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 155.87', color: 'Azul' },
    { code: 'CM64', name: 'Caixa Multicanal 64 Vias', line: 'Caixa Multicanal', subtype: 'Medusa', length: '-', connector: '-', price: 'R$ 164.15', color: 'Azul' },
    // Linha Fio Multicanal
    { code: 'MEDS6', name: 'Multicabo de reposição 6 vias', line: 'Fio Multicanal', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 13.10', color: 'Azul' },
    { code: 'MEDS48', name: 'Multicabo de reposição 48 vias', line: 'Fio Multicanal', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 83.85', color: 'Azul' },
    // Linha Fios Diversos
    { code: 'FK075', name: 'Mono 1x0.75mm² King Line', line: 'Fios Diversos', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 8.58', color: 'Preto' },
    { code: 'FI020C', name: 'Mono 1x0.20mm² Classic', line: 'Fios Diversos', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 2.63', color: 'Preto' },
    { code: 'FI030MP', name: 'Mono 1x0.30mm² Max', line: 'Fios Diversos', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 3.68', color: 'Preto' },
    { code: 'FM030MT', name: 'Estéreo 2x0.30mm² Max Trançado', line: 'Fios Diversos', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 4.90', color: 'Preto' },
    { code: 'FSP100', name: 'Fio de Speaker 1mm²', line: 'Fios Diversos', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 4.08', color: 'Preto' },
    { code: 'FSP250', name: 'Fio de Speaker 2.5mm²', line: 'Fios Diversos', subtype: 'Fio', length: 'Metro', connector: 'Sem conector', price: 'R$ 8.66', color: 'Preto' },
    // Linha Conectores Diversos
    { code: 'P10C', name: 'Plug P10 Classic', line: 'Conectores Diversos', subtype: 'Plug', length: '-', connector: 'P10', price: 'R$ 7.30', color: 'Prata' },
    { code: 'P2ST', name: 'Plug P2 Stereo', line: 'Conectores Diversos', subtype: 'Plug', length: '-', connector: 'P2', price: 'R$ 10.50', color: 'Prata' },
    { code: 'PXMC', name: 'Conector Cannon XLR Macho', line: 'Conectores Diversos', subtype: 'Plug', length: '-', connector: 'XLR', price: 'R$ 7.51', color: 'Prata' },
    { code: 'PXFC', name: 'Conector Cannon XLR Fêmea', line: 'Conectores Diversos', subtype: 'Plug', length: '-', connector: 'XLR', price: 'R$ 7.51', color: 'Prata' },
    { code: 'ESP', name: 'Espuma para microfone', line: 'Conectores Diversos', subtype: 'Acessório', length: '-', connector: 'Nenhum', price: 'R$ 3.20', color: 'Preto' },
    // Linha Correias
    { code: 'ECO CORREIA', name: 'Correia produzida em couro ecológico', line: 'Correias', subtype: 'Correia', length: '-', connector: 'Nenhum', price: 'R$ 29.46', color: 'Preto' }
];

const productImageMap = {
    'IC10B': '../img/products/CLASSIC SERIES/IC10B.jpg',
    'MC03XB': '../img/products/CLASSIC SERIES/MC03XB.jpg',
    'MC10PB': '../img/products/CLASSIC SERIES/MC10PB.jpg',
    'MC10XB': '../img/products/CLASSIC SERIES/MC10XB.jpg',
    'AS10LB': '../img/products/ACOUSTIC SERIES/AS10LB.jpg',
    'AS10LTX': '../img/products/ACOUSTIC SERIES/AS10LTX.jpg',
    'IF10LB': '../img/products/IRONFLEX SERIES/IF10LB.jpg',
    'IF10LAZT': '../img/products/IRONFLEX SERIES/IF10LAZT.jpg',
    'IF10LLA': '../img/products/IRONFLEX SERIES/IF10LLA.jpg',
    'IF10LRO': '../img/products/IRONFLEX SERIES/IF10LRO.jpg',
    'IF10LRX': '../img/products/IRONFLEX SERIES/IF10LRX.jpg',
    'IF10LTX': '../img/products/IRONFLEX SERIES/IF10LTX.jpg',
    'IF10LVD': '../img/products/IRONFLEX SERIES/IF10LVD.jpg',
    'IF10LVM': '../img/products/IRONFLEX SERIES/IF10LVM.jpg',
    'KL10LB': '../img/products/KING SERIES/KL10LB.jpg',
    'SG01N': '../img/products/DJ SERIES/SG01N.jpg',
    'SG02N': '../img/products/DJ SERIES/SG02N.jpg',
    'SG04N': '../img/products/DJ SERIES/SG04N.jpg',
    'SG05N': '../img/products/DJ SERIES/SG05N.jpg',
    'SG06N': '../img/products/DJ SERIES/SG06N.jpg',
    'SG07N': '../img/products/DJ SERIES/SG07N.jpg',
    'SG08N': '../img/products/DJ SERIES/SG08N.jpg',
    'SG09N': '../img/products/DJ SERIES/SG09N.jpg',
    'SG12N': '../img/products/DJ SERIES/SG12N.jpg',
    'SG13N': '../img/products/DJ SERIES/SG13N.jpg',
    'SG14N': '../img/products/DJ SERIES/SG14N.jpg',
    'SG15N': '../img/products/DJ SERIES/SG15N.jpg',
    'SG16N': '../img/products/DJ SERIES/SG16N.jpg',
    'SG17N': '../img/products/DJ SERIES/SG17N.jpg',
    'SG21N': '../img/products/DJ SERIES/SG21N.jpg',
    'SG22N': '../img/products/DJ SERIES/SG22N.jpg',
    'SG23N': '../img/products/DJ SERIES/SG23N.jpg',
    'SG25N': '../img/products/DJ SERIES/SG25N.jpg',
    'EX10B': '../img/products/EXTENDER SERIES/EX10B.jpg',
    'EX10XB': '../img/products/EXTENDER SERIES/EX10XB.jpg',
    'PIM15B': '../img/products/PEDAL SERIES/PIM15B.jpg',
    'PIM15LTX': '../img/products/PEDAL SERIES/PIM15LTX.jpg',
    'PIM25B': '../img/products/PEDAL SERIES/PIM25B.jpg',
    'PIM45B': '../img/products/PEDAL SERIES/PIM45B.jpg',
    'SSC103': '../img/products/SPEAKER SERIES/SSC103.jpg',
    'FMC20': '../img/products/CABOS EM METRO/FIO MULTICANAL - MEDUSA/FMC20.jpg',
    'FMC20P': '../img/products/CABOS EM METRO/FIO MULTICANAL - MEDUSA/FMC20P.jpg',
    'FI030BE': '../img/products/CABOS EM METRO/FIO INSTRUMENTO/FI030BE.jpg',
    'FPH030M': '../img/products/CABOS EM METRO/FIO PHILIPS/FPH030M.JPG',
    'FM030BF+T': '../img/products/CABOS EM METRO/FIO DE MICROFONE/FM030BF+T.jpg',
    'CEF4150': '../img/products/CABOS EM METRO/CABO COMANDO EXTRA FLEXIVEL/CEF4150.jpg',
    'ESP30LAZ': '../img/products/VINTAGE SERIES/ESP30LAZ.jpg',
    'ESP30LAZB': '../img/products/VINTAGE SERIES/ESP30LAZB.jpg',
    'ESP30LAZE': '../img/products/VINTAGE SERIES/ESP30LAZE.jpg',
    'ESP30LAZP': '../img/products/VINTAGE SERIES/ESP30LAZP.jpg',
    'ESP30LAZT': '../img/products/VINTAGE SERIES/ESP30LAZT.jpg',
    'ESP30LB': '../img/products/VINTAGE SERIES/ESP30LB.jpg',
    'ESP30LBG': '../img/products/VINTAGE SERIES/ESP30LBG.jpg',
    'ESP30LPT': '../img/products/VINTAGE SERIES/ESP30LPT.jpg',
    'ESP30LRX': '../img/products/VINTAGE SERIES/ESP30LRX.jpg',
    'ESP30LVM': '../img/products/VINTAGE SERIES/ESP30LVM.jpg',
    'IC10B': '../img/products/CLASSIC SERIES/IC10B.jpg'
};

const lineImageMap = {
    'Classic': '../img/products/CLASSIC SERIES/IC10B.jpg',
    'Cacau Santos Signature': '../img/products/CLASSIC SERIES/IC10B.jpg',
    'Iron Flex': '../img/products/IRONFLEX SERIES/IF10LB.jpg',
    'Iron Flex Textil': '../img/products/IRONFLEX SERIES/IF10LTX.jpg',
    'Iron Flex Tarja': '../img/products/IRONFLEX SERIES/IF10LTX.jpg',
    'Vintage Espiral': '../img/products/VINTAGE SERIES/ESP30LB.jpg',
    'Acoustic': '../img/products/ACOUSTIC SERIES/AS10LB.jpg',
    'Keyboard': '../img/products/KEYBOARD SERIES/Keyboard Series Teclado.jpeg',
    'King Line': '../img/products/KING SERIES/KL10LB.jpg',
    'Bass Jumbo': '../img/products/BASS JUMBO/KING BASS JUMBO.jpg',
    'Pedal Series': '../img/products/PEDAL SERIES/PIM15B.jpg',
    'Speaker': '../img/products/SPEAKER SERIES/SSC103.jpg',
    'Extender': '../img/products/EXTENDER SERIES/Extender.jpeg',
    'DJ Series': '../img/products/DJ SERIES/SG01N.jpg'
};

/**
 * Returns a product image URL if available, otherwise falls back to a line image or a generated SVG.
 */
function getProductImageUrl(product) {
    if (!product) return '';
    const imagePath = productImageMap[product.code] || lineImageMap[product.line];
    if (imagePath) {
        return encodeURI(imagePath);
    }
    const lineColors = {
        'Classic': '#00b4eb',
        'Cacau Santos Signature': '#ffb703',
        'Iron Flex': '#00d26a',
        'Iron Flex Textil': '#a855f7',
        'Iron Flex Tarja': '#f43f5e',
        'Vintage Espiral': '#ec4899',
        'Acoustic': '#eab308',
        'Keyboard': '#3b82f6',
        'King Line': '#e11d48',
        'Bass Jumbo': '#6366f1',
        'Pedal Series': '#10b981',
        'Speaker': '#f97316',
        'Extender': '#8b5cf6',
        'DJ Series': '#06b6d4',
        'Caixa Multicanal': '#3b82f6',
        'Fio Multicanal': '#0284c7',
        'Fios Diversos': '#64748b',
        'Conectores Diversos': '#94a3b8',
        'Correias': '#d97706'
    };

    const accent = lineColors[product.line] || '#00b4eb';
    const title = (product.line || 'MAC CABOS').toUpperCase();
    const sub = (product.subtype || product.code || '').toUpperCase();
    const colorTag = product.color ? product.color.toUpperCase() : '';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260">
        <rect width="100%" height="100%" fill="#080e18" rx="8"/>
        <circle cx="200" cy="110" r="85" fill="${accent}" opacity="0.08"/>
        <path d="M 90,130 C 140,70 260,190 310,130" stroke="${accent}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.85"/>
        <circle cx="90" cy="130" r="11" fill="#e2e8f0" stroke="${accent}" stroke-width="3"/>
        <circle cx="310" cy="130" r="11" fill="#e2e8f0" stroke="${accent}" stroke-width="3"/>
        <rect x="140" y="30" width="120" height="22" fill="${accent}" opacity="0.2" rx="11"/>
        <text x="200" y="45" font-family="Oswald, sans-serif" font-size="12" font-weight="bold" fill="${accent}" text-anchor="middle" letter-spacing="1.5">${title}</text>
        <text x="200" y="210" font-family="Roboto, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">${product.code}</text>
        <text x="200" y="230" font-family="Roboto, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">${sub} • ${colorTag}</text>
    </svg>`;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Returns a product description appropriate for its line and specifications.
 */
function getProductDescription(product) {
    if (!product) return '';
    return `O item ${product.name} faz parte da renomada linha ${product.line} da MAC Cabos. Construído com conectores ${product.connector}, alta blindagem contra ruídos e excelente flexibilidade mecânica. Projetado para suportar o uso intenso em palco, estúdio e ensaios com transmissão limpa de sinal.`;
}

/**
 * Find product by code.
 */
function getProductByCode(code) {
    if (!code) return null;
    return products.find(p => p.code.toLowerCase() === code.trim().toLowerCase()) || null;
}

/**
 * Get related products (same line or random fallback).
 */
function getRelatedProducts(product, limit = 3) {
    if (!product) return products.slice(0, limit);
    const sameLine = products.filter(p => p.line === product.line && p.code !== product.code);
    if (sameLine.length >= limit) return sameLine.slice(0, limit);
    const others = products.filter(p => p.code !== product.code && !sameLine.includes(p));
    return [...sameLine, ...others].slice(0, limit);
}
