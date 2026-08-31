// ============================================================
// Theme Toggle – Dark ↔ Light
// Persists choice via localStorage so it survives page reloads.
// ============================================================
(function () {
    const STORAGE_KEY = 'mac-cabos-theme';
    const LIGHT = 'light';
    const DARK  = 'dark';

    // Resolve saved preference (default = dark)
    function getSavedTheme() {
        try { return localStorage.getItem(STORAGE_KEY) || DARK; }
        catch { return DARK; }
    }

    function applyTheme(theme) {
        if (theme === LIGHT) {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
        // Update button icon
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = theme === LIGHT
                    ? 'fas fa-moon'   // show moon icon when in light mode (click → go dark)
                    : 'fas fa-sun';   // show sun icon when in dark mode (click → go light)
            }
            btn.setAttribute('aria-label',
                theme === LIGHT ? 'Ativar modo escuro' : 'Ativar modo claro'
            );
        }
    }

    function toggleTheme() {
        const current = document.documentElement.classList.contains('light-theme') ? LIGHT : DARK;
        const next = current === LIGHT ? DARK : LIGHT;
        try { localStorage.setItem(STORAGE_KEY, next); } catch {}
        applyTheme(next);
    }

    // --- Initialise ---
    // Apply saved theme immediately (before paint) to avoid flash
    applyTheme(getSavedTheme());

    // Once DOM is ready, wire up the button and insert elements
    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('theme-toggle-btn');
        const header = document.querySelector('header');
        
        // Move theme toggle button to header and group it with the CTA button
        if (btn && header) {
            const ctaBtn = header.querySelector('.btn-outline');
            if (ctaBtn) {
                const actionsContainer = document.createElement('div');
                actionsContainer.className = 'header-actions';
                ctaBtn.parentNode.insertBefore(actionsContainer, ctaBtn);
                actionsContainer.appendChild(ctaBtn);
                actionsContainer.appendChild(btn);
            } else {
                header.appendChild(btn);
            }
        }
        
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }
        // Re-apply so the icon is correct after DOM load
        applyTheme(getSavedTheme());

        // Create and add floating WhatsApp button where the theme toggle was
        const waBtn = document.createElement('a');
        waBtn.id = 'floating-whatsapp-btn';
        waBtn.href = 'https://wa.me/5511977709800';
        waBtn.target = '_blank';
        waBtn.rel = 'noopener';
        waBtn.setAttribute('aria-label', 'Fale conosco no WhatsApp');
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(waBtn);
    });
})();
