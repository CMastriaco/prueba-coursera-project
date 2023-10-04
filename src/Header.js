import React from 'react';

const Header = () => {
    return (
    <header>
            <section class="title-section">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="reserve">Reserve a table</button>
                </div>
                <div class="title-img">
                    <img src="Image dish.png" alt="dish"/>
                </div>
            </section>
    </header>
    )
}
export default Header;