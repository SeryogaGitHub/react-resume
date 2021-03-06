import React from 'react';
import MapContainer from "../../utils/MapContainer";

const Contacts = (props) => {
  return (
      <main className={'main-content'}>
        <div className="center">
          <h1 className="text-center title-page">
            Контакти
          </h1>

          <div className="pane wow flipInX ">
            <h4>
              <span className="gold-text">Місто проживання: </span>
              Житомир
            </h4>

            <h4>
              <span className="gold-text">Skype: </span>
              serg_uk_zt
            </h4>

            <h4>
              <span className="gold-text">Телефон: </span>
              +380 98 96 96 952
            </h4>

            <h4>
              <span className="gold-text">Email: </span>
              main.email.seryoga@gmail.com
            </h4>

            <h4>
              <span className="gold-text">Робочі години: </span>
              Пн-Пт: 10:00 - 19:00 <br/>
              <span className="gold-text">Для пропозицій від яких не зможу відмовитися, на зв`язку цілодобово :)</span>
            </h4>
          </div>

          <hr/>

          <MapContainer
              zoom={14}
              location={{lat: 50.254556, lng: 28.658730}}
              className={'map'}
          />
        </div>
      </main>
  );
};

export default Contacts;
