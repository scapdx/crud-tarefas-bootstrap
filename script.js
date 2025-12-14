// JS bem básico: só para o modal de confirmação de exclusão na tela de listagem
document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("modalExcluir");
  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl);
  const nomeSpan = document.getElementById("nomeTarefaExcluir");
  const btnConfirmar = document.getElementById("btnConfirmarExclusao");

  // pega todos os botões de excluir e abre o modal
  document.querySelectorAll("[data-acao='excluir']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const nome = btn.getAttribute("data-nome") || "esta tarefa";
      nomeSpan.textContent = nome;
      modal.show();
    });
  });

  // não faz nada de verdade (atividade pede só interface)
  btnConfirmar.addEventListener("click", () => {
    modal.hide();
    // só feedback visual simples
    const toastEl = document.getElementById("toastExclusao");
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  });
});
