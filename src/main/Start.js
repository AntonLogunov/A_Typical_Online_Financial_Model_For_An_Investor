import '../css/Start.css';
import {Link} from 'react-router-dom';
import Header from '../header/Header';

function Start(){
    return(
            <div className='div__root'>
                <Header/>
                <section className="section_screen">
                    <div className="container_forsection1">
                      <h1 className="h1_section__1">
                        Сервис предназначен для расчета эффективности деятельности нового
                        предприятия или моделирования деятельности уже существующей
                        организации
                      </h1>

                      <div className="wrap_button">
                        <Link className='button_content' to='/Main'>
                            Начнем
                        </Link>
                      </div>
                    </div>
                </section>
            </div>
    )
}

export default Start;