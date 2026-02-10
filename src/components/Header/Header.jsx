import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <header>
        <div className="up__header">
            <img src="../img/logo.svg" alt="logo" />

            <div className="search">
                <input type="text"  />
            </div>
            <div className="phone">
                <p>Phone</p>
                <p>+980-34984089</p>
            </div>
            <div className="email">
                <p>Email</p>
                <p>waggy@gmail.com</p>
            </div>
        </div>
        <a href="line"></a>
        <div className="down__header">
            <nav className="nav">
                <ul>
                    <li className="nav__item"><a href="">Home</a></li>
                    <li className="nav__item"><a href="">Page</a></li>
                    <li className="nav__item"><a href="">Shop</a></li>
                    <li className="nav__item"><a href="">Blog</a></li>
                    <li className="nav__item"><a href="">Contact</a></li>
                    <li className="nav__item"><a href="">Offers</a></li>
                </ul>
            </nav>
            <div className="nav_icons">
                <ul>
                    <li className="icons__item"><a href=""><img src="../img/account.svg" alt="" /></a></li>
                    <li className="icons__item"><a href=""><img src="../img/heart.svg" alt="" /></a></li>
                    <li className="icons__item"><a href=""><img src="../img/cart.svg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </header>
    
  )
}

export default Header