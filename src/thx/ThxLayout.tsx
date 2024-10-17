import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Спасибо за участие
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Вы поучаствовали в очень важном исследовании, которое поможет улучшить продукт. Вы – наш герой!
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Пока вы можете ознакомиться со стандартными условиями подписки.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="https://alfa.me/1lM1V9"
        >
          Подробнее
        </ButtonMobile>
      </div>
    </>
  );
};
