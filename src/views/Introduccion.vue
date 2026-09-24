<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 Este componente formativo permite comprender los fundamentos epidemiológicos y normativos relacionados con la identificación y gestión de brotes epidemiológicos en entornos penitenciarios. Se abordarán aspectos relacionados con la normatividad vigente, el funcionamiento del sistema penitenciario y carcelario, el concepto de salud y sus determinantes, la historia natural de la enfermedad, los microorganismos y la cadena de transmisión.

        .bg-color-01.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right")  Asimismo, se profundizará en los fundamentos de la epidemiología, la interacción entre agente, huésped y ambiente, los conceptos de brote, epidemia y eventos de interés en salud pública (EISP), así como los factores de riesgo y protección que favorecen o disminuyen la transmisión de enfermedades en la población privada de la libertad.

        p.mb-0(data-aos="fade-right") A través del desarrollo de estos conocimientos, los aprendices fortalecerán las capacidades necesarias para identificar eventos epidemiológicos, gestionar riesgos, aplicar algoritmos de diagnóstico, caracterizar y notificar los EISP, e implementar medidas de salud pública y acciones colectivas de prevención. 

    .bg-color-02.p-4.br-15.mb-0
      .row.align-items-center.mb-0
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/intro/img02.png", style="max-width: 90px").mx-auto
        .col-lg.order-1
          p.mb-0 De esta manera, se busca proporcionar herramientas conceptuales y procedimentales que permitan responder de manera oportuna y efectiva ante situaciones epidemiológicas, contribuyendo a la prevención, mitigación y control de brotes en los Establecimientos de Reclusión del Orden Nacional (ERON), de acuerdo con la normatividad, lineamientos y protocolos vigentes


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
