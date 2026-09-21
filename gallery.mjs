import {escapeHtml as e,icon} from './content.mjs?v=20260921-bridge-funding';
import {researchDetails} from './research-details.mjs?v=20260921-bridge-funding';
const descriptions={
  "walking": [
    [
      "概念与分析框架",
      "Marco conceptual y analítico"
    ],
    [
      "香港三维步行网络",
      "Red peatonal tridimensional de Hong Kong"
    ],
    [
      "不同年龄群体的路径选择",
      "Elección de rutas según la edad"
    ],
    [
      "不同年龄与需求类别的步行时间及目的地频率",
      "Duración de los recorridos y frecuencia de destinos según la edad y las necesidades"
    ],
    [
      "年龄与时间假设如何改变可达性最不利地区的识别结果",
      "Cómo cambian las áreas peor atendidas según los supuestos de edad y tiempo"
    ],
    [
      "不同年龄群体的步行可达范围",
      "Áreas accesibles a pie según la edad"
    ],
    [
      "老年人口与可达性的空间聚类",
      "Agrupaciones espaciales de población mayor y accesibilidad"
    ]
  ],
  "transit": [
    [
      "八种时段情景下旅行时间差异显著的前 50 组起终点",
      "Los 50 pares origen-destino con diferencias significativas de tiempo de viaje en ocho escenarios temporales"
    ],
    [
      "用旅行时间差作为评估地铁适老性的线索",
      "Diferencias de tiempo de viaje como indicador de la adaptación del metro a las personas mayores"
    ],
    [
      "从交通智能卡记录到乘客分组、时间比较与车站分析",
      "De los registros de tarjetas de transporte a los grupos de pasajeros y el análisis de tiempos y estaciones"
    ],
    [
      "按年龄与出行频率分组的工作日和周末逐小时进站量",
      "Entradas por hora, edad y frecuencia de uso en días laborables y fines de semana"
    ],
    [
      "老年乘客相对于年轻乘客的旅行时间差异",
      "Variación de los tiempos de viaje de las personas mayores respecto a las más jóvenes"
    ],
    [
      "旅行时间差异与车站复杂程度、步行设施的关系",
      "Diferencias de tiempo de viaje en relación con la complejidad de las estaciones y las instalaciones peatonales"
    ]
  ],
  "heat": [
    [
      "2022–2024 年暖季热指数与客流：Fair Fares 及老年人／残障人士票种",
      "Índice de calor y uso del metro en las temporadas cálidas de 2022–2024: Fair Fares y tarifas para personas mayores o con discapacidad"
    ],
    [
      "极端高温与非极端高温期间各票种的逐小时客流",
      "Uso horario del metro por grupo tarifario en periodos con y sin calor extremo"
    ],
    [
      "不同时段与群体的极端高温系数及 95% 置信区间",
      "Coeficientes del calor extremo e intervalos de confianza del 95% por periodo y grupo"
    ],
    [
      "极端高温期间各站客流的变化",
      "Cambios en el uso del metro por estación durante episodios de calor extremo"
    ],
    [
      "纽约地铁网络与研究区域",
      "Red de metro y área de estudio en Nueva York"
    ]
  ],
  "thermal": [
    [
      "上海相对热舒适分布：平均值与第 90 百分位 MTHI",
      "Confort térmico relativo en Shanghái: MTHI medio y del percentil 90"
    ],
    [
      "2015–2024 年上海第 90 百分位 MTHI 的空间分布",
      "Distribución del percentil 90 del MTHI en Shanghái, 2015–2024"
    ],
    [
      "TOD 指标与热环境之间的非线性关系",
      "Relaciones no lineales entre los indicadores TOD y las condiciones térmicas"
    ],
    [
      "按客流与热舒适表现划分的站区类型",
      "Áreas de estación clasificadas según el uso del metro y el confort térmico"
    ],
    [
      "环境图像分析",
      "Análisis de imágenes del entorno"
    ]
  ],
  "poverty": [
    [
      "内罗毕的空间路网指标",
      "Indicadores de la red viaria de Nairobi"
    ],
    [
      "多维贫困的空间分布",
      "Distribución espacial de la pobreza multidimensional"
    ],
    [
      "各预测变量贡献的变化",
      "Variación de las contribuciones de las variables predictoras"
    ],
    [
      "数据驱动模型中的平均特征贡献",
      "Contribuciones medias de las variables en el modelo basado en datos"
    ],
    [
      "研究框架",
      "Marco del estudio"
    ]
  ],
  "city-connect": [
    [
      "City Connect 15+ 原网页与移动端平台及 ESG Connector 团队",
      "Plataforma web y móvil original de City Connect 15+ y equipo ESG Connector"
    ],
    [
      "1. 香港概览：设施分布与人口特征",
      "1. Panorama de Hong Kong: distribución de servicios y características demográficas"
    ],
    [
      "2. 15 分钟路径查询：步速、天气与可达设施",
      "2. Búsqueda de rutas de 15 minutos: ritmo al caminar, tiempo atmosférico y servicios accesibles"
    ],
    [
      "3. 15 分钟城市指数：可达性与自定义设施权重",
      "3. Índice de ciudad de 15 minutos: accesibilidad y ponderaciones personalizables de los servicios"
    ],
    [
      "4. 步行者反馈：路径意见与步行条件",
      "4. Opiniones de los peatones sobre rutas y condiciones para caminar"
    ],
    [
      "5. 社区交流：问卷、讨论与信息共享",
      "5. Participación comunitaria: cuestionarios, debate e intercambio de información"
    ],
    [
      "可达性、人口与空间供需错配",
      "Accesibilidad, población y desajustes espaciales entre oferta y demanda"
    ],
    [
      "空间数据、路径查询与可达性分析流程",
      "Flujo de trabajo: datos espaciales, rutas y análisis de accesibilidad"
    ]
  ]
};
export function galleryMarkup(p){
 const lang=document.documentElement.lang.slice(0,2),labels={en:['Research figures','Previous figure','Next figure','View figure'],zh:['研究图表','上一张','下一张','查看图表'],es:['Figuras de investigación','Figura anterior','Figura siguiente','Ver figura']}[lang]||['Research figures','Previous figure','Next figure','View figure'];
 const figures=[{image:p.galleryImage||p.image,caption:p.caption},...(researchDetails[p.id]?.gallery||[])].map((f,i)=>{
  const description=descriptions[p.id]?.[i]?.[{zh:0,es:1}[lang]];
  if(!description)return f;
  let source=f.caption.match(/(?:Figure \d|Lei et al|Zhao|Gachanja|ESG Connector team,|Final presentation)[\s\S]*$/)?.[0]||'';
  source=source.replace(/Figure /g,lang==='zh'?'图 ':'Figura ').replace(/PDF page /g,lang==='zh'?'PDF 第 ':'PDF, p. ').replace(/final presentation/gi,lang==='zh'?'最终汇报':'presentación final').replace(/slide /g,lang==='zh'?'幻灯片 ':'diapositiva ');
  return {...f,alt:description,caption:description+(source?' · '+source:'')};
 });
 return `<section class="figure-gallery" aria-label="${labels[0]}"><div class="figure-track" tabindex="0" aria-label="${labels[0]}">${figures.map((f,i)=>`<figure><a href="assets/${f.image}" target="_blank" rel="noopener" aria-label="${labels[3]} ${i+1}"><img src="assets/${f.image}" alt="${e(f.alt || f.caption.split(/\. (?:Figure |Lei et al|Zhao|ESG Connector)/)[0])}" ${i?'loading="lazy"':''}></a><figcaption lang="${lang}">${e(f.caption)}</figcaption></figure>`).join('')}</div><div class="gallery-toolbar"><button class="icon-button gallery-prev" aria-label="${labels[1]}" title="${labels[1]}">${icon('chevron-left')}</button><span class="gallery-position" aria-live="polite">1 / ${figures.length}</span><button class="icon-button gallery-next" aria-label="${labels[2]}" title="${labels[2]}">${icon('chevron-right')}</button><div class="gallery-thumbnails">${figures.map((f,i)=>`<button data-slide="${i}" aria-label="${labels[3]} ${i+1}" title="${labels[3]} ${i+1}"><img src="assets/${f.image}" alt=""></button>`).join('')}</div></div></section>`;
}
export function initGallery(container){
 const track=container.querySelector('.figure-track');if(!track)return;
 const slides=[...track.children],prev=container.querySelector('.gallery-prev'),next=container.querySelector('.gallery-next'),thumbs=[...container.querySelectorAll('[data-slide]')];let index=0;
 const update=()=>{index=Math.round(track.scrollLeft/Math.max(1,track.clientWidth));prev.disabled=index===0;next.disabled=index===slides.length-1;container.querySelector('.gallery-position').textContent=`${index+1} / ${slides.length}`;thumbs.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));};
 const go=i=>{i=Math.max(0,Math.min(slides.length-1,i));track.scrollTo({left:i*track.clientWidth,behavior:document.documentElement.hasAttribute('data-reduced-motion')?'instant':'smooth'});};
 prev.addEventListener('click',()=>go(index-1));next.addEventListener('click',()=>go(index+1));thumbs.forEach((b,i)=>b.addEventListener('click',()=>go(i)));
 track.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){ev.preventDefault();go(index+(ev.key==='ArrowRight'?1:-1));}});track.addEventListener('scroll',update,{passive:true});update();
}
