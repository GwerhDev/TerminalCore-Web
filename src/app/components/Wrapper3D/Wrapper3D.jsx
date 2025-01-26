import s from './Wrapper3D.module.css';

export const Wrapper3D = (props) => {
  const { image, alt } = props || {};

  return (
    <div className={s.container}>
      <img className={s.image} src={image} alt={alt || ""} />
    </div>
  )
}
