import { useUnit } from "effector-react";
import { $store } from "../store/store";
import { useEffect } from "react";
import { addData } from "../store/table";

function Slider_06() {
    const data = useUnit($store);
    const estimatedRevenue = (parseFloat(data.volumeOfProduction) * parseFloat(data.costOfProduction) * 12) || 0;
    const plannedCosts = ((data.consumables * 12) +
        ((parseFloat(data.workPay) + parseFloat(data.personal)) * 12) +
        (data.duty * 0.3) +
        (((parseFloat(data.technic) + parseFloat(data.furniture)) / 5) + (data.rental_tools * 12)) +
        (parseFloat(data.communications) * 12 + parseFloat(data.marketing) + parseFloat(data.duty) + parseFloat(data.registration))) || 0;
    const profitBeforeTax = (estimatedRevenue - plannedCosts) || 0;
    const incomeTax = (profitBeforeTax * (data.procent_nalog / 100)) || 0;
    const netProfit = profitBeforeTax - incomeTax;
    const costEffectiveness = ((netProfit / plannedCosts) * 100) || 0;
    const returnOnSales = ((netProfit / estimatedRevenue) * 100) || 0;

    const salesClassName = returnOnSales >= data.procent_category ? 'green' : 'red';

    useEffect(() => {
        addData({
            nameTable: 'Расчет прибыли и рентабельности',
            dataTable: [
                ['Показатели', 'Cумма в рублях'],
                ['Предполагаемая выручка', estimatedRevenue.toFixed(2)],
                ['Планируемые затраты', plannedCosts.toFixed(2)],
                ['Прибыль до налогообложения', profitBeforeTax.toFixed(2)],
                ['Налог на прибыль', incomeTax.toFixed(2)],
                ['Чистая прибыль', netProfit.toFixed(2)],
                ['Рентабельность затрат(%)', costEffectiveness.toFixed(2) + '%'],
                ['Рентабельность продаж(%)', returnOnSales.toFixed(2) + '%'],
            ]
        });
    }, []);

    return (
        <div id="slider_06" class="swiper-slide">
            <table class="table" cellspacing="0" cellpadding="0">
                <caption>Расчет прибыли и рентабельности</caption>
                <thead>
                    <tr className="thead__line">
                        <th class="th_1">Показатели</th>
                        <th class="th_2">Сумма в рублях</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="backgound--table">Предполагаемая выручка</td>
                        <td class="cell--input" id="estimatedRevenue">
                            {estimatedRevenue.toFixed(2)}
                        </td>
                    </tr>
                    <tr>
                        <td class="backgound--table">Планируемые затраты</td>
                        <td class="cell--input" id="plannedCosts">
                            {plannedCosts.toFixed(2)}
                        </td>
                    </tr>
                    <tr>
                        <td class="backgound--table">Прибыль до налогообложения</td>
                        <td class="cell--input" id="profitBeforeTax">
                            {profitBeforeTax.toFixed(2)}
                        </td>
                    </tr>
                    <tr>
                        <td class="backgound--table">Налог на прибыль</td>
                        <td class="cell--input" id="incomeTax">
                            {incomeTax.toFixed(2)}
                        </td>
                    </tr>
                    <tr>
                        <td class="backgound--table">Чистая прибыль</td>
                        <td class="cell--input" id="netProfit">
                            {netProfit.toFixed(2)}
                        </td>
                    </tr>
                    <tr>
                        <td class="backgound--table">Рентабельность затрат(%)</td>
                        <td class="cell--input" id="costEffectiveness">
                            <b class={`cell--input-result ${salesClassName}`}>{costEffectiveness.toFixed(2)} %</b>
                        </td>
                    </tr>
                    <tr>
                        <td class="backgound--table">Рентабельность продаж(%)</td>
                        <td class={`cell--input ${salesClassName}`} id="returnOnSales">
                            <b class={`cell--input-result ${salesClassName}`}>{returnOnSales.toFixed(2)} %</b>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Slider_06;