import { useUnit } from "effector-react";
import { useState } from "react";
import { $store, setStore } from "../store/store";
import { addData } from "../store/table";

function Slider_01(){
   
   const data = useUnit($store);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [focusText, setFocusText] = useState("");
    const [procent, setProcent] = useState("");
    const handleFocus = (industry, text, procent) => {
      setSelectedIndustry(industry);
      setProcent(procent);
      setStore({...data, name_category: text, procent_category: parseInt(procent)});
      addData({nameTable: 'Отрасль', dataTable: [['Отраслевая принадлежность предприятия', text]]});
    };
    return(
        <div id="slider_01" class="swiper-slide ">
             <div class="container_for__section__2">
                 <h1 class="h1_section__2">
                 Выбор отраслевой принадлежности предприятия
                 </h1>  
                 <div class="selection__s2">
                 <div
                    className={`item_category ${selectedIndustry === 'industry1' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry1', 'Промышленность, недвижимость', '28.7')}
                    >
                    <p>Промышленность, недвижимость</p>
                    <p class="hide_procent" id="hide_procent">28.7</p>
                    <svg id="industry1" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                    </svg>
                 </div>
                 <div
                    className={`item_category ${selectedIndustry === 'industry2' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry2', 'Торговля, транспорт', '8.5')}
                    >
                    <p name="name_category">Торговля, транспорт</p>
                    <p class="hide_procent" id="hide_procent">8.5</p>
                    <svg id="industry2" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                    </svg>
                 </div>
                 <div
                    className={`item_category ${selectedIndustry === 'industry3' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry3', 'Информационные технологии,  коммуникационные услуги', '13')}
                    >
                     <p>Информационные технологии,  коммуникационные услуги</p>
                     <p class="hide_procent" id="hide_procent">13</p>
                     <svg id="industry3" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                    </svg>
                 </div>
                 <div
                    className={`item_category ${selectedIndustry === 'industry4' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry4', 'Образование', '5.6')}
                    >
                     <p>Образование</p>
                     <p class="hide_procent" id="hide_procent">5.6</p>
                     <svg id="industry4" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                    </svg>
                 </div>
                 <div
                    className={`item_category ${selectedIndustry === 'industry5' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry5', 'Строительство', '7.1')}
                    >
                     <p>Строительство</p>
                     <p class="hide_procent" id="hide_procent">7.1</p>
                     <svg id="industry5" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                    </svg>
                 </div>
                 <div
                    className={`item_category ${selectedIndustry === 'industry6' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry6', 'Гостиницы и предприятия общественного питания', '5.1')}
                    >
                     <p>Гостиницы и предприятия общественного питания</p>
                     <p class="hide_procent" id="hide_procent">5.1</p>
                     <svg id="industry6" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                    </svg>
                 </div>
                 <div
                    className={`item_category ${selectedIndustry === 'industry7' ? 'focused' : ''}`}
                    tabIndex="0"
                    onFocus={() => handleFocus('industry7', 'Предоставление услуг парикмахерскими и салонами красоты', '20')}
                    >
                     <p>Предоставление услуг парикмахерскими и салонами красоты</p>
                     <p class="hide_procent" id="hide_procent">20</p>
                     <svg id="industry7" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H53V46L0 0Z" fill="#C2D6D2"/>
                     </svg>
                 </div>
                 </div>
             </div>
         </div>
    );
}
export default Slider_01;