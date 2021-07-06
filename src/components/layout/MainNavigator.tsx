import React from 'react';
import {Link} from 'react-router-dom';

const MainNavigator = () => {
    return (
        <header >
        <Link to='/'>
        <div >OdonML</div>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/tasks'>Tasks</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigator;
