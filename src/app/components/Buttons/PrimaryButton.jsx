import s from "./PrimaryButton.module.css";

export const PrimaryButton = (props) => {
  const { text, onClick, href, disabled } = props || {};

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <>
      {
        href
          ?
          <a disabled={disabled} href={href}>
            <button disabled={disabled} className={s.container}>
              {text}
            </button>
          </a>
          :
          <button disabled={disabled} onClick={handleClick} className={s.container}>
            {text}
          </button>
      }
    </>
  )
}