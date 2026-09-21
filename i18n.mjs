import {restoreChineseVariant,applyChineseVariant} from './chinese-variant.mjs?v=20260921-research-credits';
import {researchText} from './research-details.mjs?v=20260921-research-credits';
import {extraCopy} from './site-copy.mjs?v=20260921-research-credits';
const ui={
 en:{language:'Language',onThisPage:'On this page',home:'Overview',research:'Research',about:'About',publications:'Publications',reports:'Reports',design:'Design',engagement:'Talks & service',contact:'Contact',cv:'Curriculum vitae',accessibility:'Display settings',textSize:'Text size',contrast:'High contrast',motion:'Reduce motion',readAloud:'Read aloud',section:'Section',play:'Read',pause:'Pause',resume:'Resume',stop:'Stop',close:'Close',reset:'Reset reading preferences',openMenu:'Open navigation',closeMenu:'Close navigation',ready:'Ready to read the selected section.',reading:'Reading',paused:'Paused',finished:'Reading complete.',unavailable:'No voice is available for this language in this browser.',failed:'Reading could not start. Please try again or use your device screen reader.',researchDetail:'The research',findings:'What it shows',approach:'Approach',authors:'Authors / team',venue:'Publication / recognition',paper:'Read the paper',portfolio:'View the portfolio',report:'Read report (PDF)'},
 zh:{language:'语言',onThisPage:'页面导航',home:'概览',research:'研究',about:'研究与经历',publications:'学术论文',reports:'报告与实践成果',design:'设计作品',engagement:'学术交流与服务',contact:'联系',cv:'个人简历',accessibility:'显示设置',textSize:'字体大小',contrast:'高对比度',motion:'减少动画',readAloud:'页面朗读',section:'选择板块',play:'开始朗读',pause:'暂停',resume:'继续',stop:'停止',close:'关闭',reset:'恢复默认设置',openMenu:'打开导航',closeMenu:'关闭导航',ready:'可以朗读所选板块。',reading:'正在朗读',paused:'已暂停',finished:'朗读完成。',unavailable:'当前浏览器没有可用于此语言的语音。',failed:'朗读未能启动，请重试或使用设备的屏幕阅读器。',researchDetail:'研究与实践',findings:'主要发现',approach:'研究方法',authors:'作者 / 团队',venue:'发表 / 奖项',paper:'查看论文',portfolio:'查看作品集',report:'查看报告（PDF）'},
 es:{language:'Idioma',onThisPage:'En esta página',home:'Presentación',research:'Investigación',about:'Sobre mí',publications:'Publicaciones',reports:'Informes',design:'Diseño',engagement:'Charlas y servicio',contact:'Contacto',cv:'Currículum',accessibility:'Ajustes de visualización',textSize:'Tamaño del texto',contrast:'Alto contraste',motion:'Reducir movimiento',readAloud:'Lectura en voz alta',section:'Sección',play:'Leer',pause:'Pausar',resume:'Continuar',stop:'Detener',close:'Cerrar',reset:'Restablecer preferencias',openMenu:'Abrir navegación',closeMenu:'Cerrar navegación',ready:'Lista para leer la sección seleccionada.',reading:'Leyendo',paused:'En pausa',finished:'Lectura terminada.',unavailable:'Este navegador no dispone de una voz para este idioma.',failed:'No se pudo iniciar la lectura. Inténtalo de nuevo o usa el lector de pantalla del dispositivo.',researchDetail:'La investigación',findings:'Resultados',approach:'Métodos',authors:'Autores / equipo',venue:'Publicación / reconocimiento',paper:'Leer el artículo',portfolio:'Ver portafolio',report:'Leer informe (PDF)'}
};
// Selector bindings preserve the original English document as the fallback.
const copy=[
 ['.skip-link','跳转到正文','Saltar al contenido'],
 ['.profile-role','城市规划博士研究生｜交通与可达性研究','Doctoranda en Planificación Urbana'],
 ['.profile-affiliation','香港大学','Universidad de Hong Kong'],
 ['.profile-focus','适老城市，包容性出行。','Ciudades para todas las edades. Movilidad inclusiva.'],
 ['.profile-description','我的研究从一个简单的问题出发：如果城市规划默认所有人的出行能力都一样，会忽略什么？我的博士研究关注年龄如何改变步行速度、体力和日常出行所需的时间，以及这些变化如何影响老年人获得城市服务的机会。我利用出行数据与空间分析，研究地铁系统和社区环境中的旅行时间与可达性差异。合作研究则将这一视角延伸到极端高温下的出行不平等，以及气候适应型城市与交通规划。','Mi investigación parte de una pregunta sencilla: ¿qué pasa cuando planificamos la ciudad como si todas las personas se desplazaran de la misma manera? Mi doctorado examina cómo el envejecimiento cambia el tiempo y el esfuerzo de los viajes cotidianos, y qué diferencias dejan fuera las medidas convencionales de accesibilidad. Utilizo datos de movilidad y análisis espacial para estudiar estas diferencias en el metro y en los barrios. En mis investigaciones en colaboración, amplío esta perspectiva al calor extremo y a la planificación urbana y del transporte adaptada al clima.'],

 ['#research .section-number','01 / 研究','01 / Investigación'],['#research-heading','研究与实践。','Investigación y proyectos aplicados.'],['#research .section-note','精选研究与实践','Investigación y proyectos aplicados'],
 ['#about .section-number','02 / 研究与经历','02 / Sobre mí'],['#about-heading','研究与经历。','Trayectoria y formación.'],
 ['.about-lead','我的工作连接交通研究、空间分析与城市设计。','Mi trabajo conecta la investigación del transporte, el análisis espacial y el diseño urbano.'],['#about .text-link[href*="Shuyu-Lei-CV"]','查看简历','Ver currículum'],
 ['.about-copy>p:first-child','我结合出行数据和地理空间分析，以及问卷、访谈与实地观察，理解城市可达性中的差异。研究尤其关注老年人，以及在常规规划中需求容易被忽视的人群。','Combino datos de movilidad y análisis geoespacial con encuestas, entrevistas y observación de campo para comprender las diferencias de accesibilidad urbana. Me centro en las personas mayores y en grupos cuyas necesidades suelen quedar fuera de la planificación convencional.'],
 ['.about-copy>p:nth-child(2)','我的研究涵盖香港的适老公共交通、纽约的极端高温与地铁出行，以及内罗毕城市空间网络与多维贫困的关系。我希望将这些证据转化为更包容、更具气候适应能力的规划。','Mi investigación abarca el transporte adaptado a las personas mayores en Hong Kong, el calor extremo y el uso del metro en Nueva York, y la relación entre redes urbanas y pobreza multidimensional en Nairobi. Busco traducir esta evidencia en una planificación más inclusiva y adaptada al clima.'],
 ['.education>div:nth-child(1) dt','2023–至今','2023–actualidad'],['.education>div:nth-child(1) strong','城市规划博士','Doctorado en Planificación Urbana'],['.education>div:nth-child(1) dd span','香港大学 · 预计于 2027 年 2 月完成','Universidad de Hong Kong · Finalización prevista: febrero de 2027'],
 ['.education>div:nth-child(2) strong','城市规划硕士','Máster en Planificación Urbana'],['.education>div:nth-child(2) dd span','香港大学','Universidad de Hong Kong'],['.education>div:nth-child(3) strong','学术交换','Intercambio académico'],['.education>div:nth-child(3) dd span','米兰理工大学，意大利','Politecnico di Milano, Italia'],['.education>div:nth-child(4) strong','城乡规划工学学士','Grado en Planificación Urbana y Rural'],['.education>div:nth-child(4) dd span','深圳大学','Universidad de Shenzhen'],
 ['#publications .section-number','03 / 学术论文','03 / Publicaciones'],['#publications-heading','学术成果。','Publicaciones académicas.'],['#publications .section-intro','期刊与会议论文，题名保留原文。','Artículos y trabajos de congreso; títulos en su idioma original.'],
 ['#reports .section-number','04 / 报告与实践成果','04 / Informes y guías'],['#reports-heading','报告与实践成果。','Informes y guías.'],
 ['#design .section-number','05 / 设计','05 / Diseño'],['#design-heading','设计作品。','Diseño y obra creativa.'],['#design .section-heading .text-link','作品集与下载','Portafolio y descargas'],['#design .section-intro','香港、深圳与米兰的城市设计、社区规划及景观学生作品。','Selección de proyectos académicos de diseño urbano y paisaje, en Hong Kong, Shenzhen y Milán.'],
 ['#engagement .section-number','06 / 教学与实践','06 / Docencia y práctica'],['#engagement-heading','学术交流与服务。','Charlas, docencia y actividad académica.'],['.engagement-grid>div:first-child>h3','演讲与教学','Charlas y docencia'],['.engagement-grid>div:nth-child(2)>h3','政策实践与学术服务','Informes y servicio académico'],
 ['.engagement-grid>div:first-child .activity:nth-of-type(1) .activity-date','2024 年 1 月 · 华盛顿','Enero de 2024 · Washington, DC'],
 ['.engagement-grid>div:first-child .activity:nth-of-type(1) h4','TRB 年会','Reunión Anual del TRB'],['.engagement-grid>div:first-child .activity:nth-of-type(1) p','口头报告：迈向适老化车站设计（Towards Age-Friendly Station Design）。','Presentación oral: Towards Age-Friendly Station Design.'],
 ['.engagement-grid>div:first-child .activity:nth-of-type(2) .activity-date','2024 年 12 月 · 深圳','Diciembre de 2024 · Shenzhen'],['.engagement-grid>div:first-child .activity:nth-of-type(2) p','受邀在哈尔滨工业大学（深圳）国际设计学院进行 PechaKucha 演讲，分享适老化设计与研究。','Charla PechaKucha por invitación sobre investigación y diseño para personas mayores en la Escuela Internacional de Diseño del Instituto de Tecnología de Harbin, Shenzhen.'],
 ['.engagement-grid>div:first-child .activity:nth-of-type(3) h4','受邀教学','Clases invitadas'],['.engagement-grid>div:first-child .activity:nth-of-type(3) p','同济大学：交通与公共政策；上海财经大学：地理空间分析；西南财经大学：政策分析。','Transporte y políticas públicas en la Universidad de Tongji; análisis geoespacial en la Universidad de Finanzas y Economía de Shanghái; análisis de políticas en la Universidad de Finanzas y Economía del Suroeste.'],
 ['.engagement-grid>div:nth-child(2) .activity:nth-of-type(1) .activity-date','2024 与 2025','2024 y 2025'],['.engagement-grid>div:nth-child(2) .activity:nth-of-type(1) h4','绿色出行城市工具书','Manuales urbanos de movilidad sostenible'],['.engagement-grid>div:nth-child(2) .activity:nth-of-type(1) p','参与撰写《共享公共空间》和《全民友好出行》，通过 922 绿色出行平台发布。','Colaboración en la redacción de Shared Public Space e Inclusive Mobility, publicados por la plataforma 9.22 Green Mobility Platform.'],
 ['.engagement-grid>div:nth-child(2) .activity:nth-of-type(2) .activity-date','书稿编校中','Manuscrito en revisión editorial'],['.engagement-grid>div:nth-child(2) .activity:nth-of-type(2) h4','城市交通政策分析','Análisis de políticas de transporte urbano'],['.engagement-grid>div:nth-child(2) .activity:nth-of-type(2) p','参与与同济大学合作的《面向城市交通综合治理的政策分析：概念与方法》两个章节的研究与撰写。','Contribuciones de investigación y redacción a dos capítulos de Policy Analysis for Integrated Urban Transport Governance: Concepts and Methods, en colaboración con la Universidad de Tongji.'],
 ['.engagement-grid>div:nth-child(2) .activity:nth-of-type(3) h4','期刊审稿','Revisión por pares'],
 ['#contact .section-number','07 / 联系与合作','07 / Contacto'],['#contact h2','欢迎联系。','Contacto.'],['.footer-bottom>p','雷舒宇 · 香港大学','Shuyu Lei · Universidad de Hong Kong'],['.footer-bottom a[href="#home"]','回到顶部','Volver arriba']
];
const projectText={
 zh:[
 ['谁的十五分钟城市？','适老化可达性','从老年人的步行需求重新理解邻近性。','单一的步行时间阈值可能掩盖年龄群体间的重要差异。这项研究结合出行调查、设施位置与三维步行网络，建立考虑年龄差异的 X 分钟城市框架。','老年人多数日常步行出行在 5–12 分钟内完成，因年龄和目的地而异。识别这些差异有助于找到传统邻近性指标可能高估可达性的社区。','出行调查；年龄差异化步行阈值；GIS 网络分析；空间聚类。'],
 ['当高温改变出行','气候与弱势出行者','城市变热时，谁改变了地铁出行？','这项合作研究考察纽约极端高温期间不同群体的地铁客流变化，特别关注老年人和残障乘客。','老年人和残障乘客的客流降幅更大，周末尤为明显。结果提示气候适应型交通规划需要关注弱势乘客。','地铁客流分析；极端高温事件；乘客群体比较。'],
 ['机会的空间分布','空间网络与贫困','连接社区空间网络与多维贫困。','研究将内罗毕的地理编码家户调查与 16 项空间网络指标连接，比较理论驱动和数据驱动的方法。','网络密度和效率与较低的多维贫困相关，而空间割裂与更高风险相关。这些关联为研究社区连通性与生活条件提供线索，并不直接证明因果关系。','家户调查；街道网络指标；逻辑回归；XGBoost。'],
 ['看见出行时间差距','包容性公共交通','用智能卡数据理解老年人的地铁体验。','研究在控制混杂因素后，以老年人与年轻乘客的出行时间差异，评估车站和站点对的适老程度。','框架识别出老年乘客面临较大时间负担的位置，为人员协助、导向信息和无障碍路径等车站措施提供依据。','智能卡数据处理；聚类；统计建模；混杂因素控制；空间分析。'],
 ['更清凉的接驳之路','气候适应型城市设计','将热舒适纳入公交导向开发。','这项合作研究考察公交导向开发地区建成环境与热舒适之间的非线性及异质性关系。','建筑高度变化和植被比例等特征与热舒适相关，为连接城市环境分析与站区规划提供依据。','街景图像；语义分割；建成环境分析；非线性建模。'],
 ['City Connect 15+','应用 GIS 与城市可达性','关注年龄差异的日常目的地可达性。','这项合作原型结合三维步行网络、设施可达性、无障碍需求与天气场景，探索香港的十五分钟城市。','项目获得 2023 年香港空间数据共享平台大奖公开组优异奖。我参与空间研究、制图及视觉传达。','GIS 可达性建模；两步移动搜索法；三维步行网络；数据可视化。'],
 ['智慧社区','城市设计','探索社区、出行与共享空间的城市设计。','学生作品探索建成形态、公共空间与日常生活的关系，结合空间分析、总体规划与建筑可视化。','','城市设计；总体规划；空间图解；建筑可视化。'],
 ['The Loop','景观与城市连接','以景观组织城市连接。','在米兰理工大学交换期间完成的学生项目，探索米兰地区的景观、路径、绿地与城市形态之间的关系。','','景观规划；城市分析；制图；设计表达。'],
 ['多元空间','景观设计','以共享室外空间重新理解校园景观。','建筑与城市规划学院的景观改造方案，结合场地、种植与流线分析，探索学习环境和室外生活的联系。','','景观设计；场地分析；种植策略；可视化。']
 ],
 es:[
 ['¿De quién es la ciudad de 15 minutos?','Accesibilidad y envejecimiento','Repensar la proximidad desde las necesidades peatonales de las personas mayores.','Un único umbral de tiempo a pie puede ocultar diferencias entre edades. El estudio combina encuestas de viajes, ubicaciones de servicios y una red peatonal tridimensional para desarrollar un modelo de ciudad de X minutos sensible a la edad.','La mayoría de los desplazamientos cotidianos a pie de las personas mayores duran entre 5 y 12 minutos, según la edad y el destino. Estas diferencias ayudan a identificar barrios donde las medidas convencionales pueden sobreestimar la accesibilidad.','Encuestas de viajes; umbrales según edad; análisis de redes SIG; agrupación espacial.'],
 ['Cuando el calor cambia el viaje','Clima y viajeros vulnerables','¿Quién cambia sus viajes en metro cuando aumenta el calor?','Este estudio colaborativo analiza las diferencias de uso del metro de Nueva York durante episodios de calor extremo, con atención a las personas mayores y con discapacidad.','Las caídas de demanda son mayores entre estos grupos, especialmente los fines de semana. Los resultados destacan la necesidad de incorporar a los viajeros vulnerables en la adaptación climática del transporte.','Análisis de demanda del metro; episodios de calor extremo; comparación entre grupos.'],
 ['La geografía de las oportunidades','Redes espaciales y pobreza','Conectar las redes de los barrios con la pobreza multidimensional.','El estudio combina encuestas geocodificadas de hogares de Nairobi con 16 indicadores de redes espaciales y compara métodos basados en teoría y en datos.','La densidad y eficiencia de la red se asocian con menor pobreza multidimensional; la fragmentación se asocia con mayor riesgo. Son asociaciones, no pruebas de causalidad.','Encuestas de hogares; indicadores de calles; regresión logística; XGBoost.'],
 ['La brecha en los tiempos de viaje','Transporte público inclusivo','Datos de tarjetas inteligentes para entender la experiencia de las personas mayores.','La investigación evalúa estaciones y pares de estaciones mediante diferencias de tiempo de viaje entre personas mayores y jóvenes, controlando factores de confusión.','El método identifica lugares donde las personas mayores afrontan mayores penalizaciones de tiempo. Ofrece evidencia para mejorar la asistencia, la orientación y los itinerarios accesibles.','Tarjetas inteligentes; agrupación; modelos estadísticos; control de confusión; análisis espacial.'],
 ['Un camino más fresco al transporte','Diseño urbano y clima','Integrar el confort térmico en el desarrollo orientado al transporte.','Este estudio colaborativo examina relaciones no lineales y heterogéneas entre el entorno construido y el confort térmico en áreas orientadas al transporte público.','La variación de alturas de los edificios y la proporción de vegetación se relacionan con el confort térmico, conectando el análisis ambiental con la planificación de estaciones.','Imágenes de calle; segmentación semántica; entorno construido; modelos no lineales.'],
 ['City Connect 15+','SIG y accesibilidad urbana','Acceso cotidiano sensible a la edad.','Prototipo colaborativo para explorar la ciudad de 15 minutos en Hong Kong mediante redes peatonales 3D, acceso a servicios, accesibilidad universal y escenarios meteorológicos.','Recibió un premio al mérito en la categoría abierta de los Hong Kong CSDI Awards de 2023. Mi contribución conectó investigación espacial, cartografía y comunicación visual.','Modelos SIG; 2SFCA; redes peatonales 3D; visualización de datos.'],
 ['Smart Community','Diseño urbano','Explorar comunidad, movilidad y espacio compartido.','Proyecto académico sobre la relación entre forma construida, espacio público y vida cotidiana, combinando análisis espacial, planificación y visualización arquitectónica.','','Diseño urbano; planificación; diagramas espaciales; visualización arquitectónica.'],
 ['The Loop','Paisaje y conexiones urbanas','El paisaje como estructura de conexión urbana.','Proyecto académico desarrollado durante mi intercambio en el Politecnico di Milano, que explora rutas, espacios verdes y forma urbana en la región de Milán.','','Planificación del paisaje; análisis urbano; cartografía; comunicación del diseño.'],
 ['Multivariate Space','Diseño del paisaje','Reimaginar el paisaje del campus desde el espacio exterior compartido.','Propuesta de renovación paisajística de una escuela de arquitectura y urbanismo que combina análisis del lugar, vegetación, circulación y visualización.','','Diseño del paisaje; análisis del lugar; estrategia de vegetación; visualización.']
 ]
};
const reportText={
 zh:[['全民友好出行','绿色出行城市工具书','参与撰写','通过 922 绿色出行平台发布，探讨公平、包容和可持续的城市交通。','922 绿色出行平台'],['共享公共空间','绿色出行城市工具书','参与撰写','将共享公共空间、绿色出行与以人为本的街道设计相连接的规划与设计指南。','922 绿色出行平台'],['多模式交通数据共享','项目最终报告','报告贡献者 / 研究助理','参与香港大学牵头项目的国际交通政策比较，研究可信数据共享与香港综合公共交通。','项目主页'],['香港 2030+ 战略规划','Gr8T 规划工作室 / 香港大学','学生团队共同作者','城市规划硕士课程项目：比较八座城市的战略规划，提出公众参与、机构协调和监测方面的建议。','香港大学工作室项目']],
 es:[['Movilidad inclusiva','Manual urbano de movilidad sostenible','Colaboradora en la redacción','Manual sobre transporte urbano equitativo, inclusivo y sostenible, publicado por la plataforma 9.22 Green Mobility Platform.','9.22 绿色出行平台'],['Espacio público compartido','Manual urbano de movilidad sostenible','Colaboradora en la redacción','Orientaciones que conectan el espacio público compartido con la movilidad sostenible y las calles centradas en las personas.','9.22 绿色出行平台'],['Intercambio de datos de transporte intermodal','Informe final del programa','Colaboradora / Asistente de investigación','Comparación internacional de políticas en un programa de HKU sobre intercambio fiable de datos e integración del transporte público de Hong Kong.','Sitio del programa'],['Planificación estratégica para Hong Kong 2030+','Gr8T Planning Studio / HKU','Coautora del equipo estudiantil','Proyecto del máster: comparación de ocho ciudades y recomendaciones sobre participación, coordinación institucional y seguimiento.','Proyectos de HKU']]
};
reportText.zh.push(['适老九龙城社区规划','香港大学社区规划工作室','学生团队共同作者 · 汇报图纸与宣传展板','团队成果，结合问卷、利益相关者访谈和社区工作坊提出适老社区规划。','香港大学工作坊官网']);
reportText.es.push(['Planificación de Kowloon City para todas las edades','Taller de planificación comunitaria de HKU','Coautora del equipo · Planos y panel promocional','Plan del equipo, basado en encuestas, entrevistas y un taller comunitario.','Galería del taller de HKU']);

reportText.zh[0][3]='面向规划实践的工具书，以通用设计和公平出行为核心，介绍回应不同年龄及肢体、感官、认知能力的方法与案例。由 9.22 绿色出行平台组织编写，平台获中国城市规划设计研究院与中国城市规划学会共同支持。';
reportText.zh[1][3]='将共享公共空间、绿色出行与以人为本的街道设计相连接的实践指南。属于 9.22 绿色出行平台组织编写的年度工具书系列，平台获中国城市规划设计研究院与中国城市规划学会共同支持。';
reportText.zh[2][3]='Data Trust 1.0 最终报告：香港大学牵头、香港创新科技基金资助的概念验证项目。项目围绕交易广场，探索通过可信第三方机制共享铁路、巴士及支付数据，理解多模式出行。我的贡献集中于国际交通政策比较及报告编写。';
reportText.es[0][3]='Manual práctico sobre diseño universal y acceso equitativo al transporte, con métodos y casos para distintas edades y capacidades físicas, sensoriales y cognitivas. Organizado por la plataforma 9.22 Green Mobility Platform, apoyada por la China Academy of Urban Planning and Design y la Urban Planning Society of China.';
reportText.es[1][3]='Guía que conecta espacios públicos compartidos, movilidad sostenible y calles centradas en las personas. Forma parte de los manuales anuales de 9.22 Green Mobility Platform, plataforma apoyada por la China Academy of Urban Planning and Design y la Urban Planning Society of China.';
reportText.es[2][3]='Informe final de Data Trust 1.0, prueba de concepto liderada por HKU y financiada por el Innovation and Technology Fund de Hong Kong. Explora un tercero de confianza para compartir datos ferroviarios, de autobuses y pagos en Exchange Square. Mi contribución se centró en la comparación internacional de políticas y la redacción del informe.';
reportText.zh[3][3]='香港大学城市规划硕士工作室研究：战略空间规划如何制定、落实与评估？Gr8T 团队结合香港规划制度和八座国际城市案例，比较机构能力、公众参与、实施、适应性与监测，提出加强跨部门协调、衔接战略与地方规划、完善公众参与及评估机制的建议，为香港 2030+ 提供参考。';
reportText.es[3][3]='Estudio del máster de HKU sobre formulación, ejecución y evaluación de planes espaciales estratégicos. Gr8T comparó Hong Kong con ocho ciudades internacionales en capacidad institucional, participación, implementación, adaptabilidad y seguimiento. Propone coordinación interdepartamental, vínculos entre planes estratégicos y locales, y una planificación más inclusiva y evaluable para Hong Kong 2030+.';
let language='en';
const originals=new Map();
const storage={get(key){try{return localStorage.getItem(key);}catch{return null;}},set(key,value){try{localStorage.setItem(key,value);}catch{}}};
let chineseScript=storage.get('shuyu-chinese-script')||'cn';
function remember(el){if(!originals.has(el))originals.set(el,el.innerHTML);}
function replaceText(el,text){remember(el);const icons=[...el.querySelectorAll('svg,i[data-lucide]')].map(x=>x.cloneNode(true));el.replaceChildren(document.createTextNode(text),...icons);}
const extraLabels={award:['Award announcement','获奖公告','Anuncio oficial del premio'],projectBrief:['Project brief (PDF)','项目简介（PDF）','Resumen oficial (PDF)'],studioPage:['HKU studio gallery','香港大学工作坊官网','Galería del taller de HKU']};
extraLabels.hkuAward=['HKU award feature','港大获奖报道','Noticia del premio en HKU'];
function t(key){return extraLabels[key]?.[{en:0,zh:1,es:2}[language]]||ui[language][key]||ui.en[key]||key;}
function baseLocalProject(p,index){if(language==='en')return p;if(p.translations?.[language])return {...p,...p.translations[language]};const a=p.id==='kowloon'?(language==='zh'?['适老九龙城','社区规划工作室','社区参与、无障碍街道与原居安老。','香港大学社区规划工作室 URBP8001 的团队项目，结合问卷、利益相关者访谈与社区工作坊，提出适老社区规划。','我作为团队成员参与最终汇报图纸，并设计工作坊宣传展板。团队提出十二项涵盖社区连接、包容环境、跨代空间与健康生活的方案。','社区参与；问卷与访谈；空间规划；设计图纸；视觉表达。']:['Kowloon City para todas las edades','Taller de planificación comunitaria','Participación comunitaria, calles accesibles y envejecimiento en el propio barrio.','Proyecto de equipo del taller URBP8001 de HKU. Combina encuestas, entrevistas y un taller comunitario para elaborar un plan adaptado al envejecimiento.','Como integrante del equipo, contribuí a los planos de presentación final y diseñé el panel promocional del taller. El equipo propuso doce intervenciones sobre conectividad, inclusión, espacios intergeneracionales y bienestar.','Participación comunitaria; encuestas; entrevistas; planificación; dibujo y comunicación visual.']):projectText[language][index];return {...p,title:a[0],topic:a[1],deck:a[2],body:a[3],finding:a[4],methods:a[5],alt:a[0],place:({zh:{'Hong Kong':'香港','New York City':'纽约','Nairobi':'内罗毕','Station areas':'站区','Shenzhen':'深圳','Milan':'米兰'},es:{'Hong Kong':'Hong Kong','New York City':'Nueva York','Nairobi':'Nairobi','Station areas':'Áreas de estaciones','Shenzhen':'Shenzhen','Milan':'Milán'}})[language][p.place]||p.place,year:p.year==='Student work'?(language==='zh'?'学生作品':'Proyecto académico'):p.year};}
function localProject(p,index){const result=researchText(baseLocalProject(p,index),language);if(result.page){result.moreLabel={en:'View project & download',zh:'查看项目与下载',es:'Ver proyecto y descargar'}[language];if(result.id==='kowloon'&&language!=='en')result.role=result.finding;if(language!=='en'){if(result.year==='Student work')result.year=language==='zh'?'学生作品':'Proyecto académico';result.place=({zh:{'Design studio':'设计工作室',Shenzhen:'深圳',Milan:'米兰','Polesine, Italy':'意大利波莱西内','Shenzhen & Europe':'深圳及欧洲','Jiangzhou, China':'中国江州','Hong Kong':'香港'},es:{'Design studio':'Taller de diseño',Shenzhen:'Shenzhen',Milan:'Milán','Polesine, Italy':'Polesine, Italia','Shenzhen & Europe':'Shenzhen y Europa','Jiangzhou, China':'Jiangzhou, China','Hong Kong':'Hong Kong'}})[language][result.place]||result.place;}}if(language==='zh'&&['walking','transit'].includes(result.id))result.topic=result.id==='walking'?'适老可达性':'适老公共交通';if(language!=='en')result.alt=result.title+' · '+result.topic;return result;}
Object.assign(ui.en,{engagement:'Talks, teaching & service',accessibility:'Reading settings'});
ui.en.menuLabel='Menu';ui.zh.menuLabel='目录';ui.es.menuLabel='Menú';
ui.zh.accessibility='阅读显示设置';ui.es.accessibility='Ajustes de lectura';
Object.assign(ui.zh,{home:'概览',research:'研究与实践',about:'研究与经历',publications:'学术论文',reports:'报告与实践成果',design:'设计作品',engagement:'学术交流与服务',contact:'联系与合作',accessibility:'阅读设置'});
Object.assign(ui.es,{engagement:'Charlas, docencia y actividad académica',accessibility:'Ajustes de lectura'});
const revisedCopy={
 '.profile-focus':['适老城市，包容性出行。','Ciudades para todas las edades. Movilidad inclusiva.'],
 '.profile-description':['我的研究从一个简单的问题出发：如果城市规划默认所有人的出行能力都一样，会忽略什么？我的博士研究关注年龄如何改变步行速度、体力和日常出行所需的时间，以及这些变化如何影响老年人获得城市服务的机会。我利用出行数据与空间分析，研究地铁系统和社区环境中的旅行时间与可达性差异。合作研究则将这一视角延伸到极端高温下的出行不平等，以及气候适应型城市与交通规划。','Mi investigación parte de una pregunta sencilla: ¿qué pasa cuando planificamos la ciudad como si todas las personas se desplazaran de la misma manera? Mi doctorado examina cómo el envejecimiento cambia el tiempo y el esfuerzo de los viajes cotidianos, y qué diferencias dejan fuera las medidas convencionales de accesibilidad. Utilizo datos de movilidad y análisis espacial para estudiar estas diferencias en el metro y en los barrios. En mis investigaciones en colaboración, amplío esta perspectiva al calor extremo y a la planificación urbana y del transporte adaptada al clima.'],
 '.about-lead':['理解平均值背后的群体差异。','Comprender las diferencias detrás de los promedios.'],
 '.about-copy>p:first-child':['我的研究结合大规模出行数据、地理空间分析、问卷、访谈和实地观察，尤其关注总体可达性指标所掩盖的群体差异。','Combino datos masivos de movilidad y análisis geoespacial con encuestas, entrevistas y observación de campo. Me interesan los casos en los que las medidas agregadas de accesibilidad ocultan diferencias entre grupos.'],
 '.about-copy>p:nth-child(2)':['我的城乡规划训练从设计工作室起步，逐渐转向交通与可达性研究。我也通过地图、图纸和视觉表达，让复杂议题更容易被理解和讨论。绘画与速写一直是我观察地方的方式。','Mi formación en planificación urbana y rural comenzó en talleres de diseño y evolucionó hacia el transporte y la accesibilidad. Utilizo mapas, dibujos y narrativas visuales para comunicar ideas complejas. La pintura y el dibujo siguen siendo parte de mi manera de observar los lugares.'],
 '#engagement .section-number':['06 / 学术交流与服务','06 / Charlas, docencia y actividad académica']
};

Object.assign(revisedCopy,{
 '.about-lead':['规划、研究与设计。','Planificación, investigación y diseño.'],
 '.about-copy>p:first-child':['我结合出行数据、空间分析、问卷、访谈和实地观察开展研究，关注城市整体平均值容易忽略的差异：同一套交通系统、同一个社区，对不同人意味着什么。','Combino datos de movilidad y análisis espacial con encuestas, entrevistas y observación de campo. Me interesa lo que los promedios urbanos pueden ocultar: cómo un mismo sistema de transporte o barrio funciona de forma distinta para diferentes personas.'],
 '.about-copy>p:nth-child(2)':['我接受了以设计为重点的城乡规划训练，如今将这一视角带入交通、可达性与政策研究。地图和图纸是我表达研究的工具，绘画与速写也是我观察地方的方式。','Mi formación en planificación urbana y rural tiene un enfoque de diseño, que ahora aplico a la investigación del transporte, la accesibilidad y las políticas urbanas. Los mapas y dibujos me ayudan a comunicar mi trabajo; la pintura y el dibujo también forman parte de mi manera de observar los lugares.'],
 '.profile-description':['我的研究从一个简单的问题出发：如果城市规划默认所有人的出行能力都一样，会忽略什么？我的博士研究关注年龄如何改变步行速度、体力和日常出行所需的时间，以及这些变化如何影响老年人获得城市服务的机会。我利用出行数据与空间分析，研究地铁系统和社区环境中的旅行时间与可达性差异。合作研究则将这一视角延伸到极端高温下的出行不平等，以及气候适应型城市与交通规划。','Mi investigación parte de una pregunta sencilla: ¿qué pasa cuando planificamos la ciudad como si todas las personas se desplazaran de la misma manera? Mi doctorado examina cómo el envejecimiento cambia el tiempo y el esfuerzo de los viajes cotidianos, y qué diferencias dejan fuera las medidas convencionales de accesibilidad. Utilizo datos de movilidad y análisis espacial para estudiar estas diferencias en el metro y en los barrios. En mis investigaciones en colaboración, amplío esta perspectiva al calor extremo y a la planificación urbana y del transporte adaptada al clima.'],
 '#research .section-note':['可达性、出行与气候','Accesibilidad, movilidad y clima'],
 '#about-heading':['研究与经历。','Trayectoria y formación.'],
 '#publications .section-intro':['经同行评审的期刊与会议论文。','Artículos de revista y de congreso revisados por pares.'],
 '#design .section-intro':['城市设计、景观与住宅课程作品，以及个人绘画与摄影。','Proyectos académicos de diseño urbano, paisaje y vivienda, junto con pintura y fotografía.'],
 '.engagement-grid>div:nth-child(2)>h3':['政策实践与学术服务','Contribuciones a políticas y revisión por pares'],
 '.engagement-grid>div:nth-child(2) .activity:nth-of-type(1) h4':['绿色出行城市工具书','Manuales de movilidad urbana'],
 '.engagement-grid>div:nth-child(2) .activity:nth-of-type(1) p':['参与撰写《共享公共空间》和《全民友好出行》，由 9.22 绿色出行平台组织发布。','Coautora de Shared Public Space e Inclusive Mobility, publicados por la iniciativa de movilidad sostenible 9.22 Green Mobility Platform.'],
 '.engagement-grid>div:nth-child(2) .activity:nth-of-type(3) h4':['期刊审稿','Revisión por pares']
});
for(const lang of ['zh','es']){
 reportText[lang][0][1]=lang==='zh'?'绿色出行城市工具书':'Manual de movilidad urbana';
 reportText[lang][1][1]=reportText[lang][0][1];
 reportText[lang][0][2]=reportText[lang][1][2]=lang==='zh'?'参与撰写':'Coautora';
 reportText[lang][0][4]=reportText[lang][1][4]=lang==='zh'?'9.22 绿色出行平台':'Plataforma 9.22 de Movilidad Sostenible';
}
reportText.zh[0][3]='面向规划实践的工具书，讨论如何让不同年龄、不同身体条件的人更方便地使用城市交通，汇集通用设计方法与包容性交通服务案例。由 9.22 绿色出行平台组织发布，平台获中国城市规划设计研究院和中国城市规划学会共同支持。';
reportText.zh[1][3]='面向规划与设计实践的指南，探讨共享公共空间如何支持步行、骑行及日常社区生活。由 9.22 绿色出行平台组织发布，属于中规院与中国城市规划学会共同支持的年度工具书系列。';
reportText.zh[2][1]='Data Trust 1.0 · 最终报告';
reportText.zh[2][2]='研究助理 · 参与报告编写';
reportText.zh[2][3]='香港大学牵头、香港创新科技基金资助的试点项目。Data Trust 1.0 探索由可信第三方整合交易广场周边的铁路、巴士与支付数据，以理解涉及多种交通方式的出行。我参与国际政策比较与报告编写。';
reportText.zh[3][1]='香港大学城市规划硕士 · 战略规划工作室';
reportText.zh[3][2]='学生团队共同作者';
reportText.zh[3][3]='长期空间规划如何落实到具体决策？我们回顾香港规划制度，并比较八座国际城市的经验，提出加强跨部门协作、衔接不同层级规划、完善公众参与和监测评估的建议，为香港 2030+ 提供参考。';
reportText.zh[4][1]='香港大学城市规划硕士 · 社区规划工作室';
reportText.zh[4][2]='团队共同作者 · 汇报图纸与工作坊宣传设计';
reportText.zh[4][3]='九龙城如何更好地支持居民原居安老？我们结合街头社区参与、问卷、访谈及 2020 年 11 月的社区工作坊，形成适老社区规划。我参与最终汇报图纸，并设计工作坊宣传展板。';
reportText.es[0][3]='Manual práctico para facilitar el transporte urbano a personas de distintas edades y capacidades. Reúne criterios de diseño universal y ejemplos de servicios inclusivos. Publicado por 9.22 Green Mobility Platform, iniciativa apoyada por la China Academy of Urban Planning and Design y la Urban Planning Society of China.';
reportText.es[1][3]='Guía práctica sobre espacios públicos compartidos que favorecen caminar, ir en bicicleta y la vida del barrio. Forma parte de los manuales anuales de 9.22 Green Mobility Platform, con el apoyo de la China Academy of Urban Planning and Design y la Urban Planning Society of China.';
reportText.es[2][1]='Data Trust 1.0 · Informe final';
reportText.es[2][2]='Asistente de investigación · Colaboradora del informe';
reportText.es[3][1]='Máster en Planificación Urbana de HKU · Taller de planificación estratégica';
reportText.es[4][1]='Máster en Planificación Urbana de HKU · Taller de planificación comunitaria';

Object.assign(revisedCopy,{
 '.about-lead':['我的工作连接交通研究、空间分析与城市设计。','Mi trabajo conecta la investigación del transporte, el análisis espacial y el diseño urbano.'],
 '.about-copy>p:first-child':['我结合出行数据与地理空间分析、问卷、访谈和实地观察，研究不同群体与城市情境中的可达性差异。我的工作主要关注老年人，以及其他出行需求未被传统规划方法充分反映的出行者。','Combino datos de movilidad y análisis geoespacial con encuestas, entrevistas y observaciones de campo para examinar cómo varía la accesibilidad entre grupos de población y contextos urbanos. Gran parte de mi trabajo se centra en las personas mayores y otros viajeros cuyas necesidades no quedan bien reflejadas en los enfoques convencionales de planificación.'],
 '.about-copy>p:nth-child(2)':['我的研究涵盖香港的适老公共交通、纽约极端高温下的地铁出行，以及内罗毕城市空间网络与多维贫困的关系。我希望这些研究能帮助交通与城市规划更好地回应不同人群的需要，并应对气候变化带来的挑战。','Mi investigación abarca el transporte público adaptado a las personas mayores en Hong Kong, el calor extremo y el uso del metro en Nueva York, y los vínculos entre redes espaciales urbanas y pobreza multidimensional en Nairobi. En estos contextos, examino cómo la evidencia empírica puede apoyar una planificación más inclusiva y adaptada al clima.'],
 '#publications-heading':['学术论文','Publicaciones'],
 '.engagement-grid>div:nth-child(2) .activity:nth-of-type(1) p':['参与撰写，2024–2025 年。','Colaboración en la redacción, 2024–2025.'],
 '.engagement-grid>div:nth-child(2) .activity:nth-of-type(2) h4':['面向城市交通综合治理的政策分析','Policy Analysis for Integrated Urban Transport Governance']
});
copy.push(...[[".work-grid article:nth-child(1) .activity-date","2025 年 11 月–至今","Nov 2025–actualidad"],[".work-grid article:nth-child(2) .activity-date","2021 年 5 月–2023 年 11 月","May 2021–Nov 2023"],[".work-grid article:nth-child(3) .activity-date","2020 年 7 月–2021 年 2 月","Jul 2020–Feb 2021"],[".work-grid article:nth-child(2) p:first-of-type","香港大学深圳研究院","Instituto de Investigación e Innovación de HKU en Shenzhen"],["#iacp-talk .activity-date","2024 年 7 月 7 日 · 中国杭州","7 de julio de 2024 · Hangzhou, China"],["#iacp-talk h4","国际中国规划学会（IACP）第 18 届年会","18.ª Conferencia Anual de la International Association for China Planning (IACP)"],["#trb-talk .activity-date","2024 年 1 月 10 日 · 美国华盛顿","10 de enero de 2024 · Washington, DC, EE. UU."],["#trb-talk h4","美国交通研究委员会（TRB）第 103 届年会","103.ª Reunión Anual del TRB"],["#prague-talk .activity-date","2023 年 5 月 25 日 · 捷克布拉格","25 de mayo de 2023 · Praga"],["#prague-talk h4","布拉格智慧城市研讨会","Simposio de Ciudades Inteligentes de Praga"],[".profile-links a[href*=\"Shuyu-Lei-CV\"]","简历","CV"],[".profile-links a[href*=\"outlook\"]","邮件","Correo"],[".lecture-grid .activity:nth-child(1) .activity-date","2024 年 7 月 4 日","4 de julio de 2024"]]);
copy.push(['.lecture-grid .activity:nth-child(2) .activity-date','2024 年 6 月 11 日','11 de junio de 2024']);
reportText.zh[0][3]='面向规划与实践的城市出行工具书，从通用设计、交通服务、车辆与基础设施及出行信息等方面，讨论如何回应不同年龄、身体能力与经济条件人群的出行需求。由 922 绿色出行平台组织撰写，中国城市规划设计研究院与中国城市规划学会共同支持。';
reportText.es[0][3]='Manual práctico sobre movilidad para todas las personas. Relaciona el diseño universal con la planificación y los servicios de transporte, considerando diferencias de edad, capacidades y condiciones socioeconómicas. Organizado por la plataforma 9.22 Green Mobility Platform, con el apoyo de la China Academy of Urban Planning and Design y la Urban Planning Society of China.';
reportText.zh[1][3]='从交通规划角度讨论如何更公平地分配和使用道路与公共空间，支持步行、自行车、公共交通和社区日常活动，关注街道安全、包容性使用和居民参与。由 922 绿色出行平台组织撰写，中国城市规划设计研究院与中国城市规划学会共同支持。';
reportText.es[1][3]='Guía para redistribuir y recuperar calles y espacios públicos para caminar, ir en bicicleta, utilizar el transporte público y participar en la vida del barrio. Presta atención a la seguridad vial, el acceso inclusivo y la participación vecinal. Publicada a través de 9.22 Green Mobility Platform.';
reportText.zh[4][2]='学生团队共同作者 · 最终汇报图件与工作坊海报';
reportText.zh[4][3]='九龙城如何支持居民随着年龄增长，继续在熟悉的社区生活？团队通过街头调研、问卷、利益相关者访谈及 2020 年 11 月的社区规划工作坊，形成适老社区规划方案。我参与最终汇报图件，并设计工作坊宣传海报。';
reportText.es[4][2]='Coautora del equipo · Láminas de presentación y cartel del taller';
reportText.es[4][3]='Proyecto de planificación comunitaria de HKU sobre cómo facilitar que las personas sigan viviendo en su barrio al envejecer. El equipo combinó trabajo de campo, encuestas, entrevistas y un taller en noviembre de 2020. Mi contribución incluyó las láminas finales y el cartel del taller.';
for(const row of copy){
 if(revisedCopy[row[0]])row.splice(1,2,...revisedCopy[row[0]]);
 if(row[0].endsWith('-heading')||row[0]==='#contact h2')for(let i=1;i<row.length;i++)row[i]=row[i].replace(/[.。]$/,'');
}
function setLanguage(next){
 restoreChineseVariant();
 language=ui[next]?next:'en';document.documentElement.lang=language==='zh'?'zh-CN':language;storage.set('shuyu-language',language);
 document.querySelector('#language-select').value=language;
 const identityCaption=document.querySelector('.identity-caption');if(identityCaption)identityCaption.textContent={en:'Personal website',zh:'个人网站',es:'Sitio personal'}[language];
 document.querySelector('.top-navigation')?.setAttribute('aria-label',t('onThisPage'));
 const traditional=language==='zh'&&chineseScript==='hk';
 document.querySelector('.script-switch').hidden=language!=='zh';
 document.querySelectorAll('[data-script]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.script===(traditional?'hk':'cn'))));
 document.querySelector('#script-status').textContent='';
 const compactLabels={en:['Listen','Theme','Display','Menu'],es:['Leer','Tema','Vista','Menú'],zh:['朗读','主题','阅读设置','目录']}[language];
 ['#read-aloud-toggle','#night-toggle','#accessibility-toggle','.menu-toggle'].forEach((selector,i)=>{const label=document.querySelector(selector+' span');if(label)label.dataset.mobileLabel=compactLabels[i];});
 document.querySelectorAll('a[href*="linkedin.com/in/"]').forEach(link=>{link.href=language==='zh'?'https://hk.linkedin.com/in/shuyu-lei-37aa6a1b3/?locale='+(traditional?'zh_TW':'zh_CN'):'https://hk.linkedin.com/in/shuyu-lei-37aa6a1b3/en';});
 document.querySelectorAll('[data-ui]').forEach(el=>{el.textContent=t(el.dataset.ui);});
 for(const [selector,zh,es] of copy.filter(row=>!row[0].startsWith('.engagement-grid>div:first-child')))document.querySelectorAll(selector).forEach(el=>{remember(el);if(language==='en')el.innerHTML=originals.get(el);else replaceText(el,language==='zh'?zh:es);});
 document.querySelectorAll('.report-item').forEach(el=>{const index=Number(el.dataset.reportIndex);
  const selectors=['h3','.report-series','.report-role','.report-description','.report-links>a:last-child'];
  selectors.forEach((selector,i)=>{const node=el.querySelector(selector);remember(node);if(language==='en')node.innerHTML=originals.get(node);else replaceText(node,reportText[language][index][i]);});
  const meta=el.querySelector('.report-meta');remember(meta);
  const originalMeta=originals.get(meta);meta.textContent=originalMeta.replace('Chinese',({en:'Chinese',zh:'中文',es:'Chino'})[language]).replace('English',({en:'English',zh:'英文',es:'Inglés'})[language]);
  const title=el.querySelector('h3').textContent;
  replaceText(el.querySelector('.report-links>a:first-child'),t('report'));
  el.querySelectorAll('a[aria-label]').forEach(a=>a.setAttribute('aria-label',`${t('report')}: ${title}`));
  el.querySelector('img').alt=title;
 });
 document.querySelectorAll('[data-extra]').forEach(el=>{el.textContent=extraCopy[el.dataset.extra][{en:0,zh:1,es:2}[language]];});
 document.querySelectorAll('.publication').forEach(el=>el.lang='en');
 for(const [selector,key] of [['#read-aloud-toggle','readAloud'],['#accessibility-toggle','accessibility'],['#accessibility-close','close'],['.dialog-close','close'],['.nav-backdrop','closeMenu'],['#read-pause','pause'],['#read-stop','stop']]){
  const el=document.querySelector(selector);if(!el)continue;el.setAttribute('aria-label',t(key));el.title=t(key);
 }
 document.querySelector('#navigation')?.setAttribute('aria-label',t('onThisPage'));
 const menu=document.querySelector('.menu-toggle');if(menu){menu.setAttribute('aria-label',t(menu.getAttribute('aria-expanded')==='true'?'closeMenu':'openMenu'));menu.title=menu.getAttribute('aria-label');}
 document.title=language==='zh'?'雷舒宇 | 城市规划与交通研究':language==='es'?'Shuyu Lei | Planificación urbana y movilidad':'Shuyu Lei | Urban Planning & Mobility Research';
 document.dispatchEvent(new CustomEvent('languagechange',{detail:language}));
 applyChineseVariant(traditional);
}
function initLanguage(){document.querySelectorAll('[data-script]').forEach(button=>button.addEventListener('click',()=>{chineseScript=button.dataset.script;storage.set('shuyu-chinese-script',chineseScript);setLanguage('zh');}));document.querySelector('#language-select').addEventListener('change',e=>setLanguage(e.target.value));setLanguage(storage.get('shuyu-language')||'en');}
export {t,localProject,initLanguage,storage};
