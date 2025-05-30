import { FC, useState } from "react";

const Tab3: FC<{ office: string }> = ({ office }) => {
  const [deliveryType, setDeliveryType] = useState([
    { option: "Доставка у відділення", selected: false },
    { option: "Доставка кур'єром", selected: false },
  ]);
  const [isOficcesOpen, setIsOficcesOpen] = useState<boolean>(false);
  const [localOffice, setLocalOffice] = useState<string>("");
  const [localOffices, setLocalOffices] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  // const onChangeLocalOffice = (value: string) => {
  //   setLocalOffice(value);
  // };
  const onClickLocalOffice = (index: number) => {
    setLocalOffices((prevArray) =>
      prevArray.map((item, i) => (i === index ? !item : item))
    );
    setLocalOffice(`Віділення №${index + 1}`);
  };
  return (
    <div className="flex flex-col gap-[14px]">
      {deliveryType.map((option, index) => (
        <div className="" key={index}>
          <div className="flex gap-[8px]">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={deliveryType[index].selected}
                onChange={() =>
                  setDeliveryType((prevItems) =>
                    prevItems.map((item, i) =>
                      i === index
                        ? { ...item, selected: true }
                        : { ...item, selected: false }
                    )
                  )
                }
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              <span className="ml-[12px] purchase__subtitle">
                {option.option}
              </span>
            </label>
          </div>
          {index === 0 && deliveryType[0].selected && (
            <div
              className="relative"
              onMouseLeave={() => setIsOficcesOpen(false)}
            >
              <div className="text-[var(--dark-grey)] my-[12px]">
                Виберіть підходяще віділення
              </div>
              <div
                className="flex justify-between border py-[13px] px-[8px] rounded-[4px] "
                onClick={() => setIsOficcesOpen((prev) => !prev)}
              >
                <input
                  type="text"
                  className="border-none"
                  placeholder={`Віділення ${office} `}
                  value={localOffice}
                  onChange={(e) => setLocalOffice(e.target.value)}
                />
                <button className="pl-[30px]">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isOficcesOpen && (
                <div className="absolute bg-white z-20 w-[100%] rounded-[4px] border">
                  {localOffices.map((_, index) => (
                    <p
                      className="paddings bg-[white] hover:bg-[--gray-scale---10] text-[var(--dark-grey)] cursor-pointer "
                      key={index}
                      onClick={() => onClickLocalOffice(index)}
                    >
                      Віділення №{index + 1}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
          {index === 1 && deliveryType[1].selected && (
            <div className="mt-[12px] ml-[32px] max-w-[404px]">
              <p className="text-[var(--dark-grey)] mb-[12px]">
                Введіть вашу адресу
              </p>
              <div className="flex gap-[16px]">
                <input
                  type="text"
                  placeholder="Вулиця"
                  className="paddings border w-[194px]"
                />
                <input
                  type="text"
                  placeholder="Дім"
                  className="paddings border w-[89px]"
                />
                <input
                  type="text"
                  placeholder="Квартира"
                  className="paddings border w-[89px]"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tab3;
