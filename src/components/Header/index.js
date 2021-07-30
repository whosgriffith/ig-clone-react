import React from 'react'
import './style.css'

const LOGO_INSTAGRAM = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
const HOME_ICON = "https://img.icons8.com/fluency-systems-filled/48/000000/home.png"
const DEFAULT_PROFILE = "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"

export const Header = function() {
    return (
        <ul className="header">
            <li className="logo"><img src={ LOGO_INSTAGRAM } alt="Instagram" /></li>
            <div>
            <li className="menu__element"><img className="header__icon" src={ HOME_ICON } alt="Homepage"/></li>
            <li className="menu__element"><img className="header__icon header__icon--profile" src={ DEFAULT_PROFILE } alt="Profile" /></li>
            </div>
        </ul>
    )
}