import { useUnit } from "effector-react";
import { $store, setStore } from "../store/store";
import { addData } from "../store/table";
import { useEffect } from "react";
function Slider_04() {

    const data = useUnit($store);
    const handleChange = (e) => {
        setStore({ ...data, [e.target.name]: e.target.value });

    }
    const summSlider4 = parseFloat(data.registration) +
        parseFloat(data.duty) + parseFloat(data.technic) +
        parseFloat(data.rental) + parseFloat(data.marketing) +
        parseFloat(data.workPay) + parseFloat(data.furniture) +
        parseFloat(data.consumables) + parseFloat(data.personal) +
        parseFloat(data.rental_tools) +
        parseFloat(data.communications);

    useEffect(() => {
        addData({
            nameTable: 'Стартовые затраты',
            dataTable: [
                ['Наименование начальных затрат', 'Сумма в рублях'],
                ['Регистрация ИП/ООО', data.registration],
                ['Госпошлина', data.duty],
                ['Техника (кассовое оборудование, ноутбуки, принтер и др.)', data.technic],
                ['Аренда помещения', data.rental],
                ['Маркетинг и продвижение (создание сайта, запуск рекламной компании и др.)', data.marketing],
                ['ФОТ заработной  платы', data.workPay],
                ['Приобретение мебели', data.furniture],
                ['Расходные материалы', data.consumables],
                ['Аутсорсинг персонала', data.personal],
                ['Аренда оборудования', data.rental_tools],
                ['Услуги связи и интернета', data.communications],
                ['Итог', summSlider4 || 0],
            ]
        });
    }, [data]);

    return (
        <div id="slider_04" class="swiper-slide ">
            <h1 class="h1">Стартовые затраты</h1>
            <table className="table">
                <thead>
                    <tr className="thead__line">
                        <th class="th_1">Наименование начальных затрат</th>
                        <th class="th_2">Введите сумму в рублях</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_1">Регистрация ИП/ООО</td>
                        <td><input onChange={handleChange} value={data.registration} class="input_in_table pen_img" type="number" name="registration" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Госпошлина</td>
                        <td><input onChange={handleChange} value={data.duty} class="input_in_table pen_img" type="number" name="duty" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Техника (кассовое оборудование, ноутбуки, принтер и др.)</td>
                        <td><input onChange={handleChange} value={data.technic} class="input_in_table pen_img" type="number" name="technic" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Аренда помещения</td>
                        <td><input onChange={handleChange} value={data.rental} class="input_in_table pen_img" type="number" name="rental" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Маркетинг и продвижение (создание сайта, запуск рекламной компании и др.)</td>
                        <td><input onChange={handleChange} value={data.marketing} class="input_in_table pen_img" type="number" name="marketing" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Фонд оплаты труда сотрудников</td>
                        <td><input onChange={handleChange} value={data.workPay} class="input_in_table pen_img" type="number" name="workPay" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Приобретение мебели</td>
                        <td><input onChange={handleChange} value={data.furniture} class="input_in_table pen_img" type="number" name="furniture" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Расходные материалы</td>
                        <td><input onChange={handleChange} value={data.consumables} class="input_in_table pen_img" type="number" name="consumables" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Аутсорсинг персонала</td>
                        <td><input onChange={handleChange} value={data.personal} class="input_in_table pen_img" type="number" name="personal" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Аренда оборудования</td>
                        <td><input onChange={handleChange} value={data.rental_tools} class="input_in_table pen_img" type="number" name="rental_tools" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_1">Услуги связи и интернета</td>
                        <td><input onChange={handleChange} value={data.communications} class="input_in_table pen_img" type="number" name="communications" min="0" /></td>
                    </tr>
                    <tr>
                        <td class="td_2"><b className="p11">Итог</b></td>
                        <td className="p11_result" id="summStartUp">
                            <b>{summSlider4 || 0}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Slider_04;