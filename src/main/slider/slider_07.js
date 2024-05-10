import { useUnit } from "effector-react";
import { $store, setStore } from "../store/store";
import { useEffect } from "react";
import { addData } from "../store/table";

function Slider_07() {
    const data = useUnit($store);
    const handleChange = (e) => {
        setStore({ ...data, [e.target.name]: e.target.value, inflation: '7' });
    }
    const scoreDepreciationCharges = (data.investment / data.durationProject) || 0;
    const scoreDiscounting = (parseFloat(data.numberRisk) + parseFloat(data.inflation)) || 0;

    useEffect(() => {
        addData({
            nameTable: 'Основные показатели проекта',
            dataTable: [
                ['Предполагаемая сумма инвестиций', data.investment],
                ['На сколько лет рассчитан проект', data.durationProject],
                ['Расчет амортизационных отчислений', scoreDepreciationCharges.toFixed(2)],
                [''],
                ['Предполагаемый риск проекта (от 1 до 10)', data.numberRisk],
                ['Расчет ставки дисконтирования', scoreDiscounting.toFixed(2)],
            ]
        });
    }, [data]);

    return (
        <div id="slider_07" class="swiper-slide">
            <p class="thead--text__slider08">Основные показатели проекта</p>
            <div class="form__project">
                <div class="block__02">
                    <div class="cell_v2">
                        <p class="label--text label_v2">Предполагаемая сумма инвестиций</p>
                        <input onChange={handleChange} value={data.investment} class="input--block pen_img" type="number" name="investment" min="0" />
                    </div>
                    <div class="cell_v2">
                        <label class="label--text label_v2">На сколько лет рассчитан Ваш проект?</label>
                        <input onChange={handleChange} value={data.durationProject} class="input--block pen_img" type="number" name="durationProject" min="1" max={10} />
                    </div>
                    <div class="cell_v2">
                        <label class="label--text label_v2">Расчет амортизационных отчислений:</label>
                        <p id="scoreDepreciationCharges" class="p_score">
                            <b>{scoreDepreciationCharges.toFixed(2)}</b>
                        </p>
                    </div>
                </div>
                <div class="block__inflation">

                    <div class="block__02-inflation">
                        <div class="cell_v2">
                            <p class="label--text label_v2">Инфляция (по умолчанию 7%)</p>
                        </div>
                        <div class="cell_v2">
                            <label class="label--text label_v2">Предполагаемый риск проекта (введите число от 1 до 10)</label>
                            <br></br>
                            <input onChange={handleChange} value={data.numberRisk} class="input--block pen_img" type="number" name="numberRisk" min="0" />
                        </div>
                        <div class="cell_v2">
                            <label class="label--text label_v2">Расчет ставки дисконтирования:</label>
                            <p id="scoreDiscounting" class="p_score">
                                <b>{scoreDiscounting.toFixed(2)}</b>
                            </p>
                        </div>
                    </div>
                    <div class="help">
                        <svg className="svg_style" width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.93182 26.1818V25.9773C7.95455 23.8068 8.18182 22.0795 8.61364 20.7955C9.04545 19.5114 9.65909 18.4716 10.4545 17.6761C11.25 16.8807 12.2045 16.1477 13.3182 15.4773C13.9886 15.0682 14.5909 14.5852 15.125 14.0284C15.6591 13.4602 16.0795 12.8068 16.3864 12.0682C16.7045 11.3295 16.8636 10.5114 16.8636 9.61364C16.8636 8.5 16.6023 7.53409 16.0795 6.71591C15.5568 5.89773 14.858 5.26704 13.983 4.82386C13.108 4.38068 12.1364 4.15909 11.0682 4.15909C10.1364 4.15909 9.23864 4.35227 8.375 4.73864C7.51136 5.125 6.78977 5.73295 6.21023 6.5625C5.63068 7.39204 5.29545 8.47727 5.20455 9.81818H0.909091C1 7.88636 1.5 6.23295 2.40909 4.85795C3.32955 3.48295 4.53977 2.43182 6.03977 1.70454C7.55114 0.977271 9.22727 0.613635 11.0682 0.613635C13.0682 0.613635 14.8068 1.01136 16.2841 1.80682C17.7727 2.60227 18.9205 3.69318 19.7273 5.07954C20.5455 6.46591 20.9545 8.04545 20.9545 9.81818C20.9545 11.0682 20.7614 12.1989 20.375 13.2102C20 14.2216 19.4545 15.125 18.7386 15.9205C18.0341 16.7159 17.1818 17.4205 16.1818 18.0341C15.1818 18.6591 14.3807 19.3182 13.7784 20.0114C13.1761 20.6932 12.7386 21.5057 12.4659 22.4489C12.1932 23.392 12.0455 24.5682 12.0227 25.9773V26.1818H7.93182ZM10.1136 36.2727C9.27273 36.2727 8.55114 35.9716 7.94886 35.3693C7.34659 34.767 7.04545 34.0455 7.04545 33.2045C7.04545 32.3636 7.34659 31.642 7.94886 31.0398C8.55114 30.4375 9.27273 30.1364 10.1136 30.1364C10.9545 30.1364 11.6761 30.4375 12.2784 31.0398C12.8807 31.642 13.1818 32.3636 13.1818 33.2045C13.1818 33.7614 13.0398 34.2727 12.7557 34.7386C12.483 35.2045 12.1136 35.5795 11.6477 35.8636C11.1932 36.1364 10.6818 36.2727 10.1136 36.2727Z" fill="#145134" />
                        </svg>
                        <div class="select-block">
                            <p class="text-help"><b>Риски проекта</b> — это любое непредвиденное событие, которое может произойти или не произойти во время реализации намеченной цели компании.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Slider_07;