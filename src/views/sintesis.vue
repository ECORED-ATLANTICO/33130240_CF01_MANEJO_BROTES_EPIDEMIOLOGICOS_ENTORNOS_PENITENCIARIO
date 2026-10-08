<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 El componente formativo Identificación, caracterización y gestión de brotes epidemiológicos en entornos penitenciarios aborda integralmente la prevención y el control de enfermedades transmisibles. Comprende los principales microorganismos, sus mecanismos de transmisión, la cadena epidemiológica y los factores que favorecen la aparición de brotes, considerando las condiciones de la población privada de la libertad.

    p.mb-4 Asimismo, desarrolla la vigilancia epidemiológica, la detección temprana de eventos de interés en salud pública, la aplicación de algoritmos diagnósticos y los procedimientos de notificación al SIVIGILA. Incluye medidas de salud pública como aislamiento, vacunación, saneamiento ambiental, control de vectores, higiene de manos y desinfección. También promueve acciones colectivas mediante educación para la salud, autocuidado, participación comunitaria y articulación entre las instituciones responsables. En conjunto, estos elementos fortalecen la identificación oportuna, la interrupción de la transmisión, la respuesta ante brotes y la protección de la salud colectiva en los establecimientos penitenciarios.
  
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La síntesis del componente formativo aborda la identificación, caracterización y gestión de brotes epidemiológicos en entornos penitenciarios. Se estructura en tres ejes principales: normativa y conceptos básicos (marco legal, sistema penitenciario, salud, determinantes, historia natural de la enfermedad y cadena de transmisión), fundamentos epidemiológicos y factores asociados (estudio de persona, tiempo y lugar, diferencias entre brote, epidemia y EISP, y factores de riesgo en reclusión) y gestión y respuesta ante eventos (identificación temprana, algoritmos diagnósticos, notificación al SIVIGILA, medidas de salud pública y prevención colectiva).")
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
