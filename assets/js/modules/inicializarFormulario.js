export async function inicializarFormularioContato() {
        const form = document.getElementById("contact-form");

        if (!form) {
            console.log("Nota: formulário de contato não encontrado nesta página. Pulando inicialização");
            return;
        }

        console.log("✅ Formulário #contact-form encontrado. Inicializando...");

        const button = document.getElementById("btn-enviar-contato");
        const statusDiv = document.getElementById("form-status");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = {
                name: document.getElementById("form-name").value,
                email: document.getElementById("form-email").value,
                company: document.getElementById("form-empresa").value,
                companyType: document.getElementById("form-tipoEmpresa").value,
                message: document.getElementById("sua-mensagem").value
            };

            button.disabled = true;
            statusDiv.textContent = "Enviando...";
            statusDiv.className = "alert alert-info";

            try {
                const response = await fetch("https://backend-portifolio-65uf.onrender.com/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                form.reset(); // Limpa o formulário
                statusDiv.textContent = "Mensagem enviada com sucesso! Obrigado.";
                statusDiv.className = "alert alert-success";
                } else {
                    // Se o backend der um erro (400, 500)
                    const errorData = await response.json();
                    statusDiv.textContent = `Erro ao enviar: ${errorData.message || 'Tente novamente.'}`;
                    statusDiv.className = "alert alert-danger";
                }
            } catch (error) {
            //  Trata erros de rede (ex: backend desligado)
            console.error("Erro de rede no fetch:", error);
            statusDiv.textContent = "Erro de rede. Não foi possível conectar ao servidor.";
            statusDiv.className = "alert alert-danger";
            } finally {
                //  Restaura o botão em qualquer cenário (sucesso ou erro)
                button.disabled = false;
            }
        });
    }