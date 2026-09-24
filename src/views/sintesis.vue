<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 El componente formativo Identificación, caracterización y gestión de brotes epidemiológicos en entornos penitenciarios aborda integralmente la prevención y el control de enfermedades transmisibles. Comprende los principales microorganismos, sus mecanismos de transmisión, la cadena epidemiológica y los factores que favorecen la aparición de brotes, considerando las condiciones de la población privada de la libertad.

    p.mb-4 Asimismo, desarrolla la vigilancia epidemiológica, la detección temprana de eventos de interés en salud pública, la aplicación de algoritmos diagnósticos y los procedimientos de notificación al SIVIGILA. Incluye medidas de salud pública como aislamiento, vacunación, saneamiento ambiental, control de vectores, higiene de manos y desinfección. También promueve acciones colectivas mediante educación para la salud, autocuidado, participación comunitaria y articulación entre las instituciones responsables. En conjunto, estos elementos fortalecen la identificación oportuna, la interrupción de la transmisión, la respuesta ante brotes y la protección de la salud colectiva en los establecimientos penitenciarios.
  
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Este componente formativo, Fundamentos de la Cocina Saludable, proporciona las bases conceptuales, normativas y prácticas para que el aprendiz desarrolle la capacidad de seleccionar materias primas de alta calidad, manejar equipos y utensilios de forma segura, y aplicar técnicas de corte, cocción y conservación bajo estándares de inocuidad. Su recorrido inicia con el marco legal colombiano (Ley 9, Decreto 3075, Resolución 2674, INVIMA) y los cuatro pilares de las BPM, continúa con la selección de materias primas mediante el Plato de Harvard, la receta estándar y el método PEPS, avanza con la clasificación de equipos, el diseño higiénico, los materiales aprobados (acero inoxidable) y el manejo seguro, y finaliza con las técnicas de higiene (tren de lavado), cortes profesionales, cocciones saludables (vapor, plancha) y conservación (refrigeración, congelación, zona de peligro). Su apropiación es el cimiento para garantizar la inocuidad como pilar fundamental de la gastronomía saludable.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
