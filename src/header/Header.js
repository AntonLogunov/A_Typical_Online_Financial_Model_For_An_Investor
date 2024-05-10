import './Header.css'

import Logo from '../main/img/Logo.png';
import Download from '../main/img/DownLoad.png';
import Share from '../main/img/Share.png';

import { $store } from '../main/store/store';
import { useUnit } from 'effector-react';
import { CSVLink } from "react-csv";
import { $table } from '../main/store/table';

import * as XLSX from 'xlsx';

function Header() {
  const data = useUnit($store);
  const table = useUnit($table);
  // function translateKeys(obj) {
  //   const translation = {
  //     communications: "Коммуникации",
  //     consumables: "Расходные материалы",
  //     costOfProduction: "Стоимость производства",
  //     durationProject: "Продолжительность проекта",
  //     duty: "Обязанность",
  //     furniture: "Мебель",
  //     inflation: "Инфляция",
  //     investment: "Инвестиции",
  //     marketing: "Маркетинг",
  //     name_category: "Категория",
  //     name_form: "Форма",
  //     name_nalog: "Налог",
  //     numberRisk: "Риски",
  //     personal: "Персонал",
  //     procent_category: "Процент категории",
  //     procent_nalog: "Процент налога",
  //     registration: "Регистрация",
  //     rental: "Аренда",
  //     rental_tools: "Аренда инструментов",
  //     technic: "Техника",
  //     volumeOfProduction: "Объем производства",
  //     workPay: "Оплата труда"
  //   };

  //   const translatedObj = {};
  //   for (const key in obj) {
  //     if (translation.hasOwnProperty(key)) {
  //       translatedObj[translation[key]] = obj[key];
  //     }
  //   }
  //   return translatedObj;
  // }
  // const resultData = translateKeys(data);
  return (
    <header className="container_for__header">

      <div className="item__logo">
        <img src={Logo} alt="logo" />
        <p>
          Агентство инновационного и инвестиционного развития города
          Челябинска
        </p>
      </div>
      <div className="item__name">
        <p >Расчет эффективности проекта</p>
      </div>
      <div className="item__button">

        {/* <CSVLink className="item_wrap" data={[resultData]} separator=";" filename={"invest.csv"}>
          <p>Выгрузить</p>
          <img className="HeaderDownLoadImg" src={Download} alt="" />
        </CSVLink> */}
        <div style={data ? {pointerEvents: 'all', filter: 'grayscale(0%)', opacity: '1'} : {pointerEvents: 'none', filter: 'grayscale(100%)', opacity: '.4'}} className="item_wrap" onClick={() => XLSX.writeFile(table, "data_project.xlsx")}>
          Выгрузить
          <img className="HeaderDownLoadImg" src={Download} alt="" />
        </div>
      </div>

    </header>
  )
};
export default Header;