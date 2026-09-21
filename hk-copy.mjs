import {Converter} from './vendor/opencc/full.mjs';
import {hkEditorial} from './hk-editorial.mjs?v=20260921-szu-rating';

const traditional=Converter({from:'cn',to:'hk'});
// Editorial terminology is separate from script conversion and scoped by project.
const phrases=[
 ['包容性公共交通','共融公共交通'],['包容性交通','共融交通'],['包容性出行','共融出行'],
 ['包容環境','共融環境'],['包容性使用','共融使用'],['老齡化','人口老化'],
 ['地理信息系統','地理資訊系統'],['信息','資訊'],['路網','道路網絡'],
 ['客流量','乘客量'],['客流','乘客量'],['旅行時間','行程時間'],['邏輯回歸','邏輯迴歸'],
 ['出行群體','出行群組'],['乘客群體','乘客組別'],['票價群體','票價組別'],
 ['出行特徵調查','交通習慣調查'],['創新科技基金','創新及科技基金'],
 ['氣候響應型','氣候回應型'],['地理信息','地理資訊'],
 ['模塊化','模組化'],['住房與社區設計','住屋及社區設計'],['學術交換','學術交流'],
 ['導師:','導師：'],['港大所屬院系','香港大學院系網頁'],
 ['個性化','個人化'],['自行車','單車'],['騎行','踏單車'],['原居安老','原區安老'],
 ['預計 2027 年 2 月完成','預計於2027年2月完成'],
 ['智能卡與出行數據','智能卡及出行數據'],['GIS 與空間分析','地理資訊系統（GIS）及空間分析'],
 ['問卷與訪談','問卷調查及訪談'],['問卷調查與訪談','問卷調查及訪談'],
 ['個人簡歷','履歷表'],['查看簡歷','查看履歷表'],['簡歷','履歷表'],
 ['聯繫與合作','聯絡與合作'],['課程與專業資格路徑','課程及專業資格途徑'],
 ['作者 / 團隊','作者及團隊'],['發表 / 獎項','發表資料及獎項'],
 ['適老城市','長者友善城市'],['適老公共交通','長者友善公共交通'],
 ['適老可達性','長者出行與可達性'],['適老化程度','長者友善程度'],
 ['適老性','長者友善程度'],['適老社區','長者友善社區'],['適老九龍城','長者友善九龍城'],
 ['適老交通','長者友善交通'],['公共交通導向開發','公共交通導向發展'],
 ['公交導向開發','公共交通導向發展'],['殘障人士','殘疾人士'],['殘障乘客','殘疾乘客'],
 ['自動扶梯','自動扶手電梯'],['扶梯','扶手電梯'],['換乘','轉乘'],
 ['公交車','巴士'],['公交服務','巴士服務'],['默認','預設'],['温','溫'],['閲','閱'],['設置','設定'],['利益相關者','持份者'],['公眾反饋','公眾意見'],['街頭調研','街頭調查']
];
export function hongKongText(text,context=''){
 const edited=hkEditorial.get(text.trim());
 if(edited)return text.replace(text.trim(),edited);
 let result=traditional(text);
 for(const [from,to] of phrases)result=result.split(from).join(to);
 result=result.replace(/(?<!扶手)電梯/g,'升降機');
 result=result.replace(/優化(?!算法|模型|參數|問題|求解)/g,'改善');
 result=result.replace(/香港地鐵/g,'港鐵');
 if(context==='transit'){
  result=result.replace(/地鐵/g,'港鐵').replace(/站點/g,'車站')
   .replace(/車站對/g,'起訖站組合').replace(/工作日早高峯/g,'平日早上繁忙時段')
   .replace(/工作日早高峰/g,'平日早上繁忙時段').replace(/工作日/g,'平日').replace(/進站量/g,'入閘人次');
 }
 if(context==='kowloon')result=result.replace(/老年人/g,'長者');
 // Preserve age-cohort definitions; use the policy term only for people using services.
 result=result.replace(/老年乘客/g,'長者乘客').replace(/老年與殘疾/g,'長者與殘疾');
 result=result.replace(/“/g,'「').replace(/”/g,'」');
 result=result.replace(/(\d{4})\s*年\s*(\d{1,2})\s*月(?:\s*(\d{1,2})\s*日)?/g,(_,y,m,d)=>`${y}年${m}月${d?`${d}日`:''}`);
 if(result==='郵件')result='電郵';
 return result;
}
