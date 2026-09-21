const translations=(en,zh,es)=>({en,zh,es});
export const researchDetails={
 walking:{authorship:'first',labels:translations(['Age-specific walking accessibility','Rethinking the X-minute city for older adults.'],['年龄差异与步行可达性','重新思考老年人的 X 分钟城市。'],['Accesibilidad peatonal según la edad','Repensar la ciudad de X minutos para las personas mayores.']),gallery:[{image:'walking-network.webp',caption:'Hong Kong’s three-dimensional pedestrian network. Figure 3, Lei et al. (2026), Journal of Transport Geography.'},{image:'walking-framework.webp',caption:'Age-specific route choices. Figure 5, Lei et al. (2026).'}, {image:'walking-needs.webp',caption:'Walking durations and destination frequencies across ages and needs. Figure 8, Lei et al. (2026).'}, {image:'walking-priority.webp',caption:'How different age and time assumptions change the areas identified as worst-off. Figure 12, Lei et al. (2026).'}, {image:'walking-isochrones.webp',caption:'Age-specific pedestrian catchments. Lei et al. (2026), Journal of Transport Geography, PDF page 14.'},{image:'walking.webp',caption:'Spatial clustering of older-adult population and accessibility. Lei et al. (2026), Journal of Transport Geography.'}]},
 transit:{authorship:'first',labels:translations(['Age differences in metro travel time','Using smart-card data to identify age-related travel-time differences across metro journeys.'],['地铁出行时间的年龄差异','利用智能卡数据识别地铁行程中不同年龄群体的出行时间差异。'],['Diferencias de tiempo de viaje según la edad','Datos de tarjetas inteligentes para identificar diferencias en los tiempos de viaje en metro según la edad.']),gallery:[{"image":"transit-concept.webp","caption":"Travel-time differences as a proxy for age-friendliness. Figure 1, Lei et al. (2026), Transportation Research Part A: Policy and Practice."},{"image":"transit-workflow.webp","caption":"From smart-card records to traveller groups, travel-time comparisons and station-level analysis. Figure 2, Lei et al. (2026)."},{"image":"transit-hourly.webp","caption":"Hourly boardings by age and travel-frequency group on weekdays and weekends. Figure 4, Lei et al. (2026)."},{"image":"transit-distributions.webp","caption":"Variation in older adults’ travel times relative to younger adults. Figure 6, Lei et al. (2026)."},{"image":"transit-environment.webp","caption":"Travel-time disparities in relation to station complexity and pedestrian facilities. Figure 8, Lei et al. (2026)."}]},
 heat:{authorship:'second',labels:translations(['Extreme heat and subway ridership','Comparing ridership responses across passenger groups in New York City.'],['极端高温与地铁客流','比较纽约不同乘客群体在极端高温下的客流变化。'],['Calor extremo y demanda del metro','Comparación de respuestas entre grupos de pasajeros en Nueva York.']),gallery:[{image:'heat-hourly-groups.webp',caption:'Hourly ridership by fare group during extreme-heat and non-extreme-heat periods. Figure 7, Zhao et al. (2026).'}, {image:'heat-effects.webp',caption:'Extreme-heat coefficients and 95% confidence intervals across periods and groups. Figure 8, Zhao et al. (2026).'}, {image:'heat-station-changes.webp',caption:'Station-level ridership changes during extreme heat. Figure 10, Zhao et al. (2026).'}, {image:'heat.webp',caption:'New York City subway network and study area. Figure 1, Zhao et al. (2026), npj Sustainable Mobility and Transport.'}]},
 thermal:{authorship:'second',labels:translations(['Thermal comfort in transit-oriented development','Identifying where building form and vegetation can inform heat-sensitive station-area design.'],['公交导向开发中的热舒适','识别建筑形态与植被可为站区降温设计提供的线索。'],['Confort térmico y desarrollo orientado al transporte','Identificar cómo la forma de los edificios y la vegetación pueden orientar el diseño térmico de las áreas de estación.']),gallery:[{image:'thermal-intensity.webp',caption:'Shanghai 90th-percentile MTHI distribution, 2015–2024. Figure 5, Zhao, Lei & Li (2026).'}, {image:'thermal-relationships.webp',caption:'Nonlinear relationships between TOD indicators and thermal conditions. Figure 10, Zhao, Lei & Li (2026).'}, {image:'thermal-station-outcomes.webp',caption:'Station areas classified by ridership and thermal comfort outcomes. Figure 17, Zhao, Lei & Li (2026).'}, {image:'thermal-sky.webp',caption:'Environmental image analysis. Zhao et al. (2026), Sustainable Cities and Society, PDF page 8.'}]},
 poverty:{authorship:'second',labels:translations(['Street networks and multidimensional poverty','Linking household survey evidence with street-network measures to locate patterns of urban disadvantage.'],['街道网络与多维贫困','结合家庭调查与街道网络指标，识别城市中贫困与空间不利条件的分布。'],['Redes viarias y pobreza multidimensional','Combinar encuestas de hogares e indicadores viarios para identificar patrones de desventaja urbana.']),gallery:[{image:'poverty.webp',caption:'Spatial distribution of multidimensional poverty. Figure 3, Gachanja, Lei & Adero (2025).'}, {image:'poverty-shap.webp',caption:'Variation in predictor contributions. Figure 5, Gachanja, Lei & Adero (2025).'}, {image:'poverty-importance.webp',caption:'Average feature contributions in the data-driven model. Figure 6, Gachanja, Lei & Adero (2025).'}, {image:'poverty-framework.webp',caption:'Study framework. Gachanja, Lei & Adero (2025), Applied Geography, Figure 1.'}]},
 'city-connect':{authorship:'team',gallery:[{"image":"city-connect-snapshot.webp","caption":"1. Hong Kong Snapshot: facility distribution and demographics. ESG Connector team, final presentation (2023), slide 25."},{"image":"city-connect-routing-function.webp","caption":"2. 15-Minute Route Searching: walking pace, weather and reachable facilities. ESG Connector team, final presentation (2023), slide 27."},{"image":"city-connect-index-function.webp","caption":"3. 15-Minute City Index: accessibility and customisable facility weights. ESG Connector team, final presentation (2023), slide 29."},{"image":"city-connect-feedback.webp","caption":"4. Pedestrian Power: route-level feedback and walking conditions. ESG Connector team, final presentation (2023), slide 32."},{"image":"city-connect-community.webp","caption":"5. Community Connect: questionnaires, discussion and information sharing. ESG Connector team, final presentation (2023), slide 34."},{"image":"city-connect-supply-demand.webp","caption":"Accessibility, population and spatial mismatch. ESG Connector team, final presentation (2023), slide 30."},{"image":"city-connect-methodology.webp","caption":"Spatial data, routing and accessibility workflow. ESG Connector team, final presentation (2023), slide 40."}]}
};
const questions={
 walking:['How many minutes make an age-friendly city?','多长的步行时间才适合老年人？','¿Cuántos minutos hacen una ciudad accesible para mayores?'],
 transit:['How can we quantify the age-friendliness of metro stations?','如何定量评估地铁站的适老化程度？','¿Cómo cuantificar la adaptación de las estaciones de metro a las personas mayores?'],
 heat:['Who travels less during extreme heat?','极端高温下，谁的出行减少更多？','¿Quién viaja menos durante el calor extremo?'],
 thermal:['How does the urban environment relate to heat around metro stations?','地铁站周边的建成环境与热舒适有什么关系？','¿Cómo mejorar el confort térmico alrededor del metro de Shanghái?'],
 poverty:['How do street networks relate to poverty?','街道网络与多维贫困有什么关联？','¿Cómo se relacionan las redes viarias con la pobreza?']
};
const cityCopy={
 en:{deck:'Exploring a 15-minute city through Hong Kong’s geospatial data.',body:'City Connect 15+ is a team-developed web application that lets users explore and analyse Hong Kong geospatial data through the 15-minute-city concept. It connects access to essential services and amenities with environmental, social and governance (ESG) goals, supporting more liveable and sustainable neighbourhoods.',finding:'Weipeng Deng, Shuyu Lei and teammates Chi Chiu Cheng and Jin Zhang received a Merit Award in the Open Category of the Common Spatial Data Infrastructure (CSDI) Awards 2023, organised by the Development Bureau’s Geospatial Lab.'},
 zh:{deck:'利用香港空间数据探索 15 分钟城市。',body:'City Connect 15+ 是团队开发的网页应用，让用户以 15 分钟城市为框架，探索和分析香港空间数据，将日常服务与设施的可达性同环境、社会和管治（ESG）目标联系起来，支持更宜居、可持续的社区。',finding:'Weipeng Deng、Shuyu Lei 及队友 Chi Chiu Cheng、Jin Zhang 获得发展局 Geospatial Lab 举办的 CSDI Awards 2023 公开组优异奖。'},
 es:{deck:'Explorar la ciudad de 15 minutos con datos geoespaciales de Hong Kong.',body:'City Connect 15+ es una aplicación web desarrollada en equipo para explorar y analizar datos geoespaciales de Hong Kong desde el concepto de ciudad de 15 minutos. Relaciona el acceso a servicios cotidianos con objetivos ambientales, sociales y de gobernanza (ESG).',finding:'Weipeng Deng, Shuyu Lei, Chi Chiu Cheng y Jin Zhang recibieron un Merit Award en la categoría abierta de los CSDI Awards 2023, organizados por el Geospatial Lab del Development Bureau.'}
};
const cityExtensions={
  "en": {
    "detailHeading": "The project",
    "deck": "A web mapping prototype for exploring nearby amenities, walking routes and personalised accessibility.",
    "detailSections": [
      [
        "What can you reach in 15 minutes?",
        "Route Searching combines Hong Kong’s 3D pedestrian network with three walking paces and sunny or rainy conditions: six modelled scenarios. Users can explore reachable areas and nearby everyday facilities. These are scenario assumptions, not live weather observations."
      ],
      [
        "Where does access fall short of demand?",
        "Hong Kong Snapshot maps facilities and demographics. The 15-Minute City Index combines eight facility categories with population demand, using a two-step floating catchment area approach and distance decay. Users can adjust category weights to reflect different priorities. Comparing the index with population and land use highlights potential spatial mismatches."
      ],
      [
        "How can local experience inform the map?",
        "Pedestrian Power lets users comment on routes and walking conditions, such as steep slopes. Community Connect brings together questionnaires, discussion themes and information sharing, complementing the spatial analysis with local perspectives."
      ],
      [
        "Project archive",
        "Developed for the 2023 CSDI Awards. The original website is no longer maintained; these images document the team’s application and final presentation, rather than a currently available live service."
      ]
    ]
  },
  "zh": {
    "detailHeading": "项目思路",
    "deck": "通过网页地图探索周边设施、步行路线与个性化可达性的团队原型。",
    "detailSections": [
      [
        "15 分钟内，可以步行到哪里？",
        "路线查询将香港三维行人网络与三种步行速度、晴天和雨天组合，形成六种模拟情景，让用户查看可达范围及附近的日常设施。这些速度与天气设定是模型情景，并非实时天气观测。"
      ],
      [
        "设施可达性与居民需求在哪里不匹配？",
        "Hong Kong Snapshot 展示设施分布与人口特征；15 分钟城市指数结合八类设施供给与人口需求，通过两步移动搜索法及距离衰减评估可达性。用户可调整设施类别权重，并结合人口和土地利用分布识别潜在的空间供需错配。"
      ],
      [
        "居民的体验如何补充空间分析？",
        "“步行者反馈”（Pedestrian Power）支持使用者对路线和步行条件留言，例如反映陡坡。“社区交流”（Community Connect）提供问卷、讨论与信息分享功能，将居民的实际经验作为地图分析的补充。"
      ],
      [
        "项目存档",
        "项目为 2023 年 CSDI 比赛开发。原网站已停止维护；此处展示的是团队当时的应用界面和最终汇报材料，并非目前仍可使用的在线服务。"
      ]
    ],
    "body": "City Connect 15+ 是团队为香港开发的参与式网页地图原型。它把步行路线、日常服务设施与使用者反馈结合起来，让“15 分钟城市”的分析可以回应不同的步行能力和服务需求。",
    "finding": "团队获得 2023 年香港空间数据共享平台（CSDI）大奖公开组优异奖。此处保留团队的应用界面与汇报材料，原网站已停止维护。"
  },
  "es": {
    "detailHeading": "El proyecto",
    "deck": "¿Cómo influyen las condiciones peatonales y las necesidades locales en la ciudad de 15 minutos?",
    "detailSections": [
      [
        "¿Qué se puede alcanzar en 15 minutos?",
        "La búsqueda de rutas combina la red peatonal 3D de Hong Kong con tres ritmos de marcha y condiciones soleadas o lluviosas: seis escenarios modelizados, no observaciones meteorológicas en tiempo real."
      ],
      [
        "¿Dónde quedan desajustes entre servicios y necesidades?",
        "Hong Kong Snapshot muestra la distribución de servicios y población. El índice de ciudad de 15 minutos considera ocho categorías de servicios y la demanda de la población mediante el método de áreas de captación flotantes de dos pasos (2SFCA), con una ponderación que disminuye con la distancia. Los usuarios pueden cambiar la importancia relativa de las categorías."
      ],
      [
        "¿Cómo incorporar la experiencia peatonal?",
        "Pedestrian Power recoge comentarios sobre rutas y condiciones de marcha. Community Connect reúne cuestionarios, temas de debate e información para complementar el análisis espacial."
      ],
      [
        "Archivo del proyecto",
        "Desarrollado para los CSDI Awards 2023. El sitio original ya no se mantiene; las imágenes documentan la aplicación del equipo y su presentación final, no un servicio actualmente disponible."
      ]
    ],
    "body": "City Connect 15+ es un prototipo cartográfico participativo desarrollado en equipo para Hong Kong. Reúne itinerarios peatonales, servicios cotidianos y comentarios de los usuarios para explorar la ciudad de 15 minutos según distintos ritmos de marcha y necesidades.",
    "finding": "El equipo recibió el premio al mérito en la categoría abierta de los premios Common Spatial Data Infrastructure (CSDI) de Hong Kong de 2023. Se conservan aquí las pantallas y la presentación del proyecto; el sitio original ya no se mantiene."
  }
};
const transitExtensions={
  "en": {
    "body": "How can we assess a station’s age-friendliness beyond counting lifts and escalators? This study develops a quantitative framework using age-related differences in smart-card journey times as an indicator of additional travel burdens. It helps identify stations and station pairs that warrant closer attention, without treating travel time as a complete measure of age-friendliness.",
    "finding": "The central insight: providing facilities and making a station easy to use are not the same thing. Age-friendly improvements need to consider the whole journey through the station, especially for people who use the system less often.",
    "detailSections": [
      [
        "Does more infrastructure always mean an easier journey?",
        "Not necessarily. Structurally complex stations were associated with larger age-related travel-time gaps even where effort-reducing facilities were plentiful. Lifts and escalators matter, but their presence alone does not show whether a route is easy to find, follow and complete."
      ],
      [
        "Whose experience disappears behind the average?",
        "Older passengers are not a single group. Frequent users could travel as quickly as younger passengers in some periods, while less frequent users faced more persistent delays. Looking only at the typical journey can overlook those who find the system hardest to navigate."
      ],
      [
        "When does the same network become more demanding?",
        "Travel-time gaps were particularly pronounced during weekday morning peaks, while evening and weekend patterns were often less marked. Age-friendliness is not simply a fixed property of a station: the demands of a journey also change with the time and travel context."
      ],
      [
        "Where should improvements begin?",
        "Recurring disparities around major interchange hubs and peripheral stations offer a starting point for closer investigation. The findings point toward clearer wayfinding, more legible transfer routes and targeted assistance, alongside physical accessibility. Journey times help flag places to investigate; they do not, on their own, explain an individual passenger’s difficulty."
      ]
    ]
  },
  "zh": {
    "body": "判断地铁是否适合老年人使用，不能只清点电梯和扶梯。本研究比较同一起讫站之间不同年龄乘客的旅行时间，在考虑系统熟悉程度与时段差异后，将年龄相关的时间差作为识别潜在出行障碍的代理指标。",
    "finding": "设施配置与实际使用体验并不是一回事。旅行时间差能够帮助筛选需要优先调查和改善的站点、站点对，但不能替代对具体空间障碍和乘客体验的现场研究。",
    "methods": "智能卡出行记录；以出行频率等特征划分使用者群体；旅行时间差比较；站点与站点对的多准则评分。",
    "detailSections": [
      [
        "设施齐全，是否就意味着容易使用？",
        "结构复杂的车站即使配备较多电梯、扶梯等设施，也可能出现较大的年龄相关旅行时间差。设施是否容易找到、换乘路径是否清晰，同样关系到实际体验；统计结果本身不能单独确定差异的原因。"
      ],
      [
        "老年乘客的体验是否相同？",
        "不同使用频率的老年乘客呈现出不同的时间差。研究利用出行频率等行为特征考虑系统熟悉程度，而不是声称直接测量了每位乘客主观上的熟悉感。"
      ],
      [
        "什么时候差异最明显？",
        "工作日早高峰的差异尤为突出。车站的空间条件之外，客流压力与出行时段也应纳入适老性评价。"
      ],
      [
        "如何确定改善的优先次序？",
        "研究将反复出现的时间差与多准则评分结合，识别需要重点关注的站点和路线。后续可通过实地观察与乘客访谈，判断导向标识、换乘组织、无障碍路径或人员协助中哪些方面最需要改善。"
      ]
    ]
  },
  "es": {
    "body": "Contar ascensores y escaleras mecánicas no basta para evaluar si el metro responde a las necesidades de las personas mayores. El estudio compara tiempos entre los mismos orígenes y destinos y utiliza las diferencias por edad como indicador indirecto de posibles dificultades, teniendo en cuenta la familiaridad con el sistema y el momento del viaje.",
    "finding": "Disponer de instalaciones no garantiza que el recorrido resulte fácil. Las diferencias de tiempo ayudan a priorizar estaciones y pares origen-destino para su estudio, pero no sustituyen la observación del espacio ni la experiencia de los pasajeros.",
    "methods": "Datos de tarjetas inteligentes de transporte; grupos definidos por frecuencia de uso y otros patrones de viaje; comparación de tiempos; evaluación multicriterio de estaciones y pares origen-destino.",
    "detailSections": [
      [
        "¿Más instalaciones implican siempre un recorrido más sencillo?",
        "Las estaciones de estructura compleja pueden presentar mayores diferencias por edad aun contando con ascensores y escaleras mecánicas. También importa poder localizar y seguir el itinerario. La asociación estadística no determina por sí sola qué obstáculo explica cada diferencia."
      ],
      [
        "¿Todas las personas mayores viven el metro de la misma manera?",
        "Los patrones difieren según la frecuencia de uso. El estudio considera la familiaridad mediante características observadas de los viajes, no mediante una medición directa de la percepción de cada pasajero."
      ],
      [
        "¿Cuándo son mayores las diferencias?",
        "Destacan durante las horas punta de las mañanas laborables. Además de la configuración de la estación, la evaluación debe considerar el contexto temporal del viaje."
      ],
      [
        "¿Cómo decidir dónde intervenir primero?",
        "La combinación de diferencias recurrentes y puntuación multicriterio permite seleccionar estaciones y recorridos prioritarios. Las visitas de campo y las entrevistas pueden después precisar las necesidades de señalización, conexiones sin barreras, organización de transbordos o asistencia."
      ]
    ]
  }
};
const walkingExtensions={
  "en": {
    "body": "A destination can be nearby on a map and still be difficult to reach on foot. This research asks whose walking abilities and everyday needs are represented by the X-minute city, and how the answer changes when older residents become the starting point.",
    "finding": "The key insight is not to replace 15 minutes with another universal number. It is to judge proximity against the people, destinations and pedestrian conditions that shape everyday access.",
    "detailSections": [
      [
        "Fifteen minutes for whom?",
        "Observed walking trips among older adults generally fell within 5–12 minutes, varying by age and destination. A single 15-minute benchmark can therefore miss meaningful differences in local access. These observed trips reflect people who travelled, not the unmet needs of those who stayed home."
      ],
      [
        "Nearby on the map, but reachable on foot?",
        "Slopes, stairs and changes of level can turn a short route into a difficult one. Age-specific network scenarios show how slower speeds and barriers shrink reachable areas and alter feasible routes. A longer, step-free connection may be more useful than the shortest line on a map."
      ],
      [
        "Are all everyday needs equally close?",
        "Access to basic neighbourhood services was comparatively strong, but gaps were most pronounced for second-level social and safety needs, including health and community support. A good overall accessibility score can conceal a shortage in the particular services people rely on."
      ],
      [
        "What changes when we plan for the oldest residents?",
        "The share classified as worst-off rose from 13.3% under a younger-adult, 15-minute scenario to 26.7% under an age-80-plus, five-minute scenario. Both age assumptions and time thresholds change in this comparison. It shows how a city that appears well served under one benchmark can reveal substantial gaps under another."
      ],
      [
        "Add more destinations, or make existing ones easier to reach?",
        "Where services cannot be provided on every doorstep, barrier-free links, protected walking routes and feeder connections deserve attention. In already well-connected neighbourhoods, preserving nearby shops and pedestrian connections is equally important. The maps help identify where to investigate these priorities, rather than prescribing a single intervention everywhere."
      ]
    ]
  },
  "zh": {
    "body": "“X 分钟城市”用步行时间描述居民获得日常服务的便利程度，但同样的时间并不对应同样的可达范围。这项研究从老年人的实际出行出发，考察统一时间标准会遗漏哪些年龄、需求与步行环境差异。",
    "finding": "研究并非提出老年人“应该走多久”，也不是用一个新数字替代 15 分钟，而是说明可达性评价需要同时考虑谁在出行、去哪里，以及沿途有哪些障碍。",
    "methods": "香港《出行特征调查》；分年龄组的步行时间阈值；日常需求层次；三维步行网络与空间分析。",
    "detailSections": [
      [
        "5–12 分钟意味着什么？",
        "这是调查中老年人多数日常步行出行所呈现的时间范围，随年龄与目的地类型而变化，不是健康建议或理想步行时长。已经完成的行程也不能充分反映因障碍而未出行者的需求。"
      ],
      [
        "地图上很近，实际走起来也方便吗？",
        "步行速度、坡度、楼梯和跨层连接会改变可达范围与路线选择。三维步行网络将这些条件纳入评价，因此地图上的直线距离近，并不一定意味着实际出行方便。"
      ],
      [
        "综合得分会掩盖哪些需要？",
        "不同服务对应不同层次的日常需求。基本服务较近，并不意味着健康、社区支持等服务也同样容易到达；分类评价能揭示综合指标不易呈现的缺口。"
      ],
      [
        "换一种评价标准，结果会怎样变化？",
        "在年轻成人、15 分钟情景下，被归入可达性最不利类别的比例为 13.3%；在 80 岁以上、5 分钟情景下为 26.7%。这组对比同时改变了年龄参数与时间阈值，不能把差异全部归因于年龄。"
      ],
      [
        "规划应该关注什么？",
        "除了补充服务设施，还需要检查既有设施是否真正可达，包括步行连接、无障碍路径和接驳交通。评价结果用于识别需要进一步调查的地区，而不是给所有社区开出同一张清单。"
      ]
    ]
  },
  "es": {
    "body": "La ciudad de X minutos expresa la proximidad de los servicios mediante tiempos a pie. Pero un mismo tiempo no ofrece las mismas oportunidades a todas las edades. Este estudio parte de los desplazamientos de las personas mayores para examinar lo que un umbral único deja fuera.",
    "finding": "El objetivo no es recomendar cuánto deberían caminar las personas mayores ni sustituir los 15 minutos por otra cifra universal. Se trata de evaluar el acceso según la edad, el destino y las condiciones del recorrido.",
    "methods": "Encuesta de Características de los Viajes de Hong Kong; umbrales por edad y destino; jerarquía de necesidades; red peatonal tridimensional y análisis espacial.",
    "detailSections": [
      [
        "¿Qué significan los 5–12 minutos?",
        "Es el intervalo en el que se concentra la mayoría de los viajes cotidianos a pie observados entre las personas mayores, con diferencias por edad y destino. No es una recomendación de salud. Los viajes realizados tampoco permiten conocer por completo las necesidades de quienes no pudieron salir."
      ],
      [
        "¿Estar cerca en el mapa garantiza poder llegar?",
        "La velocidad de marcha, las pendientes, las escaleras y las conexiones entre niveles modifican las rutas y el área alcanzable. La red 3D incorpora estas condiciones en lugar de equiparar distancia corta con acceso fácil."
      ],
      [
        "¿Qué necesidades oculta un índice agregado?",
        "Tener próximos los servicios básicos no garantiza el mismo acceso a los servicios de salud o apoyo comunitario. Diferenciar las necesidades permite reconocer carencias que un valor global puede ocultar."
      ],
      [
        "¿Cuánto cambia la evaluación al cambiar el punto de partida?",
        "La proporción clasificada con las condiciones de acceso más desfavorables pasa del 13,3% en el escenario de adultos jóvenes y 15 minutos al 26,7% en el de personas de 80 años o más y cinco minutos. Cambian tanto los supuestos de edad como el umbral temporal; la diferencia no puede atribuirse solo a la edad."
      ],
      [
        "¿Más servicios o mejores condiciones para llegar a ellos?",
        "La planificación puede examinar tanto la oferta de servicios como los itinerarios sin barreras y las conexiones con otros modos. Los resultados ayudan a seleccionar lugares para una evaluación más detallada, no a prescribir la misma intervención en todos los barrios."
      ]
    ]
  }
};
const climateExtensions={
  "thermal": {
    "en": {
      "body": "Transit-oriented development aims to make walking and public transport more attractive. But what happens when the neighbourhood around a station becomes too hot? This Shanghai study examines the tension between compact development and outdoor thermal comfort.",
      "detailSections": [
        [
          "Can a successful transit district still be uncomfortable to walk through?",
          "Density and proximity can support transit use without guaranteeing a comfortable outdoor environment. Higher population and building density were associated with greater thermal discomfort, suggesting that ridership alone is not enough to judge a station area’s success."
        ],
        [
          "What does an average-temperature map leave out?",
          "The two maps compare average and 90th-percentile thermal conditions over 2015–2024. More station areas fall into uncomfortable categories under the hotter conditions. These are historical comparisons, not a forecast: they show why planning around averages can understate heat exposure."
        ],
        [
          "Which design qualities deserve more attention?",
          "Greater variation in building height and higher vegetation ratios were associated with better thermal comfort. Relationships were nonlinear and varied by location, so a single density or greening target cannot capture every neighbourhood’s circumstances."
        ],
        [
          "What would a more complete definition of TOD success look like?",
          "The study considers transit use alongside thermal comfort, identifying places where high ridership coexists with uncomfortable surroundings. These areas offer priorities for closer design investigation, with heat mitigation treated as part of everyday access rather than an optional extra."
        ]
      ]
    },
    "zh": {
      "body": "公共交通导向开发（TOD）强调紧凑布局与较高开发强度，以支持公共交通和步行。但在炎热环境中，这些空间特征是否也可能伴随较差的户外热舒适？本研究以上海地铁站周边为例，考察这一规划取舍。",
      "detailSections": [
        [
          "客流旺盛的车站周边，就一定适合步行吗？",
          "密度与邻近性可以促进公交使用，却不保证户外环境舒适。较高的人口和建筑密度与较强热不适相关，提示不能仅凭客流评价车站地区的发展成效。"
        ],
        [
          "平均值地图遗漏了什么？",
          "双图比较 2015–2024 年的平均与第 90 百分位热环境。在较热条件下，更多车站周边被归为不舒适类别。这是历史情景比较，并非未来预测，说明只看平均条件可能低估热暴露。"
        ],
        [
          "哪些设计品质值得重新重视？",
          "更丰富的建筑高度变化和更高的植被比例与较好的热舒适相关。这些关系并非线性，也随位置变化，因此不能用一个统一密度或绿化目标概括所有街区。"
        ],
        [
          "怎样更完整地评价 TOD？",
          "研究将公交使用与热舒适共同考虑，识别高客流却环境不舒适的车站地区，为进一步设计调查提供重点。热环境改善应成为日常可达性的一部分，而不是附加项。"
        ]
      ],
      "finding": "人口与建筑密度、建筑高度变化和植被比例，与热舒适的关系并不相同，而且随位置与取值变化。结果提示 TOD 评价应同时关注公共交通使用和户外热环境，而不能将统计关联直接理解为因果效应。"
    },
    "es": {
      "body": "El desarrollo orientado al transporte público (TOD) promueve entornos compactos que favorezcan el uso del transporte colectivo y los desplazamientos a pie. El estudio de Shanghái examina una posible tensión: esas formas urbanas pueden asociarse también con peores condiciones térmicas en verano.",
      "detailSections": [
        [
          "¿Una estación muy utilizada ofrece siempre un entorno cómodo?",
          "La densidad puede favorecer el transporte público sin garantizar confort exterior. Las densidades poblacional y edificatoria se asociaron con mayor incomodidad térmica."
        ],
        [
          "¿Qué ocultan los promedios?",
          "Los mapas comparan condiciones medias y del percentil 90 entre 2015 y 2024. Más estaciones aparecen en categorías incómodas bajo condiciones más cálidas. Es una comparación histórica, no una predicción."
        ],
        [
          "¿Qué aporta el diseño urbano?",
          "La diversidad de alturas y la vegetación se asociaron con mejor confort. Las relaciones varían de forma no lineal y según la localización."
        ],
        [
          "¿Cómo evaluar mejor el TOD?",
          "Considerar conjuntamente demanda y confort permite identificar estaciones muy utilizadas cuyos alrededores requieren mayor atención al calor."
        ]
      ],
      "finding": "La densidad, la variedad de alturas y la vegetación no se relacionan del mismo modo con el confort térmico. Las relaciones varían según el lugar y no son lineales. Los resultados invitan a evaluar conjuntamente el uso del transporte público y el entorno térmico, sin interpretar las asociaciones como efectos causales."
    }
  },
  "heat": {
    "en": {
      "body": "Extreme heat can change who travels, when they travel and which stations they use. This New York City study examines warm-season subway ridership from 2022–2024, asking whether network-wide totals conceal unequal disruptions.",
      "detailSections": [
        [
          "Whose journeys change most on extremely hot days?",
          "Event-based analysis found the strongest ridership declines in the combined seniors and people-with-disabilities fare group, particularly on weekends. These fare categories describe groups in the data; they do not identify each passenger’s personal circumstances."
        ],
        [
          "Does stable ridership mean people are unaffected?",
          "Fair Fares ridership showed comparatively limited overall variation, although patterns differed by time. Stable usage does not establish that travellers face little heat exposure or have the freedom to change essential journeys."
        ],
        [
          "Why look beyond a single daily total?",
          "The seniors and disability fare group showed its largest reductions around midday, while overall ridership declines were strongest in the evening. Station-level differences also matter: a single network average can miss when and where disruption concentrates."
        ],
        [
          "What can these patterns tell planners?",
          "The findings support more targeted heat-resilient transit planning across passenger groups, periods and stations. The cover scatterplots describe correlations; the event comparisons provide a separate view. Neither reveals whether a missing subway trip was cancelled, postponed or replaced by another mode."
        ]
      ]
    },
    "zh": {
      "body": "本研究分析纽约 2022–2024 年暖季的地铁客流，比较不同票价群体在极端高温期间的变化。关注的不只是客流下降多少，也包括下降集中在什么时段，以及不同群体是否表现出不同的调整余地。",
      "detailSections": [
        [
          "极端高温下，谁的行程变化最大？",
          "高温事件分析发现，老年人与残障人士合并票价群体的客流降幅最突出，周末尤其明显。这些是数据中的票价分类，不能据此判断每位乘客的个人处境。"
        ],
        [
          "变化较小，是否意味着受到的影响更小？",
          "不一定。Fair Fares 是面向符合条件的低收入乘客的优惠票价计划。该组总体客流降幅并未明显高于普通乘客，但降幅随时段的变化较小。这可能与调整活动时间的余地有限有关，不能据此断言他们没有受到高温影响。"
        ],
        [
          "为什么不能只看一天的客流总量？",
          "老年人与残障票价群体在中午的降幅最大，而整体客流在晚间下降最明显。车站之间也存在差异，全网平均值可能掩盖影响集中出现的时间与地点。"
        ],
        [
          "这些发现能为规划带来什么？",
          "结果支持针对不同人群、时段和车站制定更有针对性的高温应对。封面的散点图描述相关性，高温事件比较则提供另一层证据；两者都不能直接判断一次减少的地铁行程究竟被取消、推迟，还是改用了其他方式。"
        ]
      ],
      "finding": "老年与残障乘客合并票价组的客流降幅最大。Fair Fares 组的客流降幅在一天内变化较小，提示其调整出行时段的余地可能有限；这是一种解释，并不等于直接测量了个人的时间安排约束。"
    },
    "es": {
      "body": "El estudio analiza el uso del metro de Nueva York durante las temporadas cálidas de 2022–2024. Compara grupos tarifarios para conocer no solo cuánto disminuye la demanda durante el calor extremo, sino también cuándo ocurre y qué margen parecen tener distintos grupos para adaptar sus viajes.",
      "detailSections": [
        [
          "¿Qué viajes cambian más?",
          "El análisis de episodios encontró mayores descensos en la categoría tarifaria conjunta de mayores y personas con discapacidad, especialmente los fines de semana. Las tarifas no describen todas las circunstancias personales."
        ],
        [
          "¿Una menor variación implica un menor impacto?",
          "No necesariamente. Fair Fares ofrece tarifas reducidas a pasajeros de bajos ingresos que cumplen sus requisitos. La caída global de este grupo no fue claramente mayor que la de los pasajeros generales, pero cambió menos según la hora. Esto es compatible con un menor margen para reorganizar actividades, sin demostrar por sí solo ese mecanismo."
        ],
        [
          "¿Por qué mirar más allá del total diario?",
          "Las mayores reducciones del grupo de mayores y discapacidad aparecieron al mediodía; para el conjunto de pasajeros, por la tarde-noche. También hubo variación entre estaciones."
        ],
        [
          "¿Qué puede orientar la planificación?",
          "Los resultados apoyan respuestas específicas por grupo, horario y estación. Los diagramas muestran correlaciones, distintas de las comparaciones de episodios. No permiten saber si un viaje se canceló, se aplazó o cambió de modo."
        ]
      ],
      "finding": "La categoría conjunta de personas mayores y pasajeros con discapacidad presenta las mayores caídas. En Fair Fares, la reducción varía menos según la hora, lo que sugiere un margen limitado para ajustar los horarios. El estudio no mide directamente las restricciones de agenda de cada persona."
    }
  }
};
const povertyExtensions={
  "en": {
    "body": "Living in a city does not guarantee access to its opportunities. This Nairobi study asks how the layout of streets relates to overlapping household deprivations, connecting the physical structure of neighbourhoods with multidimensional poverty.",
    "finding": "Connectivity is not a stand-alone remedy for poverty. Efficiency, severance, density and centrality offer complementary clues for locally grounded investigation.",
    "detailSections": [
      [
        "What can streets reveal about opportunity?",
        "A connected network shapes the routes available to reach daily activities and services. The study links geocoded household information with neighbourhood street-network measures to examine whether physical patterns are associated with multiple forms of deprivation."
      ],
      [
        "Is a denser network always the most important feature?",
        "The analytical perspectives emphasised different features: density was prominent in the theory-driven analysis, while efficiency ranked highest among network features in the data-driven model. Severance and betweenness also mattered. No single indicator tells the whole story."
      ],
      [
        "Can streets explain poverty on their own?",
        "No. Whether a household was in a formal or informal settlement was the most important control variable in both models. Street configuration sits within wider social and housing conditions; an association is not proof that changing a road will reduce poverty."
      ],
      [
        "What should planners take from the maps?",
        "Look at the neighbourhood network, not just individual roads. Indirect routes, disconnections and the way routes channel movement reveal different constraints. The findings support place-specific investigation alongside social evidence, rather than a universal road-building prescription."
      ]
    ]
  },
  "zh": {
    "body": "以内罗毕为例，本研究将家庭多维贫困状况与周边路网特征联系起来，比较基于理论假设的逻辑回归和基于数据的 XGBoost 模型。关注的是空间结构与贫困之间的关联，而不是用道路布局给个人贴标签。",
    "finding": "理论驱动模型在本研究的数据和模型设定下预测表现更好，不能据此推论逻辑回归在所有情境下都优于机器学习。路网特征的作用也需要结合住区与社会经济条件理解。",
    "methods": "地理编码家庭调查；空间网络设计分析（sDNA）；理论驱动的逻辑回归；XGBoost 与模型解释。",
    "detailSections": [
      [
        "哪些路网特征值得关注？",
        "路网效率、阻隔、密度和介数中心性在分析中具有重要性，但两类模型的排序及部分关联方向并不完全一致，不能用单一指标概括路网与贫困的关系。"
      ],
      [
        "这里的“阻隔”具体指什么？",
        "论文将 severance 与绕行类指标联系起来，包括网络路径相对直线连接的偏离和曲折程度。它不是简单指某条道路被切断，也不等同于社会隔离。"
      ],
      [
        "理论模型为什么值得与机器学习比较？",
        "逻辑回归以理论假设组织变量，XGBoost 则用于识别数据中的非线性关系。在本研究条件下，前者预测表现更好。这一结果支持根据研究问题与数据比较模型，而不是预设更复杂的方法一定更优。"
      ],
      [
        "改善路网就能减少贫困吗？",
        "研究并未进行因果识别。家庭处于正式或非正式住区，是两类模型中都很重要的控制变量。道路改造是否改善生活条件，需要结合住房、服务供给及其他社会经济因素进一步检验。"
      ]
    ]
  },
  "es": {
    "body": "El estudio vincula las condiciones de pobreza multidimensional de los hogares de Nairobi con las características de su red viaria. Compara una regresión logística guiada por la teoría con XGBoost para analizar asociaciones entre estructura urbana y condiciones de vida, no para etiquetar a las personas a partir de sus calles.",
    "finding": "El mejor resultado predictivo de la regresión logística corresponde a los datos y la especificación de este estudio. No implica que este método supere siempre al aprendizaje automático ni que modificar la red reduzca por sí solo la pobreza.",
    "methods": "Encuestas georreferenciadas de hogares; análisis del diseño de redes espaciales (sDNA); regresión logística guiada por la teoría; XGBoost e interpretación del modelo.",
    "detailSections": [
      [
        "¿Qué características de la red aportan información?",
        "La eficiencia, la separación asociada a los desvíos de recorrido, la densidad y la centralidad de intermediación son relevantes. Su importancia y algunas direcciones de asociación difieren entre modelos; ningún indicador resume toda la relación."
      ],
      [
        "¿Qué significa severance en este estudio?",
        "El artículo lo vincula a métricas de desvío y a la sinuosidad de los recorridos respecto de conexiones más directas. Por eso se conserva el término junto con su explicación, sin equipararlo automáticamente a fragmentación física o segregación social."
      ],
      [
        "¿Por qué comparar teoría y aprendizaje automático?",
        "La regresión organiza el análisis a partir de hipótesis teóricas; XGBoost permite explorar relaciones no lineales. En estas condiciones, el primer modelo predijo mejor. El resultado invita a comparar métodos según la pregunta y los datos, sin asumir que la complejidad garantiza mejores resultados."
      ],
      [
        "¿Mejorar las calles basta para reducir la pobreza?",
        "El estudio no identifica efectos causales. La pertenencia a un asentamiento formal o informal fue un control importante en ambos modelos. Las intervenciones viarias deben examinarse junto con la vivienda, los servicios y las condiciones socioeconómicas."
      ]
    ]
  }
};
const finalCardCopy={
  "walking": {
    "en": {
      "title": "How many minutes make an age-friendly city?",
      "deck": "Most daily walking trips by older adults in Hong Kong fall within 5 to 12 minutes, depending on age and destination, rather than a single 15-minute benchmark. The framework combines age-specific thresholds with a hierarchy of everyday needs and a 3D pedestrian network."
    },
    "zh": {
      "title": "“15 分钟城市”对不同年龄的人，真的都是 15 分钟吗？",
      "deck": "基于香港《出行特征调查》的步行出行数据，研究发现老年人的多数日常步行出行集中在 5–12 分钟内，不同年龄与目的地类型对应的时间阈值并不相同。研究结合分年龄组的步行速度、日常需求层次，以及考虑坡度和障碍的三维步行网络，构建对年龄差异敏感的 X 分钟城市评价框架。"
    },
    "es": {
      "title": "¿Los 15 minutos significan lo mismo para todas las edades?",
      "deck": "Los datos de la Encuesta de Características de los Viajes de Hong Kong muestran que la mayoría de los desplazamientos cotidianos a pie de las personas mayores se concentran entre 5 y 12 minutos, según la edad y el destino. El estudio combina umbrales por grupo de edad, una jerarquía de necesidades y una red peatonal 3D que incorpora pendientes y barreras."
    }
  },
  "transit": {
    "en": {
      "title": "Where does a metro system fall short for older riders?",
      "deck": "A smart-card framework measures travel-time gaps between older and younger riders, accounting for system familiarity and temporal variation, and identifies priority stations and routes for age-friendly improvements. Disparities are especially pronounced during weekday morning peaks."
    },
    "zh": {
      "title": "地铁系统的适老性，能不能从乘客的旅行时间差里看出来？",
      "deck": "研究比较同一起讫站之间老年与年轻乘客的旅行时间差（TTD），将其作为衡量地铁适老性的代理指标。在考虑乘客对系统的熟悉程度和时段变化后，研究识别年龄相关的出行差异，并通过多准则评分定位需要优先关注的站点和路线。工作日早高峰的差异尤其明显。"
    },
    "es": {
      "title": "¿Qué nos dicen las diferencias en el tiempo de viaje sobre las barreras que encuentran las personas mayores en el metro?",
      "deck": "El estudio compara los tiempos de viaje de pasajeros mayores y jóvenes entre las mismas estaciones de origen y destino. Utiliza estas diferencias como indicador indirecto, tiene en cuenta la familiaridad con el sistema y la variación temporal, e identifica estaciones y recorridos prioritarios mediante una evaluación multicriterio. Las diferencias son especialmente marcadas en las horas punta de las mañanas laborables."
    }
  },
  "heat": {
    "en": {
      "title": "Who has less flexibility to shift travel during extreme heat?",
      "deck": "In New York, seniors and passengers with disabilities show the largest ridership declines, while Fair Fares riders show the least variation across the day, suggesting less flexibility to shift travel away from extreme heat."
    },
    "zh": {
      "title": "极端高温下，不同乘客能否同样灵活地调整出行？",
      "deck": "纽约极端高温期间，老年与残障乘客的地铁客流降幅最大。Fair Fares 低收入乘客的总体降幅并未明显高于普通乘客，但客流降幅在一天内的变化最小，提示其调整活动安排和出行时段的余地可能更有限。"
    },
    "es": {
      "title": "¿Quién tiene menos margen para adaptar sus viajes durante episodios de calor extremo?",
      "deck": "Durante los episodios de calor extremo en Nueva York, las personas mayores y los pasajeros con discapacidad registran las mayores caídas en el uso del metro. Entre los usuarios de Fair Fares, en cambio, la reducción de la demanda varía menos a lo largo del día, lo que sugiere un margen más limitado para cambiar el horario de sus desplazamientos."
    }
  },
  "thermal": {
    "en": {
      "title": "Can the density that supports TOD also undermine thermal comfort?",
      "deck": "Around Shanghai metro stations, higher population and building density are associated with greater summer thermal discomfort, while varied building heights and more vegetation are associated with better thermal comfort. GeoXAI points to a climate-responsive rethink of TOD’s design dimension."
    },
    "zh": {
      "title": "TOD 强调的高密度，会不会反过来削弱热舒适与步行环境？",
      "deck": "以上海地铁站周边为例，研究发现，较高的人口密度和建筑密度与更强的夏季热不适相关；建筑高度变化更丰富、植被比例更高的站区，则与更好的热舒适相关。研究利用地理可解释人工智能（GeoXAI）识别非线性和空间异质关系，重新思考公共交通导向开发（TOD）评价中的“设计”维度。"
    },
    "es": {
      "title": "¿Puede una mayor densidad urbana entrar en conflicto con el confort térmico alrededor de las estaciones de metro?",
      "deck": "Alrededor de las estaciones de Shanghái, una mayor densidad de población y edificios se asocia con mayor malestar térmico en verano. La variedad de alturas y una mayor proporción de vegetación se asocian con mejores condiciones. El análisis GeoXAI revela relaciones no lineales que varían según el lugar y permite reconsiderar la dimensión del diseño en el desarrollo orientado al transporte público (TOD)."
    }
  },
  "poverty": {
    "en": {
      "title": "What can street-network structure tell us about multidimensional poverty?",
      "deck": "Comparing theory-driven logistic regression with XGBoost in Nairobi, the study identifies efficiency, severance, density and betweenness as key network predictors, with the theory-driven model performing better."
    },
    "zh": {
      "title": "从内罗毕看，城市路网与多维贫困之间有什么联系？",
      "deck": "研究比较理论驱动的逻辑回归与数据驱动的 XGBoost 模型，识别出路网效率、阻隔、密度和介数中心性等与多维贫困密切相关的空间网络特征。在本研究的数据和模型设定下，理论驱动模型的预测表现优于 XGBoost。"
    },
    "es": {
      "title": "¿Qué nos enseña Nairobi sobre la relación entre la red urbana y la pobreza multidimensional?",
      "deck": "El estudio compara una regresión logística basada en teoría con un modelo XGBoost basado en datos e identifica la eficiencia de la red, la separación que se refleja en los desvíos de recorrido (severance), la densidad y la centralidad de intermediación como características asociadas con la pobreza multidimensional. Con los datos y la especificación de este estudio, el modelo basado en teoría obtuvo mejores resultados predictivos."
    }
  },
  "city-connect": {
    "en": {
      "title": "How can a 15-minute city become personal?",
      "deck": "A participatory web tool that lets users set their walking pace, map a personalised 15-minute catchment, find essential amenities and comment on routes. Merit Award, Hong Kong CSDI Awards 2023."
    },
    "zh": {
      "title": "15 分钟城市，能不能因人而异？",
      "deck": "City Connect 15+ 是一个参与式网页工具，让使用者设置步行速度、探索个性化的 15 分钟步行生活圈、查找附近的日常服务，并对步行路线和城市环境提出反馈。项目获 2023 年香港空间数据共享平台（CSDI）大奖公开组优异奖。"
    },
    "es": {
      "title": "¿Cómo adaptar la ciudad de 15 minutos a cada persona?",
      "deck": "City Connect 15+ es una herramienta web participativa que permite elegir el ritmo de marcha, explorar los servicios alcanzables en 15 minutos a pie y aportar comentarios sobre rutas y entornos urbanos. Recibió el premio al mérito en la categoría abierta de los premios CSDI de Hong Kong de 2023."
    }
  }
};
export function researchText(p,lang='en'){
 p={...p,uiLang:lang};
 const item=researchDetails[p.id];if(!item)return p;
 const label=item.labels?.[lang];
 const roles={en:{first:'First-author research',second:'Collaborative research · Second author',team:'Applied project · Team member'},zh:{first:'第一作者',second:'第二作者 · 合作研究',team:'应用项目 · 团队成员'},es:{first:'Investigación como primera autora',second:'Investigación colaborativa · Segunda autora',team:'Proyecto aplicado · Integrante del equipo'}};
 return {...p,...(p.id==='poverty'?povertyExtensions[lang]:{}),...(climateExtensions[p.id]?.[lang]||{}),...(p.id==='walking'?walkingExtensions[lang]:{}),...(p.id==='transit'?transitExtensions[lang]:{}),authorship:item.authorship,roleLabel:roles[lang][item.authorship],...(label?{title:questions[p.id]?.[['en','zh','es'].indexOf(lang)]||label[0],deck:label[1]}:{}),...(p.id==='thermal'?{place:{en:'Shanghai',zh:'上海',es:'Shanghái'}[lang]}:{}),...(p.id==='city-connect'?{...cityCopy[lang],...cityExtensions[lang]}:{}),...finalCardCopy[p.id]?.[lang],...(p.id==='city-connect'&&lang==='zh'?{venue:'优异奖 · 香港空间数据共享平台（CSDI）大奖'}:{})};
}
