import s from "./SecondaryButton.module.css";

export const SecondaryButton = (props) => {
  const { text, onClick, href } = props || {};

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <>
      {
        href
          ?
          <a href={href}>
            <button className={s.container}>
              {text}
            </button>
          </a>
          :
          <button onClick={handleClick} className={s.container}>
            {text}
          </button>
      }
    </>
  )
}