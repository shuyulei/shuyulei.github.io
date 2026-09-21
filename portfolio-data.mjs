export const portfolioDownload='https://www.dropbox.com/scl/fi/mka6zodudayeshsd66xnn/Lei-Shuyu-s-Portfolio.pdf?rlkey=9b5he2gn2nomp72278k6gu6uc&dl=1';
const entry=(id,title,topic,place,pages,deck,role,team,zh,es)=>({id,title,topic,place,pages,deck,body:deck,role,authors:team,year:'Student project',image:`portfolio/${id}.webp`,alt:`${title}: original illustration from Shuyu Lei's portfolio`,page:`project-${id}.html`,url:portfolioDownload,caption:`Original project illustration from Shuyu Lei's design portfolio, page ${pages[0]}.`,translations:{zh:{title:zh[0],topic:zh[1],deck:zh[2],body:zh[2],role:zh[3],moreLabel:'查看项目与下载'},es:{title:es[0],topic:es[1],deck:es[2],body:es[2],role:es[3],moreLabel:'Ver proyecto y descargar'}}});
export const portfolioProjects=[
 entry('smart-community','Smart Community','Urban design','Shenzhen',[3,4,5,6,7,8,9],'A neighbourhood proposal for Majialong that brings workplaces, housing and shared public spaces together.','Individual project: urban analysis, concept, master plan and design visualisation.','Shuyu Lei',
 ['智慧社区','城市设计','以马家龙社区为对象，将工作、居住与共享公共空间结合起来。','个人项目：城市分析、概念、总体规划及设计表达。'],['Smart Community','Diseño urbano','Un paisaje de vida y trabajo que conecta industria, vivienda y espacio público en Majialong.','Proyecto individual: análisis urbano, concepto, plan general y visualización.']),
 entry('landscape','Layered Space','Campus landscape','Shenzhen',[10,11,12,13],'A landscape renewal proposal for the School of Architecture and Urban Planning at Shenzhen University.','Interviews, site analysis, design concept, master plan, rendering and lighting design.','Shuyu Lei and He Yuling. Tutor: Wang Qing; Shenzhen University.',
 ['多元空间','校园景观','深圳大学建筑与城市规划学院的校园景观更新。','访谈、场地分析、概念、总体规划、效果图及照明设计。'],['Layered Space','Paisaje del campus','Renovación del paisaje de la Escuela de Arquitectura y Urbanismo de la Universidad de Shenzhen.','Entrevistas, análisis del lugar, concepto, plan general, visualización e iluminación.']),
 entry('earth-roots','Earth Roots Renewal','Industrial heritage & landscape','Jiangzhou, China',[14,15,16,17,18,19],'Reimagining Jiangzhou Shipyard through industrial heritage, ecological restoration and new uses for a changing community.','GIS analysis, historical research, concept, master plan, rendering, ecological and development strategies, and interface design.','Group project with Chen Yunxia, Zhang Jingwen, Yang Tingting and Mai Qingkun.',
 ['船厂新生','工业遗产与景观','江州造船厂更新：连接工业遗产、生态修复和社区发展的新用途。','GIS 分析、历史研究、概念、总体规划、效果图、生态与发展策略及界面设计。'],['Earth Roots Renewal','Patrimonio industrial y paisaje','Reimaginar el astillero de Jiangzhou mediante patrimonio industrial, restauración ecológica y nuevos usos comunitarios.','SIG, investigación histórica, concepto, plan general, visualización, estrategias ecológicas y de desarrollo, e interfaces.']),
 entry('serpentine','Serpentine Forest','Pedestrian connections','Milan',[20,21],'An elevated planted walkway linking key destinations in central Milan, with places to pause, meet, and play.','Physical model making, rendering and video production.','With Xaver Burkart, Daniel Giorgi, Georg Scherrer and Jonathan Udemezue. Tutor: Raffaella Colombo; Politecnico di Milano.',
 ['蜿蜒绿廊','步行连接','米兰市中心的绿化架空步道，为停留、交流与活动创造空间。','实体模型、效果图及视频制作。'],['Serpentine Forest','Conexiones peatonales','Un paseo elevado con vegetación que conecta destinos del centro de Milán con espacios de encuentro y descanso.','Maquetas físicas, visualización y producción de vídeo.']),
 entry('milan','Resilient Landscape Design','Flood-responsive landscape design','Polesine, Italy',[22,23,24,25],'A landscape response to recurring Po River floods, integrating water-sensitive public space, productive land and elevated routes in Polesine.','Master plan, design concept, strategy mapping, sections and park visualisations.','Shuyu Lei and Srishti Singh. Tutor: Raffaella Colombo; Politecnico di Milano.',
 ['生态韧性景观设计','洪水适应性景观设计','针对波河反复发生的洪水，在波莱西内（Polesine）探索结合雨水管理、农业生产用地与架空步道的景观设计。','总体规划、概念、策略地图、剖面及公园效果图。'],['Diseño del paisaje resiliente','Diseño del paisaje ante inundaciones','Una respuesta paisajística a las inundaciones recurrentes del Po, integrando agua, espacio público, terrenos productivos y recorridos elevados en Polesine.','Plan general, concepto, mapas estratégicos, secciones y visualizaciones del parque.']),
 entry('parametric','Parametric Design','Structure & fabrication','Design studio',[26],'From crease-folding experiments and physical models to a landscape structure.','Physical model making and development of the individual design proposal.','Group experiments with Chen Xuanjun and Xu Kaiqi; individual proposal by Shuyu Lei.',
 ['参数化设计','结构与建造','从折纸实验与实体模型推演景观构筑物。','实体模型制作及个人方案深化。'],['Diseño paramétrico','Estructura y fabricación','De experimentos de plegado y maquetas a una estructura paisajística.','Maquetas físicas y desarrollo de la propuesta individual.']),
 {...entry('residential','Residential District','Housing & public space','Shenzhen',[27],'A residential district organised around courtyards, community gardens and retained ancestral buildings.','Individual urban design project.','Shuyu Lei',
 ['居住区设计','居住与公共空间','围绕庭院、社区花园与保留祠堂建筑组织居住区。','个人城市设计项目。'],['Distrito residencial','Vivienda y espacio público','Un distrito organizado en torno a patios, jardines comunitarios y edificios ancestrales conservados.','Proyecto individual de diseño urbano.']),image:'portfolio/residential.webp',alt:'Residential district design in Shenzhen from Shuyu Lei’s portfolio'},
 entry('experimental','Experimental Residential District','Housing design','Shenzhen',[28],'Exploring housing types, shared gardens and the relationship between residential buildings and public space.','Individual housing and urban design study.','Shuyu Lei',
 ['实验性居住区','居住设计','探索住宅类型、共享花园与居住建筑和公共空间的关系。','个人居住与城市设计研究。'],['Distrito residencial experimental','Diseño residencial','Exploración de tipologías de vivienda, jardines compartidos y espacio público.','Estudio individual de vivienda y diseño urbano.']),
 entry('container','Modular Housing','Residential architecture','Design studio',[29],'Shipping-container units, flexible apartment layouts and shared gardens as components of high-density housing.','Individual housing design project.','Shuyu Lei',
 ['模块化住宅','居住建筑','通过集装箱单元、灵活户型与共享花园探索高密度居住。','个人住宅设计方案。'],['Vivienda modular','Arquitectura residencial','Unidades de contenedores, plantas flexibles y jardines compartidos para vivienda de alta densidad.','Estudio individual de diseño residencial.']),
 entry('artwork','Painting, Sketching & Photography','Personal work','Shenzhen & Europe',[30,31],'Watercolours, observational sketches and photographs from campus life and travels.','Painting, sketching and photography. The two central watercolour studies on page 30 are copies after Paul Cézanne, as labelled in the original portfolio.','Shuyu Lei',
 ['绘画、速写与摄影','个人作品','校园生活与旅行中的水彩、观察速写和摄影。','绘画、速写与摄影。原作品集第 30 页中间两幅水彩标注为临摹保罗·塞尚。'],['Pintura, dibujo y fotografía','Obra personal','Acuarelas, dibujos de observación y fotografías de la vida en el campus y los viajes.','Pintura, dibujo y fotografía. Las dos acuarelas centrales de la página 30 son copias de Paul Cézanne, identificadas en el portafolio.'])
];
const housing=portfolioProjects.find(p=>p.id==='container');
Object.assign(housing,{
 title:'Housing & community design',topic:'Housing design',pages:[27,28,29],
 image:'portfolio/housing-masterplan.webp',alt:'Residential neighbourhood master plan with courtyards, gardens and retained ancestral buildings',
 deck:'Residential neighbourhoods, shared gardens and modular housing, explored across three design studies.',
 body:'Three student design projects explore housing at neighbourhood and building scales, from courtyards and community gardens to flexible modular apartments.',
 caption:'Residential district master plan, original portfolio page 27; housing studies on pages 27–29.',
 translations:{
 zh:{title:'住房与社区设计',topic:'居住设计',deck:'从居住区、共享花园到模块化住宅，三个不同尺度的设计探索。',body:'三个学生方案探索社区和建筑尺度的居住设计，包括庭院、社区花园与灵活的模块化住宅。'},
 es:{title:'Vivienda y diseño comunitario',topic:'Diseño de vivienda',deck:'Barrios residenciales, jardines compartidos y vivienda modular en tres estudios de diseño.',body:'Tres estudios académicos exploran la vivienda a escala de barrio y edificio, desde patios y jardines hasta apartamentos modulares.'}
 }
});
Object.assign(portfolioProjects.find(p=>p.id==='artwork'),{
 image:'portfolio/artwork-trees.webp',
 alt:'Shuyu Lei watercolour of trees on the Shenzhen University campus',
 caption:'Original campus watercolour from portfolio page 30.'
});
Object.assign(portfolioProjects.find(p=>p.id==='earth-roots'),{
 image:'portfolio/earth-roots-clean.webp'
});
Object.assign(portfolioProjects.find(p=>p.id==='milan'),{image:'portfolio/loop-map.webp'});
// Dates transcribed from the contents page of the original design portfolio.
const projectYears={"smart-community":"2017–2018",landscape:"2017","earth-roots":"2017",serpentine:"2018",milan:"2018",parametric:"2018",residential:"2016–2018",experimental:"2016–2018",container:"2016–2018",artwork:"2016–2018"};
for(const p of portfolioProjects)p.year=projectYears[p.id];
const earthRoots=portfolioProjects.find(p=>p.id==='earth-roots');
Object.assign(earthRoots,{
 place:'Ruichang, Jiangxi, China',
 venue:'Excellent Award (Top 32) & Best Survey Award · 2017 Ruichang L&A Design Star',
 awardTitle:'Excellent Award (Top 32) & Best Survey Award',
 presentationCredit:'This is a group project. For the drawings presented here, I reorganised all the material, redrew selected drawings and added new figures. I independently designed the complete graphic layout of these presentation boards.',
 awardCompetition:'2017 Ruichang L&A Design Star International Design Competition',
 awardDescription:'Awarded to Shenzhen University team 225 for Memory and Skill 6214, a planning proposal for Jiangzhou Shipyard and regional industrial tourism.',
 awardSource:'https://www.aoya-hk.com/index.php?a=show&c=index&catid=9&id=1420&m=content',
 awardLinkLabel:'Competition results',
 authors:'Shuyu Lei, Chen Yunxia, Yang Tingting, Zhang Jingwen and Mai Qingkun. Shenzhen University.'
});
Object.assign(earthRoots.translations.zh,{
 place:'江西瑞昌',
 venue:'优秀小组奖（32强）及最佳场地调研奖 · 2017 瑞昌·奥雅设计之星',
 awardTitle:'优秀小组奖（32强）及最佳场地调研奖',
 presentationCredit:'本项目为团队合作。此处展示的图纸由我在团队成果基础上重新整理，部分图纸由我重绘，并补充了新的图示；整套展示图纸的视觉编排与版式设计均由我独立完成。',
 awardCompetition:'2017 瑞昌·奥雅设计之星国际高校设计大赛',
 awardDescription:'深圳大学第 225 组团队参赛作品《忆·艺 6214——全域工业旅游背景下的江州造船厂规划》获奖。',
 awardLinkLabel:'比赛获奖名单',
 authors:'陈云霞、杨婷婷、张婧雯、雷舒宇、麦青堃（深圳大学）'
});
Object.assign(earthRoots.translations.es,{
 place:'Ruichang, Jiangxi, China',
 venue:'Premio de excelencia (32 mejores equipos) y premio al mejor estudio de campo · Ruichang L&A Design Star 2017',
 awardTitle:'Premio de excelencia (32 mejores equipos) y premio al mejor estudio de campo',
 presentationCredit:'Este es un proyecto de equipo. Para las láminas que se presentan aquí, reorganicé todo el material, redibujé parte de los planos y añadí nuevas figuras. Realicé de forma independiente todo el diseño gráfico y la maquetación de estas láminas.',
 awardCompetition:'Concurso Internacional de Diseño Ruichang L&A Design Star 2017',
 awardDescription:'Premio al equipo 225 de la Universidad de Shenzhen por Memory and Skill 6214, una propuesta de planificación del astillero de Jiangzhou y del turismo industrial regional.',
 awardLinkLabel:'Resultados del concurso',
 authors:'Shuyu Lei, Chen Yunxia, Yang Tingting, Zhang Jingwen y Mai Qingkun. Universidad de Shenzhen.'
});
