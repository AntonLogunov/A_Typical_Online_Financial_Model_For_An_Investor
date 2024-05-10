import React from "react";
import { $store } from "../store/store";
import { useUnit } from "effector-react";
import * as XLSX from "xlsx";
import { useEffect } from "react";
import { addData } from "../store/table";

function Slider_08() {
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
    const scoreDepreciationCharges = (parseFloat(data.investment) / parseFloat(data.durationProject)) 
    const operation0 = netProfit + scoreDepreciationCharges;
    const scoreDiscounting = (parseFloat(data.numberRisk) + parseFloat(data.inflation));

    const theadCell = () => {
        const arr = [];
        for (let i = 0; i < data.durationProject; i++) {
            const el = <td key={i} class="one-line">{i + 1}</td>;
            arr.push(el);
        }
        return arr;
    }
    const cellInvestment = () => {
        const arrbody = [];
        for (let i = 0; i < data.durationProject; i++) {
            const el = <td id={"investment" + `${i}`} class="cell_line"></td>;
            arrbody.push(el);
        }
        return arrbody;
    }

    let sumOperaion = 0;
    const cellOperation = () => {
        const arrbody = [];
        for (let i = 0; i < data.durationProject; i++) {
            const el = <td id={"operation" + `${i}`} class="cell_line">{operation0.toFixed(0)}</td>;
            arrbody.push(el);
            sumOperaion += operation0;
        }
        return arrbody;
    }
    const getSumOperation = () => {
        return sumOperaion.toFixed(2);
    }

    const cellDiscounting = () => {
        const arrbody = [];
        for (let i = 0; i < data.durationProject; i++) {
            const score = 1 / ((1 + (scoreDiscounting / 100)) ** (i + 1));
            const el = <td id={"discounting" + `${i}`} class="cell_line">{score.toFixed(4)}</td>;
            arrbody.push(el);
        }
        return arrbody;
    }

    let sumPotoc = 0;
    const multiplyCellPotoc = () => {
        const operations = cellOperation();
        const discountings = cellDiscounting();

        const arrmain = [];
        for (let i = 0; i < data.durationProject; i++) {
            const operationValue = parseFloat(operations[i].props.children);
            const discountingValue = parseFloat(discountings[i].props.children);
            const result = operationValue * discountingValue;
            arrmain.push(result.toFixed(2));
            sumPotoc += result;
        }

        return arrmain;
    }

    function cellPotoc() {
        const arrbody = multiplyCellPotoc();

        return (
            arrbody.map((value, index) => (
                <td id={"potoc" + `${index}`}>{value}</td>
            ))
        );
    }
    const cellPotocGet = () => {
        return sumPotoc.toFixed(2);
    }
    const PI = () => {
        const npvNumber = NPV();
        const result = npvNumber / parseFloat(data.investment); 
        return result || 0;
    }

    const cellAcccumulatedDiscounting = () => {
        let sum = -parseFloat(data.investment);
        const arrbody = [];
        for (let i = 0; i < data.durationProject; i++) {
            if (i === 0) {
                sum += parseFloat(operation0);
            } else {
                sum += operation0;
            }
            const el = <td id={"acccumulatedDiscounting" + `${i}`} class="cell_line">{sum.toFixed(1)}</td>;
            arrbody.push(el);
        }
        return arrbody;
    }
    const cellAcccumulatedDiscountingData = () => {
        let sum = -parseFloat(data.investment);
        const arrbody = [];
        for (let i = 0; i < data.durationProject; i++) {
            if (i === 0) {
                sum += parseFloat(operation0);
            } else {
                sum += operation0;
            }
            const el = sum.toFixed(1);
            arrbody.push(el);
        }
        return arrbody;
    }

    function NPV() {
        const discountedValueResult = cellAcccumulatedDiscountingData();
        const lastSumValue = discountedValueResult[discountedValueResult.length - 1];
        return lastSumValue;

    }
    function DPP() {
        const cellPotoc = cellPotocGet();
        const result = (parseFloat(data.investment) / cellPotoc) * 12;
        return (result) || 0;
    }

    const handleDownloadXLSX = () => {
        const ws = XLSX.utils.aoa_to_sheet([
            ["Показатели\\Годы", 0, ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => i + 1), 'Сумма'],
            ["Денежный поток от инвестиционной деятельности", -parseInt(data.investment), ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => '')],
            ["Денежный поток от операционной деятельности", '', ...Array.from({ length: parseInt(data.durationProject) }, () => operation0.toFixed(0)), operation0 * data.durationProject],
            ["Коэффициент дисконтирования", '', ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => (operation0 / ((operation0 + scoreDiscounting) ^ i)).toFixed(4))],
            ["Дисконтированный денежный поток", '', ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => multiplyCellPotoc()[i]), cellPotocGet()],
            ["Накопленный дисконтированный денежный поток", -parseInt(data.investment), ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => cellAcccumulatedDiscountingData()[i])]
        ]);

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "InvestData");
        XLSX.writeFile(wb, "invest.xlsx");
    };

    useEffect(() => {
        addData({
            nameTable: 'Оценка проекта',
            dataTable: [
                ["Показатели\\Годы", 0, ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => i + 1), 'Сумма'],
                ["Денежный поток от инвестиционной деятельности", -parseInt(data.investment), ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => '')],
                ["Денежный поток от операционной деятельности", '', ...Array.from({ length: parseInt(data.durationProject) }, () => operation0.toFixed(0)), operation0 * data.durationProject],
                ["Коэффициент дисконтирования", '', ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => (operation0 / ((operation0 + scoreDiscounting) ^ i)).toFixed(4))],
                ["Дисконтированный денежный поток", '', ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => multiplyCellPotoc()[i]), cellPotocGet()],
                ["Накопленный дисконтированный денежный поток", -parseInt(data.investment), ...Array.from({ length: parseInt(data.durationProject) }, (_, i) => cellAcccumulatedDiscountingData()[i])],
                [''],
                ['Чистая дисконтированная стоимость (NPV) (руб.)', NPV()],
                ['Дисконтированный срок окупаемости (DPP) (мес.)', DPP().toFixed(0)],
                ['Индекс прибыльности (PI) (руб.)', PI().toFixed(2)],
            ]
        });
    }, []);

    const checkNPV = NPV() > 1 ? 'green' : 'red';
    const checkPI = PI() > 1 ? 'green' : 'red';
    return (
        <div id="slider_08" class="swiper-slide">
            <p class="thead--text__slider08">Оценка инвестиционной привлекательности проекта</p>
            <div class="slider__09--block">
                <div id="tableRating" class="table__evaluation">
                    <table className="table_score" cellspacing="0" cellpadding="0">
                        <thead>
                            <tr class="table__call--result">
                                <td class="cell--one">Показатели\Годы</td>
                                <td id="startInfest" class="cell_line">0</td>
                                {theadCell()}
                                <td class="cell_line">Сумма</td>
                            </tr>
                        </thead>
                        <tbody class="table__tbody--resul">
                            <tr>
                                <td class="cell--one">Денежный поток от инвестиционной деятельности</td>
                                <td class="cell_line">-{data.investment}</td>
                                {cellInvestment()}
                                <td class="cell_line"></td>
                            </tr>
                            <tr>
                                <td class="table__call--result cell--one">Денежный поток от операционной деятельности</td>
                                <td class="cell_line"></td>
                                {cellOperation()}
                                <td id="potocResult" class="cell_line">{getSumOperation()}</td>
                            </tr>
                            <tr>
                                <td class="table__call--result cell--one">Коэффициент дисконтирования</td>
                                <td class="cell_line"></td>
                                {cellDiscounting()}
                                <td class="cell_line"></td>
                            </tr>
                            <tr>
                                <td class="table__call--result cell--one">Дисконтированный денежный поток</td>
                                <td class="cell_line"></td>
                                {cellPotoc()}
                                <td class="cell_line">{cellPotocGet()}
                                </td>
                            </tr>
                            <tr>
                                <td class=" table__call--result cell--one">Накопленный дисконтированный денежный поток</td>
                                <td class="cell_line">-{data.investment}</td>
                                {cellAcccumulatedDiscounting()}
                                <td class="cell_line"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="block__result">
                    <div class="block">
                        <div class="block__npv">
                            <p class="text__npv">Чистая дисконтированная стоимость (NPV) (руб.)</p>
                            <div id="discountedValue" class={`block__npv--result ${checkNPV}`} >
                                {NPV()}
                            </div>
                        </div>
                        <div class="block__dpp">
                            <p class="text__dpp">Дисконтированный срок окупаемости (DPP) (мес.)</p>
                            <div class="block__dpp--result">
                                {DPP().toFixed(1)}
                            </div>
                        </div>
                        <div class="block__pi">
                            <p class="text__pi">Индекс прибыльности (PI) (%)</p>
                            <div class={`block__pi--result ${checkPI}`}>
                                {PI().toFixed(1)}
                            </div>
                        </div>
                    </div>
                    <div class="help-two">
                        <svg className="svg_style" width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.93182 26.1818V25.9773C7.95455 23.8068 8.18182 22.0795 8.61364 20.7955C9.04545 19.5114 9.65909 18.4716 10.4545 17.6761C11.25 16.8807 12.2045 16.1477 13.3182 15.4773C13.9886 15.0682 14.5909 14.5852 15.125 14.0284C15.6591 13.4602 16.0795 12.8068 16.3864 12.0682C16.7045 11.3295 16.8636 10.5114 16.8636 9.61364C16.8636 8.5 16.6023 7.53409 16.0795 6.71591C15.5568 5.89773 14.858 5.26704 13.983 4.82386C13.108 4.38068 12.1364 4.15909 11.0682 4.15909C10.1364 4.15909 9.23864 4.35227 8.375 4.73864C7.51136 5.125 6.78977 5.73295 6.21023 6.5625C5.63068 7.39204 5.29545 8.47727 5.20455 9.81818H0.909091C1 7.88636 1.5 6.23295 2.40909 4.85795C3.32955 3.48295 4.53977 2.43182 6.03977 1.70454C7.55114 0.977271 9.22727 0.613635 11.0682 0.613635C13.0682 0.613635 14.8068 1.01136 16.2841 1.80682C17.7727 2.60227 18.9205 3.69318 19.7273 5.07954C20.5455 6.46591 20.9545 8.04545 20.9545 9.81818C20.9545 11.0682 20.7614 12.1989 20.375 13.2102C20 14.2216 19.4545 15.125 18.7386 15.9205C18.0341 16.7159 17.1818 17.4205 16.1818 18.0341C15.1818 18.6591 14.3807 19.3182 13.7784 20.0114C13.1761 20.6932 12.7386 21.5057 12.4659 22.4489C12.1932 23.392 12.0455 24.5682 12.0227 25.9773V26.1818H7.93182ZM10.1136 36.2727C9.27273 36.2727 8.55114 35.9716 7.94886 35.3693C7.34659 34.767 7.04545 34.0455 7.04545 33.2045C7.04545 32.3636 7.34659 31.642 7.94886 31.0398C8.55114 30.4375 9.27273 30.1364 10.1136 30.1364C10.9545 30.1364 11.6761 30.4375 12.2784 31.0398C12.8807 31.642 13.1818 32.3636 13.1818 33.2045C13.1818 33.7614 13.0398 34.2727 12.7557 34.7386C12.483 35.2045 12.1136 35.5795 11.6477 35.8636C11.1932 36.1364 10.6818 36.2727 10.1136 36.2727Z" fill="#145134" />
                        </svg>
                        <div class="select-block-two">
                            <p ><b>Чистая дисконтированная стоимость (Net Present Value, NPV)</b> - это финансовый показатель, используемый для оценки инвестиций и принятия решений о том, стоит ли вкладывать деньги в проект.</p>
                            <p class="text-block-two"><b>Дисконтированный срок окупаемости (Discounted Payback Period, DPP)</b> - это метод оценки эффективности инвестиционного проекта, который позволяет определить, через какой период времени окупятся первоначальные инвестиции.</p>
                            <p ><b>Индекс прибыльности (Profitability Index, PI)</b> - это показатель, который используется для оценки эффективности инвестиций и определения, насколько выгодными являются вложения в проект.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div_complete">
                <button onClick={handleDownloadXLSX} className="link_complete">
                    <b className="link_complete">Скачать таблицу</b>
                </button>
            </div>
        </div>
    );
}
export default Slider_08;