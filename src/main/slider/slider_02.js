import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { $store, setStore } from "../store/store";
import { addData } from "../store/table";

function Slider_02() {

    const data = useUnit($store);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [focusText, setFocusText] = useState("");

    const [textIndustry, setTextIndustry] = useState('');
    const [textNalog, setTextNalog] = useState('');

    const handleFocus = (industry, text) => {
        setSelectedIndustry(industry);
        setTextIndustry(text)
        setStore({ ...data, name_form: text });
    };
    const handleBlur = () => {
        setSelectedIndustry(null);
        setFocusText("");
    };

    const [procentNalog, setProcentNalog] = useState("");
    const [selectedIndustryNalog, setSelectedIndustryNalog] = useState(null);
    const handleFocusNalog = (nalog, text, procent) => {
        setSelectedIndustryNalog(nalog);
        setTextNalog(text + ' ' + procent + '%');
        setStore({ ...data, name_nalog: text, procent_nalog: procent });
    };

    useEffect(() => {
        addData({nameTable: 'Налоги', dataTable: [['Ставка налогооблажения', textIndustry], ['Система налогообложения', textNalog.toUpperCase()]]});
    }, [textIndustry, textNalog]);

    return (
        <div id="slider_02" class="swiper-slide ">
            <div class="container_for__section__3">
                <div class="selection__s3">
                    <h1 class="h1_section__3">Ставка налогооблажения</h1>
                    <div
                        className={`item_grid2__s3 item_grid_form ${selectedIndustry === 'industry8' ? 'focused' : ''}`}
                        tabIndex="0"
                        onFocus={() => handleFocus('industry8', 'Индивидуальный предприниматель')}
                    // onBlur={handleBlur}
                    >
                        <p>Индивидуальный предприниматель</p>
                        <svg id="industry8" className="svg1" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H53V46L0 0Z" fill="#C2D6D2" />
                        </svg>
                    </div>
                    <div
                        className={`item_grid2__s3 item_grid_form ${selectedIndustry === 'industry9' ? 'focused' : ''}`}
                        tabIndex="0"
                        onFocus={() => handleFocus('industry9', 'Общество с ограниченной ответственностью')}
                    // onBlur={handleBlur}
                    >
                        <p>Общество с ограниченной ответственностью</p>
                        <svg id="industry9" className="svg1" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H53V46L0 0Z" fill="#C2D6D2" />
                        </svg>
                    </div>
                    <div
                        className={`item_grid2__s3 item_grid_form ${selectedIndustry === 'industry10' ? 'focused' : ''}`}
                        tabIndex="0"
                        onFocus={() => handleFocus('industry10', 'Самозанятые')}
                    // onBlur={handleBlur}
                    >
                        <p>Самозанятые</p>
                        <svg id="industry10" className="svg1" width="40" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H53V46L0 0Z" fill="#C2D6D2" />
                        </svg>
                    </div>
                </div>

                <h1 class="h1_2_section__3">Система налогообложения</h1>
                <div class="selection2__s3">
                    <div
                        className={`item_grid2_1 item_grid_2 ${selectedIndustryNalog === 'nalog1' ? 'item_grid-active' : ''}`}
                        tabindex="0"

                        onFocus={() => handleFocusNalog('nalog1', 'ндс', '20')}
                    //onBlur={handleBlurNalog}
                    >
                        <p className="tax_name">НДС</p>
                        <p id="nalog1" class="p_s3_procents">20%</p>
                    </div>
                    <div
                        className={`item_grid2_1 item_grid_2 ${selectedIndustryNalog === 'nalog2' ? 'item_grid-active' : ''}`}
                        tabindex="0"

                        onFocus={() => handleFocusNalog('nalog2', 'усн', '6')}
                    //onBlur={handleBlurNalog}
                    >
                        <p className="tax_name">УСН</p>
                        <p id="nalog2" class="p_s3_procents">6%</p>
                    </div>
                    <div
                        className={`item_grid2_1 item_grid_2 ${selectedIndustryNalog === 'nalog3' ? 'item_grid-active' : ''}`}
                        tabindex="0"

                        onFocus={() => handleFocusNalog('nalog3', 'усн', '15')}
                    //onBlur={handleBlurNalog}
                    >
                        <p className="tax_name">УСН</p>
                        <p id="nalog3" class="p_s3_procents">15%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider_02;