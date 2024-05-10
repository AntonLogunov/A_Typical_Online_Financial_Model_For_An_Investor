import { useUnit } from "effector-react";
import { $store, setStore } from "../store/store";
import { useEffect } from "react";
import { addData } from "../store/table";

function Slider_03(){
    const data = useUnit($store);
    const handleChange = (e)=>{
        setStore({...data, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        addData({nameTable: 'Предполагаемые данные', dataTable: [
            ['Предполагаемый объем производства (работ/услуг) в месяц', data.volumeOfProduction],
            ['Предполагаемая стоимость продукции (работ/услуг) в рублях', data.costOfProduction],
            ['Расчет предполагаемой выручки в рублях', (parseFloat(data.volumeOfProduction) * parseFloat(data.costOfProduction) * 12) || 0],
        ]});
    }, [data.volumeOfProduction, data.costOfProduction]);

    return(
        <div id="slider_03" class="swiper-slide ">
                <div class="forms">
                    <div class="first_div">
                        <form action="" class="p11">
                            <b><p class="p1">Предполагаемый вами объем производства (работ/услуг) в месяц</p></b>
                            <input onChange={handleChange} value={data.volumeOfProduction} class="input pen_img " type="number" name="volumeOfProduction" min="0"/>
                        </form>
                    </div>
                    
                    <div class="first_div">
                        <form action="" class="p11">
                            <b><p class="p1">Предполагаемая вами стоимость вашей продукции (работ/услуг) в рублях</p></b>
                            <input onChange={handleChange} value={data.costOfProduction}  class="input pen_img" type="number" name="costOfProduction" min="0"/>
                        </form>
                    </div>

                    <div class="div_three">
                        <b className="p11"><p class="p1_result">Расчет предполагаемой выручки в рублях за год</p></b>
                        <b className="PP1">
                            <p className="p10" id="revenue">
                                {(parseFloat(data.volumeOfProduction) * parseFloat(data.costOfProduction) * 12) || 0} 
                            </p>
                        </b>
                    </div>
                </div>
            </div>
    );
}
export default Slider_03;