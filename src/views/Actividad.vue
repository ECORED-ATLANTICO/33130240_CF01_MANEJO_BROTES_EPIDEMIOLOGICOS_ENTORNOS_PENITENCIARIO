<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Identificación, caracterización y gestión de brotes epidemiológicos en entornos penitenciarios.',
      titulo: 'Cuestionario Didáctico',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conceptos y procedimientos relacionados con la identificación, caracterización, prevención y gestión de brotes epidemiológicos en entornos penitenciarios.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una función del Sistema de Vigilancia en Salud Pública (SIVIGILA) frente a los eventos epidemiológicos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recopilar, analizar e interpretar sistemáticamente información para orientar acciones de prevención y control.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Administrar exclusivamente los servicios médicos de los establecimientos penitenciarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar las medidas judiciales aplicables a la población privada de la libertad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Gestionar la infraestructura física y logística de los establecimientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado que SIVIGILA permite gestionar información sobre eventos en salud para orientar oportunamente acciones de prevención y control.',
          mensaje_incorrecto:
            'Revisa nuevamente el contenido relacionado con la vigilancia en salud pública y las funciones de SIVIGILA.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumple principalmente la USPEC dentro del sistema penitenciario y carcelario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar las penas impuestas por las autoridades judiciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar exclusivamente la vigilancia epidemiológica nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Gestionar bienes, servicios, infraestructura y apoyo logístico y administrativo para el funcionamiento penitenciario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Definir los criterios clínicos para diagnosticar enfermedades transmisibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido que la USPEC brinda soporte mediante la gestión de servicios, infraestructura y recursos necesarios para el funcionamiento penitenciario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes corresponde a uno de los determinantes de la salud desarrollados en el componente formativo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Régimen penitenciario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Condición judicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medio ambiente y entorno sociocultural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificación del establecimiento de reclusión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido que el medio ambiente y el entorno sociocultural forman parte de los determinantes que pueden influir en el estado de salud de las personas.',
          mensaje_incorrecto:
            'Revisa nuevamente el apartado relacionado con la salud y sus determinantes.',
        },
        {
          id: 4,
          texto:
            '¿Para qué resulta útil comprender la historia natural de la enfermedad en la gestión de brotes?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para determinar la organización administrativa del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para establecer las funciones de custodia del personal penitenciario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para clasificar los establecimientos según su nivel de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para reconocer momentos de intervención que permitan prevenir, detectar y controlar la enfermedad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha identificado que la historia natural de la enfermedad permite reconocer momentos en los cuales pueden aplicarse acciones de prevención, detección, diagnóstico y control.',
          mensaje_incorrecto:
            'Revisa nuevamente el concepto y la aplicación de la historia natural de la enfermedad.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito de analizar la cadena de transmisión de una enfermedad infecciosa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar exclusivamente la gravedad clínica de las personas enfermas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar los eslabones sobre los cuales se puede intervenir para disminuir o detener la transmisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer la capacidad física del establecimiento penitenciario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar a las personas según el tiempo de permanencia en reclusión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha comprendido que reconocer los eslabones de la cadena permite seleccionar puntos de intervención para reducir la propagación de una enfermedad.',
          mensaje_incorrecto:
            'Revisa nuevamente los elementos de la cadena epidemiológica y su utilidad para prevenir la transmisión.',
        },
        {
          id: 6,
          texto:
            'Una persona estuvo expuesta a una enfermedad contagiosa, pero no presenta la enfermedad. ¿Qué medida puede aplicarse según las características del evento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuarentena.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tratamiento terapéutico inmediato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Notificación como caso confirmado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha diferenciado la cuarentena del aislamiento: la primera puede aplicarse a personas expuestas que no presentan la enfermedad.',
          mensaje_incorrecto:
            'Revisa nuevamente las diferencias entre aislamiento, cuarentena y distanciamiento.',
        },
        {
          id: 7,
          texto:
            '¿Qué característica distingue a los virus dentro de los agentes infecciosos estudiados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se reproducen de manera independiente en cualquier superficie.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son siempre organismos beneficiosos para el ser humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requieren células vivas para reproducirse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se transmiten exclusivamente por contacto directo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado que los virus necesitan células vivas para reproducirse y pueden presentar diferentes mecanismos de transmisión.',
          mensaje_incorrecto:
            'Revisa nuevamente las características de los principales microorganismos de importancia en salud pública.',
        },
        {
          id: 8,
          texto: '¿Qué estudia principalmente la epidemiología?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente los microorganismos que producen enfermedades infecciosas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exclusivamente los tratamientos utilizados para enfermedades transmisibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La organización administrativa de las instituciones de salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La distribución de los eventos relacionados con la salud y los factores que determinan su ocurrencia en las poblaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha reconocido que la epidemiología analiza la distribución y los determinantes de los eventos relacionados con la salud para orientar acciones de prevención y control.',
          mensaje_incorrecto:
            'Revisa nuevamente el concepto, propósito e importancia de la epidemiología.',
        },
        {
          id: 9,
          texto:
            'Al caracterizar epidemiológicamente un brote, ¿qué permite analizar la variable “lugar”?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar dónde se concentran los casos y reconocer posibles áreas de exposición o transmisión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar exclusivamente la edad de las personas afectadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer cuándo comenzó el primer caso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar únicamente los síntomas de la enfermedad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado que la distribución espacial permite reconocer dónde se presentan o concentran los casos y orientar las medidas de control.',
          mensaje_incorrecto:
            'Revisa nuevamente la caracterización epidemiológica de los eventos según persona, tiempo y lugar.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la principal diferencia entre un EISP y un brote epidemiológico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todo EISP corresponde necesariamente a una epidemia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un EISP puede requerir vigilancia sin que necesariamente exista un brote o una epidemia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un brote nunca requiere investigación epidemiológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un EISP únicamente se presenta cuando existen múltiples casos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha comprendido que un evento de interés en salud pública puede abarcar desde un caso individual sujeto a vigilancia hasta eventos colectivos de mayor magnitud.',
          mensaje_incorrecto:
            'Revisa nuevamente las diferencias entre brote, epidemia y evento de interés en salud pública.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes condiciones puede favorecer la transmisión de enfermedades en un establecimiento penitenciario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La detección temprana de casos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La aplicación oportuna de medidas de aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El hacinamiento combinado con ventilación insuficiente y convivencia en espacios compartidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La implementación de procedimientos periódicos de limpieza y desinfección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido condiciones del entorno penitenciario que pueden incrementar la exposición y favorecer la propagación de enfermedades.',
          mensaje_incorrecto:
            'Revisa nuevamente los factores que favorecen la transmisión de enfermedades en entornos penitenciarios.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes acciones contribuye a disminuir los factores que favorecen la transmisión en los establecimientos penitenciarios?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar agua segura y mantener procedimientos periódicos de limpieza y desinfección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Limitar la vigilancia únicamente a las personas con diagnóstico confirmado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender las actividades de educación sanitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Esperar la aparición de varios casos antes de intervenir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado medidas ambientales y sanitarias que contribuyen a reducir la exposición a agentes infecciosos.',
          mensaje_incorrecto:
            'Revisa nuevamente las acciones preventivas orientadas a reducir los factores que favorecen la transmisión.',
        },
        {
          id: 13,
          texto:
            'Al detectar varios casos con síntomas similares en un mismo pabellón durante una semana, ¿cuál debe ser una acción inicial para identificar el evento epidemiológico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Esperar la confirmación de todos los casos antes de recopilar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Trasladar a toda la población del establecimiento a otro centro de reclusión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Suspender la vigilancia hasta identificar con certeza el agente causa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Realizar una valoración inicial del riesgo considerando personas afectadas, tiempo, lugar y posibles exposiciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha identificado que la valoración inicial del riesgo permite analizar tempranamente las características del posible evento y orientar la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué información debe analizarse durante la caracterización epidemiológica inicial de un evento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente los antecedentes clínicos de la primera persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tiempo, lugar, persona, factores de riesgo y posibles relaciones epidemiológicas entre los casos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente la infraestructura administrativa del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo los resultados de las pruebas de laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Has reconocido que la caracterización epidemiológica integra información de tiempo, lugar y persona, además de factores de riesgo y relaciones entre los casos.',
          mensaje_incorrecto:
            'Revisa nuevamente los elementos utilizados para caracterizar epidemiológicamente un evento.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la secuencia más adecuada dentro de la aplicación de un algoritmo diagnóstico según el componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Notificación, tratamiento, alta médica y búsqueda de síntomas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prueba diagnóstica, aislamiento, valoración administrativa y cierre del caso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Búsqueda de signos y síntomas, valoración clínica, análisis de criterios epidemiológicos y pruebas diagnósticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Tratamiento, notificación, valoración clínica y búsqueda de contactos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido la secuencia que integra detección clínica, valoración, antecedentes epidemiológicos y pruebas para orientar la clasificación del caso.',
          mensaje_incorrecto:
            'Revisa nuevamente los elementos y la secuencia planteada para aplicar los algoritmos de diagnóstico.',
        },
        {
          id: 16,
          texto:
            '¿Qué finalidad tienen las pruebas diagnósticas dentro del algoritmo de identificación de una enfermedad transmisible?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir completamente la valoración clínica y epidemiológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar las condiciones administrativas del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir automáticamente las medidas aplicables a todos los contactos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Apoyar la confirmación o el descarte del caso de acuerdo con el evento y los protocolos establecidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha identificado que las pruebas diagnósticas complementan la valoración clínica y epidemiológica para apoyar la confirmación o descarte del caso.',
          mensaje_incorrecto:
            'Revisa nuevamente la función de las pruebas dentro de los algoritmos diagnósticos.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es fundamental realizar oportunamente la notificación de un evento de interés en salud pública?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite activar la investigación epidemiológica, las medidas de control y la coordinación institucional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque reemplaza la necesidad de realizar la valoración clínica de los casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque elimina automáticamente el riesgo de aparición de nuevos casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite omitir la investigación cuando existe un caso sospechoso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha comprendido que una notificación oportuna facilita activar la investigación y coordinar las medidas necesarias para controlar la transmisión.',
          mensaje_incorrecto:
            'Revisa nuevamente cómo y cuándo deben notificarse los eventos de interés en salud pública.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes corresponde a una medida de salud pública prioritaria para disminuir la transmisión de enfermedades en la población privada de la libertad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Esperar la confirmación de un brote antes de iniciar cualquier intervención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la higiene de manos, la vacunación, la búsqueda activa de casos y el aislamiento oportuno cuando corresponda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Limitar la educación sanitaria exclusivamente al personal médico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Concentrar la respuesta únicamente en el tratamiento de los casos confirmados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Has reconocido medidas de salud pública que actúan sobre diferentes factores de riesgo y contribuyen a interrumpir la cadena epidemiológica.',
          mensaje_incorrecto:
            'Revisa nuevamente las principales medidas de salud pública aplicables en los establecimientos penitenciarios.',
        },
        {
          id: 19,
          texto:
            '¿Qué caracteriza a las acciones colectivas de prevención en los establecimientos penitenciarios?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se concentran exclusivamente en el tratamiento individual de las personas enfermas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se implementan únicamente cuando el brote ha terminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se dirigen a la comunidad penitenciaria e integran promoción de la salud, educación, participación, vigilancia y prevención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituyen las actividades de vigilancia epidemiológica y diagnóstico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado que las acciones colectivas trascienden la atención individual y buscan intervenir los riesgos que afectan a la comunidad penitenciaria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué estrategia fortalece la prevención colectiva de brotes en un establecimiento penitenciario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Concentrar la responsabilidad preventiva únicamente en el personal sanitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actuar sobre los riesgos solo después de que aparezca un brote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Excluir a la población privada de la libertad de las actividades preventivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promover educación, corresponsabilidad, autocuidado y participación de la población privada de la libertad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha comprendido que la participación, la educación y el autocuidado fortalecen las prácticas saludables y la prevención colectiva dentro del establecimiento.',
          mensaje_incorrecto:
            'Revisa nuevamente las estrategias de participación y prevención colectiva desarrolladas en el componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
