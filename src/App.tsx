import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";
import smart from "./assets/smart.png";
import smile from "./assets/smile.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { PickerButton } from "@alfalab/core-components/picker-button";
import { Status } from "@alfalab/core-components/status";

interface Product {
  title: string;
  text: string;
  image: string;
}

const products: Array<Product> = [
  {
    title: "+1 топовая категория кэшбэка",
    text: "5% на самое популярное",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    text: "Доступ к специальным предложениям",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+1% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

const optionsWithIcons = [
  { key: "Продукты" },
  { key: "Техника" },
  { key: "Одежда" },
  { key: "Авто" },
  { key: "Дом и ремонт" },
  { key: "Маркетплейсы" },
];

const selectedDefaultValue = {
  key: "Выберите категорию",
};

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [label, setLabel] = useState<{ key: string }>(selectedDefaultValue);
  const [category, setCategory] = useState("");

  console.log(label);

  const submit = () => {
    setLoading(true);
    // sendDataToGA({
    //   sub_choice: selectedOption,
    //   sub_hidden: expanded ? "Yes" : "No",
    // });
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Стоимость — 299 ₽ в месяц
          </Typography.Text>
          <PickerButton
            className={appSt.picker}
            options={optionsWithIcons}
            view="secondary"
            label={label?.key}
            onChange={(payload) => {
              setCategory(payload.selected?.key || "");
              setLabel({ key: `Категория: ${payload.selected?.key}` });
            }}
          />
        </div>
        {label.key !== selectedDefaultValue.key && (
          <div className={appSt.subscription}>
            <img src={smile} alt="" width={24} height={24} />
            <Typography.Text
              view="primary-medium"
              className={appSt.subscriptionText}
            >
              Подписка стоит 299 ₽, если тратите с карты 20 000 ₽ в месяц. Если
              тратите меньше — 399 ₽
            </Typography.Text>
          </div>
        )}

        {label.key !== selectedDefaultValue.key && (
          <>
            <Gap size={8} />

            <div className={appSt.products}>
              <Typography.TitleResponsive
                font="system"
                tag="h2"
                weight="bold"
                view="small"
                className={appSt.productsTitle}
              >
                В вашей подписке
              </Typography.TitleResponsive>

              {products.map((product, index) => (
                <div className={appSt.product} key={index}>
                  {index === 0 && (
                    <Status
                      view="contrast"
                      color="red"
                      size={24}
                      uppercase={false}
                      className={appSt.status}
                    >
                      {category}
                    </Status>
                  )}
                  <div>
                    <Typography.TitleResponsive
                      font="system"
                      view="small"
                      weight="bold"
                      tag="h3"
                      className={appSt.productTitle}
                    >
                      {product.title}
                    </Typography.TitleResponsive>

                    <Typography.Text
                      view="secondary-large"
                      tag="p"
                      color="secondary"
                      className={appSt.productText}
                    >
                      {product.text}
                    </Typography.Text>
                  </div>
                  <img
                    src={product.image}
                    alt=""
                    width={96}
                    height={96}
                    className={appSt.productIcon}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {label.key !== selectedDefaultValue.key && (
        <>
          <Gap size={72} />

          <div className={appSt.bottomBtn}>
            <ButtonMobile
              loading={loading}
              block
              view="primary"
              onClick={submit}
            >
              Подключить
            </ButtonMobile>
          </div>
        </>
      )}
    </>
  );
};
