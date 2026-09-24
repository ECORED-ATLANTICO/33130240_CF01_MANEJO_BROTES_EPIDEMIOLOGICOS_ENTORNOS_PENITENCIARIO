export default {
  global: {
    Name: 'Identificación, caracterización y gestión de brotes epidemiológicos en entornos penitenciarios',
    Description:
      'Este componente formativo aborda los fundamentos teóricos, conceptuales y normativos relacionados con los brotes epidemiológicos en entornos penitenciarios, fortaleciendo los conocimientos necesarios para comprender su ocurrencia y propagación. Asimismo, orienta el desarrollo de habilidades para identificar, manejar, mitigar y controlar brotes epidemiológicos en los Establecimientos de Reclusión del Orden Nacional (ERON), mediante la aplicación de lineamientos, protocolos y normatividad vigente en salud pública.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad y conceptos básicos en epidemiologia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Normatividad en manejo de brotes epidemiológicas y medidas de salud en entornos penitenciarios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Como funciona el sistema penitenciario y carcelario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Que es salud y sus determinantes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Historia natural de enfermedad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Microorganismo y cadena de transmisión',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Fundamentos epidemiológicos y factores asociados a la transmisión de enfermedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto e importancia de la epidemiologia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Diferencias entre el concepto brote, epidemia y evento de interés en salud pública (EISP)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Factores que favorecen la transmisión en entornos penitenciarios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión y acciones de respuesta ante eventos epidemiológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Realizar acciones de identificación del evento epidemiológico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicar algoritmos de diagnóstico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Establecer cómo y cuándo notificar',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Implementar medidas de salud pública',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Ejecutar acciones colectivas de prevención',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130240_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Caracterización del evento',
      significado:
        'Análisis de un evento epidemiológico mediante las variables de tiempo, lugar y persona, con el propósito de comprender su comportamiento, identificar factores de riesgo y orientar las acciones de prevención y control.',
    },
    {
      termino: 'Caso sospechoso',
      significado:
        'Persona que presenta signos, síntomas o antecedentes compatibles con una enfermedad o evento de interés en salud pública y que requiere evaluación y seguimiento.',
    },
    {
      termino: 'Detección temprana',
      significado:
        'Identificación oportuna de casos o comportamientos inusuales de una enfermedad con el fin de iniciar rápidamente las acciones de investigación y control.',
    },
    {
      termino: 'Evento epidemiológico',
      significado:
        'Situación relacionada con la aparición de uno o más casos de una enfermedad o condición de salud que requiere vigilancia, análisis e intervención por parte de las autoridades sanitarias.',
    },
    {
      termino: 'Investigación epidemiológica',
      significado:
        'Conjunto de actividades orientadas a confirmar un evento, identificar su origen, describir sus características y establecer las medidas necesarias para controlar su propagación.',
    },
    {
      termino: 'Notificación',
      significado:
        'Comunicación oportuna de un caso o evento de interés en salud pública a las autoridades competentes, de acuerdo con los protocolos y la normatividad vigente.',
    },
    {
      termino: 'Vigilancia epidemiológica',
      significado:
        'Proceso continuo y sistemático de recolección, análisis, interpretación y difusión de información sobre eventos de interés en salud pública para orientar la toma de decisiones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal, C. (s. f.). <em>Fundamentos de epidemiología: Eje 1. Conceptualicemos</em> [Referente de pensamiento].',
    },
    {
      referencia:
        'Conceptos básicos de epidemiología. (s. f.). <em>Conceptos básicos de epidemiología</em> [Capítulo de libro].',
    },
    {
      referencia:
        'Leavell, H. R., & Clark, E. G. (1965). <em>Preventive medicine for the doctor in his community: An epidemiologic approach</em> (3rd ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Guía de vigilancia y control de salud pública para población privada de la libertad</em>.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Lineamientos generales para la vigilancia y control de eventos de interés en salud pública en establecimientos penitenciarios y carcelarios – Colombia 2012</em>.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Manejo de brotes en población privada de la libertad (PPL)</em> [Documento técnico]. Documento adjunto.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). <em>Lineamiento para el fortalecimiento de las acciones de prevención de enfermedades transmisibles generadoras de brotes en población privada de la libertad</em>. Ministerio de Salud y Protección Social.',
    },
    {
      referencia:
        'Mosquera Agualimpia, C. J. (2025). <em>Microorganismos y cadena de transmisión</em> [Presentación de PowerPoint]. SENA.',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2023). <em>Principles for making prisons and places of detention resilient to infectious diseases, including epidemic and pandemic threats</em>. WHO Regional Office for Europe.',
    },
    {
      referencia:
        'Patiño, C. P., & Mosquera, C. J. (2025). <em>Proceso salud-enfermedad</em> [Presentación de PowerPoint].',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
