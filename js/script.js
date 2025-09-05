
// script.js - interacciones básicas + datos simulados
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(a => {
  if(a.href === window.location.href) a.setAttribute('aria-current','page');
});

// Simulación de un pequeño "repositorio de conocimiento"
const KB = [
  {id: 1, titulo: "Cambio de cuenta bancaria", tags:["pagos","actualización"], ultimaActualizacion:"2025-08-10"},
  {id: 2, titulo: "Proceso de alta de nuevo miembro", tags:["onboarding","miembro"], ultimaActualizacion:"2025-07-28"},
  {id: 3, titulo: "Validación de identidad (KYC)", tags:["seguridad","compliance"], ultimaActualizacion:"2025-06-15"}
];

function renderKB(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  el.innerHTML = KB.map(item => `
    <article class="card">
      <h3>${item.titulo}</h3>
      <p class="muted">Etiquetas: ${item.tags.join(', ')} · Actualizado: ${item.ultimaActualizacion}</p>
      <a class="btn" href="documentos.html#doc-${item.id}">Ver documento</a>
    </article>
  `).join('');
}

function calcROI(){
  const ahorroHorasMes = 950.5;
  const costoHora = 125;
  const ahorro = ahorroHorasMes * costoHora;
  const costoProyecto = 73945.09;
  const meses = 4;
  const beneficioNeto = (ahorro * meses) - costoProyecto;
  const roi = (beneficioNeto / costoProyecto) * 100;
  const out = document.querySelector('#roi-out');
  if(out){
    out.textContent = `ROI estimado (4 meses): ${roi.toFixed(1)}%`;
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderKB('#kb-list');
  calcROI();
});
