<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión y acciones de respuesta ante eventos epidemiológicos 



    .bg-full-width.bg-fondo-1
      img(src="@/assets/curso/tema3/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La atención de situaciones que pueden afectar la salud colectiva en los establecimientos penitenciarios requiere una actuación organizada, oportuna y articulada entre los diferentes actores responsables. 

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .container
            .row.align-items-center.bg-color-04.p-3.mb-0.br-15
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/img02.png", style="max-width: 90px").mx-auto
              .col-lg.order-1
                p.mb-0 Este abordaje permite orientar la toma de decisiones a partir de la información disponible, coordinar las intervenciones necesarias y realizar seguimiento a su efectividad, con el propósito de limitar la propagación, reducir sus posibles consecuencias y proteger la salud de la población privada de la libertad, el personal penitenciario y demás personas vinculadas al establecimiento.


      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Realizar acciones de identificación del evento epidemiológico

      .bloque-texto-g.bg-color-04.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La identificación oportuna de un evento epidemiológico en los establecimientos de reclusión constituye una acción fundamental para prevenir la aparición y propagación de brotes. Las condiciones propias de la población privada de la libertad, como el hacinamiento, las limitaciones de infraestructura sanitaria, la ventilación restringida y las dificultades de acceso a los servicios de salud, incrementan el riesgo de transmisión de enfermedades infecciosas. 

    p.mb-4 Por esta razón, es necesario fortalecer la capacidad para reconocer tempranamente signos, síntomas, casos inusuales o agrupaciones de personas afectadas que puedan indicar la presencia de un evento de interés en salud pública o un posible brote (Ministerio de Salud y Protección Social [MSPS], 2024).

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 4.
          span Acciones de identificación del evento epidemiológico
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 25%;") Componente
                th Descripción
                th Ejemplo en un establecimiento penitenciario
            tbody
              tr
                td Valoración inicial del riesgo
                td Analizar las características del posible evento, considerando el agente involucrado, las personas afectadas, el momento y lugar de aparición, así como los factores que podrían favorecer su transmisión.
                td En un pabellón se detectan varios internos con síntomas respiratorios similares durante una misma semana. Se revisan antecedentes, condiciones del lugar y posibles exposiciones comunes.
              tr
                td Caracterización epidemiológica
                td Recopilar y analizar información según tiempo, lugar y persona, establecer posibles factores de riesgo e identificar relaciones epidemiológicas entre los casos para comprender inicialmente el comportamiento del evento.
                td Se determina cuándo comenzaron los síntomas, en qué dormitorios se concentran los afectados y qué características o contactos comparten.
              tr
                td Notificación y comunicación oportuna
                td Informar los casos o situaciones sospechosas a los responsables de vigilancia para facilitar su verificación y activar oportunamente las rutas institucionales y territoriales correspondientes.
                td El servicio de salud del establecimiento comunica la situación a los responsables de vigilancia para iniciar la actuación correspondiente.
              tr
                td Coordinación de la respuesta
                td Articular a los actores del establecimiento penitenciario y del sector salud para investigar el evento, confirmar su ocurrencia y organizar las acciones requeridas.
                td El personal sanitario y los responsables institucionales coordinan la búsqueda de casos, valoración de contactos y demás intervenciones necesarias.
              tr
                td Activación de medidas de prevención y control
                td Adoptar tempranamente acciones orientadas a disminuir la exposición y evitar nuevos casos, de acuerdo con las características y necesidades identificadas durante la valoración del evento.
                td Ante la sospecha de una enfermedad transmisible, se refuerza la higiene de manos, la bioseguridad y, cuando corresponde, se implementa aislamiento.
              tr
                td Seguimiento del evento
                td Mantener la observación de los casos y de la situación epidemiológica para reconocer cambios, evaluar la aparición de nuevos afectados y orientar la continuidad o ajuste de las medidas implementadas.
                td Durante los días siguientes se registran nuevos casos, se verifica su evolución y se revisa si las medidas adoptadas están limitando la transmisión.


    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Aplicar algoritmos de diagnóstico

    .bg-full-width.bg-fondo-1
      img(src="@/assets/curso/tema3/img03.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La aplicación de algoritmos de diagnóstico constituye una herramienta fundamental para la identificación temprana de enfermedades transmisibles en la población privada de la libertad (PPL), debido a las condiciones epidemiológicas propias de los establecimientos penitenciarios, donde el hacinamiento, la convivencia en espacios cerrados, la limitada ventilación y las condiciones sanitarias favorecen la transmisión de agentes infecciosos.

      .row.mb-4.mb-lg-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img04.png")
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 Los lineamientos del Ministerio de Salud y Protección Social establecen que el diagnóstico debe realizarse mediante procesos estandarizados que integren la evaluación clínica, los antecedentes epidemiológicos, la identificación de factores de riesgo y la clasificación del caso, permitiendo implementar oportunamente medidas de aislamiento, toma de muestras y notificación al Sistema de Vigilancia en Salud Pública (SIVIGILA). 

          .bg-color-16.p-4.br-15.mb-0
            p.mb-2(data-aos="fade-right") Este enfoque busca pasar de un modelo reactivo a uno preventivo, fortaleciendo la capacidad institucional para detectar precozmente los eventos de interés en salud pública (Ministerio de Salud y Protección Social [MSPS], 2024).
            p.mb-0 Los algoritmos diagnósticos deben desarrollarse de manera secuencial, iniciando con:

      .row.mb-4.mb-lg-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img05.png")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          TabsA.color-acento-botones.color-2
            .tarjeta.color-acento-botones--borde.p-4(titulo="Búsqueda de signos y síntomas").align-content-center
              p.mb-0 Identificar activamente personas que presenten manifestaciones compatibles con enfermedades prioritarias, mediante observación, preguntas orientadoras y revisión de antecedentes, favoreciendo la detección temprana de posibles casos dentro del establecimiento penitenciario.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Valoración clínica").align-content-center
              p.mb-0 Evaluar el estado de salud de la persona mediante anamnesis y examen clínico, considerando signos, síntomas, antecedentes y evolución, con el propósito de orientar la sospecha diagnóstica y determinar las acciones iniciales requeridas.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Criterios epidemiológicos").align-content-center
              p.mb-0 Analizar antecedentes de exposición, contactos, ubicación, temporalidad y factores de riesgo para establecer posibles relaciones epidemiológicas y fortalecer la clasificación del caso de acuerdo con las características del evento investigado.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Pruebas diagnósticas").align-content-center
              p.mb-0 Solicitar y realizar las pruebas de laboratorio o procedimientos diagnósticos indicados según el evento sospechado y los protocolos establecidos, con el fin de apoyar la confirmación o descarte del caso.
      
      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img06.png")
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 El lineamiento nacional señala que este proceso debe complementarse con el examen médico de ingreso al establecimiento, la identificación de factores de riesgo individuales y ambientales, así como la vigilancia permanente de la población para detectar oportunamente casos sospechosos antes de que evolucionen a brotes. La estandarización del proceso diagnóstico garantiza que las decisiones clínicas sean oportunas, homogéneas y basadas en evidencia (MSPS, 2024) 

          .bg-color-04.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") Finalmente, la aplicación sistemática de algoritmos de diagnóstico fortalece la vigilancia epidemiológica y mejora la toma de decisiones clínicas y sanitarias, permitiendo detectar precozmente los eventos de interés, reducir la transmisión de enfermedades y orientar la implementación de acciones preventivas y correctivas basadas en evidencia. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .container
          .row.align-items-center.bg-color-12.p-3.mb-0.br-15
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img02.png", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-0 Asimismo, facilita el seguimiento de los casos, la evaluación de la efectividad de las intervenciones y la generación de información útil para la gestión del riesgo en salud pública. De esta manera, los algoritmos diagnósticos no solo contribuyen al manejo oportuno de los casos individuales, sino que constituyen una estrategia esencial para prevenir brotes y proteger la salud de la población privada de la libertad, del personal penitenciario y de la comunidad en general (MSPS, 2024; MSPS, 2016).

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Establecer cómo y cuándo notificar

    .bloque-texto-g.bg-color-04.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La notificación de los eventos de interés en salud pública constituye una de las acciones más importantes para la detección temprana y el control oportuno de brotes en la población privada de la libertad (PPL). El Ministerio de Salud y Protección Social establece que todo caso sospechoso o confirmado de una enfermedad transmisible debe notificarse de acuerdo con los protocolos establecidos por el Sistema Nacional de Vigilancia en Salud Pública (SIVIGILA), utilizando las definiciones de caso vigentes y respetando los tiempos definidos para cada evento. 


    .bg-full-width.bg-fondo-1
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .container
            .row.align-items-center.bg-color-16.p-3.mb-0.br-15
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema3/img08.png", style="max-width: 120px").mx-auto
              .col-lg.order-1
                p.mb-0 La notificación debe realizarse inmediatamente cuando se identifique un evento de notificación obligatoria o una situación que represente un riesgo de propagación, permitiendo activar la investigación epidemiológica, implementar medidas de control y coordinar la respuesta entre las instituciones de salud, el INPEC, la USPEC y las autoridades sanitarias territoriales. La oportunidad en la notificación es determinante para interrumpir la cadena de transmisión y reducir la ocurrencia de brotes (Ministerio de Salud y Protección Social [MSPS], 2016; MSPS, 2024).

      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-12.col-xl-8
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 4.
            span Notificación de eventos de interés en salud publica en entornos penitenciarios
          img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema3/img09.png", alt="La figura presenta de manera secuencial el proceso de actuación ante la identificación de una situación que puede afectar la salud pública en un establecimiento penitenciario. Muestra cómo, a partir de la detección inicial, se recopila y comunica información para orientar la toma de decisiones. Asimismo, presenta la aplicación simultánea de medidas de respuesta y seguimiento, diferenciando las actuaciones según el comportamiento del evento, con el propósito de facilitar una intervención oportuna y reducir el riesgo de transmisión. ")
          img.mb-2.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema3/img10.png", alt="La figura presenta de manera secuencial el proceso de actuación ante la identificación de una situación que puede afectar la salud pública en un establecimiento penitenciario. Muestra cómo, a partir de la detección inicial, se recopila y comunica información para orientar la toma de decisiones. Asimismo, presenta la aplicación simultánea de medidas de respuesta y seguimiento, diferenciando las actuaciones según el comportamiento del evento, con el propósito de facilitar una intervención oportuna y reducir el riesgo de transmisión. ")
      
      
      .row.mb-4.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img11.png")
        .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
          p.mb-3 La correcta notificación depende de la coordinación permanente entre los servicios de salud penitenciarios, las entidades territoriales, el Instituto Nacional Penitenciario y Carcelario (INPEC), la Unidad de Servicios Penitenciarios y Carcelarios (USPEC) y el Ministerio de Salud y Protección Social. 

          .bg-color-12.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") Además de cumplir con la obligación legal de reportar los eventos, la información generada mediante la vigilancia epidemiológica permite analizar tendencias, identificar factores de riesgo, orientar las intervenciones de prevención y fortalecer la toma de decisiones en salud pública. De esta manera, la notificación oportuna no solo cumple una función administrativa, sino que constituye una herramienta esencial para proteger la salud de la población privada de la libertad y prevenir la propagación de enfermedades transmisibles (MSPS, 2024).

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Implementar medidas de salud pública

    .bg-full-width.bg-fondo-1
      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img12.png")
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 La implementación de medidas de salud pública en la población privada de la libertad (PPL) constituye el eje central para prevenir la aparición y propagación de enfermedades transmisibles dentro de los establecimientos de reclusión.  

          .bg-color-15.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") El Ministerio de Salud y Protección Social señala que estas medidas deben orientarse a la interrupción de la cadena epidemiológica mediante la identificación y control de los factores de riesgo individuales, ambientales y sanitarios que favorecen la transmisión de enfermedades. Entre las acciones prioritarias se encuentran: 

      .row.mb-4.justify-content-center
        .col-lg-4.col-md-6.mb-4.mb-lg-4
          .bg-color-12.p-4.br-15.h-100.align-content-center
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema3/img13.svg', style="max-width: 60px").mx-auto
              .col
                p.mb-0 El fortalecimiento de la higiene de manos

        .col-lg-4.col-md-6.mb-4.mb-lg-4
          .bg-color-12.p-4.br-15.h-100.align-content-center
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema3/img14.svg', style="max-width: 60px").mx-auto
              .col
                p.mb-0 El uso adecuado de elementos de protección personal

        .col-lg-4.col-md-6.mb-4.mb-lg-4
          .bg-color-12.p-4.br-15.h-100.align-content-center
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema3/img15.svg', style="max-width: 60px").mx-auto
              .col
                p.mb-0 La promoción de hábitos saludables, la vacunación

        .col-lg-4.col-md-6.mb-4.mb-lg-4
          .bg-color-12.p-4.br-15.h-100.align-content-center
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema3/img16.svg', style="max-width: 60px").mx-auto
              .col
                p.mb-0 La búsqueda activa de casos

        .col-lg-4.col-md-6.mb-4.mb-lg-4
          .bg-color-12.p-4.br-15.h-100.align-content-center
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema3/img17.svg', style="max-width: 60px").mx-auto
              .col
                p.mb-0 El aislamiento oportuno de personas con sospecha de enfermedad transmisible

        .col-lg-4.col-md-6.mb-4.mb-lg-4
          .bg-color-12.p-4.br-15.h-100.align-content-center
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema3/img18.svg', style="max-width: 60px").mx-auto
              .col
                p.mb-0 La educación permanente en salud dirigida tanto a la población privada de la libertad como al personal penitenciario y de salud.

      .row.mb-4.justify-content-center.align-items-center
        .col-lg-7.mb-0.mb-lg-0.order-2.order-lg-1
            p.mb-3 Estas intervenciones permiten disminuir la incidencia de brotes y fortalecer la capacidad de respuesta institucional frente a eventos de interés en salud pública (Ministerio de Salud y Protección Social [MSPS], 2024).
            .bg-color-17.p-4.br-15.mb-0
              p.mb-0(data-aos="fade-right") La implementación efectiva de las medidas de salud pública requiere la coordinación entre el Ministerio de Salud y Protección Social, el Instituto Nacional Penitenciario y Carcelario (INPEC), la Unidad de Servicios Penitenciarios y Carcelarios (USPEC), las entidades territoriales de salud y los prestadores de servicios de salud.
        .col-lg-5.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img19.png")

      .row.mb-4.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8
          figure
            img(src="@/assets/curso/tema3/img20.png")
        .col-lg-8
          p.mb-3 El documento de manejo de brotes resalta que la vigilancia epidemiológica, la detección temprana de casos, la notificación oportuna, la investigación epidemiológica y la ejecución inmediata de acciones de prevención y control son fundamentales para contener la propagación de enfermedades y proteger la salud de la población privada de la libertad.

          .bg-color-02.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") De esta manera, las medidas de salud pública trascienden la atención del caso individual y se convierten en una estrategia integral de gestión del riesgo que fortalece la prevención, el control de brotes y la protección de la salud colectiva (MSPS, 2016; MSPS, 2024).

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Ejecutar acciones colectivas de prevención

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 La ejecución de acciones colectivas de prevención constituye una estrategia esencial para reducir el riesgo de aparición y propagación de enfermedades transmisibles en la población privada de la libertad (PPL). Estas acciones deben trascender la atención individual y orientarse hacia intervenciones dirigidas a toda la comunidad penitenciaria, integrando actividades de promoción de la salud, educación sanitaria, vacunación, vigilancia epidemiológica y fortalecimiento de los entornos saludables.

          .bg-color-17.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") El Ministerio de Salud y Protección Social establece que las acciones colectivas deben planificarse con base en el análisis de los factores de riesgo presentes en cada establecimiento de reclusión, priorizando aquellos relacionados con el hacinamiento, las deficiencias en saneamiento básico, el acceso al agua potable, la calidad de los alimentos y la presencia de vectores, con el propósito de interrumpir la cadena epidemiológica antes de la ocurrencia de brotes (Ministerio de Salud y Protección Social [MSPS], 2024).
        .col-lg-5.order-1.order-lg-2.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img21.png")

      .row.mb-4.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.mb-4.mb-lg-0.col-md-8
          figure
            img(src="@/assets/curso/tema3/img22.png")
        .col-lg-7
          p.mb-3.mb-lg-2 El lineamiento nacional enfatiza que la prevención colectiva debe fundamentarse en la participación activa de la población privada de la libertad, promoviendo procesos de educación, corresponsabilidad y autocuidado que fortalezcan la adopción de prácticas saludables dentro de los establecimientos penitenciarios.

          .bg-color-06.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") De igual manera, recomienda integrar estas acciones con los programas de salud pública, la vigilancia epidemiológica y los mecanismos de inspección, vigilancia y control sanitario, favoreciendo una respuesta integral frente a los riesgos identificados.

      .row.mb-4.justify-content-center
        .col-lg-5.mb-4.mb-lg-0
          .bg-color-04.p-4.br-15.h-100.align-content-center
            p.mb-0 La Organización Mundial de la Salud complementa este enfoque al señalar que los establecimientos penitenciarios deben fortalecer su capacidad para prevenir enfermedades infecciosas mediante sistemas de preparación, detección temprana, capacitación permanente del personal, articulación con los servicios de salud externos y construcción de entornos resilientes frente a epidemias y pandemias (Organización Mundial de la Salud [OMS], 2023; MSPS, 2024).

        .col-lg-7
          .bg-fondo-03.tarjeta.px-5.px-lg-4.justify-content-center.align-items-end.h-100
            .row.align-items-center.justify-content-center
              .col-md-8.col-lg-4.order-2.order-lg-1
                figure.mb-0
                  img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in").w-md-50.mx-auto
              .col-lg-8.order-1.order-lg-2.py-4
                h5(data-aos="fade-left").mb-3 Lo invitamos a escuchar el siguiente Pódcast:

                TarjetaAudio.color-acento-contenido.bg-color-white.mb-lg-5.mb-2(
                  texto="“Charlas que venden” Episodio: Definir algunos principios básicos"
                  tiempo
                  :audio="require_src('../assets/curso/podcast/podcast1.mp3')"
                )

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
