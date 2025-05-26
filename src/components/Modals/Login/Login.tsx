import { FC, useState } from "react";

import visibleIcon from "../../../assets/img/components/modals/login/visible-icon.svg";
import googleIcon from "../../../assets/img/components/modals/login/google-icon.svg";
import facebookIcon from "../../../assets/img/components/modals/login/facebook-icon.svg";
import { ModalType } from "../../Header/Header";
interface LoginProps {
  closeModal: () => void;
  showTheModal: (modalType: ModalType) => void;
}
const Login: FC<LoginProps> = ({ closeModal, showTheModal }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [numberUser, setUserNumber] = useState<string>("");
  const [passwordUser, setUserPassword] = useState<string>("");

  return (
    <div className="w-full h-full md:h-fit md:w-[328px] px-[16px] md:px-[0] flex flex-col justify-between gap-[24px]">
      <div className="subtitle-blue mt-[16px]">Вхід</div>
      <div className="flex flex-col gap-[12px]">
        <input
          type="text"
          className="border px-[8px] py-[13px] w-[100%] leading-[1]"
          placeholder="Ваш номер телефону"
          id="phone"
          value={numberUser}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <div className="flex border px-[8px] py-[13px] justify-between">
          <input
            type={`${isPasswordVisible ? "password" : "text"}`}
            className="border-none leading-[1]"
            placeholder="Пароль"
            id="password"
            value={passwordUser}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button onClick={() => setIsPasswordVisible((prev) => !prev)}>
            <img src={visibleIcon} alt="" />
          </button>
        </div>
        <p className="link text-right">Забули пароль?</p>
        <button
          className="button button-blue w-[100%]"
          onClick={() => closeModal()}
        >
          Увійти
        </button>
        <div className="flex items-center">
          <div className="h-[0.5px] bg-[var(--gray-scale---20)] w-[100%]"></div>
          <div className="text-[12px] leading-[1.2] text-[var(--gray-scale---20)] text w-[280px] text-center">
            або увійти за допомогою
          </div>
          <div className="h-[0.5px] bg-[var(--gray-scale---20)] w-[100%]"></div>
        </div>
        <div className="flex justify-center gap-x-[16px] md:justify-between text-white text-bold text-[14px]">
          <button className="w-full py-[10px] bg-[#ea4335] hover:bg-[#f54d3d] transition-all flex items-center gap-[12px] rounded-[4px] md:w-[128px] justify-center">
            <img src={googleIcon} alt="" />
            <span>Google</span>
          </button>
          <button className="w-full py-[10px] bg-[#4267b2] hover:bg-[#4971c2] transition-all flex items-center gap-[12px] rounded-[4px] md:w-[128px] justify-center">
            <img src={facebookIcon} alt="" />
            <span>Facebok</span>
          </button>
        </div>
      </div>
      <div className="text text-[12px] leading-[1.2] text-center">
        Немає аккауту?
        <button
          className="text-[--action---secondary] hover:underline ml-[8px]"
          onClick={() => showTheModal("sign-up")}
        >
          Зареєструватися
        </button>
      </div>
    </div>
  );
};

export default Login;
