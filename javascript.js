// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== BOTÕES DE INTERAÇÃO =====
    
    // 1. BOTÃO WHATSAPP - Contato direto
    const botaoWhatsApp = document.createElement('button');
    botaoWhatsApp.innerHTML = '<i class="fab fa-whatsapp"></i>';
    botaoWhatsApp.style.position = 'fixed';
    botaoWhatsApp.style.bottom = '20px';
    botaoWhatsApp.style.right = '20px';
    botaoWhatsApp.style.zIndex = '1000';
    botaoWhatsApp.style.padding = '15px 18px';
    botaoWhatsApp.style.border = 'none';
    botaoWhatsApp.style.borderRadius = '50%';
    botaoWhatsApp.style.background = '#25D366';
    botaoWhatsApp.style.color = 'white';
    botaoWhatsApp.style.cursor = 'pointer';
    botaoWhatsApp.style.fontSize = '24px';
    botaoWhatsApp.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.4)';
    botaoWhatsApp.style.transition = 'all 0.3s';
    botaoWhatsApp.style.animation = 'pulse 2s infinite';
    botaoWhatsApp.title = 'Enviar WhatsApp';
    
    botaoWhatsApp.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    botaoWhatsApp.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    botaoWhatsApp.addEventListener('click', function() {
        // Número fictício - substitua pelo seu número real
        window.open('https://wa.me/5511987654321?text=Olá%20Lucca,%20vi%20seu%20currículo%20e%20gostaria%20de%20conversar!', '_blank');
    });
    
    document.body.appendChild(botaoWhatsApp);

    // 2. BOTÃO CURRÍCULO PDF - Download
    const botaoPDF = document.createElement('button');
    botaoPDF.innerHTML = '<i class="fas fa-file-pdf"></i>';
    botaoPDF.style.position = 'fixed';
    botaoPDF.style.bottom = '90px';
    botaoPDF.style.right = '20px';
    botaoPDF.style.zIndex = '1000';
    botaoPDF.style.padding = '15px 18px';
    botaoPDF.style.border = 'none';
    botaoPDF.style.borderRadius = '50%';
    botaoPDF.style.background = '#dc3545';
    botaoPDF.style.color = 'white';
    botaoPDF.style.cursor = 'pointer';
    botaoPDF.style.fontSize = '24px';
    botaoPDF.style.boxShadow = '0 5px 15px rgba(220, 53, 69, 0.4)';
    botaoPDF.style.transition = 'all 0.3s';
    botaoPDF.title = 'Baixar Currículo PDF';
    
    botaoPDF.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    botaoPDF.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    botaoPDF.addEventListener('click', function() {
        // Simula download do currículo
        alert('📄 Gerando PDF do currículo... (Em breve disponível para download)');
        
        // Aqui você pode implementar a geração real do PDF com bibliotecas como jsPDF
        // Por enquanto, apenas uma simulação
        const link = document.createElement('a');
        link.href = '#'; // Substituir pelo link real do PDF
        link.download = 'Curriculo_Lucca_Birello.pdf';
        link.click();
    });
    
    document.body.appendChild(botaoPDF);

    // 3. BOTÃO COMPARTILHAR - Redes Sociais
    const botaoCompartilhar = document.createElement('button');
    botaoCompartilhar.innerHTML = '<i class="fas fa-share-alt"></i>';
    botaoCompartilhar.style.position = 'fixed';
    botaoCompartilhar.style.bottom = '160px';
    botaoCompartilhar.style.right = '20px';
    botaoCompartilhar.style.zIndex = '1000';
    botaoCompartilhar.style.padding = '15px 18px';
    botaoCompartilhar.style.border = 'none';
    botaoCompartilhar.style.borderRadius = '50%';
    botaoCompartilhar.style.background = '#0077b5';
    botaoCompartilhar.style.color = 'white';
    botaoCompartilhar.style.cursor = 'pointer';
    botaoCompartilhar.style.fontSize = '24px';
    botaoCompartilhar.style.boxShadow = '0 5px 15px rgba(0, 119, 181, 0.4)';
    botaoCompartilhar.style.transition = 'all 0.3s';
    botaoCompartilhar.title = 'Compartilhar';
    
    botaoCompartilhar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    botaoCompartilhar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Menu de compartilhamento
    let menuCompartilharAberto = false;
    const menuCompartilhar = document.createElement('div');
    menuCompartilhar.style.position = 'fixed';
    menuCompartilhar.style.bottom = '230px';
    menuCompartilhar.style.right = '20px';
    menuCompartilhar.style.zIndex = '1000';
    menuCompartilhar.style.display = 'none';
    menuCompartilhar.style.flexDirection = 'column';
    menuCompartilhar.style.gap = '10px';
    
    // Redes sociais
    const redes = [
        { icon: 'fab fa-linkedin', cor: '#0077b5', url: 'https://linkedin.com/in/luccabirello', nome: 'LinkedIn' },
        { icon: 'fab fa-instagram', cor: '#e4405f', url: 'https://instagram.com/luccabirello', nome: 'Instagram' },
        { icon: 'fab fa-github', cor: '#333', url: 'https://github.com/luccabirello', nome: 'GitHub' },
        { icon: 'fab fa-facebook', cor: '#1877f2', url: 'https://facebook.com/luccabirello', nome: 'Facebook' }
    ];
    
    redes.forEach(rede => {
        const btnRede = document.createElement('button');
        btnRede.innerHTML = `<i class="${rede.icon}"></i>`;
        btnRede.style.padding = '12px 15px';
        btnRede.style.border = 'none';
        btnRede.style.borderRadius = '50%';
        btnRede.style.background = rede.cor;
        btnRede.style.color = 'white';
        btnRede.style.cursor = 'pointer';
        btnRede.style.fontSize = '20px';
        btnRede.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        btnRede.style.transition = 'all 0.3s';
        btnRede.title = rede.nome;
        
        btnRede.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        btnRede.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        btnRede.addEventListener('click', function() {
            window.open(rede.url, '_blank');
        });
        
        menuCompartilhar.appendChild(btnRede);
    });
    
    document.body.appendChild(menuCompartilhar);
    
    botaoCompartilhar.addEventListener('click', function() {
        menuCompartilharAberto = !menuCompartilharAberto;
        menuCompartilhar.style.display = menuCompartilharAberto ? 'flex' : 'none';
    });
    
    document.body.appendChild(botaoCompartilhar);

    // 4. BOTÃO TEMA (Claro/Escuro) - Já existente mas ajustado
    const toggleTema = document.createElement('button');
    toggleTema.innerHTML = '🌓';
    toggleTema.style.position = 'fixed';
    toggleTema.style.bottom = '230px';
    toggleTema.style.right = '20px';
    toggleTema.style.zIndex = '1000';
    toggleTema.style.padding = '15px 18px';
    toggleTema.style.border = 'none';
    toggleTema.style.borderRadius = '50%';
    toggleTema.style.background = '#ff6b35';
    toggleTema.style.color = 'white';
    toggleTema.style.cursor = 'pointer';
    toggleTema.style.fontSize = '24px';
    toggleTema.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.4)';
    toggleTema.style.transition = 'all 0.3s';
    toggleTema.title = 'Alternar Tema';
    
    toggleTema.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    toggleTema.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    toggleTema.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            // Aplicar tema escuro
            document.querySelector('.container').style.background = '#2d2d2d';
            document.querySelector('.container').style.color = '#f5f5f5';
            document.querySelectorAll('section').forEach(s => s.style.borderBottom = '1px solid #444');
            document.querySelector('.footer').style.background = '#222';
            document.querySelector('.footer').style.color = '#aaa';
            document.querySelectorAll('h2').forEach(h => h.style.color = '#ff8c5a');
            document.querySelectorAll('.contato p, .resumo p, .exp-item ul li, .form-item p, .certificacoes ul li, .projetos ul li, .info-adicional ul li').forEach(el => el.style.color = '#ddd');
            this.innerHTML = '☀️';
        } else {
            // Reverter para tema claro
            document.querySelector('.container').style.background = 'white';
            document.querySelector('.container').style.color = '#333';
            document.querySelectorAll('section').forEach(s => s.style.borderBottom = '1px solid #eee');
            document.querySelector('.footer').style.background = '#f8f9fa';
            document.querySelector('.footer').style.color = '#666';
            document.querySelectorAll('h2').forEach(h => h.style.color = '#ff6b35');
            document.querySelectorAll('.contato p, .resumo p, .exp-item ul li, .form-item p, .certificacoes ul li, .projetos ul li, .info-adicional ul li').forEach(el => el.style.color = '');
            this.innerHTML = '🌓';
        }
    });
    
    document.body.appendChild(toggleTema);

    // 5. BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.createElement('button');
    botaoTopo.innerHTML = '<i class="fas fa-arrow-up"></i>';
    botaoTopo.style.position = 'fixed';
    botaoTopo.style.bottom = '300px';
    botaoTopo.style.right = '20px';
    botaoTopo.style.zIndex = '1000';
    botaoTopo.style.padding = '15px 18px';
    botaoTopo.style.border = 'none';
    botaoTopo.style.borderRadius = '50%';
    botaoTopo.style.background = '#6c757d';
    botaoTopo.style.color = 'white';
    botaoTopo.style.cursor = 'pointer';
    botaoTopo.style.fontSize = '24px';
    botaoTopo.style.boxShadow = '0 5px 15px rgba(108, 117, 125, 0.4)';
    botaoTopo.style.transition = 'all 0.3s';
    botaoTopo.style.display = 'none';
    botaoTopo.title = 'Voltar ao Topo';
    
    botaoTopo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    botaoTopo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    botaoTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(botaoTopo);

    // Mostrar/esconder botão voltar ao topo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            botaoTopo.style.display = 'block';
        } else {
            botaoTopo.style.display = 'none';
        }
    });

    // 6. MENSAGEM DE BOAS-VINDAS INTERATIVA
    const horas = new Date().getHours();
    let saudacao, emoji;
    
    if (horas < 12) {
        saudacao = 'Bom dia! ☀️';
        emoji = '☀️';
    } else if (horas < 18) {
        saudacao = 'Boa tarde! 🌤️';
        emoji = '🌤️';
    } else {
        saudacao = 'Boa noite! 🌙';
        emoji = '🌙';
    }
    
    const notificacao = document.createElement('div');
    notificacao.innerHTML = `${saudacao} <br> <small>Lucca Gabriel Birello - Eletricista</small>`;
    notificacao.style.position = 'fixed';
    notificacao.style.top = '20px';
    notificacao.style.right = '20px';
    notificacao.style.background = '#ff6b35';
    notificacao.style.color = 'white';
    notificacao.style.padding = '20px 25px';
    notificacao.style.borderRadius = '15px';
    notificacao.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.4)';
    notificacao.style.zIndex = '2000';
    notificacao.style.animation = 'slideIn 0.5s ease-out';
    notificacao.style.fontSize = '1.2em';
    notificacao.style.textAlign = 'center';
    notificacao.style.cursor = 'pointer';
    
    notificacao.addEventListener('click', function() {
        this.remove();
    });
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.remove();
            }
        }, 500);
    }, 5000);

    // 7. EFEITO DE DIGITAÇÃO NO RESUMO
    const resumoElement = document.querySelector('.resumo p');
    if (resumoElement) {
        const textoOriginal = resumoElement.textContent;
        resumoElement.textContent = '';
        
        let i = 0;
        const digitacao = setInterval(() => {
            if (i < textoOriginal.length) {
                resumoElement.textContent += textoOriginal.charAt(i);
                i++;
            } else {
                clearInterval(digitacao);
            }
        }, 30);
    }

    // 8. CONTADOR DE VISUALIZAÇÕES (simulado)
    const contadorVisitas = document.createElement('div');
    contadorVisitas.style.position = 'fixed';
    contadorVisitas.style.bottom = '20px';
    contadorVisitas.style.left = '20px';
    contadorVisitas.style.background = 'rgba(255, 107, 53, 0.9)';
    contadorVisitas.style.color = 'white';
    contadorVisitas.style.padding = '10px 15px';
    contadorVisitas.style.borderRadius = '10px';
    contadorVisitas.style.fontSize = '0.9em';
    contadorVisitas.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    contadorVisitas.style.zIndex = '1000';
    
    const visitas = Math.floor(Math.random() * 100) + 50;
    contadorVisitas.innerHTML = `<i class="fas fa-eye"></i> ${visitas} visualizações hoje`;
    
    document.body.appendChild(contadorVisitas);

    // 9. ANIMAÇÃO DE HOVER NAS SEÇÕES
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.2)';
            this.style.transition = 'all 0.3s';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // 10. CLIQUE PARA COPIAR EMAIL
    const emailElement = document.querySelector('.contato p:first-child');
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Clique para copiar o email';
        
        emailElement.addEventListener('click', function() {
            const email = 'birelloluccagabriel@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                alert('📋 Email copiado para a área de transferência!');
            });
        });
    }

    // Estilos de animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 10px 25px rgba(37, 211, 102, 0.6);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
            }
        }
        
        .dark-theme .skill-tag {
            background: linear-gradient(135deg, #ff8c5a 0%, #ff6b35 100%);
        }
        
        .dark-theme .periodo {
            background: #ff8c5a;
        }
    `;
    document.head.appendChild(style);
});