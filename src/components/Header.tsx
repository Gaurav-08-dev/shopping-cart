import { ReactElement } from "react"

type PropsType={
  viewCart:boolean,
  setViewCart:React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart,setViewCart}:PropsType): ReactElement => {

  const content=(
    <header className="header">
      <div className="header__title-bar">
        <h1>Systumm Co.</h1>
        <div className="header__price-box">
          <p>Total Items:</p>
          <p>Total Price:</p>
        </div>
      </div>
    </header>
  )
  return (
    <div>Header</div>
  )
}

export default Header