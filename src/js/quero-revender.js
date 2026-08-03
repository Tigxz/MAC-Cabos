document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('revender-form');
    const feedback = document.querySelector('.form-feedback');

    if (!form || !feedback) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            nome: form.nome.value.trim(),
            email: form.email.value.trim(),
            telefone: form.telefone.value.trim(),
            motivo: form.motivo.value.trim(),
            mensagem: form.mensagem.value.trim(),
        };

        feedback.textContent = 'Enviando...';
        feedback.className = 'form-feedback sending';

        try {
            const endpoint = 'https://formsubmit.co/ajax/tiagobondezanbazani@gmail.com';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    nome: data.nome,
                    email: data.email,
                    telefone: data.telefone,
                    motivo: data.motivo,
                    mensagem: data.mensagem,
                }),
            });

            const result = await response.json();

            if (!response.ok || result.success === false) {
                throw new Error(result.message || `Erro ${response.status}`);
            }

            feedback.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
            feedback.className = 'form-feedback success';
            form.reset();
        } catch (error) {
            feedback.textContent = 'Não foi possível enviar a mensagem diretamente. Verifique a configuração do endpoint.';
            feedback.className = 'form-feedback error';
            console.error(error);
        }
    });
});
