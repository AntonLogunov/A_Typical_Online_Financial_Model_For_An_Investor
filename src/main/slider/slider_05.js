import { useEffect } from "react";
import { $store, setStore } from "../store/store";
import { useUnit } from "effector-react";
import { addData } from "../store/table";
function Slider_05(){
    const data = useUnit($store);
    
    const materialCosts = data.consumables * 12;
    const laboCosts = (parseFloat(data.workPay) + parseFloat(data.personal))*12;
    const socialInsurance = data.duty * 0.3;
    const depreciationLease = ((parseFloat(data.technic) + parseFloat(data.furniture)) / 5) + (data.rental_tools * 12);
    const others = parseFloat(data.communications) * 12 + parseFloat(data.marketing) + parseFloat(data.duty) + parseFloat(data.registration);
    const resultExpenses =  (materialCosts+laboCosts+socialInsurance+depreciationLease+others) || 0;

    useEffect(() => {
        addData({
            nameTable: 'Смета затрат',
            dataTable: [
                ['Наименование затрат', 'Cумма в рублях'],
                ['Материальные затраты', materialCosts || 0],
                ['Затраты на оплату труда', laboCosts || 0],
                ['Отчисление на социальное страхование', socialInsurance || 0],
                ['Амортизация/аренда', depreciationLease || 0],
                ['Прочие', others || 0],
                ['Итог', (resultExpenses).toFixed(2) || 0],
            ]
        })
    }, []);

    return(
        <div id="slider_05" class="swiper-slide ">
                <h1 class="h1">Смета затрат</h1>
            <table className="table">
                <thead>
                    <tr className="thead__line">
                        <th class="th_1">Наименование затрат</th>
                        <th class="th_2">Cумма в рублях</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_1">Материальные затраты</td>
                        <td id="materialCosts" class="smeta_result">
                            <p className="number_score">{materialCosts || 0}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="td_1">Затраты на оплату труда</td>
                        <td id="laboCosts" class="smeta_result">
                            <p className="number_score">{laboCosts || 0}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="td_1">Отчисление на социальное страхование</td>
                        <td id="socialInsurance" class="smeta_result">
                            <p className="number_score">{socialInsurance || 0}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="td_1">Амортизация/аренда</td>
                        <td id="depreciationLease" class="smeta_result">
                            <p className="number_score">{depreciationLease || 0}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="td_1">Прочие</td>
                        <td id="others" class="smeta_result">
                            <p className="number_score">{others || 0}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="td_2"><b className="p11">Итог</b></td>
                        <td id="resultExpenses">
                            <b className="number_result">{(resultExpenses).toFixed(2) || 0}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    );
}
export default Slider_05;