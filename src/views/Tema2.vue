<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos epidemiológicos y factores asociados a la transmisión de enfermedades



    img(src="@/assets/curso/tema2/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Comprender cómo se originan, propagan y controlan las enfermedades transmisibles resulta fundamental para proteger la salud colectiva, especialmente en entornos penitenciarios, donde la convivencia cercana y las condiciones propias del establecimiento pueden favorecer su propagación. 


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .container
          .row.align-items-center.bg-color-04.p-3.mb-0.br-15
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img02.png", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-0 Este abordaje permite analizar la interacción entre las personas, el ambiente y los agentes causantes de enfermedad, reconocer situaciones que incrementan el riesgo y orientar oportunamente acciones de vigilancia, prevención y control. 


    .bg-full-width.bg-fondo-1
      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Concepto e importancia de la epidemiologia

      .row.mb-5.mb-lg-4.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img03.png")
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-0 La epidemiología es una disciplina fundamental de la salud pública que estudia la distribución de los eventos relacionados con la salud y los factores que determinan su ocurrencia en las poblaciones. Su propósito no se limita al estudio de las enfermedades, sino que busca comprender cómo se presentan los diferentes eventos de salud, en quiénes ocurren, dónde se concentran, cuándo aparecen y cuáles son las condiciones que pueden favorecer o disminuir su aparición. Este enfoque permite generar conocimiento sobre la situación de salud de una población y orientar la toma de decisiones para prevenir y controlar los problemas que la afectan (Bernal, s. f.).

      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img04.png")
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-3 Desde una perspectiva contemporánea, la epidemiología puede entenderse como el estudio de la distribución y los determinantes de los estados o eventos relacionados con la salud en poblaciones específicas, así como la aplicación de este conocimiento al control de los problemas de salud.

          .bg-color-10.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") Esta definición resalta dos componentes esenciales: por una parte, la generación de conocimiento mediante el análisis de los eventos de salud y, por otra, la utilización de dicho conocimiento para orientar intervenciones que permitan prevenir, controlar o disminuir los efectos de los problemas identificados (Cortés, 2012, como se citó en Bernal, s. f.).


      .container
        .titulo-con-imagen.mb-4(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
            h3.titulo-con-imagen__texto Elementos fundamentales de la epidemiología

      p.mb-4 El estudio epidemiológico de un evento de salud parte de la observación de su comportamiento en una población. Para ello, es necesario analizar diferentes dimensiones que permiten establecer cómo se distribuye el evento y reconocer patrones que orienten la investigación y la intervención. Entre los elementos fundamentales se encuentran: 
      
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img05.png", alt="Persona")
          .crd_hover_txt--body
            h4.mb-3 Persona
            p.mb-0 Identifica las características de los individuos o grupos afectados (p. ej., edad, sexo, condiciones de salud y sociales), reconoce poblaciones de mayor riesgo y orienta en los establecimientos penitenciarios las acciones de prevención y control.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img06.png", alt="Tiempo")
          .crd_hover_txt--body
            h4.mb-3 Tiempo
            p.mb-0 Analiza cuándo aparece un evento de salud y cómo evoluciona en el tiempo, identifica el primer caso, la tendencia de los casos y posibles patrones, lo que orienta oportunamente las acciones de prevención, atención y control en el contexto penitenciario.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img07.png", alt="Lugar")
          .crd_hover_txt--body
            h4.mb-3 Lugar
            p.mb-0 Determina dónde se presentan los eventos de salud y analiza su distribución espacial. En un establecimiento penitenciario, ayuda a identificar la concentración de casos en pabellones, áreas comunes o servicios, relacionándolos con posibles fuentes de exposición para definir medidas de control.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Epidemiología y manejo de brotes epidemiológicos

    .bg-full-width.bg-fondo-1
      .bg-color-14.br-15.mb-5
        p.mb-0.p-3.text-center En el manejo de un brote epidemiológico, la epidemiología proporciona las herramientas necesarias para comprender lo siguiente:

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12.col-xl-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-0 Tabla 2.
            span Aspectos para la caracterización epidemiológica de un brote
          .tabla-a.color-acento-contenido.tb-custom.mb-0
            table
              thead
                tr
                  th(style="width: 30%;") Aspecto
                  th Descripción
              tbody
                tr
                  td Presentación del evento
                  td Analizar las características del brote, su magnitud, forma de transmisión y comportamiento inicial para comprender la situación epidemiológica y orientar las primeras acciones de respuesta. Ejemplo: aumento inusual de casos respiratorios en un pabellón durante varios días.
                tr
                  td Identificación de las personas afectadas
                  td Reconocer quiénes presentan la enfermedad o cumplen criterios de caso, considerando características clínicas, demográficas y factores de riesgo. Ejemplo: identificar casos concentrados en un mismo pabellón.
                tr
                  td Establecer la distribución temporal de los casos
                  td Determinar cuándo aparecieron los casos, su secuencia y evolución para reconocer tendencias, posibles periodos de exposición y cambios en la transmisión durante el brote. Ejemplo: registrar que los casos comenzaron el lunes y aumentaron progresivamente durante la semana.
                tr
                  td Establecer la distribución espacial de los casos
                  td Ubicar dónde se concentran los casos para identificar áreas con mayor transmisión o exposición. Ejemplo: dormitorios, patios, servicios sanitarios o zonas de alimentación.
                tr
                  td Reconocer posibles factores relacionados con su aparición
                  td Identificar condiciones individuales, ambientales, sociales o institucionales que puedan favorecer el brote y contribuir a orientar medidas específicas de prevención y control. Ejemplo: hacinamiento, ventilación deficiente y contacto cercano entre personas de un mismo pabellón.

      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img08.png")
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-1 Este análisis permite pasar de la observación de casos individuales a una comprensión colectiva del evento y facilita la toma de decisiones para controlar su propagación (Bernal, s. f.; MSPS, s. f.). 
          p.mb-2 En los establecimientos penitenciarios, la epidemiología adquiere una importancia particular debido a las condiciones propias de estos espacios. 


          .bg-color-10.p-4.br-15.mb-0
            p.mb-0(data-aos="fade-right") Los documentos técnicos relacionados con la población privada de la libertad reconocen que existen circunstancias que pueden facilitar la aparición de enfermedades infecciosas, por lo que el fortalecimiento de la vigilancia en salud permite detectar oportunamente los riesgos y eventos y facilitar la implementación de acciones de prevención, atención y control (MSPS, s. f.).


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Epidemiología y prevención de brotes en establecimientos penitenciarios

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img09.png")
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 La aplicación de la epidemiología en los establecimientos penitenciarios permite fortalecer la capacidad para identificar tempranamente eventos que puedan convertirse en brotes. La vigilancia continua, el análisis de los casos y la identificación de cambios en los patrones habituales de enfermedad facilitan la generación de alertas y la activación de acciones de respuesta antes de que el evento alcance una mayor magnitud (MSPS, s. f.).

        .bg-color-12.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") La importancia de la epidemiología en este contexto se relaciona directamente con la posibilidad de intervenir oportunamente. Una detección temprana permite iniciar procesos de investigación, establecer medidas de control y articular las acciones entre los servicios de salud, las autoridades sanitarias y los responsables de la gestión penitenciaria. De esta manera, el conocimiento epidemiológico se convierte en una herramienta fundamental para reducir el riesgo de propagación de enfermedades y proteger la salud colectiva (MSPS, s. f.).
    
    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img10.png")
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-2 En conclusión, la epidemiología permite comprender la distribución de los eventos relacionados con la salud y los factores que determinan su ocurrencia en poblaciones específicas. 

        .bg-color-15.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Su importancia en los entornos penitenciarios, facilita la detección temprana de riesgos, la caracterización de los casos, la identificación de factores asociados, la toma de decisiones y la implementación de medidas de prevención y control orientadas a interrumpir la transmisión y proteger la salud de la población privada de la libertad (Bernal, s. f.; MSPS, s. f.).



    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Diferencias entre el concepto brote, epidemia y evento de interés en salud pública (EISP)


    .bloque-texto-g.bg-color-04.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el campo de la epidemiología es fundamental diferenciar los conceptos de brote, epidemia y evento de interés en salud pública (EISP), debido a que cada uno describe situaciones diferentes relacionadas con la ocurrencia de eventos que pueden afectar la salud de una población. 

    p.mb-4 Aunque estos conceptos están relacionados entre sí, no son equivalentes y su adecuada comprensión permite interpretar correctamente la situación epidemiológica, establecer los mecanismos de vigilancia y determinar las acciones de investigación, notificación, prevención y control que deben implementarse (Bernal, s. f.).
    
    .bg-full-width.bg-fondo-1
      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
            div(titulo="Epidemia")
              .row.align-items-center.justify-content-center.ms-5
                .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
                  figure
                    img(src="@/assets/curso/tema2/img12.png")
                .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-1
                  p.mb-2 Ocurrencia de una enfermedad con un número de casos superior al esperado en una población, territorio o comunidad durante un período determinado.
                  p.mb-2.fw-bold Se caracteriza por:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Aumento significativo de casos respecto a lo esperado.
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Puede afectar a una población amplia.
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Requiere vigilancia, investigación y control.
                    li.d-flex.mb-0
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Implica un cambio en el comportamiento habitual de la enfermedad.

            div(titulo="Brote epidemiológico")
              .row.align-items-center.justify-content-center.ms-5
                .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
                  figure
                    img(src="@/assets/curso/tema2/img13.png")
                .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-1
                  p.mb-2 Aparición de un número de casos superior al esperado en un espacio y período de tiempo específicos. Es una forma particular de epidemia.
                  p.mb-2.fw-bold Se caracteriza por:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Se presenta en un lugar definido (pabellón, dormitorio o área específica).
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Ocurre en un período de tiempo limitado.
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Afecta a un número de casos mayor al esperado en esa población o institución.
                    li.d-flex.mb-0
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Requiere investigación epidemiológica para establecer su origen y aplicar medidas de control.

            div(titulo="Evento de interés en salud pública (EISP)")
              .row.align-items-center.justify-content-center.ms-5
                .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
                  figure
                    img(src="@/assets/curso/tema2/img14.png")
                .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-1
                  p.mb-2 Suceso o situación que, por sus características, puede afectar la salud de la población y requiere vigilancia, seguimiento y, cuando sea necesario, intervención por parte de las autoridades de salud.
                  p.mb-2.fw-bold Se caracteriza por:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Requiere vigilancia e identificación temprana.
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span Puede ser un caso individual o un evento colectivo.
                    li.d-flex.mb-2
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span No necesariamente implica un brote o una epidemia.
                    li.d-flex.mb-0
                      i.fas.fa-circle.fa-sm.bg-color-07.me-2
                      span La información puede provenir de la unidad de salud del establecimiento y de otras fuentes epidemiológicas.

      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
            h3.titulo-con-imagen__texto Diferencias entre brote, epidemia y EISP

      p.mb-4 Aunque los tres conceptos se encuentran relacionados con la vigilancia epidemiológica, la principal diferencia está en su alcance y en el criterio utilizado para definir cada situación. A continuación, se muestra las diferencias entre los tres:

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-0 Tabla 3.
            span Diferencias entre brote, epidemia y EISP
          .tabla-a.color-acento-contenido.tb-custom.mb-0
            table
              thead
                tr
                  th Concepto
                  th Diferencia principal
                  th Alcance
                  th Implicación para la vigilancia
                  th Ejemplo real en Colombia
              tbody
                tr
                  td Brote epidemiológico
                  td Corresponde a la aparición de casos relacionados epidemiológicamente, generalmente por encima de lo esperado y delimitados en tiempo, lugar o población.
                  td Suele estar localizado en una institución, pabellón, dormitorio, comunidad o grupo específico.
                  td Requiere investigación epidemiológica para identificar casos, posibles fuentes, contactos y factores asociados, además de implementar medidas de control.
                  td En 2022, un establecimiento penitenciario de Pereira registró un brote de varicela con cuatro casos: tres internos y un guardia, concentrados en un mismo patio.
                tr
                  td Epidemia
                  td Representa un aumento de casos por encima de lo esperado en una población o territorio durante un período determinado, generalmente con mayor extensión que un brote localizado.
                  td Puede involucrar comunidades, municipios, departamentos, regiones o poblaciones más amplias.
                  td Exige intensificar la vigilancia, analizar el comportamiento del evento, investigar factores asociados y desarrollar acciones de prevención, atención y control.
                  td Un ejemplo documentado en contexto penitenciario corresponde a la epidemia de varicela presentada en el establecimiento penitenciario de Sincelejo, que motivó medidas sanitarias y de vigilancia epidemiológica.
                tr
                  td Evento de interés en salud pública (EISP)
                  td Es un concepto más amplio: comprende eventos que, por su importancia o riesgo para la salud colectiva, requieren vigilancia. No implica necesariamente la existencia de un brote o epidemia.
                  td Puede corresponder desde un caso individual sujeto a vigilancia hasta eventos colectivos de mayor magnitud.
                  td Puede requerir detección, notificación, seguimiento, análisis y acciones de salud pública según el evento y los protocolos establecidos.
                  td En 2026, en la cárcel San Sebastián de Ternera de Cartagena se notificaron casos de tuberculosis y varicela como eventos de interés en salud pública, activando vigilancia, seguimiento y evaluación de medidas de control.

    .bg-full-width.bg-fondo-1
      .row.mb-5.mb-lg-4.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img15.png")
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-2 Un EISP puede existir sin que haya brote o epidemia; un brote se caracteriza por su concentración epidemiológica y generalmente localizada; y una epidemia expresa un incremento de casos superior a lo esperado en una población o territorio de mayor alcance. 

          .bg-color-06.p-4.br-15.mb-2
            p.mb-0(data-aos="fade-right") Además, en poblaciones de especial interés como la población privada de la libertad, los lineamientos nacionales establecen criterios específicos que pueden hacer que un solo caso de determinados eventos transmisibles active la respuesta de brote. 

          p.mb-0 A continuación, se muestra el proceso de vigilancia, análisis y respuesta ante eventos de interés en salud pública:

      .row.justify-content-center.align-items-center.z-2.mb-3
        .col-lg-12.col-xl-8
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 3.
            span Proceso de vigilancia, análisis y respuesta ante eventos de interés en salud pública
          img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema2/img16.png", alt="La figura representa el proceso que orienta la identificación y respuesta frente a situaciones que pueden afectar la salud pública. Muestra una secuencia que parte de la vigilancia y el análisis de la información para determinar el comportamiento de los casos y definir las acciones correspondientes. Según los resultados obtenidos, el proceso continúa con el seguimiento o con una respuesta epidemiológica más específica, encaminada a investigar la situación y establecer medidas oportunas de prevención y control.")
          img.mb-2.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema2/img17.png", alt="La figura representa el proceso que orienta la identificación y respuesta frente a situaciones que pueden afectar la salud pública. Muestra una secuencia que parte de la vigilancia y el análisis de la información para determinar el comportamiento de los casos y definir las acciones correspondientes. Según los resultados obtenidos, el proceso continúa con el seguimiento o con una respuesta epidemiológica más específica, encaminada a investigar la situación y establecer medidas oportunas de prevención y control.")


      separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Factores que favorecen la transmisión en entornos penitenciarios
    
    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img18.png")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-2 Los establecimientos de reclusión constituyen entornos con características particulares que pueden favorecer la aparición y propagación de enfermedades transmisibles y otros eventos de interés en salud pública. 

        .bg-color-12.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Las condiciones de convivencia colectiva, las características de la infraestructura, la disponibilidad de servicios públicos, las condiciones sanitarias y ambientales y las dinámicas propias de la población privada de la libertad pueden facilitar la transmisión de agentes infecciosos cuando no se cuenta con medidas adecuadas de prevención, vigilancia y control.

    .row.mb-5.mb-lg-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img19.png")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 Por esta razón, el reconocimiento de los factores de riesgo presentes en estos espacios es fundamental para comprender la dinámica de los brotes epidemiológicos y establecer acciones oportunas para interrumpir las cadenas de transmisión (Ministerio de Salud y Protección Social [MSPS], s. f.).

        .bg-color-02.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") La transmisión de una enfermedad infecciosa ocurre cuando un agente biológico logra pasar desde una fuente o reservorio hacia una persona susceptible. En los establecimientos penitenciarios, diferentes condiciones pueden favorecer uno o varios eslabones de esta cadena de transmisión. Por ello, la prevención de brotes requiere identificar los factores que incrementan la exposición, facilitan el contacto entre las personas, favorecen la supervivencia de los agentes en el ambiente o dificultan la identificación y atención oportuna de los casos (MSPS, s. f.).


    .bg-color-06.br-15.mb-5
      p.mb-0.p-3.text-center Desde esta perspectiva, los factores que favorecen la transmisión en los entornos penitenciarios pueden agruparse en diferentes categorías, como lo son: 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img20.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        .bg-fondo-01.p-4.p-lg-5.br-15
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-3
              h4 Condiciones de infraestructura y ambiente
              p.mb-0 Comprenden aspectos como hacinamiento, ventilación insuficiente, iluminación, humedad, deterioro de espacios y limitada separación entre áreas. Estas condiciones pueden aumentar el contacto entre personas y favorecer la permanencia y transmisión de agentes infecciosos.

            .tarjeta.p-3
              h4 Condiciones sanitarias e higiénicas
              p.mb-0 Se relacionan con la limpieza y desinfección de espacios, higiene personal, manejo de residuos, disposición de excretas y disponibilidad de elementos de aseo. Las deficiencias en estas condiciones pueden facilitar la contaminación del entorno.

            .tarjeta.p-3
              h4 Disponibilidad de agua y servicios públicos
              p.mb-0 El acceso continuo a agua segura, saneamiento, energía y sistemas adecuados de disposición de residuos resulta esencial para mantener condiciones saludables. Las interrupciones pueden afectar la higiene personal, la limpieza y otras medidas de prevención.

            .tarjeta.p-3
              h4 Prácticas relacionadas con los alimentos
              p.mb-0 Incluyen las condiciones de recepción, almacenamiento, preparación, conservación, manipulación y distribución de alimentos. Las prácticas inadecuadas pueden generar contaminación y favorecer la aparición de enfermedades transmitidas por alimentos dentro del establecimiento.

            .tarjeta.p-3
              h4 Presencia de animales y vectores
              p.mb-0 La presencia o proliferación de roedores, insectos y otros animales puede estar relacionada con deficiencias ambientales, acumulación de residuos o almacenamiento inadecuado de alimentos, aumentando la posibilidad de transmisión de determinados agentes infecciosos.

            .tarjeta.p-3
              h4 Características de la convivencia colectiva
              p.mb-0 La permanencia prolongada en espacios compartidos, el contacto cercano, la movilidad entre áreas y el uso común de dormitorios, baños y otros espacios pueden facilitar la exposición y transmisión de enfermedades, principalmente aquellas de carácter transmisible.

            .tarjeta.p-3
              h4 Dificultades en la detección y atención oportuna de casos
              p.mb-0 Las demoras para reconocer síntomas, acceder a valoración, realizar pruebas diagnósticas, aislar casos o iniciar tratamiento pueden prolongar el período de exposición y permitir que una enfermedad continúe propagándose entre la población del establecimiento.
    
    .bg-color-16.br-15.mb-5
      p.mb-0.p-3.text-center Estos factores no actúan de manera aislada, sino que pueden interactuar y aumentar el riesgo de aparición, propagación y prolongación de los brotes (MSPS, s. f.).


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto ¿Cómo prevenir los factores que favorecen la transmisión?

    .bg-full-width.bg-fondo-1
      .row.mb-5.mb-lg-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img21.png")
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-2 La prevención de los brotes en los establecimientos penitenciarios requiere un enfoque integral que combine acciones sobre el ambiente, la infraestructura, los servicios públicos, las prácticas individuales y colectivas y la vigilancia epidemiológica.  

          .bg-color-04.p-4.br-15.mb-0
            p.mb-1(data-aos="fade-right") El lineamiento técnico establece como propósito reducir la ocurrencia de eventos de interés en salud pública y los brotes en la población privada de la libertad mediante estrategias de promoción de la salud y prevención primaria y secundaria orientadas a interrumpir la cadena de transmisión (MSPS, s. f.).
            p.mb-0 Entre las acciones preventivas se encuentran: 

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img22.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img23.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Fortalecimiento de las condiciones de higiene
              p.text-center.mb-0 Promover prácticas permanentes de higiene personal y colectiva, garantizando acceso a elementos de aseo y condiciones adecuadas que contribuyan a disminuir la exposición y transmisión de agentes infecciosos dentro del establecimiento penitenciario.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img24.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Disponibilidad de agua segura
              p.text-center.mb-0 Garantizar acceso suficiente y continuo a agua apta para consumo, higiene, preparación de alimentos y limpieza, mediante controles que aseguren su calidad y reduzcan riesgos sanitarios para la población penitenciaria.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img25.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Limpieza y desinfección de los espacios
              p.text-center.mb-0 Mantener celdas, dormitorios, baños, áreas comunes y servicios en condiciones sanitarias adecuadas mediante procedimientos periódicos de limpieza y desinfección que reduzcan la presencia y propagación de agentes infecciosos.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img26.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Manejo adecuado de los alimentos
              p.text-center.mb-0 Aplicar prácticas higiénicas durante la recepción, almacenamiento, preparación, conservación y distribución de alimentos, controlando condiciones que puedan generar contaminación y provocar enfermedades transmitidas por alimentos entre las personas del establecimiento.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img27.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Control de roedores y otros vectores
              p.text-center.mb-0 Implementar medidas de saneamiento, vigilancia y control para evitar la presencia y proliferación de roedores, insectos y otros vectores capaces de transportar agentes infecciosos y favorecer la aparición de enfermedades.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img28.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Identificación temprana de casos
              p.text-center.mb-0 Reconocer oportunamente signos, síntomas o situaciones compatibles con eventos de interés en salud pública, facilitando la valoración, notificación y adopción temprana de medidas que reduzcan el riesgo de propagación.

            .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img29.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center Implementación oportuna de medidas de aislamiento
              p.text-center.mb-0 Separar temporalmente, cuando esté indicado, a personas con sospecha o confirmación de enfermedades transmisibles, bajo condiciones adecuadas de atención y seguimiento, para disminuir el contacto y prevenir nuevos contagios.

      .bg-color-16.br-15.mb-4
        p.mb-0.p-3.text-center Estas acciones requieren la participación coordinada de los diferentes actores involucrados en la gestión de los establecimientos penitenciarios y en la atención en salud (MSPS, s. f.).


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
