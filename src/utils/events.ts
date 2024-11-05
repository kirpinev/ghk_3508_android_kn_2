declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type Payload = {
  cashback_category: string;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbx25u99_WU6T1WzzPlPMx9zlhqzTnivZL5AK4jSHp9U7bBvDHsPNRd75eNVbYAYk5PF/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          ...payload,
          variant: "ghk_3508_android_kn_2",
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
