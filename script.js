document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("authForm");
  const loginBtn = document.getElementById("loginBtn");
  const addGastoBtn = document.getElementById("addGastoBtn");
  const addEconomiaBtn = document.getElementById("addEconomiaBtn");
  const addInvestimentoBtn = document.getElementById("addInvestimentoBtn");

  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nomeCompleto = document.getElementById("nomeCompleto").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const confirmSenha = document.getElementById("confirmSenha").value;

      if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
      }

      fetch("auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nomeCompleto, email, senha }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "main.html";
          } else {
            alert(data.message);
          }
        });
    });

    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      fetch("auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha, login: true }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "main.html";
          } else {
            alert(data.message);
          }
        });
    });
  }

  if (addGastoBtn) {
    addGastoBtn.addEventListener("click", () => {
      const descricao = prompt("Descrição do Gasto:");
      const valor = prompt("Valor do Gasto:");
      const data = prompt("Data do Gasto (YYYY-MM-DD):");
      const tipo = "gasto";
      const idConta = 1; // Exemplo
      const idCategoria = 1; // Exemplo

      fetch("add_gastos.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descricao, valor, data, tipo, idConta, idCategoria }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Gasto adicionado com sucesso!");
            window.location.reload();
          } else {
            alert(data.message);
          }
        });
    });
  }

  if (addEconomiaBtn) {
    addEconomiaBtn.addEventListener("click", () => {
      const descricao = prompt("Descrição da Economia:");
      const valor = prompt("Valor da Economia:");
      const data = prompt("Data da Economia (YYYY-MM-DD):");
      const usuario_email = "exemplo@exemplo.com"; // Exemplo

      fetch("add_economia.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descricao, valor, data, usuario_email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Economia adicionada com sucesso!");
            window.location.reload();
          } else {
            alert(data.message);
          }
        });
    });
  }

  if (addInvestimentoBtn) {
    addInvestimentoBtn.addEventListener("click", () => {
      const nome = prompt("Nome do Investimento:");
      const valor_atual = prompt("Valor Atual do Investimento:");
      const retorno = prompt("Retorno do Investimento:");
      const data = prompt("Data do Investimento (YYYY-MM-DD):");
      const usuario_email = "exemplo@exemplo.com"; // Exemplo

      fetch("add_investimento.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, valor_atual, retorno, data, usuario_email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Investimento adicionado com sucesso!");
            window.location.reload();
          } else {
            alert(data.message);
          }
        });
    });
  }
});
