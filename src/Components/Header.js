import React, {useRef} from 'react'

const Header = ( {setSearchTag}) => {
    const inputRef = useRef()

    const search = () => {
        setSearchTag(inputRef.current.value)
    }

    return (
        <div className="header">
            <div className="header__wrapper">
                <h1>Notes</h1>
                <div className="header__search">
                    <input className="header__input" type="text" 
                        placeholder="Поиск по тегу"
                        ref={inputRef}
                    />
                    <button className="header__btn" onClick={search}>
                        Поиск
                    </button>
                </div>
                
            </div>
      
        </div>
    )
}

export default Header
